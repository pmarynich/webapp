const config = {
  apiKey: "AIzaSyDlfC09fnjGgBsgN3ZgOzL7eh24RI14SUU",
  authDomain: "cert-webchat.firebaseapp.com",
  projectId: "cert-webchat",
  storageBucket: "certwebchat",
  messagingSenderId: "644803168790",
  appId: "1:644803168790:web:7b2e62b0daebce49bf4337"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}