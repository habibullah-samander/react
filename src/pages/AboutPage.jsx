import React from 'react';
import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About This Project</h1>
        <p>This a React app to leave feedback for a product or services</p>
        <p>Version:1.0.0 </p>
        <p>
          <Link
            to={{
              pathname: '/',
            }}
          >
            Back To Home
          </Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
