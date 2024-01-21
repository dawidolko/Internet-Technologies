const HoursEmployee = {
    computeHourlyPayment(hours) {
    return hours * this.hourlyRate;
    }
    }
    const FullTimeEmployee = {
    computeMonthlySalary() {
    return this.salary;
    }
    }
    function FullTimeEmployeeWithAdditionalHourlyPayment(salary, hourlyRate) {
    return {salary, hourlyRate,
    ...FullTimeEmployee, ...HoursEmployee, computeOverallPayment(additionalHours) {
    return this.computeHourlyPayment(additionalHours) + this.computeMonthlySalary();
    }
    }
    }
    const f = new FullTimeEmployeeWithAdditionalHourlyPayment(5000, 40);
    console.log(f.computeOverallPayment(10));