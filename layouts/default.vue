<template>
  <div class="layout">
    <Navbar />
    <slot />
    <CookieLaw />
  </div>
</template>

<script>
import CookieLaw from 'vue-cookie-law'
import { Navbar } from '@/components/common'

export default {
  components: { Navbar, CookieLaw },
}
</script>
