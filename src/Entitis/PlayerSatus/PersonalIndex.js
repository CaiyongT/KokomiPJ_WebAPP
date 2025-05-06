//个人主页组件所需数据模型
const personalIndex = {
    //个人水平组件
    playerPerformance: {
        performance_overall: "S",//总体数据
        performance_bb: "S",//战列
        performance_ca: "S",//巡洋
        performance_dd: "S",//驱逐
        performance_cv: "S",//航母
        performance_ss: "S"//潜艇
    },
    //玩家个人数据控件对应模型
    playerStatistics: [
        {
            data_type: "overallStats",//数据类型:随机战斗总览
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
            win_rate_class: 7,//胜率等级（用于变色阶梯显示具体数字，下同)
            avg_damage_class: 8,//场均伤害等级
            avg_frags_class: 8,//场均击杀等级
            kd_class: 8,//kd等级
            rating_class: 8,//评分等级
        },
        {
            data_type: "pvp_solo",//数据类型——单人
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
            win_rate_class: 7,//胜率等级（用于变色阶梯显示具体数字，下同)
            avg_damage_class: 8,//场均伤害等级
            avg_frags_class: 8,//场均击杀等级
            kd_class: 8,//kd等级
            rating_class: 8,//评分等级
        },
        {
            data_type: " pvp_div2",//游戏模式——2人小队
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
            win_rate_class: 7,//胜率等级（用于变色阶梯显示具体数字，下同)
            avg_damage_class: 8,//场均伤害等级
            avg_frags_class: 8,//场均击杀等级
            kd_class: 8,//kd等级
            rating_class: 8,//评分等级
        },
        {
            data_type: "pvp_div3",//游戏模式——3人小队
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
            win_rate_class: 7,//胜率等级（用于变色阶梯显示具体数字，下同)
            avg_damage_class: 8,//场均伤害等级
            avg_frags_class: 8,//场均击杀等级
            kd_class: 8,//kd等级
            rating_class: 8,//评分等级
        },
        {
            data_type: "rank_solo",//游戏模式——排位
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
            win_rate_class: 7,//胜率等级（用于变色阶梯显示具体数字，下同)
            avg_damage_class: 8,//场均伤害等级
            avg_frags_class: 8,//场均击杀等级
            kd_class: 8,//kd等级
            rating_class: 8,//评分等级
        }
    ],
    //排位赛季组件,注意我没写完，请写完所有排位赛季数据列表
    constRankData: [{
        season: "8",
        rank: 'gold',
        level: '10'
    },
    {
        season: "10",
        rank: 'silver',
        level: '8'
    },
    {
        season: "9",
        rank: 'gobronze',
        level: '4'
    }, {
        season: "8",
        rank: 'gold',
        level: '8'
    },]
    ,
    //最高纪录组件 
    playerRecord: [
        {
            record_type: "max_dmg",//最高伤害
            record_data: "114514",//实际数字
            record_ship_tire: "Ⅹ",//船只等级
            record_ship_type: "bb",//船只类型
            record_ship_id: "1919810",//记录最大值船id
            record_ship_name: "克里斯托弗哥伦布",//船名
        },
        {
            record_type: "max_xp",//最高经验
            record_data: "83079",//实际数字
            record_ship_tire: "Ⅹ",//船只等级
            record_ship_type: "bb",//船只类型
            record_ship_id: "1919810",//记录最大值船id
            record_ship_name: "克里斯托弗哥伦布",//船名
        },
        {
            record_type: "max_frag",//最高击杀
            record_data: "10",//实际数字
            record_ship_tire: "Ⅹ",//船只等级
            record_ship_type: "bb",//船只类型
            record_ship_id: "1919810",//记录最大值船id
            record_ship_name: "克里斯托弗哥伦布",//船名
        },
        {
            record_type: "max_plane_kill",//最高经验
            record_data: "1450",//实际数字
            record_ship_tire: "Ⅹ",//船只等级
            record_ship_type: "bb",//船只类型
            record_ship_id: "1919810",//记录最大值船id
            record_ship_name: "克里斯托弗哥伦布",//船名
        },
        {
            record_type: "max_spotdmg",//最高侦察伤害
            record_data: "1190",//实际数字
            record_ship_tire: "Ⅹ",//船只等级
            record_ship_type: "bb",//船只类型
            record_ship_id: "1919810",//记录最大值船id
            record_ship_name: "克里斯托弗哥伦布",//船名
        },
        {
            record_type: "max_potential",//最高潜在伤害
            record_data: "460510508",//实际数字
            record_ship_tire: "Ⅹ",//船只等级
            record_ship_type: "bb",//船只类型
            record_ship_id: "1919810",//记录最大值船id
            record_ship_name: "克里斯托弗哥伦布",//船名
        },
    ]
}