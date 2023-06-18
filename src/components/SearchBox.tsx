import { ChangeEvent } from "react";

type SearchChangeProps = {
  searchChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ searchChange }: SearchChangeProps) => {
  return (
    <div className="pa2">
      <input
        className="tc pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="SEARCH ROBOTS"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
