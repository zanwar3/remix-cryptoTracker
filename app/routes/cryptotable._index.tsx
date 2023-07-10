import Table from "~/components/Table/Table";
import { useLoaderData } from "@remix-run/react";
import { ActionArgs, json, LoaderFunction } from "@remix-run/node";
import { db } from "~/utils/db.server";
import {
  getUserByEmail,
  createFavoriteCrypto,
  getFav,
} from "~/Models/favoriteCrypto.server";
import { Link } from "@remix-run/react";
import { getByQuery } from "~/Models/crypto.server";

const ITEMS_PER_PAGE = 10;
export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const userId = await getUserByEmail(String(email));
  const cryptoId = formData.get("cryptoId");
  userId !== undefined &&
    (await createFavoriteCrypto(userId, String(cryptoId)));
  return null;
};

export const loader: LoaderFunction = async ({ request }) => {
  return await getByQuery(request);
};

export default function CryptoTable() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <Table {...data} />
    </>
  );
}
