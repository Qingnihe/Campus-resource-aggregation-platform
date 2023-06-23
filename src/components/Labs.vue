<template>
    <el-container>
        <el-header>
            <div class="logo" />
        </el-header>
        <el-divider>

        </el-divider>
        <div style="display: flex;flex-direction: row; justify-content: space-around;">
            <!-- 侧边栏 -->
            <el-menu default-active="软件学院" class="el-menu-vertical-demo" text-color="white" active-text-color="#9c2ab7"
                @select="handleMenuSelect" style="min-width: 200px;" v-model="bindex">
                <el-sub-menu class="mitem" index="1" background-color="white">
                    <template #title>
                        <span text-color="white">公共教学楼</span>
                    </template>
                    <el-menu-item class="subitem" index="A区">A区</el-menu-item>
                    <el-menu-item class="subitem" index="B区">B区</el-menu-item>
                    <el-menu-item class="subitem" index="C区">C区</el-menu-item>
                    <el-menu-item class="subitem" index="D区">D区</el-menu-item>
                </el-sub-menu>
                <el-sub-menu class="mitem" index="学院楼">
                    <template #title>
                        <span>学院楼</span>
                    </template>
                    <el-menu-item class="subitem" index="软件学院">软件学院</el-menu-item>
                    <el-menu-item class="subitem" index="电子信息与光学工程学院">电光学院</el-menu-item>
                    <el-menu-item class="subitem" index="人工智能学院">人工智能学院</el-menu-item>
                    <el-menu-item class="subitem" index="网络空间安全学院">网络空间安全学院</el-menu-item>
                    <el-menu-item class="subitem" index="哲学院">哲学院</el-menu-item>
                    <el-menu-item class="subitem" index="计算机学院">计算机学院</el-menu-item>
                    <el-menu-item class="subitem" index="文学院">文学院</el-menu-item>
                </el-sub-menu>
                <el-menu-item class="mitem" index="3">
                    <template #title>
                        <span>双创中心</span>
                    </template>
                </el-menu-item>
                <el-menu-item class="mitem" index="4">
                    <template #title>
                        <span>天开科技园</span>
                    </template>
                </el-menu-item>
                <el-sub-menu class="mitem" index="5">
                    <template #title>
                        <span>合作企业</span>
                    </template>
                    <el-menu-item class="subitem" index="企业A">企业A</el-menu-item>
                    <el-menu-item class="subitem" index="企业B">企业B</el-menu-item>
                    <el-menu-item class="subitem" index="企业C">企业C</el-menu-item>
                </el-sub-menu>
            </el-menu>

            <el-main>
                <div style="display: flex; flex-direction: row; margin-left: 40px;">
                    <img style="width: 500px; height: 300px"
                        :src="(this.selectedItem.image) ? this.selectedItem.image : 'https://surfwtf.top/img/example.png'">
                    <p style="margin-left: 20px;">{{ this.selectedItem.text ? this.selectedItem.text :
                        "这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍" }}</p>
                </div>
                <!-- 分割线 -->
                <el-divider></el-divider>
                <!-- 资源卡片 -->

                <div class="innocards">
                    <el-card class="innocard" v-for="inno in labs[this.bindex]" shadow="hover"
                        :body-style="{ padding: '0px' }" @click="showmessage(inno.description, inno.name)">
                        <img :src="inno.image_url" :alt="inno.name" style="height: 200px;object-fit: contain;">
                        <div class="card-header" style="padding-left: 5%;">
                            <span>{{ inno.name }}</span>
                        </div>
                        <el-divider style="margin: 0% auto; margin-top: 5%;"></el-divider>
                        <p style="margin: 0% auto;padding: 5%;">{{ inno.summary }}</p>
                        <p style="margin: 0% auto; padding: 5%;">{{ inno.area }}</p>
                        <p style="margin: 0% auto;padding: 5%;">{{ inno.room }}</p>
                        <p style="margin: 0% auto;padding: 5%;">{{ inno.teacher + '\t' + inno.contact }}</p>
                    </el-card>
                </div>

            </el-main>
        </div>
        <el-footer>Footer</el-footer>
    </el-container>
</template>

