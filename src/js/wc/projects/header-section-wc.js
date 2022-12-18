import headerSectionStyles from 'bundle-text:../../../scss/wc/projects/header-section-wc.scss';

const headerSectionTemplate = document.createElement('template');
/**
 * The headerSectionTemplate is a component that hold the header content and styles of a section
 */
// The /*html*/ comment is used by an extention to be able to highlight HTML inside backticks.
headerSectionTemplate.innerHTML = /*html*/`
		<div class="header">
			<h4  class="header__subtitle"><slot part="subtitle"name="header-subtitle"></slot></h4>
			<h2 part="title" class="header__title"><slot name="header-title"> This is a section header title </slot></h2>
		</div>
    `;

export default class HeaderSection extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		// how to use scss with a web compoent
		// https://github.com/parcel-bundler/parcel/discussions/5847
		const style = document.createElement('style');
		this.shadowRoot.appendChild(style);
		style.textContent = headerSectionStyles;
		// Using 'cloneNode(true)' enable to re-use the component multiple times in page.
		// https://stackoverflow.com/q/69054340/7889584
		this.shadowRoot.appendChild(headerSectionTemplate.content.cloneNode(true));
	}

	connectedCallback() {
	}
}

customElements.define('header-section-wc', HeaderSection);
