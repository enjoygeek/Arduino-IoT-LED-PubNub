var PubNub = require('pubnub');
var five = require('johnny-five'),
    board = five.Board();


pubnub = new PubNub({
    subscribeKey: 'sub-c-29dc5a18-243e-11e7-9093-0619f8945a4f',
    publishKey: 'pub-c-73a66b79-db48-4406-ba09-afaf534db6f4'
});
    var channel = 'led_click';
board.on('ready', function() {
    var led = new five.Led(13);

    pubnub.addListener({
        message:function(m){
            console.log(m.message.blink);
            if(m.message.blink === true){
                led.blink(500);
            }else{
                led.stop();
                led.off();
            }
        },
        status: function(s){
            console.log(s);
        }
    });

    console.log("Subscribing..");
        pubnub.subscribe({
            channels: [channel]
        });
});
