<template>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Question</th>
          <th scope="col">Answer</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, question, answer } in tests" :key="id">
          <td>{{ question }}</td>
          <td>{{ answer }}</td>
          <td>
            <router-link :to="`/edit/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                Edit
              </button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteTest(id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadTests, deleteTest } from '@/firebase'

export default {
  setup() {
    const tests = useLoadTests()
    return { tests, deleteTest }
  }
}
</script>
