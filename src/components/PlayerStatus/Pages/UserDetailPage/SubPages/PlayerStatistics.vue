<template>
    <a-row>
        <a-col :span="24" style="text-align: left;">
            <h4 style="margin: 5px 0;">个人数据</h4>
        </a-col>
        <a-col :span="24" style="background-color: rgb(248,248,248); padding: 10px;">
            <a-row>
                <!-- 左侧数据-->
                <a-col :span="6" style="padding-top: 20px;">

                    <a-space direction="vertical">
                        <a-row>
                            <a-col :span="24">
                                <a-statistic :value="selectedStats.battles_count || 'N/A'"
                                    :valueStyle="{ fontSize: '50px' }">
                                    <template #title>
                                        <span style="font-size: 26px; font-weight: 500; ">总场次</span>
                                    </template>
                                </a-statistic>
                            </a-col>
                            <a-col :span="24" style="margin: 10px 0;">
                                <!--进度条-->
                                <a-tooltip :title="currentLevelDesc" :color="currentLevelColor">
                                    <a-progress :stroke-color="gradientColor" :percent="percent" status="active"
                                        :size="24" stroke-width="16" :format="() => `${personalRating}`"
                                        :show-info="false" />
                                </a-tooltip>
                            </a-col>
                            <a-col :span="24">
                                <a-row>
                                    <a-col :span="10"><a-typography-text type="secondary"
                                            style="font-size: 26px;">评分:</a-typography-text></a-col>
                                    <a-col :span="10" :offset="4"><a-typography-text style="font-size: 26px;">{{
                                        selectedStats.rating || 'N/A'
                                            }}</a-typography-text></a-col>
                                </a-row>
                            </a-col>
                            <a-col :span="24">
                                <a-row>
                                    <a-col :span="10"><a-typography-text type="secondary"
                                            style="font-size: 26px;">下一级:</a-typography-text></a-col>
                                    <a-col :span="10" :offset="4"><a-typography-text style="font-size: 26px;">+{{
                                        selectedStats.rating_next || 'N/A'
                                            }}</a-typography-text></a-col>
                                </a-row>
                            </a-col>
                        </a-row>
                    </a-space>
                </a-col>

                <!-- 统计数据显示 -->
                <a-col :span="18">
                    <a-row class="typeChangeRow">
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
import { onMounted, ref, computed } from 'vue';

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
}


// 初始化时设置为默认的“随机战斗总览”
onMounted(() => {
    modelChange(modelShowNow.value);  // 页面加载时设置为默认模式
});

//#region 计算评分色条 

// 1. 定义 PR 等级体系
const ratingConfig = [
    { desc: '水平未知', color: [128, 128, 128], prMin: -1, prMax: -1 },
    { desc: '还需努力', color: [205, 51, 51], prMin: 0, prMax: 750 },
    { desc: '低于平均', color: [254, 121, 3], prMin: 750, prMax: 1100 },
    { desc: '平均水平', color: [255, 193, 7], prMin: 1100, prMax: 1350 },
    { desc: '好', color: [68, 179, 0], prMin: 1350, prMax: 1550 },
    { desc: '很好', color: [49, 128, 0], prMin: 1550, prMax: 1750 },
    { desc: '非常好', color: [52, 186, 211], prMin: 1750, prMax: 2100 },
    { desc: '大佬平均', color: [121, 61, 182], prMin: 2100, prMax: 2450 },
    { desc: '神佬平均', color: [88, 43, 128], prMin: 2450, prMax: Infinity }
]


// 2. 取出 rating_class（等级索引）
const ratingClassIndex = computed(function () {
    var idx = parseInt(selectedStats.value.rating_class, 10)
    if (isNaN(idx)) return 0
    return Math.min(Math.max(idx, 0), ratingConfig.length - 1)
})

//3. 当前等级 & 下一级
const currentLevel = computed(function () {
    return ratingConfig[ratingClassIndex.value]
})
const nextLevel = computed(function () {
    var next = ratingClassIndex.value + 1
    if (next >= ratingConfig.length) next = ratingConfig.length - 1
    return ratingConfig[next]
})

// 4. RGB 转 Hex
function rgb2hex(rgb) {
    function h(x) {
        var s = x.toString(16)
        return s.length === 1 ? '0' + s : s
    }
    return '#' + h(rgb[0]) + h(rgb[1]) + h(rgb[2])
}

// 5. 渐变色配置：无论百分比多少，都从本级色过渡到下一级色
const gradientColor = computed(function () {
    const c1 = rgb2hex(currentLevel.value.color)
    const c2 = rgb2hex(nextLevel.value.color)
    // Antd Vue 支持 from/to 形式：
    return { from: c1, to: c2 }
    // 或者用百分比键值形式：
    // return { '0%': c1, '100%': c2 }
})

// 6. 比例强制全满
const percent = computed(function () {
    return 100
})
// 7. 当前等级描述
const currentLevelDesc = computed(function () {
    return currentLevel.value.desc;
});

const currentLevelColor = computed(function () {
  // 把 RGB 数组转成 CSS 颜色字符串
  const rgb = currentLevel.value.color;
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
});


//#endregion
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
</style>