import React, { useState } from "react";
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/20/solid";
import Modal from "./Modal";

interface CryptoCurrency {
  id: string;
  symbol: string;
  name: string;
  priceUsd: number;
  volumeUsd24Hr: number;
  changePercent24Hr: number;
}

interface CryptoTableRowProps {
  crypto: CryptoCurrency;
  fav:boolean;
}

const TableRow: React.FC<CryptoTableRowProps> = ({ crypto,fav }) => {

  let change = crypto.changePercent24Hr.toFixed(2);
  let isPositive = Number(change) > 0;
  return (
    <>
    <tr>
      <td className="py-2">{crypto.symbol}</td>
      <td className="py-2">{crypto.name}</td>
      <td className="py-2">{crypto.priceUsd.toFixed(2)}</td>
      <td className="py-1">
        {isPositive ? (
          <ArrowTrendingUpIcon className="btn-xs text-success" />
        ) : (
          <ArrowTrendingDownIcon className="btn-xs text-error" />
        )}
      </td>
      <td>
      <label htmlFor={`modal_${crypto.id}`} className="btn btn-xs">
            Details
      </label>
      </td>
    </tr>
        <Modal key={`main_modal_${crypto.id}`} crypto={crypto} fav={fav} />
    </>
  );
};

export default TableRow;
