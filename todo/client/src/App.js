// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
const apiUrl = 'http://localhost:3001';
axios.interceptors.request.use(
  config => {
    const { origin } = new URL('http://localhost:3000');
    const allowedOrigins = [apiUrl];
    const token = localStorage.getItem('token');
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
function App() {
  const [newFoodMessage, setNewFoodMessage] = useState(null);
  const storedJwt = localStorage.getItem('token');
  const [jwt, setJwt] = useState(storedJwt || null);
  const [foods, setFoods] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const getCsrfToken = async () => {
      const { data } = await axios.get('/csrf-token');
      axios.defaults.headers.post['X-CSRF-Token'] = data.csrfToken;
     };
    getCsrfToken();
  }, []);

  const getJwt = async () => {
    const { data } = await axios.get(`/jwt`);
    setJwt(data.token);
  }
  
  const getFoods = async () => {
    try {
      const { data } = await axios.get(`/foods`);
      setFoods(data);
      setFetchError(null);
    } catch (err) {
      setFetchError(err.message);
    }
  };

  const createFood = async () => {
    try {
      const { data } = await axios.post('/foods');
      setNewFoodMessage(data.message);
      setFetchError(null);
    } catch (err) {
      setFetchError(err.message);
    }
  };
return (
    <>
      <section style={{ marginBottom: '10px' }}>
        <button onClick={() => getJwt()}>Get JWT</button>
        {jwt && (
          <pre>
            <code>{jwt}</code>
          </pre>
        )}
      </section>
      <section>
        <button onClick={() => getFoods()}>
          Get Foods
        </button>
        <ul>
          {foods.map((food, i) => (
            <li>{food.description}</li>
          ))}
        </ul>
        {fetchError && (
          <p style={{ color: 'red' }}>{fetchError}</p>
        )}
      </section>
      <section>
        <button onClick={() => createFood()}>
          Create New Food
        </button>
        {newFoodMessage && <p>{newFoodMessage}</p>}
      </section>
    </>
  );
}
export default App;