const salary = 25000;

function getSalary(expenses) {
    let remainingSalary = expenses.reduce((acc, cur) => acc - cur, salary);
    console.log(remainingSalary)
}
