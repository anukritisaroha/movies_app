import React from "react";
class comlifecycle extends React.Component{
    //construct hua component comlifecycle
    constructor(props){
        super(props);
        console.log("constructor was called");
        //jb constructor use krte hai ye bnani pdti hai state
        this.state={
            on:false,
        }


    };
    componentDidMount(){
        //ek baar jb render chlega tb cll hoga
        console.log("didmount called");
    }

    componentDidUpdate(){
        //ye jb chlega jb state change hogi re render hoga jb hum click krenge render dobara chlega
        console.log("didupdated called");
    }
    //componet remove krna hai comlifecycle vala toh ye call krdo
    componentWillUnmount(){
        //component htane ko
        console.log("unmount");
    }
    render(){
      console.log("render was called");
      return(
        <div>
        <button onClick={()=>{
          if(this.state.child){
            this.setState({child:false})
          }
          else{
            this.setState({child:true})
          }
        }
        }>Click</button>
      
      </div>
      )
    }

}
export default comlifecycle;