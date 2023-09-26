const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const xlsx = require("xlsx");

app.use(bodyParser.json());

// API endpoint to save form data to Excel
app.post("/api/saveFormToExcel", (req, res) => {
  const formData = req.body;

  // Process the form data and save it to an Excel file
  // For example, using the 'xlsx' library
  const workbook = xlsx.utils.book_new();
  const worksheet = xlsx.utils.json_to_sheet([formData]);
  xlsx.utils.book_append_sheet(workbook, worksheet, "Form Data");
  xlsx.writeFile(workbook, "form_data.xlsx");

  // Respond with success status
  res.sendStatus(200);
});

const PORT = 5000; // Replace this with your desired port number
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
