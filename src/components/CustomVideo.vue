<script setup lang='ts'>
const props = defineProps<{
  src: string
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
  (e: 'play', ev: unknown): void
  (e: 'pause', ev: unknown): void
  (e: 'ended', ev: unknown): void
  (e: 'timeupdate', ev: { detail: { currentTime?: number; duration: number } }): void
  (e: 'fullscreenchange', ev: unknown): void
  (e: 'waiting', ev: unknown): void
  (e: 'error', ev: unknown): void
  (e: 'progress', ev: unknown): void
  (e: 'loadeddata', ev: unknown): void
  (e: 'loadstart', ev: unknown): void
  (e: 'seeked', ev: unknown): void
  (e: 'seeking', ev: unknown): void
  (e: 'loadedmetadata', ev: unknown): void
  (e: 'fullscreenclick', ev: unknown): void
  (e: 'controlstoggle', ev: unknown): void
}>()
</script>

<template>
  <video
    :src="props.src"
    :autoplay="props.autoplay"
    :loop="props.loop"
    :muted="props.muted"
    :initial-time="props.initialTime"
    :duration="props.duration"
    :controls="props.controls"
    :danmu-list="props.danmuList"
  />
</template>

<style scoped lang='less'>

</style>
