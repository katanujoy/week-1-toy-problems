const readline = require("readline-sync");

function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // KRA Tax Rates
    let payee = 0;
    if (grossSalary <= 24000) {
        payee = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        payee = grossSalary * 0.25;
    } else {
        payee = grossSalary * 0.30;
    }

    let nhif = grossSalary < 6000 ? 150 : 750;
    let nssf = grossSalary * 0.06;

    const netSalary = grossSalary - (payee + nhif + nssf);
    return {
        GrossSalary: grossSalary,
        Payee: payee,
        NHIF: nhif,
        NSSF: nssf,
        NetSalary: netSalary
    };
}

const basicSalary = 500000; // Example: 500,000 KES
const benefits = 20000; // Example: 20,000 KES

console.log(calculateNetSalary(basicSalary, benefits));
