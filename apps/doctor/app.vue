<script setup lang="ts">
const theme = useTheme()
const darkMode = ref(false)

const toggleTheme = () => {
  theme.global.name.value = darkMode.value ? 'dark' : 'light'
}
</script>
<template>
  <v-app>
    <v-row class="d-flex align-center justify-center">
      <v-col cols="auto">
        <v-switch
          inset
          color="info"
          v-model="darkMode"
          @change="toggleTheme()"
          :label="`It's ${darkMode ? 'Dark' : 'Light'}!`"
        />
      </v-col>
    </v-row>
  </v-app>
</template>
