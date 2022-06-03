import React from "react";
import { TextCard } from "../Components/Cards/TextCard/TextCard";
import { FeedWall } from "../Components/FeedWall/FeedWall";

export const Home = () => {
  return (
    <div className="middle-container">
      <div className="middle-child">
        <FeedWall />
        <TextCard/>
        <TextCard hasImage={true}/>
        <TextCard hasImage={true}/>
        <TextCard/>
        <TextCard/>
        <TextCard/>
        <TextCard/>
        <TextCard/>
      </div>
    </div>
  );
};
