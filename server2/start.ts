import { Server } from 'boardgame.io/server';
import KoaHelmet from 'koa-helmet';
import { TicTacToe } from '../shared/games/tic-tac-toe';

const PORT = process.env.PORT || 8001;

const server = Server({games: [TicTacToe]});

if (process.env.NODE_ENV !== 'development') {
    server.api.use(KoaHelmet());
}

(async () => {
    await server.db.connect();
    server.api.listen(PORT, () => {
        console.log(`Serving at: http://localhost:${PORT}/`);
    });
})();