'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">atividade05 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-398b1917a4c152b160d8a897448ab2dfd7eb22542bddd95a74708b51ce90025d31953e1e0aad0dbfa931064dbf54ab5f40475a9f9dedae583dff80986480d52e"' : 'data-bs-target="#xs-components-links-module-AppModule-398b1917a4c152b160d8a897448ab2dfd7eb22542bddd95a74708b51ce90025d31953e1e0aad0dbfa931064dbf54ab5f40475a9f9dedae583dff80986480d52e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-398b1917a4c152b160d8a897448ab2dfd7eb22542bddd95a74708b51ce90025d31953e1e0aad0dbfa931064dbf54ab5f40475a9f9dedae583dff80986480d52e"' :
                                            'id="xs-components-links-module-AppModule-398b1917a4c152b160d8a897448ab2dfd7eb22542bddd95a74708b51ce90025d31953e1e0aad0dbfa931064dbf54ab5f40475a9f9dedae583dff80986480d52e"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CanvasBoxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CanvasBoxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LerObjComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LerObjComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SalvarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SalvarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Imagem.html" data-type="entity-link" >Imagem</a>
                            </li>
                            <li class="link">
                                <a href="classes/ManipulacaoVetMat.html" data-type="entity-link" >ManipulacaoVetMat</a>
                            </li>
                            <li class="link">
                                <a href="classes/Matrix2.html" data-type="entity-link" >Matrix2</a>
                            </li>
                        </ul>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
