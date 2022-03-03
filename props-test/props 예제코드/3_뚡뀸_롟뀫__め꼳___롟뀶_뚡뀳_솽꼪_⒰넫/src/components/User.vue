<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: {{ name }}</p>
    <p>{{ getDateAndTime(createdAt) }}</p>
    {{ helloToMixin }}
    {{ test }}
    <hr>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <UserDetail 
          :name="name"
          :address="address"
          :phone="phone"
          :hasDog="hasDog"
        ></UserDetail>
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit
          :name="name"
          :address="address"
          :phone="phone"
          :hasDog="hasDog"
          @child="parents"
        ></UserEdit>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue"
import UserEdit from "./UserEdit.vue"
import { dateFormat } from "../mixins/dateFormat.js"

export default {
  components: {
    UserDetail,
    UserEdit
  },
  data () {
    return {
      name: 'Hoza',
      address: 'Seoul',
      phone: '1234-5678',
      hasDog: true,
      createdAt: null,
    }
  },
  computed: {
    helloToMixin() {
      return this.mixinData + ' 안녕하시오!'
    },
    test() {
      let a = '가나다'
      a = 'abc'
      return a
    }
  },
  created() {
    console.log('유저 컴포넌트')
    this.createdAt = new Date()
  },
  methods: {
    parents(user) {
      this.name = user.name
      this.address = user.address
      this.phone = user.phone
      this.hasDog = user.hasDog
      console.log('부모가 받았어!')
    },
  },
  mixins: [dateFormat]
}
</script>