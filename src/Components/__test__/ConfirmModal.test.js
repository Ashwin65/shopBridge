import Message from "../ConfirmModal";
import {Modal} from 'antd';
import {shallow} from "enzyme"


const okayHandler = jest.fn();
const cancelHandler = jest.fn();
const text = "are u sure want to delete this?";
let e = null
let record = null 

    jest.mock('antd',()=>({
        Modal: {
           confirm :({onOk}) => {onOk()},  
        }
     }))



describe("Test for Confirm Modal", ()=>{
    it("Test when On ok is triggered",()=>{
        Modal.confirm = jest.fn(()=>true)
        const Result = Message("hi",okayHandler,cancelHandler,e,record);
       expect(okayHandler).toBeCalled()
     
    })
})



   