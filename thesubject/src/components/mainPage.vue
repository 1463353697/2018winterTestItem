<template>
    <div>
        <div class="nav">
            <div>全部</div>
            <div>问答</div>
            <div>分享</div>
            <div>招聘</div>
            <div>精华</div>
        </div>
    </div>
    
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .nav {
        display: flex;
        flex-direction: row;
        justify-content: center;
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

</style>
