<template>

  <div class="w-full h-screen">
    <nav-bar />
    <div class="md:w-[70%] mx-auto  md:mt-20 ">
      <div class=" bg-white  shadow-xl flex justify-center md:justify-end px-7">
        <div class="self-center hidden md:block">
          <img src="../../assets/register.gif" class="w-3/4" />
        </div>
          <div>
          <h2 class="text-2xl font-bold text-center mt-10  mb-10">Register</h2>
            <form class="p-9" @submit.prevent="handleRegister">
              <div class="mb-5 flex justify-between">
                <label class="font-bold text-sm self-center ">First Name:</label>
                <input type="text" class="form-input" v-model="RegisterRequest.request.first_name">
              </div>
              <div class="mb-5 flex justify-between" >
                <label class="font-bold text-sm self-center">Last Name:</label>
                <input type="text" class="form-input" v-model="RegisterRequest.request.last_name">
              </div>
              <div class="mb-5 flex justify-between" >
                <label class="font-bold text-sm self-center mr-2">Email Address:</label>
                <input type="email" class="form-input" v-model="RegisterRequest.request.email">
              </div>
              <div class="mb-5 flex justify-between " >
                <label class="font-bold text-sm self-center">Password:</label>
                <input type="password" class="form-input" v-model="RegisterRequest.request.password">
              </div>

              <div class="mb-5 flex justify-between" >
                <label class="font-bold text-sm self-center mr-2">Re-type Password:</label>
                <input type="password" class="form-input" v-model="retype">
              </div>
              <div class="w-full flex justify-center">
                <button type="submit" class="bg-pink-600 p-2 px-4 text-white rounded">Submit</button>
              </div>
            </form>
          <p class="text-center mb-2">Already have an account? <router-link :to="{name: ActionUtil.route.auth.login}" class="text-blue-500">Sign in</router-link></p>
          </div>
        </div>
    </div>
  </div>
</template>
<script setup>
import NavBar from "../../components/home/NavBar.vue";
import {ActionUtil} from "../../util/baseUtils/ActionUtil";
import {RegisterRequest} from "../../model/request/RegisterRequest";
import {reactive, ref} from "vue";
import {sweetToast} from "../../util/mixin/sweet";
import {useAuth} from "../../stores/auth";
const authStore = useAuth()
const retype = ref("")

const handleRegister = ()=>{
  console.log(RegisterRequest.request.email)
  if (RegisterRequest.request.password !== retype.value){
    sweetToast.fire({
      icon: 'error',
      title: "password does not match!!"
    })
    return 0
  }else if (RegisterRequest.request.email === null){
    sweetToast.fire({
      icon: 'error',
      title: "email is required!!!"
    })
    return 0
  }else if(RegisterRequest.request.last_name === null){
    sweetToast.fire({
      icon: 'error',
      title: "last_name is required!!"
    })
    return 0
  }else if(RegisterRequest.request.first_name === null){
    sweetToast.fire({
      icon: 'error',
      title: "first_name required!!"
    })
    return 0
  }else {
    const emailConst = RegisterRequest.request.email.split('@')
    const random =  Math.ceil( 1000 + Math.random()  * 1000)
    RegisterRequest.request.username = emailConst[0] + random

    authStore.register(RegisterRequest.request)
  }
}

</script>