import { useState } from "react"
import { ColorBg } from "./Color"



function useLight () {
    const [CurrentINdex,setCurrentIndex] = useState(0)
    const [CountClick,setCountClick] = useState(0)
    const [ColorState,setColorState] = useState(ColorBg)
  

const CLickCallBack = ()=>{

}


  return {CLickCallBack}
}

export default useLight