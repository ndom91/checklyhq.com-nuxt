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

<script>
import {
  Hero,
  TrustedBy,
  SiteMonitoring,
  ApiMonitoring,
  E2ePr,
  Alerting,
  Results,
  Workflow,
  TestimonialQuote,
  TestimonialThreeCol,
  AllFeatures,
  PublicStats,
} from '~/components/landing'
import { Footer } from '~/components/common'

export default {
  name: 'Landing',
  components: {
    Hero,
    TrustedBy,
    SiteMonitoring,
    ApiMonitoring,
    E2ePr,
    Alerting,
    Results,
    Workflow,
    TestimonialQuote,
    TestimonialThreeCol,
    AllFeatures,
    PublicStats,
    Footer,
  },
}
</script>
