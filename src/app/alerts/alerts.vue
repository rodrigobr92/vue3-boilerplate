<template>
  <h2>Alerts</h2>
  <nav>
    <router-link to="/alerts">Voltar</router-link>
    <router-link to="/alerts/detail">Detalhe</router-link>
  </nav>
  <h3>{{ title }}</h3>
  <router-view></router-view>
</template>

<script setup lang="ts">

defineProps<{
  title?: string
  count?: number
}>()

</script>
