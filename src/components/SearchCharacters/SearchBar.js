import { gql, useLazyQuery } from "@apollo/client";
import Loading from "./Loading";
import React, { useState } from "react";
import SearchResult from "./SearchResult";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");

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

  const handleClick = (pageNumber) => {
    getCharacters({
      variables: { page: pageNumber, filter: { name: keyword } },
    });
  };

  const pages = () => {
    const result = [];
    const numberOfPages = Math.ceil(data.characters?.info?.count / 20);

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
          <div className="pages__counter">{pages()}</div>
        </>
      )}
      {error && <span className="search__error">No character found!</span>}
    </>
  );
};

export default SearchBar;
