import React from 'react';
import Input from './Input';
import Buttons from './Buttons';

class Calculator extends React.Component{

    constructor(props){
        super(props);
        this.state={
            value:'',
        
        }; 
       
   }

   clickhandle(i){
    this.setState({
      value:this.state.value+i,
     });

   }
   
   clickeval(){
     let y=this.state.value
     let x=eval(this.state.value);

     if(x)
     {
          this.setState({
               value:x,
          
     });
}
     else
     {
          this.setState({value:'Syntax error'})
     }
}
     clickclear(){
          
          this.setState({
               value:'',
          })
     }
     

   

     render()
     {  return (<>
                <h1>Calculator</h1>
               <div>
                 <Input value={this.state.value}></Input>
                  
                  <div>

                    <Buttons name={1} onClick={()=>this.clickhandle('1')} />
                    <Buttons name={2} onClick={()=>this.clickhandle('2')} />
                    <Buttons name={3} onClick={()=>this.clickhandle('3')} />
                    <Buttons name={0} onClick={()=>this.clickhandle('0')} />
                  </div>


                  <div>
                    <Buttons name={4} onClick={()=>this.clickhandle('4')} />
                    <Buttons name={5} onClick={()=>this.clickhandle('5')} />
                    <Buttons name={6} onClick={()=>this.clickhandle('6')} />
                    <Buttons name={7} onClick={()=>this.clickhandle('7')} />
                  </div>
                 
                 <div>
                    <Buttons name={8} onClick={()=>this.clickhandle('8')} />
                    <Buttons name={9} onClick={()=>this.clickhandle('9')} />
                    <Buttons name={'*'} onClick={()=>this.clickhandle('*')} />
                    <Buttons name={'/'} onClick={()=>this.clickhandle('/')} />                      

                 </div>
                    <Buttons name={'-'} onClick={()=>this.clickhandle('-')} />
                    <Buttons name={'+'} onClick={()=>this.clickhandle('+')} />
                    <Buttons name={'='} onClick={()=>this.clickeval()} />
                    <Buttons name={'Clr'} onClick={()=>this.clickclear()} />
                 
                 <div>
                      
                     
                 </div>
                 
                  
          </div>
                  
                </>);


}
}
export default Calculator;

