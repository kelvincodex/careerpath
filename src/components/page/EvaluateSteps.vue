<template>
  <div>
    <div class="pb-5 text-pink-400">
      <h2 class="text-3xl font-bold font-mono">Step 2:</h2>
      <h2 class="text-3xl font-bold">Your top three areas of career interest are those.</h2>
    </div>

    <div class=" bg-white shadow-xl flex flex-col items-center justify-center p-9">
      <div class="w-1/3">

      </div>
      <div class="w-1/2 my-auto  p-4">
        <div class="flex flex-row">
          <h2 class="text-start mb-5 le font-bold text-2xl mr-10" v-for="letter in  letters" >{{ letter }}</h2>
        </div>

        <div class="flex justify-end">
          <button class="bg-pink-600 p-2 px-4 text-white rounded mt-5" @click="next" >Continue</button>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useCareer} from "../../stores/career";
import {onMounted, ref} from "vue";
const career = useCareer()
const letters = ref()
function next(){
  career.steps.two = true
  career.steps.three = false
}

onMounted(()=>{
  career.setEvaluation()
  letters.value = career.evaluate.map((val)=>{
    return val.letter
  }).slice(0, 3)

  console.log(career.evaluate)
})

</script>