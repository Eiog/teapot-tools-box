<script setup lang="ts">
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app'
onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style lang="scss">
@import 'uview-plus/index.scss';
@import 'uni-nutui/components/sky-nutui/app.scss';
</style>

<style>
/* #ifdef H5 */
body::-webkit-scrollbar,
div::-webkit-scrollbar,
*::-webkit-scrollbar {
  display: none;
}
body.pages-index-index uni-page-body,
body {
  padding-bottom: 0 !important;
}
/* #endif */
page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
view{
  box-sizing: border-box;
}
</style>
