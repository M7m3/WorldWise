import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
export default function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      Map
      <h1>
        POsition lat:{lat} lng:{lng}
      </h1>
      <button onClick={() => setSearchParams({ lat: 23, lng: 16 })}>
        XXXXX
      </button>
    </div>
  );
}
