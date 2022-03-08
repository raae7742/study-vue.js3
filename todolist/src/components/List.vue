<template>
    <div>
        <v-card
            class="pa-3 mb-3"
            :class="{'done': list.status === 'done'}"
            v-for="(list, index) in todoList"
            :key="index">
            
            <p>{{ list.memo }}</p>

            <v-btn
                v-if="list.status === 'created'"
                @click="$emit('statusControl', index, 'done')"
                fab small color="green">
                <font-awesome-icon icon="check" />
            </v-btn>
            <v-btn 
                v-else
                @click="$emit('statusControl', index, 'created')"            
                fab small color="blue">
                <font-awesome-icon icon="refresh"/>
            </v-btn>
            <v-btn 
                @click="$emit('listDelete', index)"
                fab small color="red">
                <font-awesome-icon icon="trash-alt"/>
            </v-btn>
            <v-btn 
                @click="listEdit(list.memo, index)"
                v-if="list.status === 'created'"
                fab small color="yellow">
                <font-awesome-icon icon="edit"/>
            </v-btn>
        </v-card>
    </div>
</template>

<script>
import { eventBus } from "../main.js"
export default {
    props: ["todoList"],
    methods: {
        listEdit(memo, index) {
            eventBus.listEdit(memo, index)
        }
    }
}
</script>


<style scoped>
.done {
    background-color: rgba(0, 0, 0, 0.5);
}

.done p {
    text-decoration: line-through;
    color: rgba(0, 0, 0, 0.5)
}
</style>