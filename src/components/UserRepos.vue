<template>
  <ul v-if="userRepos">
    <user-repo v-for="userRepo in userRepos" :key="userRepo.name" :user-repo="userRepo"></user-repo>
  </ul>
</template>

<script>
import {mapState} from 'vuex'
import UserRepo from './UserRepo'

export default {
  components: {
    UserRepo
  },
  computed: {
    ...mapState([
      'user',
      'userRepos'
    ])
  },
  watch: {
    user (value) {
      this.$store.dispatch('getUserRepos')
    }
  }
}
</script>
