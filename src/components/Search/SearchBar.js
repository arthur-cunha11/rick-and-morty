import { gql, useLazyQuery } from "@apollo/client";
import arrow from "../../images/Arrow.svg";
import Loading from "../Loading";
import React, { useState } from "react";
import SearchResult from "./SearchResult";

// This components renders the search bar, button and pagination
const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);

  // Query to get all characters's data
  const GET_CHARACTERS = gql`
    query getCharacters($page: Int, $filter: FilterCharacter) {
      characters(page: $page, filter: $filter) {
        info {
          count
        }
        results {
          id
          name
          status
          species
          type
          gender
          origin {
            name
            type
            dimension
            residents {
              name
            }
          }
          location {
            name
            type
            dimension
            residents {
              name
            }
          }
          image
          episode {
            air_date
          }
        }
      }
    }
  `;

  const [getCharacters, { data, error, loading }] = useLazyQuery(
    GET_CHARACTERS
  );

  const count = data?.characters?.info?.count;
  // The query always returns 20 results max, so it divides by 20 to know the number of pages
  const numberOfPages = count > 20 ? Math.ceil(count / 20) : 1;

  // Execute query when search or pagination buttons are clicked
  const handleClick = (pageNumber) => {
    // Check if the input field is not blank
    if (keyword.replace(/\s/g, "").length) {
      getCharacters({
        variables: { page: pageNumber, filter: { name: keyword } },
      });
    }
    setPage(pageNumber);
  };

  // Render pagination buttons
  const pages = () => {
    const result = [];

    for (let i = 1; i <= numberOfPages; i++) {
      result.push(
        <p
          className={`pages__counter--${i}`}
          onClick={() => handleClick(i)}
          key={i}
        >
          {i}
        </p>
      );
    }

    return result;
  };

  // It fixes background height issues when query is loading or complete
  if (data) document.querySelector(".background").classList.add("new__height");
  if (error || loading)
    document.querySelector(".background").classList.remove("new__height");
  if (loading) return <Loading />;

  return (
    <>
      <div className="search">
        <div className="search__field">
          <input
            value={keyword}
            placeholder={"Search characters"}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <div className="search__button">
          <button onClick={() => handleClick(1)} type="button">
            Search
          </button>
        </div>
      </div>
      {data && (
        <>
          <div className="search__result">
            <SearchResult characters={data.characters} />
          </div>
          <div className="search__pagination">
            <img
              alt="Left side arrow"
              className="pages__arrow--left"
              onClick={() => handleClick(page > 1 ? page - 1 : page)}
              src={arrow}
            />
            <div className="pages__counter">{pages()}</div>
            <img
              alt="Right side arrow"
              className="pages__arrow--right"
              onClick={() =>
                handleClick(page < numberOfPages ? page + 1 : page)
              }
              src={arrow}
            />
          </div>
        </>
      )}
      {error && <span className="search__error">No character found!</span>}
    </>
  );
};

export default SearchBar;
