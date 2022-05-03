// створюємо пустий масив
const rgb = [];

// знаходимо всі елементи з класом .table
const elements = document.querySelectorAll('.table');

// проходимось по кожному елементу масиву
elements.forEach(el => {
    const activeElement = el.querySelector('.control.active');
    
    const currentNumber = activeElement.innerText;

    // додаємо новий елемент в масив
    
    rgb.push(currentNumber);
});

// формуємо значення нового кольору:
// 1. склеюємо елементи масиву
let newColor = rgb.join('');
// 2. додаємо на початок елемент #
newColor = '#' + newColor;

// знаходимо елемент з id cloud-path
const cloudPath = document.querySelector('#cloud-path');
// міняємо для елементу fill
cloudPath.style.fill = newColor;




// додаємо click listener

document.querySelector('.capsules').addEventListener('click', function(event) {

    if (event.target.classList.contains('control')) {  
        const text = event.target.innerText;
        const index = event.target.dataset.index;

        const tables = document.querySelectorAll('.table');
        const currentTable = tables[index];
        const currentTableControls = currentTable.querySelectorAll('.control');
        currentTableControls.forEach((el) => {
            el.classList.remove('active');
        });

        rgb[index] = text;

        let newColor = rgb.join('');
        newColor = '#' + newColor;

        cloudPath.style.fill = newColor;

        event.target.classList.add('active');
    }
});
