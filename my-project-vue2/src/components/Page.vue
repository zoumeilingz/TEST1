<template>
  <div>
    {{content[curIdx]}}{{this.$store.getters.doneTodos[0].text}}
    <div>{{this.$store.getters.doneTodosCount}}</div>
    <div @click="getId()">{{id}}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Page",
  data() {
    return {
      content: ["页面1", "页面2", "页面3", "页面4"],
      id: "1"
    };
  },
  computed: {
    ...mapState(["curIdx"])
  },
  methods: {
    getId() {
      this.id = this.$store.getters.getTodoById(4).id;
    }
  }
};
</script>