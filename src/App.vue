<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import HeroBanner from './components/HeroBanner.vue'
import PlatformTabs from './components/PlatformTabs.vue'
import CategorySidebar from './components/CategorySidebar.vue'
import SiteFooter from './components/SiteFooter.vue'
import RightFloatNav from './components/RightFloatNav.vue'
import LoginPage from './pages/LoginPage.vue'
import RegisterPage from './pages/RegisterPage.vue'
import GettingStartedPage from './pages/GettingStartedPage.vue'
import HelpCenterPage from './pages/HelpCenterPage.vue'
import FAQDetailPage from './pages/FAQDetailPage.vue'
import ContactUsPage from './pages/ContactUsPage.vue'
import AboutSaleyeePage from './pages/AboutSaleyeePage.vue'
import VATPolicyPage from './pages/VATPolicyPage.vue'
import FeedbackPage from './pages/FeedbackPage.vue'
import DistributorsPage from './pages/DistributorsPage.vue'
import SupplierPage from './pages/SupplierPage.vue'
import PartnersPage from './pages/PartnersPage.vue'
import ItemDetailPage from './pages/ItemDetailPage.vue'
import UserCenterPage from './pages/UserCenterPage.vue'
import CartPage from './pages/CartPage.vue'
import { t } from '@/i18n'

