import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Layout from '../Layout';

const UserDetail = () => {
  const { username } = useParams();
  const [userDetail, setUserDetail] = useState(null);
  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user details
        const response = await axios.get(`https://hacker-news.firebaseio.com/v0/user/${username}.json?print=pretty`);
        setUserDetail(response.data);

        // Fetch a random image from Lorem Picsum (or any image API)
        const imageResponse = await axios.get('https://picsum.photos/200/300');
        setRandomImage(imageResponse.request.responseURL);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchData();
  }, [username]);

  return (
    <Layout>
    <div className="container mx-auto mt-6">
      {userDetail ? (
        <div className="flex">
          <div className="mr-4">
            <img src={randomImage} alt="Random User" className="max-w-xs" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-4">{username}'s Details</h1>
            <p>Created: {userDetail.created}</p>
            <p>ID: {userDetail.id}</p>
            <p>Karma: {userDetail.karma}</p>
          </div>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
    </Layout>
  );
};

export default UserDetail;
