import firebase from "firebase";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
  };

  const fire=firebase.initializeApp(firebaseConfig);
  var db=fire.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export default fire;
  export {db,auth,provider};
