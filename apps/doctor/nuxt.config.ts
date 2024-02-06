// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: false,
  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },
  devtools: { enabled: true },
  modules: ['vuetify-nuxt-module', '@nuxtjs/tailwindcss', 'nuxt-icon', '@pinia/nuxt', '@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts',
  },
  components: {
    global: true,
    dirs: ['~/components'],
  },
})
