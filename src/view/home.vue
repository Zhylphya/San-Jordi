<script setup>
import { questions } from '../data/questions.ts'
import { computed, ref } from 'vue'

const currentStage = ref(0)

const question = computed(() => {
    return questions[currentStage.value]
})

const buttonNoSize = computed(() => {
    return 1 - (currentStage.value * 0.1)
})

const buttonYesSize = computed(() => {
    return 1 + (currentStage.value * 0.1)
})

const isLastStage = computed(() => {
  return currentStage.value === questions.length - 1
})

const isLastStageForNo = computed(() => {
  return currentStage.value < questions.length - 2
})

</script>

<template>

    <h1>{{ question.text }}</h1>
    <img :src="question.image">

    <button v-if="!isLastStage" @click="currentStage.value = questions.length -1" :style="{ transform: `scale(${buttonYesSize})` }"> Sim </button>
    <button v-if="!isLastStageForNo" @click="currentStage.value++" :style="{ transform: `scale(${buttonNoSize})` }"> Não </button>


</template>