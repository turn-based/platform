import { Server } from 'boardgame.io/server';
import KoaHelmet from 'koa-helmet';
import { TicTacToe } from '../shared/games/tic-tac-toe';

const PORT = process.env.PORT || 8000;

const server = Server({games: [TicTacToe]});

if (process.env.NODE_ENV !== 'development') {
    server.app.use(KoaHelmet());
}

server.run(PORT, () => {
    console.log(`Serving at: http://localhost:${PORT}/`);
});
