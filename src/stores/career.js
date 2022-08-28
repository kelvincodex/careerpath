import {defineStore} from "pinia";
import {QuestionService} from "../service/QuestionService";
import {SelectedOptionRequest} from "../model/request/SelectedOptionRequest";


export const useCareer = defineStore('career',{
    state: ()=>({
        allQuestions: {},
        allOptions: {},
        selectedOption: {},
        start: true,
        end: false,
        active: [],
        next: 0,
        prev: 0,
        current: 0,
        option_id: SelectedOptionRequest.request.option_id,
        startQuestion: 0,
        steps: {
            one: true,
            two: false,
            three: false,
            four: false
        },
        evaluate: {}
    }),

    actions: {
       async setAllQuestions(){
          await  QuestionService.allQuestion().then(async (response) => {
             if(this.allQuestions = await response.data){
                 this.setAllOptions(this.current)
             }

          })
        },
        setSelectedOption(payload = SelectedOptionRequest.request){
            // console.log(payload)
                QuestionService.selectedOption(payload).then((response)=>{
                    console.log(response)
                })
        },
        setAllOptions(value){
            this.allOptions = this.allQuestions.questions[value].options
        },
        setEvaluation(){
            QuestionService.allEvaluation().then((response)=>{
                this.evaluate = response.data.response_msg
            })
        },
    },

})

/*
setAllCareers
 */