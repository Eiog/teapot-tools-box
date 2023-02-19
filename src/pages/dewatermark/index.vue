<script setup lang='ts'>
import type { ComponentInternalInstance } from 'vue'
import UToast from 'uview-plus/components/u-toast/u-toast.vue'
const { proxy: $this } = getCurrentInstance() as ComponentInternalInstance
const inputValue = ref('')
const result = ref<{ title: string; cover: string; url: string }>()
const getUrl = async () => {
  try {
    const res = await get('/', { url: inputValue.value })
    result.value = res as any
    if (res.url)
      return uni.showToast({ title: '解析成功', icon: 'success' })
    return uni.showToast({ title: '解析失败，请重试', icon: 'error' })
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
    success: ({ tempFilePath }) => {
      if (tempFilePath) {
        saveFile(tempFilePath).then((res) => {
          console.log(res)
          uni.showToast({ title: '保存成功', icon: 'success' })
        })
      }
    },
    fail: (err) => {
      console.log(err)

      uni.showToast({ title: '保存失败', icon: 'error' })
    },
  })
}
const handleClear = () => {
  inputValue.value = ''
}
// console.log('ULoadingIcon'.match(/([A-Z])([a-z]+)/g))
</script>

<template>
  <div hfull flex flex-col p3 gap3>
    <div wfull flex items-center bg-gray1 px1 py2 rounded-md>
      <input
        v-model="inputValue"
        flex-1
        placeholder="请输入分享链接"
      >
      <button v-if="!!inputValue" size="mini" @click="handleClear">
        清空
      </button>
    </div>

    <div>
      <button type="primary" @click="handleValidate">
        解析
      </button>
    </div>
    <UToast ref="uToast" />
    <div v-if="result?.url" wfull flex-1 flex-col gap5>
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
