export const createOrGetSpreadsheetId = async (accessToken: string) => {
  let spreadsheetId = localStorage.getItem('adminSpreadsheetId');
  if (spreadsheetId) {
    // Test if we can still access the spreadsheet
    const testRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}`, {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });
    if (testRes.ok) return spreadsheetId;
    // If not, clear it and create a new one
    localStorage.removeItem('adminSpreadsheetId');
  }

  const res = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
    method: 'POST',
    headers: { 
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      properties: { title: 'Box Obrolan Bookings' },
      sheets: [{ properties: { title: 'Bookings' } }]
    })
  });
  
  if (!res.ok) {
    const errorData = await res.text();
    throw new Error(`Failed to create spreadsheet: ${errorData}`);
  }
  
  const data = await res.json();
  if (data.spreadsheetId) {
    localStorage.setItem('adminSpreadsheetId', data.spreadsheetId);
    
    const headRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${data.spreadsheetId}/values/Bookings!A1:H1:append?valueInputOption=USER_ENTERED`, {
      method: 'POST',
      headers: { 
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        values: [['Date Submitted', 'Name', 'Email', 'Phone', 'Package', 'Course Type', 'Preferred Schedule 1', 'Preferred Schedule 2']]
      })
    });
    
    if (!headRes.ok) {
      console.warn('Failed to append headers', await headRes.text());
    }
    
    return data.spreadsheetId;
  }
  throw new Error("Failed to parse spreadsheet ID");
};
