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

		// Need to be able to instantiate multiple controllers so that this.element can be used again...
		let isCompleted = $(event.currentTarget).prop('checked');

		$(event.currentTarget).parent(this.element).parent().toggleClass('completed', isCompleted);

		TodoModel.updateOrCreate( {guid: $(event.currentTarget).parent(this.element).parent().data('guid')}, {isCompleted} );
	}

	editTitle(event) {
		console.log('todoItemController.editTitle()');

		event.preventDefault();

		$(event.currentTarget).parent(this.element).parent().addClass('editing');
		$(event.currentTarget).focus();
	}

	saveTitle(event) {
		console.log('todoItemController.saveTitle()');

		let title = $(event.currentTarget).val();

		$(event.currentTarget).parent(this.element).parent().removeClass('editing');

		$(this.selectors.titleLabel, this.element).text(title);

		TodoModel.updateOrCreate( {guid: $(event.currentTarget).parent(this.element).parent().data('guid')}, {title} );
	}
}
