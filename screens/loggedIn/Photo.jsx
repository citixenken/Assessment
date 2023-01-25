import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../../src/components/Navbar/Navbar";

const Photo = () => {
  const { id } = useParams();

  const PHOTOS_ENDPOINT = " https://jsonplaceholder.typicode.com/photos";

  const [photo, setPhoto] = useState([]);
  const [photoTitle, setPhotoTitle] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    fetchAlbumPhoto();
  }, []);

  // READ - GET /photo
  const fetchAlbumPhoto = async () => {
    await fetch(`${PHOTOS_ENDPOINT}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPhoto(data);
        setPhotoTitle(data.title);
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (event) => {
    event.preventDefault();
    fetch(`${PHOTOS_ENDPOINT}/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ title: photoTitle }),
      headers: { "Content-Type": "application/json" },
    });
    setIsSaved(true);
  };

  return (
    <>
      <Navbar />
      <div className="container bg-darkGrayishBlue rounded-2xl mx-auto py-12 px-8 my-8">
        <div className="text-4xl font-bold text-darkBlue">
          {/* {album.title[0].toUpperCase() + album.title.slice(1)} */}
          {photoTitle}
        </div>
      </div>
      {isEditing && !isSaved ? (
        <form onSubmit={handleEdit}>
          <label className="block text-gray-700 font-medium">
            Title:
            <input
              className="form-input mt-1 border border-gray-500 rounded-lg p-2"
              type="text"
              value={photoTitle}
              onChange={(e) => setPhotoTitle(e.target.value)}
            />
          </label>
          <button
            className="inline-block px-6 py-2.5 bg-brightRed rounded-xl text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-brightRedLight focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out my-4"
            onClick={handleEdit}
          >
            Save
          </button>
        </form>
      ) : (
        <button
          className="inline-block px-6 py-2.5 bg-brightRed rounded-xl text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-brightRedLight focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-8"
          onClick={() => setIsEditing(true)}
        >
          Edit title
        </button>
      )}
      {/* </div> */}
      <div className="container bg-veryPaleRed rounded-2xl mx-auto py-12 px-8">
        <img
          src={photo.url}
          alt={photo.title}
          className="w-full h-full object-cover rounded-lg"
          key={photo.id}
          onError={(e) => {
            e.target.src =
              "https://img.freepik.com/free-vector/503-error-service-unavailable-concept-illustration_114360-1906.jpg?w=826&t=st=1674619488~exp=1674620088~hmac=9773e37ea0924e9cf0ae62553e85a772dafd4c9b8c7ba9eb1c16bd9326c52302";
          }}
        />
      </div>
    </>
  );
};

export default Photo;
