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
    return Math.min(1 + (currentStage.value * 0.1), 1.4)
})

const isLastStage = computed(() => {
  return currentStage.value === questions.length - 1
})

const isLastStageForNo = computed(() => {
  return currentStage.value < questions.length - 2
})

</script>

<template>
    <main class="min-h-screen px-4 flex justify-center items-center bg-black">

        <div class="flex w-full max-w-lg flex-col items-center gap-4">

            <figure class="w-full max-w-lg">
                <img 
                :src="question.image" 
                class="w-full h-full object-contain">
            </figure>

            <h1 class="text-red-900 font-bold font-fraunces text-xl">
                {{ question.text }}
            </h1>

            <div class="flex w-full justify-center px-4 gap-4 font-bold font-fraunces">
                <button 
                class="flex items-center justify-center gap-2 w-40 h-12 bg-red-900 text-white rounded-lg" v-if="!isLastStage" 
                @click="currentStage = questions.length -1" 
                :style="{ transform: `scale(${buttonYesSize})` }"> <img class='w-10 h-7' src="../asserts/buttonImage/rose-button.png">
                Sim 
                </button>
                <button 
                class="flex items-center justify-center gap-4 w-40 h-12 bg-white text-red-900 rounded-lg" v-if="isLastStageForNo" 
                @click="currentStage++" 
                :style="{ transform: `scale(${buttonNoSize})` }"> 
                <img class='w-12 h-12' src="../asserts/buttonImage/dragon-button.png">
                Não 
                </button>
            </div>
        </div>

    </main>

</template>