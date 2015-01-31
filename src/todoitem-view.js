import {View} from '../../tungstenjs/src/view';

export class TodoItemView extends View {
	static template(data) {
		console.log('exampleView.template()', data);

		return `
			<li data-guid="${data[0].guid}">
				<div class="view">
					<input class="toggle" type="checkbox" />
					<label>${data[0].title}</label>
					<button class="destroy"></button>
				</div>
				<input class="edit" value="${data[0].title}" />
			</li>
		`;
	}
}
