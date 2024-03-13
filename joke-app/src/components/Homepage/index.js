import React, { useEffect, useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

const Homepage = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10'
      );
      const data = await response.json();
      setJokes(data.jokes);
    } catch (error) {
      console.error('Error fetching jokes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFetchJokes = () => {
    fetchJokes();
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="homepage-container">
      <div>
        {loading ? (
          <TailSpin color="#00BFFF" height={50} width={50} />
        ) : (
          <table>
            <thead>
              <tr>
                <th>Jokes</th>
              </tr>
            </thead>
            <tbody>
              {jokes.map((joke) => (
                <tr key={joke.id}>
                  <td>{joke.joke}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div>
        <button className="btn btn-primary" onClick={handleFetchJokes} disabled={loading}>
          Fetch Jokes
        </button>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Homepage;
