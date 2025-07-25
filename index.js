const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from CodePipeline Deployment!');
});

// Make sure it listens on 0.0.0.0 so it's accessible externally
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
