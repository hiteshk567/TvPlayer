let isPlaying = false;

enum TvBrands {
  MI = "mi",
  Samsung = "samsung",
}

interface TV_Details {
  brand: string;
  size: sizeDetails;
  energyUsage: string;
  refreshRate: number;
  backLight: Light;
}

interface sizeDetails {
  width: string;
  height: string;
}

type Light = "ON" | "OFF";

// ----- Channel URLS --------------

let channels = {
  1: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  2: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  3: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  4: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  5: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  6: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  7: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  8: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  9: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
  10: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  11: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
  12: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
  13: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
  14: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  15: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  16: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  17: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  18: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  19: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  20: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  21: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  22: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  23: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
  24: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
  25: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
  26: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  27: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  28: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  29: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  30: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  31: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  32: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  33: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  34: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
  35: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  36: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
  37: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
  38: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
  39: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  40: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  41: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  42: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  43: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  44: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  45: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  46: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  47: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
  48: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  49: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
  50: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
};

// ------- Parent Class -----------

class TV_class {
  details: TV_Details;
  channel: number;
  volume: number;
  constructor(setDetails: TV_Details) {
    this.channel = 1;
    this.volume = 50;
    this.details = setDetails;
    let videoTag = <HTMLVideoElement>document.querySelector("#video");
    videoTag.style.width = this.details.size.width;
    videoTag.style.height = this.details.size.height;
    this.setChannel(this.channel);
    this.setVolume(this.volume);
    let leftChannel = <HTMLAreaElement>document.querySelector("#left");
    leftChannel.onclick = this.previousChannel();
    let rightChannel = <HTMLAreaElement>document.querySelector("#right");
    rightChannel.onclick = this.nextChannel();
    let upVolume = <HTMLAreaElement>document.querySelector("#top");
    upVolume.onclick = this.increaseVolume();
    let downVolume = <HTMLAreaElement>document.querySelector("#bottom");
    downVolume.onclick = this.decreaseVolume();
    let resetButton = <HTMLAreaElement>document.querySelector("#reset");
    resetButton.onclick = this.resetTv();
  }
  increaseVolume(): () => void {
    return () => {
      if (this.volume < 100) {
        this.setVolume(this.volume + 1);
      } else {
        console.log("Maximum volume is 50");
      }
    };
  }

  decreaseVolume(): () => void {
    return () => {
      if (this.volume > 0) {
        this.setVolume(this.volume - 1);
      } else {
        console.log("Minimum volume is 0");
      }
    };
  }
  previousChannel(): () => void {
    return () => {
      this.setChannel(this.channel - 1);
    };
  }
  nextChannel(): () => void {
    return () => {
      this.setChannel(this.channel + 1);
    };
  }
  setChannel(channelNumber: number) {
    console.log("changeset");
    if (channelNumber > 0 && channelNumber <= 50) {
      this.channel = channelNumber;
      console.log(this.channel);
      let col9 = <HTMLDivElement>document.querySelector(".col-9");
      col9.innerHTML = "";
      let videoTag = document.createElement("video");
      videoTag.setAttribute("id", "video");
      videoTag.setAttribute("controls", "true");
      videoTag.style.width = this.details.size.width;
      videoTag.style.height = this.details.size.height;
      let videoPlayer = document.createElement("source");
      videoPlayer.setAttribute("src", channels[this.channel]);
      videoPlayer.setAttribute("id", "videoPlayer");
      videoPlayer.setAttribute("type", "video/mp4");
      videoTag.appendChild(videoPlayer);
      col9.appendChild(videoTag);
      isPlaying = false;
      playVideo();
      this.displayInfo();
    } else {
      console.log("Please select a channel between 1 and 50");
    }
  }
  setVolume(volumeCount: number) {
    if (volumeCount >= 0 && volumeCount <= 100) {
      console.log("reset");

      this.volume = volumeCount;
      let video = <HTMLVideoElement>document.querySelector("#video");
      video.volume = this.volume / 100;
      this.displayInfo();
    } else {
      console.log("Volume can be between 0 and 100");
    }
  }
  resetTv(): () => void {
    return () => {
      this.setChannel(1);
      this.setVolume(50);
    };
  }
  displayInfo() {
    let videoInfo = <HTMLDivElement>document.querySelector(".videoInfo");
    videoInfo.innerHTML = `Current Channel: ${this.channel}, Volume: ${this.volume}`;
  }
}

// ------------ Child Classes ---------------

class Samsung extends TV_class {
  constructor(tvDetails: TV_Details) {
    super(tvDetails);
  }
  getAdditionalFeature() {
    console.log("Thickness: " + this.details.size);
    console.log("Energy Usage: " + this.details.energyUsage);
    console.log("Refresh rate: " + this.details.refreshRate);
    console.log("Back Light: " + this.details.backLight);
  }
}

class Mi extends TV_class {
  constructor(tvDetails: TV_Details) {
    super(tvDetails);
  }
  getAdditionalFeature() {
    console.log("Thickness: " + this.details.size);
    console.log("Thickness: " + this.details.energyUsage);
    console.log("Thickness: " + this.details.refreshRate);
    console.log("Thickness: " + this.details.backLight);
  }
}

let playVideo = () => {
  if (!isPlaying) {
    isPlaying = !isPlaying;
    (<HTMLVideoElement>document.querySelector("video")).play();
  } else {
    isPlaying = !isPlaying;
    (<HTMLVideoElement>document.querySelector("video")).pause();
  }
};

let changeChannel = (pressedButton: string) => {};

// ---------- DropDown function -------------------

let changeTV = () => {
  let selectedTv = (<HTMLSelectElement>document.querySelector("#availableTvs"))
    .value;
  switch (selectedTv) {
    case TvBrands.Samsung:
      new Samsung({
        brand: "Samsung",
        size: {
          width: "80%",
          height: "80%",
        },
        energyUsage: "240W",
        refreshRate: 45,
        backLight: "OFF",
      });
      break;
    case TvBrands.MI:
      new Mi({
        brand: "Mi",
        size: {
          width: "100%",
          height: "100%",
        },
        energyUsage: "250W",
        refreshRate: 60,
        backLight: "ON",
      });
      break;
    default:
      break;
  }
};
