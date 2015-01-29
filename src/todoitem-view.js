import {View} from '../../tungstenjs/src/view';

export class TodoItemView extends View {
	static template(data) {
		console.log('exampleView.template()', data);

		return `
			<li data-guid="${data.guid}">
				<div class="view">
					<input class="toggle" type="checkbox" />
					<label>${data.title}</label>
					<button class="destroy"></button>
				</div>
				<input class="edit" value="${data.title}" />
			</li>
		`;
	}
}
