import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      {lat} : {lng}
      <button
        onClick={() => {
          setSearchParams({ lat: 2, lng: 3 });
        }}
      >
        Change
      </button>
    </div>
  );
}

export default Map;
