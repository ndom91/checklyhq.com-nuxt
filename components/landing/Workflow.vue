<template>
  <section class="workflow-section">
    <div class="container">
      <div class="row text-center justify-content-center">
        <div class="col-md-12 col-lg-8">
          <h2 class="section-super-header">
            workflow
          </h2>
          <h3 class="display-4">
            Integrates with your workflow
          </h3>
        </div>
        <div class="col-md-12 col-lg-8">
          <p class="lead">
            Checkly integrates with the open source & developer tools you use on a daily basis.
          </p>
        </div>
      </div>
      <div class="row text-left">
        <div class="col-md-6 col-lg-3 mb-4 mb-lg-0 workflow-item">
          <div
            class="d-flex align-items-center"
            style="height: 80px;"
          >
            <g-image
              src="~/assets/images/landing/terra-logo@2x.webp"
              alt="terraform logo"
              width="70"
              height="70"
            />
          </div>
          <h5>Terraform</h5>
          <p>Configure and scale your monitoring with Terraform's powerful CLI workflow.</p>
          <a
            class="cta-link"
            href="/docs/integrations/terraform/"
          >Learn more</a>
        </div>
        <div class="col-md-6 col-lg-3 mb-4 mb-lg-0 workflow-item">
          <div
            class="d-flex align-items-center"
            style="height: 80px;"
          >
            <g-image
              src="~/assets/images/landing/javascript-logo@2x.webp"
              alt="javascript logo"
              width="70"
              height="70"
            />
          </div>
          <h5>Javascript</h5>
          <p>Extend your monitoring with Javascript for custom authentication and test logic.</p>
          <a
            class="cta-link"
            href="/docs/api-checks/setup-teardown-scripts/"
          >Learn more</a>
        </div>
        <div class="col-md-6 col-lg-3 mb-4 mb-lg-0 workflow-item">
          <div
            class="d-flex align-items-center"
            style="height: 80px;"
          >
            <g-image
              src="~/assets/images/landing/github-logo@2x.webp"
              alt="github logo"
              width="70"
              height="70"
            />
          </div>
          <h5>GitHub</h5>
          <p>Run your checks as tests on each <code>git push</code> and get results in your PR comments.</p>
          <a
            class="cta-link"
            href="/docs/cicd/github/"
          >Learn more</a>
        </div>
        <div class="col-md-6 col-lg-3 mb-4 mb-lg-0 workflow-item">
          <div
            class="d-flex align-items-center"
            style="height: 80px;"
          >
            <g-image
              src="~/assets/images/landing/prometheus-logo@2x.webp"
              alt="prometheus logo"
              width="70"
              height="70"
            />
          </div>
          <h5>Prometheus</h5>
          <p>Export uptime, status and response time data to your Prometheus cluster.</p>
          <a
            class="cta-link"
            href="/docs/integrations/prometheus/"
          >Learn more</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Workflow'
}
</script>

<style lang="scss">
.workflow-section {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
</style>
