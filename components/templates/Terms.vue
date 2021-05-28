<template>
  <div>
    <div class="main container py-5">
      <div class="row">
        <div class="col-sm-12 col-lg-10 offset-lg-1">
          <div v-html="$page.terms.content" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<page-query>
query ($id: ID!) {
  terms (id: $id) {
    title
    content
  }
}
</page-query>

<script>
import { Footer } from '~/components/common'
export default {
  name: 'Terms',
  components: { Footer },
  mount() {
    console.log(this.$page.pages)
  },
}
</script>
