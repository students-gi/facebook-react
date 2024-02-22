import React from 'react';

type Heading1Props = {
  title: string
}

function Heading1({ title }: Heading1Props) {
  return (
    <h1>{title}</h1>
  );
}

export default Heading1;