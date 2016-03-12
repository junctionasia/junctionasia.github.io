function appendRow(){
    var email = $('#form_email').val();
    function constructAtomXML(email){
        var atom = ["<?xml version='1.0' encoding='UTF-8'?>",
            '<entry xmlns="http://www.w3.org/2005/Atom" xmlns:gsx="http://schemas.google.com/spreadsheets/2006/extended">',
            '<gsx:e-mail>',email,'</gsx:name>',
            '</entry>'].join('');
        return atom;
    };

    token = "ya29.ogKUnoDsp6r9qm1_dhnZ9ThVjTWnoE-POUnr3UCpUBZp9SuJ7Kc4x6djfI00Ng4uOA"

    var params = constructAtomXML(email);
    spreadsheetId = '18zbjMH8OzeTaqWzeLEyEU2_bL7Xg9-dO844kF41SDNU';
    url = 'https://spreadsheets.google.com/feeds/list/'+spreadsheetId+'/default/private/full?alt=jsonp&access_token=' + token;

    var z = new XMLHttpRequest();
    z.open("POST", url, true);
    z.setRequestHeader("Content-type", "application/atom+xml");
    z.setRequestHeader("GData-Version", "3.0");
    z.setRequestHeader("Authorization", 'Bearer '+ token);
    z.setRequestHeader("Access-Control-Allow-Origin", "http://junctionasia.github.io/");
    z.onreadystatechange = function() {     //Call a function when the state changes.
        if(z.readyState == 4 && z.status == 200) {
            alert(z.responseText);
        }
    }
    z.send(params);
}


function send_mail(){
    //-------------------------------------------------------------------
    // JScript(WSH)でメール送信
    //-------------------------------------------------------------------
    // Gmailのアカウントを設定 (★以下を書き換えてください★)
    var gmail_user = "naoto.shibata510@gmail.com"; // Gmailのメールアドレス
    var gmail_pass = "060510shiba"; // Gmailのパスワード
    console.log('hhhhh');
    //-------------------------------------------------------------------
    // 送信内容の設定(★以下を書き換えてください★)
    var msg = WScript.CreateObject("CDO.Message");
    console.log('hhhhh');
    msg.From = gmail_user;        // 自分のメールアドレス
    msg.To   = "naoto.shibata510@gmail.com"; // 送り先のメールアドレス
    msg.Subject = "test";         // メールの件名
    msg.TextBody = "送信テストです。\nメールの送信テストです。\n";
    setGmailConfig(msg, gmail_user, gmail_pass);
    // 送信
    msg.Send();
    WScript.Echo("送信しました!!");
}

// Gmailで送信のための細かい設定を行う
function setGmailConfig(msg, user, pass) {
  msg.TextBodyPart.Charset = 'ISO-2022-JP';
  var setConfig = function (conf_obj) {
    var uri = 'http://schemas.microsoft.com/cdo/configuration/';
    for (var key in conf_obj) {
      msg.Configuration.Fields.Item(uri + key) = conf_obj[key];
    }
  }
  setConfig({
    'sendusing':2, 'smtpconnectiontimeout':30,
    'smtpserver': 'smtp.gmail.com', 'smtpserverport': 465,
    'smtpauthenticate': true, 'smtpusessl': true,
    'sendusername': user, 'sendpassword': pass
  });
  msg.Configuration.Fields.Update();
}