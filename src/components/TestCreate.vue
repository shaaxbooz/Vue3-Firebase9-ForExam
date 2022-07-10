<template>
  <div class="card card-body mt-4">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Question</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Answer</label>
        <input
          v-model="form.email"
          class="form-control"
          type="text"
          required
        />
      </div>

      <button type="submit" class="btn btn-success mt-3">
        Create Question
      </button>
    </form>
  </div>
</template>

<script>
import { createTest } from '@/firebase'
import { reactive } from 'vue'

export default {
  setup() {
    const form = reactive({ question: '', answer: '' })

    const onSubmit = async () => {
      await createTest({ ...form })
      form.question = ''
      form.answer = ''
    }

    return { form, onSubmit }
  }
}
</script>
