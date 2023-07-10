import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Table from "./Table";

// Mock data for cryptos
const cryptos = [
  {
    id: "1",
    symbol: "BTC",
    name: "Bitcoin",
    priceUsd: 50000,
    volumeUsd24Hr: 1000000,
    changePercent24Hr: 0.5,
  },
  {
    id: "2",
    symbol: "ETH",
    name: "Ethereum",
    priceUsd: 3000,
    volumeUsd24Hr: 500000,
    changePercent24Hr: 0.2,
  },
];

describe("Table", () => {
  test("renders table with cryptos", () => {
    render(<Table cryptos={cryptos} page={1} fav={true} />);

    // Check if table headers are rendered
    expect(screen.getByText("Symbol")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Price")).toBeInTheDocument();
    expect(screen.getByText("Trend")).toBeInTheDocument();

    // Check if crypto data is rendered
    expect(screen.getByText("BTC")).toBeInTheDocument();
    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
    expect(screen.getByText("$50,000")).toBeInTheDocument();
    expect(screen.getByText("+0.5%")).toBeInTheDocument();

    expect(screen.getByText("ETH")).toBeInTheDocument();
    expect(screen.getByText("Ethereum")).toBeInTheDocument();
    expect(screen.getByText("$3,000")).toBeInTheDocument();
    expect(screen.getByText("+0.2%")).toBeInTheDocument();
  });
});