const heroHeight = ref<number | undefined>(undefined)
const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/'
const isLogin = normalizedPath === '/login'
const isRegister = normalizedPath === '/register'
const isGettingStarted = normalizedPath === '/getting-started' || normalizedPath === '/getting-started.html'
const isHelpCenter = normalizedPath === '/help-center' || normalizedPath === '/help-center.html'
const isFAQDetail = normalizedPath.match(/^\/faq\//) !== null
const isContactUs = normalizedPath === '/contact-us' || normalizedPath === '/contact-us.html'
const isAboutSaleyee = normalizedPath === '/about-saleyee' || normalizedPath === '/about-saleyee.html'
const isVATPolicy = normalizedPath === '/vat-policy' || normalizedPath === '/vat-policy.html'
const isFeedback = normalizedPath === '/feedback' || normalizedPath === '/feedback.html'
const isDistributors = normalizedPath === '/distributors' || normalizedPath === '/distributors.html'
const isSupplier = normalizedPath === '/supplier' || normalizedPath === '/supplier.html'
const isPartners = normalizedPath === '/partners' || normalizedPath === '/partners.html'
const isItemDetail = normalizedPath.match(/^\/item\//) !== null
const isUserCenter = normalizedPath === '/user-center' || normalizedPath === '/user-center.html'
const isCart = normalizedPath === '/cart' || normalizedPath === '/cart.html'

const newImages = [
  'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202309/2a764166-da43-45a1-9fba-ceea6243b6b7.Jpeg',
  'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2025/202501/8829a6ab-0a10-4349-a506-12835c30c872.Jpeg',
  'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2025/202506/89c6cc05-8416-491e-8b0e-3fde8a318f0e.Jpeg',
  'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202309/3c1b039b-de57-4d8f-805a-4d15658b90c5.Jpeg',
  'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202310/3c1b039b-de57-4d8f-805a-4d15658b90c5.Jpeg',
  'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202309/79ebe6df-c2d3-4207-b146-513630fe163d.Jpeg',
]

const regionImages = [
  'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2024/202410/890f8f68-c40a-40c5-a4f3-017cf297c900.Jpeg',
  'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2025/202508/d41d793d-cf75-4653-8470-a715d6e9f12f.Jpeg',
  'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2025/202508/7656a659-2d14-4c49-a355-c45b0ae7edf8.Jpeg',
  'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202308/9edd9fdd-b8ca-4750-8c74-6180331317f0.jpg',
  'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2025/202506/89c6cc05-8416-491e-8b0e-3fde8a318f0e.Jpeg',
  'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202309/3c1b039b-de57-4d8f-805a-4d15658b90c5.Jpeg',
]

const fallbackImage = 'https://img-accelerate.saleyee.cn/Resources/GoodsImages/2023/202310/3c1b039b-de57-4d8f-805a-4d15658b90c5.Jpeg'
function onImgError(e: Event) {
  const t = e.target as HTMLImageElement
  if (t && t.src !== fallbackImage) t.src = fallbackImage
}

function updateHeroHeight() {
  const el = document.querySelector('.category-sidebar') as HTMLElement | null
  if (el && window.innerWidth >= 768) {
    // use fixed height to match Saleyee homepage carousel
    heroHeight.value = 460
  } else {
    heroHeight.value = undefined
  }
}

onMounted(() => {
  updateHeroHeight()
  window.addEventListener('resize', updateHeroHeight)
})

onUnmounted(() => window.removeEventListener('resize', updateHeroHeight))
</script>

<template>
  <LoginPage v-if="isLogin" />
  <RegisterPage v-else-if="isRegister" />
  <GettingStartedPage v-else-if="isGettingStarted" />
  <HelpCenterPage v-else-if="isHelpCenter" />
  <FAQDetailPage v-else-if="isFAQDetail" />
  <ContactUsPage v-else-if="isContactUs" />
  <AboutSaleyeePage v-else-if="isAboutSaleyee" />
  <VATPolicyPage v-else-if="isVATPolicy" />
  <FeedbackPage v-else-if="isFeedback" />
  <DistributorsPage v-else-if="isDistributors" />
  <SupplierPage v-else-if="isSupplier" />
  <PartnersPage v-else-if="isPartners" />
  <ItemDetailPage v-else-if="isItemDetail" />
  <UserCenterPage v-else-if="isUserCenter" />
  <CartPage v-else-if="isCart" />
  <div v-else id="top" class="min-h-screen flex flex-col">
    <SiteHeader />
    <main class="flex-1">
      <div class="mx-auto w-full max-w-[1500px] md:w-[80%] md:min-w-[1200px] px-4 md:px-0">
        <el-row :gutter="0">
          <el-col :xs="0" :md="6" class="hidden md:block">
            <CategorySidebar />
          </el-col>
          <el-col :xs="24" :md="18" class="md:overflow-visible">
            <div class="w-full md:ml-[-90px] md:w-[calc(100%+90px)]">
              <HeroBanner :heroHeight="heroHeight" />
            </div>
          </el-col>
        </el-row>
      </div>

      <PlatformTabs />

      <!-- 节日装饰 -->
      <section id="festival" class="bg-slate-50 py-8">
        <div class="mx-auto w-full max-w-[1500px] md:w-[80%] md:min-w-[1200px] px-4 md:px-0">
          <h2 class="text-xl md:text-2xl font-semibold text-slate-900 mb-4 text-center">{{ t('sections.festival') }}</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <a
              href="/item/50904039"
              class="group block rounded-md overflow-hidden bg-white border hover:shadow-lg transition"
            >
              <div class="aspect-square bg-slate-100 overflow-hidden">
                <img
                  src="https://resource.saleyee.com/UploadFiles/Images/2025/202509/00cf4684-6f64-483a-9bd3-ca982f03b8ef.png"
                  alt="节日装饰1"
                  @error="onImgError" class="h-full w-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <div class="p-3 text-sm text-slate-700">圣诞早鸟专场装饰</div>
            </a>
            <a
              href="/item/50904040"
              class="group block rounded-md overflow-hidden bg-white border hover:shadow-lg transition"
            >
              <div class="aspect-square bg-slate-100 overflow-hidden">
                <img
                  src="https://resource.saleyee.com/UploadFiles/Images/2025/202510/06189dc6-4039-4415-9581-e5d1bee4983b.jpg"
                  alt="节日装饰2"
                  @error="onImgError" class="h-full w-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <div class="p-3 text-sm text-slate-700">节日氛围灯饰</div>
            </a>
            <a
              href="/item/50904039"
              class="group block rounded-md overflow-hidden bg-white border hover:shadow-lg transition"
            >
              <div class="aspect-square bg-slate-100 overflow-hidden">
                <img
                  src="https://resource.saleyee.com/UploadFiles/Images/2024/202403/3987c701-aaaf-468e-8a91-deaf40d4bcb5.jpg"
                  alt="节日装饰3"
                  @error="onImgError" class="h-full w-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <div class="p-3 text-sm text-slate-700">派对气球/彩带</div>
            </a>
            <a
              href="/item/50904040"
              class="group block rounded-md overflow-hidden bg-white border hover:shadow-lg transition"
            >
              <div class="aspect-square bg-slate-100 overflow-hidden">
                <img
                  src="https://resource.saleyee.com/UploadFiles/Images/2024/202403/4b2ded93-9f96-489f-812e-c5e88f0bcf61.jpg"
                  alt="节日装饰4"
                  @error="onImgError" class="h-full w-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <div class="p-3 text-sm text-slate-700">节庆桌面摆件</div>
            </a>
            <a
              href="/item/50904039"
              class="group block rounded-md overflow-hidden bg-white border hover:shadow-lg transition"
            >
              <div class="aspect-square bg-slate-100 overflow-hidden">
                <img
                  src="https://resource.saleyee.com/UploadFiles/Images/2024/202403/424c4fdb-71a9-4620-a92a-35e59dbbdb73.jpg"
                  alt="节日装饰5"
                  @error="onImgError" class="h-full w-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <div class="p-3 text-sm text-slate-700">节庆门贴</div>
            </a>
            <a
              href="/item/50904040"
              class="group block rounded-md overflow-hidden bg-white border hover:shadow-lg transition"
            >
              <div class="aspect-square bg-slate-100 overflow-hidden">
                <img
                  src="https://resource.saleyee.com/UploadFiles/Images/2025/202509/49bbf525-ac11-4d7e-b8ba-f502c58b4407.jpg"
                  alt="节日装饰6"
                  @error="onImgError" class="h-full w-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <div class="p-3 text-sm text-slate-700">海外节庆装饰</div>
            </a>
          </div>
        </div>
      </section>

      <!-- 其他区块（示例） -->
      <section id="new" class="bg-white py-8">
        <div class="mx-auto w-full max-w-[1500px] md:w-[80%] md:min-w-[1200px] px-4 md:px-0">
          <h2 class="text-xl md:text-2xl font-semibold text-slate-900 mb-4 text-center">{{ t('sections.new') }}</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <a
              v-for="(src, idx) in newImages"
              :key="'new-' + idx"
              :href="idx % 2 === 0 ? '/item/50904039' : '/item/50904040'"
              class="group rounded-md overflow-hidden bg-white border hover:shadow-lg transition"
            >
              <div class="aspect-square bg-slate-100 overflow-hidden">
                <img :src="src" :alt="`新品${idx + 1}`" @error="onImgError" class="h-full w-full object-cover group-hover:scale-105 transition" />
              </div>
              <div class="p-3 text-sm text-slate-500">{{ t('cards.newArrival') }}</div>
            </a>
          </div>
        </div>
      </section>

      <section id="region" class="bg-slate-50 py-8">
        <div class="mx-auto w-full max-w-[1500px] md:w-[80%] md:min-w-[1200px] px-4 md:px-0">
          <h2 class="text-xl md:text-2xl font-semibold text-slate-900 mb-4 text-center">{{ t('sections.region') }}</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <a
              v-for="(src, idx) in regionImages"
              :key="'region-' + idx"
              :href="idx % 2 === 0 ? '/item/50904039' : '/item/50904040'"
              class="group rounded-md overflow-hidden bg-white border hover:shadow-lg transition"
            >
              <div class="aspect-square bg-slate-100 overflow-hidden">
                <img :src="src" :alt="`热卖${idx + 1}`" @error="onImgError" class="h-full w-full object-cover group-hover:scale-105 transition" />
              </div>
              <div class="p-3 text-sm text-slate-500">{{ t('cards.hotSale') }}</div>
            </a>
          </div>
        </div>
      </section>

      <section id="selected" class="bg-white py-8">
        <div class="mx-auto w-full max-w-[1500px] md:w-[80%] md:min-w-[1200px] px-4 md:px-0">
          <h2 class="text-xl md:text-2xl font-semibold text-slate-900 mb-4 text-center">{{ t('sections.selected') }}</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <a
              v-for="i in 6"
              :key="'sel-' + i"
              :href="i % 2 === 1 ? '/item/50904039' : '/item/50904040'"
              class="group rounded-md overflow-hidden bg-white border hover:shadow-lg transition"
            >
              <div class="aspect-square bg-slate-100 overflow-hidden">
                <img :src="fallbackImage" alt="精选推荐" @error="onImgError" class="h-full w-full object-cover group-hover:scale-105 transition" />
              </div>
              <div class="p-3 text-sm text-slate-500">{{ t('cards.curated') }}</div>
            </a>
          </div>
        </div>
      </section>

      <section id="home" class="bg-slate-50 py-8">
        <div class="mx-auto w-full max-w-[1500px] md:w-[80%] md:min-w-[1200px] px-4 md:px-0">
          <h2 class="text-xl md:text-2xl font-semibold text-slate-900 mb-4 text-center">{{ t('nav.home') }}</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <a
              v-for="i in 6"
              :key="'home-' + i"
              :href="i % 2 === 1 ? '/item/50904039' : '/item/50904040'"
              class="group rounded-md overflow-hidden bg-white border hover:shadow-lg transition"
            >
              <div class="aspect-square bg-slate-100 overflow-hidden">
                <img :src="fallbackImage" alt="家居优选" @error="onImgError" class="h-full w-full object-cover group-hover:scale-105 transition" />
              </div>
              <div class="p-3 text-sm text-slate-500">{{ t('cards.homePreferred') }}</div>
            </a>
          </div>
        </div>
      </section>

      <section id="kitchen" class="bg-white py-8">
        <div class="mx-auto w-full max-w-[1500px] md:w-[80%] md:min-w-[1200px] px-4 md:px-0">
          <h2 class="text-xl md:text-2xl font-semibold text-slate-900 mb-4 text-center">{{ t('nav.kitchen') }}</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <a
              v-for="i in 6"
              :key="'kitchen-' + i"
              :href="i % 2 === 1 ? '/item/50904039' : '/item/50904040'"
              class="group rounded-md overflow-hidden bg-white border hover:shadow-lg transition"
            >
              <div class="aspect-square bg-slate-100 overflow-hidden">
                <img :src="fallbackImage" alt="品类精选" @error="onImgError" class="h-full w-full object-cover group-hover:scale-105 transition" />
              </div>
              <div class="p-3 text-sm text-slate-500">{{ t('cards.categoryPicks') }}</div>
            </a>
          </div>
        </div>
      </section>
    </main>

    <RightFloatNav />
    <SiteFooter />
  </div>
</template>

<style scoped></style>
