import Firebase from 'firebase';
let config = {
  apiKey: "AIzaSyD-OhHP68t7i56aGJlSSDGwo9NlJSVB8so",
  authDomain: "guitartoharmonica.firebaseapp.com",
  databaseURL: "https://guitartoharmonica.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "992427960292"
};
Firebase.initializeApp(config);

// let database = firebase.database();

export function writeUserData(userId, name, email) {
  Firebase.database().ref('users/' + userId).set({
    username: name,
    email: email
  });
}
