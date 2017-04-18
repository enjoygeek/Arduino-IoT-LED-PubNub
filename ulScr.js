
    var pubnub = new PubNub({
        subscribeKey: 'sub-c-29dc5a18-243e-11e7-9093-0619f8945a4f',
        publishKey: 'pub-c-73a66b79-db48-4406-ba09-afaf534db6f4'
    });

    var channel = "led_click";

    var btn = document.getElementById("btn");
    var blinkState = true;



btn.addEventListener("click", function(e){

    pubnub.publish({
        channel: channel,
        message:{blink: blinkState},
    },
    function(m){
        console.log(m);
        blinkState =!blinkState;
        btn.textContent = (blinkState)? 'Click':"Disclick";
    });

});
