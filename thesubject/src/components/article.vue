<template>
    <div class="article">
        <div class="articleBlock">
            <!-- 这里是有关文章发布的一些信息 -->
            <div class="head">
                <h3>{{theArticle.title}}</h3>
                
            
                <div class="detailIfm">
                    <li>
                        <img :src="theArticle.author.avatar_url">
                    </li>
                    <li>
                       
                        <span>发布于{{theArticle.create_at}}</span>
                        
                    </li>
                    <li>
                        <span>作者{{theArticle.author.loginname}}</span>
                        
                    </li>
                    <li>
                        <span>{{theArticle.visit_count}}次浏览</span>
                        
                    </li>
                </div>
            </div>

            
            <!-- 这一块是文章的具体内容，要从接口里面获取 -->
            
            <div class="content">
                <!-- 文章的具体内容 -->
                <p v-html = "theArticle.content"></p>

            </div>

            <!-- 这是点赞评论区 -->
            <div>
                <!-- 点赞数，貌似文章没有点赞数 -->
                <!-- <div><p>点赞数</p></div> -->

                <!-- 添加评论这一块暂时当做保留项目，有余力时可尝试 -->
                <!-- <div class="yourComment">
                    <div class="imgBlock">
                        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1583895718,339987571&fm=200&gp=0.jpg">
                        <p>说说你的看法</p>
                    </div>
                    <input>
                    <button>发表评论</button>
                </div> -->

                <!-- 评论列表，这里通过v-for循环来实现 -->
                <div class="comments">
                    <ul>
                        <li v-for="reply in theArticle.replies">
                            <div class="ifm">
                                <img :src="reply.author.avatar_url">
                                <div class="detail">
                                    <p>{{reply.author.loginname}}</p>
                                    <p>{{reply.create_at}}</p>
                                    <p>点赞数{{reply.ups.length}}</p>
                                </div>
                            </div>
                            <!-- 评论的内容 -->
                            <div class="words" >
                                <p v-html="reply.content"></p>
                                
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        
        </div>
    </div>
    
</template>
<script>
import axios from "axios";
export default {
    data(){
        return{
            theArticle:"",
            
            theId:this.$route.params.id


        }
    },
    
    created:
        function(){
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
            console.log(this.theId);
            var requestId = this.theId;
            var theGet = "https://cnodejs.org/api/v1/topic/"+requestId;
            axios.get(theGet)
            .then(response=>{
                this.theArticle = response.data.data;
                this.theArticle.create_at = changeTime(this.theArticle.create_at);
               
                console.log(response);

            })
            .catch(error=>{
                console.log(error);
            })
        },
    mounted:
        function(){
            // var theGet = "https://cnodejs.org/api/v1/topic/:"+this.$route.params.id;
        }
    
    
}
</script>
<style scoped>
    .article {
        display: flex;
        justify-content: center;
        
    }
    .articleBlock {
        width: 90%;
        display: flex;
        flex-direction: column;
            
            
        
    }
    .articleBlock .head {
        width:100%;
        display: flex;
        flex-direction: column;
       
    }
    .detailIfm {
        display: flex;
        align-items: center;
            
 
    }
    .detailIfm li {
        display: flex;
        margin-right: 20px;
        margin: 1% 0.2%;
    }
    
    .detailIfm img {
        width: 60px;
        height: 60px;
        border-radius: 20px;

    }
    .comments {
        display:flex;
    }
    .comments img{
        width:80%;
    }
    /* .yourComment .imgBlock {
        display: flex;
    }
    .yourComment .imgBlock p {
        margin: 8px;
    }
    .yourComment img {
        width: 50px;
        height: 50px;
        border-radius: 25px;
    } */
    .comments {
        border: 1px solid grey;
        padding: 1%;
        border-radius: 5px;
    }
    
    .comments li {
        list-style: none;
        padding: 1% 0;
    }
    .comments .ifm {
        display: flex;
    }
    .comments .ifm img {

        width: 80%;
    }
    .comments .ifm img {
        width: 50px;
        height: 50px;
        border-radius: 25px;
    }
    .comments .ifm .detail {
        width: 100%;
        margin: 1% 1%;
        display: flex;
    }
    .comments .ifm .detail p{
        margin-right: 1.5%;
    }
    .comments .words {
        margin-top: 0.5%;
        margin-left: 4%;
        
    }
        

</style>


