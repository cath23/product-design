import projectCardStyles from 'bundle-text:../../../scss/wc/home-page/project-card-wc.scss';

const projectCardTemplate = document.createElement('template');

/**
 * The projectCardTemplate contains two card variants: 'quote' and 'list' card
 * To choose the variant you want to use just add a 'type' attribute when consuming the component
 * and pass the variant of your preference. Eg <card-wc type:"quote"><card-wc/>.
 * The corresponding variant is handled directly via the component's CSS.
 */
// // todo change the above comment
let projectPageUrl;
// let imageUrl = 'imageURL asdasd';
// The /*html*/ comment is used by an extention to be able to highlight HTML inside backticks.
projectCardTemplate.innerHTML = /*html*/`
	<div class="pj-card">
	<a href=${projectPageUrl}>
		<div class="pj-card__img-container">
			<slot name='image'></slot>
		</div>
		<div class="pj-card__details">
			<ul class="details__tag-list tag-text">
				<li class="tag-list__item"><slot name="tag1">Irreverent</slot></li>
				<li class="tag-list__item">•</li>
				<li class="tag-list__item"><slot name="tag2">Ominus</slot></li>
			</ul>
			<button class="button details__button link-text">
				<span class="button__text">Read case study</span>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line class="button__arrow-tail" x1="5" y1="12" x2="19" y2="12"></line><polyline class="button__arrow-head" points="12 5 19 12 12 19"></polyline></svg>
			</button>
		</div>
		<h3 class="pj-card__title"><slot name="title">Project Title</slot></h3>
		<p class="pj-card__text bd-text-small dark-60"><slot name="desc">Description of project</slot></p>
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
		// this.image = this.getAttribute('image');

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
		// const src = this.shadowRoot.querySelector('img').getAttribute('src');
		// console.log(src);
		// const data = this.getAttribute('mitsos');
		// this.shadowRoot.querySelector('img').setAttribute('src',data);
		// console.log(this.shadowRoot.querySelector('img').getAttribute('src'));

		// document.querySelector('img').setAttribute('src',this.getAttribute('data'));
		// console.log(document.querySelector('img').getAttribute('data'));
		// console.log(this.data);
		// console.log(url);
		// url = this.data;
		// console.log(url);
		// imageUrl = this.image;
		// console.log('imageUrl', imageUrl);
		console.log(this.getAttributeNames());

		this.shadowRoot.querySelector('a').href = this.projectPageUrl;
		console.log(this.shadowRoot.querySelector('a').href);
		// this.shadowRoot.querySelector('.pj-card__img').src = this.image;
		// console.log('src: ', this.shadowRoot.querySelector('.pj-card__img').src);

	}
}

customElements.define('project-card-wc', ProjectCard);

