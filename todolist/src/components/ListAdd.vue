<template>
    <div>
        <v-textarea
            outline
            v-model="memo"
            label="투두리스트를 입력해주세요."
            value=""
        ></v-textarea>
        <v-btn @click="listAdd">리스트 추가</v-btn>
    </div>
</template>

<script>
export default {
    data() {
        return {
            memo: null
        }
    },
    methods: {
        listAdd() {
            console.log('리스트 추가')
            if (this.memo == null) {
                alert("할일을 입력해주세요.")
            } else {
                this.$emit('listAdd', this.memo)
            }
        }
    }
}
</script>