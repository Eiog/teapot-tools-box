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
    $this?.$refs.uToast.show({ type: 'success', message: '成功' })
  }
  catch (error) {

  }
}
const handleValidate = () => {
  if (!inputValue.value)
    return $this?.$refs.uToast.show({ type: 'default', message: '不能为空' })
  getUrl()
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
    <div wfull flex-1 flex-col gap5>
      <video id="dy-video" wfull :src="result?.url" :header="{ Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7' }" />
      <div>
        <button>下载</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang='less'>

</style>
