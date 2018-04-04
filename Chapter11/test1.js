//Connnection parameters
var awsIot = require('aws-iot-device-sdk');
var device = awsIot.device({
   keyPath: '0123456789-private.pem.key',
  certPath: '0123456789-certificate.pem.crt',
    caPath: 'root-CA.crt',
  clientId: 'myThingy',
    region: 'us-east-1',
      host: 'abcdefghijklm.iot.us-east-1.amazonaws.com'
});
//Connection parameters end

//Device Object
device
.on('connect', function () {
console.log('Yaaa! We are connected!');
});
