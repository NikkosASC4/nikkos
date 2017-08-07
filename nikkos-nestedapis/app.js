$.ajax({
  url: 'https://randomuser.me/api/',
  // success: doIt(data)
}).done(function(data) {
  doIt(data)
});

var doIt = function(data) {
    var firstname = data.results[0].name.first;
    var lastname = data.results[0].name.last;
    var dob = data.results[0].dob;
    var email = data.results[0].email;
    var gender = data.results[0].gender;
    var location = data.results[0].nat;
    console.log(data.results[0]);
    $('body').append(firstname + " " + lastname + " " + dob + " "+ email + " " + gender);

     secondAPI(location);
  }

var secondAPI = function(nat) {
    $.ajax({
      url: 'https://restcountries.eu/rest/v2/alpha/' + nat,
    }).done(function(data) {
           console.log(data);
           var country = data.name;
    $('body').append(" " + country)
    })
}