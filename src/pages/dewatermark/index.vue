<script setup lang='ts'>
const uToast = ref()
const inputValue = ref('')
const handleValidate = () => {
  if (!inputValue.value)

    return uToast.value.show({ type: 'default', msg: '不能为空' })
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
      <u-button type="primary" text="解析" />
    </div>
    <!-- <u-toast ref="uToast" /> -->
  </div>
</template>

<style scoped lang='less'>

</style>
