<template>
  <div>
    <aside class="docs-menu">
      <nav
        id="sideMenu"
        class="left-transform right-transform"
      >
        <a
          class="api-reference-link"
          href="/docs/api"
          target="_blank"
        >
          API reference
        </a>
        <ul class="docs-menu-content">
          <li
            v-for="(cat, index) of categories"
            :key="cat.id"
            class="docs-menu-item"
          >
            <DocsMenuToggle
              :category="cat"
              :index="index"
            />
            <!-- <btn
              :id="index.toLowerCase()"
              class="docs-menu-title"
            >
              <img
                :src="'/docs/images/icons/'+cat[0].icon+'@2x.png'"
                width="26"
                height="26"
                :alt="cat.title"
              >
              {{ index }}
            </btn>
            <ul
              :id="'docs-menu-'+index.replace(/\s+/g, '-').toLowerCase()"
              class="docs-menu-sub collapse"
            >
              <li
                v-for="subcat of cat.sort((a, b) => ( a.weight - b.weight))"
                :key="subcat.path"
                class="docs-menu-sub-item "
              >
                <g-link :to="subcat.path">
                  {{ subcat.title }}
                </g-link>
              </li>
            </ul> -->
          </li>
        </ul>
      </nav>
      <div class="docs-menu-mobile-right-space" />
    </aside>
  </div>
</template>

<static-query>
query {
  allDocs {
    edges {
      node {
        id
        path
        title
        weight
        icon
        menu {
          docs {
            parent
            identifier
          }
        }
      }
    }
  }
}
</static-query>

<script>
import DocsMenuToggle from './DocsMenuToggle'

export default {
  name: 'DocsMenu',
  components: { DocsMenuToggle },
  data () {
    return {
      currentPage: ''
    }
  },
  computed: {
    categories () {
      const subMenuItems = this.$static.allDocs.edges
        .filter(node => node.weight !== null)
        .reduce((topLevelItems, doc) => {
          const parent = doc.node.menu?.docs?.parent
          if (parent) {
            if (!topLevelItems[parent]) topLevelItems[parent] = []
            doc.node.category = parent
            topLevelItems[parent].push(doc.node)
          }
          return topLevelItems
        }, {})

      return subMenuItems
    }
  }
}
</script>
