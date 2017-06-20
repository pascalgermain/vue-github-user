<template>
  <dl v-if="userRepoLastIssue">
    <dt>Last issue date:</dt>
    <dd>{{ createdAt }}</dd>
    <template v-if="userRepoLastIssue.assignee">
      <dt>Last issue user:</dt>
      <dd>{{ userRepoLastIssue.assignee.login }}</dd>
    </template>
  </dl>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    userRepo: {
      type: Object,
      required: true
    }
  },
  computed: {
    userRepoLastIssue () {
      return this.$store.state.userReposLastIssues
        .find(userRepoLastIssue => userRepoLastIssue.repository_url === this.userRepo.url)
    },
    createdAt () {
      return moment(this.userRepo.created_at)
        .format('MMMM Do YYYY, h:mm:ss a')
    }
  },
  created () {
    this.$store.dispatch('getUserRepoLastIssue', this.userRepo.id)
  }
}
</script>

<style scoped>
dl {
  clear: both;
}
</style>
