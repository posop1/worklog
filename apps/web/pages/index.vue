<template>
  <div style="padding: 50px; font-family: system-ui; max-width: 800px">
    <h1>Web App</h1>
    <p>This is the main web application in the monorepo.</p>

    <div style="margin-top: 30px">
      <Card title="UI Components Demo" :footer="true">
        <p>This card demonstrates shared UI components from @repo/ui package.</p>
        <Input
          v-model="name"
          label="Your Name"
          placeholder="Enter your name"
        />
        <template #footer>
          <Button @click="handleSubmit">Submit</Button>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button, Card, Input } from '@repo/ui'

const name = ref('')

const handleSubmit = () => {
  alert(`Hello, ${name.value || 'Guest'}!`)
}
</script>
