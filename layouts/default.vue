<template>
  <div class="layout">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import { Navbar } from '@/components/common'

export default {
  components: { Navbar },
}
</script>
