<template>
  <section class="alerting-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-12 col-md-8">
          <h2 class="section-super-header">
            Alerting
          </h2>
          <g-image
            class="alerting-top-image"
            src="~/assets/images/landing/alerting-options@2x.webp"
            alt="checkly alerting options"
            width="750"
            height="45"
          />
          <h3 class="display-4">
            Alerting when and how you want it
          </h3>
          <p class="lead">
            Keep your team up to date with a
            generous helping of SMS messages and unlimited email, Pagerduty, Opsgenie, Slack and webhook
            notifications. Control exactly how, when and how often you get alerted. "Double checking" is enabled
            by default to never get false positives.
          </p>
          <a
            class="cta-link"
            href="/docs/alerting"
          >Learn more</a>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 text-center">
          <g-image
            class="alerting-image big-drop-shadow img-fluid"
            src="~/assets/images/landing/alert-settings@2x.webp"
            alt="checkly alerting settings"
            fit="inside"
            width="900"
            height="568"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Alerting'
}
</script>

<style lang="scss">
.alerting-section {
  content-visibility: auto;
  contain-intrinsic-size: 900px;
}
</style>
