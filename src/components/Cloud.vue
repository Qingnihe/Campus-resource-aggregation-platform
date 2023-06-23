<template>
  <div>
    <nav class="navbar">
      <div class="navbar-logo">
        <img src="https://i.postimg.cc/qq2FVWMR/26d81d74421d2d40a35ebf6c1c4f302.jpg" alt="Logo">
      </div>
      <div class="navbar-menu">
        <div class="navbar-menu-wrapper">
          <a
            class="navbar-item"
            :class="{ 'active': currentPage === 'cloud' }"
            @click="changePage('cloud')"
          >云学习平台</a >
          <a
            class="navbar-item"
            :class="{ 'active': currentPage === 'media' }"
            @click="changePage('media')"
          >影音资源站</a >
          <a
            class="navbar-item"
            :class="{ 'active': currentPage === 'other' }"
            @click="changePage('other')"
          >其他</a >
        </div>
      </div>
    </nav>

    <div class="color-bar"></div>

    <div class="content">
      <!-- 根据当前选中的页面显示对应的内容 -->
      <div v-if="currentPage === 'cloud'" class="content-page cloud-page">
        <div class="content-shadow">
          <div class="content-wrapper">
            <div class="content-section">
              <div class="content-section-left">
                <div class="content-image">
                  <!-- 图片部分 -->
                  <h3 class="section-title">云学习平台图片</h3>
                  <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.N-XavMQN9Br1dIAgYl6LngHaDx?pid=ImgDet&rs=1" alt="Image">
                </div>
              </div>
              <div class="content-section-right">
                <div class="content-introduction">
                  <!-- 简介部分 -->
                  <h3 class="section-title">云学习平台简介</h3>
                  <p>&#12288&#12288云学习平台是学校为学生提供的一项突破性服务，旨在为学生们打开机器学习和后端学习的新世界。这是一个无与伦比的机遇，让你在学术和创新领域展现真正的实力。我们提供一整套顶级硬件配置和创新性的使用方式，助力学生们在机器学习领域创造出惊人的成就。</p >
                </div>
              </div>
            </div>
            <div class="content-section">
              <div class="content-details">
                <!-- 详情部分 -->
                <h3 class="section-title">云学习平台详情</h3>
                <p>项目优势：
                  <br/><br/>&#12288顶级硬件配置:<br/>&#12288&#12288强力学习云平台拥有无数学子梦寐以求的顶级硬件配置，让你尽情释放无限的创造力。我们的服务器配备了最新一代的超级处理器和专业级GPU加速器，能够以惊人的速度进行并行计算和深度学习任务。兼有大容量的内存和闪存存储技术，为你提供快速的数据访问和处理能力。同时高带宽的网络连接保障数据传输的稳定和流畅。
                  <br/><br/>&#12288价格优势:<br/>&#12288&#12288这是一个与众不同的服务，让你以非常实惠的价格，获得世界级的硬件配置和技术支持。我们深知学生们的经济压力，因此我们以超低的价格提供这些顶级硬件资源。不论你是机器学习初学者还是专业技术人员，我们相信每个人都应该享有平等的机会去追求自己的梦想。
                  <br/><br/>&#12288创新与竞争力:<br/>&#12288&#12288强力学习云平台提供了一个激发创新和提高竞争力的环境。你将与其他优秀的学生共享这些顶级资源，相互学习和交流，不断挑战自我。这里是探索最新技术、尝试前沿算法的理想场所。通过与同行的交流和合作，你将迅速成长，并在学术界和行业中建立起你的声望。
                  <br/><br/>&#12288跨学科合作:<br/>&#12288&#12288强力学习云平台鼓励跨学科的合作与创新。无论你是计算机科学、数据科学、人工智能、生物学、医学等领域的学生，我们都欢迎你加入这个充满活力和多样性的学术社区。这里将有机会与不同背景的人才共同探索，打破学科壁垒，创造出令人惊叹的成果。
                  <br/><br/><br/>常见应用和相关软件安装:
                  <br/><br/>&#12288机器学习和深度学习：<br/>&#12288&#12288学生可以在租用的服务器上进行机器学习和深度学习任务，训练和评估复杂的神经网络模型。<br/>&#12288&#12288常见的软件包括：<br/>&#12288&#12288- TensorFlow：用于构建和训练机器学习和深度学习模型的开源框架。<br/>&#12288&#12288- PyTorch：提供动态神经网络编程的深度学习框架。<br/>&#12288&#12288- Keras：高级神经网络API，可在多个后端（如TensorFlow、Theano）上运行。<br/>&#12288&#12288- scikit-learn：用于机器学习和数据挖掘的Python库。
                  <br/><br/>&#12288大数据分析：<br/>&#12288&#12288学生可以使用服务器进行大规模数据处理和分析。<br/>&#12288&#12288相关软件包括：<br/>&#12288&#12288- Apache Hadoop：用于分布式存储和处理大规模数据集的开源框架。<br/>&#12288&#12288- Apache Spark：快速大规模数据处理和分析的集群计算系统。<br/>&#12288&#12288- Apache Flink：实时流处理和批处理的开源计算框架。
                  <br/><br/>&#12288后端开发和网站部署：<br/>&#12288&#12288学生可以将服务器用于开发和部署后端应用程序和网站。<br/>&#12288&#12288相关软件包括：<br/>&#12288&#12288- Nginx：高性能的Web服务器和反向代理服务器。<br/>&#12288&#12288- Apache Tomcat：用于托管Java Web应用程序的开源Web服务器。<br/>&#12288&#12288- Node.js：用于构建可扩展的网络应用程序的JavaScript运行时环境。
                  <br/><br/>&#12288数据库管理：<br/>&#12288&#12288学生可以在服务器上安装和管理各种数据库系统，以支持数据存储和查询。<br/>&#12288&#12288常见的数据库软件包括：<br/>&#12288&#12288- MySQL：流行的关系型数据库管理系统。<br/>&#12288&#12288- PostgreSQL：功能强大的开源关系型数据库系统。<br/>&#12288&#12288- MongoDB：面向文档的NoSQL数据库系统。<br/>&#12288&#12288- Redis：高性能键值存储数据库。
                  <br/><br/>&#12288&#12288此外，学生还可以根据自己的需求和兴趣安装其他各种软件和工具，例如Jupyter Notebook、Git版本控制系统、Docker容器化平台等。
                  <br/><br/>&#12288&#12288通过租用服务器并安装适当的软件，学生可以充分利用硬件资源，进行各种学术研究、技术实验和创新项目，为自己的学习和发展提供强大的支持。
                </p >
                <div class="reserve-button">
                 <button @click="reserve">立即获取</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="currentPage === 'media'" class="content-page media-page">
        <div class="content-shadow">
          <div class="content-wrapper">
            <div class="content-section">
              <div class="content-section-left">
                <div class="content-image">
                  <!-- 图片部分 -->
                  <h3 class="section-title">影音资源站图片</h3>
                  <img src="https://img.zcool.cn/community/010aec598d5354a801215603d324c9.jpg@1280w_1l_2o_100sh.jpg" alt="Image">
                </div>
              </div>
              <div class="content-section-right">
                <div class="content-introduction">
                  <!-- 简介部分 -->
                  <h3 class="section-title">影音资源站简介</h3>
                  <p>&#12288&#12288欢迎来到我们学校的PT资源站！我们的PT资源站是学校为学生提供的一个全方位的娱乐资源平台，包括高清电影、无损音乐等。我们致力于为学生们提供优质的娱乐体验，让你在学习之余能够放松身心，享受精彩的影视音乐作品。</p >
                </div>
              </div>
            </div>
            <div class="content-section">
              <div class="content-details">
                <!-- 详情部分 -->
                <h3 class="section-title">影音资源站详情</h3>
                <p>&#12288&#12288在我们的PT资源站上，你可以找到各种各样的资源，包括最新的院线电影、经典电影、纪录片、电视剧等。无论你是喜欢动作片、爱情片、科幻片还是恐怖片，我们都有适合你的选择。此外，我们还提供高品质的无损音乐资源，涵盖各种音乐风格和流派，让你尽情享受音乐的美妙。
                <br/><br/>&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288**使用方法**
                <br/>&#12288&#12288 1. 注册账户：首先，你需要在我们的网站上注册一个账户。提供准确的个人信息，并设置安全的密码来保护你的账户安全。
                <br/>&#12288&#12288 2. 浏览资源：一旦你成功登录，你可以开始浏览我们的资源库。你可以根据分类、关键词或者热门推荐来查找你感兴趣的电影或音乐。
                <br/>&#12288&#12288 3. 下载资源：当你找到心仪的资源时，点击下载按钮即可开始下载。请确保你有足够的磁盘空间，并注意版权规定，不要将资源用于商业目的或违法行为。
                <br/>&#12288&#12288 4. 及时更新：我们会定期更新资源库，添加最新的电影和音乐作品。你可以关注我们的社交媒体账号或订阅我们的通知，以获取最新资源更新的信息。
                <br/><br/>&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288&#12288**用户协议**
                <br/>&#12288 在使用我们的PT资源站之前，请务必仔细阅读并同意我们的用户协议。以下是一些重要条款：
                <br/>&#12288&#12288 1. 仅限个人使用：我们的资源仅供个人学习和娱乐使用，严禁将其用于商业目的或非法用途。
                <br/>&#12288&#12288 2. 版权保护：请尊重他人的知识产权和版权，不要未经授权地分享、传播或修改资源。
                <br/>&#12288&#12288 3. 安全保护：你需要对你的账户和密码保密，不要将其泄露给他人。如果发现任何账户安全问题，请立即联系我们的客服团队。
                <br/><br/>&#12288&#12288我们希望你在我们的PT资源站上度过愉快的时光！如果你有任何疑问或需要帮助，请随时联系我们的客服团队。祝你享受高品质的影视音乐作品！
                </p >
                <div class="reserve-button">
                 <button @click="reserve">立即获取</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="currentPage === 'other'" class="content-page other-page">
        <div class="content-shadow">
          <div class="content-wrapper">
            <div class="content-section">
              <div class="content-section-left">
                <div class="content-image">
                  <!-- 图片部分 -->
                  <h3 class="section-title">其他图片</h3>
                  <img src="https://ts1.cn.mm.bing.net/th/id/R-C.2511b760f1d1460d7ce90b3f37eebbc8?rik=NndNqlQz9%2faLnw&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f40007%2f0099.jpg_wh860.jpg&ehk=yq%2fsPr52LcY7izVXLrKfbtrqIzh6yd%2fx2A9jKLLIi%2fo%3d&risl=&pid=ImgRaw&r=0" alt="Image">
                </div>
              </div>
              <div class="content-section-right">
                <div class="content-introduction">
                  <!-- 简介部分 -->
                  <h3 class="section-title">其他简介</h3>
                  <p>&#12288&#12288在这部分中，我们为学生们提供了另外三个南开建立的网站的外部链接：</p >
                  <p>十二社区————ACGN资源站：</p>
                  <a href="http://12club.nankai.edu.cn/" target="_blank">http://12club.nankai.edu.cn/</a>
                  <p>光影传奇————影视资源站：</p>
                  <a href="http://movie.nankai.edu.cn/" target="_blank">http://movie.nankai.edu.cn/</a>
                  <p>软件资产管理平台：</p>
                  <a href="https://ca.nankai.edu.cn" target="_blank">https://ca.nankai.edu.cn</a>
                </div>
              </div>
            </div>
            <div class="content-section">
              <div class="content-details">
                <!-- 详情部分 -->
                <h3 class="section-title">其他详情</h3>
                <p>&#12288一.十二社区
                <br/>&#12288&#12288十二社区是一个专注于ACGN（动画、漫画、游戏、轻小说）领域的综合性资源站。作为一个热爱ACGN文化的平台，十二社区致力于为用户提供丰富多样的ACGN资源和交流社区。
                <br/>&#12288&#12288首先，十二社区汇集了众多热门的ACGN作品，包括经典的动画、热门的漫画、畅销的游戏和精彩的轻小说等。用户可以在平台上找到自己喜欢的作品，并进行在线观看、阅读或下载。
                <br/>&#12288&#12288其次，十二社区提供了一个充满活力的社区环境，让用户能够与其他ACGN爱好者进行交流和分享。在社区中，用户可以参与各种讨论、发表评论、发布自己的创作作品，与志同道合的人一起分享喜爱的ACGN资源，互相启发和交流。
                <br/>&#12288&#12288此外，十二社区注重用户体验和平台安全，努力为用户提供良好的浏览和使用体验。平台界面简洁清晰，学生们可以方便地浏览、搜索和筛选自己感兴趣的ACGN资源。同时，作为南开校内网站自然只有南开相关人员才可登录浏览，平台以此保护学生的个人信息的安全性。
                <br/>&#12288&#12288无论是ACGN领域的新手还是老骨灰，十二社区都为用户提供了一个欢迎、包容和热情的家园。在这里，你可以发现新的作品、结交志同道合的朋友、深入了解ACGN文化。十二社区将持续不断地为用户带来更多精彩的ACGN资源和丰富的社区体验，让每位用户都能在这里找到属于自己的ACGN乐园。
                <br/><br/>&#12288二.光影传奇
                <br/>&#12288&#12288"光影传奇"是一个致力于为用户提供丰富多样的影视资源的专业影视资源站。作为一个热爱电影和电视剧的平台，光影传奇致力于为用户提供高质量的影视内容和优秀的观影体验。
                <br/>&#12288&#12288光影传奇汇集了丰富多样的影视作品，涵盖了各个流派和类型，包括热门大片、经典影片、最新电视剧等。学生们可以在平台上找到自己喜欢的影视作品，并进行在线观看或下载。
                <br/>&#12288&#12288作为一个专业的影视资源站，光影传奇致力于提供高清流畅的影视播放服务。平台采用先进的视频播放技术，只需要下载JoyView插件，便可对想看的电影边下边播，清晰、流畅的影视画面将立即呈现在学生们的眼前。
                <br/>&#12288&#12288光影传奇注重用户体验和平台安全，致力于为用户提供友好、便捷的浏览和使用环境。平台界面简洁明了，用户可以轻松地浏览、搜索和筛选自己感兴趣的影视作品。同时，作为南开校内网站自然只有南开相关人员才可登录浏览，平台以此保护学生的个人信息的安全性。
                <br/>&#12288&#12288无论您是喜欢大片还是热衷于追剧，光影传奇都将成为您的影视娱乐首选。在这里，您可以发现新的电影和电视剧作品，追随热门影视剧集，以及与其他影迷一起分享观影心得和讨论。光影传奇将持续为用户带来更多精彩的影视资源和优质的观影体验，为您打造一个全新的影视世界。让我们一起享受电影和电视剧带来的魅力，共同探索光影传奇的无限精彩。
                <br/><br/>&#12288三.软件资产管理平台
                <br/>&#12288&#12288南开校内的软件资源管理平台是为学生和教职员工提供便捷访问和管理各类软件资源的专业平台。该平台的目标是为校内用户提供高效、安全、便捷的软件资源服务，满足学习、教学和科研的需求。
                <br/>&#12288&#12288首先，平台汇集了丰富多样的软件资源，包括学习工具、专业软件、编程开发工具等。学生和教职员工可以通过平台快速访问所需的软件资源。这大大节省了寻找资源的时间和精力，提高了学习和工作效率。
                <br/>&#12288&#12288其次，平台提供了一体化的软件资源管理功能。用户可以通过平台对软件进行分类、搜索、下载和安装，方便地管理个人使用的软件。同时，平台还支持软件版本管理和更新提示，确保用户始终使用最新、稳定的软件版本。
                <br/>&#12288&#12288平台注重用户体验和数据安全。界面简洁、易用，用户可以快速找到所需的软件资源。同时，作为南开校内网站自然只有南开相关人员才可登录浏览，平台以此保护学生和教工的个人信息的安全性。学生教工们可以放心使用平台提供的软件资源，享受稳定、可靠的服务。
                <br/>&#12288&#12288此外，该平台还提供了用户反馈和支持渠道。用户可以通过平台反馈意见和问题，并获得及时的技术支持。平台团队会不断改进和更新软件资源，根据学生和教工的需求提供更好的服务。
                <br/>&#12288&#12288该高校校内的软件资源管理平台旨在为学生和教职员工提供便捷的软件资源访问和管理体验。通过该平台，用户可以快速获取所需的软件资源，提升学习和工作效率。同时，平台还致力于保护用户数据安全，提供优质的用户支持。让我们一起利用这个专业平台，充分发挥软件资源的作用，为学校的教学和科研工作做出贡献。
                </p >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ElMessage, ElMessageBox } from 'element-plus'
