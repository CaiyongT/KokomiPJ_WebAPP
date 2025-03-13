<template>
    <h1>{{ t('home.welcome') }}</h1>
    <a-calendar  />
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

</script>