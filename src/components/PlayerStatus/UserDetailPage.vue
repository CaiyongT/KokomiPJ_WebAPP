<template>
  <div>

    <!--#region页面第一行，Title栏-->

    <a-row>
    <a-col :span="8">姓名牌区域</a-col>
    <a-col :span="8" :offset="8">留白等待Maoyu的反馈</a-col>
    </a-row>

    <!--#endregion-->
    
    <!--#region页面第二行，详情页签栏---->
    <a-row>
      <a-tabs>
      <a-tab-pane key="personalIndex" tab="个人主页"> {{userinfo}} </a-tab-pane>
      <a-tab-pane key="dataCenter" tab="数据中心"> 数据中心 </a-tab-pane>
      <a-tab-pane key="shipStatistics" tab="单船数据"> 单船数据 </a-tab-pane>
      <a-tab-pane key="archiveStatistics" tab="成就数据"> 成就数据 </a-tab-pane>
      <a-tab-pane key="archiveList" tab="成就列表"> 成就列表 </a-tab-pane>
    </a-tabs>
    </a-row>
    <!--#endregion---->

  </div>
</template>

<script setup>
import { onMounted,ref } from 'vue';
import axios from 'axios'
const props = defineProps({
  //传入用户id
  userId: {
    type: Object,
    required: true
  }
})
const userinfo = ref({})



onMounted(() => {

   // 例如获取 userId.uid，并发起请求
   const uid = props.userId.uid
 const server = props.userId.server
  axios.get('/api/v1/robot/user/account/', {
    params: {
      region: server,
      account_id: uid,
      language: 'chinese',
      game_type: 'overall'
    }
  })
    .then(res => {
      userinfo.value = res.data.data
      // 在这里处理用户信息...
    })
    .catch(err => {
      console.error('获取用户信息出错:', err)
    })
})
</script>