import React from 'react';
import Button from '../../components/common/Button';

const NotFound = () => (
  <div className="container py-5 text-center text-white">
    <h1>404</h1>
    <p>That page could not be found.</p>
    <Button to="/">Go Home</Button>
  </div>
);

export default NotFound;
