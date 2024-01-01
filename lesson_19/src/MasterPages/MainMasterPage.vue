<template>
<div class="wrapper">
  <header class="header">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/friends">Friends</RouterLink>
      <RouterLink to="/gifts">Gifts</RouterLink>
      <RouterLink to="/assignments">Gifts Assignments</RouterLink>
    </nav>
  </header>
  <main class="page">
    <slot/>
  </main>

</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  font-size: 18px;
  margin-top: 2rem;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
  color: green;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

.wrapper {
  padding: 20px;

  max-width: 450px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 50px;
}

.header {
}

.page {
}
</style>