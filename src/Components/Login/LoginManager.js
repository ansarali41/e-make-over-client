import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeFirebase = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}

// google sign in handler
export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
        .then(function (result) {
            const user = result.user;
            const { displayName, email, photoURL } = user;
            const signedInUser = {
                displayName: displayName,
                email: email,
                photo: photoURL
            }
            handleJWTToken();
            return signedInUser;
        })
        .catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
}

// user logOut section
export const logOutHandler = () => {
    return firebase.auth().signOut().then(function () {
        const loggedOutUser = {
            displayName: '',
            email: '',
            photo:''
        }
        return loggedOutUser;

    })
    .catch(function (error) {
        // An error happened.
    });
}

//jwt token
const handleJWTToken = () => {
     firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
            // console.log(JSON.stringify(parseJwt(idToken)));
            sessionStorage.setItem('token', JSON.stringify(parseJwt(idToken)))
        })
        .catch(function (error) {
            // Handle error
        });
}

// parse JWT token
const parseJwt = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};