import { SearchInputContainer } from '../../styleComponents/utilsStyles/SearchInputStyle';

const SearchInput = ({ value = '', onChange, placeholder = '' }) => (
  <SearchInputContainer>
    <div className="search_t">
      <img src="/img/search.png" alt="" className="search_icon" />
      <input
        id="search"
        type="search"
        name="search"
        className="search_input"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  </SearchInputContainer>
);
export default SearchInput;
