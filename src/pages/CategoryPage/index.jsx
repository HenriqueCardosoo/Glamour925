// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { categoryName } = useParams();

  const renderCategoryContent = () => {
    switch (categoryName) {
      case 'anéis':
        return <div></div>;
      case 'pulseira':
        return <div></div>;
      case 'brincos':
        return <div></div>;
      case 'colares':
        return <div></div>;
      case 'pingentes':
        return <div></div>;
      case 'alianças':
        return <div></div>;
    }
  };

  return (
    <div>
      <h1>{categoryName}</h1>
      {renderCategoryContent()}
    </div>
  );
};

export default CategoryPage;
