<script setup lang="ts">
const buildTime = __BUILD_TIME__

const timeAgo = useTimeAgo(new Date(buildTime))
</script>

<template>
  <footer class="text-center text-sm pt-8 pb-6">
    <p class="color-fade">
      Forked from
      <a
        class="opacity-75 hover:opacity-100"
        href="https://github.com/antfu/icones"
        target="_blank"
      >Icônes</a>
      by
      <a
        class="opacity-75 hover:opacity-100"
        href="https://github.com/antfu"
        target="_blank"
      >@antfu</a>,
      adapted for TPM
    </p>
    <div color-fade mt-1 op50 italic>
      Last update: {{ buildTime }} ({{ timeAgo }})
    </div>
  </footer>
</template>
