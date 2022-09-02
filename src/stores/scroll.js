import {defineStore} from "pinia";

export const useScroll = defineStore('scroll', {
    state: ()=>({
        scroll: 0
    }),

    actions: {
        setScroll(){
            this.scroll = window.scrollY
            console.log(this.scroll)
        }
    }
})