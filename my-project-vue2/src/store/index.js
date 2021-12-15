import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  //   state: {
  //     count: 0,
  //   },
  //   Mutation 必须是同步函数
  //   mutations: {
  // increment(state, payload) {
  //   state.count += payload.amount;
  // },
  //   },
  //   state: {
  //     todos: [
  //       { id: 1, text: "...", done: true },
  //       { id: 2, text: "...", done: false },
  //     ],
  //   },
  //   通过属性访问
  //   getters: {
  //     doneTodos: (state) => {
  //       return state.todos.filter((todo) => todo.done);
  //     },
  //   },
  // 通过方法访问
  //   注意，getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果
  //   getters: {
  //     getTodoById: (state) => (id) => {
  //       return state.todos.find((todo) => todo.id === id);
  //     },
  //   },
  // Action
  // Action 类似于 mutation，不同在于：
  // Action 提交的是 mutation，而不是直接变更状态。
  // Action 可以包含任意异步操作。
  // state: {
  //   count: 0,
  // },
  // mutations: {
  //   increment(state) {
  //     state.count++ ;
  //   },
  // },
  // actions: {
  //   incrementAsync({ commit }) {
  //     setTimeout(() => {
  //       commit("increment");
  //     }, 1000);
  //   },
  // },
  state: {
    curIdx: 0,
    todos: [
      { id: 1, text: "true", done: true },
      { id: 2, text: "flase", done: false },
      { id: 3, text: "true", done: true },
      { id: 4, text: "false", done: false },
      { id: 5, text: "true", done: true },
      { id: 6, text: "false", done: false },
    ],
  },
  mutations: {
    setCurIdx(state, index) {
      state.curIdx = index;
    },
  },
  getters: {
    // 通过属性访问
    doneTodos: (state) => {
      return state.todos.filter((todo) => todo.done);
    },
    // Getter 也可以接受其他 getter 作为第二个参数：
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    },
    // 通过方法访问
    getTodoById: (state) => (id) => {
      return state.todos.find((todo) => todo.id === id);
    },
  },
});

export default store;
