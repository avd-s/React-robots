import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {      //using React props
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'          // Tachyons styling
        type='search'
        placeholder='search robots'
        onChange={searchChange}                               // invoke fn in parent component
      />
    </div>
  );
}

export default SearchBox;
