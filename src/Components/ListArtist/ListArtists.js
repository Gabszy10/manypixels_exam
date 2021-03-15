import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function ListArtists(props) {
  const { artists } = props;

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th>Name</th>
            <th>Nationality</th>
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
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default ListArtists;
