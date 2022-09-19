
let oscillator;
// 再生中のときtrue
let isPlaying = false;
window.AudioContext = window.AudioContext || window.webkitAudioContext;
const ctx = new AudioContext();
var se64="SUQzBAAAAAAAa1RQRTEAAAAKAAADT3RvTG9naWMAVElUMgAAABMAAANUcmFja3BhZDAxLTEoVGFwKQBUQUxCAAAADQAAA090b0xvZ2ljLVNFAFRTU0UAAAAPAAADTGF2ZjU4LjIwLjEwMAAAAAAAAAAAAAAA//NYAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAEAAAC9ABtbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW2enp6enp6enp6enp6enp6enp6enp6enp6ez8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz/////////////////////////////////8AAAAATGF2ZgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvR4v0ICAAAA//NIZIQAAAGkAKAAAAAAA0gBQAAATX6X3/5no/927//p+bYs2mnA4BE4BAIBAIBAIAANmvzIDDdktPuv2cuZeekOoBAAAYoBmQOZEz4ZwAMUA0ZUBgeK0IqRWu3hY+IwC2AjYG6gWUGJdR0vxHQNkBaYHkACABjAcpFkkWV/i4DMXALWG3gNABqht4czU9SV//NIZP8NfZEiAMPIAAnwBnb/gBBiX/D0w28QwQnFLkVGbPigx3kUEfpf6//8hwsgQDJQXAJzIwcBPC5BwF4cwnAhGIRQAAQIAwQBy44dwhwMGPAnnKPKTn+UT/vKf+Ud4O2Llm/p/ARV29crfgFaSgHRW0ZRrOHQMswkHw6WiiCghwqnGYtwYUbEkDCC0cQD//NIZOYS2VVpL8XQAQqITpJNgRAAUIAwUJhlgNBIDHyy8y80VFBfEbWGSQ9lRYKvqjabOTSKMfZ9YjHJ80/Vr7VehmMQAOFMtXMQQ19bPr+cxL/2rD+vV//Qp34CIh3//+vrDccsYCb0soHxLXdXI8vooh4PgCu5lHEiqpzokBKzVqXt51a1EiTY+hmfeGJ7//NIZKAJ3GtCy+KMAAkIBkpfwBAA7NhhTRAxsxl0bYUF1lmvER5osBSNBK4YPEoZQ8q47JSyOMIqgJGIkKfbbLm0yYUUsDzXIfZCO3Z5j7ss//7vZLc//9H/0s/s//SqgAI3TZ4r2ZXHZA4ZW7yteu1pqLIwl5xXAk0ck13HlMzJNTzjYaSfPl9GfynisFH2";
document.querySelector(".button").addEventListener("click", () => {
  const source = context.createBufferSource()
  source.buffer = se64

  // Destination
  source.connect(context.destination)

  // Sourceの再生
  source.start(0)
  // 再生中なら二重に再生されないようにする
  /*
  if (isPlaying) return;
  oscillator = ctx.createOscillator();
  oscillator.type = "sine"; // sine, square, sawtooth, triangleがある
  oscillator.frequency.setValueAtTime(440, ctx.currentTime); // 440HzはA4(4番目のラ)
  ctx.decodeAudioData(se64);
  oscillator.connect(ctx.destination);
  oscillator.start();
  isPlaying = true;
  */
});

// oscillatorを破棄し再生を停止する
/*
document.querySelector("#stop").addEventListener("click", () => {
  oscillator?.stop();
  isPlaying = false;
});
*/
const playSound = () => {
  // Source
  const source = context.createBufferSource()
  source.buffer = se64

  // Destination
  source.connect(context.destination)

  // Sourceの再生
  source.start(0)
}