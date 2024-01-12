import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({options}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sort") || "";

  function handleChange(e) {
    searchParams.set("sort", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      value={sortBy}
      type="white"
      onChange={handleChange}
    ></Select>
  );
}

export default SortBy;