export default {
  data() {
    return {
      currentPage: 'cloud' // 默认显示云学习平台内容
    };
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
    reserve() {
        ElMessageBox.alert(
                "",
                "请认领您的令牌",
                {
                }
            ).then(() => {
                //在这里post！！！！！
            });
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border: none;
}

.navbar-logo img {
  margin-left: 100px;
  height: 100px;
}

.navbar-menu {
  display: flex;
  flex-grow: 1;
  justify-content: center;
}

.navbar-menu-wrapper {
  display: flex;
  justify-content: flex-start;
  margin-right: 260px; /* 调整右边距 */
}

.navbar-item {
  margin-right: 40px; /* 调整菜单按键之间的间隔 */
  color: black;
  font-size: 30px; /* 调整字体大小 */
  text-decoration: none;
  transition: font-weight 0.3s, border-bottom 0.3s;
}

.navbar-item.active {
  font-weight: bold;
  border-bottom: 2px solid #872f6d; /* 调整选中时的下划线颜色 */
  color: #872f6d; /* 调整选中时的字体颜色 */
}

.reserve-button {
  text-align: center;
  margin-top: 20px;
}

.reserve-button button {
  padding: 10px 20px;
  background-color: #872f6d;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.color-bar {
  height: 20px;
  background-color: #872f6d;
}

.section-title {
  background-color: #872f6d;
  color: #ffffff;
  padding: 10px;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
}

.content-page {
  width: 100%;
  height: 100%;
}

.content-shadow {
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
  height: 100%;
}

.cloud-page {
  padding: 0 300px; /* 左右留出300px的空白 */
}
.media-page {
  padding: 0 300px; /* 左右留出300px的空白 */
}

.other-page {
  padding: 0 300px; /* 左右留出300px的空白 */
}

.content-wrapper {
  height: 100%;
}

.content-section {
  display: flex;
  margin-bottom: 10px; /* 分隔空隙 */
}

.content-section-left {
  width: 50%;
}

.content-image img {
  width: 100%;
}

.content-section-right {
  width: 50%;
}

.content-introduction {
  padding: 0 50px; /* 分隔空隙 */
}

.content-details {
  padding: -30 50px; /* 分隔空隙 */
}
</style>