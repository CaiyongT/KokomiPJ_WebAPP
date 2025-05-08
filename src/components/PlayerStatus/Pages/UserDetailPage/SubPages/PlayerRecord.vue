<template>
    <a-row>
        <a-col :span="24" style="text-align: left;">
            <h4 style="margin: 5px 0;">最高记录</h4>
        </a-col>
        <a-col :span="24" style="padding: 10px;">
            <a-row :gutter="10">
                <!-- 动态渲染 -->
                <a-col v-for="item in mappedRecordList" :key="item.key" :span="8" class="performanceCard">
                    <a-card  class = "recordCard">
                        <p style="font-size:18px;margin: 0px;color: gray;">{{item.record_type}}</p>
                        <p style="font-size:25px;margin: 0px;font-weight: bold;">{{item.record_data}}</p>
                        <p style="font-size:14px;margin: 0px;color: gray;">{{item.record_ship_name}}</p>
                    </a-card>
                </a-col>
                
            </a-row>
        </a-col>
    </a-row>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';

// Props 定义
const { playerRecord } = defineProps({
    playerRecord: {
        type: Array,
        required: true
    }
})

// 1. 定义映射表
const recordTypeMap = {
  max_dmg:        '最高伤害',
  max_xp:         '最高经验',
  max_frag:       '最多击杀',
  max_plane_kill: '最多飞机击落',
  max_spotdmg:    '最高侦察伤害',
  max_potential:  '最高潜在伤害'
}

// 2. 生成一个新的投影数组
const mappedRecordList = computed(() =>
  playerRecord.map(item => ({
    ...item,
    // 如果映射表里存在，就用中文，否则保持原始 key
    record_type: recordTypeMap[item.record_type] ?? item.record_type
  }))
)

</script>

<style lang="scss" scoped>
.typeChangeRow {
    text-align: right;
    padding: 15px;
}

.textAlignLeft {
    text-align: left;
}

.textAlignRight {
    text-align: right;
}

.recordCard {
    min-width: 250px;
    min-height: 100px;
    background-color:rgb(248,248,248) ;
    
}
</style>