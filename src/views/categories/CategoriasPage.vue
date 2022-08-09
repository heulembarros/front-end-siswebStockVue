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
        <div class="card">
          <div class="card-body">
            {{ categorie.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Categoria</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="produto in products.products" :key="produto.id">
              <td>{{produto.name}}</td>
              <td>{{produto.category.name}}</td>
              <td>{{produto.price}}</td>
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
    return {};
  },
  methods: {
    ...mapActions("categories", ["getCategories"]),
    ...mapActions("products", ["getProducts"]),
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