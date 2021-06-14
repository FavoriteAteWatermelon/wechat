<template>
  <div class="mask" @click="maskClick">
   <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    clickHidden: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    maskClick () {
      this.$emit('maskClick')
    }
  }
}
</script>

<style lang="scss" scoped>
.mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  opacity: 0.3;
}
</style>
