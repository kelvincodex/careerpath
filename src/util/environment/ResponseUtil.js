export class ResponseUtil{
    static response = (val) => {
       switch(val){
           case "success":
             return { responseCode: "00", responseMessage: "successful" };
               break;
           case "error":
               return{ responseCode: "10", responseMessage: "error" };
               break;
           case "system_error":
               return{ responseCode: "20", responseMessage: "system_error" } ;
               break;
           case "invalid_request":
               return{ responseCode: "30", responseMessage: "invalid_request" } ;
               break;
           case "something_went_wrong":
               return{ responseCode: "40", responseMessage: "something_went_wrong" } ;
               break;
           default :
               return{ responseCode: "50", responseMessage: "unidentified_error" }
       }
}
}

