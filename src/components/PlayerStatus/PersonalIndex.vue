<template>
   <a-row :gutter="16" >
    <a-col :span="10">
      <div v-if="userinfo?.personalIndex"><Player-Performance :playerPerformance="playerPerformance"></Player-Performance></div>
    </a-col>
    <a-col class="gutter-row" :span="14">
      <div class="gutter-box"></div>
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
import { onMounted, ref,computed  } from 'vue'
import PlayerPerformance from './PlayerPerformance.vue'
// 1. 拿到 props（解构出 userinfo，避免 this）
const { userinfo } = defineProps({
  userinfo: {
    type: Object,
    required: true
  }
})

// 2. 计算出 playerPerformance，安全链＋默认空对象
const playerPerformance = computed(() => {
  return userinfo?.personalIndex?.playerPerformance ?? {}
})
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
