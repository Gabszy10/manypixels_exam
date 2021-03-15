import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_ARTISTS } from "../GraphQL/Queries";
import ManyPixelIcon from "../Components/ManyPixelIcon/ManyPixelIcon";
import ListArtists from "../Components/ListArtist/ListArtists";
import Loading from "../Components/Loading/Loading";

function Home() {
  const { data } = useQuery(LOAD_ARTISTS);
  const [artists, setartists] = useState([]);

  useEffect(() => {
    if (data) {
      setartists(data.popular_artists.artists);
    }
  }, [data]);

  return (
    <div className="container">
      <ManyPixelIcon />
      <h1
        className="text-center mt-5"
        style={{ fontWeight: "900", color: "#212f57" }}
      >
        Artsy Artists
      </h1>
      <br />

      <ListArtists artists={artists} />
      {!artists.length && (
        <div className="hor-center">
          <Loading />
        </div>
      )}
    </div>
  );
}

export default Home;
