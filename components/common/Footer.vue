<template>
  <footer class="footer">
    <div class="container">
      <div class="row footer-top">
        <div class="col-lg-3">
          <div class="mb-3 mb-md-0">
            <h6 id="menu_1_header">Product</h6>
            <ul id="menu_1" class="desktop-show">
              <li>
                <NuxtLink to="/product/api-monitoring/">
                  API monitoring
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/product/synthetic-monitoring/">
                  Synthetic monitoring
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/integrations"> Integrations </NuxtLink>
              </li>
              <li>
                <a href="https://status.checklyhq.com"
                  >Live Checkly Dashboard
                </a>
              </li>
              <li>
                <NuxtLink to="/why-checkly"> Why Checkly </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/docs"> Docs </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/docs/api"> API reference </NuxtLink>
              </li>
              <li>
                <a
                  href="https://changelog.checklyhq.com"
                  target="_blank"
                  rel="noopener"
                  >Changelog</a
                >
              </li>
              <li>
                <NuxtLink to="/pricing"> Pricing </NuxtLink>
              </li>
              <li>
                <a
                  href="https://is.checkly.online/"
                  target="_blank"
                  rel="noopener"
                  >Status</a
                ><span class="green-dot" />
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="mb-3 mb-md-0">
            <h6 id="menu_2_header">Company</h6>
            <ul id="menu_2" class="desktop-show">
              <li>
                <NuxtLink to="/about"> About </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/jobs"> Jobs </NuxtLink>
              </li>
              <li>
                <a
                  href="https://blog.checklyhq.com/"
                  target="_blank"
                  rel="noopener"
                  >Blog</a
                >
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
            <h6 id="menu_3_header">Open Source</h6>
            <ul id="menu_3" class="desktop-show">
              <li>
                <a
                  href="https://chrome.google.com/webstore/detail/headless-recorder/djeegiggegleadkkbgopoonhjimgehda?hl=en"
                  target="_blank"
                  rel="noopener"
                  >Headless Recorder</a
                >
              </li>
              <li>
                <a
                  href="https://registry.terraform.io/providers/checkly/checkly/latest/docs"
                  target="_blank"
                  rel="noopener"
                  >Terraform Provider</a
                >
              </li>
              <li>
                <a
                  href="https://jamstackdeploy.com/"
                  target="_blank"
                  rel="noopener"
                  >Jamstack Deploy</a
                >
              </li>
            </ul>
          </div>
          <div class="mb-3 mb-md-0">
            <h6 id="menu_4_header">Learn</h6>
            <ul id="menu_4" class="desktop-show">
              <li>
                <NuxtLink to="/learn/headless">Puppeteer & Playwright</NuxtLink>
              </li>
              <li><NuxtLink to="/guides">Checkly Guides</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="mb-3 mb-md-0">
            <h6 id="menu_5_header">Connect</h6>
            <ul id="menu_5" class="desktop-show">
              <li>
                <a
                  class="open-intercom-link"
                  href="mailto:support@checklyhq.com"
                  >Support</a
                >
              </li>
              <li>
                <a
                  href="https://twitter.com/checklyHQ"
                  target="_blank"
                  rel="noopener"
                  >Twitter @ChecklyHQ</a
                >
              </li>
              <li>
                <a
                  href="https://github.com/checkly/product-roadmap/projects/1"
                  target="_blank"
                  rel="noopener"
                  >Public Roadmap</a
                >
              </li>
            </ul>
          </div>
          <div class="mb-3 mb-md-0">
            <h6 id="menu_6_header">How we compare</h6>
            <ul id="menu_6" class="desktop-show">
              <li>
                <a href="/alternative/to-pingdom/">Alternative to Pingdom</a>
              </li>
              <li>
                <a href="/alternative/to-runscope/">Alternative to Runscope</a>
              </li>
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
            <FooterLogo class="logo" alt="checkly logo" />
            <div>Copyright © 2021 Checkly Inc. All rights reserved.</div>
          </div>
          <div class="float-right">
            <a
              class="github"
              href="https://github.com/checkly"
              target="_blank"
              rel="noopener"
            >
              <GithubLogo alt="github logo" />
            </a>
            <a
              href="https://twitter.com/checklyhq"
              target="_blank"
              rel="noopener"
            >
              <TwitterLogo alt="twitter logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterLogo from '@@/static/images/footer-logo.svg?inline'
import GithubLogo from '@@/static/images/github.svg?inline'
import TwitterLogo from '@@/static/images/twitter.svg?inline'

export default {
  name: 'Footer',
  components: { FooterLogo, GithubLogo, TwitterLogo },
}
</script>

<style lang="scss">
.footer {
  content-visibility: auto;
  contain-intrinsic-size: 600px;
}
</style>
