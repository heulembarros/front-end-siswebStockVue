<template>
  <div class="produtos">
    <div class="row mt-4">
      <div class="col-lg-12 header-page">
        <h4 class="title">Adicionar Produto</h4>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-lg-12 col-sm-12 col-md-12">
        <form>
          <div class="row">
            <div class="col-lg-12 col-sm-12 col-md-12">
              <div class="form-group">
                <label>Nome do Produto</label>
                <input type="text" class="form-control" v-model="form.name" />
              </div>
            </div>

            <div class="col-lg-12 col-sm-12 col-md-12">
              <div class="form-group">
                <label>Quantidade</label>
                <input type="text" class="form-control" v-model="form.amount" />
              </div>
            </div>

            <div class="col-lg-12 col-sm-12 col-md-12">
              <div class="form-group">
                <label>Valor</label>
                <input
                  type="text"
                  class="form-control"
                  v-model.lazy="price"
                  v-money="money"
                />
              </div>
            </div>

            <div class="col-lg-12 col-sm-12 col-md-12">
              <div class="form-group">
                <label for="exampleFormControlSelect1">Categoria</label>
                <select class="form-control" v-model="form.category">
                  <option selected>Selecione uma Categoria</option>
                  <option
                    v-for="categorie in categories.categories"
                    :key="categorie.id"
                    :value="categorie"
                  >
                    {{ categorie.name }}
                  </option>
                </select>
              </div>
            </div>

            <div class="col-lg-12 col-sm-12 col-md-12">
              <button class="btn btn-secondary mr-5">
                <router-link to="/produtos">Cancelar</router-link>
              </button>

              <button class="btn btn-primary" v-on:click="addProdutos">
                Adicionar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { VMoney } from "v-money";

export default {
  data() {
    return {
      form: {
        name: "",
        amount: "",
        category: {
          id: "",
          name: "",
        },
      },
      price: 0,
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
  methods: {
    ...mapActions("categories", ["getCategories"]),
    ...mapActions("products", ["addProducts"]),
    addProdutos(add) {
      event.preventDefault();
      this.price = this.price.replace(/\./g, "");
      this.price = this.price.slice(3).replace(",", ".");

      add = {
        name: this.form.name,
        amount: this.form.amount,
        price: this.price,
        category: this.form.category,
      };
      this.addProducts(add);
      this.$router.push("/produtos");
    },
  },
  created() {
    this.getCategories();
  },

  computed: {
    ...mapState(["categories"]),
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