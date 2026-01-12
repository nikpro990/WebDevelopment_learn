
document.addEventListener("DOMContentLoaded", () => {
    const gustav = document.getElementById("gustav"); 
    const gustavdialog = document.getElementById("gustav-dialog");
    const walter = document.getElementById("walter");
    const input = document.getElementById("input-js");
    const sumbit = document.getElementById("sumbit-js");
    const walterdialog = document.getElementById("walter-dialog");
    const jessidialog = document.getElementById("jessi-dialog");
    const jessi = document.getElementById("jessi");    
    const buttonJS = document.getElementById("button-start");
    const buttonJSON = document.getElementById("button-start-json");
    const buttonHTTP = document.getElementById("button-start-http");
    const buttonOOP = document.getElementById("button-start-oop");
    const buttonLocal = document.getElementById("button-start-localdata")
    const buttonJSTasks = document.getElementById("button-start-js");
    const buttonTimeset = document.getElementById("button-start-timeset")

    buttonTimeset.addEventListener("click", function(){
      /*
      setTimeout(() => {
         alert("Таймер работает")
      }, 1000);
      */

      /*
      setTimeout(() => {
        console.log("Loading.....");
      }, 5000);
      */

      /*
      const name = "Nik";
      setTimeout(() => {
        console.log("Name: " + name)
      }, 5000);
      */

      /*
      function String(){
        console.log("Здравствуйте");
      }
      
      setTimeout(String, 3000);
      */

      /*
      let Timeid = setTimeout(() => alert("TimerID"), 1000)
      console.log(Timeid)
      clearTimeout(Timeid);
      */

      /*
      setInterval(() => {
        console.log("Цикл")
      }, 1000);
      */
      /*
        let timerId = setInterval(() => {
          console.log("Тик")
        }, 1000);
        
        setTimeout(() => {
          clearInterval(timerId)
        }, 3000);
      */
     
      /*
      let count = 0;
      let timer = setInterval(() => {
        count++;
        console.log(count);
      }, 1000);
      setTimeout(() => {
        clearInterval(timer);
      }, 5000);
      */

      /*
      let timer = setInterval(() => {
        console.log("Таймер запущен");
      }, 1000);
      setTimeout(() => {
        clearInterval(timer);
        console.log("Таймер остановлен");
      }, 5000);
      */

      let count = 6;
      let timer = setInterval(() => {
        count--;
        console.log(count);
      }, 1000);
      setTimeout(() =>{
        clearInterval(timer);
        console.log("Старт!");
      }, 5000);
    
    });  

    buttonJSTasks.addEventListener("click", function(){
      let choiceTask = prompt(
      "Какое задание вы хотите выбрать ?: 1.Переменные, 2.Массивы, 3.Циклы, 4.Функции");
      if(choiceTask == 1){
        peremens();
      }
      if(choiceTask == 2){
        massivs();
      }
      if(choiceTask == 3){
        shikls();
      }
      if(choiceTask == 4){
        functions();
      }

      function peremens(){
        const x = 10, y = 5;
        console.log(x + y);
        
        const name = "I love JS";
        console.log(name);

        const price = 100, discount = 20;
        console.log(price * discount / 100);

        const isOnline = true;
        console.log(isOnline);

        const n = 7;
        console.log(n * 2);

        const messange = "";
        console.log(messange);
      }

      function massivs(){
        const data = [1,2,3];
        console.log(data);

        const data1 = ["Debian", "Arch linux", "Gentoo"];
        console.log(data1[0]);

        let data2 = [1,2,3];
        data2.push(10);
        console.log(data2);

        let data3 = [1,2,3,4];
        data3.splice(3,3);
        console.log(data3);
        
        let data4 = [1,2,3,4];
        data4.forEach(data4 => {
          console.log(data4);
        });

        let data5 = [2,2];

        data5.forEach(data5 => {
          console.log(data5 + data5);
        });

        /*
        let data6 = [1,2,3,4,5];
        
        let numberMin = data6[0];

        for(var i = 0; data6.length; i++){
          if(data6[i] < numberMin){
            numberMin = data6[i];
          }
        }
        console.log("Маленькое число: " + numberMin);
        */

        let data7 = [5,5];
        data7.forEach(data7 => {
          console.log(data7 * 2);
        });

      }

      function shikls(){
        for(var i = 1; i < 6; i++){
          console.log(i);
        }

        for(var i = 5; i > 0; i--){
          console.log(i);
        }

        for(var i = 0; i < 11; i++){
         if(i % 2 == 0)
          console.log(i);
        }

        let total = 0;
        for(var i = 1; i < 11; i++){
          total += i
        }
        console.log(total);

        let text = "Hello";
        for(var i = 0; i < 3; i++){
          text + i;
          console.log(text);
        }

      }

      function functions(){
        function sayHi(){
          console.log("Hi!");
        }
        sayHi();

      }


    });

    buttonLocal.addEventListener("click", function() {
      localStorage.setItem("theme", "dark");
      const theme = localStorage.getItem("theme");
      //localStorage.removeItem("theme"); очищает theme
      //localStorage.clear(); удаляет все 
      sessionStorage.setItem("step", 2);
      const step = sessionStorage.getItem("step");
      if(localStorage.getItem("theme")){
        alert("Theme is have")
      }
      localStorage.setItem("user", {name: "Test"});
      const data = { level: 3};
      localStorage.setItem("game: ", JSON.stringify(data));
      const game = JSON.parse(localStorage.getItem("game"));
      console.log(game);
    });

    buttonOOP.addEventListener("click", function(){
      class Notification{
        send(){
          console.log("Send notification");
        }
      }

      const notification = new Notification;
      notification.send();

      class EmailNotification extends Notification{
        send(){
          console.log("Send Email");
        }
      }

      class SmsNotification extends Notification{
        send(){
          console.log("Send Sms");
        }
      }

      const notificationEmail = new EmailNotification
      const notificationSms = new SmsNotification
      
      notificationSms.send();
      notificationEmail.send();

      class SMSNotification{
        dataSMS(){
          const dataSms = ["БеларусБанк", "Termux"];
          const notificationSms = new SmsNotification
          const notificationEmail = new EmailNotification

          dataSms.forEach(function(item, index){
            console.log(notificationSms + item, notificationEmail + index);
          });
        } 
      }
      
      const DataSms = new SMSNotification();
      DataSms.dataSMS();

      class Animal{
        voice(){
          console.log("Gav");
        }
      }
      
      class Cat {
        voice(){
          console.log("Meow");
        }
      }
      
      const dog = new Animal
      const cat = new Cat
      cat.voice();
      dog.voice();

      function Human(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
        
      }
      
      const chris = new Human('Chris', 'Coyir')
      console.log(chris.firstName);
      console.log(chris.lastName);

      const zell = new Human('Zell', 'Liew');
      console.log(zell.firstName);
      console.log(zell.lastName)
      
      class Names{
        firstName(){
          console.log("lola");
        }
      }

      const names = new Names
      names.firstName();  

      class Humann {
        constructor(firstName, lastName){
          this.firstName = firstName
          this.firstName = lastName
        }
      }

      const animalss = new Human("Cat", "Dog")
      console.log(animalss.firstName);
      console.log(animalss.lastName);

      class Humannn {
        init(firstName, lastName){ //тоже самое
          this.firstName = firstName
          this.firstName = lastName
        }
      }

      /*
      const chriss = Object.create(Humannn);
      chriss.init("Chris", 'Coyier');

      console.log(chriss.firstName);
      console.log(chriss.lastName);
      */
      
      function Humannnn(firstName, lastName){
        return {
          firstName,
          lastName
        }
      }

      const chrisss = Humannnn("Arch", "Linux")
      console.log(chrisss.firstName);
      console.log(chrisss.lastName);

      function Humannnnn (firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
        
        this.sayHello = function(){
          console.log(`Hello, I,m ${firstName}`);
        }
      }

      function Humannnnnn(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
      }

      Humannnnnn.prototype.sayHello = function () {
        console.log(`Hello, I,m ${firstName}`);
      }

      class Buttonn {
        clickc(){
          console.log("Action");
        }
      } 

      class Delete extends Buttonn{
        clickcc(){
          console.log("Delete");
        }
      }

      const clickk = new Buttonn;
      clickk.clickc();

    });

    buttonHTTP.addEventListener("click", function(){
     fetch(data)
      .then(response => {
        if(!response.ok){
          throw new Error("ошибка");
        }
        return response.json();
      })
      .then(data => {
        console.log("Данные получены", data);
      });
      
    });

    buttonJSON.addEventListener("click", function(){
      const jsonstring = JSON.stringify(data);
      console.log(jsonstring);
    });

    buttonJS.addEventListener("click", () => {
        JavaScript_Codes();
    });

    function showName(){
      console.log("Никита");
    }

    showName();
    
    function sumaNumber(){
      let number = 3;
      let number1 = 2;
      let number2 = 4;
      console.log(number + number1 + number2);
    }

    sumaNumber();

    function ymnoNumber(){
      let number = 3;
      let number1 = 2;
      let number2 = 4;
      console.log(number * number1 * number2);
    }

    ymnoNumber();
    

    function JavaScript_Codes(){
      let innerPlanets = ["Меркурий","Земля","Венера","Марс",];
      let outerPlanets = ["Юпитер","Сатурн","Уран","Нептун",];

      let allPlanets = innerPlanets.concat(outerPlanets);
      console.log(allPlanets);

      let boxes = [
        {weigth: 2, label: "Легкая" },
        {weigth: 2, label: "Легкая" },
        {weigth: 2, label: "Легкая" },
        
      ]
      
      let nums1 = [5,12,3,18];
      let n;
      nums1.filter(n => n % 10 === 0)
      console.log(nums1);


      let arr = [1,4,5];
      arr.splice(1,0,2,3);
      console.log(arr);
       

      let numbers2 = [1,2,3];
      numbers2.shift();
      console.log(numbers2);
     
      let numbers1 = [2,3];
      numbers1.unshift(1);
      console.log(numbers1);

      let nums = [5, 10, 15];
      nums.pop();
      console.log(nums);

      let fruits0 = ["груша", "банан", "дыня"];
      let last = fruits0.pop();

     console.log(fruits0);
     console.log(last);

      let breakingbad = ["Уолтр", "Джессе"];
      breakingbad.push("Густав");
      console.log(breakingbad);  
      
      let numbers0 = [1,2,3,4];
      numbers0.push(5);
      console.log(numbers0);  
      
      let students = [
          { name: "Анна", age: 15 },
          { name: "Ирина", age: 16 }
        ];
      
        for(let student of students){
          console.log(student);
        }

       let  fruits = ["яблоко", "банан", "груша"];
        for(let fruit of fruits){
          console.log(fruit);
        }  

        let numbers = [10,20,30];
        for(var i = 0; i < numbers.length; i++){
          console.log(numbers[i]);
        }
      
        let characters = ["Хайзенрберг", "Джессе", "Тука", "Скайлер"];

        console.log(characters);

        /*  
        бесконечно через определенное количество времени
        setInterval(() => {
            alert("интервал");
         }, 1000);     
         */
         
         let string3 = prompt("Введите слово для посчета количество букв");
         let count3;
         let letterCount = 0;
         
         do{ 
          for(count3 of string3){
            letterCount++;
            console.log("Количество букв: " + letterCount);
           }
          }while(letterCount < count3)
    

    for(var i =  1; i < 11; i++){
      console.log(i * 3); 
    }

    let sum = 0;
    for(var i = 1; i <= 5; i++){
      sum = sum + i;
      console.log("Сумма:", sum);
    }

    
    for(let i = 1; i < 10; i += 2){
      console.log(i);
    }

    for(var i = 0; i < 10; i++){
      if(i == 3) continue;
      console.log(i);
    }

    for(var i = 0; i < 10; i++){
      if(i == 5) break;
      console.log(i);
    }

    let data0 = {name: "Никита", age: 15, city: "Минск", hobbies: "Programming"}

    for(let key0 in data0){
      console.log(key0 + ":" + data0[key0]);
    }

    let data = {name: "Анна", age: 15, city: "Минск"}

    for(let key in data){
      console.log(key + ":" + data[key]);
    }

    let animals = ["Собака", "Кот", "Слон"];

    for(let animals0 of animals){
     console.log(animals0);
    }
    for(let letter of "Привет"){
      console.log(letter);
    }
    
    const massiv = ["Яблоко","Банан","Груша",];
    
    console.log(massiv);

    let string1;
    do{
      string1 = prompt("Введи число 5");
      if(string1 === "exit"){
        break;
      }
    } while(string1 !== "5");
    
    console.log("5");

    let g = 1;
    do{
      console.log(g);
      g++;
    }while(g < 10);

    let p = 11;
    while(p > 1){
      p--;
      console.log(p);
    }

    let string = prompt("Что вы хотите купить?")
    switch(string){ 
    case "Мороженое":
    let money = 100;
    while(money > 0){
      money--;
      console.log("У вас" + money);
    }
    break;
    default:
      console.log("Нету того");
  }
    for(let i = 5; i <= 15; i++){
      console.log(i);
    }

    let While = prompt("Введи число")
    let q = 0;
    while(q < While){
      q++;
      console.log(q);
    }

    let For = prompt("Введи число");
    for(var i = 0; i < For; i++){
      console.log(i);
    }

    let isReady = prompt("Готов заказ или нет");
    if(isReady == "Да"){
      console.log("Ура");
    }
    if(isReady == "Нет"){
      console.log("Ну ладно");
    }

    let name = prompt("Введите кем ты будешь");
    switch(name){
      case 'Гость':
       let passwordGuest = prompt("Пароль");
       if(passwordGuest == 1111){
        console.log("Ты гость");
       }
      break;
      case 'Sudo':
       let passwordSudo = prompt("Пароль");
       if(passwordSudo == 1234567){
        console.log("Ты суперпользователь");
       }
       break;
      case 'Админ':
        let passwordAdmin = prompt("Пароль");
        if(passwordAdmin == 12345){
         console.log("Ты админ");
        }
       break; 
      default:
        console.log("Нету такого");
    }
  }

    let clickcount = 0; 
     jessi.addEventListener("click", () => {
       clickcount++;
       if(clickcount == 1) {
        jessidialog.style.display = "block";   
       }
       if(clickcount == 2) {
        jessidialog.style.display = "none";
        
        clickcount = 0; 
      }
    });

    let clickcount2 = 0; 
    walter.addEventListener("click", () => {
       clickcount2++;
       if(clickcount2 == 1) {
        walterdialog.style.display = "block";   
       }
       if(clickcount2 == 2) {
        walterdialog.style.display = "none";   
        
        clickcount2 = 0; 
      }
    });

    let clickcount3 = 0; 
    gustav.addEventListener("click", () => {
       clickcount3++;
       if(clickcount3 == 1) {
        gustavdialog.style.display = "block";   
       }
       if(clickcount3 == 2) {
        gustavdialog.style.display = "none";   
       
        clickcount3 = 0; 
      }
    });

});