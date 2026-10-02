import express from 'express';
const app = express();

app.get('/', (req, res) => res.send('BookVault API'));
// Only listen, don't connect to DB yet for this test
app.listen(PORT, () => console.log(`Running on ${PORT}`));

export default app;
