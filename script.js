let btn = document.querySelector('.container__form-submit')
let years = document.querySelector('#years'),
   months = document.querySelector('#months'),
   days = document.querySelector('#days')

btn.addEventListener('click', () => {
   function daysInMonth(month, year) {
      return new Date(year, month, 0).getDate();
   }
   function isValid (arg, id){
      if (!arg){
         document.querySelector(`#${id}`).style.borderColor = "hsl(0, 100%, 67%)";
         document.querySelector(`#${id}-label`).style.color = "hsl(0, 100%, 67%)";
         document.querySelector(`#${id}-underText`).innerHTML = 'This field is required'
         return '--'
      } else if (id === 'year' && arg > 2023 || date > now){
         document.querySelector(`#${id}`).style.borderColor = "hsl(0, 100%, 67%)";
         document.querySelector(`#${id}-label`).style.color = "hsl(0, 100%, 67%)";
         document.querySelector(`#day-underText`).innerHTML = 'Must be in the past'
         return '--'
      } else if (id === 'month' && arg > 12){
         document.querySelector(`#${id}`).style.borderColor = "hsl(0, 100%, 67%)";
         document.querySelector(`#${id}-label`).style.color = "hsl(0, 100%, 67%)";
         document.querySelector(`#${id}-underText`).innerHTML = 'Must be a valid month'
         return '--'
      } else if (id === 'day' && arg > 31){
         document.querySelector(`#${id}`).style.borderColor = "hsl(0, 100%, 67%)";
         document.querySelector(`#${id}-label`).style.color = "hsl(0, 100%, 67%)";
         document.querySelector(`#${id}-underText`).innerHTML = 'Must be a valid day'
         return '--'
      } else if (daysInMonth(month, year) < +day){
         document.querySelector(`#${id}`).style.borderColor = "hsl(0, 100%, 67%)";
         document.querySelector(`#${id}-label`).style.color = "hsl(0, 100%, 67%)";
         document.querySelector(`#day-underText`).innerHTML = 'Must be a valid date'
         return '--'
      } else {
         document.querySelector(`#${id}`).style.borderColor = "hsl(0, 0%, 86%)";
         document.querySelector(`#${id}-label`).style.color = "hsl(0, 1%, 44%)";
         document.querySelector(`#${id}-underText`).innerHTML = ''

         let differenceInMiliseconds = now - date;
         let differenceInDays = differenceInMiliseconds / 1000 / 3600 / 24;

         let differenceInMonths = (now.getMonth() + 12 * now.getFullYear()) - (date.getMonth() + 12 * date.getFullYear());
         let differenceInYears = differenceInMonths / 12;
         differenceInMonths = differenceInMonths % 12;
         differenceInDays = Math.floor(differenceInDays % 30.4375);

         if (id === 'year') return Math.floor(differenceInYears);
            else if (id === 'month') return differenceInMonths;
            else return differenceInDays;
      }

   }
   let year = document.querySelector('#year').value,
      month = document.querySelector('#month').value,
      day = document.querySelector('#day').value 

   const date = new Date (year, month, day)
   let now = new Date()

   years.innerHTML = isValid(year, 'year')
   months.innerHTML = isValid(month, 'month')
   days.innerHTML = isValid(day, 'day')

   

   
})