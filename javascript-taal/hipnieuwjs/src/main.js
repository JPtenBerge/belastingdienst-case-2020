import { Customer as IetsAnders, config } from './customer.js';
import defaultExport from './library.js';

// named exports

let cust = new IetsAnders();
console.log(cust);

console.log(config);

console.log('defaultExport:', defaultExport);

/* build tools in het JavaScript-ecosysteem
- parceljs  (zeer eenvoudig, geen configuratie nodig, just run)
- rollup  (zeer eenvoudig, werkt gewoon)
- webpack  (complex, veel configuratie nodig, industrieleider)
- rome  (vrij nieuwe speler, 1.0 is nog niet eens uit)

- gulp - streaming build - wat moeite voor doen
- grunt - streaming build - veel configuratie
*/

// Pragmatic JavaScript
