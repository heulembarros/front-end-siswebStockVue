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
                <input type="text" class="form-control" v-model="form.price" />
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

export default {
  data() {
    return {
      form: {
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
  methods: {
    ...mapActions(["getCategories"]),
    ...mapActions("products", ["addProducts"]),
    addProdutos(add) {
      event.preventDefault();
      add = {
        name: this.form.name,
        amount: this.form.amount,
        price: this.form.price,
        category: this.form.category,
      };
      this.addProducts(add);
      this.$router.push("/produtos")
      // this.form.name = "";
      // this.form.amount = "";
      // this.form.price = "";
      // this.form.category = "";
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