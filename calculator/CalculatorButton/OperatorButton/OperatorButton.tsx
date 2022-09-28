import React from "react";
import { ICalculator, ICalculatorButton } from "../../Calculator";



const OperatorButton = (props: ICalculator & ICalculatorButton) => {
    const { calculation, setCalculation, onOperatorButton, setOnOperatorButton } = props;



    const headleOperator = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement
        onOperatorButton.push(calculation.num)

        if (onOperatorButton.length < 3) {
            setOnOperatorButton([...onOperatorButton, target.value])
            setCalculation({ num: "", gift: true })
            console.log("bbbbb", calculation, onOperatorButton)

        }

        if (onOperatorButton.length >= 3) {
            
            setCalculation({ num: resultFun(), gift: false })
            setOnOperatorButton([resultFun(),target.value])
            console.log(onOperatorButton)

        }

    }

    const resultFun = (): string => {

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
        return result

    }
    return (<>
        <button onClick={headleOperator} value="+">+</button>
        <button onClick={headleOperator} value="-">-</button>
        <button onClick={headleOperator} value="*">*</button>
        <button onClick={headleOperator} value="/">/</button>
    </>)
}

export default OperatorButton