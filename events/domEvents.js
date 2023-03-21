import { deleteVocabs, getSingleVocabs, getVocabs } from '../api/vocabData';
import createVocab from '../components/forms/createVocab';
import { showVocabs } from '../pages/vocabulary';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteVocabs(firebaseKey).then(() => {
          getVocabs(user.uid).then(showVocabs);
        });
      }
    }
    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A  Vocab
    if (e.target.id.includes('add-book-btn')) {
      createVocab(user);
    }

    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocabs(firebaseKey).then((vocabObj) => createVocab(vocabObj));
    }
  });
};

export default domEvents;
