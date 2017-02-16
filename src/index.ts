// import "./modules/application/angular/index";
// import "./modules/tweets/angular/index";
// import "./modules/about/angular/index";
import "./modules/gantt/index";
import * as angular from "angular";
import 'angular-animate';
import 'angular-strap';


// load our default (non specific) css
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/screen.scss";

// gantt
import "angular-gantt/assets/angular-gantt.css";
import "angular-moment/angular-moment";
import "angular-gantt/assets/angular-gantt";

// gantt plugins dependencies
import "angular-ui-tree/dist/angular-ui-tree";
import "angular-ui-tree/dist/angular-ui-tree.css";
import "angular-native-dragdrop/draganddrop";

// gantt plugins js
import "angular-gantt/assets/angular-gantt-sortable-plugin";
import "angular-gantt/assets/angular-gantt-movable-plugin";
import "angular-gantt/assets/angular-gantt-drawtask-plugin";
import "angular-gantt/assets/angular-gantt-tooltips-plugin";
import "angular-gantt/assets/angular-gantt-bounds-plugin";
import "angular-gantt/assets/angular-gantt-progress-plugin";
import "angular-gantt/assets/angular-gantt-table-plugin";
import "angular-gantt/assets/angular-gantt-tree-plugin";
import "angular-gantt/assets/angular-gantt-groups-plugin";
import "angular-gantt/assets/angular-gantt-resizeSensor-plugin";
import "angular-gantt/assets/angular-gantt-corner-plugin";
import "angular-gantt/assets/angular-gantt-sections-plugin";
import "angular-gantt/assets/angular-gantt-dependencies-plugin";
import "angular-gantt/assets/angular-gantt-overlap-plugin";

// gantt plugins css
import "angular-gantt/assets/angular-gantt-sortable-plugin.css";
import "angular-gantt/assets/angular-gantt-movable-plugin.css";
import "angular-gantt/assets/angular-gantt-tooltips-plugin.css";
import "angular-gantt/assets/angular-gantt-bounds-plugin.css";
import "angular-gantt/assets/angular-gantt-progress-plugin.css";
import "angular-gantt/assets/angular-gantt-table-plugin.css";
import "angular-gantt/assets/angular-gantt-tree-plugin.css";
import "angular-gantt/assets/angular-gantt-groups-plugin.css";
import "angular-gantt/assets/angular-gantt-corner-plugin.css";
import "angular-gantt/assets/angular-gantt-sections-plugin.css";
import "angular-gantt/assets/angular-gantt-dependencies-plugin.css";
import "angular-gantt/assets/angular-gantt-overlap-plugin.css";


angular.module("app", [
    "app.gantt",
    'ang-drag-drop',
    'gantt', // angular-gantt.
    'gantt.sortable',
    'gantt.movable',
    'gantt.drawtask',
    'gantt.tooltips',
    'gantt.bounds',
    'gantt.progress',
    'gantt.table',
    'gantt.tree',
    'gantt.corner',
    'gantt.groups',
    'gantt.sections',
    'gantt.dependencies',
    'gantt.overlap',
    'gantt.resizeSensor',
    'ngAnimate',
    'mgcrea.ngStrap'
]);
angular.bootstrap(document, ["app"], {
    strictDi: false
});