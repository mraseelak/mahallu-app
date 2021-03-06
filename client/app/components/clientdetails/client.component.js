"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var ClientComponent = (function () {
    function ClientComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    // on initialization 
    ClientComponent.prototype.ngOnInit = function () {
    };
    // main menu
    // about function
    ClientComponent.prototype.aboutmahal = function () {
    };
    //instruction function 
    ClientComponent.prototype.instruction = function () {
    };
    // setting function
    ClientComponent.prototype.setting = function () {
    };
    // help
    ClientComponent.prototype.help = function () {
    };
    // report us
    ClientComponent.prototype.report = function () {
    };
    // Logout
    ClientComponent.prototype.Logout = function () {
    };
    // functionalities
    ClientComponent.prototype.addmember = function () {
    };
    ClientComponent.prototype.memberlist = function () {
    };
    return ClientComponent;
}());
ClientComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'client',
        templateUrl: './client.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http])
], ClientComponent);
exports.ClientComponent = ClientComponent;
//# sourceMappingURL=client.component.js.map