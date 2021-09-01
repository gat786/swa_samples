import * as React from 'react';
import { useState } from 'react';

const Homepage = () => {
  return <div className="flex flex-col items-center justify-center h-screen">
    <p className="text-4xl">Welcome to home page bros.</p>
    <div className="text-blue-500 text-3xl my-4">I'm styled with tailwind</div>
    <div className="text-2xl">I am routed with help of react-router</div>
  </div>
}

export default Homepage;
