import { getVocabs } from '../api/vocabData';
import logoutButton from '../components/logoutButton';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { showVocabs } from '../pages/vocabulary';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';

const startApp = (user) => {
  domBuilder();
  navBar();
  logoutButton();
  domEvents(user);
  navigationEvents(user);
  formEvents(user);

  getVocabs(user.uid).then((vocabs) => showVocabs(vocabs));
};

export default startApp;
