import consumer from "./consumer"

consumer.subscriptions.create("ActivityChannel", {
  connected() {
    this.perform("appear")
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log(data)
    let elements = document.getElementsByClassName(`user-${data.user_id}-status`);

    for (var i = 0; i < elements.length; i++) {
      if(data.status == 'online') {
        elements[i].classList.add('online');
      }
      else {
        elements[i].classList.remove('online');
      }
    }
  }
  
});
