<template>
    <div class="common-layout">
        <el-container>
            <!-- 标题 -->
            <el-header>
                <div class="logo" />
            </el-header>
            <el-divider></el-divider>
            <!-- 主体内容 -->
            <el-main>
                <el-row>
                    <el-col :span="8">
                        <!-- 日历 -->
                        <div id="customizedCalendar">
                            <div id="calendar">
                                <el-calendar v-model="value">
                                    <template #date-cell="{ data }">
                                        <div>{{ data.day.split('-')[2] }}</div>
                                        <el-icon v-if="actdate[data.day]">
                                            <Star />
                                        </el-icon>
                                    </template>
                                </el-calendar>
                            </div>
                            <!-- 时间转换按钮 -->
                            <div id="button">
                                <el-button @click="skip('preMonth')" color="#872f6d">&lt月
                                </el-button>
                                <el-button @click="skip('today')" color="#57617C">今天
                                </el-button>
                                <el-button @click="skip('postMonth')" color="#872f6d">月&gt
                                </el-button>
                            </div>
                        </div>
                    </el-col>
                    <!-- 讲座信息 -->
                    <el-col :span="16">
                        <div class="card-container" v-if="actdate[this.value.toISOString().substring(0, 10)]">
                            <el-card v-for="card in actdate[this.value.toISOString().substring(0, 10)]" class="box-card"
                                :key="card.id">
                                <template #header>
                                    <div class="card-header">
                                        <span>{{ card.title }}</span>
                                        <el-button color="#872f6d" round size="small"
                                            @click="showmessage(card.description, card.title)">详情</el-button>
                                    </div>
                                </template>
                                <div class="card-content">
                                    <p style="margin: 0%; margin-bottom: 20px;">
                                        {{ card.summary }}
                                    </p>
                                    <div><el-icon style="vertical-align: -11%;">
                                            <Avatar />
                                        </el-icon> {{ card.teacher }}</div>
                                    <p><el-icon style="vertical-align: -10%;">
                                            <Clock />
                                        </el-icon> {{ card.activity_time.substring(0, 5) }}</p>
                                    <div><el-icon style="vertical-align: -10%;">
                                            <House />
                                        </el-icon> {{ card.location }}</div>
                                </div>
                            </el-card>
                        </div>

                    </el-col>
                </el-row>
            </el-main>
            <!-- 底部 -->
            <el-footer>footer</el-footer>

        </el-container>
    </div>
</template>

<script>
import { Clock, Avatar, House, Star } from '@element-plus/icons-vue'
import { ElMessageBox } from 'element-plus'
import { ElMessage } from 'element-plus'
import requests from './axios'

export default {
    components: {
        House, Avatar, Clock, Star
    },
    mounted() {
        requests({ url: '/activities/all', method: 'get' }).then(res => {
            this.activities = res;
            //console.log(this.activities);

            this.activities.forEach(e => {
                if (this.actdate[e.activity_date] == undefined) this.actdate[e.activity_date] = [];
                this.actdate[e.activity_date].push(e);
            });
        });
    },
    data() {
        return {
            selectedDate: null,
            value: new Date(),
            cards_temp: [

            ],
            cards: [

            ],
            activities: [],
            actdate: new Array()

        };
    },
    computed: {
        selectDate() {
            return moment(this.value).format("YYYY-MM-DD");
        }
    },
    methods: {
        showmessage(htmlstr, title) {
            ElMessageBox.confirm(
                htmlstr,
                title,
                {
                    confirmButtonText: '报名',
                    cancelButtonText: '取消',
                    dangerouslyUseHTMLString: true,
                }
            ).then(() => {
                //在这里post！！！！！

                ElMessage({
                    type: 'success',
                    message: '报名成功',
                })
            })
                .catch(() => { });
        },
        skip(flag) {
            if (flag === 'preYear') this.value = new Date(this.value.setFullYear(this.value.getFullYear() - 1));
            else if (flag === 'preMonth') this.value = new Date(this.value.setMonth(this.value.getMonth() - 1));
            else if (flag === 'preDay') this.value = new Date(this.value.setDate(this.value.getDate() - 1));
            else if (flag === 'today') this.value = new Date();
            else if (flag === 'postDay') this.value = new Date(this.value.setDate(this.value.getDate() + 1));
            else if (flag === 'postMonth') this.value = new Date(this.value.setMonth(this.value.getMonth() + 1));
            else if (flag === 'postYear') this.value = new Date(this.value.setFullYear(this.value.getFullYear() + 1));
        }
    }
};
</script>


