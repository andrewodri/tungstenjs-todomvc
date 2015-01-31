import {HandlebarsView} from '../../tungstenjs-carbide/src/views/handlebars-view';

export class TodoItemView extends HandlebarsView {
	static get template() {
		console.log('TodoItemView.template()');

		return `
			{{#each this}}
			<li data-guid="{{guid}}" class="{{#if isCompleted}}completed{{/if}}">
				<div class="view">
					<input class="toggle" type="checkbox" {{#if isCompleted}}checked="true"{{/if}} />
					<label>{{title}}</label>
					<button class="destroy"></button>
				</div>
				<input class="edit" value="{{title}}" />
			</li>
			{{/each}}
		`;
	}
}
