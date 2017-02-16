// webpack noobie:(
var EQ: any = require('css-element-queries/src/ElementQueries');
var RS: any = require('css-element-queries/src/ResizeSensor');
var JSP: any = require('jsplumb/dist/js/jsplumb');
window["ResizeSensor"] = RS;
window["ElementQueries"] = new EQ();
window["jsPlumb"] = JSP.jsPlumb;

require('./index.ts');