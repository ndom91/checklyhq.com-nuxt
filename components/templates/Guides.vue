<template>
  <div class="main container guides">
    <div class="row">
      <div class="col-sm-12 col-lg-10 offset-lg-1">
        <div class="guides__label">
          Checkly Guides
        </div>
        <h1 class="guides__title">
          {{ $page.guides.title }}
        </h1>
        <p class="guides__description">
          {{ $page.guides.description }}
        </p>
        <span class="markdown">
          <VueRemarkContent />
        </span>
      </div>
    </div>
    <StartForFree />
    <Footer />
  </div>
</template>

<page-query>
query ($id: ID!) {
  guides (id: $id) {
    title
    path
    headings {
      depth
      value
      anchor
    }
  }
}
</page-query>

<script>
import { Footer, StartForFree } from '@/components/common'
export default {
  name: 'Guides',
  components: { Footer, StartForFree }
}
</script>
