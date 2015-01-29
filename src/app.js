import {TodoFacade} from './todo-facade';

$(window).load(function(){
  var app = new TodoFacade(document);
});
