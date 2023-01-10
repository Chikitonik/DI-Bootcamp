import styles from "./Robots.module.css";
import { useSelector, useDispatch } from "react-redux";
// import reducer (action) and a value from store
import { robotsFilter, createTransaction } from "./robotsSlice";

export default function Robots() {
  // useSelector like react.setState - refresh data on page
  const robotsArr = useSelector(createTransaction);
  // redux wrapper for reducer (action)
  const dispatch = useDispatch();

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
            // using reducer (action) formSubmit:
            dispatch(
              robotsFilter(event.target.value)
              //   JSON.stringify(Object.fromEntries(new FormData(event.target)))
            );
          }}
        />
      </form>
      <div className={styles.cardList}>
        {robotsArr.map((e) => {
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
