import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
export default function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer}>
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
