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

var uuid = require('node-uuid');
var numbers = new Array(10);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Device Object
device
.on('connect', function () {
console.log('Yaaa! We are connected!');
device.subscribe('Topic0');
console.log('Subscribed to Topic');

for (var i = 0; i < numbers.length; i++)
    {
  for (var j = 0; j < numbers.length; j++)
     {
       numbers[i] = getRandomInt(0,1);
       uuid[i] = uuid.v4()
      }
      var msg = "{\"uuid\":\"" + uuid[i] + "\"" + "," +"\""+ "state\":" + numbers[i]+"}";
      device.publish('Topic0', msg);
      console.log ("Publishing message: "+uuid[i],numbers[i]);
   }

});

device
.on('message', function (topic, payload) {
console.log('Received following message: ', topic, payload.toString());
});

