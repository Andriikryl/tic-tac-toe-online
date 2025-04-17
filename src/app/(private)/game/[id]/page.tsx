
import React from 'react';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div>
      <p>Game ID: {id}</p>
    </div>
  );
}