<!-- 日历样式 -->

<style lang="scss" scoped>
.el-calendar {
    font-family: "Microsoft YaHei", Arial, Lucida, Verdana, Helvetica, sans-serif;
    border: 1px solid #f0d9d5;
    border-radius: 4px;
    margin-left: 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2) !important;
    transition: box-shadow 0.3s ease-in-out !important;
    --el-calendar-border: var(--el-table-border, 0px solid var(--el-border-color-lighter));
    border: var(--el-calendar-border);
    max-width: 400px;
}
.el-calendar:hover {
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.4) !important;
}

#customizedCalendar {
    width: 100%;
    height: 100%;
    #calendar {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #button {
        margin-left: 30px;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    :deep(.el-calendar__header) {
        // 修改头部背景颜色
        background-color: #872f6d;
        padding: 3px 5px;
        border: none;
        display: flex;
        justify-content: center;

        .el-calendar__button-group {
            // 隐藏原生按钮
            display: none;
        }

        .el-calendar__title {
            // 修改头部标题的字体颜色
            color: white !important;
            font-size: 18px;
            font-weight: bolder;
            margin-top: 10px;
        }
    }

    :deep(.el-calendar__body) {
        // 修改主体部分
        padding: 0;
    }

    :deep(.el-calendar-table) {
        thead {
            th {
                // 修改头部星期部分
                padding: 20px;
                background-color: #872f6d;
                color: white;
            }
        }

        .el-calendar-day {
            // 每天小块样式设置
            font-size: 15px;
            font-family: "Microsoft YaHei", Arial, Lucida, Verdana, Helvetica, sans-serif;
            height: 95px;
            border: none !important;
            display: flex;
            justify-content: center;
            align-items: center;

            border:0 p {
                // 所有日期颜色
                color: black;
                z-index: 1;
                user-select: none;
                display: flex;
            }
        }
    }

    :deep(.el-calendar-table__row) {

        td.is-selected {
            color: aliceblue;
            background-color: #57617C !important;
        }

        td.is-selected:hover {
            color: #57617C !important;
        }

    }

    button {
        padding: 10px 10px;
        margin-bottom: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2) !important;
    }

}
</style>


<!-- 卡片样式 -->
<style scoped>
.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-left: 20px;
    margin-right: 20px;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-family: "Microsoft YaHei", Arial, Lucida, Verdana, Helvetica, sans-serif;
    color: #872f6d;
}

.box-card {
    width: 420px;
    height: 260px;
    margin-bottom: 50px;
    border-radius: 8px !important;
    position: relative;
    transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
    transform-style: preserve-3d !important;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2) !important;
    font-family: "Microsoft YaHei", Arial, Lucida, Verdana, Helvetica, sans-serif;
}

.box-card:before {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.05) 0%) !important;
    opacity: 0;
    transition: opacity 0.3s ease-in-out !important;
}

.box-card:hover {
    transform: translateY(-10px) !important;
}

.box-card:hover:before {
    opacity: 1;
}

.el-message-box__container {
    font-family: "Microsoft YaHei", Arial, Lucida, Verdana, Helvetica, sans-serif;
    position: relative;
    font-size: 15px;
}

.el-message-box {
    text-align:center!important;
}
.img{
    width:70%!important;
}
.el-message-box__btns button:nth-child(2) {
    margin-left: 10px;
    font-family: "Microsoft YaHei", Arial, Lucida, Verdana, Helvetica, sans-serif;
    background-color: #872f6d;
}
</style>


<!-- 框架设置 -->
<style scoped>

.el-main {
    padding-top: 30px !important;
    padding-bottom: 0 !important;
}
.el-header{
    min-height: 60px;
    margin-top: 10px;
}

.el-header .logo{
    background-image: url('../assets/image/logo-3.png');
    background-repeat: no-repeat;
    background-position: left;
    background-size: contain;
    min-height: 70px;
}

.el-footer{
    text-align: center;
    background-color: #711a5f;
}

</style>
<style>

.el-message-box {
    
    text-align: center !important;
    
}

</style>