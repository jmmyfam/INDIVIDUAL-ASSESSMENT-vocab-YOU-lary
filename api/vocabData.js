import client from '../utils/client';

const endpoint = client.databaseURL;

const getVocabs = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabs.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createVocabs = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabs.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateVocabs = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabs/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const deleteVocabs = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabs/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleVocabs = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabs/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

const getHTML = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabs.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const html = Object.values(data).filter((obj) => obj.language === 'HTML');
      resolve(html);
    })
    .catch(reject);
});

const getCSS = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabs.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const css = Object.values(data).filter((obj) => obj.language === 'CSS');
      resolve(css);
    })
    .catch(reject);
});

const getJS = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabs.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const js = Object.values(data).filter((obj) => obj.language === 'JavaScript');
      resolve(js);
    })
    .catch(reject);
});

export {
  getVocabs,
  createVocabs,
  updateVocabs,
  deleteVocabs,
  getSingleVocabs,
  getHTML,
  getCSS,
  getJS
};
