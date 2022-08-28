<template>
  <div>
    <h2 class="text-3xl font-bold font-mono shadow-xl">Welcome, Emmanuel Izu</h2>
    <div class=" bg-white shadow-xl flex justify-around p-9">
      <div class="w-1/3">
        <img src="../../assets/path.gif" class="bg-transparent " />
      </div>
      <div class="w-1/2 my-auto">
        <h2 class="text-start mb-5 font-bold text-2xl">Career Path</h2>
        <p>
          It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
        </p>
        <div class="flex justify-end">
          <button class="bg-pink-600 p-2 px-4 text-white rounded mt-5" @click="next" >Start</button>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useCareer} from "../../stores/career";
const career = useCareer()

function next(){
  career.steps.one = false
  career.steps.two = true
}
</script>