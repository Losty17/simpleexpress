const express = require("express");
const app = express();

app.get("/bpm/form/:id", (req, res) => {
  const { id } = req.params;

  res.json({
    rows: [
      {
        index: 0,
        fields: [
          {
            name: "campo 1",
            type: "int",
            column: 0,
            colspan: 12,
          },
        ],
      },
    ],
  });
});

app.listen(5000, () => {
  console.log("Server running on port 3000");
});
