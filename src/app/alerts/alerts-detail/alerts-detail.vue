<template>
  <h4>Alerts Detail</h4>
  <p>{{ counter.count }}</p>
  <p>{{ JSON.stringify(result) }}</p>
  <input type="text" v-model="inputName" />
  <input type="number" v-model="inputAge" />
  <app-button @click="postInput">Send</app-button>
</template>

<script setup lang="ts">
import axios from "axios";
import { reactive, ref, onMounted, Ref } from "vue";

import { useCounterStore } from "../../../store";

const inputName: Ref<string | number> = ref("");
const inputAge: Ref<string | number> = ref("");

const counter = useCounterStore();
const result: { data: string; age: number}[] = reactive([]);

const getData = async () => {
  await axios.get("/api/get").then((res) => {
    console.log(res);
    result.push(res.data);
  });
};

function postInput() {
  axios
    .post("/api/post", { name: inputName.value, age: inputAge.value })
    .then((res) => {
      console.log(res);
      result.push(res.data);
    });
}

onMounted(() => {
  getData();
});

</script>
