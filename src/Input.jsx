import React from "react";
class Input extends React.Component{

        render()
        {
        return <>
               <input value={this.props.value}readOnly style={{width:168,height:28}}></input>
               
                </>

    }
}
export default Input;