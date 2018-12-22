<template>
    <div class="personIfm">
        <div class="personBlock">
            <div class="headAndname">
                <img src="http://image.biaobaiju.com/uploads/20180802/01/1533145434-yGPirmnoVd.jpg" >
                <div class="introdution">
                    <h1 id="personName">{{ucIfm.username}}</h1>
                    <p id="personSl">{{ifm.sign}}</p>       
                </div>
            </div>  
            <div class="detailIfm" id="showIfm">
                <div class="detailIfmBlock">
                    <span>
                        <i class="icon iconfont icon-_rili"></i>
                        <h4>年龄</h4>
                        <p>{{ifm.age}}</p>
                    </span>
                    <span>
                        <i class="icon iconfont icon-_dingwei"></i>
                        <h4>所在地</h4>
                        <p>{{ifm.location}}</p>
                    </span>
                    <span>
                        <i class="icon iconfont icon-_youjian"></i>
                        <h4>邮箱</h4>
                        <p>{{ifm.email}}</p>
                    </span>
                    <span>
                        <i class="icon iconfont icon-_geren"></i>
                        <h4>性别</h4>
                        <p>{{ifm.sex}}</p>
                    </span>
                    <span>
                        <i class="icon iconfont icon-_shenpi"></i>
                        <!-- 注意这里的个性签名和introdution里的个性签名获取的是同一个数据 -->
                        <h4>个性签名</h4>
                        <p>{{ifm.sign}}</p>
                    </span>
                    <span>
                        <i class="icon iconfont icon-_shouji"></i>
                        <h4>手机号</h4>
                        <p>{{ifm.phone}}</p>
                    </span>
                    <span>
                        <i class="icon iconfont icon-_shizhong"></i>
                        <h4>注册时间</h4>
                        <!-- 注意这里的注册时间是不可更改的 -->
                        <p>{{ucIfm.register_time}}</p>
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
                    <input id="age">
                </div>
                <div>
                       
                    <h4>所在地</h4>
                    <input id="place">
                </div>
                <div>
                       
                    <h4>邮箱</h4>
                    <input id="email">
                </div>
                <div>
                        
                    <h4>性别</h4>
                    <input id="sex">
                </div>
                <div>
                        
                    <!-- 注意这里的个性签名和introdution里的个性签名获取的是同一个数据 -->
                    <h4>个性签名</h4>
                    <textarea id="sign"></textarea>
                </div>
                <div>
                       
                    <h4>手机号</h4>
                    <input id="phone">
                </div>
                <div id="changeIfmBtn">
                    <button id="changeBtn">修改</button>
                    <button id="cancel">取消</button>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
import jsonp from 'jsonp'; 
export default {
    data(){
        return{
            ifm:{},
            ucIfm:{}
        }
    },
    mounted:
        function(){
            
            // 这里是点击修改资料之后，弹出修改资料的框
            var btn = document.getElementById('changeBtn');
            // 这是展示个人信息的板块
            var showIfm = document.getElementById('showIfm');

            var changeBlock = document.getElementById('changeBlock');
            btn.onclick = function(){
                changeBlock.style.display = "block";
                showIfm.style.filter = "opacity(50%)";
                showIfm.style.backgroundColor = "grey";
                
            } 
            var changeBtn = document.getElementById('changeBtn');
            changeBtn.onclick = function (){
                // 记得点击事件之后再获取
                var age = document.getElementById('age').value;
                var place = document.getElementById('place').value;
                var email = document.getElementById('email').value;
                var sex = document.getElementById('sign').value;
                var phone = document.getElementById('phone').value;
                var ifmJson = [
                    {
                        "age" : age,
                        "location" : place,
                        "email" : email,
                        "sex" : sex,
                        "sign" : sign,
                        "phone" : phone
                    }
                ]
                var theRequest = "http://hb9.api.okayapi.com/?s=App.User.UpdateExtInfo&app_key=E0A52635859871C072A9B440A8352D61"+
                "&uuid="+uuid+"&token="+token+"&ext_info="+ifmJson;
                jsonp(theRequest,null,(err,data) => {
                    if(err){
                        console.log(err);
                    }
                    else{
                        // if(data.err_code != 0){
                        //     alert(data.err_msg);
                        // }
                        console.log(data);

                    }
                }) 

            }
            // 这个函数是在修改用户资料
            // function changeIfm(){
            //     // 记得点击事件之后再获取
            //     var age = document.getElementById('age').value;
            //     var place = document.getElementById('place').value;
            //     var email = document.getElementById('email').value;
            //     var sex = document.getElementById('sign').value;
            //     var phone = document.getElementById('phone').value;
            //     var ifmJson = [
            //         {
            //             "age" : age,
            //             "location" : place,
            //             "email" : email,
            //             "sex" : sex,
            //             "sign" : sign,
            //             "phone" : phone
            //         }
            //     ]
            //     var theRequest = "http://hb9.api.okayapi.com/?s=App.User.UpdateExtInfo&app_key=E0A52635859871C072A9B440A835D61"+
            //     "&uuid="+uuid+"&token="+token+"&ext_info="+ifmJson;
            //     jsonp(theRequest,null,(err,data) => {
            //         if(err){
            //             console.log(err);
            //         }
            //         else{
            //             if(err_code != 0){
            //                 alert(err_msg);
            //             }
            //             console.log(data);

            //         }
            //     }) 

            // }
            
            
            
        },
        
    created:
        function (){
            // 这里在获取用户信息
            var theRequest = "http://hb9.api.okayapi.com/?s=App.User.Profile&app_key=E0A52635859871C072A9B440A8352D61"
            +"&uuid="+uuid+"&token="+token;
            jsonp(theRequest,null,(err,data) =>{
                if(err){
                    console.log(err);
                }
                else{
                    var personIfm = data.data.info.ext_info;
                    var unChangeIfm = data.data.info;
                    this.ifm = personIfm;
                    this.ucIfm = unChangeIfm;
                    
                    
                }
            })
            
            
        }
        
    
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


