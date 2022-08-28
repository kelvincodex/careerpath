<template>
  <step-welcome  v-if="career.steps.one" />
  <div v-if="career.steps.two">
    <div class="pb-5 text-pink-400 flex">
      <h2 class="text-3xl font-bold font-mono">Step 1:</h2>
      <h2 class="text-3xl font-bold">Career Study</h2>
    </div>
    <div class="w-full bg-white shadow-xl p-9">
      <div class="w-full h-auto">
        <div class="flex flex-col flex-shrink-0 items-center justify-center py-10">
          <div class="w-[80%]" >
            <div  v-for="option in career.allOptions" :key="option.id">

              <div class="mb-10 rounded-md  hover:cursor-pointer hover:bg-gray-300  p-5 flex items-center" :class="[isActive(option.id) ? 'bg-gray-300'  : 'bg-white']"  @click="handleSelectOption(option.id)">
                <div  class="border float-left mr-4  w-9 h-9 rounded-full text-xl  text-center   border-black hover:bg-gray-100 flex  justify-center">
                  <h2 class="font-bold text-gray-400 self-center">
                      {{ option.letter }}
                  </h2>
                </div>
                <div class="border-black  text-sm flex" >{{ option.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[100%] m-auto">
        <PaginateButton @previous="previous()" @next="next()"   />
      </div>
    </div>
  </div>

  <EvaluateSteps v-if="career.steps.three" />
  <CareerFieldsvue v-if="career.steps.four" />
</template>
<script setup>
import PaginateButton from "../reuse/paginateButton.vue";
import {computed, onMounted, onUpdated, reactive, ref, watch} from "vue";
import {useCareer} from "../../stores/career";
import {SelectedOptionRequest} from "../../model/request/SelectedOptionRequest";
import StepWelcome from "./StepWelcome.vue";
import EvaluateSteps from "./EvaluateSteps.vue";
import CareerFieldsvue from "./CareerFieldsvue.vue";

const career = useCareer()
  const previous = () => {
    if (career.prev > 0){
        career.prev--
      career.current--
      career.setAllOptions(career.prev)
        career.next--
      career.end = false
      career.start = false
      return 0
    }
    career.start = true

  }

  const next = () => {

  if (career.next <= career.allQuestions.total_questions){
        career.next++
        career.setAllOptions(career.next)
        career.prev++
        career.current++

    career.start = false
    career.end = false
    if (career.next == 7){
      career.steps.two = false
      career.steps.three = true
    }
    return 0
  }else if (career.next > career.allQuestions.total_questions){
      career.steps.two = false
      career.steps.three = true

  }
  career.end = true

  }

  function handleSelectOption(id){
  active(id)
      SelectedOptionRequest.request.option_id = id
      career.setSelectedOption()
  }

  onUpdated(()=>{

  })

function active(id){
  const ott = [...career.allOptions]
  const  ids = ott.map((val)=> val.id)
  const index = ids.indexOf(id)

 if (career.active.includes(ids[index])){
       return 0
 }else {
   career.active.push(id)
   const active = ids.filter((item)=> item != id)
   console.log(active)
   if (career.active.includes(...active)){
     const activeIndex = career.active.indexOf(...active)
     console.log(activeIndex)
     console.log("active index")
     career.active =  career.active.filter((item, index)=>index != activeIndex)
     console.log("active")
   }
   console.log("not in active")
 }
  return 0
}
function isActive(id){
  if (career.active.includes(id)){
    return 1;
  }
  return 0
}

onMounted(()=>{
    career.setAllQuestions()
})

</script>

<style scope>
</style>