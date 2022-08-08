<template>
  <div class="login">
    <div class="row mt-4">
      <div class="col-lg-12 header-page"><h4 class="title">Login</h4></div>
    </div>
    <div class="row mt-5">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-header">Entrar</div>
          <div class="card-body">
            <div class="row mt-3">
              <div class="col-lg-12 col-sm-12 col-md-12">
                <form>
                  <div>
                    <div class="row">
                      <div class="col-lg-12 col-sm-12 col-md-12">
                        <div class="form-group">
                          <label>Usuário</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="username"
                          />
                        </div>
                      </div>
                      <div class="col-lg-12 col-sm-12 col-md-12">
                        <div class="form-group">
                          <label>Senha</label>
                          <input
                            type="password"
                            maxlength="6"
                            class="form-control"
                            v-model="password"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12 col-sm-12 col-md-12">
                        <button class="btn btn-primary" v-on:click="login">Entrar</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login(){
        event.preventDefault
        const dados = {
            username: this.username,
            password: this.password
        }
        Axios.post('http://localhost:8083/login', dados).then(response => {
            localStorage.setItem('token', response.data.token)
            this.$router.push('/')
        });
    }
  },
};
</script>

<style scoped>
.router-link-active.router-link-exact-active a:hover,
.router-link-active.router-link-exact-active a:focus {
  color: #fff !important;
  text-decoration: none !important;
  outline: none !important;
}
</style>