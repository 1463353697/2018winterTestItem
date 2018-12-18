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
            <div class="detailIfm" id="showIfm">
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

            
            <!-- 这里尝试过用子路由的方法，但是失败了 -->
            <!-- <router-link class="changeBlock" to="/personIfm/changeIfm">修改资料</router-link> -->
            <div class="changeIfm" id="changeBtn"><p>修改资料</p></div>

            <!-- 这下面是点击修改资料之后弹出来的修改框 -->
            <div class="changeIfmBlock" id="changeBlock">
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
                    <textarea></textarea>
                </div>
                <div>
                       
                    <h4>手机号</h4>
                    <input>
                </div>
                <div id="changeIfmBtn">
                    <button>修改</button>
                    <button id="cancel">取消</button>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
export default {
    
}
    window.onload = function(){

        // 这里是点击修改资料之后，弹出修改资料的框
        var btn = document.getElementById('changeBtn');
        // 这是展示个人信息的板块
        var showIfm = document.getElementById('showIfm');

        var changeBlock = document.getElementById('changeBlock');
        // btn.onclick = function(){
        //     changeBlock.style.display = "block";
        //     showIfm.style.filter = "opacity(50%)";
        //     showIfm.style.backgroundColor = "grey";
            
        // } 
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
        border:solid 1px rgb(195, 227, 236);
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
        cursor: pointer;
    }
    .changeBlock {
        margin-top:15px;
        cursor: pointer;
    }
    .changeIfmBlock {
        display: none;
        position: absolute;
        width:300px;
        top: 25%;
        left: 10%;
        background-color: #fff;
        border: solid 1px rgb(195, 227, 236);
    }
    .changeIfmBlock div {
        margin: 15px 15px;
    }
    #changeIfmBtn {
        margin-left: 120px;
    }
    #changeIfmBtn button {
        padding: 8px 25px;
        background-color: rgb(68, 124, 170);
        border: 1px solid rgba(223, 222, 228, 0.87);
        border-radius: 4px;
    }
    #changeIfmBtn #cancel {
        background-color: rgb(195, 227, 236);
    }

</style>


