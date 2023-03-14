import navBar from '../components/navBar';
import domBuilder from '../components/domBuilder';
import logoutButton from '../components/logoutButton';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  logoutButton();
};

export default startApp;
