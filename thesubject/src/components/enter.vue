<template>
    <div class="enter">
        <body>
            <div class="enterBlock">
                <div class="enterHead"><i class="icon iconfont icon-denglu">登录</i></div>
                <div class="enterBody">
                    <input placeholder="请输入用户名">
                    <input placeholder="请输入密码">
                    <div class="signInUp">
                        <button>登录</button>
                        <button>注册</button>
                    </div>
                    <div class="forgetPws"><p>找回密码</p></div>
                </div>
            
            </div>
        </body>
    </div>
    
</template>
<script>
export default {
    
}
</script>
<style scoped>
    body {
        background-color: rgb(68, 124, 170);
        display: flex;
        justify-content: center;
       
        }
        .enterBlock {
            background-color: rgb(68, 124, 170);
            display: flex;
            justify-content: center;
            width: 350px;
            height: 500px;
            border: solid 2px white;
            border-radius: 8px;
			box-shadow: 0px 5px 5px 0px #ffffff;
            flex-wrap: wrap;
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
        .forgetPws{
            margin-top: 20px;
            display: flex;
            justify-content: center;
            color: #ffffff;
            font-size: 13px;
               
        }



</style>


