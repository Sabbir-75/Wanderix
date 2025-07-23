import React from 'react';
import CarouselSection from '../../../Components/Home/CarouselSection/CarouselSection';
import Video from '../../../Components/Home/Video/Video';
import TouristStory from '../../../Components/Home/TouristStory/TouristStory';
import TouristStorySection from '../../../Components/Home/ExtraSection/ExtraSection';


const Home = () => {
    return (
        <div>
            <CarouselSection></CarouselSection>
            <Video></Video>
            <TouristStory></TouristStory>
            <TouristStorySection></TouristStorySection>
        </div>
    );
};

export default Home;