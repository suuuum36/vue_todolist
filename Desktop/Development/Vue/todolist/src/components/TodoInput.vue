<template>
    <div class = "inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" placeholder="할 일을 입력하세요.">
        <span class="addContainer" v-on:click="addTodo">
            <i class="addBtn fas fa-plus" aria-hidden="true"></i>
        </span>
    </div>
</template>

<script>

export default {
    data () {
        return {
            newTodoItem: ''
        }
    },
    methods: {
        addTodo () {
            //this는 해당 컴포넌트를 가리킨다.
            if (this.newTodoItem != "") {
                let value = this.newTodoItem && this.newTodoItem.trim();
                this.$emit('addTodo', value);
                this.clearInput();
            } else {
                alert("내용을 입력하세요");
            }
        },
        clearInput () {
            this.newTodoItem = '';
        }
    },

}
</script>

<style scoped>
    input:focus {
        outline: none;
    }
    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }
    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
    }
</style>