<template>
  <div class="card card-body mt-4">
    <h3>Edit Question</h3>
    <form @submit.prevent="update">
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

      <button type="submit" class="btn btn-primary  mt-3">
        Update
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getTest, updateTest } from '@/firebase'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const testId = computed(() => route.params.id)

    const form = reactive({ question: '', answer: '' })
    onMounted(async () => {
      const test = await getTest(testId.value)
      console.log(test, testId.value)
      form.question = test.question
      form.answer = test.answer
    })

    const update = async () => {
      await updateTest(testId.value, { ...form })
      router.push('/')
      form.question = ''
      form.answer = ''
    }

    return { form, update }
  }
}
</script>
