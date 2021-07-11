import FireBall from "./FireBall.js";
import CountDownToEndbossFight from "./CountdownToEndbossFight.js";
import ExplosionToxic from "./ExplosionToxic.js";
import ExplosionPositive from "./ExplosionPositive.js";
import { duper, duperBold } from "./main.js";

export default class BossFight {
  constructor(
    userHealth,
    userSpeed,
    //UserDamage / Positivity / Attack
    userDamage,
    userShield,
    bossHealth,
    bossFireBallDamage,
    bossFireSpeed,
    bossFireBallSpeed
  ) {
    this.countDownToEndbossFight = new CountDownToEndbossFight(0, 0);
    this.bossFightBool = false;

    //-------User stats
    this.userX = -430;
    this.userY = 0;
    this.userSpeed = userSpeed;
    this.userHealth = userHealth;
    this.userDamage = userDamage;
    this.userShield = userShield;

    //For setting the width of the life Box
    this.userLifeBox = this.userHealth;

    //-------Boss stats
    this.bossX = 390;
    this.bossY = 0;

    //
    this.bossSpeed = 15;
    //
    //Boss Health
    this.bossHealth = bossHealth;
    //Boss Object Amount / Boss Fire Speed
    this.bossFireSpeed = bossFireSpeed;
    //Boss Object Speed / Boss Fire Ball Speed
    this.bossFireBallSpeed = bossFireBallSpeed;
    // Object Damage / Boss fire ball damage
    this.bossFireBallDamage = bossFireBallDamage;
    //For setting the width of the life Box
    this.bossLifeBox = this.bossHealth;

    //
    this.bossPose = loadImage("00_Links/09_bossFight/boss_normalpose_.png");
    this.bossNormalPose = loadImage(
      "00_Links/09_bossFight/boss_normalpose_.png"
    );
    this.bossHurtPose = loadImage("00_Links/09_bossFight/boss_hurtpose_.png");
    this.bossfightPose = loadImage("00_Links/09_bossFight/boss_fightpose_.png");
    //
    //Fires instantly after Timer
    this.counterNextFireball = 1500;
    this.fireNextFireBall = true;
    //
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

    //Explosion
    // this.toxicExplosion = new Explosion();
    // this.positiveExplosion = new Explosion();
    this.toxicExplosions = [];
    this.positiveExplosions = [];
    this.pushPositiveJustOnce = true;
    this.pushToxicJustOnce = true;
    this.positiveCounter = 0;
    this.toxicCounter = 0;

    //State if you won or losed
    this.winnerState = "none";

    //Fades into White
    this.fadeIntoEndScreen = 0;
    this.showEndScreen = false;
  }

  countDown() {
    this.countDownToEndbossFight.countDown();
  }

  //-----------------------------------------------------------------------------------------User
  displayUserHealth() {
    //User Life (Standard 100)
    //Max 200 Life
    stroke(255, 165, 255);
    line(450, -230, -450, -230);

    fill(255);
    stroke(255, 165, 255);
    strokeWeight(2);
    //Box width is set in the constructor
    rect(-450, -260, this.userLifeBox, 20, 5);

    noStroke();
    fill(255, 165, 255);
    rect(-450, -260, this.userHealth, 20, 5);
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
    // stroke(0);
    // rect(-450, -65 + this.userY, 35, 125);
  }

  displayUser() {
    translate(this.userX, this.userY + 10);
    scale(0.55);
  }

