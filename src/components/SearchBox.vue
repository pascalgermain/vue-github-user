<template>
  <form @submit.prevent="submit">
    <input v-model="query" :placeholder="placeholder">
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
  props: {
    placeholder: {
      type: String
    }
  },
  methods: {
    submit () {
      this.$emit('submit', this.query)
    }
  }
}
</script>
