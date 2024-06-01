import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3306, () => {
  console.log('Server is running on port 3306');
});
