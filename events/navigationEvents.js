import {
  getCSS, getHTML, getJS, getVocabs
} from '../api/vocabData';
import { showVocabs } from '../pages/vocabulary';
import { signOut } from '../utils/auth';

const navigationEvents = (user) => {
  document.querySelector('#logout-button').addEventListener('click', signOut);
  // Show Vocabs
  document.querySelector('#all-vocabs').addEventListener('click', () => {
    getVocabs(user.uid).then(showVocabs);
  });

  // Filter
  document.querySelector('#Html').addEventListener('click', () => {
    getHTML(user.uid).then(showVocabs);
  });

  document.querySelector('#JS').addEventListener('click', () => {
    getJS(user.uid).then(showVocabs);
  });

  document.querySelector('#CSS').addEventListener('click', () => {
    getCSS(user.uid).then(showVocabs);
  });
};
export default navigationEvents;
