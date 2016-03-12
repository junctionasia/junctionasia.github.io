function send_mail(){
    mail_address = $('input[id=form_email]').val();
    $('input[id=form_email]').val("");
    url = "http://ec2-52-192-39-102.ap-northeast-1.compute.amazonaws.com/mail?body=" + mail_address;
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
