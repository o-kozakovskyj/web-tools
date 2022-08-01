import { createListItem } from'../renderer' 

it ('shoud create li element', () => {
  
  expect(createListItem({text: 'test1', done: false,id: '7' })).toEqual('<li class="list__item list-item"><input type="checkbox" data-id="undefined" class="list-item__checkbox"><span class="list-item__text"></span><button class="list-item__delete-btn" data-id="undefined"></button></li>')
});