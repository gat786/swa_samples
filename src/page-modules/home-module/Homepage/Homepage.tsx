import * as React from 'react';
import { useState } from 'react';

const Homepage = () => {
  return <div className="flex flex-col gap-4 items-center justify-center h-screen">
    <p className="text-4xl">Trying out Static Web apps authentication</p>
    <p className="text-blue-500">Go to `/login` to try out logging in</p>
  </div>
}

export default Homepage;
