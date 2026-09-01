<script setup lang="ts">
import SelectButton from 'primevue/selectbutton'

const language = defineModel<string>()

const languageOptions = [
    { label: 'PT', value: 'pt' },
    { label: 'CA', value: 'ca' }
]
</script>

<template>
    <SelectButton
        v-model="language"
        :options="languageOptions"
        optionLabel="label"
        optionValue="value"
        :allowEmpty="false"
        class="absolute top-16 right-6 sm:top-6 z-10"
    />
</template>

<style>
.p-selectbutton {
    display: flex;
    gap: 0;
    padding: 4px;
    background: #f1f3f5;
    border-radius: 8px;
}

.p-selectbutton .p-togglebutton {
    background: transparent;
    color: #6b7280;
    border: none;
    border-radius: 6px;
    padding: 6px 12px;
    font-family: inherit;
    font-weight: 500;
    transition: all 0.2s ease;
}

.p-selectbutton .p-togglebutton:hover {
    background: #e5e7eb;
    color: #7f1d1d;
}

.p-selectbutton .p-togglebutton.p-togglebutton-checked {
    background: white;
    color: #7f1d1d;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}
</style>