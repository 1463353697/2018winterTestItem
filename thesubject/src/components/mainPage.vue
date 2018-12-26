<template>
<!-- 新 Bootstrap 核心 CSS 文件 -->

    <div class="mainPage">
        <div class="nav">
            <el-tabs>
                <el-tab-pane label= "全部">
                   
                    <div class="mainBlock">
                        <ul>
                            
                                <li class="articles" v-for="articleIfm in allListData">
                                    <router-link :to = "{ name: 'article', params: { id:articleIfm.id}}" >
                                        <!-- 作者头像 -->
                                        <div>
                                            <!-- 注意这里用vue的时候不能直接用大括号，要用属性绑定 -->
                                            <img  :src="articleIfm.author.avatar_url"> 
                                        </div>
                                        <!-- 分类和置顶 -->
                                        
                                        <!-- 标题等信息 -->
                                        <div class="titleAnd">
                                            <h4>{{articleIfm.title}}<button>{{articleIfm.tab}}</button></h4>
                                            <span>
                                                <p>{{articleIfm.reply_count}}人次访问</p>
                                                |
                                                <p>{{articleIfm.visit_count}}条评论</p>
                                                <p>{{articleIfm.last_reply_at}}</p>
                                            </span>
                                            
                                        

                                        </div>
                                        
                                    </router-link>
                                </li>
                            
                        </ul>
                    </div>
                    
                </el-tab-pane>
                <el-tab-pane  label= "问答">

                    
                    <div  class="mainBlock">
                        <ul id="askBlock">
                            <li class="articles" v-for="articleIfm in askData">
                                <router-link :to = "{ name: 'article', params: { id:articleIfm.id}}" >
                                    <!-- 作者头像 -->
                                    <div>
                                        <!-- 注意这里用vue的时候不能直接用大括号，要用属性绑定 -->
                                        <img  :src="articleIfm.author.avatar_url"> 
                                    </div>
                                    <!-- 分类和置顶 -->
                                    
                                    <!-- 标题等信息 -->
                                    <div class="titleAnd">
                                        <h4>{{articleIfm.title}}<button>{{articleIfm.tab}}</button></h4>
                                        

                                    
                                        <span>
                                            <p>{{articleIfm.reply_count}}人次访问</p>
                                            |
                                            <p>{{articleIfm.visit_count}}条评论</p>
                                            <p>{{articleIfm.last_reply_at}}</p>
                                        </span>
                                        
                                    

                                    </div>
                                    <!-- 最后回复时间 -->
                                    <!-- <div class="time">
                                        <p>{{articleIfm.last_reply_at}}</p>

                                    </div> -->
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    
                    
                </el-tab-pane>
                <el-tab-pane label= "分享">
                    
                    <div  class="mainBlock">
                        <ul >
                            <li class="articles" v-for="articleIfm in shareData">
                                <router-link :to = "{ name: 'article', params: { id:articleIfm.id}}" >
                                    <!-- 作者头像 -->
                                    <div>
                                        <!-- 注意这里用vue的时候不能直接用大括号，要用属性绑定 -->
                                        <img  :src="articleIfm.author.avatar_url"> 
                                    </div>
                                    <!-- 分类和置顶 -->
                                    
                                    <!-- 标题等信息 -->
                                    <div class="titleAnd">
                                        <h4>{{articleIfm.title}}<button>{{articleIfm.tab}}</button></h4>
                                        <span>
                                            <p>{{articleIfm.reply_count}}人次访问</p>
                                            |
                                            <p>{{articleIfm.visit_count}}条评论</p>
                                            <p>{{articleIfm.last_reply_at}}</p>
                                        </span>
                                        
                                    

                                    </div>
                                    <!-- 最后回复时间 -->
                                    <!-- <div class="time">
                                        <p>{{articleIfm.last_reply_at}}</p>

                                    </div> -->
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    
                </el-tab-pane>
                <el-tab-pane label= "招聘">
                   
                    <div class="mainBlock">
                        <ul>
                            
                                <li class="articles" v-for="articleIfm in jobData">
                                    <router-link :to = "{ name: 'article', params: { id:articleIfm.id}}" >
                                        <!-- 作者头像 -->
                                        <div>
                                            <!-- 注意这里用vue的时候不能直接用大括号，要用属性绑定 -->
                                            <img class="lazy" :src="articleIfm.author.avatar_url"> 
                                        </div>
                                        <!-- 分类和置顶 -->
                                        
                                        <!-- 标题等信息 -->
                                        <div class="titleAnd">
                                            <h4>{{articleIfm.title}}<button>{{articleIfm.tab}}</button></h4>
                                            <span>
                                                <p>{{articleIfm.reply_count}}人次访问</p>
                                                |
                                                <p>{{articleIfm.visit_count}}条评论</p>
                                                <p>{{articleIfm.last_reply_at}}</p>
                                            </span>
                                            
                                        

                                        </div>
                                        
                                    </router-link>
                                </li>
                            
                        </ul>
                    </div>
                    
                </el-tab-pane>
                
                <el-tab-pane label= "精华">

                    
                    <div  class="mainBlock">
                        <ul >
                            <li class="articles" v-for="articleIfm in goodData">
                                <router-link :to = "{ name: 'article', params: { id:articleIfm.id}}" >
                                    <!-- 作者头像 -->
                                    <div>
                                        <!-- 注意这里用vue的时候不能直接用大括号，要用属性绑定 -->
                                        <img  :src="articleIfm.author.avatar_url"> 
                                    </div>
                                    <!-- 分类和置顶 -->
                                    
                                    <!-- 标题等信息 -->
                                    <div class="titleAnd">
                                        <h4>{{articleIfm.title}}<button>{{articleIfm.tab}}</button></h4>
                                        <span>
                                            <p>{{articleIfm.reply_count}}人次访问</p>
                                            |
                                            <p>{{articleIfm.visit_count}}条评论</p>
                                            <p>{{articleIfm.last_reply_at}}</p>
                                        </span>
                                        
                                    

                                    </div>
                                    <!-- 最后回复时间 -->
                                    <!-- <div class="time">
                                        <p>{{articleIfm.last_reply_at}}</p>

                                    </div> -->
                                </router-link>
                            </li>
                            
                        </ul>
                    </div>
                    
                    
                </el-tab-pane>

            </el-tabs>
            
        </div>
        
    </div>
    
