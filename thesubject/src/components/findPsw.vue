<template>
    <div class="enterBlock">
        <div class="enterHead"><i class="icon iconfont icon-xiugaimima- ">找回密码</i></div>
        <div class="enterBody">
            <input placeholder="请输入手机号">
            <input placeholder="请输入新密码">
            <input placeholder="请再次输入新密码">
                
            <div id="getCode">
                <input placeholder="请输入验证码">
                <button>获取验证码</button>
            </div>
                
        </div>
    </div>
    
</template>
<script>
export default {
    
}
</script>
<style scoped>
    * {
        margin: 0px;
        padding: 0px;
    }
    body {
        
        display: flex;
        justify-content: center;
              
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
            #getCode button {
                background-color: rgb(195, 227, 236);
                border: 1px solid rgba(223, 222, 228, 0.87);
                border-radius: 4px;
                padding: 5px 7px;

            }

</style>


