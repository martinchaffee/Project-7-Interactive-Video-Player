// As the user clicks on each sentence of the transcript, the video
// player jumps to the appropriate time in the video.
const vid = document.getElementById("video");
const transcript1 = document.getElementById('transcript-1');
const transcript2 = document.getElementById('transcript-2');
const transcript3 = document.getElementById('transcript-3');
const transcript4 = document.getElementById('transcript-4');
const transcript5 = document.getElementById('transcript-5');
const transcript6 = document.getElementById('transcript-6');
const transcript7 = document.getElementById('transcript-7');
const transcript8 = document.getElementById('transcript-8');
const transcript9 = document.getElementById('transcript-9');
const transcript10 = document.getElementById('transcript-10');
const transcript11 = document.getElementById('transcript-11');
const transcript12 = document.getElementById('transcript-12');
const transcript13 = document.getElementById('transcript-13');
const transcript14 = document.getElementById('transcript-14');
const transcript15 = document.getElementById('transcript-15');
const transcript16 = document.getElementById('transcript-16');

transcript1.addEventListener('click', () => {
  vid.currentTime = 0.240;
});

transcript2.addEventListener('click', () => {
  vid.currentTime = 4.130;
});

transcript3.addEventListener('click', () => {
  vid.currentTime = 7.535;
});

transcript4.addEventListener('click', () => {
  vid.currentTime = 11.270;
});

transcript5.addEventListener('click', () => {
  vid.currentTime = 13.960;
});

transcript6.addEventListener('click', () => {
  vid.currentTime = 17.940;
});

transcript7.addEventListener('click', () => {
  vid.currentTime = 22.370;
});

transcript8.addEventListener('click', () => {
  vid.currentTime = 26.880;
});

transcript9.addEventListener('click', () => {
  vid.currentTime = 30.920;
});

transcript10.addEventListener('click', () => {
  vid.currentTime = 34.730;
});

transcript11.addEventListener('click', () => {
  vid.currentTime = 39.430;
});

transcript12.addEventListener('click', () => {
  vid.currentTime = 42.350;
});

transcript13.addEventListener('click', () => {
  vid.currentTime = 46.300;
});

transcript14.addEventListener('click', () => {
  vid.currentTime = 49.270;
});

transcript15.addEventListener('click', () => {
  vid.currentTime = 53.760;
});

transcript16.addEventListener('click', () => {
  vid.currentTime = 57.780;
});

// As video plays, each span from the text needs to be highlighted as
// the video plays the text.
// Solution: use currentTime property;
  //Use if/then statements w/ greater than and less than : if currentTime => x and <=y, transcript-1 color = orange; else color is inherit;

vid.addEventListener('timeupdate', function (){
  if (vid.currentTime > 0.023 && vid.currentTime <= 4.130 ) {
    transcript1.style.color="orange";
  } else if (vid.currentTime < 0.240 || vid.currentTime >= 4.130 ) {
    transcript1.style.color="black";
  }
});

vid.addEventListener('timeupdate', function (){
  if (vid.currentTime > 4.13 && vid.currentTime <= 7.535 ) {
    transcript2.style.color="orange";
  } else if (vid.currentTime < 4.13 || vid.currentTime >= 7.535 ) {
    transcript2.style.color="black";
  }
});

vid.addEventListener('timeupdate', function (){
  if (vid.currentTime > 7.535 && vid.currentTime <= 11.270 ) {
    transcript3.style.color="orange";
  } else if (vid.currentTime < 7.535 || vid.currentTime >= 11.270 ) {
    transcript3.style.color="black";
  }
});

vid.addEventListener('timeupdate', function (){
  if (vid.currentTime > 11.270 && vid.currentTime <= 13.96 ) {
    transcript4.style.color="orange";
  } else if (vid.currentTime < 11.270 || vid.currentTime >= 13.96 ) {
    transcript4.style.color="black";
  }
});

vid.addEventListener('timeupdate', function (){
  if (vid.currentTime > 13.96 && vid.currentTime <= 17.940 ) {
    transcript5.style.color="orange";
  } else if (vid.currentTime < 13.96 || vid.currentTime >= 17.940 ) {
    transcript5.style.color="black";
  }
});

vid.addEventListener('timeupdate', function (){
  if (vid.currentTime > 17.940 && vid.currentTime <= 22.370 ) {
    transcript6.style.color="orange";
  } else if (vid.currentTime < 17.940 || vid.currentTime >= 22.370 ) {
    transcript6.style.color="black";
  }
});

vid.addEventListener('timeupdate', function (){
  if (vid.currentTime > 22.370 && vid.currentTime <= 26.880 ) {
    transcript7.style.color="orange";
  } else if (vid.currentTime < 22.370 || vid.currentTime >= 26.880 ) {
    transcript7.style.color="black";
  }
});

vid.addEventListener('timeupdate', function (){
  if (vid.currentTime > 26.880 && vid.currentTime <= 30.920 ) {
    transcript8.style.color="orange";
  } else if (vid.currentTime < 26.880 || vid.currentTime >= 30.920 ) {
    transcript8.style.color="black";
  }
});

vid.addEventListener('timeupdate', function (){
  if (vid.currentTime > 32.1 && vid.currentTime <= 34.730 ) {
    transcript9.style.color="orange";
  } else if (vid.currentTime < 32.1 || vid.currentTime >= 34.730 ) {
    transcript9.style.color="black";
  }
});

vid.addEventListener('timeupdate', function (){
  if (vid.currentTime > 34.730 && vid.currentTime <= 39.430 ) {
    transcript10.style.color="orange";
  } else if (vid.currentTime < 34.730 || vid.currentTime >= 39.430 ) {
    transcript10.style.color="black";
  }
});

vid.addEventListener('timeupdate', function (){
  if (vid.currentTime > 39.430 && vid.currentTime <= 41.190 ) {
    transcript11.style.color="orange";
  } else if (vid.currentTime < 39.430 || vid.currentTime >= 41.190 ) {
    transcript11.style.color="black";
  }
});

vid.addEventListener('timeupdate', function (){
  if (vid.currentTime > 42.350 && vid.currentTime <= 46.300 ) {
    transcript12.style.color="orange";
  } else if (vid.currentTime < 42.350 || vid.currentTime >= 46.300 ) {
    transcript12.style.color="black";
  }
});

vid.addEventListener('timeupdate', function (){
  if (vid.currentTime > 46.300 && vid.currentTime <= 49.27 ) {
    transcript13.style.color="orange";
  } else if (vid.currentTime < 46.300 || vid.currentTime >= 49.27 ) {
    transcript13.style.color="black";
  }
});

vid.addEventListener('timeupdate', function (){
  if (vid.currentTime > 49.27 && vid.currentTime <= 53.760) {
    transcript14.style.color="orange";
  } else if (vid.currentTime < 49.27 || vid.currentTime >= 53.760 ) {
    transcript14.style.color="black";
  }
});

vid.addEventListener('timeupdate', function (){
  if (vid.currentTime > 53.760 && vid.currentTime <= 57.78 ) {
    transcript15.style.color="orange";
  } else if (vid.currentTime < 53.760 || vid.currentTime >= 57.78 ) {
    transcript15.style.color="black";
  }
});

vid.addEventListener('timeupdate', function (){
  if (vid.currentTime > 57.78 && vid.currentTime <= 60.15 ) {
    transcript16.style.color="orange";
  } else if (vid.currentTime < 57.78 || vid.currentTime >= 60.15 ) {
    transcript16.style.color="black";
  }
});
