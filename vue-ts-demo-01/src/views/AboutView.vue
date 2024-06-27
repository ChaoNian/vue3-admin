<template>
  <div>
    <header>
      <h1>Vue3实现 B站小屏播放功能</h1>
    </header>
    <main>
      <videoPlayer videoSrc="https://www.w3schools.com/html/mov_bbb.mp4" />
      <div class="content">
        <p>滚动</p>
        <p v-for="i in 100" :key="i">这是模拟内容{{ i }}</p>
      </div>
    </main>
</div>

</template>
<script setup >
import VideoPlayer from "./vied/VideoPlayer.vue"
</script>
<style>
#app {
  font-family:Avenir,Helvetica,Arial, sans-serif;
  text-align: center;
  color:#2c3e50;
}
header{
  /* background-color:#42b983; */
  padding:20px;
  color: rgb(30, 25, 25);
}

main{
  padding:20px;
}

.content{
  margin-top:20px;
  text-align: left;
}
</style>
