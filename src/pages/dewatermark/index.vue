<script setup lang='ts'>
import type { ComponentInternalInstance } from 'vue'
import UButton from 'uview-plus/components/u-button/u-button.vue'
import UToast from 'uview-plus/components/u-toast/u-toast.vue'
import NutInput from '~nutui/input/index.vue'
import DefaultMenu from '~/components/DefaultMenu.vue'
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
    <NutInput
      v-model="inputValue"
      placeholder="请输入文本"
    />
    <UButton type="primary" text="解析" @click="handleValidate" />
    <UToast ref="uToast" />
    <DefaultMenu />
  </div>
</template>

<style scoped lang='less'>

</style>
