<template>
    <div>
        <v-card
            class="pa-3"
            v-for="(list, index) in todoList"
            :key="index"
        >
            <p>{{list.memo}}</p>
            <v-btn fab small color="green"><font-awesome-icon icon="check" /></v-btn>
            <v-btn fab small color="blue"><font-awesome-icon icon="refresh"/></v-btn>
            <v-btn fab small color="red"><font-awesome-icon icon="trash-alt"/></v-btn>
        </v-card>
    </div>
</template>

<script>
export default {
    props: ["todoList"]
}
</script>
