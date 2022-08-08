<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="logo navbar-brand"
        ><img alt="Vue logo" src="../assets/logo.png"
      /></router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
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

        <div class="float-right my-2 my-lg-0">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            <router-link to="/login">Login</router-link>
          </button>
        </div>
      </div>
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
.btn-outline-success a:hover, .btn-outline-success a:focus {
    color: #fff;
}
</style>