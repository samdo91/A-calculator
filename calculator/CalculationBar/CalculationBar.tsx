
import React, { useState } from "react";
import { ICalculator} from "../Calculator";

const CalculationBar = (props: ICalculator) => {
    const { calculation, setCalculation } = props


    const headleCalculationBar = (e: React.ChangeEvent<HTMLInputElement>): void => {

        setCalculation(String(e.target.value))
    }
   
    return (<>
        <input type="text" dir="rtl" value={calculation} onChange={headleCalculationBar} />

    </>
    )
}
export default CalculationBar