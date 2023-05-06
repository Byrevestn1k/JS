
/*

5. Запросіть у користувача 10 чисел і підрахуйте, скільки він
ввів додатних чисел, від’ємних та нулів. При цьому підрахуйте також кількість парних і непарних чисел. Виведіть
статистику на екран. Враховуйте те, що достатньо однієї
змінної (не 10) для введення чисел користувачем


let num;
let counter = 1;
let count_minus = 0;
let count_plus = 0;
let even = 0;
let odd = 0;
let zero = 0;

for (counter; counter <= 10;) {
    num = prompt(`Enter number ${counter}`);
    if (num <= 0 || num > 0) {
        counter++;
        if (+num !== 0) {
            num < 0 ? count_minus++ : count_plus++;
            num % 2 == 0 && num !== 0 ? even++ : odd++;
        }

        else {
            zero++;
        }
    }
    else {
        alert(`You enter not number, tray again!`)
    }
}
document.write(`Кількість вірно введених чисел - "${zero + count_plus + count_minus} + ${zero + odd + even}"<br>`)
document.write(`Кількість парних чисел - "${even}"<br>`)
document.write(`Кількість непарних чисел - "${odd}"<br>`)
document.write(`Кількість додатніх чисел - "${count_plus}"<br>`)
document.write(`Кількість від'ємних чисел - "${count_minus}"<br>`)
document.write(`Кількість введених нулів - "${zero}"<br>`)

6. Зацикліть калькулятор. Запросіть у користувача 2 числа і
знак, розв’яжіть приклад, виведіть результат і запитайте,
чи хоче він розв’язати ще один приклад. І так триватиме
доти, доки користувач не відмовиться.



let num1;
let num2;
let zero;
let res;
let cont = true;
for (; cont == true;) {
    num1 = +prompt(`Enter number 1`);
    zero = prompt(`Enter +, -, *, /`);
    num2 = +prompt(`Enter number 2`);
    switch (zero) {
        case `+`:
            res = num1 + num2;
            break;
        case `-`:
            res = num1 - num2;
            break;
        case `*`:
            res = num1 * num2;
            break;
        case `/`:
            res = num1 / num2;
            break;
        default:
            alert(`Oops, something wrang!`)
            break;
    }
    alert(`${num1} + ${num2} = ${res}`);
    cont = confirm(`Do you want continue?`);
}

7. Запросіть у користувача число і на скільки цифр його змістити. Змістіть цифри числа та виведіть результат (якщо
число 123456 змістити на 2 цифри, то вийде 345612).


let number = +prompt(`Enter number`);
let num2 = +prompt(`на скільки цифр число змістити?`)
let res = 1;
let counter;
let result;
let num1 = number;

for (counter = 1; num1 > 1; counter++) {

    num1 = parseInt(num1 / 10); // визначаєм скільки цифр, для 12345 - результат 5
    console.log(counter)
}
if (num2 > counter) {
    alert(`Зміщення на ${num2} цифри не може перебільшувати кількості цифр (${counter}) в зазначеному числі ${number}? `)
}
else {
    for (counter--; counter >= num2; counter--) {// num2 - 1 
        res *= 10;// визначаєм на скільки треба поділти щоб отримати першу цифру числа з 5 цифр потрібно його поділити на 10000 - res = 10000 , 
    }
    document.write(`<h3>`)
    let num = number;
    result = (parseInt(num / res))//для того щоб отримати першу цифру "1" (1.2345) потрібно відпаристи (12345 / 10000) = 1
    let result_last;
    if (number % res != 0) {
        result_last = number % res
    }
    else {
        result_last = "";
    }
    document.write(`Ви ввели число ${number}, яке необхідно було змістити на ${num2} цифри, тобто ${result} перемістити в кінець даного числа<br> В результаті отримаємо - ${result_last}${result}`)
    document.write(`</h3 > `)

}




Домашнє завдання 3
8. Зацикліть виведення днів тижня таким чином: «День
тижня. Бажаєте побачити назву наступного дня тижня?”,

let day = 1;
let flag = true;
for (let counter = 1; flag == true; counter++) {
    switch (counter) {
        case 1:
            day = "Понеділок";
            break;
        case 2:
            day = "Вівторок";
            break;
        case 3:
            day = "Середа";
            break;
        case 4:
            day = "Четвер";
            break;
        case 5:
            day = "П'ятниця";
            break;
        case 6:
            day = "Субота";
            break;
        case 7:
            day = "Неділя";
            break;
        default:
            break;
    }
    flag = confirm(`${day}. Бажаєте побачити назву наступного дня тижня?`);
    counter = counter < 7 ? counter++ : counter = 0;
}


9. Виведіть таблицю множення для всіх чисел від 2 до 9.
Кожне число необхідно помножити на числа від 1 до 10.

document.write(`<div class="table">`)
for (let number1 = 2; number1 <= 10; number1++) {
    document.write(`<div class="column">`)
    for (let num2 = 1; num2 <= 10; num2++) {

        document.write(`${number1} * ${num2} = ${number1 * num2}<br>`)


    } document.write(`</div>`)
}
document.write(`</div>`)


10. Гра «Вгадай число». Запропонуйте користувачеві загадати
число від 0 до 100 і відгадати його наступним способом: в
кожній ітерації циклу поділяєте діапазон чисел навпіл,
записуєте результат в N і запитуєте у користувача «Ваше
число > N, < N або == N?». Залежно від відповіді користувача, зменшуєте діапазон. Початковий діапазон від 0 до
100, поділяєте навпіл і отримуєте 50. Якщо користувач
вказав, що його число > 50, змінюєте діапазон числа від 51
до 100. І так доти, доки користувач не вибере == N.

let q;
let sto = 100;
let number;
let pomosch;
alert(`Загадайте число від 0 до 100!`);
for (N = sto / 2; q != 0;) {
    q = +prompt(`Ваше число менше ${N} - введіть 1/n Ваше число більше ${N} - введіть 2/n Ваше число дорівнює ${N} - введіть 0`)
    //q == 1 ? pomosch = 0 + N : pomosch = sto - N;
    //pomosch > (N / 2) ? 
    //q == 1 ? pomosch > 0 && pomosch < N : pomosch > N && pomosch < sto;
    q == 1 ? N = N / 2 : N = sto - N / 2;
}

console.log(pomosch)
*/

