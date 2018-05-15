const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const compression = require('compression');

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.text({defaultCharset: 'utf-8'}));
app.use(compression());

app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
});

app.listen(PORT, function() {
  console.log(`App is running on http://localhost:${PORT}`);
});