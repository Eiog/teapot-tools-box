<script setup lang='ts'>
import type { ComponentInternalInstance } from 'vue'
const { proxy } = getCurrentInstance() as ComponentInternalInstance
const inputValue = ref('')
const handleValidate = () => {
  if (!inputValue.value)
    return proxy?.$refs.uToast.show({ type: 'default', message: '不能为空' })
}
// console.log('ULoadingIcon'.match(/([A-Z])([a-z]+)/g))
</script>

<template>
  <div hfull flex flex-col p3 gap3>
    <div>
      <nut-input
        v-model="inputValue"
        placeholder="请输入文本"
      />
    </div>
    <div>
      <u-button type="primary" text="解析" @click="handleValidate" />
    </div>
    <u-toast ref="uToast">
      1
    </u-toast>
  </div>
</template>

<style scoped lang='less'>

</style>
