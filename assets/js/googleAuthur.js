// 987808496131-q8j0mft59plokscfnr1h6cvgrjdpvpbn.apps.googleusercontent.com
// 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

// Load the Google Sign-In API library
gapi.load('auth2', function () {
    gapi.auth2.init({
        client_id: '987808496131-q8j0mft59plokscfnr1h6cvgrjdpvpbn.apps.googleusercontent.com', // Replace with your client ID
        scope: 'profile email'
    }).then(function () {
        // Get the current user's profile information
        var profile = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();

        // Print the user's profile information
        console.log('ID: ' + profile.getId());
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
    });
});

function onSignIn(googleUser) {
    // Get the user's ID token and basic profile information
    var id_token = googleUser.getAuthResponse().id_token;
    var profile = googleUser.getBasicProfile();

    // Print the user's profile information
    console.log('ID: ' + profile.getId());
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
}

