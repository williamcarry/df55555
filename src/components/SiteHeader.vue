<template>
  <header class="w-full border-b border-slate-200">
    <!-- Top utility bar -->
    <div class="hidden md:block bg-slate-50 text-slate-600 text-sm">
      <div
        class="mx-auto w-full max-w-[1500px] md:w-[80%] md:min-w-[1200px] px-4 md:px-0 flex items-center justify-between py-2"
      >
        <nav class="flex items-center gap-5">
          <a href="#" class="hover:text-primary">{{ t('header.international') }}</a>
          <a href="#" class="hover:text-primary">{{ t('header.wechat') }}</a>
          <a href="#" class="hover:text-primary">{{ t('header.gettingStarted') }}</a>
          <a href="#" class="hover:text-primary">{{ t('header.help') }}</a>
          <a href="#" class="hover:text-primary">{{ t('header.membership') }}</a>
        </nav>
        <div class="flex items-center gap-4">
          <div class="relative" ref="langRef">
            <button
              type="button"
              class="flex items-center gap-1 hover:text-primary px-2 py-1 rounded"
              @click="toggleLang"
              @keydown.escape="closeLang"
              :aria-expanded="langOpen ? 'true' : 'false'"
              aria-haspopup="menu"
            >
              <Globe class="h-4 w-4" :stroke-width="1.6" />
              <span>{{ langLabel }}</span>
              <ChevronDown class="h-3.5 w-3.5 opacity-70" :stroke-width="1.6" />
            </button>
            <div
              v-show="langOpen"
              class="absolute right-0 mt-1 w-24 bg-white border rounded shadow-md z-50 whitespace-nowrap"
              role="menu"
            >
              <button
                type="button"
                class="block w-full text-left px-3 py-2 hover:bg-slate-50"
                :class="currentLang === 'zh-CN' ? 'text-primary' : 'text-slate-700'"
                @click="selectLang('zh-CN')"
                role="menuitem"
              >
                简体中文
              </button>
              <button
                type="button"
                class="block w-full text-left px-3 py-2 hover:bg-slate-50"
                :class="currentLang === 'en' ? 'text-primary' : 'text-slate-700'"
                @click="selectLang('en')"
                role="menuitem"
              >
                English
              </button>
            </div>
          </div>
          <a href="/login" class="hover:text-primary">{{ t('auth.login') }}</a>
          <a href="/register" class="text-primary">{{ t('auth.register') }}</a>
        </div>
      </div>
    </div>

    <!-- Main branding/search bar -->
    <div class="mx-auto w-full max-w-[1500px] md:w-[80%] md:min-w-[1200px] px-4 md:px-0 py-4 md:py-6">
      <div class="flex items-center gap-4 md:gap-8">
        <!-- Logo -->
        <a href="#" class="shrink-0 flex items-center gap-3">
          <img
            class="h-10 md:h-12"
            src="https://www.saleyee.com/Content/Images/logo.png"
            alt="赛盈分销平台 Logo"
          />
          <span class="hidden sm:inline text-lg md:text-xl font-semibold text-slate-800"
            >赛盈分销平台</span
          >
        </a>

        <!-- Search -->
        <form @submit.prevent class="flex-1">
          <div class="flex rounded-md overflow-hidden border-2 border-primary/90">
            <input
              type="search"
              :placeholder="t('ui.searchPlaceholder')"
              class="flex-1 px-4 py-2 text-sm md:text-base outline-none"
            />
            <button class="bg-primary text-white px-4 md:px-6 font-medium">{{ t('ui.search') }}</button>
          </div>
        </form>

        <!-- Actions -->
        <div class="hidden md:flex items-center gap-5 text-sm">
          <a href="#" class="hover:text-primary">我的订单</a>
          <a href="#" class="hover:text-primary">消息</a>
          <a href="#" class="hover:text-primary">购物车</a>
        </div>
      </div>
    </div>

    <!-- Nav bar with category trigger -->
    <div class="bg-slate-900">
      <div class="mx-auto w-full max-w-[1500px] md:w-[80%] md:min-w-[1200px] px-4 md:px-0">
        <div class="flex items-center">
          <div
            class="hidden md:flex items-center gap-2 bg-primary text-white px-4 py-3 shrink-0"
            style="width: var(--category-width)"
          >
            <Menu class="h-5 w-5" :stroke-width="1.6" />
            <span class="font-medium">{{ t('header.allCategories') }}</span>
          </div>
          <nav class="flex-1 overflow-x-auto">
            <ul class="flex items-center gap-6 text-white/90 px-4 py-3 text-sm md:text-base">
              <li><a href="#platform" class="hover:text-white">{{ t('nav.platform') }}</a></li>
              <li><a href="#festival" class="hover:text-white">{{ t('nav.festival') }}</a></li>
              <li><a href="#new" class="hover:text-white">{{ t('nav.new') }}</a></li>
              <li><a href="#region" class="hover:text-white">{{ t('nav.region') }}</a></li>
              <li><a href="#selected" class="hover:text-white">{{ t('nav.selected') }}</a></li>
              <li><a href="#home" class="hover:text-white">{{ t('nav.home') }}</a></li>
              <li><a href="#kitchen" class="hover:text-white">{{ t('nav.kitchen') }}</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Menu, Globe, ChevronDown } from 'lucide-vue-next'
import { currentLang, setLang, t } from '@/i18n'

const langOpen = ref(false)
const langRef = ref<HTMLElement | null>(null)

const langLabel = computed(() => (currentLang.value === 'zh-CN' ? t('lang.zh') : t('lang.en')))

function toggleLang() {
  langOpen.value = !langOpen.value
}
function closeLang() {
  langOpen.value = false
}
function selectLang(code: 'zh-CN' | 'en') {
  setLang(code)
  closeLang()
}

function onClickOutside(e: MouseEvent) {
  const el = langRef.value
  if (el && !el.contains(e.target as Node)) {
    closeLang()
  }
}

onMounted(() => {
  document.addEventListener('click', onClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', onClickOutside)
})
</script>

<style scoped></style>
