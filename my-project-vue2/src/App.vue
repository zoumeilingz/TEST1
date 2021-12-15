<template>
  <div id="app">
    <!-- <img @click="increment()" alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Tab />
    <Page />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Page from "./components/Page.vue";
import Tab from "./components/Tab.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    Page,
    Tab
  }
  // methods: {
  //   increment() {
  // 载荷方式
  // this.$store.commit("increment", { amount: 10 });
  // 对象风格的提交方式
  // this.$store.commit({
  //   type: "increment",
  //   amount: 10,
  // });
  // console.log(this.$store.state.count);
  // console.log(this.$store.getters.doneTodos);
  // console.log(this.$store.getters.getTodoById(2));
  // Action 通过 store.dispatch 方法触发：
  // 以对象形式分发
  // this.$store.dispatch({
  //   type: "incrementAsync"
  // });
  // }
  // }
};
</script>

<style lang="less">
ul {
  background-color: #03a9f4;
  padding: 10px;
  list-style: none;

  li {
    background-color: #fff;
    border-radius: 3px;
    margin: 10px 0;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
