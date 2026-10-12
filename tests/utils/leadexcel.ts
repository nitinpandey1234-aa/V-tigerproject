import ExcelJS from 'exceljs';

export interface LeadData {
    lastName: string;
    company: string;
    title: string;
    phone: string;
    email: string;
    website: string;
}

export async function readLeadData(): Promise<LeadData[]> {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile('./tests/exceldata.xlsx');

    const sheet = workbook.getWorksheet('Lead');

    if (!sheet) {
        throw new Error('Lead sheet not found');
    }

    const leads: LeadData[] = [];

    sheet.eachRow((row, rowNumber) => {
        if (rowNumber === 1) return;

        const leadData: LeadData = {
            lastName: row.getCell(4).text.trim(),
            company: row.getCell(5).text.trim(),
            title: row.getCell(6).text.trim(),
            phone: row.getCell(7).text.trim(),
            email: row.getCell(8).text.trim(),
            website: row.getCell(9).text.trim(),
        };

        if (Object.values(leadData).every((value) => value === '')) {
            return;
        }

        leads.push(leadData);
    });

    return leads;
}
