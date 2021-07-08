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

    this.jvhif = 0;
    this.jvhif2 = 0;
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
    this.fireBall = new FireBall(this.bossX, this.bossY, 10);
    this.fireballArray = [];

    //Poses
    this.changeToFightPose = false;
    this.holdBossPose = false;
    this.holdBossPoseCounter = 0;

    this.circleToRectPointX = 0;
    this.circleToRectPointY = 0;

    //Rectangle Circle collision
    this.pointOnRectangleX = 0;
    this.pointOnRectangleY = 0;

    this.distanceBetweenRectAndCircle = 0;
  }

  //-----------------------------------------------------------------------------------------User
  displayUserHealth() {
    //User Life (Standard 100)
    //Max 200 Life
    stroke(255, 165, 255);
    line(450, -230, -450, -230);

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

    if (this.userY > 175) {
      this.userY = 175;
    }
    if (this.userY < -160) {
      this.userY = -160;
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
    line(450, 230, -450, 230);

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
          new FireBall(
            this.bossX,
            this.bossY,
            this.bossFireBallSpeed,
            color(255, 255, 0)
          )
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

  checkRectangleSide(min, max, value) {
    //Does the whole magic
    if (value < min) {
      return min;
    } else if (value > max) {
      return max;
    } else {
      return value;
    }
  }

  pointOnRectangle() {
    //For loop to check every fireball
    for (let i = 0; i < this.fireballArray.length; i++) {
      this.pointOnRectangleX = this.checkRectangleSide(
        //Rectangle position x (left corner)
        -450,
        //Rectagle position x + width (right Corner)
        -450 + 35,
        //Position X of Circle (-110 is the corrected position. Origin: Boss. But Center of Boss pic isn't center of Ball)
        this.fireballArray[i].fireballX - 135
      );
      this.pointOnRectangleY = this.checkRectangleSide(
        //Rectangle position x (left corner) | Minimum
        -65 + this.userY,
        //Rectagle position x + width (right Corner) | Maximum
        -65 + this.userY + 125,
        //Position Y of Circle
        this.fireballArray[i].fireballY - 55
      );

      //Visualization
      stroke(255, 255, 0);
      line(
        this.pointOnRectangleX,
        this.pointOnRectangleY,
        this.fireballArray[i].fireballX - 135,
        this.fireballArray[i].fireballY - 55
      );

      // //Substract both positions (Fireball Position and Rectangle) to get endpoint
      // fill(0);
      // this.circleToRectPointX =
      //   this.pointOnRectangleX - this.fireballArray[i].fireballX;
      // this.circleToRectPoinY =
      //   this.pointOnRectangleY - this.fireballArray[i].fireballY;

      //Collision between Rectangle and circle
      //Didn`t work with extra method below, because this.pointOnRectangleX & this.pointOnRectangleY weren't updated

      for (let i = 0; i < this.fireballArray.length; i++) {
        //calulate distance between point on Rectangle & position of fireball 2 points:
        //by using the dist() function from p5
        this.distanceBetweenRectAndCircle = dist(
          this.pointOnRectangleX,
          this.pointOnRectangleY,
          this.fireballArray[i].fireballX - 135,
          this.fireballArray[i].fireballY - 55
        );
        console.log(this.fireballArray[i].fireballX - 135);
        if (this.distanceBetweenRectAndCircle < 27.5) {
          this.fireballArray[i].color = color(0);
        }
      }
    }
  }
  // collisionRectangleCircle() {
  //   //For loop to check every fireball collision
  //   for (let i = 0; i < this.fireballArray.length; i++) {
  //     //calulate distance between point on Rectangle & position of fireball 2 points:
  //     //by using the dist() function from p5
  //     this.distanceBetweenRectAndCircle = dist(
  //       this.pointOnRectangleX,
  //       this.pointOnRectangleY,
  //       this.fireballArray[i].fireballX - 135,
  //       this.fireballArray[i].fireballY - 55
  //     );
  //     console.log(this.fireballArray[i].fireballX - 135);
  //     if (this.distanceBetweenRectAndCircle < 27.5) {
  //       this.fireballArray[i].color = color(0);
  //     }
  //   }
  // }
}
