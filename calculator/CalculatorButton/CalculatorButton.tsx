import React from "react";
import { ICalculator, ICalculatorButton} from "../Calculator";
import NumberButton from "./NumberButton/NumberButton";
import OperatorButton from "./OperatorButton/OperatorButton";


const CalculatorButton =  (props:ICalculator & ICalculatorButton) =>{
    const { calculation, setCalculation,onOperatorButton ,setOnOperatorButton} = props

 return(<>
 <NumberButton  calculation={calculation} setCalculation={setCalculation} onOperatorButton={onOperatorButton} setOnOperatorButton={setOnOperatorButton}/>
 <OperatorButton  calculation={calculation} setCalculation={setCalculation} onOperatorButton={onOperatorButton} setOnOperatorButton={setOnOperatorButton}/>


 </>)
}

export default CalculatorButton