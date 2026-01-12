// Pega aquí tu configuración de Firebase (la ponemos en el Paso 3)
const firebaseConfig = {
  apiKey: "PEGAR_AQUI",
  authDomain: "PEGAR_AQUI",
  projectId: "PEGAR_AQUI",
  storageBucket: "PEGAR_AQUI",
  messagingSenderId: "PEGAR_AQUI",
  appId: "PEGAR_AQUI"
};

firebase.initializeApp(firebaseConfig);

window.auth = firebase.auth();
window.db = firebase.firestore();
window.storage = firebase.storage();
