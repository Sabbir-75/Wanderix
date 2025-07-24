import React from 'react';
import CarouselSection from '../../../Components/Home/CarouselSection/CarouselSection';
import Video from '../../../Components/Home/Video/Video';
import TouristStory from '../../../Components/Home/TouristStory/TouristStory';
import TouristStorySection from '../../../Components/Home/ExtraSection/ExtraSection';
import TourismGuideSection from '../../../Components/Home/TourismGuideSection/TourismGuideSection';


const Home = () => {
    return (
        <div>
            <CarouselSection></CarouselSection>
            <Video></Video>
            <TouristStory></TouristStory>
            <TouristStorySection></TouristStorySection>
            <TourismGuideSection></TourismGuideSection>
        </div>
    );
};

export default Home;