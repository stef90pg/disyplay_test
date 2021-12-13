import React from 'react';

export default ({ name, value, onChange, error }) => {
  return (
    <>
      <input
        type="email"
        name={name}
        className={error.length > 0 ? 'error' : null}
        placeholder="Email Address"
        value={value}
        onChange={onChange}
      />
      {error.length > 0 && <span className="errorMessage">{error}</span>}
    </>
  );
};