let q;
let sto = 100;
let number;
let pomosch;
alert(`Загадайте число від 0 до 100!`);
for (N = sto / 2; q != 0;) {
    q = +prompt(`Ваше число менше ${N} - введіть 1/n Ваше число більше ${N} - введіть 2/n Ваше число дорівнює ${N} - введіть 0`)
    if (q == 1) {
        N = parseInt(N /= 2);
    }
    else if (q == 2) {
        N = parseInt(N = (N * 2) - 0.25 * N);
    }
    else if (q == 0) {
        q == 0
    }
    else {
        alert(`Введіть коректне значення`)
    }
}





/*
let choice = +prompt(`Виберіть країну: \nУкраїна - введіть 1 \nНімеччина - введіть 2 \nФранція - введіть 3 \nАвстрія - введіть 4 \nБолгарія - введіть 5`);
let country;
let capital;
let language;
let DU;
let independence;
let square;
switch (choice) {
    case 1:
        country = 'Україна';
        capital = 'Київ';
        language = 'українська';
        DU = 'парламентсько-президентська республіка';
        independence = '24 серпня 1991 року';
        square = '603 628 км.кв.';
        break;
    case 2:
        country = 'Німеччина';
        capital = 'Берлін';
        language = 'німецька';
        DU = 'федеративна, демократична, парламентська республіка';
        independence = '3 жовтня 1990 року';
        square = '357 588 км.кв.';

        break;
    case 3:
        country = 'Франція';
        capital = 'Париж';
        language = 'французька';
        DU = 'унітарна республіка президентського типу';
        independence = '14 липня 1789 року';
        square = '547 030 км.кв.';
        break;
    case 4:
        country = 'Австрія';
        capital = 'Відень';
        language = 'німецька';
        DU = 'Федеративна держава, парламентська республіка';
        independence = '15 травня 1955 року';
        square = '83 879 км.кв.';
        break;
    case 5:
        country = 'Болгарія';
        capital = 'Софія';
        language = 'болгарська';
        DU = 'Парламентська республіка з президентським правлінням';
        independence = '22 вересня 1908 року';
        square = '110 993 км.кв.';
        break;
    default:
        alert(`Ви ввели невірне значення, повторіть спробу ще раз`)
        break;
}

if (choice >= 1 && choice <= 5) {
    document.write(`< div class= "text" >
                <h1>${country}</h1>
                <p>Столиця</p>
                <h2>${capital}</h2>
                <p>Офіційна мова</p>
                <h2>${language}</h2>
                <p>Державний устрій</p>
                <h2>${DU}</h2>
                <p>Незалежність</p>
                <h2>${independence}</h2>
                <p>Площа</p>
                <h2>${square}</h2>
                </ > `

    );
}

*/





