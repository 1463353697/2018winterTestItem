<template>
    <div class="mainPage">
        <div class="nav">
            <el-tabs>
                <el-tab-pane label= "全部">
                    
                   
                        <div class="mainBlock">
                            <ul id="allBlock">                           
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
                        <ul id="shareBlock" >
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
                        <ul id="jobBlock">
                            
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
                        <ul id="goodBlock" >
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


<script src="https://code.jquery.com/jquery-3.0.0.min.js"></script>
 

<script>


import Vue from 'vue'
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
import axios from "axios";
import underscore from "underscore";



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
            //这是封装的一个函数，它可以改变时间的格式
            function changeTime(gainTime){
                
                function convertUTCTimeToLocalTime (UTCDateString) {
                    if(!UTCDateString){
                    return '-';
                    }
                    function formatFunc(str) {    //格式化显示
                    return str > 9 ? str : '0' + str
                    }
                    var date2 = new Date(UTCDateString);     //这步是关键
                    var year = date2.getFullYear();
                    var mon = formatFunc(date2.getMonth() + 1);
                    var day = formatFunc(date2.getDate());
                    var hour = date2.getHours();
                    
                    hour = formatFunc(hour);
                    var min = formatFunc(date2.getMinutes());
                    var dateStr = year+'-'+mon+'-'+day+' '+hour+':'+min;
                    return dateStr;
                }
             
                var eThetime =  convertUTCTimeToLocalTime(gainTime);
                var theTime = new Date(eThetime);
                var nowTime = new Date();
                var tms = nowTime.getTime() - theTime.getTime();
                var ts = tms/1000;
                //不到一小时的情况
                if(ts<(60*60)){
                    let minutes = parseInt(ts/60) + "分钟前";
                    gainTime = minutes;
                    return gainTime;
                }
                
                //不到一天的情况
                if(ts>(60*60) && ts<(24*60*60)){
                    let hours = parseInt(ts/(60*60)) + "小时前";
                    gainTime = hours;
                    return gainTime ;

                }
                //时间大于一天
                if(ts>(24*60*60)){
                    let days = parseInt(ts/(60*60*24)) + "天前";
                    gainTime = days;
                    return gainTime;

                }
            }
            //请求“全部”
            let theAllGet = "https://cnodejs.org/api/v1/topics?limit="+9+"&page="+1;
            axios.get(theAllGet)
            .then(response=>{       
                this.allListData = response.data.data;
                for(let i=0;i<this.allListData.length;i++){
                   this.allListData[i].last_reply_at= changeTime(this.allListData[i].last_reply_at);
                }
                // let routerTo = { name: 'article', params: { id:this.id}}
            })
            .catch(error=>{
                console.log(error);
            });
            //请求“问答”
            let theAskGet = "https://cnodejs.org/api/v1/topics?limit="+9+"&page="+1+"&tab=ask";
            axios.get(theAskGet)
            .then(response=>{
                console.log(response.data.data);
                this.askData = response.data.data;
                console.log(this.askData[0].tab);
                for(let i=0;i<this.askData.length;i++){
                   this.askData[i].last_reply_at= changeTime(this.askData[i].last_reply_at);
                }

            })
            .catch(error=>{
                console.log(error);
            })
            //请求“分享”
            let theShareGet = "https://cnodejs.org/api/v1/topics?limit="+9+"&page="+1+"&tab=share";
            axios.get(theShareGet)
            .then(response=>{
                this.shareData = response.data.data;
                
                for(let i=0;i<this.shareData.length;i++){
                   this.shareData[i].last_reply_at= changeTime(this.shareData[i].last_reply_at);
                }

            })
            .catch(error=>{
                console.log(error);
            })
            //请求“精华”
            let theGoodGet = "https://cnodejs.org/api/v1/topics?limit="+9+"&page="+1+"&tab=good";
            axios.get(theGoodGet)
            .then(response=>{
                console.log(response.data.data);
                this.goodData = response.data.data;
                
                for(let i=0;i<this.goodData.length;i++){
                   this.goodData[i].last_reply_at= changeTime(this.goodData[i].last_reply_at);
                }

            })
            .catch(error=>{
                console.log(error);
            })
            //请求“招聘”
            let theJobGet = "https://cnodejs.org/api/v1/topics?limit="+9+"&page="+1+"&tab=job";
            axios.get(theJobGet)
            .then(response=>{
                
                this.jobData = response.data.data;
               
                for(let i=0;i<this.jobData.length;i++){
                   this.jobData[i].last_reply_at= changeTime(this.jobData[i].last_reply_at);
                }

            })
            .catch(error=>{
                console.log(error);
            })
            
            

           
								


            
            
        },
    mounted:
        function(){
            
            var askLi = document.getElementById('allBlock').getElementsByTagName('li');
            
            
            
            
           
            
        }
        
    
   
    
}

    
</script>
<style>
    
    
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
