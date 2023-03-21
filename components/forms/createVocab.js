import clearDom from '../../utils/clearDOM';
import renderToDOM from '../../utils/renderToDOM';

const createVocab = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter A Vocabulary" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Definition</label>
        <textarea class="form-control" placeholder="Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
      </div>
      <div class="form-group" id="select-language">
      <label for="category">Language</label>
        <select class="form-control" placeholder="Select Category" id="language" name="vocabCategory" value="${obj.language || ''}" required>
        <option value="">Select a Language</option>
          <option value="HTML" ${obj.language === 'HTML' ? 'selected' : ''}>HTML</option>
          <option value="CSS" ${obj.language === 'CSS' ? 'selected' : ''}>CSS</option>
          <option value="JavaScript" ${obj.language === 'JavaScript' ? 'selected' : ''}>JavaScript</option>
        </select>
      </div>
      <br>
      <button type="submit" class="btn btn-primary">Submit
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default createVocab;
