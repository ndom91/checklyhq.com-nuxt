<template>
  <nuxt-img
    :class="className"
    :src="img"
    :alt="alt"
    :width="width"
    :height="height"
  />
</template>

<script>
export default {
  name: 'AlternativePicture',
  props: {
    alt: {
      type: String,
      required: false,
      default: '',
    },
    img: {
      type: String,
      required: false,
      default: '',
    },
    className: {
      type: String,
      required: false,
      default: '',
    },
    width: {
      type: String,
      required: false,
      default: '',
    },
    height: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>
