<template>
    <div>
        <a-row>
            <a-col :span=10 style="border:1px solid black">11111111</a-col>
            <a-col :span=14 style="border:1px solid black;min-height: 300px;">
                <div class="textAlignLeft">个人数据</div>
                <a-row style="border:1px solid black">
                    <a-col :span=6 style="border:1px solid black">
                        <div class="textAlignLeft">总场次</div>
                        <div class="textAlignLeft">{{ userInfoBasic.Status.battles_count }}</div>
                        <a-Progress :percent=50 status="active" :showInfo="false" />
                        <div>评分：{{ userInfoBasic.Status.rating_class }}</div>
                        <div>下一级：{{ userInfoBasic.Status.rating_next }}</div>
                    </a-col>
                    <a-col :span=18 style="border:1px solid black">
                        <div class="textAlignRight" style="padding-right: 20px;">
                            <a-select v-model:value="modelShowNow" style="width: 160px" :options="modelConfig" @Change="modelChange"/>
                            <!-- <a-dropdown onClick={modelChange}>
                                <a-Select defaultValue="lucy" style={{ width: 120 }} disabled options="modelConfig" ></a-Select>
                                <a @click="e => e.preventDefault()">{{ modelShowNow.label }} <a-DownOutlined /></a>
                                <template #overlay>
                                    <a-menu>
                                        <a-menu-item v-for="item in modelConfig" :key="item.key">{{ item.label
                                            }}</a-menu-item>
                                    </a-menu>
                                </template>
                            </a-dropdown> -->
                        </div>
                        <a-row>
                            <a-col v-for="(item, index) in statusConfig" :key="index" :span=6>
                                <div>{{ item.title }}</div>
                                <div>{{ userInfoBasic.Status[item.key] }}</div>
                            </a-col>

                        </a-row>
                    </a-col>
                </a-row>
            </a-col>
            <a-col :span=14 style="border:1px solid black">33333333</a-col>
            <a-col :span=10 style="border:1px solid black">44444444</a-col>
        </a-row>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
//行内容渲染
const statusConfig = ref([
    { title: '场均伤害', key: 'avg_damage' },
    { title: '场均击杀', key: 'avg_frags' },
    { title: 'K/D', key: 'kd' },
    { title: '场均经验', key: 'avg_exp' },
    { title: '存活率', key: 'survive_rate' },
    { title: '平均等级', key: 'avg_tire' },
    { title: '主炮命中率', key: 'avg_battery_hit_ratio' },
    { title: '鱼雷命中率', key: 'avg_torp_hit_ratio' },

])
//所有选择的下拉框
const modelConfig = ref([
    { value: "overallStats", label: "随机战斗总览" },
    { value: "pvp_solo", label: "随机模式——单人" },
    { value: "pvp_div2", label: "随机模式——双人" },
    { value: "pvp_div3", label: "随机模式——Ⅲ人" },
    { value: "rank_solo", label: "排位模式——单人" },
]);
//当前模式的选择
const modelShowNow = ref("随机战斗总览")
//修改选择的模式 
function modelChange(value) {
  userInfoBasic.value.Status=playerStatistics.value[value]
}
//当前用户信息
const userInfoBasic = ref({
    Clan: '....',
    NickName: '....',
    Server: 'asia',
    UID: '....',
    Status: {
        battles_count: "577",//总场次
        win_rate: "66.38%",//总胜率
        avg_damage: "114 290",//场均伤害
        avg_frags: "1.80",//场均击杀
        kd: "114514",//K/D
        avg_exp: "1 519",//场均经验
        survive_rate: "9.9",//存活率
        avg_tire: '9',//平均等级
        avg_battery_hit_ratio: '38%',//平均主炮命中率
        avg_torp_hit_ratio: '38%',//平均鱼雷命中率
        rating: "2 627",//评分(包括评分色块)
        rating_next: "623",//下一级
    }
})



