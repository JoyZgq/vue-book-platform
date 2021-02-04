<template>
  <h1>{{ msg }}</h1>
  <comp></comp>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"
      >Vite Documentation</a
    >
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>

  <button @click="onClick">emit</button>
</template>

<script setup>
//- 直接导入
import Comp from "../components/Comp.vue";
import { defineProps, reactive, defineEmit, useContext } from "vue";
//- 属性定义（输入）
const props = defineProps({
  msg: String,
});
console.log(props);
/**
 * 获取上下文章
 */
const ctx = useContext();
console.log(ctx);
//对外暴露接口
ctx.expose({
  someMethods() {
    console.log("some message from heloworldß");
  }
});
/**
 * - 时间定义（输出）
 * 数组---一些事件
 * 对象---对事件进行校验
 *
 * 事件的派发方式
 * 1---emit
 * 2---useContext().emit
 */
const emit = defineEmit(["onceClick"]);
const state = reactive({ count: 0 });

const onClick = () => {
  // emit("onceClick");
  ctx.emit("onceClick");
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
