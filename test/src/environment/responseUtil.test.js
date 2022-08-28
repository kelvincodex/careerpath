import {ResponseUtil} from "../../../src/util/environment/ResponseUtil";

const response = ResponseUtil

    test('unidentified_error', ()=>{
        expect(response.response()).toEqual({ responseCode: "50", responseMessage: "unidentified_error" })

    })
    test("success", ()=>{
        expect(response.response('success')).toEqual( { responseCode: "00", responseMessage: "successful" })
    })

    test("system_error", ()=>{
        expect(response.response('system_error')).toContain({ responseCode: "20"})
    })