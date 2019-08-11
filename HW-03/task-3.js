// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников 
// и возвращает имя самого продуктивного (который выполнил больше всех задач). 
// Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате 
// "имя":"кол-во задач".

const findBestEmployee = (employees) => {
    // console.log(employees);
    const numberOfTasks = Object.values(employees);
    // console.log(numberOfTasks);
    let maxNumberOfTasks = numberOfTasks[0];
    for (let i = 1; i < numberOfTasks.length; i++) {
        if (maxNumberOfTasks < numberOfTasks[i]) {
            maxNumberOfTasks = numberOfTasks[i];
        }
    }
    // console.log(maxNumberOfTasks);
    let bestEmployee;
    const entries = Object.entries(employees)
    // console.log(entries);
    for (const entry of entries) {
        const tasks = entry[1];
        if (tasks === maxNumberOfTasks) {
            bestEmployee = entry[0];
        }
    }

    return (`${bestEmployee}: ${maxNumberOfTasks}`)
}

console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); // lorence

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); //