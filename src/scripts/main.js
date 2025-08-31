'use strict';

const employeesList = document.querySelector('ul');
const listItems = [...document.querySelectorAll('li')];

function sortList(list) {
  return list.sort((item1, item2) => getNumber(item1) - getNumber(item2));
}

function getNumber(item) {
  return item.dataset.salary
    .slice(1)
    .split('')
    .filter((char) => /[0-9]/.test(char))
    .join('');
}

const sortedList = sortList(listItems);

sortedList.forEach((li) => employeesList.prepend(li));

function getEmployees(list) {
  return list.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: item.dataset.salary,
    age: item.dataset.age,
  }));
}

getEmployees(sortedList);
