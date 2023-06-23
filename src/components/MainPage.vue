<template>
    <div>
        <el-container>
            <el-header>
                <div class="logo" />
            </el-header>
            <el-divider />
            <el-main>
                <el-row justify="center">
                    <el-col :span="23">
                        <el-carousel :interval="4000" type="card" trigger="click" height="350px">
                            <el-carousel-item class="mainimgitem" v-for="item in 6" :key="item">
                                <img :src="'https://surfwtf.top/img/ma'+item.toString()+'.jpg'" alt="item" style="object-fit: contain;">
                            </el-carousel-item>
                        </el-carousel>
                    </el-col>
                </el-row>

                <div class="navbox">
                    <el-row justify="center">
                        <el-col class="nav" :span="2" v-for="(n, index) in navList" :key="n">
                            <div :class="{ navbtn: true, navbtn_active: active === index }" @click="active = index">{{ n }}
                            </div>
                        </el-col>
                    </el-row>
                    <el-row style="margin: 2px;">
                        <el-col :span="2" :offset="12 - navList.length + 2 * active" style="transition-duration: 0.3s;">
                            <div style="display: flex;justify-content: center;">
                                <div class="navline"></div>
                            </div>
                        </el-col>
                    </el-row>
                </div>

                <el-row justify="center" v-show="active === 0">
                    <el-card class="card" v-for="act in hotacts" shadow="hover"
                        @click="showmessage(act.description, act.title)">
                        <template #header>
                            <div class="card-header">
                                <span>{{ act.title }}</span>
                            </div>
                        </template>
                        <div style="text-align: left;">
                            <p style="margin-top: 0%;">{{ act.summary }}</p>
                            <p><el-icon style="vertical-align: -15%;">
                                    <House />
                                </el-icon>{{ '\t' + act.location }}</p>
                            <p><el-icon style="vertical-align: -15%;">
                                    <Clock />
                                </el-icon>{{ '\t' + act.activity_date + '\t' + act.activity_time.substr(0, 5) }}</p>
                            <p><el-icon style="vertical-align: -15%;">
                                    <Avatar />
                                </el-icon>{{ '\t' + act.teacher }}</p>
                        </div>
                    </el-card>
                </el-row>
                <div style="text-align: end;" v-show="active === 0">
                    <el-button color="#872f6d" type="primary" @click="go('/activities')">查看全部<el-icon>
                            <ArrowRightBold />
                        </el-icon></el-button>
                </div>

                <el-row justify="center" v-show="active === 1" style="margin-top: 20px;">
                    <el-col :span="20" :offset="0">
                        <div class="innocards">
                            <el-card class="innocard" v-for="inno in innocards" shadow="hover"
                                :body-style="{ padding: '0px' }">
                                <img :src="inno.img" :alt="inno.title" style="height: 200px;object-fit: contain;">
                                <div class="card-header" style="padding-left: 5%;">
                                    <span>{{ inno.title }}</span>
                                </div>
                                <el-divider style="margin: 0% auto; margin-top: 5%;"></el-divider>
                                <p style="margin: 0% auto;padding: 5%;margin-bottom: 5%;">这里是介绍这里是介绍这里是介绍</p>
                            </el-card>
                        </div>
                    </el-col>
                </el-row>
                <div style="text-align: end;" v-show="active === 1">
                    <el-button color="#872f6d" type="primary" @click="go('/innovation')">查看全部<el-icon>
                            <ArrowRightBold />
                        </el-icon>
                    </el-button>
                </div>

                <el-row justify="center" v-show="active === 2" style="margin-top: 20px;">
                    <el-col :span="18" :offset="0">
                        <el-card class="cloudcard" shadow="hover" :body-style="{ padding: '0px' }" @click="go('/cloud')">
                            <template #header>
                                <div class="card-header">
                                    <span>学习云平台</span>
                                </div>
                            </template>
                            <div class="cloudcontainer">
                                <el-carousel :interval="5000" arrow="always" style="min-width: 500px;" height="300px"
                                    indicator-position="none" >
                                    <el-carousel-item class="cloudimgitem" v-for="(item, index) in cloudimg" :key="index">
                                        <img :src="item" alt="cloud">
                                    </el-carousel-item>
                                </el-carousel>
                                <p class="cloudintro" style="max-width: 600px;">
                                    云学习平台、影音资源站和其他三个部分是我们提供的云资源多功能在线平台中的组成部分，旨在为用户提供丰富的学习和娱乐资源。云学习平台是一个全面的在线学习工具，为用户提供了广泛的学习资源和工具。它包含各类学习资料、教学视频、在线课程和学习工具，能够满足用户在各个领域的学习需求。用户可以根据自己的兴趣和需求选择合适的学习内容，提升自己的知识和技能。同时，云学习平台还提供了互动学习的功能，用户可以与其他学习者进行讨论和交流，共同进步。影音资源站是一个集合了丰富影视资源的平台，用户可以通过该平台观看各类电影、电视剧和纪录片等。在这里我们精心收集和整理了优质的影视资源，涵盖了各种题材和类型，以满足用户对影视娱乐的需求。用户可以根据个人喜好浏览和搜索影视作品，并且享受高清流畅的观影体验。其他部分则提供了多样化的功能和服务，以满足用户的各种需求。这些功能acgn资源站、电影下载站、软件资产管理平台等。我们致力于不断拓展和更新这些功能，以确保用户能够获得全方位的在线体验和娱乐享受。
                                </p>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>


            </el-main>
            <el-footer>
                Footer
            </el-footer>
        </el-container>

    </div>
