let btn = document.querySelector('.container__form-submit')
let years = document.querySelector('#years'),
   months = document.querySelector('#months'),
   days = document.querySelector('#days')

btn.addEventListener('click', () => {
   function daysInMonth(month, year) {
      return new Date(year, month, 0).getDate();
   }
   function isWrong (id, inner, text) {
      document.querySelector(`#${id}`).style.borderColor = "hsl(0, 100%, 67%)";
      document.querySelector(`#${id}-label`).style.color = "hsl(0, 100%, 67%)";
      document.querySelector(`#${id}-underText`).style.animation = "shake 0.3s";
      document.querySelector(`#${id}`).style.animation = "shake 0.3s";
      setTimeout (() => {
         document.querySelector(`#${id}-underText`).style.animation = null;
         document.querySelector(`#${id}`).style.animation = null;
      }, 310)
      document.querySelector(inner).innerHTML = text
      return '--'
   }
   function isValid (arg, id){
      if (!arg){
         return isWrong (id, `#${id}-underText`, 'This field is required')
      } else if (id === 'year' && arg > 2023 || date > now){
         return isWrong (id, `#day-underText`, 'Must be in the past')
      } else if (id === 'month' && arg > 12){
         return isWrong (id, `#${id}-underText`, 'Must be a valid month')
      } else if (id === 'day' && arg > 31){
         return isWrong (id, `#${id}-underText`, 'Must be a valid day')
      } else if (daysInMonth(month, year) < +day){
         return isWrong (id, `#day-underText`, 'Must be in the date')
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