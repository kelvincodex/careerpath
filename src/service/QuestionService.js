import {AxiosService} from "./interceptors/AxiosService";

export class QuestionService{

    static allQuestion(){
       return  AxiosService.client().get("/fetch_questions/")
    }

    static selectedOption(payload){
       return  AxiosService.client().post("/answer_question/", payload)
    }

    static allEvaluation(){
       return  AxiosService.client().post("/fetch_common_answers/")
    }

    static fetchAnswers(){
       return  AxiosService.client().post("/fetch_answers/")
    }

    static allInterest(){
       return  AxiosService.client().post("/fetch_all_interests")
    }

}