if (confirm('Nothing here, sorry!')) {
  alert('GET OUT!');
} else {
  alert('JUMP SCARE!');
}
function uhh(){
  const vid = document.getElementById('vd');
  if (!vid) {
    console.error('Background video element not found.');
    return;
  }
  if (vid.classList.contains('active')) {
    vid.classList.remove('active');
    vid.pause();
  } else {
    vid.classList.add('active');

    vid.play().catch(() => {
      console.warn('Autoplay blocked; user interaction may be required to play the video.');
    });
  }
}
