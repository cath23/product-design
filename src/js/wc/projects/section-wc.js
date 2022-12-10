import sectionStyles from 'bundle-text:../../../scss/wc/projects/section-wc.scss';

const sectionTemplate = document.createElement('template');
/**
 * The sectionTemplate is a container of smaller components and responsible of their
 * each other spacing.
 */
// todo search for imperative and declative way of using slot
// https://stackoverflow.com/questions/65423092/is-it-possible-to-programmatically-slot-elements-in-web-components
// The /*html*/ comment is used by an extention to be able to highlight HTML inside backticks.
sectionTemplate.innerHTML = /*html*/`
    <div class="section-container container-sm">
			<slot></slot>
	</div>
    `;

export default class Section extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		// how to use scss with a web compoent
		// https://github.com/parcel-bundler/parcel/discussions/5847
		const style = document.createElement('style');
		this.shadowRoot.appendChild(style);
		style.textContent = sectionStyles;
		// Using 'cloneNode(true)' enable to re-use the component multiple times in page.
		// https://stackoverflow.com/q/69054340/7889584
		this.shadowRoot.appendChild(sectionTemplate.content.cloneNode(true));
	}

	connectedCallback() {
	}
}

customElements.define('section-wc', Section);
