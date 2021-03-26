class InputReview extends HTMLElement {
  connectedCallback () {
    this._render()
  }

  _render () {
    this.innerHTML = `
      <div class="catalog">
        <div class="catalog-form">
          <h2>Create Comment section below</h2>
            <label for="name">Name</label>
            <input type="text" name="name" id="inputName" aria-label="input name">

            <label for="review">Review</label>
            <textarea name="review" id="inputReview"></textarea>

            <button  class="btn-primary" type="submit" id="submit-review" aria-label="submit review">
              <span>Add Review</span>
            </button>
        </div>
      </div>
    `
  }
}

customElements.define('input-review', InputReview)
