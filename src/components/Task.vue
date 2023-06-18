<template>
    <div class="list-item">
        <label for="title" :aria-label="task.title">
            <input type="text" readonly :value="task.title" id="title" name="title" />
        </label>
    </div>
</template>
  
<script setup lang="ts">
import {ref} from 'vue';

interface Task {
    id: String,
    title: String,
    state: String
}

const props = defineProps({
    task: {
        type: Object as () => Task,
        required: true,
        default: () => ({}),
    }
});

const task = ref(props.task);

console.log(props.task);
</script>