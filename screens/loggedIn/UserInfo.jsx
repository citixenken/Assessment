import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../src/components/Navbar/Navbar";

const UserInfo = () => {
  const { id } = useParams();

  const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";
  const ALBUMS_ENDPOINT = "https://jsonplaceholder.typicode.com/albums";

  const [user, setUser] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchUser();
    fetchUserAlbums();
  }, []);

  // READ - GET /users
  const fetchUser = async () => {
    await fetch(`${USERS_ENDPOINT}/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  };

  // READ - GET /albums
  const fetchUserAlbums = async () => {
    await fetch(ALBUMS_ENDPOINT)
      .then((res) => res.json())
      .then((data) => setAlbums(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <div className="container bg-veryPaleRed rounded-2xl mx-auto py-12 px-8">
        <div className="text-4xl text-darkBlue mb-8">
          {user.name}'s Album Collection
        </div>

        <ol className=" grid lg:grid-cols-1 gap-6">
          {albums
            .filter((album) => album.userId === user.id)
            .map((album, idx) => {
              return (
                <li
                  key={idx}
                  className="bg-brightRedLight text-darkBlue text-xl shadow-lg rounded-lg overflow-hidden p-4 text-center"
                >
                  {idx + 1}.{" "}
                  {album.title[0].toUpperCase() + album.title.slice(1)}
                </li>
              );
            })}
        </ol>
      </div>
    </>
  );
};

export default UserInfo;