</template>

<script>
import requests from "./axios"
import { ElMessage, ElMessageBox } from 'element-plus'
import router from '@/route/index.js'
export default {
    data() {
        return {
            currentDate: new Date(),
            navList: ['热门活动', '创意中心', '云资源'],
            active: 0,
            time: new Date(),
            hotacts: [],
            innocards: [{ title: '全部学院', img: 'https://surfwtf.top/img/logo-sm.png' }, { title: '双创中心', img: 'https://surfwtf.top/img/logo-sm.png' }, { title: '天开科技园', img: 'https://surfwtf.top/img/tiankai.jpg' }, { title: '合作企业', img: 'https://surfwtf.top/img/logo-sm.png' }],
            cloudimg: ['https://tse1-mm.cn.bing.net/th/id/OIP-C.N-XavMQN9Br1dIAgYl6LngHaDx?pid=ImgDet&rs=1', 'https://img.zcool.cn/community/010aec598d5354a801215603d324c9.jpg@1280w_1l_2o_100sh.jpg', 'https://ts1.cn.mm.bing.net/th/id/R-C.2511b760f1d1460d7ce90b3f37eebbc8?rik=NndNqlQz9%2faLnw&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f40007%2f0099.jpg_wh860.jpg&ehk=yq%2fsPr52LcY7izVXLrKfbtrqIzh6yd%2fx2A9jKLLIi%2fo%3d&risl=&pid=ImgRaw&r=0']
        }
    },
    methods: {
        async getHotactivities() {
            requests({ url: '/activities/hot', method: 'get' }).then(res => {
                this.hotacts = res
                //console.log(this.hotacts)
            })
        },
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
        go(path){
            router.push(path);
        }
    },
    mounted() {
        this.getHotactivities();
    }
}
</script>
<style scoped>
.mainimgitem h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 500px;
    margin: 0;
    }

.mainimgitem:nth-child(2n) {
    background-color: #99a9bf;
}
.mainimgitem:nth-child(2n+1) {
    background-color: #d3dce6;
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

.el-main{
    direction: 'vertical';
    padding-top: 0%;
}

.card{
    margin-top: 20px;
    margin-right: 60px;
    margin-left: 60px;
    margin-bottom: 20px;
    width: 250px;
    text-align: center;
    cursor: pointer;
    border-radius: 10px !important;

}
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-family: "Microsoft YaHei", Arial, Lucida, Verdana, Helvetica, sans-serif;
    color: #872f6d;
}

img{
    width: 100%;
}
p{
    word-wrap: break-word;
}

.navbox{
    margin-top: 20pt;
}

.navbox .nav .navbtn {
    font-size: large;
    line-height: 24px;
    cursor: pointer;
    text-align: center;
}
.navbox .navline{
    width: 60px;
    height: 4px;
    background-color: #4158D0;
    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
    border-radius: 2px;
}

.navbox .nav .navbtn_active {
    font-weight: bold;
    color: #333333;
    transition: all 0.1s;
}
.innocards{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.innocard{
    max-width: 200px;
    border-radius: 15px;
    margin-left: 4%;
    margin-right: 4%;
    margin-bottom: 4%;
}
.cloudcard{
    border-radius: 15px;
    margin-left: 4%;
    margin-right: 4%;
    margin-bottom: 4%;
}
.cloudcontainer{
    display: flex;
    flex-direction: row;
    padding: 2%;
}
.cloudintro{
    margin-left: 2%;
}
</style>