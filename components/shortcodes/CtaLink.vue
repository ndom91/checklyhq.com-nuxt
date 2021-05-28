<template>
  <g-link
    class="cta-link"
    :to="link"
  >
    {{ text }}
  </g-link>
</template>

<script>
export default {
  name: 'CtaLink',
  props: {
    text: {
      type: String,
      required: false,
      default: ''
    },
    link: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
