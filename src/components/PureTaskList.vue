<template>
    <div class="list-items">
        <template v-if="loading">
            <div v-for="n in 6" :key="n" class="loading-item">
                <span class="glow-checkbox" />
                <span class="glow-text">
                    <span>Loading</span> <span>cool</span> <span>state</span>
                </span>
            </div>
        </template>
        <template v-else-if="isEmpty">
            <div class="wrapper-message">
                <span class="icon-check" />
                <p class="title-message">You have no tasks</p>
                <p class="subtitle-message">Sit back and relax</p>
            </div>
        </template>
        <template v-else>
            <Task v-for="task in tasksInOrder" :key="task.id" :task="task" @archive-task="onArchiveTask"
                @pin-task="onPinTask" />
        </template>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import Task from './Task.vue';

export interface TaskDto {
    id: String,
    title: String,
    state: String
}

const emit = defineEmits(['archive-task', 'pin-task']);

const props = defineProps({
    tasks: {
        type: Array as () => TaskDto[],
        required: true,
        default: () => [],
    },
    loading: {
        type: Boolean,
        default: false,
    }
})

const tasks = ref(props.tasks);
const isEmpty = computed(() => tasks.value.length === 0);
const tasksInOrder = computed(() => [
    ...tasks.value.filter((t) => t.state === 'TASK_PINNED'),
    ...tasks.value.filter((t) => t.state !== 'TASK_PINNED'),
])

function onArchiveTask(taskId: string) {
    emit('archive-task', taskId);
}

function onPinTask(taskId: string) {
    emit('pin-task', taskId);
}

</script>