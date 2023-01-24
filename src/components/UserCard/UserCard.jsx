import React, { useState, useEffect } from "react";

const UserCard = () => {
  const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";
  const ALBUMS_ENDPOINT = "https://jsonplaceholder.typicode.com/albums";

  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchUserAlbums();
  }, []);

  // READ - GET /users
  const fetchUsers = async () => {
    await fetch(USERS_ENDPOINT)
      .then((res) => res.json())
      .then((data) => setUsers(data))
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
    <div className="container bg-veryPaleRed rounded-2xl mx-auto py-12 px-8">
      <div className="grid lg:grid-cols-2 gap-6">
        {users.map((user, id = user.id) => (
          <div
            className="bg-veryLightGray shadow-lg rounded-lg overflow-hidden"
            key={id}
          >
            {/* <img className="h-32 w-32 rounded-full mx-auto" src={} alt={name} /> */}
            <div className="px-6 py-4">
              <div className="text-center text-2xl text-brightRed mb-3">
                {user.name}
              </div>
              <div className="flex flex-row justify-content space-x-1 items-center">
                <label>Handle:</label>
                <div className="text-center text-lg font-medium">
                  @{user.username}
                </div>
              </div>
              <div className="flex flex-row justify-content space-x-1 items-center">
                <label>Email:</label>
                <div className="text-center text-md text-darkBlue">
                  {user.email}
                </div>
              </div>
              <div className="flex flex-row justify-content space-x-1 items-center">
                <label>Company Name:</label>
                <div className="text-center text-md text-darkBlue">
                  {user.company.name}
                </div>
              </div>
              <div className="flex flex-row justify-content space-x-1 items-center mb-4">
                <label>Company Slogan:</label>
                <div className="text-center text-md text-darkBlue italic">
                  {user.company.bs[0].toUpperCase() + user.company.bs.slice(1)}
                </div>
              </div>
              <hr />

              <div className=" text-md mt-4 flex flex-row justify-center">
                <label> Number of Albums:</label>
                {
                  <div className="text-brightRed px-1">
                    {albums.filter((album) => album.userId === user.id).length}
                  </div>
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCard;
