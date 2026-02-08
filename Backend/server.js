require('dotenv').config()
const app = require('./src/app')
const connectToDB = require('./src/Config/database')

const PORT = process.env.PORT || 3000;

connectToDB();

app.listen(PORT, () => {
  console.log(`server is successfully running on port ${PORT}`);
});