import React, { useState } from "react";
import TableRow from "./TableRow";
import SearchBar from "./SearchBar";
import { Link } from "@remix-run/react";
import { useNavigate } from "react-router-dom";

interface CryptoCurrency {
  id: string;
  symbol: string;
  name: string;
  priceUsd: number;
  volumeUsd24Hr: number;
  changePercent24Hr: number;
}

const Table: React.FC<any> = (props) => {
  const { cryptos, page } = props;
  let currentPage = Number(page);
  const [query, setQuery] = useState("");
  const onSearch = (query: string) => {
    const navigate = useNavigate();
    setQuery(query);
    navigate(
      `/cryptoTable?page=${currentPage}&search=${encodeURIComponent(query)}`
    );
  };

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <div>
          {props.fav ? (
            <Link to={"/cryptoTable"} className="btn btn-sm">
              All
            </Link>
          ) : (
            <Link to={"/cryptoTable/1"} className="btn btn-sm">
              Mine
            </Link>
          )}
        </div>

        {!props.fav && (
          <div>
            <SearchBar onSearch={onSearch} />
          </div>
        )}
      </div>
      <table className="table table-md">
        <thead>
          <tr>
            <th className="py-2">Symbol</th>
            <th className="py-2">Name</th>
            <th className="py-2">Price</th>
            <th className="py-1">Trend</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cryptos &&
            cryptos.map((crypto: CryptoCurrency) => {
              return (
                <TableRow key={crypto.id} crypto={crypto} fav={props.fav} />
              );
            })}
        </tbody>
      </table>
      {!props.fav && (
        <div className="flex justify-end">
          <div className="join">
            <Link
              to={`/cryptotable?page=${
                currentPage - 1
              }&search=${encodeURIComponent(query)}`}
              className={`join-item btn`}
            >
              {"<<"}
            </Link>
            <button className="join-item btn">{currentPage}</button>
            <Link
              to={`/cryptotable?page=${
                currentPage + 1
              }&search=${encodeURIComponent(query)}`}
              className={`join-item btn`}
            >
              {">>"}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
