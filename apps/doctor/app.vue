<script setup lang="ts">
import { useQuasar } from 'quasar'

const { dark } = useQuasar()

const themeIcon = computed(() => (dark.isActive ? 'dark_mode' : 'light_mode'))
</script>
<template>
  <q-toggle
    :model-value="dark.isActive"
    checked-icon="dark_mode"
    unchecked-icon="light_mode"
    size="3rem"
    @update:model-value="(val: any) => dark.set(val)"
  />
  {{ themeIcon }}
</template>
