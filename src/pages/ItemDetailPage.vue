<template>
  <div class="min-h-screen flex flex-col bg-white">
    <SiteHeader />

    <main class="flex-1">
      <div class="location-bar bg-slate-50 border-b border-slate-200">
        <div class="mx-auto w-full max-w-[1500px] md:w-[80%] md:min-w-[1200px] px-4 md:px-0 py-2">
          <nav class="text-sm text-slate-600">
            <a href="/" class="hover:text-primary">首页</a>
            <span class="mx-1">&gt;</span>
            <a href="#" class="hover:text-primary">{{ product?.category }}</a>
            <span class="mx-1">&gt;</span>
            <a href="#" class="hover:text-primary">{{ product?.subcategory }}</a>
            <span class="mx-1">&gt;</span>
            <span class="text-slate-900">{{ product?.title }}</span>
          </nav>
        </div>
      </div>

      <div class="mx-auto w-full max-w-[1500px] md:w-[80%] md:min-w-[1200px] px-4 md:px-0 py-4">
        <div class="bg-blue-50 border border-blue-200 rounded p-4 flex gap-3">
          <div class="text-blue-600 flex-shrink-0">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zm-11-1a1 1 0 11-2 0 1 1 0 012 0zM8 7a1 1 0 000 2h6a1 1 0 000-2H8zm0 4a1 1 0 000 2h3a1 1 0 000-2H8z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="text-sm text-blue-800">
            <strong>重要提醒：</strong> 本平台所有商品均为海外仓存储，支持一件代发。
            <a href="#" class="text-primary hover:underline">自提功能-操作指引</a>
          </div>
        </div>
      </div>

      <div class="mx-auto w-full max-w-[1500px] md:w-[80%] md:min-w-[1200px] px-4 md:px-0 pb-8">
        <div class="grid grid-cols-12 gap-8">
          <div class="col-span-5 lg:col-span-5">
            <div class="bg-slate-100 rounded mb-4 overflow-hidden flex items-center justify-center" style="height: 500px">
              <img v-if="selectedImage" :src="selectedImage" :alt="product?.title" @error="onImgError" class="w-full h-full object-contain" />
            </div>
            <div class="flex gap-2 overflow-x-auto pb-2">
              <button v-for="(img, idx) in product?.images" :key="idx" @click="selectedImageIndex = idx" :class="['w-20 h-20 rounded border flex-shrink-0 overflow-hidden', idx === selectedImageIndex ? 'border-2 border-primary' : 'border border-slate-200 hover:border-primary']">
                <img :src="img.url" :alt="img.alt" @error="onImgError" class="w-full h-full object-cover" />
              </button>
            </div>
          </div>

          <div class="col-span-7 lg:col-span-7">
            <div class="mb-4">
              <h1 class="text-xl font-bold text-slate-900 mb-2 leading-snug">{{ product?.title }}</h1>
              <p class="text-xs text-slate-500 mb-3">{{ product?.titleEn }}</p>
              <div class="flex flex-wrap gap-6 text-sm text-slate-700 pb-3 border-b border-slate-200">
                <div><span class="text-slate-500 text-xs">SKU:</span><span class="ml-2 font-bold text-slate-900">{{ product?.sku }}</span></div>
                <div><span class="text-slate-500 text-xs">SPU:</span><span class="ml-2 font-bold text-slate-900">{{ product?.spu }}</span></div>
                <div><span class="text-slate-500 text-xs">首次上架:</span><span class="ml-2 font-bold text-slate-900">{{ product?.publishDate }}</span></div>
              </div>
            </div>

            <div class="border border-slate-200 rounded-md p-5 mb-6 bg-white">
              <div class="flex items-center gap-2 mb-3 border-b border-slate-200 pb-2">
                <button @click="purchaseMode = 'dropship'" :class="purchaseMode === 'dropship' ? 'text-primary border-primary' : 'text-slate-600 border-transparent'" class="px-3 py-1.5 font-semibold border-b-2">一件代发</button>
                <button @click="purchaseMode = 'factory'" :class="purchaseMode === 'factory' ? 'text-primary border-primary' : 'text-slate-600 border-transparent'" class="px-3 py-1.5 font-semibold border-b-2">工厂直采</button>
                <div class="ml-auto text-xs text-slate-500">发货仓：<span class="text-slate-900 font-semibold">{{ product?.logistics?.[0]?.warehouse || '—' }}</span></div>
              </div>

              <div class="text-xs text-slate-500 mb-3">当前无会员折扣</div>

              <div v-if="purchaseMode === 'dropship'" class="space-y-3">
                <div class="flex items-center gap-4"><div class="w-20 text-slate-700">采购券：</div><div class="flex-1 text-slate-700">请<a href="/login" class="text-primary hover:underline">登录</a>后查看采购券</div></div>
                <div class="flex items-center gap-4"><div class="w-20 text-slate-700">仓库类型：</div><div class="flex-1 text-slate-700">SY认证仓（第三方仓发货）</div></div>
                <div class="flex items-center gap-4"><div class="w-20 text-slate-700">服务说明：</div><div class="flex items-center gap-2 flex-wrap"><span class="px-2 py-0.5 text-xs rounded bg-green-50 text-green-700 border border-green-200">质保</span><span class="px-2 py-0.5 text-xs rounded bg-green-50 text-green-700 border border-green-200">直退</span><span class="px-2 py-0.5 text-xs rounded bg-green-50 text-green-700 border border-green-200">包邮</span><span class="px-2 py-0.5 text-xs rounded bg-green-50 text-green-700 border border-green-200">保障服务</span></div></div>
                <div class="flex items-center gap-4"><div class="w-20 text-slate-700">颜色：</div><div class="flex items-center gap-2"><button aria-label="White" @click="selectedColor = 'White'" :class="selectedColor === 'White' ? 'ring-2 ring-primary' : ''" class="w-6 h-6 rounded border border-slate-300 bg-white"></button><button aria-label="Black" @click="selectedColor = 'Black'" :class="selectedColor === 'Black' ? 'ring-2 ring-primary' : ''" class="w-6 h-6 rounded border border-slate-300 bg-black"></button></div></div>
                <div class="flex items-center gap-4"><div class="w-20 text-slate-700">尺寸：</div><div class="flex gap-2"><button v-for="size in ['4 Drawers','3 Drawers']" :key="size" @click="selectedSize = size" :class="['px-3 py-1.5 rounded border-2 text-sm', selectedSize === size ? 'border-primary text-primary bg-red-50' : 'border-slate-200 text-slate-700 hover:border-slate-300']">{{ size }}</button></div></div>
                <div class="flex items-center gap-4"><div class="w-20 text-slate-700">发货区域：</div><div class="flex items-center gap-2"><span class="inline-flex items-center px-2 py-0.5 rounded border text-sm border-slate-300 text-slate-700">{{ currentLogistics?.region || '—' }}</span></div></div>
                <div class="flex items-center gap-4"><div class="w-20 text-slate-700">发货物流：</div><div class="flex-1 max-w-xs"><select v-model="shipMethod" class="w-full border border-slate-300 rounded px-3 py-2 text-sm"><option value="standard">Standard Shipping</option><option value="pickup">Self Pickup</option></select></div></div>
                <div class="flex items-center gap-4"><div class="w-20 text-slate-700">选择数量：</div><div class="flex items-center gap-2 border border-slate-300 rounded"><button @click="quantity > 1 && quantity--" class="px-3 py-1 text-slate-600 hover:text-slate-900">−</button><input v-model.number="quantity" type="number" class="w-12 text-center border-0 focus:outline-none" min="1" /><button @click="quantity++" class="px-3 py-1 text-slate-600 hover:text-slate-900">+</button></div></div>
                <div class="grid grid-cols-4 gap-3 pt-2"><button class="px-4 py-3 bg-orange-500 text-white font-bold rounded hover:opacity-90 transition" @click="placeOrder">立即购买</button><button class="px-4 py-3 bg-primary text-white font-bold rounded hover:opacity-90 transition" @click="addToCart">加入购物车</button><button class="px-4 py-3 bg-fuchsia-600 text-white font-bold rounded hover:opacity-90 transition relative">一键刊登<span class="absolute -top-1 -right-1 text-[10px] bg-white text-fuchsia-600 border border-fuchsia-600 rounded px-1">免费</span></button><button class="px-4 py-3 bg-white border border-slate-300 text-slate-700 rounded hover:border-primary hover:text-primary">❤</button></div>
                <div class="flex items-center gap-6 text-sm text-slate-600 pt-3"><a href="#" class="hover:text-primary">价格反馈</a></div>
              </div>

              <div v-else class="space-y-4">
                <div class="flex items-center gap-4"><div class="w-24 text-slate-700">联系人姓名：</div><input v-model.trim="contactName" type="text" placeholder="请输入联系人姓名" class="flex-1 border border-slate-300 rounded px-3 py-2 text-sm" /></div>
                <div class="flex items-center gap-4"><div class="w-24 text-slate-700">联系电话：</div><input v-model.trim="contactPhone" type="tel" placeholder="请输入联系电话" class="flex-1 border border-slate-300 rounded px-3 py-2 text-sm" /></div>
                <div class="flex items-center gap-4"><div class="w-24 text-slate-700">直采数量：</div><input v-model.number="factoryQty" type="number" min="1" placeholder="请输入直采数量" class="flex-1 border border-slate-300 rounded px-3 py-2 text-sm" /></div>
                <div class="flex items-start gap-4"><div class="w-24 text-slate-700">需求描述：</div><textarea v-model.trim="factoryRemark" rows="4" placeholder="请输入需求描述" class="flex-1 border border-slate-300 rounded px-3 py-2 text-sm"></textarea></div>
                <div class="flex items-center gap-4"><div class="w-24 text-slate-700">附件：</div><div class="flex items-center gap-3"><label class="inline-flex items-center gap-2 px-3 py-2 border border-slate-300 rounded cursor-pointer bg-slate-50 hover:bg-slate-100 text-sm"><input type="file" class="hidden" @change="onFactoryFileChange" accept=".jpg,.jpeg,.png,.pdf,.xls,.xlsx,.doc,.docx,.rar,.zip,.7z" /><span>上传</span></label><span class="text-xs text-slate-500">支持JPG、JPEG、PNG、PDF、EXCEL、WORD、RAR、ZIP、7z</span><span v-if="factoryFileName" class="text-xs text-slate-600">已选择：{{ factoryFileName }}</span></div></div>
                <div><button class="px-6 py-2 bg-primary text-white font-bold rounded hover:opacity-90 transition" @click="submitFactory">确定</button></div>
              </div>
            </div>

            <div class="border-t border-slate-200">
              <div class="mx-auto w-full max-w-[1500px] md:w-[80%] md:min-w-[1200px] px-0">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-slate-200">
        <div class="mx-auto w-full max-w-[1500px] md:w-[80%] md:min-w-[1200px] px-4 md:px-0">
          <div class="flex gap-8 border-b-2 border-slate-200">
            <button v-for="tab in ['details', 'logistics', 'addresses']" :key="tab" @click="activeTab = tab" :class="['py-4 font-bold text-lg border-b-4 transition', activeTab === tab ? 'text-slate-900 border-primary' : 'text-slate-600 border-transparent hover:text-slate-900']">{{ tabLabels[tab] }}</button>
          </div>

          <div class="py-6">
            <div v-show="activeTab === 'details'" class="space-y-6">
              <div>
                <h3 class="text-lg font-bold text-slate-900 mb-4">产品规格</h3>
                <div class="grid grid-cols-4 gap-4">
                  <div class="bg-slate-50 p-4 rounded"><div class="text-sm text-slate-600 mb-1">长</div><div class="font-bold text-slate-900">{{ product?.dimensions.length }}</div></div>
                  <div class="bg-slate-50 p-4 rounded"><div class="text-sm text-slate-600 mb-1">宽</div><div class="font-bold text-slate-900">{{ product?.dimensions.width }}</div></div>
                  <div class="bg-slate-50 p-4 rounded"><div class="text-sm text-slate-600 mb-1">高</div><div class="font-bold text-slate-900">{{ product?.dimensions.height }}</div></div>
                  <div class="bg-slate-50 p-4 rounded"><div class="text-sm text-slate-600 mb-1">重量</div><div class="font-bold text-slate-900">{{ product?.dimensions.weight }}</div></div>
                </div>
              </div>

              <div>
                <h3 class="text-lg font-bold text-slate-900 mb-4">产品描述</h3>
                <p class="text-slate-700 leading-relaxed mb-4">{{ product?.description }}</p>
                <div class="prose prose-sm max-w-none text-slate-700" v-html="product?.richContent" />
              </div>

              <div v-if="detailImages.length" class="space-y-3">
                <h3 class="text-lg font-bold text-slate-900 mt-6">详情图</h3>
                <div class="space-y-4">
                  <div v-for="(src, i) in detailImages" :key="src + i" class="w-full">
                    <img :src="src" :alt="product?.title + ' 详情图 ' + (i + 1)" class="w-full rounded border border-slate-200" loading="lazy" @error="onImgError" />
                  </div>
                </div>
              </div>
            </div>

            <div v-show="activeTab === 'logistics'" class="space-y-6">
              <div>
                <h3 class="text-lg font-bold text-slate-900 mb-4">物流配送信息</h3>
                <div class="space-y-3 text-sm text-slate-700">
                  <div class="bg-slate-50 p-4 rounded"><p class="mb-2"><strong>海外仓存储：</strong> 所有商品均为海外仓存储，库存充足。</p></div>
                  <div class="bg-slate-50 p-4 rounded"><p class="mb-2"><strong>配送方式：</strong> 标准物流 5-7 天送达，自提方式 1-3 天更快。</p></div>
                  <div class="bg-slate-50 p-4 rounded"><p class="mb-2"><strong>物流追踪：</strong> 24 小时内获得追踪号，全程可跟踪。</p></div>
                  <div class="bg-slate-50 p-4 rounded"><p class="mb-2"><strong>处理时间：</strong> 24 小时内发货。</p></div>
                </div>
              </div>
            </div>

            <div v-show="activeTab === 'addresses'" class="space-y-6">
              <div>
                <h3 class="text-lg font-bold text-slate-900 mb-4">发货地址</h3>
                <div class="space-y-4">
                  <div v-for="(log, idx) in logisticsList" :key="idx" class="border border-slate-200 rounded p-4">
                    <div class="font-bold text-slate-900 mb-2">{{ log.region }} - {{ log.warehouse }}</div>
                    <p class="text-slate-700 text-sm mb-2">{{ log.address }}</p>
                    <p class="text-sm text-slate-600"><strong>承运商：</strong> {{ log.carriers.join(', ') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <RightFloatNav />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { getProductById } from '@/data/products'
import type { Product } from '@/data/products'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import RightFloatNav from '@/components/RightFloatNav.vue'

const productId = computed(() => {
  const pathMatch = window.location.pathname.match(/\/item\/([^/?]+)/)
  return pathMatch ? pathMatch[1] : ''
})

const product = ref<Product | undefined>()
const selectedImageIndex = ref(0)
const activeTab = ref('details')
const selectedColor = ref('White')
const selectedSize = ref('3 Drawers')
const quantity = ref(1)

const purchaseMode = ref<'dropship' | 'factory'>('dropship')
const selectedRegionIdx = ref(0)
const shipMethod = ref<'standard' | 'pickup'>('standard')
const isLoggedIn = ref(false)

const contactName = ref('')
const contactPhone = ref('')
const factoryQty = ref<number | null>(null)
const factoryRemark = ref('')
const factoryFile = ref<File | null>(null)
const factoryFileName = computed(() => factoryFile.value?.name || '')

function onFactoryFileChange(e: Event) {
  const input = e.target as HTMLInputElement
  factoryFile.value = input.files && input.files[0] ? input.files[0] : null
}

function submitFactory() {
  if (!contactName.value || !contactPhone.value || !factoryQty.value) {
    alert('请完整填写：联系人、电话、直采数量')
    return
  }
  alert('工厂直采申请已提交（示例）。')
}

const selectedImage = computed(() => product.value?.images[selectedImageIndex.value]?.url || product.value?.mainImage || '')
const currentLogistics = computed(() => product.value?.logistics?.[selectedRegionIdx.value] ?? product.value?.logistics?.[0])

const displayPrice = computed(() => {
  const log = currentLogistics.value
  if (!log) return { currency: 'USD', value: 0, original: 0 }
  if (shipMethod.value === 'pickup') {
    return { currency: log.selfPickup.currency, value: log.selfPickup.discounted, original: log.selfPickup.price }
  }
  return { currency: log.standardShipping.currency, value: log.standardShipping.discounted, original: log.standardShipping.price }
})

const safeLogistics = computed(() => {
  const log = currentLogistics.value
  if (log) return log
  return { region: '', warehouse: '', standardShipping: { price: 0, discounted: 0, currency: 'USD' }, selfPickup: { price: 0, discounted: 0, currency: 'USD' }, carriers: [], address: '' }
})

const logisticsList = computed(() => product.value?.logistics ?? [])
const detailImages = computed<string[]>(() => {
  const p = product.value as any
  if (!p) return []
  if (Array.isArray(p.detailImages) && p.detailImages.length) return p.detailImages as string[]
  const fromImages = (p.images || []).map((i: any) => i.url).slice(1)
  const rc: string = p.richContent || ''
  const fromRich = Array.from(rc.matchAll(/<img[^>]+src=['\"]([^'\"]+)['\"]/gi)).map((m) => m[1])
  const combined = [...fromImages, ...fromRich]
  return Array.from(new Set(combined))
})

const tabLabels = { details: '详细信息', logistics: '物流配送信息', addresses: '发货地址' }

const fallbackImage = 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202312/b4a7be3d-a601-4332-a34d-47833226c810.Jpeg'
function onImgError(e: Event) { const img = e.target as HTMLImageElement; if (img && img.src !== fallbackImage) img.src = fallbackImage }

function placeOrder() { alert('请登录后继续下单。') }
function addToCart() { alert('已加入购物车（示例交互）。') }
function saveProduct() { alert('已保存到清单（示例交互）。') }
function reportProduct() { alert('感谢您的反馈，我们会尽快处理。') }

onMounted(() => {
  const prod = getProductById(productId.value)
  product.value = prod
  if (!prod) console.warn('Product not found:', productId.value)
})
</script>

<style scoped>
.prose-sm { font-size: 0.875rem; line-height: 1.5; }
.prose-sm :deep(h3) { font-size: 1rem; font-weight: 600; margin-top: 1rem; margin-bottom: 0.5rem; }
.prose-sm :deep(p) { margin-bottom: 0.5rem; }
</style>
