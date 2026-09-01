<script setup>
import { computed, ref } from 'vue'

import QuestionButton from '../components/questionButton.vue'
import QuestionContent from '../components/questionContent.vue'
import LanguageSelector from '../components/languageSelector.vue'

import { questions } from '../data/questions.ts'
import { translations } from '../data/translations.ts'

const currentStage = ref(0)

const language = ref('pt')

const lastStage = questions.length - 1

const question = computed(() => {
    const currentQuestion = questions[currentStage.value]

    return {
        ...currentQuestion,
        text: currentQuestion.text[language.value]
    }
})

const buttons = translations.buttons

const buttonNoSize = computed(() => {
    return 1 - (currentStage.value * 0.1)
})

const buttonYesSize = computed(() => {
    return Math.min(1 + (currentStage.value * 0.1), 1.4)
})

const isLastStage = computed(() => {
    return currentStage.value === lastStage
})

const isLastStageForNo = computed(() => {
    return currentStage.value < lastStage - 1
})

const goToFinalStage = () => {
    currentStage.value = lastStage
}

const nextQuestion = () => {
    if (currentStage.value < lastStage) {
        currentStage.value++
    }
}

const resetQuestionnaire = () => {
    currentStage.value = 0
}
</script>

<template>
    <main
        class="
            relative min-h-screen px-4
            flex justify-center items-center
            bg-[#F7E4E6]
            overflow-hidden
        "
    >
        <img
            src="../asserts/styleImage/floral-start.png"
            alt=""
            class="
                absolute top-0 left-1/2
                -translate-x-1/2
                w-[35%] sm:w-[15%]
                h-auto
                z-0
            "
        >

        <LanguageSelector v-model="language" />

        <div
            class="
                relative z-10
                flex flex-col items-center
                w-[min(80vw,80vh,32rem)]
                max-w-lg
                gap-6
            "
        >

            <QuestionContent
                :text="question.text"
                :image="question.image"
                :stage="currentStage"
            />

            <div
                class="
                    flex w-full
                    justify-center items-center
                    gap-[4%] px-4
                    font-bold font-fraunces
                "
            >

                <QuestionButton
                    v-if="!isLastStage"
                    :label="buttons.yes[language]"
                    variant="yes"
                    :size="buttonYesSize"
                    @click="goToFinalStage"
                />

  
                <QuestionButton
                    v-if="isLastStageForNo"
                    :label="buttons.no[language]"
                    variant="no"
                    :size="buttonNoSize"
                    @click="nextQuestion"
                />

                <button
                    v-if="isLastStage"
                    type="button"
                    class="
                        flex items-center justify-center gap-2
                        w-55 h-12
                        bg-white hover:bg-gray-100
                        text-red-900
                        text-base sm:text-lg
                        rounded-lg
                        shadow-sm
                        transition-all duration-300 ease-out
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-red-900
                        focus-visible:ring-offset-2
                        cursor-pointer
                    "
                    @click="resetQuestionnaire"
                >
                    <span
                        class="flex items-center justify-center w-10 h-10"
                    >
                        <img
                            class="w-10 h-10 object-contain"
                            src="../asserts/buttonFinalImage/reset-icon.png"
                            alt=""
                        >
                    </span>

                    <span>
                        {{ buttons.reset[language] }}
                    </span>
                </button>
            </div>
        </div>
    </main>
</template>