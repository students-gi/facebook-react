import React, { useState } from 'react';
/*=====   Style imports   =====*/
import styles from './style.module.css';
/*===== Component imports =====*/
import Input from 'src/ui/atoms/Input';

function RegistrationForm() {
  // Defining the use-state hook
  const [userDetails, setUserDetails] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com'
  });

  return (
    <div id={styles.registrationForm}>
      <Input type='text'
        name='firstName'
        label="First name"
        placeholder="Your first name"

        value={userDetails.firstName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setUserDetails({
            ...userDetails,
            firstName: e.target.value
          });
        }}
      />

      <Input type='text'
        name='lastName'
        label="Last name"
        placeholder="Your last name (surname)"

        value={userDetails.lastName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setUserDetails({
            ...userDetails,
            lastName: e.target.value
          });
        }}
      />

      <Input type='email'
        name='email'
        label="Your email"
        placeholder="username@website.com"

        value={userDetails.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setUserDetails({
            ...userDetails,
            email: e.target.value
          });
        }}
      />

      <div id={styles.detailPreview}>
        <label>Your details for preview: </label>
        <span>
          {/*
           The seemingly random spaces between the quotes are there
           in order to separate the variables,
           otherwise they're all smushed together.
          */}
          {userDetails.firstName}{' '}
          {userDetails.lastName}{' '}
          ({userDetails.email})
        </span>
      </div>
    </div>
  );
}

export default RegistrationForm;