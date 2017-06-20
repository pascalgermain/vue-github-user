<template>
  <li>
    <dl>
      <dt>Name:</dt>
      <dd>
        <a :href="userRepo.html_url" target="_blank">{{ userRepo.name }}</a>
      </dd>
      <dt>Created:</dt>
      <dd>{{ createdAt }}</dd>
      <template v-if="userRepo.description">
        <dt>Description:</dt>
        <dd>{{ userRepo.description }}</dd>
      </template>
      <user-repo-last-issue v-if="userRepo.has_issues" :user-repo="userRepo"></user-repo-last-issue>
    </dl>
    <hr>
  </li>
</template>

<script>
import moment from 'moment'
import UserRepoLastIssue from './UserRepoLastIssue'

export default {
  components: {
    UserRepoLastIssue
  },
  props: {
    userRepo: {
      type: Object,
      required: true
    }
  },
  computed: {
    createdAt () {
      return moment(this.userRepo.created_at)
        .format('MMMM Do YYYY, h:mm:ss a')
    }
  }
}
</script>

<style scoped>
li {
  display: block;
  list-style: none;
}

a {
  color: #000;
}

a:hover {
  text-decoration: none;
}

dl {
  margin: 0;
}

dt,
dd {
  float: left;
}

dt,
hr {
  clear: both;
}

dd {
  margin: 0 0 8px 8px;
}
</style>
