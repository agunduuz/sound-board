const soundsId = [
  'viento',
  'ciktim-bi-yola',
  'djon-maya',
  'memleket',
  'universo',
  'balmorhea',
  'earth-breathe',
];
const names = [
  'Viento',
  'Çıktım bi Yola',
  'Djon Maya',
  'Hemşerim Memleket Nire',
  'Universo',
  'Balmorhea',
  'Earth Breathe',
];

soundsId.forEach((sound, index) => {
  const name = names[index];
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = name;
  btn.addEventListener('click', () => {
    stopSongs();
    document.getElementById(sound).play();
  });
  document.getElementById('buttons').appendChild(btn);
});

function stopSongs() {
  soundsId.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}
