import React from 'react';

const Sidebar = () => {
  const resources = [
    { title: 'Renewal Form', link: 'https://www.google.com', contentSnippet: 'description here' },
    { title: 'Transfer Form', link: 'https://www.google.com', contentSnippet: 'description here' },
    { title: 'Other Form', link: 'https://www.google.com', contentSnippet: 'description here' },
    { title: 'Other Form', link: 'https://www.google.com', contentSnippet: 'description here' },
    { title: 'Other Form', link: 'https://www.google.com', contentSnippet: 'description here' },
    { title: 'Other Form', link: 'https://www.google.com', contentSnippet: 'description here' },
    { title: 'Other Form', link: 'https://www.google.com', contentSnippet: 'description here' },
    { title: 'Other Form', link: 'https://www.google.com', contentSnippet: 'description here' },
  ];
  return (
    <div>
      <ul>
        {resources.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.title}: </a>
            <span dangerouslySetInnerHTML={{ __html: item.contentSnippet }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
