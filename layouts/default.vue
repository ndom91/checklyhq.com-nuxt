<template>
  <div class="layout">
    <Navbar />
    <main id="landing" class="main landing">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import { Navbar } from '@/components/common'

export default {
  components: { Navbar },
}
</script>
