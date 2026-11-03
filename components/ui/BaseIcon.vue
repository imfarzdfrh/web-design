<script setup lang="ts">
import { computed } from 'vue'
import type { CSSProperties } from 'vue'
import type { ICON_SET } from '~/constants/Icons'
import facebook from '~/assets/icons/facebook.svg?url'
import instagram from '~/assets/icons/instagram.svg?url'
import linkedin from '~/assets/icons/linkedin.svg?url'
import xtwitter from '~/assets/icons/xtwitter.svg?url'

type IconName = (typeof ICON_SET)[number]

const props = withDefaults(defineProps<{
  name: IconName
  size?: string
  color?: string
}>(), {
  size: '28',
  color: 'currentColor'
})

const icons: Record<IconName, string> = {
  facebook,
  instagram,
  linkedin,
  xtwitter
}

const sizeValue = computed(() => /^\d+(?:\.\d+)?$/.test(props.size) ? props.size + 'px' : props.size)
const iconStyle = computed<CSSProperties>(() => ({
  width: sizeValue.value,
  height: sizeValue.value,
  backgroundColor: props.color,
  maskImage: 'url("' + icons[props.name] + '")',
  maskRepeat: 'no-repeat',
  maskPosition: 'center',
  maskSize: 'contain',
  WebkitMaskImage: 'url("' + icons[props.name] + '")',
  WebkitMaskRepeat: 'no-repeat',
  WebkitMaskPosition: 'center',
  WebkitMaskSize: 'contain'
}))
</script>

<template>
  <span
    class="inline-block shrink-0"
    :style="iconStyle"
    role="img"
    :aria-label="name"
  />
</template>
