import { renderComponent , expect } from 'testUtils';
import App from '../src/app';

describe('Banking Application', () => {
	let component;

	beforeEach(() => {
		component = renderComponent(App);
	});

	it('should have a transaction component', () => {
		expect(component).to.exist;
	});
});