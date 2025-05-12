import React from 'react';

type HelloCardProps = {
  name: string;
  message?: string;
};

const HelloCard: React.FC<HelloCardProps> = ({ name, message }) => {
  return (
    <div className="p-4 m-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-bold text-blue-600">Hello, {name}!</h2>
      <p className="text-gray-700">
        {message || 'Welcome to your awesome React + TypeScript app!'}
      </p>
    </div>
  );
};

export default HelloCard;
