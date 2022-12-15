const firebaseConfig = {
  apiKey: "AIzaSyBvEBRORlJ4-tvuTUHkl7rNeJg1eWzp-w0",
  authDomain: "arduinorc-a1fcc.firebaseapp.com",
  databaseURL: "https://arduinorc-a1fcc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "arduinorc-a1fcc",
  storageBucket: "arduinorc-a1fcc.appspot.com",
  messagingSenderId: "353482246377",
  appId: "1:353482246377:web:ac77b51cd3b812e2254878",
  measurementId: "G-HGD9TY1F80"
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

function sendCommand(command) {
  database.ref("command").set(command);
}
function sendCommand(commands) {
  database.ref("commands").set(commands);
}