/*

alert("пропонуємо відповісти на 7 запитань")
let q1 = +prompt('Професор ліг спати о 8 годині, а встав о 9 годині. Скільки годин проспав професор?')
let value = 0;
switch (q1) {
    case 1:
        value++;
        break;
    default:
        break;
}
let q2 = +prompt('На двох руках десять пальців. Скільки пальців на 10?')
switch (q2) {
    case 50:
        value++;
        break;
    default:
        break;
}
let q3 = +prompt('Скільки цифр у дюжині?')
switch (q3) {
    case 3:
        value++;
        break;
    default:
        break;
}
let q4 = +prompt('Скільки потрібно зробити запилів, щоб розпиляти колода на 12 частин?')
switch (q4) {
    case 11:
        value++;
        break;

    default:
        break;
}
let q5 = +prompt('Лікар зробив три уколи в інтервалі 30 хвилин. Скільки часу він витратив')
switch (q5) {
    case 30:
        value++;
        break;
    default:
        break;
}
let q6 = +prompt('Скільки цифр 9 в інтервалі 1100?')
switch (q6) {
    case 1:
        value++;
        break;
    default:
        break;
}
let q7 = +prompt(' Пастух мав 30 овець. Усі, крім однієї, розбіглися. Скільки овець лишилося?')
switch (q7) {
    case 1:
        value++;
        break;
    default:
        break;
}
alert(`Ви дали ${ value } правильних відповідей`);

switch (value) {

    case 3:
        document.write(`< div class= "text" > <h1>Здібності нижче середнього</h1></ > `);
        document.body.style.backgroundImage = ('url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBpG7en70i_fiO_7QX4CLhNjHbQCBBWMCImw&usqp=CAU)')
        break;
    case 4:
        document.write(`< div class= "text" > <h1>Здібності середні</h1></ > `);
        document.body.style.backgroundImage = ('url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCu-hnfnuWK49GhRoGGtZVP2p0qoTGV8U-3g&usqp=CAU)')
        break;
    case 5:
        document.write(`< div class= "text" > <h1>Нормальний</h1></ > `);
        document.body.style.backgroundImage = ('url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaNBHAXeMxyGuLHZTrwDAG4l1FIFJ2ShOxFw&usqp=CAU)')
        break;
    case 6:
        document.write(`< div class= "text" > <h1>Ерудит</h1></ > `);
        document.body.style.backgroundImage = ('url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7lYJBCl5ONo0mqk3iWCam-Xs2W6AXMnI4KA&usqp=CAU)')
        break;
    case 7:
        document.write(`< div class= "text" > <h1>Геній</h1></ > `);
        document.body.style.backgroundImage = ('url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlU_cjFcRF1vz4m1HsZxh7gOd-wmhd5fkKVA&usqp=CAU)')
        break;
    default:
        document.write(`< div class= "text" > <h1>Вам треба відпочити</h1></ > `);
        document.body.style.backgroundImage = ('url(https://i.work.ua/article/1957b.jpg)')
        break;
}



/*
- якщо 7 правильних відповідей, то друкується "Геній";

- якщо 6 правильних відповідей, то друкується "Ерудит";

- якщо 5 правильних відповідей, то друкується "Нормальний";

- якщо 4 правильні відповіді, то друкується "Здібності середні";

- якщо 3 правильні відповіді, то друкується "Здібності нижче середнього";

- якщо <2 правильні відповіді, то друкується "Вам треба відпочити!".*/


/*7. Запросіть у користувача суму покупки та виведіть суму до
сплати зі знижкою: від 200 до 300 – знижка 3%, від 300 до
500 – 5%, від 500 і вище – 7%.

 

8. Запросіть у користувача довжину кола та периметр ква-
драта. Визначте чи може таке коло поміститися у зазначе-
ний квадрат.

 

9. Задайте користувачеві 3 питання, у кожному питанні по 3

 

варіанти відповіді. За кожну правильну відповідь нарахо-
вується 2 бали. Після запитань виведіть користувачеві

 

кількість набраних балів.
10. Запросіть дату (день, місяць, рік) і виведіть наступну дату.
Врахуйте можливість переходу на наступний місяць, рік,
а також високосний рік.




let day1 = +prompt('enter day');
let month1 = +prompt('enter month');


let fulldays = 0;
switch (month1 - 1) {
    case 12:
        fulldays = 31;
    case 11:
        fulldays += 30;
    case 10:
        fulldays += 31;
    case 9:
        fulldays += 30;
    case 8:
        fulldays += 31;
    case 7:
        fulldays += 31;
    case 6:
        fulldays += 30;
    case 5:
        fulldays += 31;
    case 4:
        fulldays += 30;
    case 3:
        fulldays += 31;
    case 2:
        fulldays += 28;
    case 1:
        fulldays += 31;

        break
}
fulldays += day1;
alert(fulldays);
let day2 = +prompt('enter day');
let month2 = +prompt('enter month');

let fulldays2 = 0;
switch (month2 - 1) {
    case 12:
        fulldays2 = 31;
    case 11:
        fulldays2 += 30;
    case 10:
        fulldays2 += 31;
    case 9:
        fulldays2 += 30;
    case 8:
        fulldays2 += 31;
    case 7:
        fulldays2 += 31;
    case 6:
        fulldays2 += 30;
    case 5:
        fulldays2 += 31;
    case 4:
        fulldays2 += 30;
    case 3:
        fulldays2 += 31;
    case 2:
        fulldays2 += 28;
    case 1:
        fulldays2 += 31;

        break
}
fulldays2 += day2;
alert(fulldays2)

alert(fulldays2 - fulldays)

*/


