<template>
   <a-row :gutter="16">
    <a-col class="gutter-row" :span="12">
      <div class="gutter-box">左上角</div>
    </a-col>
    <a-col class="gutter-row" :span="12">
      <div class="gutter-box">右上角</div>
    </a-col>
    <a-col class="gutter-row" :span="12">
      <div class="gutter-box">左下角</div>
    </a-col>
    <a-col class="gutter-row" :span="12">
      <div class="gutter-box">右下角</div>
    </a-col>
  </a-row>
</template>
<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
