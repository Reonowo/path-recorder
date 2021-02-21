function onCreated() {
  showcharacter();

  this.head = "head0.png";

  this.colors[0] = "orange";
  this.colors[1] = "white";
  this.colors[2] = "blue";
  this.colors[3] = "red";
  this.colors[4] = "black";

  this.shield = "no-shield.png";

  this.dir = 2;

  this.ani = "idle";
}

public function replayMovement(data, sleepTime) {
  // echo("LEN:" SPC data[0].size());
  this.chat = "Replaying";

  for (temp.movedata : data[0]) {
    this.ani = movedata[2];
    this.dir = movedata[3];

    this.x = movedata[0];
    this.y = movedata[1];

    sleep(sleepTime);
  }

  this.chat = "Done!";

  sleep(2);

  destroy();
}

function onPlayerChats() {
  if (player.chat == ":destroy") {
    this.destroy();
  }
}
