<template>
    <div class="article">
        <div class="articleBlock">
            <div class="head">
                
                <h2>文章标题</h2>
                <!-- 点开预览时要展示相应的文章，要通过文章相应的ID值来实现 -->
            
                <div class="detailIfm">
                    <li>
                        <span>发布于</span>
                        <span>2天</span>
                        <span>前 /</span>
                    </li>
                    <li>
                        <span>作者</span>
                        <span>you /</span>
                    </li>
                    <li>
                        <span>2018</span>
                        <span>次浏览/</span>
                    </li>
                </div>
            </div>

            
            <!-- 这一块是文章的具体内容，要从接口里面获取 -->
            <!-- 可以使用v-for绑定和vue模板来展示文章列表 -->
            <div class="articleBlock">
                <p>这是文章的具体内容</p>

            </div>

            <!-- 这是点赞评论区 -->
            <div>
                <!-- 点赞数 -->
                <div><p>365</p></div>

                <!-- 添加评论 -->
                <div class="yourComment">
                    <div class="imgBlock">
                        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1583895718,339987571&fm=200&gp=0.jpg">
                        <p>说说你的看法</p>
                    </div>
                    <input>
                    <button>发表评论</button>
                </div>

                <!-- 评论列表 -->
                <div class="comments">
                    <div class="ifm">
                        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1583895718,339987571&fm=200&gp=0.jpg">
                        <div class="detail">
                            <p>name</p>
                            <p>21天前</p>
                            <p>点赞数</p>
                        </div>
                    </div>
                    <!-- 评论的内容 -->
                    <div class="words" >
                        <p>这是评论的内容</p>
                    </div>
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
    computed:{
        getId(){
            return this.$route.params.id;
        }
    },
    created:
        function(){
            console.log(this.theId);
           
            // var theGet = "https://cnodejs.org/api/v1/topic/"+this.theId;
            // axios.get(theGet)
            // .then(response=>{
            //     this.theArticle = response.data.data;

            // })
            // .catch(error=>{
            //     console.log(error);
            // })
        },
    mounted:
        function(){
            var theGet = "https://cnodejs.org/api/v1/topic/:"+this.$route.params.id;
        }
    
    
}
</script>
<style scoped>
    .article {
        display: flex;
        justify-content: center;
        
    }
    .articleBlock {
        width: 70%;
        display: flex;
        flex-direction: column;
            
            
        background-color: yellow;
    }
    .articleBlock .head {
        width:100%;
        display: flex;
        flex-direction: column;
        background-color: pink;
    }
    .detailIfm {
        display: flex;
            
        /* margin: 8px 10px; */
 
    }
    .detailIfm li {
        display: flex;
        margin-right: 20px;
    }
    .yourComment .imgBlock {
        display: flex;
    }
    .yourComment .imgBlock p {
        margin: 8px;
    }
    .yourComment img {
        width: 50px;
        height: 50px;
        border-radius: 25px;
    }
    .comments {
        border: 1px solid grey;
        padding: 5px;
        border-radius: 5px;
    }
    .comments .ifm {
        display: flex;
    }
    .comments .ifm img {
        width: 50px;
        height: 50px;
        border-radius: 25px;
    }
    .comments .ifm .detail {
        margin-top: 18px;
        display: flex;
    }
    .comments .ifm .detail p{
        margin-right: 20px;
    }
    .comments .words {
        margin-top: 10px;
    }
        

</style>


