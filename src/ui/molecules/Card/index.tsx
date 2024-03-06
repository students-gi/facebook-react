import React from 'react';
/*===== Style imports =====*/
import styles from './style.module.css';

type CardProps = {
  title: string,
  subtitle?: string,
  paragraph?: string
  className?: string
}

function Card({ title, subtitle, paragraph, className }: CardProps) {
  return (
    <div className={`${styles.card} ${className}`}>
      <h2>{title}</h2>
      {subtitle ? <h3>{subtitle}</h3> : null}

      {paragraph ? <p>{paragraph}</p> : null}
    </div>
  );
}

export default Card;