<template>
  <div class="min-h-screen flex flex-col">
    <SiteHeader />
    <div class="flex-1 bg-slate-50">
      <div class="mx-auto w-full max-w-[1500px] md:w-[80%] md:min-w-[1200px] px-4 md:px-0 py-8">
        <div class="mb-6">
          <h1 class="text-2xl font-semibold text-slate-900 mb-4">购物车</h1>
          <div class="flex gap-0 border-b border-slate-200">
            <button
              @click="cartType = 'dropship'"
              :class="[
                'px-6 py-3 font-medium border-b-2 transition',
                cartType === 'dropship'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              ]"
            >
              一件代发
            </button>
            <button
              @click="cartType = 'wholesale'"
              :class="[
                'px-6 py-3 font-medium border-b-2 transition',
                cartType === 'wholesale'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              ]"
            >
              批发
            </button>
          </div>
        </div>

        <el-row :gutter="20">
          <el-col :xs="24" :md="19">
            <div class="bg-white rounded-lg border border-slate-200">
              <div class="grid grid-cols-12 gap-4 p-4 bg-slate-50 border-b border-slate-200 text-sm font-medium text-slate-700">
                <div class="col-span-1">
                  <input type="checkbox" v-model="selectAll" @change="toggleSelectAll" class="w-4 h-4" />
                </div>
                <div class="col-span-6">商品</div>
                <div class="col-span-2">价格</div>
                <div class="col-span-2">数量</div>
                <div class="col-span-1">操作</div>
              </div>

              <div v-if="cartItems.length > 0">
                <div
                  v-for="(item, index) in cartItems"
                  :key="index"
                  :class="[
                    'grid grid-cols-12 gap-4 p-4 border-b border-slate-200 items-center text-sm',
                    index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                  ]"
                >
                  <div class="col-span-1">
                    <input type="checkbox" v-model="item.selected" class="w-4 h-4" />
                  </div>

                  <div class="col-span-6 flex gap-4">
                    <div class="w-20 h-20 bg-slate-100 rounded flex-shrink-0 overflow-hidden">
                      <img :src="item.image" :alt="item.name" class="w-full h-full object-cover" />
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="text-slate-900 font-medium truncate">{{ item.name }}</div>
                      <div class="text-slate-600 text-xs mt-1">SKU: {{ item.sku }}</div>
                      <div class="text-slate-600 text-xs mt-1">运费区：{{ item.region }}</div>
                      <div class="text-slate-600 text-xs mt-2">
                        <span
                          v-if="item.shipping"
                          class="inline-block bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs"
                        >
                          {{ item.shipping }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="col-span-2">
                    <div class="text-primary font-semibold">{{ item.price }}</div>
                    <div class="text-slate-500 line-through text-xs">{{ item.originalPrice }}</div>
                  </div>

                  <div class="col-span-2">
                    <div class="flex items-center justify-center border border-slate-300 rounded w-16">
                      <button @click="decrementQty(index)" class="px-1 py-0.5 text-slate-600 hover:bg-slate-50 text-center">
                        -
                      </button>
                      <input
                        v-model.number="item.quantity"
                        type="number"
                        class="w-8 text-center border-l border-r border-slate-300 py-0.5 outline-none text-sm h-full"
                        @change="updateQuantity(index, item.quantity)"
                      />
                      <button @click="incrementQty(index)" class="px-1 py-0.5 text-slate-600 hover:bg-slate-50 text-center">
                        +
                      </button>
                    </div>
                  </div>

                  <div class="col-span-1 text-center">
                    <button @click="removeItem(index)" class="text-primary hover:text-primary text-sm">
                      ���除
                    </button>
                  </div>
                </div>
              </div>
              <div v-else class="p-8 text-center">
                <el-empty description="购物车为空" />
              </div>
            </div>
          </el-col>

          <el-col :xs="24" :md="5">
            <div class="bg-white rounded-lg border border-slate-200 p-6 sticky top-6">
              <h3 class="text-lg font-semibold text-slate-900 mb-5">合计</h3>

              <div class="space-y-3 mb-6 text-sm">
                <div class="flex justify-between">
                  <span class="text-slate-600">商品合计：</span>
                  <span class="text-slate-900 font-medium">{{ productTotal }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-600">商品运费：</span>
                  <span class="text-slate-900 font-medium">0.00</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-600">运费优惠：</span>
                  <span class="text-slate-900 font-medium">-0.00</span>
                </div>
                <div class="flex justify-between border-t border-slate-200 pt-3">
                  <span class="text-slate-600">应付费用：</span>
                  <span class="text-slate-900 font-medium">{{ productTotal }}</span>
                </div>
              </div>

              <div class="text-center py-4 mb-6">
                <div class="text-xs text-slate-600 mb-1">需支付金额</div>
                <div class="text-4xl font-bold text-primary">{{ productTotal }}</div>
              </div>

              <div class="space-y-2 mb-6 text-sm border-t border-slate-200 pt-4">
                <div class="flex justify-between">
                  <span class="text-slate-600">应付费用：</span>
                  <span class="text-slate-900 font-medium">{{ productTotal }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-600">应收费用：</span>
                  <span class="text-slate-900 font-medium">{{ productTotal }}</span>
                </div>
              </div>

              <div class="flex gap-2">
                <el-button type="primary" size="large" class="flex-1">立即购买</el-button>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'

interface CartItem {
  id: string
  name: string
  sku: string
  image: string
  price: string
  originalPrice: string
  quantity: number
  region: string
  shipping?: string
  selected: boolean
}

const cartType = ref<'dropship' | 'wholesale'>('dropship')

const cartItems = ref([
  {
    id: '1',
    name: '副驾驶 Mirror Driver Side FIT for Hyundai Kona II On Host Edition Night SEL Plus Sport',
    sku: '75682614',
    image: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202308/4695cd17-10c7-473c-960a-fbb9d18c4a90.Jpeg',
    price: 'USD 82.64',
    originalPrice: 'USD 92.64',
    quantity: 1,
    region: 'US',
    shipping: '运送方式',
    selected: false,
  },
  {
    id: '2',
    name: '【防摔盔】双4+500 新型户外防摔硅胶头盔 220V 220V 新型户外防摔硅胶头盔 部件 电话',
    sku: '8872641',
    image: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2024/202410/890f8f68-c40a-40c5-a4f3-017cf297c900.Jpeg',
    price: 'GBP 33.80',
    originalPrice: 'GBP 43.80',
    quantity: 1,
    region: 'UK',
    shipping: '运送方式',
    selected: false,
  },
  {
    id: '3',
    name: "10''30 白色 STUS 吸盘 油漆 镜面 PER 焊接 NO",
    sku: '5692786',
    image: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2025/202508/d41d793d-cf75-4653-8470-a715d6e9f12f.Jpeg',
    price: 'USD 78.20',
    originalPrice: 'USD 88.20',
    quantity: 1,
    region: 'US',
    shipping: '运送方式',
    selected: false,
  },
])

const selectAll = ref(false)

const productTotal = computed(() => {
  let total = 0
  cartItems.value.forEach((item) => {
    const priceStr = item.price.replace(/[^0-9.]/g, '')
    const price = parseFloat(priceStr)
    if (!isNaN(price)) {
      total += price * item.quantity
    }
  })
  return `USD ${total.toFixed(2)}`
})

const toggleSelectAll = () => {
  cartItems.value.forEach((item) => {
    item.selected = selectAll.value
  })
}

const incrementQty = (index: number) => {
  cartItems.value[index].quantity++
}

const decrementQty = (index: number) => {
  if (cartItems.value[index].quantity > 1) {
    cartItems.value[index].quantity--
  }
}

const updateQuantity = (index: number, qty: number) => {
  if (qty < 1) {
    cartItems.value[index].quantity = 1
  }
}

const removeItem = (index: number) => {
  cartItems.value.splice(index, 1)
}

const goHome = () => {
  window.location.href = '/'
}
</script>

<style scoped>
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}
</style>
