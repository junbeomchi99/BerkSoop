import React from "react";

const searchFilter = ({
    onChange,
  }: {
    onChange: React.ChangeEventHandler;
  }) => {
    return (
      <input
        className={'searchFilter'}
        type="text"
        onChange={onChange}
        placeholder="Search by the title ..."
      />
    );
  };

export default searchFilter;