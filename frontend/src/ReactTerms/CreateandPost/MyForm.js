// Frontend component or form
import React, { useState } from 'react';
import createArticle from './Articalpath';

const MyForm = () => {
  const [title, setTitle] = useState('');
  const [article, setArticle] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createArticle(title, article, name);
    } catch (error) {
      console.error('Error creating article:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={article}
        onChange={(e) => setArticle(e.target.value)}
        placeholder="Article"
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
