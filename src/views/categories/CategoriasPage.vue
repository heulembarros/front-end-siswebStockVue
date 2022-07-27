<template>
  <div class="categorias">
    <div class="row mt-4">
      <div class="col-lg-12"><h4 class="title">Categorias</h4></div>
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
    ...mapActions(["getCategories"]),
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
</style>