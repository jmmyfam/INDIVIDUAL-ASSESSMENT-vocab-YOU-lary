import { createVocabs, getVocabs, updateVocabs } from '../api/vocabData';
import { showVocabs } from '../pages/vocabulary';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A VOCABULARY
    if (e.target.id.includes('submit-vocab')) {
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        language: document.querySelector('#language').value,
        uid: user.uid,
        time: new Date().toLocaleString(),
      };
      createVocabs(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        console.warn(payload);

        updateVocabs(patchPayload).then(() => {
          getVocabs(user.uid).then(showVocabs);
        });
      });
    }
    // TODO: CLICK EVENT FOR EDITING A VOCABULARY
    if (e.target.id.includes('update-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        language: document.querySelector('#language').value,
        firebaseKey,
      };
      updateVocabs(payload).then(() => {
        getVocabs(user.uid).then(showVocabs);
      });
    }
  });
};

export default formEvents;
