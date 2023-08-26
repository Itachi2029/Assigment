import './Footer.css'
import { useRef } from 'react'
export default function Footer(){

    const input1ref=useRef(null)
    const input2ref=useRef(null)
    const input3ref=useRef(null)

    const validation=({input1,input2,input3})=>{

        if(input1.trim().length===0){
            alert("Please file valid data input1 ")
            return false
        }
        else if(input2.trim().length===0){
            alert("Please fill valid data input 2")
            return false
        }
        else if(input3.trim().length===0){
            alert("Please fill valid data input 3")
            return false
        }
        return true


    }
    
    
    
    
    const Submit=()=>{
        const input1=input1ref.current.value
        const input2=input2ref.current.value
        const input3=input3ref.current.value
        if(validation({input1,input2,input3})){
            alert('Sucess fully Vlaidated data')
           input1ref.current.value=''
           input2ref.current.value=''
           input3ref.current.value=''}

    }

    return (
        <div className='footer'>

           <div className='footer_content'>
                <p>
                    <h4 className='settings'>Newlesstter</h4>
                    <p className='setting'>fhahsf ksfhdsh khsfkhsdf khshfksf khsfs </p>
                </p>
                <div className='input'>
                    <input ref={input1ref}></input>
                    <input ref={input2ref}></input>
                    <input ref={input3ref}></input>

                </div>
           </div>
           <button className='sub' onClick={Submit}> SEND</button>
           <h1 className='get'>GET</h1>
           <h1 className='in'>IN TOUCH</h1>

        </div>
    )
}