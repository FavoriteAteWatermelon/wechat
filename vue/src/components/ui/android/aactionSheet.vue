<template>
  <BGMASK/>
</template>

<script>
import BGMASK from '../../base/bgMask'
export default {
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  components: {
    BGMASK
  }
}
</script>

<style lang="scss" scoped>
</style>
