
import React, { useState } from "react";
import CalculationBar from "./CalculationBar/CalculationBar";
import styles from "./Calculator.module.css"
import CalculatorButton from "./CalculatorButton/CalculatorButton";
import EqualButton from "./CalculatorButton/EqualButton/EqualButton";


export interface ICalculator {

    calculation: { num: string; gift: boolean; }
    setCalculation: React.Dispatch<React.SetStateAction<{
        num: string;
        gift: boolean;
    }>>

}

export interface ICalculatorButton {
    onOperatorButton: (string)[]
    setOnOperatorButton: React.Dispatch<React.SetStateAction<string[]>>
}


const Calculator = () => {

    const [calculation, setCalculation] = useState({ num: "", gift: true })
    const [onOperatorButton, setOnOperatorButton] = useState<string[]>([])



    return (<div className={styles.mainContainer}>
        <div className={styles.calculatorContainer}>
            <CalculationBar calculation={calculation} setCalculation={setCalculation} />
            <CalculatorButton calculation={calculation} setCalculation={setCalculation} onOperatorButton={onOperatorButton} setOnOperatorButton={setOnOperatorButton} />
            <EqualButton calculation={calculation} setCalculation={setCalculation} onOperatorButton={onOperatorButton} setOnOperatorButton={setOnOperatorButton} />

        </div>


    </div>)
}

export default Calculator