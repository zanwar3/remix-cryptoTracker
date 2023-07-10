# Welcome to Crypto Tracker!
 A tracking app to keep trends of your favourite crypto currency in one place. 

## Setup
make sure you have 
- Node.js version (^14.17.0, or >=16.0.0)
- npm 7 or greater

From your terminal:

```sh
npm run install
```

This will install all the necessary packages.

```sh
npm run seed
```
this command will fetch data from [CoinCap API](https://api.coincap.io/v2/assets) and dump it into local DB using prisma-orm.
This process is server side and fetching is backend-backend

```sh
npm run dev
```
This command will start local development server  with port 3000 of remix and you can now navigate to [localhost](http://localhost:3000/) to check it out

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

## Architecture

- Install tailwind for remix [tailwind-remix](https://tailwindcss.com/docs/guides/remix)
- Install prisma for remix [follow this](https://remix.run/docs/en/1.18.1/tutorials/jokes#database)
- Install Daisy UI [follow this](https://daisyui.com/docs/install/)

### DataBase
check the `/prisma/schema`
- Crypto (Table that holds the all the crypto data from API)
- User (holds user details will be used in future for Auth)
- FavoriteCrypto (holds user specific  crypto pivot m-n relation between crypto & user)

### Routing
 It Follows remix dynamic routing `/app/routes` 
- GET `/`  landing page
- GET `/cryptoTable` table page to display all currecies with search and pagination
- GET `/cryptoTable?page=1&search=${searchString}` this route handles pagination and search on both columns `symbol` & `name`
- GET `/cryptoTable/${userId}` this page show only currencies that user have saved
- POST `/cryptoTable` this route is used internally by remix , via post submit using formData and actions

## Upcoming
- Code & structure refactor
- Complete User Authentication & Authorization
- Test suite