  //-----------------------------------------------------------------------------------------Boss
  displayBossHealth() {
    //Boss Life (Standard 100)
    //Max 300 Life
    stroke(0);
    line(450, 230, -450, 230);

    fill(255);
    stroke(0);
    strokeWeight(2);
    //Box weight is set in the constructor
    //Special: The minus-value doesn't look well on the stroke, so the stroke has to be moved to the left / to the right
    rect(450 - this.bossLifeBox, 240, this.bossLifeBox, 20, 5);

    noStroke();
    fill(0);
    rect(450, 240, -this.bossHealth, 20, 5);
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
      this.bossPose.width,
      this.bossPose.height
    );
  }

  displayFireBalls() {
    if (this.countDownToEndbossFight.timeIsOver === true) {
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
      this.holdBossPoseCounter += 4;
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

  //Colliosion, Explosions, End of Life
  pointOnRectangleAndCollision() {
    for (let i = 0; i < this.fireballArray.length; i++) {
      //Delete Fireballs outside

      //For loop to check every fireball
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

      // //Visualization
      // stroke(255, 255, 0);
      // line(
      //   this.pointOnRectangleX,
      //   this.pointOnRectangleY,
      //   this.fireballArray[i].fireballX - 135,
      //   this.fireballArray[i].fireballY - 55
      // );

      //Collision between Rectangle and circle
      //Didn`t work with extra method below, because this.pointOnRectangleX & this.pointOnRectangleY weren't updated
      //calulate distance between point on Rectangle & position of fireball 2 points:
      //by using the dist() function from p5
      this.distanceBetweenRectAndCircle = dist(
        this.pointOnRectangleX,
        this.pointOnRectangleY,
        this.fireballArray[i].fireballX - 135,
        this.fireballArray[i].fireballY - 55
      );

      // if (this.fireballArray[0].fireBallX < 300) {
      //   console.log(this.fireballArray[0].fireBallX);
      // }

      //actual Collision
      if (this.distanceBetweenRectAndCircle < 27.5) {
        if (this.fireballArray[i].fireBallType === "positive") {
          if (this.pushPositiveJustOnce === true) {
            console.log("PositiveHit");
            this.positiveExplosions.push(
              new ExplosionPositive(this.bossX, this.bossY)
            );

            //Boss is hit
            this.bossHealth = this.bossHealth - this.userDamage;
            //+100 is Standard
            if (this.bossHealth + 100 < 0) {
              this.bossHealth = -100;
            }

            this.fireballArray.splice(i, 1);
            this.pushPositiveJustOnce = false;
          }
        } else if (this.fireballArray[i].fireBallType === "toxic") {
          console.log("-");
          if (this.pushToxicJustOnce === true) {
            this.toxicExplosions.push(
              new ExplosionToxic(
                //480(GIF width)/2.5(scale)/2(GIF Center)=96(GIF Position) + corrigated
                this.fireballArray[i].fireballX - 140,
                //373(GIF width)/2.5(scale)/2(GIF Center)=96(GIF Position)+ corrigated
                this.fireballArray[i].fireballY - 55
              )
            );

            //User is hit + Shield
            //Proofs, if shield value is not greater then damage
            //(otherwise the user would gain health with each toxic hit)
            if (this.bossFireBallDamage - this.userShield >= 0) {
              this.userHealth =
                this.userHealth - (this.bossFireBallDamage - this.userShield);
            }

            //+100 is Standard
            if (this.userHealth + 100 < 0) {
              this.userHealth = -100;
            }

            //Delete fireball and make shure just one explosion is pushed
            this.fireballArray.splice(i, 1);
            this.pushToxicJustOnce = false;
          }
        }
      }
    }
  }

  displayPositiveHits() {
    for (let i = 0; i < this.positiveExplosions.length; i++) {
      this.positiveExplosions[i].explosionPositive();
      if (this.positiveExplosions[i].end === true) {
        this.positiveExplosions.shift();
      }

      //Counter to avoid double pushes when moved too fast
      if (this.pushPositiveJustOnce === false) {
        this.positiveCounter += 1;
        if (this.positiveCounter > 5) {
          this.positiveCounter = 0;
          this.pushPositiveJustOnce = true;
        }
      }
    }
  }

  displayToxicHits() {
    for (let i = 0; i < this.toxicExplosions.length; i++) {
      this.toxicExplosions[i].explosionToxic();
      if (this.toxicExplosions[i].end === true) {
        this.toxicExplosions.shift();
      }
      //Counter to avoid double pushes when moved too fast
      if (this.pushToxicJustOnce === false) {
        this.toxicCounter += 1;
        if (this.toxicCounter > 5) {
          this.toxicCounter = 0;
          this.pushToxicJustOnce = true;
        }
      }
    }
  }

  deleteFireBallsOutside() {
    for (let i = 0; i < this.fireballArray.length; i++) {
      if (this.fireballArray[i].fireballX < -500) {
        this.fireballArray.shift();
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

  displayUserParameter(
    userHealthParameter,
    userSpeedParameter,
    userPositivtyParameter,
    userShieldParameter
  ) {
    //Conclusion: Extra parameter plus standard parameter
    let userHealthParameterInsg = 100 + userHealthParameter;
    let userSpeedParameterInsg = 4 + userSpeedParameter;
    let userPositivtyParameterInsg = 10 + userPositivtyParameter;
    let userShieldParameterInsg = 0 + userShieldParameter;

    fill(61, 18, 117, 100);
    textSize(15);
    textFont(duper);
    text(
      "INSG.:  Leben: " +
        userHealthParameterInsg +
        "/200  |  Speed: " +
        userSpeedParameterInsg +
        "/40  |  Angriff: " +
        userPositivtyParameterInsg +
        "/90  |  Schild: " +
        userShieldParameterInsg +
        "/52",
      -450,
      -269
    );
  }

  displayBossParameter(
    bossHealthParameter,
    bossObjectDamageParameter,
    bossObjectAmountParameter,
    bossObjectSpeedParameter
  ) {
    //Conclusion: Extra parameter plus standard parameter
    let bossHealthParameterInsg = 100 + bossHealthParameter;
    let bossObjectDamageParameterInsg = 10 + bossObjectDamageParameter;
    let bossObjectAmountParameterInsg = 30 + bossObjectAmountParameter;
    let bossObjectSpeedParameterInsg = 10 + bossObjectSpeedParameter;
    fill(0, 100);
    textSize(15);
    textFont(duper);
    text(
      "INSG.:  Leben: " +
        bossHealthParameterInsg +
        "/300  |  Speed: " +
        bossObjectDamageParameterInsg +
        "/98  |  Angriff: " +
        bossObjectAmountParameterInsg +
        "/102  |  Schild: " +
        bossObjectSpeedParameterInsg +
        "/30",
      65,
      280
    );
  }

  winOrLose() {
    //WIN OR LOSE
    if (this.userHealth <= 0) {
      this.userHealth = 0;
      this.winnerState = "verloren";
    } else if (this.bossHealth <= 0) {
      this.bossHealth = 0;
      this.winnerState = "gewonnen";
    }
  }

  winOrLoseFade() {
    if (this.winnerState === "verloren" || this.winnerState === "gewonnen") {
      console.log("Verloren oder gewonnen");
      //Fires no Balls
      this.counterNextFireball = 0;
      this.fireNextFireBall = false;

      //Fades into White
      this.fadeIntoEndScreen += 3;
      if (this.fadeIntoEndScreen > 255) {
        this.fadeIntoEndScreen = 255;
        this.showEndScreen = true;
      }
      fill(255, this.fadeIntoEndScreen);
      noStroke();
      rect(-550, -310, 1100, 620);
    }
  }
}
