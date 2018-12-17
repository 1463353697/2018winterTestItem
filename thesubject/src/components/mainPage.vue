<template>
    <div class="mainPage">
        <div class="nav">
            <el-tabs>
                <el-tab-pane label= "全部">
                    全部
                    <div class="mainBlock"></div>
                        <ul>
                            <li class="articles" v-for="articleIfm in listData">
                                <!-- 作者头像 -->
                                <div>
                                    <!-- 注意这里用vue的时候不能直接用大括号，要用属性绑定 -->
                                    <!-- <img :src="articleIfm.author.avatar_url">  -->
                                </div>
                                <!-- 分类和置顶 -->
                                <div class="tags">
                                    <button>{{articleIfm.tab}}</button>

                                </div>
                                <!-- 标题等信息 -->
                                <div class="titleAnd">
                                    <h2>{{articleIfm.title}}</h2>
                                    <span>
                                        <p>{{articleIfm.reply_count}}人次访问</p>
                                        |
                                        <p>{{articleIfm.visit_count}}条评论</p>
                                    </span>
                                    
                                

                                </div>
                                <!-- 最后回复时间 -->
                                <div class="time">
                                    <p>{{articleIfm.last_reply_at}}</p>

                                </div>
                            </li>
                        </ul>
                    
                </el-tab-pane>
                <el-tab-pane label= "问答">
                    问答
                    
                </el-tab-pane>
                <el-tab-pane label= "分享">
                    分享
                    
                </el-tab-pane>
                <el-tab-pane label= "招聘">
                    招聘
                    
                </el-tab-pane>
                <el-tab-pane label= "精华">
                    精华
                    
                </el-tab-pane>

            </el-tabs>
            <!-- <div>全部</div>
            <div>问答</div>
            <div>分享</div>
            <div>招聘</div>
            <div>精华</div> -->
        </div>
        <div class="mainBlock">
            <ul>
                <li class="articles">
                    <!-- 作者头像 -->
                    <div>
                        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=853542327,996943148&fm=27&gp=0.jpg"> 
                    </div>
                    <!-- 分类和置顶 -->
                    <div class="tags">
                        <button>置顶</button>

                    </div>
                    <!-- 标题等信息 -->
                    <div class="titleAnd">
                        <h2>bbbaaalll</h2>
                        <span>
                            <p>123人次访问</p>
                            |
                            <p>52条评论</p>
                        </span>
                        
                    

                    </div>
                    <!-- 最后回复时间 -->
                    <div class="time">
                        <p>12小时前</p>

                    </div>
                </li>
            </ul>

        </div>
    </div>
    
</template>
<script>
import axios from "axios";
export default {
    data(){
        return{
            listData:[]

        }
    },

    // 这里请求成功但是获取不到任何数据
    created: function(){
        axios.get("https://cnodejs.org/api/v1/topics")
        .then(response=>{
            
            this.listData = response.data;
            console.log(response);
            console.log(this.listData.data[0].tab);
            console.log("加载完毕");
           

        })
        .catch(error=>{
            console.log(error);

        })
    }
    
}
</script>
<style scoped>
    .mainPage {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

    }
    .nav {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        /* background-color: rgb(68, 124, 170); */
        
    }
    /* 这里记得修改组件的样式 */
   /* el-tabs  {    
        color: #ffffff;
        padding: 80px 45px;  
    }
    .nav el-tabs:hover{
        background-color: rgb(237, 227, 241);
        color: black;
    } */
    .mainBlock {
        
        margin-top: 45px;
        width: 100%;
        border: 1px solid rgb(200, 194, 194);
        border-radius: 5px;
        /* background-color: pink; */
        
    }
    .articles {
        padding: 5px 5px;
        position: relative;
        display: flex;

    }
    .articles .tags{
        margin: 25px 10px;
    }
    .articles img {
        
        width: 80px;
        height: 80px;
        border-radius: 20px;
    }
    .articles .tags button {
        padding: 8px 10px;
        background-color: rgb(68, 124, 170);
        color: #ffffff;
        border: 0px;
    }
    .titleAnd {
        margin:10px 20px;
    }
    .titleAnd span {
        margin-top:10px;
        display: flex;
    }
    .titleAnd span p{
        margin: 0px 5px;
    }
    .articles .time {
        position: relative;
        top: 45px;
        left: 20px;
    }

</style>
