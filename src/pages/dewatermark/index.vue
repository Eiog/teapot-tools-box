<script setup lang='ts'>
import type { ComponentInternalInstance } from 'vue'
import UToast from 'uview-plus/components/u-toast/u-toast.vue'
const { proxy: $this } = getCurrentInstance() as ComponentInternalInstance
const inputValue = ref('0.51 DHV:/ 铁锅炖大鹅😍# 翻唱歌曲 # 唱歌 # 热门音乐🔥  https://v.douyin.com/BQa72SD/ 复制此链接，打开Dou音搜索，直接观看视频！')
const result = ref<{ title: string; cover: string; url: string }>()
const getUrl = async () => {
  try {
    const res = await get('/', { url: inputValue.value })
    result.value = res as any
    uni.showToast({ title: '成功' })
    // $this?.$refs.uToast.show({ type: 'success', message: '成功' })
  }
  catch (error) {

  }
}
const downloadFile = (url: string) => {
  return new Promise((resolve, reject) => {
    uni.downloadFile({
      url,
      filePath: `${wx.env.USER_DATA_PATH}/${Date.now()}/`,
      success: (res) => {
        return resolve(res)
      },
      fail: (err) => {
        return reject(err)
      },
    })
  })
}
const saveFile = (filePath: string) => {
  return new Promise((resolve, reject) => {
    uni.saveVideoToPhotosAlbum({
      filePath,
      success: (res) => {
        return resolve(res)
      },
      fail: (err) => {
        return reject(err)
      },
    })
  })
}
const handleValidate = () => {
  if (!inputValue.value)
    return uni.showModal({ title: '不能为空' })
    // return uni.showToast({ title: '不能为空', icon: 'error', mask: true })
    // return $this?.$refs.uToast.show({ type: 'default', message: '不能为空' })
  getUrl()
}
const handleDownload = async () => {
  if (!result.value)
    return
  uni.downloadFile({
    url: result.value.url,
    success: (res) => {
      console.log(res)
    },
    fail: (err) => {
      console.log(err)
    },
  })
}
// console.log('ULoadingIcon'.match(/([A-Z])([a-z]+)/g))
</script>

<template>
  <div hfull flex flex-col p3 gap3>
    <div>
      <input
        v-model="inputValue"
        placeholder="请输入文本"
      >
    </div>
    <div>
      <button type="primary" @click="handleValidate">
        解析
      </button>
    </div>
    <UToast ref="uToast" />
    <div v-if="result" wfull flex-1 flex-col gap5>
      <video id="dy-video" wfull :src="result?.url" :header="{ Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7' }" />
      <div>
        <button @click="handleDownload">
          下载
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang='less'>

</style>