</template>

 
<!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
<script src="https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"></script>
 
<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script>

// import lazyload from "jquery-lazyload";
import axios from "axios";
import underscore from "underscore";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

export default {
    data(){
        return{
            allListData:[],
            askData:[],
            shareData:[],
            goodData:[],
            jobData:[]
            

        }
    },
    created: 
        function(){
            axios.get("https://cnodejs.org/api/v1/topics")
            .then(response=>{
                
                this.allListData = response.data.data;
                console.log(response);
                
                console.log("加载完毕");
                
                let routerTo = { name: 'article', params: { id:this.id}};
                let askData = [];
                let shareData = [];
                let goodData = [];
                let jobData = [];
                // console.log(routerTo.name);
                // 循环获取到的数据，筛选类别，放入不同的数组
                for(var i = 0; i<this.allListData.length;i++){
                    if(this.allListData[i].tab=="ask"){
                        askData.push(this.allListData[i]);
                    }

                    if(this.allListData[i].tab=="share"){
                        shareData.push(this.allListData[i]);
                    }

                    if(this.allListData[i].tab=="job"){
                        jobData.push(this.allListData[i]);
                    }

                     if(this.allListData[i].good == true){
                        goodData.push(this.allListData[i]);
                    }


                    
                }

                //将数组赋给相应插值的数据
                
                this.askData = askData;              
                this.shareData = shareData;
                this.jobData = jobData;
                this.goodData = goodData;
                


        
            

            })
            .catch(error=>{
                console.log(error);

            })
        },
    mounted:
        function(){
            
            var askLi = document.getElementById('askBlock').getElementsByTagName('li');
            
            
            
           
            
        }
        
    
   
    
}

    
</script>
<style>
    
    /* .el-tabs__active-bar {
        width: 20% !important;
    }
    .el-tabs__content {
        padding: 0px 40px !important;
    }
    .el-tabs__item {
        padding: 0 80px !important;
    } */
    .el-tabs {
        width: 100% !important;
    }
    .el-tabs__header {
        width:100% !important;
    }
    .el-tabs__nav {
        width: 100% !important;
    }
    .el-tabs__nav-wrap {
        width: 100% !important;
    }
    .el-tabs__active-bar {
        width: 18% !important;
    }
    .el-tabs__item {
        padding: 0 9% !important;
    }
    

    

</style>
<style scoped>
    /* template {
        display:flex;
        width:100%;
    } */
    .mainBlock a {
        display:flex;
        color:black;
    }
    .mainPage {
        display: flex;
        justify-content: flex-start ;
        flex-wrap: wrap;
        width:100%;
        

    }
    .nav {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 100%;
        /* background-color: rgb(68, 124, 170); */
        
    }
    
    .mainBlock {
        display:flex;
        
        margin-top: 3%;
        width: 100%;
        /* border: 1px solid rgb(200, 194, 194);
        border-radius: 5px; */
        /* background-color: pink; */
        
    }
    .mainBlock ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;


    }
    .mainBlock li{
        display:flex;
        width:80%;
        border: 1px solid rgb(200, 194, 194);
        border-radius: 5px;
        margin-bottom: 5px;
        
        
    }
    .mainBlock a {
        width:100%;
    }
    .mainBlock {
        display:flex;
        
    }
    .articles {
        padding: 0.5% 0.5%;
        position: relative;
        display: flex;

    }
    .articles .tags{
        margin: 2% 2%;
    }
    .articles img {
        
        width: 80px;
        height: 80px;
        border-radius: 20px;
    }
    /* .articles .tags button {
        padding: 8px 10px;
        background-color: rgb(68, 124, 170);
        color: #ffffff;
        border: 0px;
    } */
    .titleAnd {
        margin:1% 2%;
        width:90%;

    }
    .titleAnd h4 {
        width: 80%;
    }
    
    .titleAnd span {
        margin-top:10px;
        display: flex;
    }
    .titleAnd button {
        padding: 0.8% 1.3%;
        margin-left: 0.5%;
        background-color: rgb(68, 124, 170);
        color: #ffffff;
        border: 1px;
        border-radius: 5px;

    }
    .titleAnd span p{
        margin: 0 0.7%;
    }
    

</style>
