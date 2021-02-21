<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

export default {
  components : {
    'TodoHeader' : TodoHeader,
    'TodoFooter' : TodoFooter,
    'TodoInput' : TodoInput,
    'TodoList' : TodoList
  },

  data () {
    return {
      todoItems:[]
    }
  },
  methods: {
    addTodo(todoItem) {
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
      console.log(this.todoItems);
    },
    clearAll () {
      localStorage.clear();
      this.todoItems = [];
    },
    removeTodo (todoItem, index) {
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index, 1);
    }
  },
  created() {
        const listLength = localStorage.length;
        if (listLength > 0) {
            for(let i=0; i<listLength; i++) {
                this.todoItems.push(localStorage.key(i));
            }
        }
    }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #f6f6f8;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
