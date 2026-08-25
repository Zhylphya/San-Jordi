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
    <main class="min-h-screen flex items-center justify-center">
        <section class="flex flex-col items-center gap-6">
            <figure>
                <img :src="question.image">
            </figure>
            <h1 class="text-4xl font-bold text-red-500">{{ question.text }}</h1>
            <div>
                <button v-if="!isLastStage" @click="currentStage = questions.length -1" :style="{ transform: `scale(${buttonYesSize})` }"> Sim </button>
                <button v-if="isLastStageForNo" @click="currentStage++" :style="{ transform: `scale(${buttonNoSize})` }"> Não </button>
            </div>
        </section>

    </main>

</template>