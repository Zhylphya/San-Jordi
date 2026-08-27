<script setup>
import { questions } from '../data/questions.ts'
import ToggleButton from 'primevue/togglebutton'
import { computed, ref } from 'vue'

const currentStage = ref(0)
const isCatalan = ref(false)

const question = computed(() => {
    const currentQuestion = questions[currentStage.value]

    return {
        ...currentQuestion,
        text: currentQuestion.text[language.value]
    }
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

const language = computed(() => {
    return isCatalan.value ? 'ca' : 'pt'
})

</script>

<template>
    <main class="relative min-h-screen px-4 flex justify-center items-center bg-[#F7E4E6] overflow-hidden">

        

        <!-- Decoração superior -->
        <img
            src="../asserts/styleImage/floral-start.png"
            alt=""
            class="fixed top-0 left-1/2 -translate-x-1/2 w-[15%] h-auto z-0"
        >

        <ToggleButton
            v-model="isCatalan"
            onLabel="CA"
            offLabel="PT"
            class="absolute top-20 right-6 z-10"
        />

        <!-- Conteúdo -->
        <div class="relative z-10 flex w-[80%] max-w-lg flex-col items-center gap-6">

            <h1 class="w-full text-center text-red-900 font-bold font-fraunces text-3xl">
                {{ question.text }}
            </h1>

            <figure class="w-full">
                <img
                    :src="question.image"
                    class="w-full h-full object-contain"
                    alt=""
                >
            </figure>

            <div class="flex w-full justify-center items-center gap-4 px-4 font-bold font-fraunces">

                <button
                    v-if="!isLastStage"
                    class="flex items-center justify-center w-40 h-12 bg-red-900 text-white rounded-lg"
                    @click="currentStage = questions.length - 1"
                    :style="{ transform: `scale(${buttonYesSize})` }"
                >
                    <span class="flex items-center justify-center w-10 h-10">
                        <img
                            class="w-10 h-10 object-contain"
                            src="../asserts/buttonImage/rose-button.png"
                            alt=""
                        >
                    </span>

                    <span class="ml-2">
                        Sim
                    </span>
                </button>

                <button
                    v-if="isLastStageForNo"
                    class="flex items-center justify-center w-40 h-12 bg-white text-red-900 rounded-lg"
                    @click="currentStage++"
                    :style="{ transform: `scale(${buttonNoSize})` }"
                >
                    <span class="flex items-center justify-center w-10 h-10">
                        <img
                            class="w-10 h-10 object-contain"
                            src="../asserts/buttonImage/dragon-button.png"
                            alt=""
                        >
                    </span>

                    <span class="ml-2">
                        Não
                    </span>
                </button>

            </div>

        </div>


    </main>

</template>