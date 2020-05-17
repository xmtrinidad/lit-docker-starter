import { LitElement, html, css } from 'lit-element';

export class RegisterView extends LitElement {
	static get properties() {
		return {
		};
	}

	static get styles() {
		return css`
      :host {
        display: block;
      }

      .input-container {
        margin: 8px 0;
      }
    `;
	}

	render() {
		return html`
		<h1>Register</h1>
		<form action="">
				<div class="input-container">
					<label for="username">Username</label>
					<input type="text" id="username">
				</div>
				<div class="input-container">
					<label for="password">Password</label>
					<input type="password" id="password">
				</div>
				<button @click="${this.onRegisterSubmit}" type="submit">Submit</button>
		</form>
    `;
	}

	onRegisterSubmit(e) {
		e.preventDefault();
		console.log('thing')
	}
}

customElements.define('register-view', RegisterView);
