<template>
  <div>

    <!--#region页面第一行，Title栏-->

    <a-row>
      <a-col :span="12"><User-Nameplates v-if="userinfo.header" :header="userinfo.header"></User-Nameplates></a-col>
      <a-col :span="4" :offset="4"></a-col>
    </a-row>

    <!--#endregion-->

    <!--#region页面第二行，详情页签栏---->
    <a-row>
      <a-tabs style="width: 100%;">
        <a-tab-pane key="personalIndex" tab="个人主页"> <Personal-Index :userinfo = "userinfo"></Personal-Index> </a-tab-pane>
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
import { onMounted, ref } from 'vue';
import PersonalIndex from './UserDetailPage/PersonalIndex.vue'
import UserNameplates from './UserDetailPage/SubPages/UserNameplates.vue';
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
  axios.get('/api/v1/webapp/user/page/', {
    params: {
      region: server,
      account_id: uid,
      language: 'chinese',
      game_type: 'overall'
    }
  })
    .then(res => {
      userinfo.value = res.data.data
    })
    .catch(err => {
      console.error('获取用户信息出错:', err)
    })
})
</script>