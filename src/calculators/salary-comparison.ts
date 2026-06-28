import {Calculator, SalaryComparisonInput, SalaryComparisonOutput} from "../types";

export class SalaryComparisonCalculator implements Calculator<
  SalaryComparisonInput,
  SalaryComparisonOutput
> {
  name = "Salary Comparison Calculator";
  description = "Compare salaries between two cities with cost of living and tax adjustments";
  category = "salary" as const;

  calculate(input: SalaryComparisonInput): SalaryComparisonOutput {
    const ratio =
      input.cityACostOfLiving > 0 ? input.cityBCostOfLiving / input.cityACostOfLiving : 1;
    const adjustedSalaryB = Math.round(input.salaryA * ratio * 100) / 100;
    const salaryDifference = input.salaryB - input.salaryA;
    const percentDifference =
      input.salaryA > 0 ? Math.round((salaryDifference / input.salaryA) * 10000) / 100 : 0;

    const takeHomeA = Math.round(input.salaryA * (1 - input.taxRateA / 100));
    const takeHomeB = Math.round(input.salaryB * (1 - input.taxRateB / 100));
    const takeHomeDifference = takeHomeB - takeHomeA;

    const purchasingPowerA =
      input.cityACostOfLiving > 0 ? Math.round((takeHomeA / input.cityACostOfLiving) * 100) : 0;
    const purchasingPowerB =
      input.cityBCostOfLiving > 0 ? Math.round((takeHomeB / input.cityBCostOfLiving) * 100) : 0;
    const purchasingPowerDifference = purchasingPowerB - purchasingPowerA;

    return {
      adjustedSalaryB,
      salaryDifference,
      percentDifference,
      takeHomeA,
      takeHomeB,
      takeHomeDifference,
      purchasingPowerA,
      purchasingPowerB,
      purchasingPowerDifference,
      ratio,
    };
  }
}
