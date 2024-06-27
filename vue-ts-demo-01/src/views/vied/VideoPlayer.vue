<template>
  <div class="video-player" ref="videoPlayer">
   <video 
    ref="video"
    :src="videoSrc"
    controls
    @play="handlePlay"
    @pause="handlePause"
    ></video>
    <div>{{ isMiniPlay }}</div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps({
    videoSrc: {
        type: String,
        required:true
    }
})
const videoPlayer = ref(null)
const isMiniPlayer = ref(false)

const handlePlay = () => {
    window.addEventListener('scroll', handleScroll)
}

const handlePause = () => {
    window.removeEventListener('scroll', handleScroll)
    isMiniPlayer.value = false

}

const handleScroll = () => {
    // 获取元素的位置和尺寸等信息 getBoundingClientRect()
    const rect = videoPlayer?.value?.getBoundingClientRect()
    // DOM 上滚动到视口外面
    isMiniPlayer.value = rect.top < 0

}
// 滚动超出视口后 视频播放窗口 固定在界面底部
watch(isMiniPlayer, (newValue) => {
    if (newValue) {
        videoPlayer.value.classList.add('mini-player')
    } else {
        videoPlayer.value.classList.remove('mini-player')
    }

})

</script>

<style scoped>
.video-player {
    position: relative;
    width:100%;
    max-width:640px;
    margin:0auto;
}
.video-player.mini-player {
    position: fixed;
    bottom:20px;
    right:20px;
    width:200px;
    height:112.5px;/* 16:9 aspect ratio */
    z-index:1000;
    box-shadow:02px 10px rgba(0,0,0,0.2);
}
</style>
