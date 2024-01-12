import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-dec", label: "Sort by name (Z-A)" },
          { value: "max_capacity-asc", label: "Sort by capacity (low first)" },
          { value: "max_capacity-dec", label: "Sort by capacity (high first)" },
          { value: "regular_price-asc", label: "Sort by price (low first)" },
          { value: "regular_price-dec", label: "Sort by price (high first)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