/*let year = +prompt("enter  year");
let pet = year % 12;
switch (pet) { // ===

    case 4:
        document.write(`< body style = 'background: url(https://rozdil.lviv.ua/Kalendar/Zodiakporokah/2.jpg) no-repeat; margin-top:50px;' > <h2 style='color: red; text-align: center'> РІК ЩУРА </h2></ > `)
        break;
    case 5:
        document.write(`< body style = 'background: url(https://rozdil.lviv.ua/Kalendar/Zodiakporokah/3.jpg) no-repeat; margin-top:50px;' > <h2 style='color: red; text-align: center'> РІК БИКА </h2></ > `)
        break;
    case 6:
        document.write(`< body style = 'background: url(https://rozdil.lviv.ua/Kalendar/Zodiakporokah/4.jpg) no-repeat; margin-top:50px;' > <h2 style='color: red; text-align: center'> РІК ТИГРА </h2></ > `)
        break;
    case 7:
        document.write(`< body style = 'background: url(https://rozdil.lviv.ua/Kalendar/Zodiakporokah/5.jpg) no-repeat; margin-top:50px;' > <h2 style='color: red; text-align: center'> РІК ЗАЙЦ </h2></body > `)
        break;
    case 8:
        document.write(`< body style = 'background: url(https://rozdil.lviv.ua/Kalendar/Zodiakporokah/6.jpg) no-repeat; margin-top:50px;' > <h2 style='color: red; text-align: center'> РІК ДРАКОНА </h2></ > `)
        break;
    case 9:
        document.write(`< body style = 'background: url(https://rozdil.lviv.ua/Kalendar/Zodiakporokah/7.jpg) no-repeat; margin-top:50px;' > <h2 style='color: red; text-align: center'> РІК ЗМІЇ </h2></ > `)
        break;
    case 10:
        document.write(`< body style = 'background: url(https://rozdil.lviv.ua/Kalendar/Zodiakporokah/8.jpg) no-repeat; margin-top:50px;' > <h2 style='color: red; text-align: center'> РІК КОНЯ </h2></ > `)
        break;
    case 11:
        document.write(`< body style = 'background: url(https://rozdil.lviv.ua/Kalendar/Zodiakporokah/9.jpg) no-repeat; margin-top:50px;' > <h2 style='color: red; text-align: center'> РІК КОЗИ </h2></ > `)
        break;
    case 0:
        document.write(`< body style = 'background: url(https://rozdil.lviv.ua/Kalendar/Zodiakporokah/10.jpg) no-repeat; margin-top:50px;' > <h2 style='color: red; text-align: center'> РІК МАВПИ</h2></ > `)
        break;
    case 1:
        document.write(`< body style = 'background: url(https://rozdil.lviv.ua/Kalendar/Zodiakporokah/11.jpg) no-repeat; margin-top:50px;' > <h2 style='color: red; text-align: center'> РІК ПІВНЯ </h2></ > `)
        break;
    case 2:
        document.write(`< body style = 'background: url(https://rozdil.lviv.ua/Kalendar/Zodiakporokah/12.jpg) no-repeat; margin-top:50px;' > <h2 style='color: red; text-align: center'> РІК СОБАКИ </h2></ > `)
        break;
    case 3:
        document.write(`< body style = 'background: url(https://rozdil.lviv.ua/Kalendar/Zodiakporokah/13.jpg) no-repeat; margin-top:50px;' > <h2 style='color: red; text-align: center'> РІК СВИНІ </h2></ > `)
        break;


    default:
        document.write(`< body style = 'background: grey;' > <h2 style='color: #fff; text-align: center'> Error. Write other color </h2>`)
        break;
}

let day = +prompt('enter day');
let month = +prompt('enter month');
let year = +prompt('enter year');
let monthDay; // скільки днів у місяці
let numberDay;// днів у році
let dayLAst;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        {
            monthDay = 31;
            break;
        }
    case 2 && year % 4 == 0: {
        monthDay = 29;
        break;
    }
    case 2 && year % 4 != 0: {
        monthDay = 28;
        break;
    }

    default:
        monthDay = 30;
        break;
}

switch (month) {
    case 1:
    case 2:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        {
            monthDay = 31;
            break;
        }
    case 2 && year % 4 == 0: {
        monthDay = 29;
        break;
    }
    case 2 && year % 4 != 0: {
        monthDay = 28;
        break;
    }

    default:
        monthDay = 30;
        break;
}


//let numberDay;
if (year % 4 == 0) {
    numberDay == 365
}
else {
    numberDay == 364
}






*/