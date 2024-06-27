<template>
  <div class="tableContainer">
    <table style="width: 100%">
      <tr>
        <th>Código</th>
        <th>Nombre</th>
        <th>Stock</th>
        <th>Precio</th>
        <th>Acciones</th>
      </tr>
      <tr v-for="(juego, i) in juegos" :key="i">
        <td>{{ juego.codigo }}</td>
        <td>{{ juego.nombre }}</td>
        <td>{{ juego.stock }}</td>
        <td>${{ juego.precio }}</td>
        <td>
          <button @click="disminuirStock(i)">-</button>
          <button @click="incrementarStock(i)">+</button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["juegos"]),
  },
  methods: {
    ...mapActions(["incrementarStock", "disminuirStock"]),
  },
};
</script>
<style>
table,
th,
td {
  border: 1px solid black;
}
.tableContainer {
  margin: 50px;
}
</style>
