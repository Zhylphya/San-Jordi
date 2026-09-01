<script setup lang="ts">
import roseButton from '../asserts/buttonImage/rose-button.png'
import dragonButton from '../asserts/buttonImage/dragon-button.png'

const props = defineProps<{
    label: string
    variant: 'yes' | 'no'
    size: number
}>()

defineEmits<{
    click: []
}>()

const icon = props.variant === 'yes'
    ? roseButton
    : dragonButton
</script>

<template>
    <button
        type="button"
        class="
            flex basis-0 items-center justify-center gap-2
            min-w-0 h-12
            rounded-lg
            shadow-sm
            transition-all duration-300 ease-out
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-red-900
            focus-visible:ring-offset-2
            cursor-pointer
        "
        :class="
            variant === 'yes'
                ? 'bg-red-900 hover:bg-red-800 text-white'
                : 'bg-white hover:bg-gray-100 text-red-900'
        "
        :style="{ flexGrow: size }"
        @click="$emit('click')"
    >
        <span
            class="flex shrink-0 items-center justify-center w-10 h-10"
        >
            <img
                :src="icon"
                class="w-10 h-10 object-contain"
                alt=""
            >
        </span>

        <span>
            {{ label }}
        </span>
    </button>
</template>