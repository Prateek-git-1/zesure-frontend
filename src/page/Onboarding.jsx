import React from 'react';
import { useNavigate } from 'react-router-dom';
import bg from '../assets/background1.jpg';

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100 text-white vw-100" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover',backgroundPosition: 'center',backgroundRepeat: 'no-repeat' }}>
      <h1>Zecure</h1>
      <p>Because Every Click Matters!</p>
      <button className="btn btn-outline-light rounded-pill px-4 py-2 mt-4 " onClick={() => navigate('/home')}
      style={{
        backgroundColor: '#492532',
        border: 'none'
      }}
      >
        → Get Started
      </button>
    </div>
  );
};

export default Onboarding;

// backgroundImage: `url(${bg})`