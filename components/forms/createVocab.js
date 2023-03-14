import renderToDOM from '../../utils/renderToDOM';
import clearDom from '../../utils/clearDOM';

const createVocabForm = (uid, obj = {}) => {
  clearDom();
  document.querySelector('#filterButtonContainer').innerHTML = '';
  const formTitle =
    Object.keys(obj).length === 0 ? '<h1>Add Term Form</h1>' : '<h1>Update Term Form</h1>';
  renderToDOM('#filterButtonContainer', formTitle);

  const domString = ` 
     <form id="${obj.firebaseKey ? `updateVocabItem--${obj.firebaseKey}` : 'submit-card-form'}" class="mb-4">
      <div class="form-group mb-3">
        <!-- <label for="title">Title</label> -->
        <input type="text" class="form-control" id="title" placeholder="Title" value="${obj.term || ''}" required>
      </div>
      <div class="form-group mb-3">
        <!-- <label for="definition">Definition</label> -->
        <input type="text" class="form-control" id="definition" placeholder="Definition" value="${obj.description || ''}" required>
      </div>
      <div class="form-group ">
        <select class="form-select" id="languageSelect" aria-label="Language select">
          <option selected>${obj.language || 'Select Language'}</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="Javascript">Javascript</option>
        </select required>
          
        </div>
        
        <button type="submit" class="btn btn-secondary mt-3">Submit</button>
      </form>
    `;

  renderToDOM('#form-container', domString);
};

export default createVocabForm;
