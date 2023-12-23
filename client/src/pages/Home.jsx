import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";

//Start styles code (Dynamic styling code )
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
//End styles code

const Home = ({type}) => {
  const [videos, setVideos] = useState([]);
   
  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/${type}`); 
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]); 

  return (
    <Container>
      <div>hello</div>
      {videos.map((video) => (
        <Card key={video._id} video={video}/>
      ))}
    </Container>
  );
};

export default Home;
