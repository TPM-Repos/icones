<script setup lang="ts">
import type { PropType } from 'vue'
import type { CollectionMeta } from '../data'
import { ref, computed } from 'vue'
import { previewColor } from '../store'
import { getTpmDriveWorksCode } from '../utils/icons'

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  collection: {
    type: Object as PropType<CollectionMeta>,
    required: true,
  },
})

const status = ref(false)

const tpmCode = computed(() => {
  return getTpmDriveWorksCode(props.icon, previewColor.value)
})

async function copyText() {
  if (!tpmCode.value) return false

  status.value = true
  setTimeout(() => {
    status.value = false
  }, 2000)

  try {
    await navigator.clipboard.writeText(tpmCode.value)
    return true
  }
  catch {}
  return false
}
</script>

<template>
  <div lt-md:hidden>
    <a
        href="https://github.com/TPM-Repos/Dynamic-Icon-Plugin/releases" target="_blank"
        class="block w-fit my-1 text-sm mt6 op50 hover:op100 hover:text-primary"
      >
      Use in TPM DriveWorks Icon Plugin
    </a>
    <div class="border-1 border-base rounded w-fit min-w-100 mt1">
      <div flex="~ gap-4 items-center" p3 border="b base">
        <div class="flex items-center gap-2">
          <Icon icon="carbon:code" class="text-xl" />
          <div mt--1>TPM DriveWorks</div>
        </div>
      </div>

      <div flex="~ gap-2 items-center" p3>
        <code flex-auto text-sm>
          {{ tpmCode }}
        </code>
        <IconButton icon="carbon:copy" @click="copyText" />
      </div>
      <Notification :value="status">
        <Icon icon="mdi:check" class="inline-block mr-2 font-xl align-middle" />
        <span class="align-middle">Copied</span>
      </Notification>
    </div>
  </div>
</template>
