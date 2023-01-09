import React from "react";
import styles from "./Form.module.css";
import { useSelector, useDispatch } from "react-redux";
// import reducer (action) and a value from store
import {
  formSubmit,
  deleteRow,
  createTransaction,
  getIndexEditedRow,
  editRow,
} from "./formSlice";

export default function Form() {
  // useSelector like react.setState - refresh data on page
  const dataSubmitted = useSelector(createTransaction);
  const indexEditedRow = useSelector(getIndexEditedRow);
  // redux wrapper for reducer (action)
  const dispatch = useDispatch();

  return (
    <div>
      {/* value from store: */}
      {/* <div>Data submitted: {dataSubmitted}</div> */}
      <h1>Financial Transactions:</h1>
      <form
        className={styles.form}
        onSubmit={(event) => {
          dispatch(
            formSubmit(
              JSON.stringify(Object.fromEntries(new FormData(event.target)))
            )
          );
        }}
      >
        <input
          type="text"
          name="accountNumber"
          placeholder="Account Number"
          defaultValue={
            indexEditedRow !== ""
              ? JSON.parse(dataSubmitted[indexEditedRow]).accountNumber
              : ""
          }
        ></input>
        <input
          type="text"
          name="fsc"
          placeholder="FSC"
          defaultValue={
            indexEditedRow !== ""
              ? JSON.parse(dataSubmitted[indexEditedRow]).fsc
              : ""
          }
        ></input>
        <input
          type="text"
          name="holderName"
          placeholder="A/C Holder Name"
          defaultValue={
            indexEditedRow !== ""
              ? JSON.parse(dataSubmitted[indexEditedRow]).holderName
              : ""
          }
        ></input>
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          defaultValue={
            indexEditedRow !== ""
              ? JSON.parse(dataSubmitted[indexEditedRow]).amount
              : ""
          }
        ></input>
        <input type="submit" />
      </form>
      <br />
      <div>
        {dataSubmitted.map((e, index) => {
          e = JSON.parse(e);
          return (
            <div className={styles.row} key={index}>
              <div className={styles.rowElement}>{e.accountNumber}</div>
              <div className={styles.rowElement}>{e.fsc}</div>
              <div className={styles.rowElement}>{e.holderName}</div>
              <div className={styles.rowElement}>{e.amount}</div>
              <button
                id={index}
                onClick={(event) => {
                  event.preventDefault();
                  dispatch(editRow(+event.target.id));
                }}
              >
                Edit
              </button>
              <button
                id={index}
                onClick={(event) => {
                  event.preventDefault();
                  dispatch(deleteRow(+event.target.id));
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
