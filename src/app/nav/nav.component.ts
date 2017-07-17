import { Component } from "@angular/core";


@Component({
	selector: 'root-nav',
	template: `
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">Jet web note side</span>
      <div class="mdl-layout-spacer"></div>
      <nav class="mdl-navigation mdl-layout--large-screen-only">
      <!-- Expandable Textfield -->
        <form action="#">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
            <label style="top:22px" class="mdl-button mdl-js-button mdl-button--icon" for="sample6">
            <i class="material-icons">search</i>
            </label>
            <div class="mdl-textfield__expandable-holder">
            <input class="mdl-textfield__input" type="text" id="sample6">
            <label class="mdl-textfield__label" for="sample-expandable">Expandable Input</label>
            </div>
        </div>
        </form>
        <a *ngFor="let link of right_links" class="mdl-navigation__link" href="">{{link.label}}</a>
        <button id="demo-menu-lower-right" class="mdl-button mdl-js-button mdl-button--icon">
            <i class="material-icons">more_vert</i>
        </button>
        <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
            for="demo-menu-lower-right">
            <li class="mdl-menu__item">Some Action</li>
            <li class="mdl-menu__item">Another Action</li>
            <li disabled class="mdl-menu__item">Disabled Action</li>
            <li class="mdl-menu__item">Yet Another Action</li>
        </ul>
      </nav>
    </div>
  </header>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Title</span>
    <nav class="mdl-navigation">
      <a *ngFor="let link of left_links" class="mdl-navigation__link" href="">{{link.label}}</a>

    </nav>
  </div>
  <main class="mdl-layout__content">
    <div class="page-content">
        <!-- Your content goes here -->
    </div>
  </main>
</div>
`
})
export class NavComponent {
    right_links:any = [
        {label: "首页"},
        {label: "待定"},
        {label: "待定"},
        {label: "待定"},
        {label: "待定"}
    ];

    left_links:any = [
        {label: "首页"},
        {label: "待定"},
        {label: "待定"},
        {label: "待定"},
        {label: "待定"}
    ];

	constructor() {}

}