<script setup>
import { computed, ref } from 'vue'
import SelectButton from 'primevue/selectbutton'
import QuestionButton from '../components/questionButton.vue'
import { questions } from '../data/questions.ts'
import roseButton from '../asserts/buttonImage/rose-button.png'
import dragonButton from '../asserts/buttonImage/dragon-button.png'

const currentStage = ref(0)

const language = ref('pt')

const languageOptions = [
    { label: 'PT', value: 'pt' },
    { label: 'CA', value: 'ca' }
]

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

const buttonReset = computed(() => {
    return currentStage.value === questions.length - 1
})
</script>

<template>
    <main
        class="relative min-h-screen px-4 flex justify-center items-center bg-[#F7E4E6] overflow-hidden"
    >
        <!-- Decoração superior -->
        <img
            src="../asserts/styleImage/floral-start.png"
            alt=""
            class="absolute top-0 left-1/2 -translate-x-1/2 w-[35%] sm:w-[15%] h-auto z-0"
        >

        <!-- Seleção de idioma -->
        <SelectButton
            v-model="language"
            :options="languageOptions"
            optionLabel="label"
            optionValue="value"
            :allowEmpty="false"
            class="absolute top-16 right-6 sm:top-6 z-10"
        />

        <!-- Conteúdo -->
        <div
            class="relative z-10 flex w-[min(80vw,80vh,32rem)] max-w-lg flex-col items-center gap-6"
        >
            <!-- Pergunta -->
            <Transition name="question-fade" mode="out-in">
                <div
                    :key="currentStage"
                    class="flex w-full flex-col items-center gap-6"
                >
                    <h1
                        class="w-full text-center text-red-900 font-bold font-fraunces text-3xl"
                    >
                        {{ question.text }}
                    </h1>

                    <figure class="w-full">
                        <img
                            :src="question.image"
                            class="w-full h-full object-contain"
                            alt=""
                        >
                    </figure>
                </div>
            </Transition>

            <!-- Botões -->
            <div
                class="flex w-full justify-center items-center gap-[4%] px-4 font-bold font-fraunces"
            >
                <!-- Sim -->
                <QuestionButton
                    v-if="!isLastStage"
                    label="Sim"
                    icon="roseButton"
                    variant="yes"
                    :size="buttonYesSize"
                    @click="currentStage = questions.length - 1"
                />

                <!-- Não -->
                <QuestionButton
                    v-if="isLastStageForNo"
                    label="Não"
                    icon="dragonButton"
                    variant="no"
                    :size="buttonNoSize"
                    @click="currentStage++"
                />

                <!-- Recomeçar -->
                <button
                    v-if="buttonReset"
                    type="button"
                    class="
                        flex items-center justify-center gap-2
                        w-48 h-12
                        bg-white hover:bg-gray-100
                        text-red-900
                        rounded-lg
                        shadow-sm
                        transition-all duration-300 ease-out
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-red-900
                        focus-visible:ring-offset-2
                        cursor-pointer
                    "
                    @click="currentStage = 0"
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
                        Recomeçar
                    </span>
                </button>
            </div>
        </div>
    </main>
</template>

<style scoped>
:deep(.p-selectbutton) {
    display: flex;
    gap: 0;
    padding: 4px;
    background: #f1f3f5;
    border-radius: 8px;
}

:deep(.p-selectbutton .p-togglebutton) {
    background: transparent;
    color: #6b7280;
    border: none;
    border-radius: 6px;
    padding: 6px 12px;
    font-family: inherit;
    font-weight: 500;
    transition: all 0.2s ease;
}

:deep(.p-selectbutton .p-togglebutton:hover) {
    background: #e5e7eb;
    color: #7f1d1d;
}

:deep(.p-selectbutton .p-togglebutton.p-togglebutton-checked) {
    background: white;
    color: #7f1d1d;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.question-fade-enter-active,
.question-fade-leave-active {
    transition: opacity 0.7s ease;
}

.question-fade-enter-from,
.question-fade-leave-to {
    opacity: 0;
}
</style>