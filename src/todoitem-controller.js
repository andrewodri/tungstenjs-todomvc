import {Controller} from '../../tungstenjs/src/controller';

import {TodoModel} from './todo-model';

export class TodoItemController extends Controller {
	get defaults() { return {
		selectors : {
			titleLabel : 'label'
			,editInput : '.edit'
			,stateCheckbox : '.toggle'
			,destroyButton : '.destroy'
		}
	};}

	get listeners() { return [
		{ selector : 'dblclick', handler : this.editTitle }
		,{ selector : '{selectors.editInput} blur', handler : this.saveTitle }
		,{ selector : '{selectors.stateCheckbox} change', handler : this.changeState }
		,{ selector : '{selectors.destroyButton} click', handler : this.destroy }
	];}

	changeState(event) {
		console.log('todoItemController.changeState()');

		let isCompleted = $(event.currentTarget).prop('checked');

		$(this.element).toggleClass('completed', isCompleted);

		TodoModel.updateOrCreate( {guid: this.element.data('guid')}, {isCompleted} );
	}

	editTitle(event) {
		console.log('todoItemController.editTitle()');

		event.preventDefault();

		$(this.element).addClass('editing');
		$(event.currentTarget).focus();
	}

	saveTitle(event) {
		console.log('todoItemController.saveTitle()');

		let title = $(event.currentTarget).val();

		$(this.element).removeClass('editing');

		$(this.selectors.titleLabel).text(title);

		TodoModel.updateOrCreate( {guid: this.element.data('guid')}, {title} );
	}
}
