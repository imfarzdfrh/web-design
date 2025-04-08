<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  name: {
    type: String as PropType<IIconName>,
    required: true
  },
  size: {
    type: String,
    default: '28'
  },
  color: {
    type: String,
    default: '#fff'
  }
})

const iconEl = ref<HTMLDivElement>()
const svgCache = new Map<string, string>()

const loadSVGIcon = async () => {
  if (!iconEl.value) return

  try {
    let svgContent: string
    if (svgCache.has(props.name)) svgContent = svgCache.get(props.name)!
    else {
      const svgModule = await import(`assets/icons/${props.name}.svg?raw`)
      svgContent = svgModule.default
      svgCache.set(props.name, svgContent)
    }

    if (!iconEl.value) return

    iconEl.value.innerHTML = svgContent
    const svgElement = iconEl.value.querySelector('svg')
    if (svgElement) {
      setSize(svgElement)
      setColor(svgElement, svgContent)
    }
  } catch (error) {
    console.error(error)
  }
}

const setSize = (svgElement: SVGElement) => {
  svgElement.setAttribute('width', props.size)
  svgElement.setAttribute('height', props.size)
}

const setColor = (svgElement: SVGElement, svgContent: string) => {
  if (svgContent.includes('fill="none"')) {
    svgElement.setAttribute('stroke', props.color)
  } else if (props.color.startsWith('#')) {
    svgElement.setAttribute('fill', props.color)
  } else if (props.color.startsWith('fill-')) {
    svgElement.removeAttribute('class')
    svgElement.classList.add(props.color)
  }
}

watch(
  () => props.name,
  () => loadSVGIcon()
)

watch(
  () => props.size,
  () => {
    const svgElement = iconEl.value?.querySelector('svg')
    if (svgElement) setSize(svgElement)
  }
)

watch(
  () => props.color,
  () => {
    const svgElement = iconEl.value?.querySelector('svg')
    if (svgElement) {
      const svgContent = svgCache.get(props.name) || ''
      setColor(svgElement, svgContent)
    }
  }
)

watchEffect(loadSVGIcon)
</script>

<template>
  <div ref="iconEl" />
</template>
