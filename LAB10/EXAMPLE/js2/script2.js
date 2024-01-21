const hourlyPaymenter = (state) => ({
    computeHourlyPayment(hours) {
    return hours * state.hourlyRate;
    }
    });
    const fullTimePaymenter = (state) => ({
    computeMonthlySalary() {
    return state.salary;
    }
    });
    function HourlyEmployee2(hourlyRate) {
    let x = {hourlyRate: hourlyRate}
    return Object.assign(x, hourlyPaymenter(x));
    }
    function FullTimeEmployee2(salary) {
    let x = {salary: salary};
    return Object.assign(x, fullTimePaymenter(x));
    }
    function FullTimeEmployeeWithAdditionalHourlyPayment2(salary, hourlyRate) {
        let x = {salary, hourlyRate};
let o = Object.assign(x, hourlyPaymenter(x), fullTimePaymenter(x));
o.computeOverallPayment = (additionalHours) => {
return o.computeMonthlySalary() + o.computeHourlyPayment(additionalHours);
};
return o;
}
const he = new HourlyEmployee2(20);
console.log(he.computeHourlyPayment(5));
const fte = new FullTimeEmployee2(5000);
console.log(fte.computeMonthlySalary());
const ftewahp = new FullTimeEmployeeWithAdditionalHourlyPayment2(5000, 20); console.log(ftewahp.computeOverallPayment(20));