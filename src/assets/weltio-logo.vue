
<script setup>
import { ref } from 'vue';

const bounce = ref(false)

function setBounce(value){
    bounce.value = value
    setTimeout(() => bounce.value=false, 1000)
}
</script>
<template>
<svg xmlns="http://www.w3.org/2000/svg" @mouseenter="setBounce(true)" class="w-full fill-[#0b1e5b] stroke-[#0b1e5b]/10 group stroke-1" viewBox="0 0 90 27">
    <path d="M15.75 17.2a30.8 30.8 0 0 1 .84 3.67h.09a31.48 31.48 0 0 1 .75-3.7l2.32-8.78h3.63l-5 17.53H15l-2.47-8.78a22.14 22.14 0 0 1-.81-3.57h-.13a24.74 24.74 0 0 1-.78 3.57l-2.5 8.78H5L0 8.38h3.66L6 17.2a25.68 25.68 0 0 1 .75 3.7h.13a21.24 21.24 0 0 1 .84-3.67l2.5-8.85h3Z"></path>
    <path d="M39.53 18H28c.28 3.33 2.08 4.89 4.49 4.89a4.66 4.66 0 0 0 4.25-2.27l2.38 2.17a7.7 7.7 0 0 1-6.66 3.36c-4.65 0-7.93-3.63-7.93-9.06s3.2-9 7.65-9 7.37 3.6 7.37 8.93v1ZM28.1 15.27H36c-.4-2.85-1.89-4.14-3.87-4.14-2.13 0-3.6 1.43-4.03 4.14Z"></path>
    <path d="M46.7 25.73c-2.88 0-4.39-1.93-4.39-4.92V.27h3.44v20.3c0 1.22.46 1.9 1.55 1.9h1.2v3.26Z"></path>
    <path d="M65.21 8.38h-3.44v17.35h3.44Z"></path>
    <path d="M68.37 17c0-5.33 3.44-9 8.09-9s8.09 3.7 8.09 9-3.44 9.07-8.09 9.07-8.09-3.67-8.09-9.07ZM81 17c0-3.56-2-5.63-4.58-5.63s-4.51 2.1-4.51 5.63 1.92 5.7 4.55 5.7S81 20.64 81 17Z"></path>
    <path d="M58.73 11.47V8.38h-3.6v-5.7h-3.44v5.7h-2.94v3.09h2.94v8.62c0 3.4 1.73 5.64 5 5.64h2v-3.26h-1.64c-1.33 0-1.92-.92-1.92-2.61v-8.39Z"></path>
    <path :class="{'animate-bounce-once': bounce}" class=" opacity-0" d="M86.11 24.26a1.95 1.95 0 1 1 3.9 0 1.95 1.95 0 1 1-3.9 0Z"></path>
</svg>
</template>

<style scoped>
@keyframes bounce {
    50% {
        transform: translateY(-50%);
        animation-timing-function: cubic-bezier(0.8,0,1,1);
    }
    0%, 100% {
        transform: none;
        animation-timing-function: cubic-bezier(0,0,0.2,1);
        opacity:1;
    }
}
/* .group:hover .group-hover\:animate-bounce-once {
    animation: bounce 1s;
} */
.animate-bounce-once {
    animation: bounce 1s;
}
</style>
