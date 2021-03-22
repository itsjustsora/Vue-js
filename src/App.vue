<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 위치의 컴포넌트의 메서드명 " -->
    <TodoInput></TodoInput>
    <!-- v-bind:"내려보낼 프롭스 속성 이름="현재 위치의 컴포넌트 데이터 속성  -->
    <TodoList ></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
<<<<<<< HEAD
  components: {
=======
  data(){
    return {
      todoItems: []
    }
  },
  methods: {
    addOneItem(todoItem){
      // 텍스트가 체크되었는지 안 되었는지에 대한 boolean 값, item
      const obj = {completed: false, item: todoItem};
      // JSON.stringify API : JSON객체를 String으로 변경
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem, index){
      localStorage.removeItem(todoItem.item);
      // 화면에 있는 삭제된 데이터 삭제
      this.todoItems.splice(index, 1);
    }, 
    toggleOneItem(todoItem, index){
      //todoItem.completed = !todoItem.completed;
      this.todoItems[index].completed = !this.todoItems[index].completed;
      // 로컬 스토리지에 데이터를 갱신하기 위해서는 삭제 후 재생성 해야 함
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems(){
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created(){
    if(localStorage.length>0){
      for(let i=0; i<localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          // push() : 비어있는 배열에 데이터 값을 넣어주는 메서드
          // this.todoItems.push(localStorage.key(i));

        }
      }
    }
  },
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용
>>>>>>> afa14ececf9d0bec28702ccba486a89aeac0e233
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
<<<<<<< HEAD
  }
=======
}
>>>>>>> afa14ececf9d0bec28702ccba486a89aeac0e233
}
</script>

<style>
body{
  text-align: center;
  background-color: #f6f6f6;
}
input{
  border-style: groove;
  width: 200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
