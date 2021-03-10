import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_ARTISTS } from "../GraphQL/Queries";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function ListArtists() {
  const { data } = useQuery(LOAD_ARTISTS);
  const [artists, setartists] = useState([]);

  useEffect(() => {
    if (data) {
      localStorage.setItem(
        "artists",
        JSON.stringify(data.popular_artists.artists)
      );
      setartists(data.popular_artists.artists);
    }
  }, [data]);

  return (
    <div className="container">
      <svg
        width="119"
        height="20"
        viewBox="0 0 569 94"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M350.643 0.179688H370.636V17.3458H350.643V0.179688Z"
          fill="#4490CD"
        ></path>
        <path
          d="M378.323 58.7812H398.317V75.9673H378.323V58.7812Z"
          fill="#4490CD"
        ></path>
        <path
          d="M154.289 45.8298V75.8281H135.685V72.1817C131.961 75.3526 127.207 77.0663 122.309 77.0037C111.143 77.0037 102.496 70.3087 102.496 60.7642C102.496 50.8013 112.143 43.8272 124.719 43.8272C128.493 43.8925 132.223 44.6595 135.715 46.0888V45.8298C135.715 41.4063 131.786 38.8558 125.049 38.8558C120.76 38.8316 116.525 39.8074 112.683 41.7051L106.545 29.7995C113.782 26.2527 121.54 23.8217 130.277 23.8217C143.422 23.752 154.289 31.8817 154.289 45.8298ZM135.685 57.2174C133.117 55.9696 130.294 55.3319 127.438 55.3543C123.719 55.3543 120.9 57.4166 120.9 60.276C120.9 62.9261 123.509 64.7992 127.038 64.7992C135.485 64.7593 135.685 57.2174 135.685 57.2174Z"
          fill="#07122b"
        ></path>
        <path
          d="M215.428 43.4287V75.7982H196.934V47.8223C196.934 42.9007 193.715 39.4535 189.087 39.4535C184.768 39.4535 181.649 42.7014 181.649 47.2345V75.7982H162.226V23.7818H181.639V30.0485C184.858 26.1132 190.086 23.752 196.324 23.752C207.48 23.752 215.428 31.8817 215.428 43.4287Z"
          fill="#07122b"
        ></path>
        <path
          d="M222.036 89.7952L225.924 77.3615C228.843 79.0651 231.862 80.2707 233.272 80.2707C234.418 80.2753 235.55 80.015 236.579 79.5103C237.607 79.0055 238.505 78.27 239.2 77.3615L239.5 76.6641L218.507 24.1396H238.32L248.977 56.1106L259.033 24.1396H278.547L258.913 76.3652C254.695 87.4838 247.047 93.9995 238.2 93.9995C232.552 93.9089 227.008 92.467 222.036 89.7952Z"
          fill="#07122b"
        ></path>
        <path
          d="M350.883 23.9805H370.276V75.7876H350.883V23.9805Z"
          fill="#07122b"
        ></path>
        <path
          d="M413.622 75.7973L377.714 23.9902H398.237L405.675 34.7103L413.122 23.9902H433.115L415.631 49.037L434.145 75.7973H413.622Z"
          fill="#07122b"
        ></path>
        <path
          d="M473.302 58.7807L483.688 69.2417C479.18 73.8346 470.553 77.0526 462.805 77.0526C446.631 77.0526 434.814 66.0137 434.814 50.4716C434.814 34.9295 446.381 24.1895 462.075 24.1895C478.35 24.1895 488.447 35.6169 488.447 55.0745H452.559C453.838 59.8666 457.267 63.0448 462.075 63.0448C466.186 62.891 470.131 61.3924 473.302 58.7807ZM452.848 45.1514H470.303C469.123 40.9471 466.184 38.1774 462.065 38.1774C457.507 38.2073 454.278 40.9471 452.848 45.1514Z"
          fill="#07122b"
        ></path>
        <path d="M495.895 0H515.308V75.7978H495.895V0Z" fill="#07122b"></path>
        <path
          d="M522.825 69.382L529.883 57.9446C534.791 61.3718 542.049 63.9223 547.437 63.9223C550.966 63.9223 552.245 63.0456 552.245 61.3818C552.245 59.718 549.306 58.642 544.598 57.6656C535.381 55.673 525.084 53.4613 525.084 41.5456C525.084 31.772 533.022 24.1504 546.267 24.1504C553.82 24.2882 561.172 26.5956 567.44 30.7956L561.072 42.3227C556.854 39.5829 551.076 36.9527 546.267 36.9527C543.618 36.9527 541.849 38.3176 541.849 39.7822C541.849 41.446 544.108 41.7748 549.206 42.9105C558.423 44.9629 569.01 47.9916 569.01 59.9172C569.01 70.3683 560.672 77.0136 546.947 77.0136C538.11 77.0036 528.993 74.1741 522.825 69.382Z"
          fill="#07122b"
        ></path>
        <path
          d="M68.977 24.1401C50.913 24.1401 49.7634 32.5687 49.7634 32.6484C49.7634 32.5388 46.2945 24.1401 30.9197 24.1401C21.3029 24.1401 19.3835 27.9459 19.4135 27.9659V23.7715H0V75.7181H19.4135C19.4135 75.7181 19.4135 46.3673 19.4135 46.6463C19.4135 41.0073 24.4918 38.128 29.2102 38.128C34.0886 38.128 38.887 41.3859 38.887 46.3375C38.987 46.5666 38.7071 75.7181 38.7071 75.7181H57.6008C57.6008 75.7181 57.8307 48.4895 57.8307 47.9016C57.7879 46.6144 58.0043 45.3317 58.4671 44.1292C58.9298 42.9267 59.6295 41.8288 60.5249 40.9002C61.4204 39.9715 62.4934 39.2311 63.6806 38.7224C64.8678 38.2138 66.1452 37.9473 67.4375 37.9387C70.0888 37.9387 72.6314 38.9884 74.5062 40.8568C76.3809 42.7252 77.4341 45.2593 77.4341 47.9016C77.4341 48.4895 77.2842 75.7181 77.2842 75.7181H95.788V43.6674C95.788 32.24 85.1216 24.1401 68.977 24.1401Z"
          fill="#07122b"
        ></path>
        <path
          d="M344.205 50.2231C344.205 66.8412 332.469 78.0196 318.523 78.0196C311.706 78.0196 308.267 76.0967 304.178 72.4403V94.0001H285.395V24.0007H304.238V28.1851C308.327 24.5188 311.706 22.4365 318.523 22.4365C332.469 22.4365 344.205 33.7145 344.205 50.2231ZM327.121 50.2231C327.121 42.5815 322.032 37.2713 315.065 37.2713C308.587 37.2713 302.799 42.5417 302.799 50.2231C302.799 57.9045 308.587 63.1748 315.065 63.1748C322.032 63.135 327.121 57.9742 327.121 50.2231Z"
          fill="#07122b"
        ></path>
      </svg>
      <h1
        className="text-center"
        style={{ fontWeight: "900", color: "#212f57" }}
      >
        Artsy Artists
      </h1>
      <br />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th>Name</th>
            <th>Nationality</th>
            <th>Birthday Year</th>
          </tr>
        </thead>
        <tbody>
          {artists.map((artist, i) => {
            return (
              <tr key={i}>
                <td>{i + 1} </td>
                <td style={{ width: "5em" }}>
                  <img className="img-fluid" src={artist.image.url} alt="dw" />
                </td>
                <td>
                  <Link to={`/profile/${artist.id}`}>{artist.name}</Link>
                </td>
                <td>{artist.nationality}</td>
                <td>{artist.birthday ? artist.birthday : "N/A"}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {!artists.length && (
        <h2 className="text-center">Loading, Please wait...</h2>
      )}
    </div>
  );
}

export default ListArtists;
