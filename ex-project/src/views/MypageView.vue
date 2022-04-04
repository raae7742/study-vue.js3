<template>
    <div>{{userInfo.first_name}} {{userInfo.last_name}}님 환영합니다.</div>
</template>

<script>
import { mapState } from "vuex"
export default {
    computed: {
        ...mapState(["userInfo"])
    }
}
</script>
