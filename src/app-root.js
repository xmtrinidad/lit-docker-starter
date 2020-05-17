import { LitElement, html, css } from 'lit-element';
import {Router} from '@vaadin/router';

export class AppRoot extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      main {
        padding: 16px;
      }
    `;
  }

  render() {
    return html`
      <nav>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
        <a href="/">Home</a>
      </nav>
      <main>
        <div id="outlet"></div>
      </main>
    `;
  }

  constructor() {
    super();
  }

  firstUpdated() {
    this.setRoutes();
  }


  setRoutes() {
    const outlet = this.shadowRoot.querySelector('#outlet');
    const router = new Router(outlet);
    router.setRoutes([
      { 
        path: '/', 
        action: () => {
          import('./views/landing-view.js');
        }, 
        component: 'landing-view'},
      {
        path: '/login',
        action: () => {
          import('./views/login-view.js');
        }, 
        component: 'login-view'
      },
      {
        path: '/register',
        action: () => {
          import('./views/register-view.js');
        }, 
        component: 'register-view'
      },
    ]);
  }

  
}

customElements.define('app-root', AppRoot);
