import {sweetModal} from "../mixin/sweet";

export function NetworkErrorMessage(message){
    if (message !== "Request failed with status code 400") {
        console.log("hello")
          sweetModal.fire({
            icon: 'error',
            html: `${message}`,

        })
        console.log("Error message caught......")
        return 1
    }else {
        console.log("Error message escaped......")
        return 0;
    }
}