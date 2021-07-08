import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Movies");
  }

  async getHtml() {
    return `
            <div class="views movies"> 
              <h1>Movies</h1>

              <p>PLACEHOLDER</p>
            </div>
            `;
  }
}
