<template>
	<svg :class="svgClass" v-bind="$attrs" :style="{ color: color, fontSize: size }">
		<use :xlink:href="iconName"></use>
	</svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
	name: string
	color?: string
	size?: string
}>()
const iconName = computed(() => `#icon-${props.name}`)
const svgClass = computed(() => (props.name ? `svg-icon icon-${props.name}` : 't-svg-icon'))
</script>

<style scoped>
.svg-icon {
	width: 1em;
	height: 1em;
	fill: currentColor;
	vertical-align: baseline;
}
</style>
