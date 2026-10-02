import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => res.send('BookVault API'));
// Only listen, don't connect to DB yet for this test
app.listen(PORT, () => console.log(`Running on ${PORT}`));

export default app;
