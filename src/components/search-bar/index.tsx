import { useId, useRef, useState } from 'react';

import SearchIcon from '../icons/search';
import { Form, Input, Label, SearchButton } from './styled';

interface Props {
  onSubmit: (value: string) => void;
}

const SearchBar = ({ onSubmit }: Props) => {
  const id = useId();

  const [value, setValue] = useState<string>('');

  const ref = useRef<HTMLInputElement>(null);

  return (
    <Form
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        if (value.length) onSubmit(value);
      }}
    >
      <Label htmlFor={id}>
        <Input
          id={id}
          ref={ref}
          value={value}
          placeholder="Search users"
          autoComplete="off"
          onChange={({ target }) => setValue(target.value)}
        />
        <SearchButton type="submit">
          <SearchIcon size={20} weight={2} />
        </SearchButton>
      </Label>
    </Form>
  );
};

export default SearchBar;
