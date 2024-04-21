const date = new Date();

// & Екземпляр об'єкта Date - це об'єкт, що відображає певний момент часу. Створення дати без аргументів повертає об'єкт, що зберігає дату і час на момент його ініціалізації, тобто поточні. У рядковому перетворенні об'єкт повертає результат виклику методу toString(), тому у першому лозі ми отримаємо рядок, а не об'єкт.
console.log("date:::", date);
// Sat Apr 20 2024 11:25:08 GMT+0300 (за східноєвропейським літнім часом)
console.log("date.toString():::", date.toString());
// Sat Apr 20 2024 11:25:08 GMT+0300 (за східноєвропейським літнім часом)

// & Під час ініціалізації дати одним числом, воно являє собою кількість мілісекунд, що вже минула.
console.log("new Date(0):::", new Date(0));
// Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)
console.log("new Date(15000):::", new Date(15000));
// Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)

// & Метод getTime() повертає числове значення цієї дати (timestamp) - кількість мілісекунд, що минула з півночі 1 січня 1970 року.
console.log("date.getTime():::", date.getTime()); // 1713601495542

// & Створюючи екземпляр класу Date, можна встановити дату рядком або числами. Рядок може описувати тільки дату або дату і час.
const teamMeetingDate = new Date("March 16, 2030");
console.log("teamMeetingDate       :::", teamMeetingDate);
// Sat Mar 16 2030 00:00:00 GMT+0200 (за східноєвропейським стандартним часом)

const preciseTeamMeetingDate = new Date("March 16, 2030 14:25:00");
console.log("preciseTeamMeetingDate:::", preciseTeamMeetingDate);
// Sat Mar 16 2030 14:25:00 GMT+0200 (за східноєвропейським стандартним часом)

// &  Встановлення часу у вигляді рядків внутрішньо викликає метод Date.parse(), який перетворює рядок у число - кількість мілісекунд.
console.log('new Date("2030")                   :::', new Date("2030"));
// Tue Jan 01 2030 02:00:00
console.log('new Date("2030-03")                :::', new Date("2030-03"));
// Fri Mar 01 2030 02:00:00
console.log('new Date("2030-03-16")             :::', new Date("2030-03-16"));
// Sat Mar 16 2030 02:00:00
console.log('new Date("2030/03/16")             :::', new Date("2030/03/16"));
// Sat Mar 16 2030 00:00:00
console.log('new Date("2030/3/16")              :::', new Date("2030/3/16"));
// Sat Mar 16 2030 00:00:00
console.log('new Date("03/16/2030")             :::', new Date("03/16/2030"));
// Sat Mar 16 2030 00:00:00
console.log('new Date("16 March 2030")          :::', new Date("16 March 2030"));
// Sat Mar 16 2030 00:00:00
console.log('new Date("March 16, 2030")         :::', new Date("March 16, 2030"));
// Sat Mar 16 2030 00:00:00
console.log('new Date("March 16, 2030 14:25:00"):::', new Date("March 16, 2030 14:25:00"));
// Sat Mar 16 2030 14:25:00
console.log('new Date("2030-03-16 14:25:00")    :::', new Date("2030-03-16 14:25:00"));
// Sat Mar 16 2030 14:25:00
console.log('new Date("2030-03-16T14:25:00")    :::', new Date("2030-03-16T14:25:00"));
// Sat Mar 16 2030 14:25:00

// & Інший спосіб створення нових об'єктів - це передати сім чисел, які описують рік, місяць (починається з 0), день, години, хвилини, секунди і мілісекунди. Обов'язкові тільки перші три.
const date02 = new Date(2030, 2, 16, 14, 25, 0, 0);
console.log("date02:::", date02);
// Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)

// & Геттери використовуються для читання усієї дати або окремої складової. Значення, що повертається, залежить від поточного часового поясу, встановленого на вашому комп'ютері.
console.log("date: ", date);
// Sat Apr 20 2024 11:30:22 GMT+0300 (за східноєвропейським літнім часом)

// Повертає день місяця від 1 до 31
console.log("getDate(): ", date.getDate()); // 20
// Повертає день тижня від 0 до 6
console.log("getDay(): ", date.getDay()); // 6
// Повертає місяць від 0 до 11
console.log("getMonth(): ", date.getMonth()); // 3
// Повертає рік з 4 цифр
console.log("getFullYear(): ", date.getFullYear()); // 2024
// Повертає години
console.log("getHours(): ", date.getHours()); // 11
// Повертає хвилини
console.log("getMinutes(): ", date.getMinutes()); // 30
// Повертає секунди
console.log("getSeconds(): ", date.getSeconds()); // 22
// Повертає мілісекунди
console.log("getMilliseconds(): ", date.getMilliseconds()); // 265

// & Існують еквівалентні версії цих методів, які повертають значення у форматі UTC (Coordinated Universal Time), а не адаптовані до поточного часового поясу користувача.
console.log("getUTCDate(): ", date.getUTCDate()); // 20
console.log("getUTCDay(): ", date.getUTCDay()); // 6
console.log("getUTCMonth(): ", date.getUTCMonth()); // 3
console.log("getUTCFullYear(): ", date.getUTCFullYear()); // 2024
console.log("getUTCHours(): ", date.getUTCHours()); // 8
console.log("getUTCMinutes(): ", date.getUTCMinutes()); // 30
console.log("getUTCSeconds(): ", date.getUTCSeconds()); // 22
console.log("getUTCMilliseconds(): ", date.getUTCMilliseconds()); // 265

// & Сеттери. Також для всіх методів існують їх UTC еквіваленти.
const date03 = new Date("March 16, 2030 14:25:00");
console.log("date03:::", date03); // Sat Mar 16 2030 14:25:00 GMT+0200 (за східноєвропейським стандартним часом)
date03.setMinutes(50);
console.log("date03:::", date03); // Sat Mar 16 2030 14:50:00 GMT+0200 (за східноєвропейським стандартним часом)
date03.setFullYear(2040, 9, 8);
console.log("date03:::", date03); // Mon Oct 08 2040 14:50:00 GMT+0300 (за східноєвропейським літнім часом)

// & Форматування дати
const date04 = new Date("March 16, 2030 14:25:00");
date04.toString();
console.log("date04.toString():::", date04.toString());
// Sat Mar 16 2030 14:25:00 GMT+0200 (за східноєвропейським стандартним часом)
console.log("date04.toTimeString():::", date04.toTimeString());
// 14:25:00 GMT+0200 (за східноєвропейським стандартним часом)
console.log("date04.toLocaleTimeString():::", date04.toLocaleTimeString());
// 14:25:00
console.log("date04.toUTCString():::", date04.toUTCString());
// Sat, 16 Mar 2030 12:25:00 GMT
console.log("date04.toDateString():::", date04.toDateString());
// Sat Mar 16 2030
console.log("date04.toISOString():::", date04.toISOString());
// 2030-03-16T12:25:00.000Z
console.log("date.toLocaleString():::", date.toLocaleString());
// 3/16/2030, 2:25:00 PM
// 20.04.2024, 11:44:29
console.log("date.getTime():::", date.getTime());
// 1713602694270
