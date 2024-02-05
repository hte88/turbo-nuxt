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
  modules: ['nuxt-quasar-ui', '@nuxtjs/tailwindcss', 'nuxt-icon', '@pinia/nuxt', '@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts',
  },
  quasar: {
    sassVariables: 'styles/quasar.variables.sass',
  },
  components: {
    global: true,
    dirs: ['~/components'],
  },
})
