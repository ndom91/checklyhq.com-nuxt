<template>
  <div>
    <div class="container">
      <h1 class="my-5" v-html="$page.page.title" />
      <div v-html="$page.page.content" />
    </div>
    <Footer />
  </div>
</template>

<page-query>
query Page ($path: String!) {
  page: pages (path: $path) {
    title
    content
  }
}
</page-query>

<script>
import { Footer } from '~/components/common'
export default {
  name: 'Content',
  components: { Footer },
  mount() {
    console.log(this.$page.pages)
  },
}
</script>
