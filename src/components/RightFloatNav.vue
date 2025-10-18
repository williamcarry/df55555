<script setup lang="ts">
import { markRaw, onMounted, onUnmounted, ref, computed } from 'vue'
import { ArrowUpCircle, UserRound } from 'lucide-vue-next'
import { t } from '@/i18n'

const show = ref(false)
const activeId = ref('top')

const navItems = [
  { id: 'guide', labelKey: 'nav.guide', href: '/getting-started', track: false },
  { id: 'manager', labelKey: 'nav.manager', href: '#manager', icon: markRaw(UserRound), track: false },
  { id: 'platform', labelKey: 'nav.platform', href: '#platform', track: true },
  { id: 'festival', labelKey: 'nav.festival', href: '#festival', track: true },
  { id: 'new', labelKey: 'nav.new', href: '#new', track: true },
  { id: 'region', labelKey: 'nav.region', href: '#region', track: true },
  { id: 'selected', labelKey: 'nav.selected', href: '#selected', track: true },
  { id: 'home', labelKey: 'nav.home', href: '#home', track: true },
  { id: 'kitchen', labelKey: 'nav.kitchen', href: '#kitchen', track: true },
  { id: 'top', labelKey: 'nav.top', href: '#top', icon: markRaw(ArrowUpCircle), track: false },
]

const orderedNavItems = computed(() => {
  const items = [...navItems]
  if (items.length < 3) return items
  const firstTwo = items.splice(0, 2)
  items.splice(items.length - 1, 0, ...firstTwo)
  return items
})

const sectionIds = navItems.filter((item) => item.track).map((item) => item.id)
const firstTrackedId = sectionIds[0] ?? 'top'

function updateActiveSection() {
  const reference = window.scrollY + window.innerHeight * 0.35
  let current: string = window.scrollY < 150 ? 'top' : firstTrackedId

  for (const id of sectionIds) {
    const el = document.getElementById(id)
    if (!el) continue
    if (reference >= el.offsetTop) {
      current = id
    }
  }

  activeId.value = current
}

function onScroll() {
  show.value = window.scrollY > 600
  updateActiveSection()
}

function onResize() {
  updateActiveSection()
}

onMounted(() => {
  updateActiveSection()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <div v-show="show" class="fixed right-3 md:right-6 top-1/3 z-40">
    <nav class="rounded-md shadow-lg overflow-hidden bg-white border w-28">
      <a
        v-for="item in orderedNavItems"
        :key="item.id"
        :href="item.href ?? `#${item.id}`"
        class="block px-3 py-2 text-sm transition-colors whitespace-nowrap overflow-hidden text-ellipsis text-center"
        :class="activeId === item.id ? 'bg-primary text-white' : 'text-slate-700 hover:bg-slate-50'"
      >
        <span class="flex items-center justify-center gap-1 min-w-0">
          <component v-if="item.icon" :is="item.icon" class="h-4 w-4" :stroke-width="1.6" />
          <span class="truncate">{{ t(item.labelKey) }}</span>
        </span>
      </a>
    </nav>
  </div>
</template>

<style scoped></style>
