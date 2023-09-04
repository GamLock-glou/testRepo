import React, {useState} from 'react';
import ReactPlayer from 'react-player';

import {ReactComponent as Globe} from '../../assets/icons/globe.svg';

import BrandsCarousel from './carousel/BrandsCarousel';
import styles from './styles.module.scss';

const WelcomeBlock: React.FunctionComponent = () => {
  /* eslint-disable-next-line max-len */
  const [video, setVideo] = useState('https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoop, setIsLoop] = useState(false);

  const changeVideo = () => {
    setVideo('https://media.w3.org/2010/05/sintel/trailer_hd.mp4');
    setIsPlaying(true);
    setIsLoop(true);
  };

  return (<div className={styles.homeHeading}>
    <div className={styles.title}>
      <div className={styles.firstLine}>
        <Globe className={styles.iconGlobe}/>
        <span>Открой для себя</span>
      </div>
      <div className={styles.secondLine}>
        вселенную
        <span className={styles.label}> Evas</span>
      </div>
      <div className={styles.thirdLine}>
        с основательницей концерна
      </div>
      <div className={styles.fourthLine}>
        Сельгой
      </div>
    </div>
    <div className={styles.background}>
      <ReactPlayer
        width="100%"
        height="100%"
        muted={true}
        loop={isLoop}
        playing={isPlaying}
        url={video}
        onEnded={changeVideo}/>
    </div>
    <BrandsCarousel/>
  </div>);
};

export default WelcomeBlock;
