import { json } from "@remix-run/node";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  console.log("fetching data from api.......");
  const cryptos: any = await getCryptos();
  console.log(`data fetched.......${cryptos.data.length} objects`);

  for (const crypto of cryptos.data) {
    const data = { ...crypto };
    await db.crypto.upsert({
      where: { id: crypto.id },
      update: convertObj(crypto),
      create: convertObj(crypto),
    });
  }

 await db.user.upsert({
    where: { email: "dummy@data.com" },
    update: {email: "dummy@data.com",name:"dummy"},
    create: {email: "dummy@data.com",name:"dummy"},
  });

  console.log("database seeded.......");
}

seed();

async function getCryptos() {
  const res = await fetch("https://api.coincap.io/v2/assets");
  return await res.json();
}

function convertObj(obj: any) {
  const { priceUsd, volumeUsd24Hr, changePercent24Hr, id, symbol, name } = obj;
  return {
    priceUsd: Number(priceUsd),
    volumeUsd24Hr: Number(volumeUsd24Hr),
    changePercent24Hr: Number(changePercent24Hr),
    id,
    symbol,
    name,
  };
}
