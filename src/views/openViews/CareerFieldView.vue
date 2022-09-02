<template>

  <section class="p-10 flex flex-col justify-between gap-10">
    <div class="">
      <h2 class="text-[14px] font-[400] leading-2"><span class="text-[2opx] font-[600]">Step 2:</span><br>
        Description of your top area of career interest
      </h2>
    </div>
    <div class="">
      <table class="w-full border-collapse border border-slate-500">
        <thead>
        <tr>
          <th class="py3 px-6 border border-slate-500">Letters</th>
          <th class="py3 px-6 border border-slate-500">Fields of interest</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(evaluate, i) in items" :key="i">
          <td class="py-4 px-6 font-[600] text-20px  border border-slate-500">{{evaluate.letter}}</td>
          <td class="py-4 px-6  border border-slate-500">{{evaluate.field}}</td>
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
import {ActionUtil} from "../../util/baseUtils/ActionUtil";
import {useCareer} from "../../stores/career";
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import {sweetModal} from "../../util/mixin/sweet";
const career = useCareer()
const router = useRouter()
const items = ref()
onMounted(()=>{
  career.setEvaluation()
  console.log(career.evaluate)
  items.value = career.evaluate.response_msg.slice(0, 5)
})
const route = ()=>{
  career.steps.first = true
  career.steps.fourth = false

  router.push({ name: ActionUtil.route.page.courses})
}
</script>