<template>
    <a-row>
        <a-col :span="24" style="text-align: left;">
            <h4 style="margin: 5px 0;">个人数据</h4>
        </a-col>
        <a-col :span="24" style="background-color: rgb(248,248,248); padding: 10px;">
            <a-row>
                <!-- 左侧数据-->
                <a-col :span="6" style="padding-top: 20px;">

                    <a-space direction="vertical" style="width: 100%;">
                        <a-row>
                            <a-col :span="24">
                                <a-statistic :value="selectedStats.battles_count || 'N/A'"
                                    :valueStyle="{ fontSize: '36px' }">
                                    <template #title>
                                        <span style="font-size: 20px; font-weight: 500;">总场次</span>
                                    </template>
                                </a-statistic>
                            </a-col>
                            <a-col :span="24">
                                <a-row>
                                    <a-col :span="10">评分:</a-col>
                                    <a-col :span="10" :offset="4">{{  selectedStats.rating  || 'N/A' }}</a-col>
                                </a-row>
                            </a-col>
                            <a-col :span="24">
                                <a-row>
                                    <a-col :span="10">下一级:</a-col>
                                    <a-col :span="10" :offset="4">{{ + selectedStats.rating_next || 'N/A' }}</a-col>
                                </a-row>
                            </a-col>
                        </a-row>
                    </a-space>
                </a-col>

                <!-- 统计数据显示 -->
                <a-col :span="18">
                    <a-row>
                        <a-col :span="24"> <a-select v-model:value="modelShowNow" style="width: 160px"
                                :options="modelConfig" @change="modelChange" /></a-col>
                    </a-row>
                    <a-row>
                        <a-col :span="6">
                            <a-statistic title="总胜率" :value="selectedStats.win_rate || 'N/A'" />
                        </a-col>
                        <a-col :span="6">
                            <a-statistic title="场均伤害" :value="selectedStats.avg_damage || 'N/A'" />
                        </a-col>
                        <a-col :span="6">
                            <a-statistic title="场均击杀" :value="selectedStats.avg_frags || 'N/A'" />
                        </a-col>
                        <a-col :span="6">
                            <a-statistic title="K/D" :value="selectedStats.kd || 'N/A'" />
                        </a-col>

                        <a-divider></a-divider>
                        <a-col :span="6">
                            <a-statistic title="场均经验" :value="selectedStats.avg_exp || 'N/A'" />
                        </a-col>
                        <!-- 第二行 -->
                        <a-col :span="6">
                            <a-statistic title="存活率" :value="selectedStats.survive_rate || 'N/A'" />
                        </a-col>
                        <a-col :span="6">
                            <a-statistic title="平均等级" :value="selectedStats.avg_tier || 'N/A'" />
                        </a-col>
                        <a-col :span="6">
                            <a-statistic title="主炮命中率" :value="selectedStats.avg_battery_hit_ratio || 'N/A'" />
                        </a-col>


                    </a-row>
                </a-col>
            </a-row>
        </a-col>
    </a-row>
</template>

<script setup>
import { onMounted, ref } from 'vue';

// Props 定义
const props = defineProps({
    playerStatistics: {
        type: Array,
        required: true
    }
})

// 模式选择配置
const modelConfig = ref([
    { value: "overallStats", label: "随机战斗总览" },
    { value: "pvp_solo", label: "随机模式——单人" },
    { value: "pvp_div2", label: "随机模式——双人" },
    { value: "pvp_div3", label: "随机模式——Ⅲ人" },
    { value: "rank_solo", label: "排位模式——单人" },
]);

// 当前选择的模式（默认为“随机战斗总览”）
const modelShowNow = ref("overallStats");

// 玩家数据
const selectedStats = ref({});

// 根据下拉框选择的模式更新当前数据
function modelChange(value) {
    // 检查 props.playerStatistics 是否为数组
    if (Array.isArray(props.playerStatistics)) {
        // 查找对应的数据项
        const selectedData = props.playerStatistics.find(item => item.data_type === value);
        if (selectedData) {
            selectedStats.value = selectedData; // 找到对应数据后更新 selectedStats
        } else {
            selectedStats.value = {}; // 如果找不到对应的数据，清空 selectedStats
        }
    } else {
        selectedStats.value = {}; // 如果不是数组，清空 selectedStats
    }
    console.log('值为', props.playerStatistics)
    console.log(selectedStats.value)
}


// 初始化时设置为默认的“随机战斗总览”
onMounted(() => {
    modelChange(modelShowNow.value);  // 页面加载时设置为默认模式
});
</script>

<style lang="scss" scoped>
.textAlignLeft {
    text-align: left;
}

.textAlignRight {
    text-align: right;
}
</style>