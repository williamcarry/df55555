<template>
  <div
    class="hidden md:block category-sidebar"
    style="width: var(--category-width); height: 460px"
  >
    <ul class="bg-white border-r border-l border-b shadow-sm flex h-full flex-col">
      <li
        v-for="cat in categories"
        :key="cat.key"
        class="relative group border-b last:border-b-0 flex-1"
      >
        <a
          class="flex h-full items-center px-4 text-sm text-slate-700 hover:bg-slate-50 border-l-4 border-transparent hover:border-primary"
        >
          <span class="icon w-5 h-5 flex items-center justify-center text-slate-400 mr-3">
            <component :is="cat.icon" class="h-4 w-4" :stroke-width="1.8" />
          </span>
          <span class="truncate">{{ cat.title }}</span>
        </a>

        <!-- mega panel: appears to the right of the sidebar and overlays the hero -->
        <div
          class="mega-panel absolute left-full top-0 hidden group-hover:block z-[9999]"
          style="overflow: visible"
        >
          <div class="w-[980px] bg-white shadow-lg rounded-md overflow-hidden">
            <div class="p-4 grid grid-cols-4 gap-4">
              <!-- first column: category title + featured links -->
              <div>
                <h4 class="text-base font-semibold text-slate-800 mb-2">{{ cat.title }}</h4>
                <ul class="text-sm text-slate-600 space-y-1">
                  <li v-for="(sub, i) in cat.featured" :key="cat.key + '-feat-' + i">
                    <a :href="sub.href" class="hover:text-primary">{{ sub.title }}</a>
                  </li>
                </ul>
              </div>

              <!-- middle columns: many sub links displayed as rows -->
              <div class="col-span-2">
                <div class="flex flex-col gap-2">
                  <div
                    v-for="(row, ri) in chunk(cat.subs, 4)"
                    :key="cat.key + '-r-' + ri"
                    class="flex gap-4"
                  >
                    <div
                      v-for="(s, si) in row"
                      :key="cat.key + '-s-' + ri + '-' + si"
                      class="flex-1"
                    >
                      <a
                        :href="s.href"
                        class="text-sm leading-tight text-slate-600 hover:text-primary"
                        >{{ s.title }}</a
                      >
                    </div>
                  </div>
                </div>
              </div>

              <!-- right column: promo carousel -->
              <div class="flex flex-col gap-2">
                <MegaCarousel :slides="[promoImage, promoSmall, extraPromo]" :height="460" />
              </div>
            </div>

            <div class="border-t px-4 py-3 flex items-center justify-between">
              <div class="text-sm text-slate-600">更多精选：{{ cat.title }} 热销与供应商</div>
              <a href="#" class="text-sm text-primary">查看全部 &raquo;</a>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <!-- Mobile dropdown fallback (kept simple) -->
    <details class="md:hidden mt-4">
      <summary class="flex items-center gap-3 bg-primary text-white px-4 py-3 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-5 w-5"
        >
          <path d="M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z" />
        </svg>
        <span class="font-medium">全部分类</span>
      </summary>
      <div class="bg-white border p-4">
        <div class="grid grid-cols-2 gap-4">
          <div v-for="cat in categories" :key="cat.key + '-m'">
            <h4 class="text-sm font-semibold text-slate-800 mb-2">{{ cat.title }}</h4>
            <ul class="text-sm text-slate-600 space-y-1">
              <li v-for="(sub, i) in cat.subs" :key="cat.key + '-m-' + i">
                <a :href="sub.href" class="hover:text-primary">{{ sub.title }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </details>
  </div>
</template>

<script setup lang="ts">
import { reactive, markRaw } from 'vue'
import MegaCarousel from './MegaCarousel.vue'
import {
  Home,
  Sprout,
  Music,
  Mountain,
  Plug,
  Cog,
  HeartPulse,
  Briefcase,
  PawPrint,
  Puzzle,
  Car,
  ShoppingBag,
  Headphones,
} from 'lucide-vue-next'

// helper used in template
function chunk<T>(arr: T[], size = 4) {
  const out: T[][] = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}

const promoImage =
  'https://cdn.builder.io/api/v1/image/assets%2F2307aeed993f441d8cd6d1b0fa348237%2Fe8df0440ae4d4d95bdf71e1da423442a?format=webp&width=800'
const promoSmall =
  'https://cdn.builder.io/api/v1/image/assets%2F2307aeed993f441d8cd6d1b0fa348237%2Ff2d741d04b0b43c1bada5c7867e3780a?format=webp&width=800'
const extraPromo =
  'https://cdn.builder.io/api/v1/image/assets%2F2307aeed993f441d8cd6d1b0fa348237%2Fa83a7ae5705b46739fa8e0eff792a218?format=webp&width=1200'

const categories = reactive([
  {
    key: 'home-furniture',
    title: '家居和家具',
    icon: markRaw(Home),
    featured: [
      { title: '家具', href: '#' },
      { title: '家居装饰', href: '#' },
    ],
    subs: ['沙发', '床', '桌椅', '餐桌', '收纳', '灯具', '地毯', '窗帘'].map((t) => ({
      title: t,
      href: '#',
    })),
  },
  {
    key: 'garden',
    title: '庭院和园艺',
    icon: markRaw(Sprout),
    featured: [
      { title: '园艺工具', href: '#' },
      { title: '户外家具', href: '#' },
    ],
    subs: ['花盆', '种子', '园艺工具', '户外灯', '烧烤用品', '户外装饰'].map((t) => ({
      title: t,
      href: '#',
    })),
  },
  {
    key: 'music-art',
    title: '音乐艺术',
    icon: markRaw(Music),
    featured: [
      { title: '乐器', href: '#' },
      { title: '艺术用品', href: '#' },
    ],
    subs: ['吉他', '键盘', '打击乐', '画具', '画框', '艺术创作材料'].map((t) => ({
      title: t,
      href: '#',
    })),
  },
  {
    key: 'outdoor',
    title: '户外、娱乐和运动',
    icon: markRaw(Mountain),
    featured: [
      { title: '露营', href: '#' },
      { title: '运动装备', href: '#' },
    ],
    subs: ['帐篷', '露营灯', '运动服', '球类', '骑行装备', '户外配件'].map((t) => ({
      title: t,
      href: '#',
    })),
  },
  {
    key: 'appliances',
    title: '电器类',
    icon: markRaw(Plug),
    featured: [
      { title: '小家电', href: '#' },
      { title: '厨电', href: '#' },
    ],
    subs: ['冰箱', '洗衣机', '微波炉', '吸尘器', '电饭煲', '空气净化器'].map((t) => ({
      title: t,
      href: '#',
    })),
  },
  {
    key: 'industrial',
    title: '工商业设备',
    icon: markRaw(Cog),
    featured: [{ title: '工业设备', href: '#' }],
    subs: ['生产设备', '包装设备', '工业工具', '维修器材'].map((t) => ({ title: t, href: '#' })),
  },
  {
    key: 'health',
    title: '健康和美容',
    icon: markRaw(HeartPulse),
    featured: [{ title: '护肤', href: '#' }],
    subs: ['护肤', '身体护理', '保健品', '美容工具', '香水'].map((t) => ({ title: t, href: '#' })),
  },
  {
    key: 'office',
    title: '办公、教育与安全',
    icon: markRaw(Briefcase),
    featured: [{ title: '办公用品', href: '#' }],
    subs: ['文具', '办公家具', '教育玩具', '安全防护'].map((t) => ({ title: t, href: '#' })),
  },
  {
    key: 'pets',
    title: '宠物用品',
    icon: markRaw(PawPrint),
    featured: [{ title: '宠物食品', href: '#' }],
    subs: ['狗粮', '猫粮', '玩具', '清洁', '护理用品'].map((t) => ({ title: t, href: '#' })),
  },
  {
    key: 'toys-baby',
    title: '玩具/婴童用品',
    icon: markRaw(Puzzle),
    featured: [{ title: '婴童用品', href: '#' }],
    subs: ['玩具', '学步车', '童装', '喂养用品'].map((t) => ({ title: t, href: '#' })),
  },
  {
    key: 'auto',
    title: '汽摩配件',
    icon: markRaw(Car),
    featured: [{ title: '汽配', href: '#' }],
    subs: ['发动机配件', '车灯', '内饰', '维修工具'].map((t) => ({ title: t, href: '#' })),
  },
  {
    key: 'bags',
    title: '服饰箱包',
    icon: markRaw(ShoppingBag),
    featured: [{ title: '箱包', href: '#' }],
    subs: ['女包', '男包', '钱包', '配饰'].map((t) => ({ title: t, href: '#' })),
  },
  {
    key: 'consumer-electronics',
    title: '消费电子/器材',
    icon: markRaw(Headphones),
    featured: [{ title: '电子', href: '#' }],
    subs: ['耳机', '充电器', '摄像机', '配件'].map((t) => ({ title: t, href: '#' })),
  },
])
</script>

<style scoped>
.bg-primary {
  background-color: #cb261c;
}
.mega-panel {
  min-width: 980px;
}
.mega-panel .grid a {
  display: inline-block;
  padding: 4px 0;
}
.mega-panel::before {
  content: '';
  position: absolute;
  left: -12px;
  top: 18px;
  width: 12px;
  height: 12px;
  transform: rotate(45deg);
  background: transparent;
}
ul {
  list-style: none;
}
.category-sidebar ul {
  border-right: none;
  border-left: none;
}
.category-sidebar li + li {
  border-top: 1px solid #f2f2f2;
}
</style>
