<template>
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
    
</template>
<script>
export default {
    
}
</script>
<style scoped>
.changeIfmBlock {
        
        width:300px;
        top: 300px;
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


