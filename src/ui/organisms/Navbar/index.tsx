import React from "react";
import { NavLink } from 'react-router-dom';
/*=====   Style imports   =====*/
import styles from './style.module.scss';
/*===== Component imports =====*/

interface navLink {
  text: string,
  path: string
}

interface navLinkDropdown {
  title: string,
  path?: string,
  contents?: navLink[]
}

function Navbar() {
  const categories: navLinkDropdown[] = [
    {
      title: "React Basics",
      path: 'basic',
      contents: [
        {
          path: 'card',
          text: "Cards"
        },
        {
          path: 'guess',
          text: "Number guess"
        },
        {
          path: 'register',
          text: "Registration"
        },
        {
          path: 'meals',
          text: "Meal card"
        },
        {
          path: 'wallet',
          text: "Wallet"
        },
        {
          path: 'day',
          text: "Current day"
        },
        {
          path: 'images',
          text: "Imageboard"
        },
        {
          path: 'sounds',
          text: "Soundboard"
        },
        {
          path: 'calc',
          text: "Calculator"
        }
      ]
    },
    {
      title: "React Advanced",
      path: 'advanced',
    }
  ]

  return (
    <nav id={styles.Navbar}>
      {categories?.map((category: navLinkDropdown, categoryIndex: number) => (
        <div key={categoryIndex} className={styles.category}>
          {/* The top category item */}
          <NavLink className={styles.categoryTitle}
            to={category.path ? `/${category.path}` : '#'}>
            {category.title}
          </NavLink>

          {category.contents ?
            <ul className={styles.categoryContents}>
              <hr />
              {category.contents.map((link: navLink, linkIndex: number) => (
                <li key={linkIndex}>
                  {/* The child link item */}
                  <NavLink className={styles.link}
                    to={`/${category.path}/${link.path}`}>
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          : ''}
        </div>
      ))}
    </nav>
  );
}

export default Navbar;
