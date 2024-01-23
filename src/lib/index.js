
export class VideoData {
  constructor() {
    this.title = ""
    this.quality = ""
    this.langage = ""
    this.subtitles = ""
    this.animal = ""
  }

  fetchData() {

    this.title = "Hello World"
    this.quality = "1080p"
    this.langage = "English"
    this.subtitles = "English"
    this.animal = "Dog"
    
  }

}

export let videoData = new VideoData();

