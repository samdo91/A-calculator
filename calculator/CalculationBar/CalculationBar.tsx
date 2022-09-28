
import React from "react";
import { ICalculator} from "../Calculator";

const CalculationBar = (props: ICalculator) => {
    const { calculation, setCalculation } = props


    const headleCalculationBar = (e: React.ChangeEvent<HTMLInputElement>): void => {

        setCalculation({ num:String(e.target.value), gift: calculation.gift})
        
      
    }
   
    return (<>
        <input type="text" dir="rtl" value={calculation.num} onChange={headleCalculationBar} />

    </>
    )
}
export default CalculationBar