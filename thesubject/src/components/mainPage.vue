<template>
    <div class="mainPage">
        <div class="nav">
            <div>全部</div>
            <div>问答</div>
            <div>分享</div>
            <div>招聘</div>
            <div>精华</div>
        </div>
        <div class="mainBlock">
            <div class="articles">
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
            </div>

        </div>
    </div>
    
</template>
<script>
export default {
    
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
        background-color: rgb(68, 124, 170);
        
    }
    .nav div {    
        color: #ffffff;
        padding: 10px 45px;  
    }
    .nav div:hover{
        background-color: rgb(237, 227, 241);
        color: black;
    }
    .mainBlock {
        
        margin-top: 45px;
        width: 900px;
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
        left: 450px;
    }

</style>
