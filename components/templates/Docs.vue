<template>
  <div>
    <div class="d-flex container-fluid docs">
      <DocsMenu />
      <div class="docs-page">
        <article class="markdown">
          <div class="d-flex search">
            <div
              id="mobile-toc-button"
              class="mobile-toc-button"
            >
              <img
                src="/images/icons/toc-icon.svg"
                alt="table of contents"
                width="14"
                height="12"
              >
              Table of contents
            </div>
            <form
              id="search-form"
              class="form-inline"
            >
              <img
                src="/docs/images/icons/search@2x.png"
                alt="search"
                with="16"
                height="16"
              >
              <input
                id="search"
                class="form-control py-2"
                type="search"
                placeholder="Press / to search"
              >
            </form>
          </div>
          <div class="breadcrumb">
            <span
              v-for="(crumb, index) of $page.docs.path.split('/').slice(1).slice(0, -1)"
              :key="crumb"
              class="breadcrumb--section"
            >
              <g-link
                :to="$page.docs.path.split('/').slice(1, index + 2).join('/')"
              >
                {{ crumb.charAt(0).toUpperCase() + crumb.replace('-', ' ').slice(1) }}
              </g-link>
              <span v-if="index !== $page.docs.path.length - 3">/</span>
            </span>
          </div>
          <h1>{{ $page.docs.title }}</h1>
          <div class="docs-toc-mobile mb-5 pt-3">
            <div class="docs-toc-header mb-3 pt-3">
              On this page
            </div>
          </div>
          <VueRemarkContent />
        </article>
      </div>
      <aside class="docs-toc mb-3">
        <div id="tocMenu">
          <div class="docs-toc-header">
            On this page
          </div>
          <!-- TOC from remark-toc -->
          <nav id="TableOfContents">
            <ul>
              <li
                v-for="heading of $page.docs.headings"
                :key="heading.anchor"
              >
                <g-link :to="$page.docs.path + heading.anchor">
                  {{ heading.value }}
                </g-link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  </div>
</template>

<page-query>
query Documentation ($id: ID!) {
  docs(id: $id) {
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
import { DocsMenu } from '~/components/docs'
import mediumZoom from 'medium-zoom'

export default {
  name: 'Docs',
  components: { DocsMenu },
  mounted () {
    mediumZoom('.markdown img', {
      margin: 48,
      background: 'rgba(0,0,0,0.6)'
    })
  },
  updated () {
    mediumZoom('.markdown img', {
      margin: 48,
      background: 'rgba(0,0,0,0.6)'
    })
  }
}
</script>

<style style="scss" scoped>
.breadcrumb--section {
  margin: 0 0 0 5px !important;
}
</style>
