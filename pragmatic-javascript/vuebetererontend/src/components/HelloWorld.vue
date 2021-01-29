<template>
  <div>
    <p>{{ name }}</p>

    <button v-on:click="changeName">Verander naam</button>

    <button @click="addTea">Voeg thee toe</button>

    <button @click="getTeas">GET teas</button>

    <ul>
      <li v-for="tea in teas" v-bind:key="tea.id">
        {{ tea.flavor }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Tea } from "../models/tea";

@Options({
  props: {
    msg: String,
    name: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
  name = "JP";
  teas: Tea[] = [
    { id: 4, flavor: "English Blend", photo: "heb ik niet" },
    { id: 8, flavor: "Earl Grey", photo: "heb ik ook niet" },
  ];

  changeName() {
    this.name = "Bryan";
  }
  addTea() {
    this.teas.push({
      id: 16,
      flavor: "Flava flav",
      photo: "zie internet",
    });
  }
  getTeas() {
    fetch('http://localhost:1337/api/tea').then(x => x.json()).then(teas => {
      this.teas = teas;
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}
</style>
