<template>
  <div class="produtos">
    <div class="row mt-4">
      <div class="col-lg-12 header-page">
        <h4 class="title">Produtos</h4>
        <button class="btn btn-primary">
          <router-link to="/produtosadd">Adicionar</router-link>
        </button>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-lg-12 col-sm-12 col-md-12">
        <div id="demo"></div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nome</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Valor</th>
              <th scope="col">Categoria</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(produto, key) in products.products" :key="key">
              <th scope="row">{{ produto.id }}</th>
              <td>{{ produto.name }}</td>
              <td>{{ produto.amount }}</td>
              <td>{{ dinheiro(produto.price) }}</td>
              <td>
                <span
                  v-for="(categoria, index) in produto.category"
                  :key="index"
                  >{{ categoria }}</span
                >
              </td>
              <td>
                <router-link
                  :to="{ name: 'produtoedit', params: { id: produto.id } }"
                  >Editar</router-link
                >
                |
                <a
                  href="javascript:void(0)"
                  v-on:click="excluirprod(produto.id, produto.name)"
                  >Excluir</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ProdutosPage",
  data() {
    return {
      mensagem: "",
    };
  },
  methods: {
    ...mapActions("products", ["getProducts", "deleteProducts"]),

    dinheiro(valor) {
      var valorFinal = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
      return valorFinal;
    },

    async excluirprod(id, name) {
      if (confirm(`Deseja excluir o produto ${name}?`) == true) {
        try {
          this.mensagem = document.getElementById("demo").innerHTML = "Carregando!";
          await this.deleteProducts(id);
          await this.getProducts();
          this.$router.go();
          this.mensagem = "Produto excluído com sucesso!";
        } catch (erro) {
          console.log(erro.data);
        }
      }
    },
  },
  computed: {
    ...mapState(["products"]),
  },
  created() {
    this.getProducts();
  },
};
</script>

<style scoped>
.header-page button a {
  color: #fff;
}
.header-page button {
  float: right;
}
</style>
