<template>
  <div class="categorias">
    <div class="row mt-4">
      <div class="col-lg-12 header-page"><h4 class="title">Categorias</h4></div>
    </div>
    <div class="row mt-5">
      <div
        v-for="categorie in categories.categories"
        :key="categorie.id"
        class="col-lg-3 col-sm-3 col-md-3"
      >
        <div class="card mt-2" v-on:click="showProducts(categorie.id)">
          <div class="card-body text-center">
            {{ categorie.name }}
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-sm-3 col-md-3">
        <div class="card mt-2 bg-info" v-on:click="showProducts('')">
          <div class="card-body text-center">Mostrar Tudo</div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12">

        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Produto</th>
              <th>Categoria</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody >
            <tr v-for="produto in products.products" :key="produto.id">

              <td  v-if="produto.category.id == mostrar || mostrar == ''">{{ produto.id }}</td>
              <td  v-if="produto.category.id == mostrar || mostrar == ''">{{ produto.name }}</td>
              <td  v-if="produto.category.id == mostrar || mostrar == ''">{{ produto.category.name }}</td>
              <td  v-if="produto.category.id == mostrar || mostrar == ''">{{ produto.price }}</td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "CategoriasPage",
  data() {
    return {
      mostrar: "",
    };
  },
  methods: {
    ...mapActions("categories", ["getCategories"]),
    ...mapActions("products", ["getProducts"]),

    showProducts(idCat) {
      idCat != this.mostrar ? (this.mostrar = idCat) : (this.mostrar = "");
    },
  },
  created() {
    this.getCategories();
    this.getProducts();
  },

  computed: {
    ...mapState(["categories", "products"]),
  },
};
</script>

<style scoped>

</style>