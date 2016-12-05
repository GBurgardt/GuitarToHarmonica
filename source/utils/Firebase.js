import Firebase from 'firebase';
let config = {
  apiKey: "AIzaSyD-OhHP68t7i56aGJlSSDGwo9NlJSVB8so",
  authDomain: "guitartoharmonica.firebaseapp.com",
  databaseURL: "https://guitartoharmonica.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "992427960292"
};
Firebase.initializeApp(config);

export function writeNewUser(name, email) {
  return Firebase.database().ref('users/').push({
    username: name,
    email: email
  });
}

export function writeNewFavoriteSong(userKey, name, artist, song) {
  return Firebase.database().ref('users/' + userKey + '/favorites/').push({
    name: name,
    artist: artist,
    song: song
  });
}
