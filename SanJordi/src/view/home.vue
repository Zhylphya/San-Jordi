<script setup>
import { questions } from './data/questions.ts'
import { computed, ref } from 'vue'

currentStage = ref(0)

const question = computed(() => {
    return questions[currentStage.value]
})

</script>

<template>
    
    <h1>{{ question.text }}</h1>
    <img :src="question.image">

</template>