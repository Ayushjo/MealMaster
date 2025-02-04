<template>
    <a :href="href" target="_blank" class="px-3 py-2 rounded border-2 border-blue-600 hover:bg-blue-500 hover:text-white transition-colors text-center"><slot>YouTube</slot></a>

</template>
<script setup>
const props = defineProps({
    href:String
})
</script>