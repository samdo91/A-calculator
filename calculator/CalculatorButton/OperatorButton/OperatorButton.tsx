import React from "react";
import { ICalculator, ICalculatorButton } from "../../Calculator";



const OperatorButton = (props: ICalculator & ICalculatorButton) => {
    const { calculation, setCalculation, onOperatorButton, setOnOperatorButton } = props;



    const headleOperator = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement


    
        console.log(onOperatorButton)
        setOnOperatorButton([...onOperatorButton, calculation, target.value])
        setCalculation("")
        console.log(onOperatorButton)


    }
    return (<>
        <button onClick={headleOperator} value="+">+</button>
        <button onClick={headleOperator} value="-">-</button>
        <button onClick={headleOperator} value="*">*</button>
        <button onClick={headleOperator} value="/">/</button>
    </>)
}

export default OperatorButton