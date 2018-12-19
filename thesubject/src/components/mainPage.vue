<template>
    <div class="mainPage">
        <div class="nav">
            <el-tabs>
                <el-tab-pane label= "全部">
                    全部
                    <div class="mainBlock">
                        <ul>
                            <li class="articles" v-for="articleIfm in allListData">
                                <!-- 作者头像 -->
                                <div>
                                    <!-- 注意这里用vue的时候不能直接用大括号，要用属性绑定 -->
                                    <img class="lazy" :src="articleIfm.author.avatar_url"> 
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
                    </div>
                    
                </el-tab-pane>
                <el-tab-pane id="askBlock" label= "问答">
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
            
        </div>
        
    </div>
    
</template>
<script src="jquery.js"></script>
<script src="jquery.lazyload.js"></script>
<script>
import axios from "axios";
export default {
    data(){
        return{
            allListData:[]

        }
    },

    
    created: function(){
        axios.get("https://cnodejs.org/api/v1/topics")
        .then(response=>{
            
            this.allListData = response.data.data;
            console.log(response);
            
            console.log("加载完毕");
           

        })
        .catch(error=>{
            console.log(error);

        })
    },
    function(){
        var askLi = document.getElementById('askBlock').getElementsByTagName('li');
        for(var i = 0; i<askLi.length;i++){
            if(this.allListData[i].tab != "ask"){
                askLi[i].style.display = "none";
            }
        }
    }
   
    
}
    // window.onload = function(){
    //     var askLi = document.getElementById('askBlock').getElementsByTagName('li');
    //     for(var i = 0; i<askLi.length;i++){
    //         if(this.allListData[i].tab != "ask"){
    //             askLi[i].style.display = "none";
    //         }
    //     }

    // }
    // $(function(){
    //     $("img.lazy").lazyload();
    // })
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
