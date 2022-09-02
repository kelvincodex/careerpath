<template>
  <div class="h-screen">
    <NavBar />
    <section class="w-full h-[300px] bg-mobile-hero-image bg-cover flex justify-center items-center">
      <h2 class="text-white font-[600] text-[26px] tracking-wide leading-[20px]">Career Path</h2>
    </section>
<!--    welcome -->
    <welcome-step-views v-if="carreer.steps.first" />
<!--    second step -->
    <section v-if="carreer.steps.second" class="p-10 flex flex-col justify-between gap-10">
      <div class="">
        <h2 class="text-[14px] font-[400] leading-2"><span class="text-[2opx] font-[600]">Note:</span><br>The exercise below will help align
          interests to different groups of occupations/careers. A set of options, grouped in twos, are below. Choose an
          option that you would prefer to do from each set, by ticking the alphabet close to it. Even if you prefer both of
          them or strongly dislike them, you would need to choose just one. In other words, if you MUST choose
          either, which one would it be?
        </h2>
      </div>
      <div class=" pl-20 m-10 mb-20">
        <div  v-for="(options, index) in items" :key="index">
          <div class="flex justify-start gap-3 items-center hover:bg-gray-400 p-3 rounded cursor-pointer mb-3" v-for="option in options"  :key="option.id"  :class="[active(option.id, option) ? 'bg-gray-400' : '']" @click="click(option.id)">
            <div class="w-10 h-10 rounded-full p-3 border flex justify-center items-center">{{option.letter}}</div>
            <div>
              {{option.name}}
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between mb-10" v-if="!carreer.end">
        <button class="p-2  rounded" @click="prev" :class="[carreer.prevDisabled ? 'bg-gray-100 text-dark-text': 'text-dark-text  hover:bg-primary hover:text-white']">prev</button>
        <div class="flex gap-0" >
          <div class="p-4   h-5 flex justify-center items-center "  >{{ carreer.current + 1 }} / {{carreer.allQuestions.total_questions}}</div>

        </div>
        <button class="p-2 rounded" @click="next" :class="[carreer.nextDisabled ? 'bg-gray-100 text-white': 'text-dark-text  hover:bg-primary hover:text-white']" >next</button>
      </div>
        <button class="p-2 rounded text-dark-text  hover:bg-primary hover:text-white"  @click="route"  v-else>continue</button>
    </section>
<!--    third step-->
    <EvaluateOptionsView v-if="carreer.steps.third" />
<!--fourth step -->
    <career-field-view v-if="carreer.steps.fourth" />
    <Footer class="mb-0 h-[300px]"/>
  </div>
</template>
<script setup>
import NavBar from "../../components/NavBar.vue";
import Footer from "../../components/Footer.vue";
import {ActionUtil} from "../../util/baseUtils/ActionUtil";
import {onBeforeMount, onMounted, onUpdated, reactive, ref, watch} from "vue";
import {useCareer} from "../../stores/career";
import {sweetToast} from "../../util/mixin/sweet";
import WelcomeStepViews from "./WelcomeStepViews.vue";
import CareerFieldView from "./CareerFieldView.vue";
import EvaluateOptionsView from "./EvaluateOptionsView.vue";
import {SelectedOptionRequest} from "../../model/request/SelectedOptionRequest";


const items = ref([])
const carreer = useCareer()
const clicked = ref(false)

onMounted( ()=>{
  console.log("on mount")
    carreer.setAllQuestions()
    items.value = [...carreer.allOptions.slice(carreer.current, carreer.current + 1)]
  console.log(carreer.current)
    // console.log(carreer.allQuestions)

})

function next(){

  if (clicked.value){
    clicked.value = false
    carreer.prevDisabled= false
    carreer.nextDisabled = true

    if (carreer.next > (carreer.allOptions.length - 1)){
      carreer.nextDisabled = true
      carreer.end = true
      return 0
    }else if(carreer.next <= (carreer.allOptions.length - 1)) {
      carreer.next = carreer.next === (carreer.allOptions.length - 1) ? carreer.next : carreer.next++
      carreer.prev++
      carreer.current++
      items.value = [...carreer.allOptions.slice(carreer.current, carreer.current + 1)]
    }else {
      return 0
    }
    if (carreer.current > (carreer.allOptions.length - 1)){
      carreer.end = true
    }
  }else {
    sweetToast.fire({
      icon: "error",
      text: "please select an option, going to the next one"
    })
  }
}
const currentQuest = ref()

function getNumber(obj){
  currentQuest.value = obj.question
}

function prev(){

  console.log(carreer.prev)
  if (carreer.prev < 0){
    carreer.prevDisabled = true
    carreer.next = 0
    console.log("last")
    return 0
  }else if(carreer.prev >=0 ) {
    carreer.prev = carreer.prev <= 0 ? 0 : carreer.prev--
    clicked.value = true
    carreer.next--
    carreer.current--
    items.value = [...carreer.allOptions.slice(carreer.current, carreer.current + 1)]
  }else {
    return 0
  }
}

function click(optionId) {
  clicked.value = true
  if (carreer.active.includes(optionId)) {
  } else {
    let ids
    for (const i in  items.value) {
      ids = items.value[i].map((val)=> val.id)
    }
       const id = ids.filter((x)=>x !== optionId)
      if (carreer.active.includes(...id)){
        const index = carreer.active.indexOf(...id)
        carreer.active =  carreer.active.filter((item, i)=>i !== index)
      }
       SelectedOptionRequest.request.option_id = optionId
        // console.log(optionId)
        // console.log(SelectedOptionRequest.request)

        carreer.setSelectedOption(SelectedOptionRequest.request)
          // carreer.active.push(optionId)
  }
}

function active(id, obj){
  getNumber(obj)
  if (carreer.active.includes(id)){
    clicked.value = true
    carreer.nextDisabled = false
    return 1
  }else {
    return 0
  }
}

function route(){
  carreer.steps.second = false
  carreer.steps.third = true

}
</script>