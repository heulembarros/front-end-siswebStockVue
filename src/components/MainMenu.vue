<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item logo">
          <router-link to="/"
            ><img alt="Vue logo" src="../assets/logo.png"
          /></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/categorias">Categorias</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/produtos">Produtos</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/sobre">Sobre</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "MainMenu",
};
</script>

<style scoped>
.logo img {
  width: 50px;
}
li.nav-item {
  padding: 5px 7px;
}
</style>