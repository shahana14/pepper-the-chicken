function update() {
  if (currentState == states.playing) {
      obstacles.update();
  }
  ground.update();
  chicken.update();
}
