import React from 'react';
import {WebView} from 'react-native-webview';

const RemitaPaymentGateway = () =>{

let imagePath = { uri: 'https://remitademo.net/payment/v1/remita-pay-inline.bundle.js'}; 

const remitaCheckout = `<!DOCTYPE html>
<html lang="en">
<header><meta name="viewport" content="initial-scale=1.0" /></header>
<body onload="makePayment()">
<script>
function makePayment() 
{
var transactionId = new Date().getTime(); //transactionId
var email = 'diagboya@systemspecs.com.ng'; //email 
var currency = 'NGN'; //currency
var firstName = 'Iyare'; //firstName
var lastName = 'Diagboya'; //lastName
var customerId = 'diagboya@systemspecs.com.ng'; //customerId
var phoneNumber = '07031731478'; //phoneNumber
var narration = 'Koenigsegg Gemera'; //narration
var amount = '500'; //amount
//url
var demo = "https://remitademo.net";
// var live = "https://remita.net";
var path = "/payment/v1/remita-pay-inline.bundle.js";
var url = demo + path; 
var url2 = "https://remitademo.net/payment/v1/remita-pay-inline.bundle.js"; // url

var paymentEngine = RmPaymentEngine.init({
key:'QzAwMDAxOTUwNjl8NDMyNTkxNjl8ZTg0MjI2MDg4MjU0NzA2NTY2MTYwNGU1NjNiMjUzYjk4ZDQwZjljZGFiMTVmYTljMDUwMGQ0MDg2MjIyYjEyNTA1ZTE2MTMxNmE3ZjM1OTZmYmJkOTE2MTRiY2NmZTY5NTM4MGQ2MDBlZGJlZmM2ODc2YTc2M2M4MjgyZmFjODc=',
email: email,
currency: currency,
firstName: firstName,
lastName: lastName,
customerId: customerId,
phoneNumber: phoneNumber,
transactionId: transactionId,
narration: narration,
amount: amount,

onSuccess: function (response) {
console.log(JSON.stringify(response));
},
onError: function (response) {
console.log(JSON.stringify(response));
},
onClose: function () {
console.log("closed");
},
});
paymentEngine.openIframe();
}

</script id="helper" data-name="helper">
<script type="text/javascript" src= "https://remitademo.net/payment/v1/remita-pay-inline.bundle.js" \></script>
</body>
</html>`

return(<WebView
source={{ html: remitaCheckout }} 
javaScriptEnabled={true}
domStorageEnabled={true}
startInLoadingState={true}
/>)
}

export default RemitaPaymentGateway