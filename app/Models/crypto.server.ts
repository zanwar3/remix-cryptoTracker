import { LoaderFunction, json } from "@remix-run/node";
import { db } from "~/utils/db.server";

const ITEMS_PER_PAGE=10;

export const getByQuery = async (request:Request) =>{
  const { page = "1", search = "" } = Object.fromEntries(
    new URLSearchParams(request.url.split("?")[1])
  );

  const skip = parseInt(page) - 1 > 0 ? parseInt(page) - 1 : 1 * ITEMS_PER_PAGE;
  const take = ITEMS_PER_PAGE;

  const query = {
    OR: [{ symbol: { contains: search } }, { name: { contains: search } }],
  };

  const cryptos = await db.crypto.findMany({
    where: query,
    skip,
    take,
    orderBy: {
      id: "asc",
    },
  });

  const totalItems = await db.crypto.count({
    where: query,
  });

  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  return json({ cryptos, totalPages, page });
}