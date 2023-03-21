import clearDom from '../utils/clearDOM';
import renderToDOM from '../utils/renderToDOM';

const emptyVocabs = () => {
  const domString = '<h1>No Vocabularies</h1>';
  renderToDOM('#store', domString);
};

const showVocabs = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-book-btn">Add A Card</button>';
  renderToDOM('#add-button', btnString);
  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
          <div class="card-body" style="height: 20%;">
            <h2 class="card-header">${item.title}</h2>
            <br>
            <h4 class="card-language">Language: ${item.language}</h4>
            <br>
            <div id="def-txt">
            <p class="card-definition">${item.description}</p>
            </div>
              <div id="cards-btn">
              <hr>
              <i id="edit-vocab-btn--${item.firebaseKey}" class="btn btn-info">Edit</i>
              <i id="delete-vocab-btn--${item.firebaseKey}" class="btn btn-danger">Delete</i>
              </div>
          </div>
        </div>`;
  });
  renderToDOM('#store', domString);
};

export { showVocabs, emptyVocabs };
