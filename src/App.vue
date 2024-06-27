<template>
  <h1>Tienda 32 Bits</h1>
  <br /><br />
  <h3>Lista de Juegos</h3>
  <TablaJuegos />
</template>

<script>
import TablaJuegos from "./components/TablaJuegos.vue";

export default {
  name: "App",
  components: {
    TablaJuegos,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
