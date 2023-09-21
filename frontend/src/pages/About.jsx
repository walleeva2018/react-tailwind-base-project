// About.js
import React from 'react';
import Layout from '../Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-blue-600 py-4">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-lg mt-2">
           My Name is Zubair Ahmed Rafi . <br></br>
           Age: 25 <br></br>
           Residence: Moulvibazar <br></br>
           Education: Bsc from SUST CSE <br></br>
          </p>

          {/* Description */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Description</h2>
            <p className="text-lg mt-2">
           I am a workaholic person. I am Full-Time frontend developer and loves to code compete and collaborate
            </p>
          </div>

          {/* Links */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Connect with Me</h2>
            <div className="mt-2">
              <a
                href="https://www.linkedin.com/in/zubair-ahmed-rafi-95ba3322a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline font-bold mx-2"
              >
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
              <a
                href="https://github.com/walleeva2018"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline font-bold mx-2"
              >
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100015181156377"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline font-bold mx-2"
              >
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </a>
            </div>
          </div>

          {/* CV */}
          <div className="mt-6">
            <p className="text-lg mt-2">
              <a
                href="https://drive.google.com/file/d/1_DllViYZuGHGw5-hgD38kGp9RniUIxUT/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md mx-2">
                  My CV
                </button>
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
