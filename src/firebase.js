import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBQKthiLMsQs0nJnaeKcwh2X7MxHTYqwd4",
    authDomain: "clone-a82ad.firebaseapp.com",
    projectId: "clone-a82ad",
    storageBucket: "clone-a82ad.appspot.com",
    messagingSenderId: "636808629496",
    appId: "1:636808629496:web:dadd5697682bcd6e87ff0d",
  };

  const fire=firebase.initializeApp(firebaseConfig);
  var db=fire.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export default fire;
  export {db,auth,provider};
