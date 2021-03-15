import React, { useEffect, useState } from "react";
import { GET_ARTIST_ACCOUNT } from "../GraphQL/Queries";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import ArtistProfile from "../Components/ArtistProfile/ArtistProfile";
import Loading from "../Components/Loading/Loading";

function Profile(props) {
  const { id } = useParams();
  const [artist, setartist] = useState(null);
  const { data, loading } = useQuery(GET_ARTIST_ACCOUNT, {
    variables: {
      id,
    },
  });

  useEffect(() => {
    if (data) {
      setartist(data.artist);
    }
  }, [data]);

  return (
    <>
      {!loading ? (
        artist && (
          <div className="container">
            <Link to="/" className="btn btn-primary mt-3">
              Back to list
            </Link>

            <ArtistProfile artist={artist} />
          </div>
        )
      ) : (
        <div className="center">
          <Loading />
        </div>
      )}
    </>
  );
}

export default Profile;
