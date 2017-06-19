<template>
  <div>
    <div v-if="loading">Loading...</div>
    <template v-else>
      <dl>
        <dt>Name:</dt>
        <dd>{{ user.login }}</dd>
        <dt>Created:</dt>
        <dd>{{ createdAt }}</dd>
      </dl>
      <img v-if="user.avatar_url" :src="user.avatar_url">
    </template>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  computed: {
    user () {
      return this.$store.state.user
    },
    loading () {
      return this.$store.state.loading
    },
    createdAt () {
      return moment(this.user.created_at)
        .format('MMMM Do YYYY, h:mm:ss a')
    }
  }
}
</script>

<style scoped>
dl {
  margin: 0;
}

dt,
dd {
  float: left;
}

dt {
  clear: both;
}

dd {
  margin: 0 0 8px 8px;
}

img {
  display: block;
  clear: both;
  width: 200px;
  height: 200px;
}
</style>
