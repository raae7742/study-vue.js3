<template>
    <div>
        <v-card
            class="pa-3"
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

        </v-card>
    </div>
</template>

<script>
export default {
    props: ["todoList"]
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