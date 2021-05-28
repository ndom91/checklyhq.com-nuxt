<template>
  <nuxt-picture
    :class="className"
    :src="img"
    :alt="alt"
    :format="format"
    sizes="sm:700px"
    fit="inside"
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
    format: {
      type: String,
      required: false,
      default: 'png',
    },
    className: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>
