<script setup>
import { questions } from './data/questions.ts'
import { computed, ref } from 'vue'

currentStage = ref(0)

const question = computed(() => {
    return questions[currentStage]
})

const buttonNoSize = computed(() => {
    return 1 - (currentStage.value * 0.1)
})

const buttonYesSize = computed(() => {
    return 1 + (currentStage.value * 0.1)
})

</script>

<template>

    <h1>{{ question.text }}</h1>
    <img :src="question.image">

    <button @click="currentStage.value = questions.length -1" :style="{ transform: `scale(${buttonYesSize})` }"> Sim </button>
    <button @click="currentStage.value++" :style="{ transform: `scale(${buttonNoSize})` }"> Não </button>


</template>