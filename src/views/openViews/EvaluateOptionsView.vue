<template>

  <section class="p-10 flex flex-col justify-between gap-10">
    <div class="">
      <h2 class="text-[14px] font-[400] leading-2"><span class="text-[2opx] font-[600]">Step 2:</span><br>
        Career Evaluation
      </h2>
    </div>
    <div class="">
      <table class="w-full border-collapse border border-slate-500">
        <thead>
        <tr>
          <th class="py3 px-6 border border-slate-500">Letters</th>
          <th class="py3 px-6 border border-slate-500">Number of Appearance</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="(response, i) in items" :key="i">
            <td class="py-4 px-6 font-[600] text-20px  border border-slate-500" >{{ response.letter }}</td>
            <td class="py-4 px-6  border border-slate-500">{{ response.appearance }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="">
      <button @click="route" class="p-3 bg-primary text-white rounded">Continue</button>

    </div>
  </section>

</template>
<script setup>
import {useCareer} from "../../stores/career";
import {onMounted, ref} from "vue";
const career = useCareer()
const items = ref([])
onMounted(()=>{
  career.setEvaluation()
  items.value = career.evaluate.response_msg
  console.log(career.evaluate)

})


const route = ()=>{
  career.steps.third = false
  career.steps.fourth = true
}
</script>