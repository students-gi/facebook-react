import React from 'react';
/*=====   Style imports   =====*/
import styles from './style.module.scss';
/*===== Component imports =====*/
import Button from 'src/ui/atoms/Button';

interface sound {
  name: string,
  audio: HTMLAudioElement
}

const audiofiles: sound[] = [
  {
    name: "Emotional Damage",
    audio: new Audio('https://www.101soundboards.com/storage/board_sounds_rendered/690324.mp3')
  },
  {
    name: "OH, I'M FUCKING CUMMING",
    audio: new Audio('https://www.101soundboards.com/storage/board_sounds_rendered/3683175.mp3')
  }
]


function toggle(sound: HTMLAudioElement) {
  if (sound.paused) sound.play();
  else sound.pause()
}

function Soundboard() {
  return (
    <div id={styles.Soundboard}>
      {audiofiles.map(sound => (
        <Button
          text={sound.name}
          onClick={() => toggle(sound.audio)}
        />
      ))}
    </div>
  );
}

export default Soundboard;