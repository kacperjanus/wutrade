# WUTrade

WUTrade - an educational web application that simulates the American stock exchange. Each user has an individual account with a virtual balance that allows him to make transactions based on real stock market data obtained by the app with external API.

The application is designed in the React JavaScript library supplemented with external libraries. The application uses a database service with user authentication that stores transaction and watchlist data. Financial data is pulled into the app with Alpha Vantage API, which allows access to various historical and currently relevant data.

Gamification of the trading experience takes the shape of leader boards where users can compare their market profit with other users. This introduces a social aspect of the game that may incite users to continue using the app. Since there is no risk involved, users can see what it takes to become a day trader (a person who sells company shares on the same day they were bought) who usually is exposed to a significant risk of losing their capital.

[CLICK HERE TO SEE APPLICATION'S DEMO](https://youtu.be/iYnNBBEP-mQ)

## Installation

Use [nvm](https://github.com/nvm-sh/nvm) to install npm and Node.js.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Check if the installation was successful

```bash
node -v
```

Install all necessary packages

```bash
npm install
```

## Usage

Run the project in development mode and open the browser at provided localhost url.

```bash
npm run dev
```

## Project status

The engineering thesis that was dedicated to the development process of WUTrade has been defended. All necessary features have been implemented and the project is now archived. Due to the fact that Alpha Vantage API requires monthly payments that I cannot afford, the application cannot be used on daily basis.
