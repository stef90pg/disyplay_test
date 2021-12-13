import React from 'react';

export default ({ name, placeholder, value, onChange, error }) => {
  return (
    <>
      <input
        type="text"
        name={name}
        className={error.length > 0 ? 'error' : null}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error.length > 0 && <span className="errorMessage">{error}</span>}
    </>
  );
};
