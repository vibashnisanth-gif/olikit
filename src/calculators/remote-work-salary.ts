import {Calculator, RemoteWorkSalaryInput, RemoteWorkSalaryOutput} from "../types";

export class RemoteWorkSalaryCalculator implements Calculator<
  RemoteWorkSalaryInput,
  RemoteWorkSalaryOutput
> {
  name = "Remote Work Salary Calculator";
  description = "Calculate adjusted salary for remote workers based on location";
  category = "salary" as const;

  calculate(input: RemoteWorkSalaryInput): RemoteWorkSalaryOutput {
    const adjustedSalary = Math.round(input.baseSalary * input.locationMultiplier);
    const taxAmount = Math.round((adjustedSalary * input.taxRate) / 100);
    const takeHome = adjustedSalary - taxAmount;
    const monthlyTakeHome = Math.round(takeHome / 12);

    return {
      adjustedSalary,
      taxAmount,
      takeHome,
      monthlyTakeHome,
    };
  }
}
