import projectCardStyles from 'bundle-text:../../../scss/wc/home-page/project-card-wc.scss';

const projectCardTemplate = document.createElement('template');

/**
 * The project-card-wc is a clickable card component for a project item.
 * To use it, pass:
 * - for the clickable card: a pj-page-url attribute with a url.
 * - for the image of the card: an img tag with slot name 'image'
 * - for the tags: two spans with slot names 'tag1'/'tag2' respectively
 * - for the project title: a span with slot name 'title'
 */

// The /*html*/ comment is used by an extention to be able to highlight HTML inside backticks.
let projectPageUrl;
projectCardTemplate.innerHTML = /*html*/`
<div class="pj-card">
	<a href=${projectPageUrl}>
		<div class="pj-card__img-container">
			<slot name='image'></slot>
		</div>
		<div class="pj-card__details">
			<h3 class="pj-card__title"><slot name="title">Project Title</slot></h3>
			<p class="pj-card__text bd-text-small "><slot name="desc">Description of project</slot></p>
			<button class="details__button button link-text">
				<span class="button__text">Read case study</span>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line class="button__arrow-tail" x1="5" y1="12" x2="19" y2="12"></line><polyline class="button__arrow-head" points="12 5 19 12 12 19"></polyline></svg>
			</button>
		</div>

	</a>
</div>
    `;

// todo how to pass an asset url to an img tag's src atttr defined in a web component?
// todo how to make ::before, ::after work inside a web component/shadow root
export default class ProjectCard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: 'open'});
		this.projectPageUrl = this.getAttribute('pj-page-url');

		// how to use scss with a web compoent
		// https://github.com/parcel-bundler/parcel/discussions/5847
		const style = document.createElement('style');
		this.shadowRoot.appendChild(style);
		style.textContent = projectCardStyles;
		// Using 'cloneNode(true)' enable to re-use the component multiple times in page.
		// https://stackoverflow.com/q/69054340/7889584

		this.shadowRoot.appendChild(projectCardTemplate.content.cloneNode(true));
	}

	connectedCallback() {
		this.shadowRoot.querySelector('a').href = this.projectPageUrl;

		// Check if 'no-descr' attributed was paased
		if(this.getAttribute('no-descr') === '') {
			this.shadowRoot.querySelector('.pj-card__text').style.display = 'none';
		}
	}
}

customElements.define('project-card-wc', ProjectCard);

