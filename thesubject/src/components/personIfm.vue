<template>
    <div class="personIfm">
        <div class="personBlock">
            <div class="headAndname">
                <img src="http://image.biaobaiju.com/uploads/20180802/01/1533145434-yGPirmnoVd.jpg" >
                <div class="introdution">
                    <h1 id="personName">someone</h1>
                    <p id="personSl">balabalabala</p>       
                </div>
            </div>  
            <div class="detailIfm">
                <div class="detailIfmBlock">
                    <span>
                        <i class="icon iconfont icon-_rili"></i>
                        <h4>年龄</h4>
                        <p>19</p>
                    </span>
                    <span>
                        <i class="icon iconfont icon-_dingwei"></i>
                        <h4>所在地</h4>
                        <p>重庆</p>
                    </span>
                    <span>
                        <i class="icon iconfont icon-_youjian"></i>
                        <h4>邮箱</h4>
                        <p>1463353697@qq.com</p>
                    </span>
                    <span>
                        <i class="icon iconfont icon-_geren"></i>
                        <h4>性别</h4>
                        <p></p>
                    </span>
                    <span>
                        <i class="icon iconfont icon-_shenpi"></i>
                        <!-- 注意这里的个性签名和introdution里的个性签名获取的是同一个数据 -->
                        <h4>个性签名</h4>
                        <p>bbbblllll</p>
                    </span>
                    <span>
                        <i class="icon iconfont icon-_shouji"></i>
                        <h4>手机号</h4>
                        <p>12345678978</p>
                    </span>
                    <span>
                        <i class="icon iconfont icon-_shizhong"></i>
                        <h4>注册时间</h4>
                        <!-- 注意这里的注册时间是不可更改的 -->
                        <p>2018.12.01</p>
                    </span>
                </div>
                
                
            </div> 
            <div class="changeIfm"><p>修改资料</p></div>
            <div class="changeIfmBlock">
                <div>
                        
                    <h4>年龄</h4>
                    <input>
                </div>
                <div>
                       
                    <h4>所在地</h4>
                    <input>
                </div>
                <div>
                       
                    <h4>邮箱</h4>
                    <input>
                </div>
                <div>
                        
                    <h4>性别</h4>
                    <input>
                </div>
                <div>
                        
                    <!-- 注意这里的个性签名和introdution里的个性签名获取的是同一个数据 -->
                    <h4>个性签名</h4>
                    <input>
                </div>
                <div>
                       
                    <h4>手机号</h4>
                    <input>
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
    .personIfm {
        display: flex;
        justify-content: center;

    }
    .personBlock {
        position: relative;
        
        width:900px;

    }
    .headAndname {
        display: flex;
        align-items: flex-end;

    }
    .headAndname img {
        width: 80px;
        height: 80px;
        border-radius: 40px;   

    }
    .introdution {
        margin-left: 20px;
        display: flex;
        flex-direction: column;



    }
    .detailIfm {
        margin-top: 35px;
        border:solid 1px pink;
    }
    
    .detailIfmBlock {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 20px; 
        margin:20px 30px;
       
    }
    .detailIfmBlock span {
        display: flex;
        align-items: flex-end;
        margin: 20px 0px;
    }
    
    .detailIfmBlock h4 {
        margin: 0px 20px 0px 20px;
    }
    .changeIfm {
        margin-top:15px;
        cursor: pointer;
    }
    .changeIfmBlock {
        display: none;
        position: absolute;
        width:300px;
        top: 300px;
        background-color: #fff;
        border: solid 1px pink;
    }
    .changeIfmBlock div {
        margin: 15px 15px;
    }

</style>


