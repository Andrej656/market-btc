import React from 'react';
import CheckboxItem from './checkbox';

const Collection = () => {
  return (
    <>
      <form action="#">
        <div className="nft__filter-collection-search">
          <input type="text" placeholder="Search Collect" />
          <button type="submit"><i className="fa-regular fa-magnifying-glass"></i></button>
        </div>
        <CheckboxItem label="Generative Art" id="m-art" />
        <CheckboxItem label="Mono Art" id="m-mono" />
        <CheckboxItem label="Paper Dreams" id="m-paper" />
        <CheckboxItem label="Travel Without Moving" id="m-movie" />
        <CheckboxItem label="Dante Inferno" id="m-inferno" />
        <CheckboxItem label="The Ineffable" id="m-ineffable" />
      </form>
    </>
  );
};

export default Collection;