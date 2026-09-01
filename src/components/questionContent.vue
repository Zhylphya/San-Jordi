<script setup lang="ts">
defineProps<{
    text: string
    image: string
    stage: number
}>()
</script>

<template>
    <Transition name="question-fade" mode="out-in">
        <div
            :key="stage"
            class="flex w-full flex-col items-center gap-6"
        >
            <h1
                class="w-full text-center text-red-900 font-bold font-fraunces text-3xl"
            >
                {{ text }}
            </h1>

            <figure class="w-full">
                <img
                    :src="image"
                    class="w-full h-full object-contain"
                    alt=""
                >
            </figure>
        </div>
    </Transition>
</template>

<style scoped>
.question-fade-enter-active,
.question-fade-leave-active {
    transition: opacity 0.7s ease;
}

.question-fade-enter-from,
.question-fade-leave-to {
    opacity: 0;
}
</style>