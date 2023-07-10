import { db } from "~/utils/db.server";

const ITEMS_PER_PAGE = 10;

export const createFavoriteCrypto = async (
  userId: string,
  cryptoId: string
) => {
  const favoriteCrypto = await db.favoriteCrypto.create({
    data: {
      userId,
      cryptoId,
    },
  });

  return favoriteCrypto;
};

export const getUserByEmail = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });

  return user?.id;
};

export const getFav = async () => {
  const userId = await getUserByEmail("dummy@data.com");
  const cryptoData = await db.crypto.findMany({
    where: {
      favoriteCryptos: {
        some: {
          userId,
        },
      },
    },
  });

  return cryptoData;
};
