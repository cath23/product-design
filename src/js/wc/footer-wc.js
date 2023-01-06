import footerStyles from 'bundle-text:../../scss/wc/footer-wc.scss';
// import caseStudy1 from '../../case-study_1.html';
// import foo from 'src/assets/projects/*.jpg';
//todo Globs are not supported yet in Parcel v2.
// Find a way on how to import assets from HTML when consuming a component
// that will resolve to the dist/hased  bundled name of the asset on render.
// This will make the consumption of the component more dynamic without the need of slot.
// https://github.com/parcel-bundler/parcel/issues/4683
// There was an attempt but to add glob support on v2 but got ommited :( : https://github.com/parcel-bundler/parcel/pull/5933

const footerTemplate = document.createElement('template');

// The /*html*/ comment is for an extention to be able to highlight html inside backticks.
footerTemplate.innerHTML = /*html*/`
    <footer class="footer center-hrz">
			<div class="main-variant">
				<div class="footer-container container-sm">
					<div class="footer__title-container">
						<h2 class="footer__title"></h2>
						<p class="footer__subtitle">asdasd</p>
					</div>
					<p href="" class="footer__email">kelepourikaterina@gmail.com</p>
					<ul class="footer__social-list">
						<li class="social-list__list-item">
							<a href="https://linkedin.com/" class="list-item__link">read.cv</a>
						</li>
						<li class="social-list__list-item">
							<a href="https://www.linkedin.com/in/katerina-kelepouri/" class="list-item__link">LinkedIn</a>
						</li>
					</ul>
					<div class="footer__location-container">
						<p class="footer__location location2">Thessaloniki, Greece</p>
						<p class="footer__location location1">Prague, Czech Republic</p>
					</div>
				</div>
			</div>
			<div class="project-variant">
				<div class="footer-container container-sm">
					<div class="footer-content">
						<h4 class="footer-content__tag">something</h4>
						<h2 class="footer-content__title project-title">
							<a class="title__link"><span class="link__text">asdasd</span></a>
						</h2>
						<button class=" footer-content__button button link-text light">
							<span class="button__text">button text</span>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line class="button__arrow-tail" x1="5" y1="12" x2="19" y2="12"></line><polyline class="button__arrow-head" points="12 5 19 12 12 19"></polyline></svg>
						</button>
					</div>
					<slot name=project-img></slot>
				</div>
			</div>
    </footer>
`;

export default class Footer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		// how to use scss with a web compoent
		// https://github.com/parcel-bundler/parcel/discussions/5847
		const style = document.createElement('style');
		this.shadowRoot.appendChild(style);
		style.textContent = footerStyles;

		// Using 'cloneNode(true)' enable to re-use the component multiple times in page.
		// https://stackoverflow.com/q/69054340/7889584
		//todo you don't need footer-component & header-component multiple times in the same page.
		this.shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
	}

	connectedCallback() {
		// connect custom attributes' values with the component
		if (this.getAttribute('variant') === 'main') {
			// for the main page variant
			const title =  this.shadowRoot.querySelector('.main-variant .footer__title');
			title.innerText = this.getAttribute('footer-title');

			// const link =  this.shadowRoot.querySelector('.footer_title-link');
			// link.href = this.getAttribute('link');

			const subtitle = this.shadowRoot.querySelector('.footer__subtitle');
			subtitle.innerHTML = this.getAttribute('subtitle');

			console.log(subtitle.innerText);
			console.log(this.getAttribute('subtitle'));

		} else if (this.getAttribute('variant') === 'project') {
			const titleLink =  this.shadowRoot.querySelector('.project-variant .title__link');
			titleLink.innerText = this.getAttribute('title');

			// for the project page variant
			const tag = this.shadowRoot.querySelector('.footer-content__tag');
			tag.innerText = this.getAttribute('tag');

			const button = this.shadowRoot.querySelector('.button__text');
			button.innerText = this.getAttribute('button');

			// const img = this.shadowRoot.querySelector('img');
			// img.setAttribute('src', this.imgUrl);
		} else {
			throw new Error('No variant passed in component');
		}

		this.addEventListener('click', () => {
			window.location.href = caseStudy1;
		});
	}
}

customElements.define('footer-wc', Footer);