<script>
import { ElMessage, ElMessageBox } from 'element-plus'
import requests from "./axios"
export default {
    mounted() {
        this.getData();
    },
    data() {
        return {
            currentDate: new Date(),
            fits: ["fill", "contain", "cover", "none", "scale-down"],
            selectedItem: {
                image: "",
                text: "",
                cards: []
            },
            bimages: [],
            bintros: [],
            labs: [],
            bindex: ''
        };
    },
    methods: {
        async getData() {
            requests({ url: '/inno/intro', method: 'get' }).then(res => {
                res.forEach(element => {
                    this.bintros[element.building] = element.description;
                });
            });
            requests({ url: '/inno/bimages', method: 'get' }).then(res => {
                res.forEach(element => {
                    this.bimages[element.building] = 'https://surfwtf.top/img/' + element.img;
                });
                this.handleMenuSelect('软件学院');
            });
            requests({ url: '/inno', method: 'get' }).then(res => {
                res.forEach(element => {
                    if (!this.labs[element.building]) this.labs[element.building] = [];
                    this.labs[element.building].push(element);
                });
            });
        }, showmessage(htmlstr, title) {
            ElMessageBox.confirm(
                htmlstr,
                title,
                {
                    confirmButtonText: '预约',
                    cancelButtonText: '取消',
                    dangerouslyUseHTMLString: true,
                }
            ).then(() => {
                //在这里post！！！！！

                ElMessage({
                    type: 'success',
                    message: '预约成功',
                })
            })
                .catch(() => { });
        },
        handleMenuSelect(index) {
            this.bindex = index;
            this.selectedItem.image = this.bimages[index];
            this.selectedItem.text = this.bintros[index];
            /*
            switch (index) {
                case "A区":
                    this.selectedItem = {
                        image: "D:\\vue_project\\vue_1\\src\\assets\\A区.jpg",
                        text: "A区资源信息...",
                        cardTexts: {
                            1: "A区" + "资源1信息...",
                            2: "A区" + "资源2信息...",
                            3: "A区" + "资源3信息..."
                        }
                    };
                    break;
                case "B区":
                    this.selectedItem = {
                        image: "D:\\vue_project\\vue_1\\src\\assets\\B区.jpg",
                        text: "B区资源信息...",
                        cardImages: {
                            1: "D:\\vue_project\\vue_1\\src\\assets\\card1.jpg",
                            2: "D:\\vue_project\\vue_1\\src\\assets\\card2.jpg",
                            3: "D:\\vue_project\\vue_1\\src\\assets\\card3.jpg"
                        },
                        cardTexts: {
                            1: "B区" + "资源1信息...",
                            2: "B区" + "资源2信息...",
                            3: "B区" + "资源3信息..."
                        }
                    };
                    break;
                case "C区":
                    this.selectedItem = {
                        image: "D:\\vue_project\\vue_1\\src\\assets\\C区.jpg",
                        text: "C区资源信息...",
                        cardImages: {
                            1: "D:\\vue_project\\vue_1\\src\\assets\\cardC1.jpg",
                            2: "D:\\vue_project\\vue_1\\src\\assets\\cardC2.jpg",
                            3: "D:\\vue_project\\vue_1\\src\\assets\\cardC3.jpg"
                        },
                        cardTexts: {
                            1: "C区" + "资源1信息...",
                            2: "C区" + "资源2信息...",
                            3: "C区" + "资源3信息..."
                        }
                    };
                    break;
                case "D区":
                    this.selectedItem = {
                        image: "D:\\vue_project\\vue_1\\src\\assets\\D区.jpg",
                        text: "D区资源信息...",
                        cardImages: {
                            1: "D:\\vue_project\\vue_1\\src\\assets\\card1.jpg",
                            2: "D:\\vue_project\\vue_1\\src\\assets\\card2.jpg",
                            3: "D:\\vue_project\\vue_1\\src\\assets\\card3.jpg"
                        },
                        cardTexts: {
                            1: "D区" + "资源1信息...",
                            2: "D区" + "资源2信息...",
                            3: "D区" + "资源3信息..."
                        }
                    };
                    break;
                case "软件学院":
                    this.selectedItem = {
                        image: "https://surfwtf.top/img/Software.jpg",
                        text: "软件学院资源信息..."
                    };
                    break;
                case "电光学院":
                    this.selectedItem = {
                        image: "https://surfwtf.top/img/dianguang.gif",
                        text: "电光学院资源信息..."
                    };
                    break;
                case "人工智能学院":
                    this.selectedItem = {
                        image: "https://surfwtf.top/img/Artificial_Intelligence.png",
                        text: "人工智能学院资源信息..."
                    };
                    break;
                case "生命科学学院":
                    this.selectedItem = {
                        image: "https://surfwtf.top/img/shengke.jpg",
                        text: "生命科学学院资源信息..."
                    };
                    break;
                case "哲学院":
                    this.selectedItem = {
                        image: "https://surfwtf.top/img/zhexue.jpg",
                        text: "哲学院资源信息..."
                    };
                    break;
                case "计算机学院":
                    this.selectedItem = {
                        image: "https://surfwtf.top/img/CS.jpg",
                        text: "计算机学院资源信息..."
                    };
                    break;
                case "文学院":
                    this.selectedItem = {
                        image: "https://surfwtf.top/img/wenxue.jpg",
                        text: "文学院资源信息..."
                    };
                    break;
                case "企业A":
                    this.selectedItem = {
                        image: "./assets/1.jpg",
                        text: "企业A资源信息..."
                    };
                    break;
                case "企业B":
                    this.selectedItem = {
                        image: "D:\\vue_project\\vue_1\\src\\assets\\B.jpg",
                        text: "企业B资源信息..."
                    };
                    break;
                case "企业C":
                    this.selectedItem = {
                        image: "D:\\vue_project\\vue_1\\src\\assets\\C.jpg",
                        text: "企业C资源信息..."
                    };
                    break;
                default:
                    this.selectedItem = {
                        image: "",
                        text: ""
                    };
                    break;
            }
            */
        }
    }
};
</script>

<style scoped>
#app,
.el-header {
    min-height: 60px;
    margin-top: 10px;
}

.el-header .logo {
    background-image: url('../assets/image/logo-3.png');
    background-repeat: no-repeat;
    background-position: left;
    background-size: contain;
    min-height: 70px;
}

.el-footer {
    text-align: center;
    background-color: #711a5f;
}

.el-menu {
    color: white;
    background-color: #f5f7fa;
    width: 199px;
}

.subitem {
    background-color: rgb(209, 161, 209);
}

.mitem {
    background-color: purple;
}

.el-image {
    display: block;
    max-width: 100%;
    height: auto;
}

.image {
    width: 100%;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both;
}

.button {
    padding: 0;
    float: right;
}

.image {
    height: 100px;
    width: 100px;
}

.el-menu-item.is-active {
    background-color: #fbe9ff !important;
}

.innocards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.innocard {
    max-width: 200px;
    border-radius: 15px;
    margin-left: 4%;
    margin-right: 4%;
    margin-bottom: 4%;
}</style>
