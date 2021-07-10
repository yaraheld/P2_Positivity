import { duper, duperBold } from "./main.js";
import TextAnimation from "./TextAnimation.js";
import TextAnimationWithMultipleSentences from "./TextAnimationWithMultipleSentences.js";
import WeiterButton from "./weiterButton.js";

export default class ShowEndScreen {
  constructor() {
    this.winButton = loadImage("00_Links/10_winLoseScreen/winButton.png");
    this.loseButton = loadImage("00_Links/10_winLoseScreen/loseButton.png");
    this.evilMentorWinIMage = loadImage(
      "00_Links/10_winLoseScreen/boss_win.png"
    );

    this.firstTipp = new TextAnimationWithMultipleSentences(
      0,
      -200,
      19,
      25,
      1.5,
      color(61, 18, 117),
      "TIPP:",
      duperBold,
      "Manche Antworten klingen zwar motivierend, sind letztendlich aber nicht wirklich nützlich.",
      duper,
      "oder unterdrücken (negative) Emotionen. Das nennt man dann „toxische Positivität“ (=> lila Aura).",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    );

    this.secondTipp = new TextAnimationWithMultipleSentences(
      0,
      -85,
      19,
      25,
      1,
      color(61, 18, 117),
      "NOCH EIN TIPP:",
      duperBold,
      "Es gibt bei einigen positiven Antworten (=> grüne Aura) Items, die deine Skills besonders pushen.",
      duper,
      "Z. B. machen dich die Schuhe besonders schnell, der Harnisch & der Helm geben dir besonders viel Leben,",
      "das Schild bietet viel Schutz und die Waffe sorgt für einen starken Angriffswert.",
      "",
      "",
      "",
      "",
      "",
      ""
    );

    this.thirdTipp = new TextAnimationWithMultipleSentences(
      0,
      55,
      19,
      25,
      1,
      color(61, 18, 117),
      "LETZTER TIPP:",
      duperBold,
      "Wenn eine graue Aura nach einer Antwort erscheint, ist man der Konversation aus dem Weg gegangen",
      duper,
      "oder war nicht wirklich an der Konversation interessiert. Wenn dagegen eine rot-orangene Aura erscheint,",
      "hat man den NPC verärgert. Alle nicht-positiven Antworten erhöhen übrigens",
      "die Skills des Endbosses unterschiedlich stark.",
      "",
      "",
      "",
      "",
      ""
    );

    //Button Tipps
    this.tippsButton = new WeiterButton(-100, 150);
    this.tippsButton.buttonText.firstSentence = "TIPPS";
    this.tippsButton.buttonText.x = -127;

    //Button Menu
    this.menueButton = new WeiterButton(100, 150);
    this.menueButton.buttonText.firstSentence = "MENÜ";
    this.menueButton.buttonText.x = 68;

    //Button zurück
    this.zurueckButton = new WeiterButton(0, 230);
    this.zurueckButton.buttonText.firstSentence = "ZURÜCK";
    this.zurueckButton.buttonText.x = -42;

    this.showtipps = false;
    this.fadeInFont = 0;

    this.loserText = new TextAnimation(
      duperBold,
      20,
      color(61, 18, 117),
      "Vielleicht waren mehr richtige Antworten nötig, um den Mentor zu besiegen...",
      0,
      80,
      1
    );

    this.winnerText = new TextAnimation(
      duperBold,
      20,
      color(61, 18, 117),
      "Du hast den Mentor besiegt! Du bist ein echter Positivitätsmagier!",
      0,
      80,
      1
    );
  }

  //------WINNER
  displayWinnerScreen() {
    if (this.showtipps === false) {
      //White Background
      fill(255);
      noStroke();
      rect(-550, -310, 1100, 620);

      //Button
      image(
        this.winButton,
        0,
        -30,
        this.winButton.width,
        this.winButton.height
      );

      push();
      textAlign(CENTER);
      this.winnerText.typeWriter();
      pop();
    }
  }

  displayUser() {
    if (this.showtipps === false) {
      translate(0, -145);
      scale(0.45);
    }
  }

  //-------LOSER
  displayLoserScreen() {
    if (this.showtipps === false) {
      //White Background
      fill(255);
      noStroke();
      rect(-550, -310, 1100, 620);

      //Button
      image(
        this.loseButton,
        0,
        -30,
        this.loseButton.width,
        this.loseButton.height
      );

      //Evil Mentor
      image(
        this.evilMentorWinIMage,
        10,
        -142,
        this.evilMentorWinIMage.width,
        this.evilMentorWinIMage.height
      );
      push();
      textAlign(CENTER);
      this.loserText.typeWriter();
      pop();
    }
  }

  displayTippsButton() {
    if (this.showtipps === false) {
      this.tippsButton.fadeIn();
      this.tippsButton.displayActiveOrSleeping();
      this.tippsButton.displayButtonSentence();
    }
  }

  tippsButtonClick() {
    if (this.showtipps === false) {
      //returns true when it is clicked in the correct area
      return this.tippsButton.click();
    }
  }

  showTipps() {
    this.showtipps = true;
  }

  //-----TIPPS SCREEN
  displayTipps() {
    if (this.showtipps === true) {
      //Fade in
      this.fadeInFont += 10;
      if (this.fadeInFont > 255) {
        this.fadeInFont = 255;
      }
      //Have to fade in manually
      this.firstTipp.first.textColor = color(61, 18, 117, this.fadeInFont);
      this.firstTipp.second.textColor = color(61, 18, 117, this.fadeInFont);
      this.firstTipp.third.textColor = color(61, 18, 117, this.fadeInFont);

      this.secondTipp.first.textColor = color(61, 18, 117, this.fadeInFont);
      this.secondTipp.second.textColor = color(61, 18, 117, this.fadeInFont);
      this.secondTipp.third.textColor = color(61, 18, 117, this.fadeInFont);
      this.secondTipp.fourth.textColor = color(61, 18, 117, this.fadeInFont);

      this.thirdTipp.first.textColor = color(61, 18, 117, this.fadeInFont);
      this.thirdTipp.second.textColor = color(61, 18, 117, this.fadeInFont);
      this.thirdTipp.third.textColor = color(61, 18, 117, this.fadeInFont);
      this.thirdTipp.fourth.textColor = color(61, 18, 117, this.fadeInFont);
      this.thirdTipp.fifth.textColor = color(61, 18, 117, this.fadeInFont);

      push();
      textAlign(CENTER);
      this.firstTipp.sentences();
      this.firstTipp.displayAllTextAtOnce();
      this.secondTipp.sentences();
      this.secondTipp.displayAllTextAtOnce();
      this.thirdTipp.sentences();
      this.thirdTipp.displayAllTextAtOnce();
      pop();
    }
  }

  displayTippsBackButton() {
    if (this.showtipps === true) {
      this.zurueckButton.fadeIn();
      this.zurueckButton.displayActiveOrSleeping();
      this.zurueckButton.displayButtonSentence();
    }
  }

  backButtonClick() {
    if (this.showtipps === true) {
      //returns true when it is clicked in the correct area
      return this.zurueckButton.click();
    }
  }

  dontShowTipps() {
    this.showtipps = false;
    this.fadeInFont = 0;
  }

  displayMenuButton() {
    if (this.showtipps === false) {
      this.menueButton.fadeIn();
      this.menueButton.displayActiveOrSleeping();
      this.menueButton.displayButtonSentence();
    }
  }
  menuButtonClick() {
    if (this.showtipps === false) {
      //returns true when it is clicked in the correct area
      return this.menueButton.click();
    }
  }
}
