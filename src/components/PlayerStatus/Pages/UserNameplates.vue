
<template>
  <a-row justify="flex-start">
    <a-col :span="12" style="text-align: left">
      <a-typography-title :level="3" class="nomarginTOP">[{{ header.clan.tag }}] {{ header.user.name }}</a-typography-title>
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="12" style="text-align: left">
      <a-space :size="20">
      <a-image :preview="false" :width="50" :src="cnPng" />
      <a-typography-text type="secondary"  style="font-size: 20PX;" >亚服</a-typography-text>
      <a-typography-text type="secondary"  style="font-size: 20PX;" :level="1">{{ header.user.id }}</a-typography-text>
    </a-space>
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="5">
      <a-row>
        <a-col :span="6" class="right-border">{{ header.user.level }}<br/>等级</a-col>
        <a-col :span="6" class="right-border">{{ header.user.created_at }}<br/>注册时间</a-col>
        <a-col :span="6" class="right-border">{{ header.user.actived_at }}<br/>上次活跃</a-col>
        <a-col :span="6"  style="padding: 5px 5px;" >{{ header.user.karams }}<br/>业力</a-col>
        
      </a-row>
    </a-col>

    
  </a-row>
</template>
  
<script setup>
import { onMounted, ref } from 'vue';
import asiaPng from '@/assets/images/wows/region/asia.png'
import cnPng from '@/assets/images/wows/region/cn.png'//图片的CN不符合尺寸，改为使用图标
import euPng from '@/assets/images/wows/region/eu.png'
import naPng from '@/assets/images/wows/region/na.png'
import ruPng from '@/assets/images/wows/region/ru.png'

const header = ref({
  region_id: {
    id: "1",
    name: "asia"
  },
  user: {
    id: "2023619512",
    name: "UserName",
    level: 17,
    karams: 12,
    created_at: 126,
    actived_at: 26
  },
  clan: {
    id: "2000000000",
    tag: "CLAN"
  }
})

// 修改方法保持相同逻辑
function updateUserName(newName) {
  header.value.user.name = newName
}

function GetserverFlag(newName) {
  const serverFlag = computed(() => count.value * 2)
}



onMounted(() => {

})
</script>
<style>
.nomarginTOP {
  margin-top: 0px;
  margin-bottom: 0px;
}
.right-border {
  border-right: 1px solid #e8e8e8; /* 灰色边框 */
  padding-right: 16px; /* 避免内容紧贴边框 */
  height: 100%; /* 确保边框高度与内容一致 */
  padding: 5px 5px;
}
</style>

