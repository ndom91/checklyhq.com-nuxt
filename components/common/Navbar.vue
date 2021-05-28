<template>
  <nav class="navbar navbar-home navbar-toggleable-md">
    <div class="container">
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span /><span /><span />
      </button>
      <g-link
        class="navbar-brand mr-2"
        to="/"
      >
        <g-image
          src="~/assets/images/text_racoon_logo.svg"
          alt="Checkly Logo"
          immediate
          width="120"
          height="43"
        />
      </g-link>
      <div
        id="navbarSupportedContent"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav ml-auto">
          <li
            id="dropdown-li"
            class="nav-item dropdown"
          >
            <a
              id="navbarDropdownMenuLinkProduct"
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
            >
              Product
            </a>
            <div
              id="dropdown-menu"
              class="dropdown-menu big-drop-shadow product-dropdown"
            >
              <div class="dropmenu-triangle" />
              <g-link
                class="dropdown-item"
                to="/product/api-monitoring/"
              >
                <div class="d-flex">
                  <div class="menu-icon">
                    <img
                      src="/images/icons/api.svg"
                      alt="Api monitoring"
                      width="32"
                      height="32"
                    >
                  </div>
                  <div>
                    <div class="menu-title">
                      API Monitoring
                    </div>
                    <div class="menu-text">
                      Powerful HTTP-based checks to monitor all your APIs endpoints easily.
                    </div>
                  </div>
                </div>
              </g-link>
              <g-link
                class="dropdown-item"
                to="/product/synthetic-monitoring/"
              >
                <div class="d-flex">
                  <div class="menu-icon">
                    <img
                      src="/images/icons/chrome.svg"
                      alt="Synthetic Monitoring"
                      width="32"
                      height="32"
                    >
                  </div>
                  <div>
                    <div class="menu-title">
                      Synthetic Monitoring
                    </div>
                    <div class="menu-text">
                      Open Source based E2E automation to monitor your web app continuously.
                    </div>
                  </div>
                </div>
              </g-link>
              <g-link
                class="dropdown-item"
                to="/product/alerting/"
              >
                <div class="d-flex">
                  <div class="menu-icon">
                    <img
                      src="/images/icons/alert.svg"
                      alt="Alerting"
                      width="32"
                      height="32"
                    >
                  </div>
                  <div>
                    <div class="menu-title">
                      Alerting
                    </div>
                    <div class="menu-text">
                      Deep and reliable alerting to wake you up if things go wrong.
                    </div>
                  </div>
                </div>
              </g-link>
            </div>
          </li>
          <li class="nav-item">
            <g-link
              class="nav-link"
              to="/integrations"
            >
              Integrations
            </g-link>
          </li>
          <li class="nav-item">
            <g-link
              class="nav-link"
              to="/pricing"
            >
              Pricing
            </g-link>
          </li>
          <li class="nav-item">
            <g-link
              class="nav-link"
              to="/docs"
            >
              Docs
            </g-link>
          </li>
          <li
            id="dropdown-li"
            class="nav-item dropdown"
          >
            <a
              id="navbarDropdownMenuLinkLearn"
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
            >Learn</a>
            <div
              id="dropdown-menu"
              class="dropdown-menu big-drop-shadow product-dropdown"
            >
              <div class="dropmenu-triangle" />
              <g-link
                class="dropdown-item"
                to="/learn/headless/"
              >
                <div class="d-flex">
                  <div class="menu-icon">
                    <img
                      src="/images/icons/learn-puppeteer-playwright.svg"
                      alt="Api monitoring"
                      width="32"
                      height="32"
                    >
                  </div>
                  <div>
                    <div class="menu-title">
                      Puppeteer & Playwright
                    </div>
                    <div class="menu-text">
                      Tips, tricks, and in-depth guides for headless browser automation.
                    </div>
                  </div>
                </div>
              </g-link>
              <g-link
                class="dropdown-item"
                href="https://blog.checklyhq.com"
                rel="noopener"
              >
                <div class="d-flex">
                  <div class="menu-icon">
                    <img
                      src="/images/icons/blog-icon.svg"
                      alt="Alerting"
                      width="32"
                      height="32"
                    >
                  </div>
                  <div>
                    <div class="menu-title">
                      Blog
                    </div>
                    <div class="menu-text">
                      Product updates and long content on engineering, DevOps, and SaaS.
                    </div>
                  </div>
                </div>
              </g-link>
            </div>
          </li>
          <li style="display: flex">
            <form class="form-inline my-2 my-lg-0 ml-md-3">
              <g-link
                v-if="hasAccount"
                id="dashboard-button"
                class="btn btn-outline-secondary my-2 my-sm-0 mr-3 ml-md-3"
                href="https://app.checklyhq.com/"
                rel="noopener"
              >
                Dashboard<div class="ion-arrow-right-c d-inline ml-2" />
              </g-link>
              <g-link
                v-else
                id="login-button"
                class="btn btn-outline-secondary my-2 my-sm-0 mr-3 ml-md-3"
                href="https://app.checklyhq.com/"
                rel="noopener"
              >
                Log in
              </g-link>
              <g-link
                class="signup-button btn btn-success my-2 my-sm-0"
                data-signup="data-signup"
                href="https://app.checklyhq.com/signup"
                rel="noopener"
              >
                Start for free
              </g-link>
            </form>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  name: 'Navbar',
  computed: {
    hasAccount () {
      if (typeof document === 'undefined') return false
      return document.cookie.match('(^|;) ?checkly_has_account=([^;]*)(;|$)')
    }
  }
}
</script>
