<template>
  <div id="app">
    <div class="header">
      <search-box @submit="getUser($event)"></search-box>
    </div>
    <div class="main">
      <div class="col">
        <user-profile></user-profile>
      </div>
      <div class="col">
        <user-repos></user-repos>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from './components/SearchBox'
import UserProfile from './components/UserProfile'
import UserRepos from './components/UserRepos'

export default {
  components: {
    SearchBox,
    UserProfile,
    UserRepos
  },
  methods: {
    getUser (query) {
      this.$store.dispatch('getUser', {query})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.header {
  line-height: 40px;
  margin: 20px 10px;
  border: 1px solid #ddd;
  padding: 20px;
}

.main {
  padding: 10px 20px;
}

.col {
  float: left;
  width: 50%;
}
</style>
