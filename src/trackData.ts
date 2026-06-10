export type TrackRow = {
  id: string;
  type: string;
  geometry: 'line' | 'point' | 'polygon';
  unitprice: number | null;
  color: string | null;
  unit: string | null;
};

export const TRACK_DATA: TrackRow[] = [
  { id: '#0-1', type: 'Bonds and Insurance', geometry: 'point', unitprice: 718250.00, color: 'black', unit: "LS" },
  { id: '#0-2', type: 'Mobilization', geometry: 'point', unitprice: 478667.00, color: 'black', unit: "LS" },
  { id: '#0-3', type: 'Maintenance of Traffic', geometry: 'point', unitprice: 118125.00, color: 'black', unit: "LS" },
  { id: '#0-6', type: 'DI Fittings', geometry: 'point', unitprice: 31762.00, color: 'purple', unit: "EA"   },
  { id: '#0-7', type: '24 inch Plug Valve', geometry: 'point', unitprice: 59867.00, color: 'purple', unit: "EA"},
  { id: '#0-8', type: '30 inch Plug Valve', geometry: 'point', unitprice: 90045.00, color: 'purple', unit: "EA"},
  { id: '#0-9', type: ' Air Release Valve', geometry: 'point', unitprice: 14808.00, color: 'purple', unit: "EA"},
  { id: '#0-10', type: 'NRWWTP Connection', geometry: 'point', unitprice: 229369.00, color: 'purple', unit: "LS" },
  { id: '#0-11', type: '30 inch Line Stop', geometry: 'point', unitprice: 106061.00, color: 'purple', unit: "EA" },
  { id: '#0-12', type: 'Connect to Existing EWTM', geometry: 'point', unitprice: 16250.00, color: 'purple', unit: "EA" },
  { id: '#0-13', type: 'Removal and Replacement of Unsuitable Material', geometry: 'point', unitprice: 36.00, color:  'red', unit: "Cubic Yard" },
  { id: '#0-14', type: 'Excavation in Hard Rock', geometry: 'line', unitprice: 33.00, color: 'red', unit:"FT"},
  { id: '#0-15', type: 'Minor Utility Adjustment', geometry: 'point', unitprice: 2708.00, color: 'red', unit: "EA" },
  { id: '#0-16', type: 'Major Utility Adjustment', geometry: 'point', unitprice: 5417.00, color: 'red', unit: "EA" },
  { id: '#0-17', type: 'Stabilized Subgrade', geometry: 'polygon', unitprice: 15.00, color: 'grey', unit: "SY" },
  { id: '#0-18', type: 'Limerock Base', geometry: 'polygon', unitprice: 48.75, color: 'grey', unit: "SY" },
  { id: '#0-19', type: 'Asphalt Pavement Restoration', geometry: 'polygon', unitprice: 31.00, color: 'grey', unit: "SY" },
  { id: '#0-20', type: 'Mill and Resurface Asphalt Pavement', geometry: 'polygon', unitprice: 19.00, color: 'grey', unit: "SY" },
  { id: '#0-21', type: "Pavement Marking & Striping", geometry: 'line', unitprice: 168750.00, color: 'black', unit: "LS" },
  { id: '#0-22', type: "Type 'F' Curb and Gutter", geometry: 'line', unitprice: 49.00, color: 'black', unit: "FT" },
  { id: '#0-23', type: "Type 'E' Curb and Gutter", geometry: 'line', unitprice: 56.00, color: 'black', unit: "FT" },
  { id: '#0-24', type: "Type 'D' Curb", geometry: 'line', unitprice: 47.00, color: 'black', unit: "FT" },
  { id: '#0-25', type: 'Concrete Median', geometry: 'polygon', unitprice: 107.00, color:'grey', unit: "SY" },
  { id: '#0-26', type: '6 inch Concrete Sidewalk', geometry: 'polygon', unitprice: 107.00, color: "grey", unit: "SY"  },
  { id: '#0-27', type: 'Remove and Replace Asphalt Driveway', geometry: 'polygon', unitprice: 124.00, color: "grey", unit: "SY"  },
  { id: '#0-28', type: 'Remove and Replace Concrete Driveway', geometry: 'polygon', unitprice: 191.00, color: "grey", unit: "EA"  },
  { id: '#0-29', type: 'Remove and Replace Paver Driveway', geometry: 'polygon', unitprice: 127.00, color:'grey', unit: "SY"   },
  {id: '#0-30', type: 'Replace Existing Potable Water Service', geometry: 'point', unitprice: 3275.00, color: 'blue', unit: "EA" },
  { id: '#0-31', type: 'Replace Existing Sanitary Sewer Lateral', geometry: 'point', unitprice: 2854.00, color: 'green',unit: "EA"  },
  { id: '#0-32', type: 'Remove and Replace Existing Chain Link Fence', geometry: 'line', unitprice: 48.00, color: 'light green', unit: "FT" },
  { id: '#0-33', type: 'Remove and Replace Existing Aluminum Fence', geometry: 'line', unitprice: 41.00, color: 'light green', unit: "FT" },
  { id: '#0-34', type: 'Remove and Replace Existing Guard Rail', geometry: 'line', unitprice: 81.00, color: 'black', unit: "FT" },
  { id: '#0-35', type: 'Remove and Replace Existing Road Sign & Post Assembly', geometry: 'point', unitprice: 2188.00, color: 'red', unit: "EA"},
  { id: '#0-36', type: 'Remove and Replace Existing Mailbox', geometry: 'point', unitprice: 369.00, color: 'red'  , unit: "EA" },
  { id: '#0-37', type: 'Asphalt Walkway', geometry: 'polygon', unitprice: 81.00, color: 'grey' , unit: "SY" },
  { id: '#0-38', type: 'Paver Walkway', geometry: 'polygon', unitprice: 156.00, color: 'grey', unit: "SY" },
  { id: '#0-39', type: 'Concrete Golf Cart Path', geometry: 'polygon', unitprice: 112.00, color: 'grey', unit: "SY" },
  { id: '#0-40', type: 'Concrete Golf Cart Path with Rolled Curb', geometry: 'polygon', unitprice: 131.00, color: 'grey', unit: "SY"  },
  { id: '#0-41', type: 'Restoration of Green Areas', geometry: 'polygon', unitprice: 10.50, color: 'grey',unit: "SY"  },
   { id: '#0-42', type: 'Restoration of Golf Course', geometry: 'point', unitprice: 66838.00, color: 'red', unit: "EA" },
  { id: '#0-43', type: "R&D, Existing Trees", geometry: 'point', unitprice: 9375.00, color: 'light green', unit: "EA" },
  { id: '#0-44', type: 'Florida Number 2 Trees', geometry: 'point', unitprice: 5000.00, color: 'light green', unit: "EA" },
  { id: '#0-45', type: '24 inch Ductile Iron Pipe, Class 250 (Bid Alternate to Base Bid 0-4)', geometry: 'line', unitprice: 437.00, color: 'purple', unit: "FT"},
  { id: '#0-46', type: '30 inch Ductile Iron Pipe, Class 250 (Bid Alternate to Base Bid 0-5)', geometry: 'line', unitprice: 658.00, color: 'purple', unit: "FT"},
];

export const TRACK_TYPES = TRACK_DATA.map(r => r.type);

