<template>
  <div class="layout">
    <Navbar />
    <main
      id="landing"
      class="main landing"
    >
      <slot />
    </main>
  </div>
</template>

<script>
import { Navbar } from '@/components/common'

export default {
  name: 'Layout',
  components: { Navbar }
}
</script>
