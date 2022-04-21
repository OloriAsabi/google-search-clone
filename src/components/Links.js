import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { id: 1, url: '/search', text: '  🔎 All ' },
  { id: 2,  url: '/news', text: '   📰 News ' },
  { id: 3,  url: '/images', text: ' 📸 Images ' },
  { id: 4,  url: '/videos', text: ' 📺 Videos ' },
];

export const Links = () => (
  <div className="flex sm:justify-around justify-between items-center mt-4">
    {links.map(({ url, text, id }) => (
      <NavLink to={url} key={id} className={(navData) => (navData.isActive ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2" : 'none')}>{text}</NavLink>
    ))}
  </div>
);