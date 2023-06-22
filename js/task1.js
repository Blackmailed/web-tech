function generate() {
    return (Math.floor(Math.random() * 201) - 100);
}

function generate_array() {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(generate());
    }
    return array;
}

function countOddNegatives(array) 
{
    let count = 0;
    for (let i = 0; i < array.length; i++) 
    {
        if (array[i] < 0 && array[i] % 2 !== 0) 
        {
            count++;
        }
    }
    return count;
}

let array = document.getElementById("array");
let result = document.getElementById("result");

document.getElementById("btn_task1").addEventListener("click", () => 
{
    let x = generate_array();
    let y = countOddNegatives(x);
    let z = x.map(item => {return " " + item;})
    array.textContent = `Сгенерированный массив значений: ${z}`
    result.textContent = `Количество нечётных отрицательных элементов: ${y}`
})
