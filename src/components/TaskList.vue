<template>
    <PureTaskList
        :tasks="tasks"
        @archive-task="archiveTask"
        @pin-task="pinTask"
    >
    </PureTaskList>
</template>

<script setup>
import { computed } from 'vue';
import { useTaskStore } from '../stores/store';
import PureTaskList from './PureTaskList.vue';

const taskStore = useTaskStore();

const tasks = computed(() => taskStore.getFilteredTasks);

const archiveTask = (task) => taskStore.archiveTask(task);
const pinTask = (task) => taskStore.pinTask(task);

</script>