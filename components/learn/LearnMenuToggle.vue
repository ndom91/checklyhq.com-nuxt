<template>
  <div>
    <a
      class="learn-menu-title"
      :class="open && 'active'"
      @click="toggle"
    >
      <img
        :src="'/learn/icons/'+category[0].icon"
        width="26"
        height="26"
        :alt="index"
      >
      {{ index }}
    </a>
    <ul
      class="learn-menu-sub collapse"
      :class="open && 'active'"
    >
      <li
        v-for="subcat of category.sort((a, b) => ( a.weight - b.weight))"
        :key="subcat.path"
        class="learn-menu-sub-item "
      >
        <g-link :to="subcat.path">
          {{ subcat.title }}
        </g-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LearnMenuToggle',
  props: {
    category: {
      type: Array,
      default: [],
      required: false
    },
    index: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      open: false
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    }
  }
}
</script>
