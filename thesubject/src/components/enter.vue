<template>
    <div class="enter">
        
        
            <div class="enterBlock">
                <div class="enterHead"><i class="icon iconfont icon-denglu">登录</i></div>
                <div class="enterBody" >
                    <input id="userName" placeholder="请输入用户名">
                    <input id="psw" placeholder="请输入密码">
                    <div class="signInUp">
                        <button id="enterBtn">
                            登录
                           
                            <!-- <router-link to="/mainPage">登录</router-link> -->
                        </button>
                        <button>注册</button>
                    </div>
                    
                </div>
            
            </div>
        
        
    </div>
    
</template>
<script>
import jsonp from 'jsonp';
import axios from 'axios';
import md5 from 'js-md5';
export default {
    mounted: function(){
        console.log("执行登录界面js代码");
        
        var username = document.getElementById('userName').value;
        var psw = document.getElementById('psw').value;
        var pswMd5 = md5(psw);
        var enterBtn = document.getElementById('enterBtn');
        
        
        var theRequest = "http://hb9.api.okayapi.com/?s=App.User.Login&app_key=E0A52635859871C072A9B440A8352D61&username="+userName+"&password="+pswMd5;
        enterBtn.onclick = function(){
            //用户名没办法正确上传，导致登录失败
            console.log(username);
            console.log(pswMd5);
            jsonp(theRequest,null,(err,data) => {
                if(err){
                    console.log(err);
                } else{
                    console.log(data);
                    if(data.data.err_code == 0){
                        alert("登录成功");
                        return data.data.uuid;
                    }
                    if(data.data.err_code == 1){
                        alert(data.data.err_msg);
                    }

                }
            })
        }
    
    }
}
    
</script>
<style scoped>
    .enter{
        /* background-color: rgb(68, 124, 170); */
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    
    .enterBlock {
        background-color: rgb(68, 124, 170);
        display: flex;
        width: 350px;
        height: 500px;
        border: solid 2px white;
        border-radius: 8px;
		box-shadow: 0px 5px 5px 0px #ffffff;
        flex-direction: column;
        align-items: center;
    }
    .enterHead {
        display: flex;
        padding: 50px 100px 0px 100px;
        height: 20px;
    }
        
        
    .enterBody {
        width: 200px;
    }
    .enterBody input {
        color: #ffffff;                
        border: 0px;
        border-bottom: solid 1px white;
        background-color: rgb(68, 124, 170); 
        outline: none;
        margin-top: 20px;
        width: 200px;
        height: 20px;
    }
    .enterBody input::-webkit-input-placeholder {
        color: #ffffff;
    }
    .signInUp {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
    }
    .signInUp button {
        display: flex;
        padding: 8px 25px;
        background-color: rgb(195, 227, 236);
        border: 1px solid rgba(223, 222, 228, 0.87);
        border-radius: 4px;
			    
    }
        


</style>


