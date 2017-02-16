import * as angular from "angular";
import "angular-route";
import { PageGanttComponent } from "./components/pageGantt/PageGanttComponent";
import { config as routesConfig } from "./configs/routes";

angular.module("app.gantt", ["ngRoute"])
    .component("pageGantt", new PageGanttComponent());
    //.config(routesConfig);