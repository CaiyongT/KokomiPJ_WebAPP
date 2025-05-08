<template>
   <a-row :gutter="16" >
    <a-col :span="10" class="personalIndexChild">
      <div  v-if="userinfo?.personalIndex"><Player-Performance :playerPerformance="playerPerformance"></Player-Performance></div>
    </a-col>
    <a-col class="personalIndexChild" :span="14"  >
      <div v-if="userinfo?.personalIndex"><Player-Statistics :playerStatistics="playerStatistics"></Player-Statistics></div>
    </a-col>
    <a-col class="personalIndexChild" :span="12">
      <div >左下角</div>
    </a-col>
    <a-col class="personalIndexChild" :span="12">
      <div v-if="userinfo?.personalIndex"><Player-Record :playerRecord="playerRecord"></Player-Record></div>
    </a-col>
  </a-row>
</template>
<script setup>
import { onMounted, ref,computed  } from 'vue'
import PlayerPerformance from './SubPages/PlayerPerformance.vue'
import PlayerStatistics from './SubPages/PlayerStatistics.vue'
import PlayerRecord from './SubPages/PlayerRecord.vue'
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
const playerStatistics = computed(() => {
  return userinfo?.personalIndex?.playerStatistics ?? {}
})
const playerRecord = computed(() => {
  return userinfo?.personalIndex?.playerRecord ?? {}
})



</script>
<style scoped>
.read-the-docs {
  color: #888;
}
.personalIndexChild{
  height: 100%;
}

</style>
