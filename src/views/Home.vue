<template>
  <TestCreate />
  <TestList />
</template>

<script>
import TestCreate from '@/components/TestCreate.vue'
import TestList from '@/components/TestList.vue'

export default {
  name: 'Home',
  components: { TestCreate, TestList }
}
</script>
