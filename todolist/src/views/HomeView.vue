<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs6 pa-2>
        <List
          :todoList="todoList"
          @statusControl="statusControl"
          @listDelete="listDelete"
        />
      </v-flex>
      <v-flex xs6 pa-2>
        <ListAdd
          @listAdd="listAdd"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import List from "../components/List"
  import ListAdd from "../components/ListAdd"

  export default {
    components: {
      List,
      ListAdd
    },
    data() {
      return {
        todoList: []
      }
    },
    methods: {
      listAdd(memo) {
        console.log("받았어!")
        this.todoList.push({memo: memo, status: "created"})
      },
      statusControl(index, status) {
        this.todoList[index].status = status
      },
      listDelete(index) {
        this.todoList.splice(index, 1)
      }
    }
  }
</script>
