<template>
  <form @submit.prevent="submit">
    <input v-model="query">
    <input type="submit" value="Search">
  </form>
</template>

<script>
export default {
  data () {
    return {
      query: ''
    }
  },
  methods: {
    submit () {
      this.$emit('submit', this.query)
    }
  }
}
</script>
