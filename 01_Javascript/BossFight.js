import FireBall from "./FireBall.js";

export default class BossFight {
  constructor(
    userHealth,
    userSpeed,
    bossHealth,
    bossFireSpeed,
    bossFireBallSpeed
  ) {
    this.bossFightBool = false;

    //-------User stats
    this.userX = -430;
    this.userY = 0;
    this.userSpeed = userSpeed;
    this.userHealth = userHealth;

    //For setting the width of the life Box
    this.userLifeBox = this.userHealth;

    //-------Boss stats
    this.bossX = 390;
    this.bossY = 0;
    //Boss Health
    this.bossHealth = bossHealth;
    //
    this.bossSpeed = 15;
    //
    //Boss Object Amount / Boss Fire Speed
    this.bossFireSpeed = bossFireSpeed;
    //Boss Object Speed / Boss Fire Ball Speed
    this.bossFireBallSpeed = bossFireBallSpeed;
    //For setting the width of the life Box
    this.bossLifeBox = this.bossHealth;
    // Object Damage

    //
    this.bossPose = loadImage("00_Links/09_bossFight/boss_normalpose.png");
    this.bossNormalPose = loadImage(
      "00_Links/09_bossFight/boss_normalpose.png"
    );
    this.bossHurtPose = loadImage("00_Links/09_bossFight/boss_hurtpose.png");
    this.bossfightPose = loadImage("00_Links/09_bossFight/boss_fightpose.png");
    //
    this.counterNextFireball = 0;
    this.fireNextFireBall = false;
    this.fireBall = new FireBall(this.bossX, this.bossY);
    this.fireballArray = [];

    //Poses
    this.changeToFightPose = false;
    this.holdBossPose = false;
    this.holdBossPoseCounter = 0;
  }

  //-----------------------------------------------------------------------------------------User
  displayUserHealth() {
    //User Life (Standard 100)
    //Max 200 Life
    stroke(255, 165, 255);
    line(450, -250, -450, -250);

    fill(255);
    stroke(255, 165, 255);
    strokeWeight(3);
    //Box width is set in the constructor
    rect(-450, -260, 100 + this.userLifeBox, 20, 5);

    noStroke();
    fill(255, 165, 255);
    rect(-450, -260, 100 + this.userHealth, 20, 5);
  }

  userControl() {
    //The -310 is the middle of the screen (620/2)
    this.userY = this.userY + (mouseY - this.userY - 310) / this.userSpeed;

    if (this.userY > 195) {
      this.userY = 195;
    }
    if (this.userY < -180) {
      this.userY = -180;
    }

    //------------TESTING: HITBOX
    stroke(0);
    rect(-450, -65 + this.userY, 35, 125);
  }

  displayUser() {
    translate(this.userX, this.userY);
    scale(0.32);
  }

  //-----------------------------------------------------------------------------------------Boss
  displayBossHealth() {
    //Boss Life (Standard 100)
    //Max 300 Life
    stroke(0);
    line(450, 250, -450, 250);

    fill(255);
    stroke(0);
    strokeWeight(3);
    //Box weight is set in the constructor
    //Special: The minus-value doesn't look well on the stroke, so the stroke has to be moved to the left / to the right
    rect(350 - this.bossHealth, 240, 100 + this.bossHealth, 20, 5);

    noStroke();
    fill(0);
    rect(450, 240, -100 - this.bossHealth, 20, 5);
  }

  bossControl() {
    //Boss follows this.userY
    this.bossY = this.bossY + (this.userY - this.bossY) / this.bossSpeed;

    if (this.bossY > 150) {
      this.bossY = 150;
    }
    if (this.bossY < -155) {
      this.bossY = -155;
    }
  }

  displayBoss() {
    image(
      this.bossPose,
      this.bossX,
      this.bossY,
      this.bossPose.width / 2.5,
      this.bossPose.height / 2.5
    );
  }

  displayFireBalls() {
    //Defines, how fast a new Fireball is pushed into the array
    this.counterNextFireball += this.bossFireSpeed;

    if (this.counterNextFireball > 1500) {
      this.fireNextFireBall = true;

      //Pushes a new Fireball into the Array and sets the counter to 0 again
      if (this.fireNextFireBall === true) {
        this.fireballArray.push(
          new FireBall(this.bossX, this.bossY, this.bossFireBallSpeed)
        );
        this.changeToFightPose = true;
        this.counterNextFireball = 0;
        this.fireNextFireBall = false;
      }
    }

    //Displays every new Fireball
    for (let i = 0; i < this.fireballArray.length; i++) {
      this.fireballArray[i].displayRandomFireBalls();
    }
  }

  switchBossImages() {
    //Changes the boss poses (Normal, Hit, Hurt)
    if (this.changeToFightPose === true) {
      this.bossPose = this.bossfightPose;
      this.holdBossPose = true;
    } else if (this.changeToHurtPose === true) {
      this.bossPose = this.bossHurtPose;
      this.holdBossPose = true;
    } else {
      this.bossPose = this.bossNormalPose;
    }
    //Holds the pose til counter is over
    if (this.holdBossPose === true) {
      this.holdBossPoseCounter += 2;
      if (this.holdBossPoseCounter > 28) {
        this.changeToFightPose = false;
        this.changeToHurtPose = false;
        this.holdBossPose = false;
        this.holdBossPoseCounter = 0;
      }
    }
  }
}
