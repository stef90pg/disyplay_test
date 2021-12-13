import React from 'react';

export default ({ name, value, onChange, error }) => {
  return (
    <>
      <textarea
        name={name}
        className={error.length > 0 ? 'error' : null}
        value={value}
        onChange={onChange}
      />
      {error.length > 0 && <span className="errorMessage">{error}</span>}
    </>
  );
};
