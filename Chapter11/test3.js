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
device.subscribe('Topic0');
console.log('Subscribed to Topic');
var msg = "Hello from IoT Device!";
      device.publish('Topic0', msg);
      console.log ("Publishing message: "+msg);
});

device
.on('message', function (topic, payload) {
console.log('Received following message: ', topic, payload.toString());
});

