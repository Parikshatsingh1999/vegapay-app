import { useRef, useContext } from "react";
import { MainContext, IContextItems } from "../../contexts/ContextMain";
import "./search.css";

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { searchUser } = useContext(MainContext) as IContextItems;

  const searchQuery = async (event: any) => {
    event.preventDefault();
    if (inputRef.current?.value && !event.target.disabled) {
      event.target.disabled = true;
      await searchUser(inputRef.current.value);
    }
    event.target.disabled = false;
  };

  const fieldChanged = async (event: any) => {
    if (event.target.value === "") {
      event.target.disabled = true;
      await searchUser("");
    }
    event.target.disabled = false;
  };

  return (
    <div className="main-element">
      <form onSubmit={searchQuery}>
        <div className="form-elements">
          <div className="input-box">
            <input
              onChange={fieldChanged}
              ref={inputRef}
              type="search"
              placeholder="Search by Mobile or Customer Name"
              required
            />
          </div>
          <div className="submit-btn">
            <button type="submit"> Search </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
