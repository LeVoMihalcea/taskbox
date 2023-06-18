<template>
    <div class="list-item" :class="stateClass">
        <label :for="'checked' + task.id" :aria-label="'archiveTask-' + task.id" class="checkbox">
            <input type="checkbox" :checked="isChecked" disabled :name="'checked' + task.id"
                :id="'archiveTask-' + task.id" />
            <span class="checkbox-custom" @click="archiveTask" />
        </label>
        <label :for="'title-' + task.id" :aria-label="task.title" class="title">
            <input type="text" readonly :value="task.title" :id="'title-' + task.id" name="title"
                placeholder="Input title" />
        </label>
        <button v-if="!isChecked" class="pin-button" @click="pinTask" :id="'pinTask-' + task.id"
            :aria-label="'pinTask-' + task.id">
            <span class="icon-star" />
        </button>
    </div>
</template>
  
<script setup lang="ts">
import { computed, ref } from 'vue';
import { Task } from '../types/Task';

const emit = defineEmits(['archive-task', 'pin-task'])

const props = defineProps({
    task: {
        type: Object as () => Task,
        required: true,
        default: () => ({}),
    }
});

const task = ref(props.task);

const isChecked = computed(() => {
    return task.value.state === 'TASK_ARCHIVED';
})

const stateClass = computed(() => {
    return task.value.state;
})

function archiveTask() {
    emit('archive-task', props.task.id);
}
function pinTask() {
    emit('pin-task', props.task.id);
}
</script>

<style scoped>
.pinned {
    background: yellow;
}

.archived {
    background: gray;
    text-decoration: line-through;
}
</style>