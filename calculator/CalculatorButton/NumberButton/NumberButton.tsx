import React from "react"
import Calculator, { ICalculator, ICalculatorButton } from "../../Calculator"



const NumberButton =(props:ICalculator& ICalculatorButton) =>{
    const { calculation, setCalculation,} = props
    
    const headleNumberButton =(e: React.MouseEvent<HTMLButtonElement>)  =>{
        const target= e.target as HTMLButtonElement
        //뭐라고 주석을 달아야할지도 모르겠다 이말이야.
        //  as HTMLButtonElement 대하여...
        setCalculation( calculation+target.value)
    }

return(<> 
<button  onClick={headleNumberButton} value="1"> 1 </button>
<button  onClick={headleNumberButton} value="2"> 2 </button>
<button  onClick={headleNumberButton} value="3"> 3 </button>
<button  onClick={headleNumberButton} value="4"> 4 </button>
<button  onClick={headleNumberButton} value="5"> 5 </button>
<button  onClick={headleNumberButton} value="6"> 6 </button>
<button  onClick={headleNumberButton} value="7"> 7 </button>
<button  onClick={headleNumberButton} value="8"> 8 </button>
<button  onClick={headleNumberButton} value="9"> 9 </button>
<button  onClick={headleNumberButton} value="0"> 0 </button>
</>)
    
} 


export default NumberButton