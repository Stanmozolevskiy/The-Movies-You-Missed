import React from "react";
import Gallery from "react-photo-gallery";

function columns(containerWidth) {
  let columns = 1;
  if (containerWidth >= 200) columns = 2;
  if (containerWidth >= 300) columns = 4;
  return columns;
}

const UpComingContainer = ({ data, title }) => {
  const photos = [
    {
      src: `https://image.tmdb.org/t/p/original/${data[0].poster_path}`,
      width: 0.5,
      height: 0.9,
      id: `${data[0].id}`
    },
    {
      src: `https://image.tmdb.org/t/p/original/${data[1].poster_path}`,
      width: 0.5,
      height: 0.9,
      id: `${data[1].id}`
    },
    {
      src: `https://image.tmdb.org/t/p/original/${data[2].poster_path}`,
      width: 0.5,
      height: 0.6,
      id: `${data[2].id}`
    },
    {
      src: `https://image.tmdb.org/t/p/original/${data[3].poster_path}`,
      width: 0.5,
      height: 0.6,
      id: `${data[3].id}`
    },
    {
      src: `https://image.tmdb.org/t/p/original/${data[4].poster_path}`,
      width: 0.5,
      height: 0.9,
      id: `${data[4].id}`
    },
    {
      src: `https://image.tmdb.org/t/p/original/${data[5].poster_path}`,
      width: 0.5,
      height: 0.9,
      id: `${data[5].id}`
    },
    {
      src: `https://image.tmdb.org/t/p/original/${data[6].poster_path}`,
      width: 0.5,
      height: 0.6,
      id: `${data[6].id}`
    },
    {
      src: `https://image.tmdb.org/t/p/original/${data[7].poster_path}`,
      width: 0.5,
      height: 0.6,
      id: `${data[7].id}`
    }
  ];

  const onImgeaClick = e => {
    window.location = `movies/${e.target.id}`;
  };

  return (
    <div className="col-sm-4 col-12 up-coming">
      <h4
        style={{
          textAlign: "center"
        }}
      >
        <strong>{title}</strong>
      </h4>

      <div className="home-shadow">
        <Gallery
          photos={photos}
          direction="column"
          columns={columns}
          onClick={onImgeaClick}
        />
      </div>
    </div>
  );
};

export default UpComingContainer;
