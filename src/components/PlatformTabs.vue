<script setup lang="ts">
import { ref } from 'vue'
import { BadgePercent, Shirt, Video, Store } from 'lucide-vue-next'
import { t } from '@/i18n'

const fallbackImage = 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202310/3c1b039b-de57-4d8f-805a-4d15658b90c5.Jpeg'
function onImgError(e: Event) {
  const t = e.target as HTMLImageElement
  if (t && t.src !== fallbackImage) t.src = fallbackImage
}

type Item = { title: string; img?: string; href: string }

type Platform = {
  key: string
  label: string
  items: Item[]
}

const platforms = ref<Platform[]>([
  {
    key: 'amazon',
    label: 'Amazon',
    items: [
      {
        title: '户外LED串灯 防水装饰',
        href: '#',
        img: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202309/2a764166-da43-45a1-9fba-ceea6243b6b7.Jpeg',
      },
      {
        title: '圣诞雪花灯 节日装饰',
        href: '#',
        img: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202307/7f5da945-5083-40ce-b2ec-e65d66d5b155.jpeg',
      },
      {
        title: '桌面加湿器 静音夜灯',
        href: '#',
        img: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202304/14b258b0-0b7f-4e10-9cf3-e522e8bffea2.jpeg',
      },
      {
        title: '厨房收纳置物架',
        href: '#',
        img: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202301/1b935b7d-0b3d-4d61-87a8-6d00a8dc1c22.jpeg',
      },
      {
        title: '车载吸尘器 便携款',
        href: '#',
        img: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2022/202211/1cdd50b4-3c4c-4c5e-8ef3-59aefcb1e3ed.jpeg',
      },
      {
        title: '宠物梳理刷 猫狗适用',
        href: '#',
        img: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2022/202210/4a6b8c1f-2b50-4a7a-bb10-4784a5b6d094.jpeg',
      },
    ],
  },
  {
    key: 'walmart',
    label: 'Walmart',
    items: [
      {
        title: '北欧简约落地灯',
        href: '#',
        img: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2024/202402/0a7a8c5f-6d36-45f7-8b27-55b8486e0bd3.jpeg',
      },
      {
        title: '防水野营帐篷',
        href: '#',
        img: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2024/202401/98f53c5a-8cc7-4f66-8a84-b6f8b0c9b1d0.jpeg',
      },
      {
        title: '家用多功能榨汁机',
        href: '#',
        img: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202307/9d9074fc-c1e7-4fbc-ad57-834fd6c058d8.jpeg',
      },
      {
        title: '记忆棉护颈枕',
        href: '#',
        img: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202308/2fb9dc9a-2db8-4be3-9b02-1a26ac0f8a5f.jpeg',
      },
      {
        title: '高压清洗机',
        href: '#',
        img: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2022/202205/5a8930fa-4a57-49d3-9f23-2b2f6a8d7a4d.jpeg',
      },
      {
        title: '防滑瑜伽垫',
        href: '#',
        img: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2022/202208/3c0d16f4-98e0-4c27-9c46-6f9d3f6c2c6a.jpeg',
      },
    ],
  },
  {
    key: 'ebay',
    label: 'eBay',
    items: [
      {
        title: '复古留声机 蓝牙音箱',
        href: '#',
        img: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2021/202111/0c1a8a3b-3b65-4cb7-9b1d-7b0b2a6e7c13.jpeg',
      },
      {
        title: '健身哑铃 可调重量',
        href: '#',
        img: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2021/202109/21f2d5d3-86a4-4b35-8e31-f5f6d5a2a3b4.jpeg',
      },
      {
        title: '办公室人体工学椅',
        href: '#',
        img: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2022/202203/6a52e6d1-f5ac-4c06-9a5d-1f9f1b3c7e8d.jpeg',
      },
      {
        title: '无线手持挂烫机',
        href: '#',
        img: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202303/96adf4e4-23f6-44d0-8a3e-2f1c6d4e8a9b.jpeg',
      },
      {
        title: '露营折叠桌椅套装',
        href: '#',
        img: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202305/b7f3a109-9f9c-4d0d-9a2e-0b6a1c5d0e9f.jpeg',
      },
      {
        title: '运动智能手表',
        href: '#',
        img: 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202309/6d14e5b1-4a7f-4b1f-a3c1-9a5f6e3d1c2b.jpeg',
      },
    ],
  },
  { key: 'temu', label: 'Temu', items: [] },
  { key: 'shein', label: 'Shein', items: [] },
  { key: 'tiktok', label: 'TikTok', items: [] },
])

const active = ref('amazon')

const platformLogos: Record<string, string> = {
  amazon: 'https://www.saleyee.com/ContentNew/Images/2021/November/foot_recommend1.png',
  ebay: 'https://www.saleyee.com/ContentNew/Images/2021/November/foot_recommend2.png',
  wish: 'https://www.saleyee.com/ContentNew/Images/2021/November/foot_recommend3.png',
  walmart: 'https://www.saleyee.com/ContentNew/Images/2021/November/foot_recommend4.png',
  shopify: 'https://www.saleyee.com/ContentNew/Images/2021/November/foot_recommend5.png',
}

const platformIcons: Record<string, any> = {
  temu: BadgePercent,
  shein: Shirt,
  tiktok: Video,
  default: Store,
}
</script>

<template>
  <section id="platform" class="bg-white py-8">
    <div class="mx-auto max-w-[1500px] min-w-[1200px] w-[80%]">
      <div class="mb-4 flex flex-col items-center gap-4 text-center">
        <h2 class="text-xl md:text-2xl font-semibold text-slate-900 text-center">{{ t('sections.platform') }}</h2>
        <ul class="grid grid-cols-3 sm:grid-cols-6 gap-3">
          <li v-for="p in platforms" :key="p.key">
            <button
              type="button"
              class="w-28 h-16 md:w-32 md:h-20 rounded-md border flex flex-col items-center justify-center gap-1 transition"
              :class="
                active === p.key
                  ? 'border-primary ring-2 ring-primary/30 text-primary bg-primary/5'
                  : 'border-slate-300 hover:border-primary hover:shadow'
              "
              @click="active = p.key"
              :aria-pressed="active === p.key ? 'true' : 'false'"
            >
              <img
                v-if="platformLogos[p.key]"
                :src="platformLogos[p.key]"
                :alt="p.label + ' Logo'"
                class="h-6 w-auto object-contain"
              />
              <component
                v-else
                :is="platformIcons[p.key] || platformIcons.default"
                class="h-5 w-5 text-slate-600"
                :stroke-width="1.6"
              />
              <span class="text-xs md:text-sm">{{ p.label }}</span>
            </button>
          </li>
        </ul>
      </div>

      <div v-for="p in platforms" :key="p.key" v-show="active === p.key">
        <div v-if="p.items.length" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <a
            v-for="it in p.items"
            :key="it.title"
            :href="it.href"
            class="group block rounded-md overflow-hidden bg-white border hover:shadow-lg transition"
          >
            <div class="aspect-square overflow-hidden bg-slate-100">
              <img
                :src="it.img || fallbackImage"
                :alt="it.title"
                @error="onImgError"
                class="h-full w-full object-cover group-hover:scale-105 transition"
              />
            </div>
            <div class="p-3">
              <p class="line-clamp-2 text-sm text-slate-700">{{ it.title }}</p>
            </div>
          </a>
        </div>
        <div v-else class="text-slate-500 text-sm py-10 text-center">{{ t('platform.comingSoon') }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
