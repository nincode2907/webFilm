// 426280243211-t6efh54lc5cptlqtegl841pn4jh9qcq6.apps.googleusercontent.com
// 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
const googleWay = document.querySelector(".google_way")

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}

//

var googleUser = {};
var startApp = function () {
    gapi.load('auth2', function () {
        auth2 = gapi.auth2.init({
            client_id: '426280243211-t6efh54lc5cptlqtegl841pn4jh9qcq6.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
        });
        attachSignin(googleWay);
    });
};

function attachSignin(element) {
    auth2.attachClickHandler(element, {},
        function (googleUser) {
            document.getElementById('name').innerText = googleUser.getBasicProfile().getName();
        },
        function (error) {
            alert(JSON.stringify(error, undefined, 2));
        }
    );
}

startApp();