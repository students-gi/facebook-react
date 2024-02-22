import React from 'react';

type GreetingProps = {
  name: string
}

function Greeting({ name }: GreetingProps) {
  return (
    <h2>Hello there, {name}</h2>
  );
}

export default Greeting;