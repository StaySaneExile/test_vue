<template>
  <nav class="indigo darken-4">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">Tasks</router-link>
      <ul class="right hide-on-med-and-down">
        <div class="navbar">
          <router-link
              tag="li"
              to="/"
              exact
              active-class="active"
          >
            <a href="#">Create</a>
          </router-link>
          <router-link
              tag="li"
              to="/list"
              active-class="active"
          >
            <a href="#">List</a>
          </router-link>
        </div>
      </ul>
    </div>
  </nav>
</template>


<script>

</script>


<style>
  .navbar {
    display: flex;
  }
  nav {
    padding: 0 1.5rem;
  }
</style>