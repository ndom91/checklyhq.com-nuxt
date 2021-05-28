<template>
  <footer class="footer">
    <div class="container">
      <div class="row footer-top">
        <div class="col-lg-3">
          <div class="mb-3 mb-md-0">
            <h6 id="menu_1_header">
              Product
            </h6>
            <ul
              id="menu_1"
              class="desktop-show"
            >
              <li>
                <g-link to="/product/api-monitoring/">
                  API monitoring
                </g-link>
              </li>
              <li>
                <g-link to="/product/synthetic-monitoring/">
                  Synthetic monitoring
                </g-link>
              </li>
              <li>
                <g-link to="/integrations">
                  Integrations
                </g-link>
              </li>
              <li>
                <g-link to="/docs">
                  Docs
                </g-link>
              </li>
              <li>
                <g-link to="/docs/api">
                  API reference
                </g-link>
              </li>
              <li>
                <a
                  href="https://changelog.checklyhq.com"
                  target="_blank"
                  rel="noopener"
                >Changelog</a>
              </li>
              <li>
                <g-link to="/pricing">
                  Pricing
                </g-link>
              </li>
              <li>
                <a
                  href="https://status.checklyhq.com/"
                  target="_blank"
                  rel="noopener"
                >Live dashboard</a><span
                  class="green-dot"
                />
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="mb-3 mb-md-0">
            <h6 id="menu_2_header">
              Company
            </h6>
            <ul
              id="menu_2"
              class="desktop-show"
            >
              <li>
                <g-link to="/about">
                  About
                </g-link>
              </li>
              <li>
                <g-link to="/jobs">
                  Jobs
                </g-link>
              </li>
              <li>
                <a
                  href="https://blog.checklyhq.com/"
                  target="_blank"
                  rel="noopener"
                >Blog</a>
              </li>
              <li><a href="/open-source">Open Source</a></li>
              <li><a href="/security">Security</a></li>
              <li><a href="/terms">Terms of use</a></li>
              <li><a href="/privacy">Privacy policy</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="mb-3 mb-md-0">
            <h6 id="menu_3_header">
              Open Source
            </h6>
            <ul
              id="menu_3"
              class="desktop-show"
            >
              <li>
                <a
                  href="https://chrome.google.com/webstore/detail/headless-recorder/djeegiggegleadkkbgopoonhjimgehda?hl=en"
                  target="_blank"
                  rel="noopener"
                >Headless Recorder</a>
              </li>
              <li>
                <a
                  href="https://registry.terraform.io/providers/checkly/checkly/latest/docs"
                  target="_blank"
                  rel="noopener"
                >Terraform Provider</a>
              </li>
            </ul>
          </div>
          <div class="mb-3 mb-md-0">
            <h6 id="menu_4_header">
              Learn
            </h6>
            <ul
              id="menu_4"
              class="desktop-show"
            >
              <li><a href="/learn/headless">Puppeteer & Playwright</a></li>
              <li><a href="/guides/end-to-end-monitoring">End-to-End Monitoring</a></li>
              <li><a href="/guides/monitoring-as-code">Monitoring-as-Code</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="mb-3 mb-md-0">
            <h6 id="menu_5_header">
              Connect
            </h6>
            <ul
              id="menu_5"
              class="desktop-show"
            >
              <li>
                <a
                  class="open-intercom-link"
                  href="mailto:support@checklyhq.com"
                >Support</a>
              </li>
              <li>
                <a
                  href="https://twitter.com/checklyHQ"
                  target="_blank"
                  rel="noopener"
                >Twitter @ChecklyHQ</a>
              </li>
              <li>
                <a
                  href="https://github.com/checkly/product-roadmap/projects/1"
                  target="_blank"
                  rel="noopener"
                >Public Roadmap</a>
              </li>
            </ul>
          </div>
          <div class="mb-3 mb-md-0">
            <h6 id="menu_6_header">
              How we compare
            </h6>
            <ul
              id="menu_6"
              class="desktop-show"
            >
              <li><a href="/alternative/to-pingdom/">Alternative to Pingdom</a></li>
              <li><a href="/alternative/to-runscope/">Alternative to Runscope</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="footer-divider" />
        </div>
      </div>
      <div class="row footer-bottom">
        <div class="col-12 flex-wrap">
          <div class="float-left">
            <img
              class="logo"
              src="/images/footer-logo.svg"
              width="52"
              height="47"
              alt="checkly logo"
            >
            <div>Copyright © 2021 Checkly Inc. All rights reserved.</div>
          </div>
          <div class="float-right">
            <a
              class="github"
              href="https://github.com/checkly"
              target="_blank"
              rel="noopener"
            ><img
              src="/images/github.svg"
              alt="github logo"
              width="24"
              height="24"
            ></a>
            <a
              href="https://twitter.com/checklyhq"
              target="_blank"
              rel="noopener"
            ><img
              src="/images/twitter.svg"
              alt="twitter logo"
              width="26"
              height="21"
            ></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
.footer {
  content-visibility: auto;
  contain-intrinsic-size: 600px;
}
</style>
