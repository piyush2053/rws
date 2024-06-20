const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ExcelJS = require('exceljs');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/estimate", async (req, res) => {
    const {
        effortDays,
        numberOfResources,
        numberOfTesters,
        numberOfProjectManagers,
        projectName,
        assumptions,
        queries
    } = req.body;

    // Load the template Excel file
    const templateFilePath = path.join(__dirname, 'template.xlsx');
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(templateFilePath);

    // Modify sheet 1 (WBS)
    const sheet1 = workbook.getWorksheet('WBS');
    sheet1.getCell('E8').value = effortDays;
    sheet1.getCell('D2').value = projectName;

    // Modify sheet 2 (Schedule)
    const sheet2 = workbook.getWorksheet('Schedule');
    sheet2.getCell('B2').value = projectName;
    const resourcesStartRow = 7;
    for (let i = 0; i < numberOfResources; i++) {
        sheet2.getCell(`B${resourcesStartRow + i}`).value = `Resource ${i + 1}`;
    }

    // Modify sheet 3 (Assumption & Queries)
    const sheet3 = workbook.getWorksheet('Assumption & Queries');
    // Write assumptions starting from C4
    sheet3.getCell("D2").value = projectName

    for (let i = 0; i < assumptions.length; i++) {
        sheet3.getCell(`C${4 + i}`).value = assumptions[i];
    }
    // Write queries starting from C8
    for (let i = 0; i < queries.length; i++) {
        sheet3.getCell(`F${4 + i}`).value = queries[i];
    }

    // Generate a temporary file path for the new Excel file
    const outputFile = path.join(__dirname, `output_${Date.now()}.xlsx`);

    // Save the workbook to the temporary file
    await workbook.xlsx.writeFile(outputFile);

    // Stream the generated Excel file as a response
    const fileContents = fs.readFileSync(outputFile);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=estimate.xlsx');
    res.send(fileContents);
    fs.unlinkSync(outputFile);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
