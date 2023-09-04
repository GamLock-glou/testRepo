import React from 'react';

import {VideoTraining} from '../../components/videoTraining/VideoTraining';
import {ReviewsHome} from '../../components/reviewsHome/ReviewsHome';
import AssistantBlock from '../../components/assistantBlock/AssistantBlock';
import WelcomeBlock from '../../components/welcomeBlock/WelcomeBlock';
import StoriesBlock from '../../components/storiesBlock/StoriesBlock';
import ProductsPart from '../../components/productsPart/ProductsPart';

import styles from './styles.module.scss';

export const Home: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}></div>
      <WelcomeBlock/>
      <StoriesBlock/>
      <AssistantBlock/>
      <ProductsPart subtitle="новинки" title="Cамое последнее"/>
      <div className={styles.line}/>
      <ProductsPart subtitle="популярно" title="Лучшее для тебя"/>
      <VideoTraining />
      <ReviewsHome />
    </div>
  );
};

export default Home;
