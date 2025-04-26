<template>
    <a-row :gutter="16" justify="start">
      <!-- 标题 -->
      <a-col :span="24" style="text-align: left;">
        <h4 style="margin: 5px 0;">个人水平</h4>
      </a-col>
      <!-- 动态渲染 -->
      <a-col
        v-for="item in performanceList"
        :key="item.key"
        :span="8"
        class="performanceCard"
      >
        <div class="performance-item">
          <img
            :src="ratingImages[item.rating] || nemo"
            :alt="item.rating"
          />
          <span class="performance-label">{{ item.label }}</span>
        </div>
      </a-col>
    </a-row>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  import nemo from '@/assets/images/wows/rating/-.png'
  import A from '@/assets/images/wows/rating/A.png'
  import B from '@/assets/images/wows/rating/B.png'
  import C from '@/assets/images/wows/rating/C.png'
  import S from '@/assets/images/wows/rating/S.png'
  import U from '@/assets/images/wows/rating/S+.png'
  
  // 接收 prop（注意：字段与实际 JSON 对应）
  const props = defineProps({
    playerPerformance: {
      type: Object,
      required: true
    }
  })
  
  // 评分 → 图片 映射
  const ratingImages = { '-': nemo, A, B, C, S, 'S+': U }
  
  // 构造带 label 的数组，属性名改为 PascalCase 下划线格式
  const performanceList = computed(() => [
    {
      key: 'overall',
      label: '总体',
      rating: props.playerPerformance.Performance_Overall
    },
    {
      key: 'bb',
      label: '战列',
      rating: props.playerPerformance.Performance_BB
    },
    {
      key: 'ca',
      label: '巡洋',
      rating: props.playerPerformance.Performance_CA
    },
    {
      key: 'dd',
      label: '驱逐',
      rating: props.playerPerformance.Performance_DD
    },
    {
      key: 'cv',
      label: '航母',
      rating: props.playerPerformance.Performance_CV
    },
    {
      key: 'ss',
      label: '潜艇',
      rating: props.playerPerformance.Performance_SS
    }
  ])
  </script>
  
  <style scoped>
  .performanceCard{
    margin-bottom: 10px;
  }
  .performance-item {
   
    position: relative;
    width: 100%;
  }
  .performance-item img {
    width: 100%;
    display: block;
  }
  .performance-label {
    position: absolute;
    bottom: 4px;
    right: 10px;
    color: #fff;
    padding: 2px 6px;
    font-size: 24px;
    border-radius: 2px;
    white-space: nowrap;
  }
  </style>
  