<template>
  <div id="app">    
    <input v-model="text" class="item-text" />
    <button @click="addItem">Добавить в список</button>
    <the-list ref="list" />
  </div>
</template>

<script>
import TheList from "./components/TheList.vue";

export default {
  name: "App",
  components: {
    TheList
  },
  data: function() {
    return {
      text: ""
    };
  },
  methods : {
    addItem() {
      this.$refs.list.addItem(this.text);
      this.text = "";
    }
  }
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
button {
  background-color: #00766c;
  color: white;
  padding: 5px;
  border-radius: 10px;
  height: 2.5rem;
  font-size: 1.5rem;
  margin-left: 30px;
}
.item-text {
 height: 2.5rem;
 font-size: 1.5rem;
}
</style>
