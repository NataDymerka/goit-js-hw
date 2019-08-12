// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников 
// и возвращает имя самого продуктивного (который выполнил больше всех задач). 
// Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате 
// "имя":"кол-во задач".

const findBestEmployee = (employees) => {
    // console.log(employees);
    let maxNumberOfTasks = 0;
    let bestEmployee;
    const keys = Object.keys(employees);
    for (const key of keys) {
        if (employees[key] > maxNumberOfTasks) {
            maxNumberOfTasks = employees[key];
            bestEmployee = key;
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