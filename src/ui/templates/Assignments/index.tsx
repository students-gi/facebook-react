import React from 'react';
/*=====   Style imports   =====*/
import styles from './style.module.css';
/*===== Component imports =====*/
import Heading1 from 'src/ui/atoms/Heading1';
import Navbar from 'src/ui/organisms/Navbar';

interface AssignmentsProps {
  title: string,
  organism: React.ReactNode
}

function Assignments({ title, organism }: AssignmentsProps) {
  return (
    <div id={styles.Assignments}>
      <Navbar />
      <Heading1 title={title} />
      <div className={styles.Content}>
        {organism}
      </div>
    </div>
  );
}

export default Assignments;
