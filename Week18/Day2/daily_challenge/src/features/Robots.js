import { useEffect } from "react";
import styles from "./Robots.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  filterRobots,
  fetchRobots,
  selectRobots,
  selectStatus,
} from "./robotsSlice";

export default function Robots() {
  const status = useSelector(selectStatus);
  const robots = useSelector(selectRobots);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRobots());
  }, []);

  return (
    <div className={styles.main}>
      <h1>ROBOFRIENDS</h1>
      <form>
        <input
          type="text"
          placeholder="search"
          className={styles.search}
          onChange={(event) => {
            event.preventDefault();
            dispatch(filterRobots(event.target.value));
          }}
        />
      </form>
      <div className={styles.cardList}>
        {status === "loading" && <p>Loading...</p>}
        {status === "error" && <p>An error, try again</p>}
        {robots.length > 0 &&
          robots.map((e) => {
            return (
              <div key={e.id} className={styles.card}>
                <img
                  className={styles.avatar}
                  src={`https://robohash.org/${e.username}.png`}
                  alt={e.username}
                ></img>
                <div>
                  <b>Name:</b> {e.name}
                </div>
                <div>
                  <b>Email:</b> {e.email}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
