import Table from "~/components/Table/Table";
import { Link, useLoaderData } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";
import { getFav } from "~/Models/favoriteCrypto.server";

export const loader: LoaderFunction = async ({ params, request }) => {
  const cryptos = await getFav();

  return json({ cryptos, totalPages: 1, page: 1 });
};

export default function CryptoTable() {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      <Table {...data} fav={true} />
    </>
  );
}
