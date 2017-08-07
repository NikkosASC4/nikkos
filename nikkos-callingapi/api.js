var yourID = '524901';
var yourKey = '4ea0f26057fee4141d895067759bfd1d';
var theURL = 'api.openweathermap.org/data/2.5/weather?q=' + yourID + '&appKey=' + yourKey;
$.ajax({
   url: theURL,
   success: function(data) {
       var food = data.hits[1];
       var name = food.fields.item_name;
       var cals = food.fields.nf_calories;
       $('body').append("<h2> This " + name + " has " + cals + "kcals !!!</h2>")
   }
})