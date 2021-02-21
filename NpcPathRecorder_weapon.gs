findplayer("Reo").addweapon(this.name);

function onActionServerSide(data, sleepTime) {
  // echo("X" SPC data[0][0][0] SPC "Y" SPC data[0][0][1]);

  temp.newNpc = putnpc2(data[0][0][0], data[0][1][1], "");

  newNpc.join("personal_reo_pathnpc");
  newNpc.replayMovement(data, sleepTime);
}

//#CLIENTSIDE

function onCreated() {
  this.recording = false;
  this.pathData = {};

  this.fps = 16;
  this.sleepTime = 1 / this.fps;
}

function replayMovement() {
  triggerServer("gui", this.name, {this.pathData}, this.sleepTime);
}

function onPlayerChats() {
  temp.sleepTime = this.sleepTime;

  switch (player.chat) {
    case ">record":
      this.recording = true;

      while (this.recording) {
        this.pathData.add({player.x, player.y, player.ani, player.dir});
        sleep(sleepTime);
      }

      break;
    case ">stoprecord":
      replayMovement();

      this.pathData = {};
      this.recording = false;
      break;
  }
}
