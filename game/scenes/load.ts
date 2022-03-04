import { Scene } from "phaser";

import { PROGRESS_BAR, SCENES } from "../constants";
import { WebFontFile } from "../loaders";

export class LoadScene extends Scene {
  private progressBar!: Phaser.GameObjects.Sprite;

  preload() {
    const { centerX, centerY } = this.cameras.main;
    this.progressBar = this.add.sprite(centerX, centerY, PROGRESS_BAR);
    this.progressBar.setOrigin(0);
    this.load.setCORS("Anonymous");
    this.load.on("progress", this.onLoadProgress, this);
    this.load.once("complete", this.onLoadComplete, this);

    /**
     * Load fonts
     */
    this.load.addFile(new WebFontFile(this.load, "Rancho"));
  }

  onLoadProgress(value: number) {
    this.progressBar.setScale(value, 1);
  }

  onLoadComplete() {
    this.load.off("progress", this.onLoadProgress);
    this.scene.start(SCENES.MAIN);
  }
}
