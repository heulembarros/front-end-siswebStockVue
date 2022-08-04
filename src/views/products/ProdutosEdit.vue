<template>
  <div class="produtos">
    <div class="row mt-4">
      <div class="col-lg-12 header-page">
        <h4 class="title">Editar Produto {{id}}</h4>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-lg-12 col-sm-12 col-md-12">
        <form>
          <div class="row">
            <div class="col-lg-12 col-sm-12 col-md-12">
              <div class="form-group">
                <label>Nome do Produto</label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  v-model="form.name"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 col-sm-12 col-md-12">
              <button class="btn btn-secondary mr-5">
                <router-link to="/produtos">Cancelar</router-link>
              </button>

              <button class="btn btn-primary">Atualizar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      id: this.$route.params.id,
      form: {
        id: "",
        name: "",
        amount: "",
        price: "",
        category: {
          id: "",
          name: "",
        },
      },
    };
  },

  // computed: {
  //   ...mapState(["products"]),
  // },
  // methods: {
  //   ...mapActions("products", ["findProductById"]),
  //   editProduto(produto) {
  //     event.preventDefault();
  //     const update = {
  //       id:produto.id,
  //       name:produto.name,
  //       amount:produto.amount,
  //       price:produto.price
  //     }
  //     console.log(update);
  //   }
  // },
  // created() {
  //   this.findProductById(this.$route.params.id);
  // },
};
</script>

<style scoped>
.mr-5 {
  margin-right: 20px;
}

.btn a {
  color: #fff;
}
</style>