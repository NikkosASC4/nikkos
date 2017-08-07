var counter = 1;
$("document").ready(function() {
    imgClickAndChange.onclick = function(){
    if(counter == 0){
        document.getElementById("imgClickAndChange").src = "http://cdn2-www.dogtime.com/assets/uploads/2011/03/cute-dog-names.jpg";
        counter++;

    }
    else if(counter == 1){
        document.getElementById("imgClickAndChange").src = "https://i.ytimg.com/vi/sfA0tZgtSeg/maxresdefault.jpg";
        counter++;

    }
    else if(counter == 2){
        document.getElementById("imgClickAndChange").src = "http://i2.kym-cdn.com/photos/images/facebook/001/232/748/392";
        $(document.body).append('GOTEM');
        $(document.body).append(' YALL JUST GOT GOT');
        counter = 0;
    }
    };
});

//called when successful user log in
function onSignIn(googleUser) {
    console.log('User signed in!');
    var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile
    $(".userName").text(profile.getName());
    $("img").attr("src", profile.getImageUrl());
    $(".email").text(profile.getEmail());
}

//called when "sign out" button clicked
function onSignOut() {
    //should sign user out and toggleHidden
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.')
        //setting back to default
        $(".userName").text("USER_NAME");
        $("img").attr("src", "assets/placeholder.png");
        $(".email").text("example@example.com");
    });
}