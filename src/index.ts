export const edgarMissingTxtAccessionNumbers = [
    '0000898733-94-000138', // https://www.sec.gov/Archives/edgar/data/804747/0000898733-94-000138-index.html
    '0000065103-95-000120', // https://www.sec.gov/Archives/edgar/data/65100/0000065103-95-000120-index.html
    '0000909465-95-000005', // https://www.sec.gov/Archives/edgar/data/789625/0000909465-95-000005-index.html
];

export function isEdgarTxtFileMissing(accessionNumber: string): boolean {
    return edgarMissingTxtAccessionNumbers.includes(accessionNumber);
}