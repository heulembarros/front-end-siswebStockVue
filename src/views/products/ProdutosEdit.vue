<template>
  <div class="produtos">
    <div class="row mt-4">
      <div class="col-lg-12 header-page">
        <h4 class="title">Editar Produto</h4>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-lg-12 col-sm-12 col-md-12">
        <form v-for="(produto, index) in products" :key="index">
          <div v-if="index == 'products'">
            <div class="row">
              <div class="col-lg-12 col-sm-12 col-md-12">
                <div class="form-group">
                  <label>Nome do Produto</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="produto.name"
                  />
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-md-12">
                <div class="form-group">
                  <label>Quantidade</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="produto.amount"
                  />
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-md-12">
                <div class="form-group">
                  <label>Preço</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model.lazy="produto.price"
                    v-money="money"
                  />
                  {{produto.price}}
                </div>
              </div>
              <div class="col-lg-12 col-sm-12 col-md-12">
                <div class="form-group">
                  <label>Categoria</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="produto.category.name"
                  />

                  <select class="form-control" v-model="form.category">
                    <option
                      :selected="form.category == produto.category.id"
                      v-for="cat in categories.categories"
                      :key="cat.id"
                      :value="cat.id"
                    >
                      {{ cat.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 col-sm-12 col-md-12">
                <button class="btn btn-secondary mr-5">
                  <router-link to="/produtos">Cancelar</router-link>
                </button>

                <button
                  class="btn btn-primary"
                  v-on:click="editProduto(produto)"
                >
                  Atualizar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {{ categories }}
</template>

<script>
import { mapState, mapActions } from "vuex";
import { VMoney } from "v-money";

export default {
  data() {
    return {
      id: this.$route.params.id,
      form: {
        id: "",
        name: "",
        amount: "",
        category: {
          id: "",
          name: "",
        },
      },
      // price: "",
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        suffix: "",
        precision: 2,
        masked: false /* doesn't work with directive */,
      },
    };
  },
  directives: { money: VMoney },
  computed: {
    ...mapState(["products"]),
    ...mapState(["categories"]),
  },
  methods: {
    ...mapActions("products", ["findProductById", "updateProducts"]),
    ...mapActions("categories", ["getCategories"]),

    async editProduto(produto) {
      event.preventDefault();
      const update = {
        id: produto.id,
        name: produto.name,
        amount: produto.amount,
        price: produto.price,
        category: {
          id: produto.category.id,
          name: produto.category.name,
        },
      };
      try {
        await this.updateProducts(update);
        // await this.findProductById(produto.id);
      } catch (erro) {
        console.log(erro.data);
      }
    },
  },
  created() {
    this.findProductById(this.$route.params.id);

    this.getCategories();
  },
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