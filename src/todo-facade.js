import {Controller} from '../../tungstenjs/src/controller';

import {TodoModel} from './todo-model';
import {TodoItemView} from './todoitem-view';
import {TodoItemController} from './todoitem-controller';

// Need to export this to the global context so that other reflecting classes can access it
window.TodoModel = TodoModel;

export class TodoFacade extends Controller {
	get defaults() { return {
		selectors : {
			todoInput : '#new-todo'
			,todoList : '#todo-list'
			,todoListItem : '#todo-list li'
			,filterButton : '#filters a'
			,clearButton : '#clear-completed'
		}
	};}

	get listeners() { return [
		{ selector : '{selectors.todoInput} keypress', handler : this.createTodo }
		,{ selector : '{selectors.filterButton} click', handler : this.displayAll }
		,{ selector : '{selectors.clearButton} click', handler : this.removeComplete }
	];}

	initialize() {
		console.log('todoFacade.initialize()');

		$.when(
			$(this.selectors.todoList).view(
				TodoItemView.render(
					TodoModel.find({})
				)
			)
		).done(() => {
			let item = new TodoItemController(this.selectors.todoListItem);
		});
	}

	createTodo(event) {
		if(event.keyCode == 13){
			console.log('todoFacade.createTodo()');

			event.preventDefault();

			let title = $(this.selectors.todoInput).val();

			$.when(
				$(this.selectors.todoList).view(
					TodoItemView.render(
						TodoModel.create({title})
					)
				)
			).done(() => {
				let item = new TodoItemController(this.selectors.todoListItem);
			});
		}
	}

	displayAll(event) {
		console.log('todoFacade.displayAll()');

		event.preventDefault();
	}

	displayActive(event) {
		console.log('todoFacade.displayActive()');

		event.preventDefault();
	}

	displayComplete(event) {
		console.log('todoFacade.displayComplete()');

		event.preventDefault();
	}

	removeComplete(event) {
		console.log('todoFacade.removeComplete()');

		event.preventDefault();
	}
}
