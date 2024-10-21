import { Icon } from "../Icon/Icon";
import "./Search.css";

type SearchProps = {
  searchValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Search(props: SearchProps) {
  return (
    <div className="Search-wrap">
      <Icon
        className="Search-icon"
        iconName="magnifier"
        color="grey"
        size={21}
        sx={{ height: "100%" }}
      />

      <input
        value={props.searchValue}
        onChange={props.handleChange}
        type="search"
        placeholder="Search user..."
        className="Search-input"
      />
    </div>
  );
}
