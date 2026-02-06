<script setup lang="ts">
  import BaseSidebarSection from '@/components/ui/BaseSidebarSection.vue'

  type Item = { label: string; href?: string }

  const agents: Item[] = [
    { label: 'component-generator.agent.md', href: '.github/agents/component-generator.agent.md' },
  ]

  const skills: Item[] = [
    { label: 'vue-best-practices / SKILL.md', href: '.github/skills/vue-best-practices/SKILL.md' },
    {
      label: 'agent-workflow-builder_ai_toolkit / SKILL.md',
      href: '.github/skills/agent-workflow-builder_ai_toolkit/SKILL.md',
    },
  ]

  const instructions: Item[] = [
    { label: 'copilot-instructions.md', href: '.github/copilot-instructions.md' },
    {
      label: 'vue-standards.instructions.md',
      href: '.github/instructions/vue-standards.instructions.md',
    },
  ]

  function onSelect(item: Item) {
    if (item.href) {
      // Abrir en nueva pestaña; en la app puede cambiar según routing
      window.open(item.href, '_blank')
    }
  }
</script>

<template>
  <aside
    class="h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800 p-3"
  >
    <nav class="space-y-3">
      <BaseSidebarSection
        title="Agents"
        :items="agents"
        @select="onSelect"
      />
      <BaseSidebarSection
        title="Skills"
        :items="skills"
      />
      <BaseSidebarSection
        title="Instructions"
        :items="instructions"
      />
    </nav>
  </aside>
</template>

<style scoped>
  /* Small adjustments if needed */
</style>
