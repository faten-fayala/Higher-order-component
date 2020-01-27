import React from "react";
import Spinner from"./spinner";

const HOC=(Component)=>{


return props=> props.isloading? <Spinner/>:<Component{...props}/>





}
export default HOC;