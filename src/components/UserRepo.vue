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
    </dl>
    <hr>
  </li>
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
