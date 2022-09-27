import React from "react";
import { ICalculator, ICalculatorButton } from "../../Calculator";


const EqualButton = (props: ICalculator & ICalculatorButton) => {
    const { calculation, setCalculation, onOperatorButton, setOnOperatorButton} = props;


    const headleEqua = (e: React.MouseEvent<HTMLButtonElement>) => {
     
        onOperatorButton.push(calculation)
        setCalculation("")
        setCalculation(resultFun())
        setOnOperatorButton([])

    }
    const resultFun = ():string =>{ 

        const result = onOperatorButton.reduce((acc, cur, idx):string => {
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
        } )
 return result

    }


    return (<button onClick={headleEqua} value="=">=</button>)
}

export default EqualButton