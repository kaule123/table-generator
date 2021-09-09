'use strict'

function createTable() {
  let input_rows = document.querySelector('#input_rows');
  let input_columns = document.querySelector('#input_columns');
  let btn = document.querySelector('#btn');
  let table = document.querySelector('#table');

  btn.addEventListener('click', function clickButton() {
    let k = 1;
    for (let i = 0; i < Number(input_rows.value); i++) {
      let tr = document.createElement('tr');
      table.appendChild(tr);

      for(let j = 0; j < Number(input_columns.value); j++) {
        let td = document.createElement('td');
        td.innerHTML = k++;
        tr.appendChild(td);
        
        td.addEventListener('click',function clickTd() {
          let input = document.createElement('input');
          input.classList.add('input_table');
          input.value = td.innerHTML;
          td.innerHTML = '';
          td.appendChild(input);
          
          input.addEventListener('blur', function inputBlur() {
            td.innerHTML = this.value;
            
            td.addEventListener('click',clickTd);
          });

          td.removeEventListener('click', clickTd);
        })
      }
    }
  })
}

createTable()