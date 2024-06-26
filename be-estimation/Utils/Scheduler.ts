const MakingSchedule = (assumptions, sheet3, sheet2, workbook, effortDays, numberOfResource, numberOfTester, numberOfProjectManager, queries, ai_input) => {
    for (let i = 0; i < assumptions.length; i++) {
        sheet3.getCell(`C${4 + i}`).value = assumptions[i];
    }
    for (let i = 0; i < queries.length; i++) {
        sheet3.getCell(`F${4 + i}`).value = queries[i];
    }
    const sheet4 = workbook.getWorksheet('AI Input');
    sheet4.getCell('A2').value = JSON.stringify(ai_input).replace(/\*/g, '').replace(/\#/g, '').replace(/\\n/g, '').replace('{"response":"', '');

    let effortsTemp = effortDays
    const dailyHoursPerResource = 8;
    const totalPersonDays = effortsTemp * dailyHoursPerResource;
    const personDaysPerResource = totalPersonDays / numberOfResource;

    let currentRow = 7;
    let currentColumn = 'G';
    for (let i = 0; i < effortsTemp; i++) {
        console.log(effortsTemp, 'effortsTemp')
        sheet2.getCell(`${currentColumn}${currentRow}`).value = dailyHoursPerResource * numberOfResource;
        currentColumn = String.fromCharCode(currentColumn.charCodeAt(0) + 1);
        if (currentColumn > 'Z') {
            currentColumn = 'AA';
        }
        effortsTemp -= dailyHoursPerResource * numberOfResource;
        if (effortsTemp <= dailyHoursPerResource) {
            break;
        }
    }

    if (numberOfTester > 0) {
        currentRow = 8;
        let currentColumn = 'G';
        for (let i = 0; i <= Math.min(effortsTemp, dailyHoursPerResource * numberOfTester); i++) {
            sheet2.getCell(`${currentColumn}${currentRow}`).value = dailyHoursPerResource * numberOfTester;
            currentColumn = String.fromCharCode(currentColumn.charCodeAt(0) + 1);
        }
        effortsTemp -= Math.min(effortsTemp, dailyHoursPerResource * numberOfTester);
    }

    if (numberOfProjectManager > 0) {
        currentRow = 9;
        let currentColumn = 'G';
        for (let i = 0; i <= Math.min(effortsTemp, dailyHoursPerResource * numberOfProjectManager); i++) {
            sheet2.getCell(`${currentColumn}${currentRow}`).value = dailyHoursPerResource * numberOfProjectManager;
            currentColumn = String.fromCharCode(currentColumn.charCodeAt(0) + 1);
        }
        effortsTemp -= Math.min(effortsTemp, dailyHoursPerResource * numberOfTester);
    }

}


module.exports = { MakingSchedule };