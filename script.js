var firebaseConfig = {
	apiKey: "AIzaSyBvEBRORlJ4-tvuTUHkl7rNeJg1eWzp-w0",
	authDomain: "arduinorc-a1fcc.firebaseapp.com",
	databaseURL: "https://arduinorc-a1fcc-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "arduinorc-a1fcc",
	storageBucket: "arduinorc-a1fcc.appspot.com",
	messagingSenderId: "353482246377",
	appId: "1:353482246377:web:ac77b51cd3b812e2254878",
	measurementId: "G-HGD9TY1F80"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const joystickContainer = document.querySelector('#joystick-container');
  const joystickHandle = document.querySelector('#joystick-handle');
  const forwardButton = document.querySelector('#forward-button');
  const backwardButton = document.querySelector('#backward-button');
  const leftButton = document.querySelector('#left-button');
  const rightButton = document.querySelector('#right-button');
  
  const joystick = new VirtualJoystick({
	container: joystickContainer,
	mouseSupport: true,
  });
  
  forwardButton.addEventListener('mousedown', () => {
	// Move the car forward
  });
  
  backwardButton.addEventListener('mousedown', () => {
	// Move the car backward
  });
  
  leftButton.addEventListener('mousedown', () => {
	// Turn the car left
  });
  
  rightButton.addEventListener('mousedown', () => {
	// Turn the car right
  });
  
  // Update the position of the joystick handle
  setInterval(() => {
	joystickHandle.style.top = `${joystick.deltaY() + 150}px`;
	joystickHandle.style.left = `${joystick.deltaX() + 150}px`;
  }, 1);
  



  