/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  /**
   * @property {Element} - обязательное свойство, которое ссылается на элемент <table>
   */
this.el           = document.createElement('table');
this.el.innerHTML = '<thead><tr><td>Name</td><td>Age</td><td>Salary</td><td>City</td></tr></thead>';
let tbody         = document.createElement('tbody');

this.el.appendChild(tbody);

for ( i=0; i < items.length; i++ ) {
  let tr = document.createElement('tr');
  tr.innerHTML =
    '<td>' + items[i].name + '</td>' +
    '<td>' + items[i].age + '</td>' +
    '<td>' + items[i].salary + '</td>'+
    '<td>' + items[i].city + '</td>';
  tbody.appendChild(tr);
}

  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */

  this.sort = (column, desc = false) => {

        if (column == 0) {
        let sortNames = Array.from(this.el.rows)
          .slice(1)
          .sort((a, b) => a.cells[column].innerHTML > b.cells[column].innerHTML ? 1 : -1);
          this.el.tBodies[0].append(...sortNames);
        }
        if (column == 0 && desc === true) {
          let sortNames = Array.from(this.el.rows)
            .slice(1)
            .sort((a, b) => a.cells[column].innerHTML < b.cells[column].innerHTML ? 1 : -1);
            this.el.tBodies[0].append(...sortNames); 
        }
        if (column == 2) {
          let sortSalary = Array.from(this.el.rows)
            .slice(1)
            .sort((a, b) => a.cells[column].innerHTML - b.cells[column].innerHTML);
            this.el.tBodies[0].append(...sortSalary); 
        }
  };
}