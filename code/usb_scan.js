
var usb = require('usb');
//console.log("hello");

var interfaceNum = 0;
var devices = usb.getDeviceList();
term = usb.findByIds(4227, 5692);
//console.log(term.configDescriptor.interfaces);
 
 
 function tes(){
console.log("hello there");
}


term.open();
interface = term.interface(interfaceNum);
//console.log(interface.endpoints);
interface.claim();

var endpoints = term.interfaces[0].endpoints,
inEndpoint = endpoints[0],
outEndpoint = endpoints[1];

console.log(inEndpoint);
console.log(outEndpoint);

inEndpoint.transferType = 2;
inEndpoint.startPoll(1, 64);

inEndpoint.transfer(64, function (error, data) {
    if (!error) {
        console.log(data);
    } else {
        console.log(error);
    }
});
inEndpoint.on('data', function (data) {
    console.log(data);
});




//console.log(devices);
//https://www.npmjs.com/package/usb
//https://www.npmjs.com/browse/keyword/usb
//https://www.npmjs.com/package/easyusb
//https://stackoverflow.com/questions/22695614/how-to-send-data-to-usb-device-in-node-js-using-libusb

/*
var device = devices[0];
device.open();
*/

/*
D:\Anju\NodeJS>node usb_write.js
12
Vendor Id: 10007
Product Id: 65344
-------------
Vendor Id: 4227
Product Id: 5692
-------------
Vendor Id: 1614
Product Id: 49416
Vendor Id: 1226
Product Id: 97
Vendor Id: 1008
Product Id: 5917
Vendor Id: 32902
Product Id: 10554
Vendor Id: 32902
Product Id: 10556
Vendor Id: 32902
Product Id: 10550
Vendor Id: 32902
Product Id: 10549
Vendor Id: 32902
Product Id: 10551
Vendor Id: 32902
Product Id: 10548
Vendor Id: 32902
Product Id: 10552

*/