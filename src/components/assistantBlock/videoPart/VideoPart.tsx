import React, {useState, useEffect} from 'react';
import ReactPlayer from 'react-player';
import {Text} from '@mantine/core';

import styles from './styles.module.scss';

const talk = 'https://player.vimeo.com/video/372185325';
const waiting = 'https://player.vimeo.com/video/406250002';

type Props = {
  hint: string;
}

export const VideoPart: React.FunctionComponent<Props> = ({hint}) => {
  const [video, setVideo] = useState(talk);
  const [key, setKey] = useState(hint);
  const [isLoop, setIsLoop] = useState(false);

  useEffect(() => {
    setKey(_ => {
      setVideo(talk);
      setIsLoop(false);
      return hint;
    });
  }, [hint]);

  const changeVideo = () => {
    setVideo(_ => {
      setIsLoop(true);
      return waiting;
    });
  };

  return (<div className={styles.videoPart}>
    <ReactPlayer
      key={key}
      width="100%"
      height="100%"
      muted={true}
      loop={isLoop}
      playing={true}
      url={video}
      onEnded={changeVideo}/>
    <div className={styles.hint}>
      <div className={styles.text}>
        <Text className={styles.name}>Сельга</Text>
        <Text className={styles.speech}>{hint}</Text>
      </div>
    </div>
  </div>);
};

export default VideoPart;
