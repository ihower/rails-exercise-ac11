App.messages = App.cable.subscriptions.create("MessagesChannel", {
  connected: function() {
    console.log("連上囉!")
  },
  disconnected: function() {
    console.log("斷線了!")
  },
  speak: function(content){
    this.perform("speak", { content: content } );
  },
  received: function(data) {
    console.log("收到資料: ");
    console.log(data);
    var content = data["message"]["content"];
    $("#message-list").prepend("<li>" + content + "</li>");
    $("#message_content").val("");
  }
});
