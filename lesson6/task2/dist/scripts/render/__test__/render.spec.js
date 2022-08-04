import { createListItem } from'./render' 

it ('shoud create li element', () => {
  
  expect(createListItem('task1').innerHTML).toEqual('<li class="list__item list-item"><input type="checkbox" data-id="undefined" class="list-item__checkbox"><span class="list-item__text"></span><button class="list-item__delete-btn" data-id="undefined"></button></li>')
});