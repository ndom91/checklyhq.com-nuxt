<template>
  <div>
    <Hero />
    <TrustedBy />
    <SiteMonitoring />
    <ApiMonitoring />
    <E2ePr />
    <Alerting />
    <Results />
    <Workflow />
    <TestimonialQuote />
    <TestimonialThreeCol />
    <AllFeatures />
    <PublicStats />
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteUrl
  }
}
</static-query>

<script>
import { Hero, TrustedBy, SiteMonitoring, ApiMonitoring, E2ePr, Alerting, Results, Workflow, TestimonialQuote, TestimonialThreeCol, AllFeatures, PublicStats } from '~/components/landing'
import { Footer } from '~/components/common'

export default {
  name: 'Landing',
  components: { Hero, TrustedBy, SiteMonitoring, ApiMonitoring, E2ePr, Alerting, Results, Workflow, TestimonialQuote, TestimonialThreeCol, AllFeatures, PublicStats, Footer },
  metaInfo () {
    return {
      title: 'Delightful Active Monitoring for Developers',
      meta: [
        // Override Example
        { key: 'og:type', property: 'og:type', content: 'article' },
        { key: 'og:url', property: 'og:url', content: `${this.$static.metadata.siteUrl}/` }
      ]
    }
  }
}
</script>
