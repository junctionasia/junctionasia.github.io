function send_mail(){
    mail_address = $('input[id=form_email]').val();
    name = $('input[id=form_email]').val();
    country = $('input[id=name]').val();
    $('input[id=from_email]').val("");
    $('input[type=button]').val("Thank You");
    url = "http://ec2-52-192-39-102.ap-northeast-1.compute.amazonaws.com/mail?body=" + mail_address + "&name=" + name + "&country=" + country;
    $.ajax({
         url: url,
         dataType: 'json',
         async: true,
         complete: function(data){
           var data_json = data.responseText;
           return data_json;
         }
    });
}


$.getJSON('../country.json', function(json){
    countries = json.country;
    for (var i = countries.length - 1; i >= 0; i--) {
        $('select#country').append($('<option>').html(countries[i]).val(countries[i]));
    }
});
