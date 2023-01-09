import React from "react";
import articles from "../../data/articles.json";
import { useSelector, useDispatch } from "react-redux";
import { filter, filterArticle } from "./searchSlice";

export default function Search() {
  const filterText = useSelector(filterArticle);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        onChange={(event) => dispatch(filter(event.target.value))}
        placeholder="filter text"
      ></input>
      <ul>
        {articles.map((article, index) => {
          if (article.title.toLowerCase().includes(filterText)) {
            return (
              <li key={index}>
                <a href={article.url}>{article.title}</a>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
