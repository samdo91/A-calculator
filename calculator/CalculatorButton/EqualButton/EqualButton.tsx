import React, {useState} from "react";
import { ICalculator, ICalculatorButton } from "../../Calculator";


const EqualButton = (props: ICalculator & ICalculatorButton) => {
    const { calculation, setCalculation, onOperatorButton, setOnOperatorButton } = props;
    const [on, seton] =useState<string[]>([])
  


    const headleEqua = (e: React.MouseEvent<HTMLButtonElement>) => {
        setOnOperatorButton (()=>([...onOperatorButton, calculation]))
        setCalculation("")
        seton(()=>([...onOperatorButton]))
        console.log(onOperatorButton)
        console.log(on)
         resultFun()



    }
    const resultFun = () => {

        const result = onOperatorButton.reduce((acc, cur, idx): string => {
            // console.log( onOperatorButton[idx-1],cur,onOperatorButton[idx+1])
            switch (cur) {
                case "+":
                    acc = String(Number(onOperatorButton[idx - 1]) + Number(onOperatorButton[idx + 1]))
                    break;	//각 case별로 분리
                case "-":
                    acc = String(Number(onOperatorButton[idx - 1]) - Number(onOperatorButton[idx + 1]))
                    break;
                case "*":
                    acc = String(Number(onOperatorButton[idx - 1]) * Number(onOperatorButton[idx + 1]))
                    break;
                case "/":
                    acc = String(Number(onOperatorButton[idx - 1]) / Number(onOperatorButton[idx + 1]))
                    break;

            }
            return acc
        })

        setCalculation(result)
    }


    return (<button onClick={headleEqua} value="=">=</button>)
}

export default EqualButton