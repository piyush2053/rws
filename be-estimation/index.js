const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ExcelJS = require('exceljs');
const path = require('path');
const fs = require('fs');
const { MakingSchedule } = require('./Utils/Scheduler.ts');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/estimate", async (req, res) => {
    try {
        const {
            effortDays,
            numberOfResource,
            numberOfTester,
            numberOfProjectManager,
            projectName,
            assumptions,
            queries,
            ai_input
        } = req.body;
        const templateFilePath = path.join(__dirname, 'template.xlsx');
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(templateFilePath);

        const sheet1 = workbook.getWorksheet('WBS');
        sheet1.getCell('E8').value = Number(effortDays);
        sheet1.getCell('E10').value = Number(0);
        sheet1.getCell('E11').value = Number(0);
        sheet1.getCell('E12').value = Number(0);
        sheet1.getCell('E13').value = Number(0);
        sheet1.getCell('D2').value = projectName;

        const sheet2 = workbook.getWorksheet('Schedule');
        sheet2.getCell('B2').value = projectName;
        sheet2.getCell("B7").value = `Resources - (${numberOfResource})`;
        sheet2.getCell("B8").value = `Tester - (${numberOfTester})`;
        sheet2.getCell("B9").value = `Project Manager - (${numberOfProjectManager})`;

        const sheet3 = workbook.getWorksheet('Assumption & Queries');
        sheet3.getCell("D2").value = projectName
        MakingSchedule(assumptions, sheet3, sheet2, workbook, effortDays, numberOfResource, numberOfTester, numberOfProjectManager, queries, ai_input);
        
        const outputFile = path.join(__dirname, `output_${Date.now()}.xlsx`);

        await workbook.xlsx.writeFile(outputFile);
        fs.chmodSync(outputFile, 0o666); //have done this to allow the file to be downloaded
        const fileContents = fs.readFileSync(outputFile);
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename="estimate.xlsx"');
        res.setHeader('Cache-Control', 'no-cache');
        res.send(fileContents);
        fs.unlinkSync(outputFile);
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).send("Something went wrong");
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
