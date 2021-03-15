import { gql } from "@apollo/client";

export const LOAD_ARTISTS = gql`
  query {
    popular_artists {
      artists {
        id
        _id
        name
        years
        bio
        birthday
        nationality
        image {
          url
        }
        sortable_id
        artworks {
          id
          title
          artist {
            #  Enough information on an Artist to show the metadata
            id
            _id
            name
            years
            birthday
            nationality
            blurb
            # A preview image for the artist if we'll need it
            image {
              url
            }
            sortable_id
          }
        }
      }
    }
  }
`;

export const GET_ARTIST_ACCOUNT = gql`
  query($id: String!) {
    artist(id: $id) {
      id
      _id
      name
      years
      bio
      birthday
      nationality
      image {
        url
      }
      sortable_id
      artworks {
        id
        title
        artist {
          #  Enough information on an Artist to show the metadata
          id
          _id
          name
          years
          birthday
          nationality
          blurb
          # A preview image for the artist if we'll need it
          image {
            url
          }
          sortable_id
        }
      }
    }
  }
`;
