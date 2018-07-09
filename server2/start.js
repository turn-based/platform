"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("boardgame.io/server");
const koa_helmet_1 = __importDefault(require("koa-helmet"));
const tic_tac_toe_1 = require("../shared/games/tic-tac-toe");
const PORT = process.env.PORT || 8000;
const server = server_1.Server({ games: [tic_tac_toe_1.TicTacToe] });
if (process.env.NODE_ENV !== 'development') {
    server.app.use(koa_helmet_1.default());
}
server.run(PORT, () => {
    console.log(`Serving at: http://localhost:${PORT}/`);
});