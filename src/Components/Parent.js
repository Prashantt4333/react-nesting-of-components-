import Child2, { Child, Child3, Child4 } from "./Child";

export default function Parent(){
    return <h1>
                Parent component 
                    <Child />
                    <Child2 />
                    <Child3 />
                    <Child4/> 
            </h1>
  }