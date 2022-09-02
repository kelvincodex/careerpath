<template>
  <div class="m-0 w-full h-[100vh] bg-white">
    <div class="h-full flex flex-col justify-center items-center  bg-black bg-opacity-70">
      <div class="mb-5 mt-20">
        <h2 class="text-white  font-[700]   text-[32px] md:text-[24px]">Login</h2>
      </div>
      <div class="bg-opacity-70 bg-white p-5 md:p-11 w-[90%] md:w-1/3  rounded drop-shadow mb-20 ">
        <form @submit.prevent="handle" class="flex flex-col">
          <div class="mb-4">
            <label class="text-[14px] md:text-[18px]  font-[400]">Email Address</label>
            <input type="email" class="form-input w-full" v-model="LoginRequest.request.email"  @focus="error.email = false" :class="[error.email ? 'border border-primary' : '']" />
            <span v-if="error.email" class="text-primary text-[16px]">required!</span>
          </div>
          <div class="mb-4">
            <label class="text-[14px] md:text-[18px]  font-[400]">Password</label>
            <input type="password" class="form-input w-full" v-model="LoginRequest.request.password" @focus="error.password = false" :class="[error.password ? 'border border-primary' : '']" />
            <span v-if="error.password" class="text-primary text-[16px]" >required!</span>
          </div>
          <div class=" self-center p-3">
            <button v-if="!auth.isLoading" type="submit" class="bg-primary p-2 rounded">Submit</button>
            <Loader v-else />
          </div>
          <p>don't have an account? <router-link :to="{name: ActionUtil.route.auth.register}" class="hover:text-primary text-blue-700">sign up</router-link></p>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ActionUtil} from "../../util/baseUtils/ActionUtil";
import {reactive} from "vue";
import {LoginRequest} from "../../model/request/LoginRequest";
import {ErrorsService} from "../../service/ErrorsService";
import {useAuth} from "../../stores/auth";
import Loader from "../../components/reuse/Loader.vue";
import {sweetToast} from "../../util/mixin/sweet";

const error = reactive({
    email: false,
    password: false,
})
const auth =useAuth()

const handle = ()=>{
   const err = ErrorsService.login(LoginRequest, error)
    if(err === 1){
        auth.login(LoginRequest.request)
    }else {
      sweetToast.fire({
        icon: "error",
        text: "Check Your Credential and try again!!"
      })
    }

}
</script>