<template>
  <h3>Alerts list</h3>
  <alerts-search></alerts-search>
  <app-button @click="addCounter">Alert this {{ counter.count }}</app-button>
  <p>i18n {{ t('message.hello') }}</p>
  <button @click="changeLocale">{{ t('message.change') }}</button>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useCounterStore } from '../../../store';
import AlertsSearch from './views/alerts-search.vue';

const { t, locale } = useI18n();
console.log(t);
const counter = useCounterStore();

const addCounter = () => {
  counter.count++;
};

function changeLocale() {
  if (locale.value == 'en') {
    locale.value = 'pt';
    return;
  }
  locale.value = 'en';
}

</script>
