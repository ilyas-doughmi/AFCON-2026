// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    apiFootballKey: process.env.NUXT_API_FOOTBALL_KEY,
    
    public: {
    }
  }
})
