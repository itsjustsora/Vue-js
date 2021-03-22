<template>
  <div class="clearAllContainer">
      <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
<<<<<<< HEAD
    ...mapMutations({
      clearTodo: 'clearAllItems'
    })
    // clearTodo(){
    //   this.$store.commit('clearAllItems');
    // }
=======
    clearTodo(){
      this.$emit('clearAll');
    }
>>>>>>> afa14ececf9d0bec28702ccba486a89aeac0e233
  }
}
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>