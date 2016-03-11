function appendRow(){
    var email = $('#form_email').val();
    function constructAtomXML(email){
        var atom = ["<?xml version='1.0' encoding='UTF-8'?>",
            '<entry xmlns="http://www.w3.org/2005/Atom" xmlns:gsx="http://schemas.google.com/spreadsheets/2006/extended">',
            '<gsx:e-mail>',email,'</gsx:name>',
            '</entry>'].join('');
        return atom;
    };

    token = "ya29.ogKXckmQKBsYM_oXBwoh8S0fCAmTpWhqXrqlE_7IWepleIzOALIfOxsqQx_Hzp_epQ"

    var params = constructAtomXML("foo");
    spredsheetId = '18zbjMH8OzeTaqWzeLEyEU2_bL7Xg9-dO844kF41SDNU';
    url = 'https://spreadsheets.google.com/feeds/list/'+spredsheetId+'/default/private/full?alt=json&access_token=' + token;

    var z = new XMLHttpRequest();
    z.open("POST", url, true);
    z.setRequestHeader("Content-type", "application/atom+xml");
    z.setRequestHeader("GData-Version", "3.0");
    z.setRequestHeader("Authorization", 'Bearer '+ token);
    z.onreadystatechange = function() {//Call a function when the state changes.
        if(z.readyState == 4 && z.status == 200) {
            alert(z.responseText);
        }
    }
    z.send(params); 
}