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

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cupiditate numquam, at impedit aliquid ducimus accusantium repellendus deleniti repellat odit!</p>
            </div>
            `;
  }
}
