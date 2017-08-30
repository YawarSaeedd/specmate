"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var navigation_bar_component_1 = require("./common/navigation-bar.component");
var operation_monitor_component_1 = require("./common/operation-monitor.component");
var common_controls_component_1 = require("./common/common-controls.component");
var element_tree_component_1 = require("./explorer/element-tree.component");
var project_explorer_component_1 = require("./explorer/project-explorer.component");
var log_list_component_1 = require("./logging/log-list.component");
var confirmation_modal_content_component_1 = require("./notification/confirmation-modal-content.component");
var pipe_module_1 = require("../../pipes/pipe.module");
var navigation_target_directive_1 = require("../../directives/navigation-target.directive");
var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule,
                pipe_module_1.PipeModule,
                ng_bootstrap_1.NgbModule.forRoot()
            ],
            declarations: [
                navigation_bar_component_1.NavigationBar,
                project_explorer_component_1.ProjectExplorer,
                element_tree_component_1.ElementTree,
                operation_monitor_component_1.OperationMonitor,
                common_controls_component_1.CommonControls,
                log_list_component_1.LogList,
                navigation_target_directive_1.NavigationTargetDirective,
                confirmation_modal_content_component_1.ConfirmationModalContent
            ],
            providers: [],
            bootstrap: [],
            exports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule,
                project_explorer_component_1.ProjectExplorer,
                navigation_bar_component_1.NavigationBar,
                operation_monitor_component_1.OperationMonitor,
                common_controls_component_1.CommonControls,
                log_list_component_1.LogList,
                pipe_module_1.PipeModule,
                navigation_target_directive_1.NavigationTargetDirective
            ],
            entryComponents: [confirmation_modal_content_component_1.ConfirmationModalContent]
        })
    ], CoreModule);
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map