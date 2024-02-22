import React from 'react';
/*===== Style imports =====*/
import styles from './style.module.css';

type CardProps = {
  title: string,
  subtitle?: string,
  paragraph?: string
}

function Card({ title, subtitle, paragraph }: CardProps) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>

      <p>{paragraph}</p>
    </div>
  );
}

export default Card;