const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3005; // WHY: 3000-3004 are taken by other projects

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`[miami-ferrari-rally] Running at http://localhost:${PORT}`);
});
