<template>
    <PureInboxScreen :error="error"></PureInboxScreen>
</template>

<script setup>
import {ref} from 'vue';
import { useTaskStore } from '../stores/store';
import PureInboxScreen from './PureInboxScreen.vue';

const store = useTaskStore();
const error = ref(store.error)

</script>