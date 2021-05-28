<template>
  <div>
    <div class="main container py-5">
      <div class="row">
        <div class="col-sm-12 col-lg-10 offset-lg-1">
          <div v-html="$page.security.content" />
        </div>
      </div>
      <div
        class="
          pricing__faq
          d-flex
          flex-column
          justify-content-center
          text-center
          mx-auto
        "
      >
        <h2 id="faq" class="mb-5">FAQ</h2>

        <div v-for="edge of $page.allSecurityFaq.edges" :key="edge.node.id">
          <FaqToggle :question="edge.node.q" :answer="edge.node.a" />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<page-query>
query ($id: ID!) {
  security (id: $id) {
    title
    content
  }
  allSecurityFaq (order: ASC) {
    edges {
      node {
        id
        q
        a
      }
    }
  }
}
</page-query>

<script>
import { FaqToggle } from '@/components/shortcodes'
import { Footer } from '~/components/common'

export default {
  name: 'Security',
  components: { Footer, FaqToggle },
  mount() {
    console.log(this.$page.pages)
  },
}
</script>
