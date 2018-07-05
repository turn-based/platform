import express from 'express';
import {X} from '../shared/test';

const app = express();

app.get('/', (req, res) => {
    res.status(200).send(`Hello, world! got ${X} from shared lib`).end();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});
