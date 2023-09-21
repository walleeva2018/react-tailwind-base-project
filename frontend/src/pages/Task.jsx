import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Layout from '../Layout';

const HackerNewsService = () => {
  const [topStories, setTopStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the top story IDs
        const response = await axios.get(
          'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
        );
        // Take the top 10 story IDs
        const top10StoryIds = response.data.slice(0, 10);

        // Fetch details for each top story
        const storyPromises = top10StoryIds.map(async (storyId) =>
          axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`)
        );

        // Resolve all promises
        const storyResponses = await Promise.all(storyPromises);
        const stories = storyResponses.map((response) => response.data);

        setTopStories(stories);
        setLoading(false); // Data loading is complete
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false even on error
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
    <div className="container mx-auto mt-6">
      <h1 className="text-2xl font-semibold mb-4">Top 10 Hacker News Stories</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
            {topStories.map((story) => (
              <li key={story.id} className="mb-4">
                <a
                  href={story.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                {story.title}
                </a>
                <p className="text-gray-500">
                  Score: {story.score} by{' '}
                  <Link to={`/user/${story.by}`} className="text-blue-500 hover:underline">
                    {story.by}
                  </Link>
                </p>
            </li>
          ))}
</ul>
      )}
    </div>
    </Layout>
  );
};

export default HackerNewsService;
