


const Search = ({
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