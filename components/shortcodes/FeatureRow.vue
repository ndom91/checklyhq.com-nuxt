<template>
  <div class="row feature">
    <div class="col-sm-12 col-md-5 text-left d-flex">
      <div class="feature-row-item-wrapper my-auto">
        <h3 class="section-header mt-0 pb-0">
          {{ header }}
        </h3>
        <p><slot /></p>
      </div>
    </div>
    <div class="col-sm-12 col-md-7 text-right">
      <nuxt-img
        class="img-w720 big-drop-shadow rounded"
        :src="img"
        :alt="header"
        :width="imgWidth"
        :height="imgHeight"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureRow',
  props: {
    header: {
      type: String,
      required: false,
      default: '',
    },
    img: {
      type: String,
      required: false,
      default: '',
    },
    imgWidth: {
      type: String,
      required: false,
      default: '0',
    },
    imgHeight: {
      type: String,
      required: false,
      default: '0',
    },
  },
}
</script>
