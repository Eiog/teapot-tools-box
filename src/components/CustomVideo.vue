<script setup lang='ts'>
const props = defineProps<{
  id: string
  src?: string
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
  initialTime?: number
  duration?: number
  controls?: boolean
  danmuList?: { text: string; color: string; time: number }[]
  danmuBtn?: boolean
  enableDanmu?: boolean
  pageGesture?: boolean
  direction?: 0 | 90 | -90
  showProgress?: boolean
  showFullscreenBtn?: boolean
  showPlayBtn?: boolean
  showCenterPlayBtn?: boolean
  showLoading?: boolean
  enableProgressGesture?: boolean
  objectFit?: 'contain' | 'fill' | 'cover'
  poster?: string
  showMuteBtn?: boolean
  title?: string
  playBtnPosition?: 'top' | 'bottom'
  mobilenetHintType?: 0 | 1
  enablePlayGesture?: boolean
  autoPauseIfNavigate?: boolean
  autoPauseIfOpenNative?: boolean
  vslideGesture?: boolean
  vslideGestureInFullscreen?: boolean
  adUnitId?: string
  posterForCrawler?: string
  codec?: 'hardware' | 'software'
  httpCache?: boolean
  playStrategy?: 0 | 1 | 2
  header?: AnyObject
}>()
const emit = defineEmits<{
  (e: 'play', ev: Event): void
  (e: 'pause', ev: Event): void
  (e: 'ended', ev: Event): void
  (e: 'timeupdate', ev: Event | { detail: { currentTime?: number; duration: number } }): void
  (e: 'fullscreenchange', ev: Event): void
  (e: 'waiting', ev: Event): void
  (e: 'error', ev: Event): void
  (e: 'progress', ev: Event): void
  (e: 'loadeddata', ev: Event): void
  (e: 'loadstart', ev: Event): void
  (e: 'seeked', ev: Event): void
  (e: 'seeking', ev: Event): void
  (e: 'loadedmetadata', ev: Event): void
  (e: 'fullscreenclick', ev: Event): void
  (e: 'controlstoggle', ev: Event): void
}>()
const videoRef = ref()
onMounted(() => {
  videoRef.value = uni.createVideoContext(props.id)
})
defineExpose({
  videoContext: videoRef.value,
})
</script>

<template>
  <video
    :id="props.id"
    :src="props.src"
    :autoplay="props.autoplay"
    :loop="props.loop"
    :muted="props.muted"
    :initial-time="props.initialTime"
    :duration="props.duration"
    :controls="props.controls"
    :danmu-list="props.danmuList"
    :danmu-btn="props.danmuBtn"
    :enable-danmu="props.enableDanmu"
    :page-gesture="props.pageGesture"
    :direction="props.direction"
    :show-progress="props.showProgress"
    :show-fullscreen-btn="props.showFullscreenBtn"
    :show-play-btn="props.showPlayBtn"
    :show-center-play="props.showCenterPlayBtn"
    :show-loading="props.showLoading"
    :enable-progress-gesture="props.enableProgressGesture"
    :object-fit="props.objectFit"
    :poster="props.poster"
    :show-mute-btn="props.showMuteBtn"
    :title="props.title"
    :play-btn-position="props.playBtnPosition"
    :mobilenet-hint-type="props.mobilenetHintType"
    :enable-play-gesture="props.enablePlayGesture"
    :auto-pause-if-navigate="props.autoPauseIfNavigate"
    :auto-pause-if-open-native="props.autoPauseIfOpenNative"
    :vslide-gesture="props.vslideGesture"
    :vslide-gesture-in-fullscreen="props.vslideGestureInFullscreen"
    :ad-unit-id="props.adUnitId"
    :poster-for-crawler="props.posterForCrawler"
    :codec="props.codec"
    :http-cache="props.httpCache"
    :play-strategy="props.playStrategy"
    :header="props.header"
    @play="emit('play', $event)"
    @pause="emit('pause', $event)"
    @ended="emit('ended', $event)"
    @timeupdate="emit('timeupdate', $event)"
    @fullscreenchange="emit('fullscreenchange', $event)"
    @waiting="emit('waiting', $event)"
    @error="emit('error', $event)"
    @progress="emit('progress', $event)"
    @loadeddata="emit('loadeddata', $event)"
    @loadstart="emit('loadstart', $event)"
    @seeked="emit('seeked', $event)"
    @seeking="emit('seeking', $event)"
    @loadedmetadata="emit('loadedmetadata', $event)"
    @fullscreenclick="emit('fullscreenclick', $event)"
    @controlstoggle="emit('controlstoggle', $event)"
  />
</template>

<style scoped lang='less'>

</style>