//玩家个人数据控件对应模型
const playerStatistics = ref({
    //随机战斗总览
    overallStats: {
        battles_count: "571",//总场次
        win_rate: "66.38%",//总胜率
        avg_damage: "114 290",//场均伤害
        avg_frags: "1.80",//场均击杀
        kd: "114514",//K/D
        avg_exp: "1 519",//场均经验
        survive_rate: "9.9",//存活率
        avg_tire: '9',//平均等级
        avg_battery_hit_ratio: '38%',//平均主炮命中率
        avg_torp_hit_ratio: '38%',//平均鱼雷命中率
        rating: "2 627",//评分(包括评分色块)
        rating_next: "623",//下一级
        win_rate_class: 7,//胜率等级（用于变色阶梯显示具体数字，下同)
        avg_damage_class: 8,//场均伤害等级
        avg_frags_class: 8,//场均击杀等级
        kd_class: 8,//kd等级
        rating_class: 8,//评分等级
    },
    //随机模式——单人
    pvp_solo: {
        battles_count: "572",//总场次
        win_rate: "66.38%",//总胜率
        avg_damage: "114 290",//场均伤害
        avg_frags: "1.80",//场均击杀
        kd: "114514",//K/D
        avg_exp: "1 519",//场均经验
        survive_rate: "9.9",//存活率
        avg_tire: '9',//平均等级
        avg_battery_hit_ratio: '38%',//平均主炮命中率
        avg_torp_hit_ratio: '38%',//平均鱼雷命中率
        rating: "2 627",//评分(包括评分色块)
        rating_next: "623",//下一级
        win_rate_class: 7,//胜率等级（用于变色阶梯显示具体数字，下同)
        avg_damage_class: 8,//场均伤害等级
        avg_frags_class: 8,//场均击杀等级
        kd_class: 8,//kd等级
        rating_class: 8,//评分等级
    },
    //随机模式——双人
    pvp_div2: {
        battles_count: "573",//总场次
        win_rate: "66.38%",//总胜率
        avg_damage: "114 290",//场均伤害
        avg_frags: "1.80",//场均击杀
        kd: "114514",//K/D
        avg_exp: "1 519",//场均经验
        survive_rate: "9.9",//存活率
        avg_tire: '9',//平均等级
        avg_battery_hit_ratio: '38%',//平均主炮命中率
        avg_torp_hit_ratio: '38%',//平均鱼雷命中率
        rating: "2 627",//评分(包括评分色块)
        rating_next: "623",//下一级
        win_rate_class: 7,//胜率等级（用于变色阶梯显示具体数字，下同)
        avg_damage_class: 8,//场均伤害等级
        avg_frags_class: 8,//场均击杀等级
        kd_class: 8,//kd等级
        rating_class: 8,//评分等级
    },
    //随机模式——Ⅲ人
    pvp_div3: {
        battles_count: "574",//总场次
        win_rate: "66.38%",//总胜率
        avg_damage: "114 290",//场均伤害
        avg_frags: "1.80",//场均击杀
        kd: "114514",//K/D
        avg_exp: "1 519",//场均经验
        survive_rate: "9.9",//存活率
        avg_tire: '9',//平均等级
        avg_battery_hit_ratio: '38%',//平均主炮命中率
        avg_torp_hit_ratio: '38%',//平均鱼雷命中率
        rating: "2 627",//评分(包括评分色块)
        rating_next: "623",//下一级
        win_rate_class: 7,//胜率等级（用于变色阶梯显示具体数字，下同)
        avg_damage_class: 8,//场均伤害等级
        avg_frags_class: 8,//场均击杀等级
        kd_class: 8,//kd等级
        rating_class: 8,//评分等级
    },
    //排位模式——单人
    rank_solo: {
        battles_count: "575",//总场次
        win_rate: "66.38%",//总胜率
        avg_damage: "114 290",//场均伤害
        avg_frags: "1.80",//场均击杀
        kd: "114514",//K/D
        avg_exp: "1 519",//场均经验
        survive_rate: "9.9",//存活率
        avg_tire: '9',//平均等级
        avg_battery_hit_ratio: '38%',//平均主炮命中率
        avg_torp_hit_ratio: '38%',//平均鱼雷命中率
        rating: "2 627",//评分(包括评分色块)
        rating_next: "623",//下一级
        win_rate_class: 7,//胜率等级（用于变色阶梯显示具体数字，下同)
        avg_damage_class: 8,//场均伤害等级
        avg_frags_class: 8,//场均击杀等级
        kd_class: 8,//kd等级
        rating_class: 8,//评分等级
    }
});

onMounted(() => {

})
</script>

<style lang="scss" scoped>
.textAlignLeft {
    text-align: left
}

.textAlignRight {
    text-align: right
}
</style>