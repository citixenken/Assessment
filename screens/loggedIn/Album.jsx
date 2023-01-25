import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../src/components/Navbar/Navbar";

const Album = () => {
  const { id } = useParams();

  const ALBUMS_ENDPOINT = "https://jsonplaceholder.typicode.com/albums";
  const PHOTOS_ENDPOINT = " https://jsonplaceholder.typicode.com/photos";

  const [album, setAlbum] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchUserAlbums();
    fetchPhotos();
  }, []);

  // READ - GET /album
  const fetchUserAlbums = async () => {
    await fetch(`${ALBUMS_ENDPOINT}/${id}`)
      .then((res) => res.json())
      .then((data) => setAlbum(data))
      .catch((err) => console.log(err));
  };
  // READ - GET /photos
  // TODO - Service unavailable error message (503)
  const fetchPhotos = async () => {
    await fetch(PHOTOS_ENDPOINT)
      .then((res) => res.json())
      .then((data) => setPhotos(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <div className="container bg-darkGrayishBlue rounded-2xl mx-auto py-12 px-8 my-8">
        <div className="text-4xl font-bold text-darkBlue">
          {/* {album.title[0].toUpperCase() + album.title.slice(1)} */}
          {album.title}
        </div>
      </div>
      <div className="container bg-veryPaleRed rounded-2xl mx-auto py-12 px-8">
        <div className="grid grid-cols-3 gap-4">
          {photos
            .filter((photo) => photo.albumId === album.id)
            .map((photo) => (
              <img
                src={photo.thumbnailUrl}
                alt={photo.title}
                className="h-64 object-cover rounded-lg"
                key={photo.id}
                onError={(e) => {
                  e.target.src =
                    "https://img.freepik.com/free-vector/503-error-service-unavailable-concept-illustration_114360-1906.jpg?w=826&t=st=1674619488~exp=1674620088~hmac=9773e37ea0924e9cf0ae62553e85a772dafd4c9b8c7ba9eb1c16bd9326c52302";
                }}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Album;
