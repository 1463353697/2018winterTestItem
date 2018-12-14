<template>
    <div id="enterBlock">
        <div class="enterHead"><i class="icon iconfont icon-zhanghaoguanli">注册</i></div>
        <div class="enterBody" >
            <input  type="text" placeholder="请输入用户名" v-model="userName" ><label></label>
            <input type="text" placeholder="请输入密码"><label></label>
            <input type="text" placeholder="请再次输入密码" v-model="psw"><label></label>
            
            <div class="signInBtn" id="signBtn"><button>注册</button></div>
                
        </div>
    </div>
    
</template>
<script>
import jsonp from 'jsonp';
import axios from 'axios';
import md5 from 'js-md5';
export default {
    name:'signIn',
    data(){
        return {
            psw:'',
            userName:''
            
        }

    }
}
    window.onload = function(){
        
        var enterInput = document.getElementsByTagName("input");
        var enterLabel = document.getElementsByTagName("label");
        var signIn = document.getElementById('signBtn');
        // 检查用户名
        function checkUsername(){
            var inputValue = enterInput[0].value;
            var pattern = /^[a-zA-Z_]\w{5,15}$/g;  
                if(inputValue =="" || inputValue==null){  
                    enterLabel[0].innerHTML = "用户名不能为空!";  
                }  
                else if(pattern.test(inputValue)){  
                    enterLabel[0].innerHTML = "正确!";
                    return true;  
                }  
                else{  
                    enterLabel[0].innerHTML = "数字不能开头,长度在6-16位之间！";  
                }  

        }
       

        // 检查第一次的密码
        function checkPsw1(){
            var inputValue = enterInput[1].value;  
            var pattern = /^\w{6,16}$/g;  
            if(pattern.test(inputValue)){  
                enterLabel[1].innerHTML = "正确!";
                return true;  
            }  
            else if(inputValue =="" || inputValue == null){  
                enterLabel[1].innerHTML = "密码不能为空!";  
            }  
            else{  
                enterLabel[1].innerHTML = "密码长度在6-16位之间！";  
            }  

        }
        // 第二次检查密码
        function checkPsw2(){
            var pass1Value = enterInput[1].value;  
            var pass2Value = enterInput[2].value;  
            if(pass2Value =="" || pass2Value==null){  
                enterLabel[2].innerHTML = "密码不能为空!";  
            }  
            else if(pass1Value == pass2Value){  
                enterLabel[2].innerHTML = "输入正确!";
                return true;  
            }  
            else if(pass1Value!=pass2Value){  
                enterLabel[2].innerHTML = "两次密码输入不一致!";  
            }  
            else{  
                enterLabel[2].innerHTML = "密码长度在6-16位之间！";  
            }  

        }

        // 给表单添加事件
        enterInput[0].onblur = function(){
            checkUsername();
        }

        enterInput[1].onblur = function(){
            checkPsw1();
            
        }
        enterInput[2].onblur = function(){
            checkPsw2();
            
        }
        signIn.onclick = function(){
            var userName = checkUsername();
            
            var psw1 = checkPsw1();
            var psw2 = checkPsw2();
            
            if(userName  && psw1 && psw2){
                // 这里密码需要加密上传
                var psw = md5(enterInput[2].value);
                jsonp(postRequest,null,(err,data) => {
                    if(err){
                        console.log(error);
                        console.log(enterInput[2].value);
                    } else{
                        console.log(data);
                    }
                    

                });
                console.log(md5(enterInput[2].value));

            }
            else{
                alert('请完整并正确地填写信息')
            }
        }
       
        var postRequest = "http://hb9.api.okayapi.com/?s=App.User.Register&app_key=E0A52635859871C072A9B440A8352D61"
        +"&username="+this.userName+"&password="+ this.psw ;
       
        
        
        
        
        


        

    }

   
    
    

     
   
    
</script>
<style scoped>


    #enterBlock {
        align-items: center;
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
        height: 20px;
        padding: 50px 100px 0px 100px;
                
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
    #getCode input {
        width: 112.9px;
    }
    .enterBody label {
        font-size: 12px;
        color: red;
    }
    .signInBtn {
        margin-top: 50px;
    }
    button {
        background-color: rgb(195, 227, 236);
        border: 1px solid rgba(223, 222, 228, 0.87);
        border-radius: 4px;
        padding: 8px 25px;

    }
    #getCode button {
        padding: 5px 7px;

    }

</style>



