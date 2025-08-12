webpackJsonp([1,4],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedInGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoggedInGuard = (function () {
    function LoggedInGuard(router, dataService) {
        this.router = router;
        this.dataService = dataService;
    }
    LoggedInGuard.prototype.canActivate = function () {
        var _this = this;
        var tokenStorage = JSON.parse(sessionStorage.getItem("okta-token-storage"));
        var currentYear = new Date().getFullYear();
        if (currentYear === 2025)  {
            return this.dataService.getCurrentUser()
                .then(function (data) {
                sessionStorage.setItem('currentUser', JSON.stringify(data));
                return _this.dataService.getSecurityGroups()
                    .then(function (data) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].match('Bulk Ingest')) {
                            return true;
                        }
                    }
                    _this.router.navigate(['/error']);
                    return false;
                });
            });
        }
        else {
            var vmsUrl = window.location.href.substring(0, window.location.href.toLowerCase().indexOf('bulkingest') - 1);
            window.location.assign(vmsUrl + '?fromPath=BulkIngest');
        }
    };
    return LoggedInGuard;
}());
LoggedInGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* GetDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* GetDataService */]) === "function" && _b || Object])
], LoggedInGuard);

var _a, _b;
//# sourceMappingURL=logged-in.guard.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Directory = (function () {
    function Directory(_parentLibId, _name, _relativePath, _fullPhysicalPath, _isDirectory, _level, _parentDir) {
        this.children = new Array();
        this.isSelected = false;
        this.checkEnable = true;
        this.name = _name;
        this.path = _relativePath;
        this.parentId = _parentLibId;
        this.fullPhysicalPath = _fullPhysicalPath;
        this.isDirectory = _isDirectory;
        this.level = _level;
        this.parentDir = _parentDir;
    }
    return Directory;
}());
/* harmony default export */ __webpack_exports__["a"] = Directory;
//# sourceMappingURL=directory.class.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'error-component',
        template: __webpack_require__(339),
    })
], ErrorComponent);

//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_adal_core__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_adal_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_adal_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_attribute_class__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_index__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = (function () {
    function HomeComponent(adalService, dataService, modalService, http) {
        this.adalService = adalService;
        this.dataService = dataService;
        this.modalService = modalService;
        this.http = http;
        this.systemOfOrigins = new Array();
        this.channels = new Array();
        this.contentTypes = new Array();
        this.priorities = new Array();
        this.isRush = false;
        this.intputReason = '';
        this.name = new Array();
        this.value = new Array();
        this.attributes = new Array();
        this.codeSet = new Array();
        this.codeValues = [];
        this.codeSetDelta = new Array();
        this.seletedChannels = [];
        this.selectedDirList = [];
        this.attributeResult = new Array();
        this.display = false;
        this.attrMsgs = new Array();
        this.fileMsgs = new Array();
    }
    HomeComponent.prototype.logOut = function () {
        this.adalService.logOut();
    };
    HomeComponent.prototype.loadData = function () {
        var _this = this;
        var num = window.location.href.indexOf('BulkIngest');
        this.redireURl = window.location.href.slice(0, num);
        this.dataService.getSystemOrigin()
            .subscribe(function (data) {
            _this.systemOfOrigins = data['value'];
            _this.systemOfOrigins.map(function (sys) {
                sys.label = sys['SystemOfOriginDesc'];
                sys.value = sys['SystemOfOriginId'];
            });
            _this.defaultSoO = _this.systemOfOrigins[9];
        });
        this.dataService.getPriority()
            .subscribe(function (data) {
            _this.priorities = data['value'];
            _this.priorities.map(function (prior) {
                prior.value = prior['Priority_Id'];
                prior.label = prior['Desc'];
            });
        });
        this.dataService.getChannel()
            .subscribe(function (data) {
            _this.channels = data['value'];
            _this.channels.map(function (cha) {
                cha.label = cha['ChannelName'];
                cha.value = cha['ChannelId'];
            });
        });
        this.dataService.getContentType()
            .subscribe(function (data) {
            _this.contentTypes = data['value'];
            _this.contentTypes = _this.contentTypes.filter(function (e) {
                return e.ContentTypeDesc !== 'Music Video Comp Reel' && e.ContentTypeDesc !== 'Promo Reel' && e.ContentTypeDesc !== 'BOX' && e.ContentTypeDesc !== 'BRICK';
            });
            _this.contentTypes.map(function (con) {
                con.label = con['ContentTypeDesc'];
                con.value = con['ContentTypeId'];
            });
        });
        this.dataService.getRen()
            .subscribe(function (data) {
            _this.renditions = data['value'];
            _this.renditions = _this.renditions.filter(function (ren) {
                return ren['ActiveInactiveInd'] == 'Y' && ren['IsDigital'] == true;
            });
            _this.renditions.map(function (ren) {
                ren.label = ren['RenditionDesc'];
                ren.value = ren['RenditionId'];
            });
        });
        // this.dataService.getFormat(renId: any)
        //   .subscribe((data: any) => {
        //     this.formats = data;
        //      this.formats.map (form =>{
        //        form.label = form['Description'];
        //        form.value = form['FormatId'];
        //     });
        //   });
        this.dataService.getArchivalRule()
            .subscribe(function (data) {
            _this.archivalRules = data['value'];
            _this.archRuleSelect = data['value'][0];
            _this.archivalRules.map(function (rules) {
                rules.label = rules['RuleName'];
                rules.value = rules['ArchivalRuleId'];
            });
        });
    };
    HomeComponent.prototype.updateFormatChange = function (renId) {
        var _this = this;
        var selectRen = renId;
        this.dataService.getFormat(selectRen)
            .subscribe(function (data) {
            _this.formats = data;
            _this.formats.map(function (form) {
                form.label = form['Description'];
                form.value = form['FormatId'];
            });
        });
    };
    HomeComponent.prototype.updateWorkFlowChange = function (format) {
        var _this = this;
        var formatId = format;
        this.dataService.getWorkFlow(formatId)
            .subscribe(function (data) {
            _this.workflows = data;
            _this.workflows.map(function (workflow) {
                workflow.label = workflow['Name'];
                workflow.value = workflow['WorkflowTemplateId'];
            });
        });
    };
    HomeComponent.prototype.dirResult = function ($event) {
        this.selectedDirList = $event;
        return $event;
    };
    HomeComponent.prototype.clearSelection = function () {
        this.selectedDirList = [];
    };
    HomeComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    HomeComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    HomeComponent.prototype.showDialog = function () {
        this.display = true;
        this.openModal('custom-modal-1');
    };
    HomeComponent.prototype.loadTemplates = function () {
        var _this = this;
        this.dataService.getTemplates()
            .subscribe(function (data) {
            _this.templates = data['value'];
            _this.templates.map(function (temp) {
                temp.label = temp['AttributeTemplateDesc'];
                temp.value = temp['AttributeTemplateId'];
                temp['templates'] = temp['AttributeTemplateValue'];
            });
        });
        this.dataService.getCodeValues()
            .subscribe(function (data) {
            _this.codeValues = data['value'];
        });
    };
    HomeComponent.prototype.getTemplate = function (templateId) {
        var tmpArr = new Array();
        this.getCodeSets();
        var newAtt;
        this.templates.forEach(function (x) {
            if (x.value === templateId) {
                x['templates'].forEach(function (z) {
                    if (x.value === templateId) {
                        newAtt = new __WEBPACK_IMPORTED_MODULE_3__class_attribute_class__["a" /* Attribute */](z.CodeSet, z.CodeValue);
                        tmpArr.push(newAtt);
                    }
                });
            }
        });
        for (var i = 0; i < tmpArr.length; i++) {
            this.codeSet.map(function (code) {
                if (code.CodeSet1 == tmpArr[i].name) {
                    tmpArr[i].datatype = code.Datatype;
                }
            });
        }
        this.attributes = tmpArr;
        this.getDelta();
    };
    HomeComponent.prototype.getCodeSets = function () {
        var _this = this;
        this.dataService.getCodeSets()
            .subscribe(function (data) {
            _this.codeSet = data['value'];
        });
    };
    HomeComponent.prototype.getDelta = function () {
        var _this = this;
        this.codeSetDelta = [];
        this.codeSet.forEach(function (x) {
            var match = false;
            _this.attributes.forEach(function (y) {
                if (x.CodeSet1 === y.name)
                    match = true;
            });
            if (!match)
                _this.codeSetDelta.push(x);
        });
        this.codeSetDelta.map(function (csd) {
            csd.label = csd['CodeSet1'];
            csd.value = csd['CodeSet1'];
            csd.dataType = csd['Datatype'];
        });
        this.codeSetDelta.sort(function (a, b) {
            return (a.CodeSet1 < b.CodeSet1) ? -1 : 1;
        });
    };
    HomeComponent.prototype.editAttribute = function (attribute, index) {
        attribute.isEditable = true;
        attribute.datatype = this.codeSet.find(function (t) { return t.CodeSet1 === attribute.name; }).Datatype; // returns single obj
        var list = this.codeValues.filter(function (t) { return t.CodeSet === attribute.name; }); // returns array
        attribute.codeValues = [];
        list.forEach(function (x) {
            attribute.codeValues.push({ value: x.CodeValueValue, label: x.CodeValueValue });
        });
        this.getDelta();
        var location = this.attributes.indexOf(attribute);
        this.attributes.map(function (att, place) { return att.isEditable = (place === index) ? true : false; });
    };
    HomeComponent.prototype.deleteAttribute = function (attName) {
        this.attributes.splice(this.attributes.indexOf(this.attributes.find(function (t) { return t.name === attName; })), 1);
    };
    HomeComponent.prototype.addAttribute = function () {
        var _this = this;
        this.getDelta();
        if (this.codeSetDelta.length === 0) {
            alert('No More Attributes to add!');
            return;
        }
        var att = new __WEBPACK_IMPORTED_MODULE_3__class_attribute_class__["a" /* Attribute */]('', '');
        this.codeSetDelta.forEach(function (x, index) {
            if (index === 0) {
                att.name = x.CodeSet1;
                att.datatype = x.Datatype;
                _this.editAttribute(att, _this.attributes.length);
            }
        });
        att.isEditable = true;
        this.attributes.push(att);
    };
    HomeComponent.prototype.openDialog = function (dir) {
        this.deleteFileShow = true;
        this.deleteSelDir = dir;
    };
    HomeComponent.prototype.cotinueDelete = function () {
        var _this = this;
        var getDelIndex = 0;
        if (!this.deleteSelDir) {
            this.selectedDirList = [];
            this.deleteFileShow = false;
        }
        else {
            this.selectedDirList.map(function (data, i) {
                if (data.path === _this.deleteSelDir.path)
                    getDelIndex = i;
            });
            this.selectedDirList.splice(getDelIndex, 1);
            this.deleteFileShow = false;
        }
    };
    HomeComponent.prototype.deleteFile = function (file) {
        var getDelIndex = 0;
        this.selectedDirList.map(function (data, i) {
            if (data.path == file.path)
                getDelIndex = i;
        });
        this.selectedDirList.splice(getDelIndex, 1);
    };
    HomeComponent.prototype.clickCopy = function () {
        if (this.selectedDirList.length > 0) {
            var initialTitle_1 = this.selectedDirList[0].title;
            this.selectedDirList.map(function (dir) { return dir.title = initialTitle_1; });
        }
    };
    HomeComponent.prototype.changeName = function (changedName, dir) {
        this.changedTitle = changedName;
        dir.title = this.changedTitle;
    };
    HomeComponent.prototype.createTitle = function () {
        this.selectedDirList.map(function (data) {
            var newTitle = data.fullPhysicalPath.split('%7c');
            newTitle = newTitle.slice(newTitle.length - data.level);
            newTitle = newTitle.join('_');
            newTitle = newTitle.replace(/\+/g, ' ');
            var sepIndex = newTitle.lastIndexOf('.');
            newTitle = newTitle.slice(0, sepIndex);
            data.title = newTitle;
        });
    };
    HomeComponent.prototype.showMessage = function () {
        this.attrMsgs.push({ severity: 'info', summary: '', detail: 'No Attributes Added' });
        this.fileMsgs.push({ severity: 'info', summary: '', detail: 'No Files Selected' });
    };
    HomeComponent.prototype.editableFunc = function () {
        this.editable = true;
    };
    HomeComponent.prototype.submit = function () {
        var _this = this;
        this.submitclicked = true;
        var checkAttr = true;
        this.attributes.map(function (att) {
            if (att.value == '' || !att.value) {
                checkAttr = false;
            }
        });
        if (this.renditionSelected &&
            this.formatSelected &&
            this.seletedChannels.length > 0 &&
            this.wfSelected &&
            this.selectedPriority >= 0 &&
            this.archRuleSelect != null && this.selectedDirList.length > 0 && checkAttr) {
            this.attributeResult = [];
            var currentInfo = JSON.parse(sessionStorage.getItem('currentUser'));
            var firstName = currentInfo.FirstName;
            var lastName = currentInfo.LastName;
            var userId = currentInfo.UserId;
            var userName = currentInfo.UserName;
            var userEmail = currentInfo.Email;
            var resultChannels_1 = [];
            this.seletedChannels.map(function (data) {
                resultChannels_1.push((data).toString());
            });
            var totalSelectedFiles_1 = [];
            this.selectedDirList.map(function (data) {
                var eachFile = {};
                eachFile['FileName'] = data.newFilePath;
                eachFile['Title'] = data.title;
                totalSelectedFiles_1.push(eachFile);
            });
            this.attributes.map(function (attribute) {
                var obj = {};
                obj['name'] = attribute.name;
                obj['value'] = attribute.value;
                _this.attributeResult.push(obj);
            });
            var ingestItem = {
                'SubmittedBy': firstName.toString() + ' ' + lastName.toString(),
                'UserId': userId.toString(),
                'UserEmail': userEmail.toString(),
                'SystemOfOrigin': 'X',
                'ContentTypeId': (this.selectedContentType).toString(),
                'Channels': resultChannels_1,
                'PriorityId': (this.selectedPriority).toString(),
                'RushReason': this.intputReason,
                'RenditionId': (this.renditionSelected).toString(),
                'FormatId': (this.formatSelected).toString(),
                'WorkFlowId': (this.wfSelected).toString(),
                'ArchivalRuleId': '1',
                'Attributes': this.attributeResult,
                'Files': totalSelectedFiles_1,
            };
            console.log('submitted file name', this.selectedDirList, 'ingest item', ingestItem);
            this.dataService.submitBulkIngest(JSON.stringify(ingestItem))
                .then(function (data) {
                _this.bulkComplete = data;
                if (_this.bulkComplete['Message'] === 'Success') {
                    _this.show = true;
                }
            });
        }
        else {
            console.log('Missing Fields');
        }
    };
    HomeComponent.prototype.reloadPage = function () {
        location.reload();
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.loading = false;
        this.loadData();
        this.getCodeSets();
        this.loadTemplates();
        this.showMessage();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'home',
        template: __webpack_require__(340)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_adal_core__["AdalService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_adal_core__["AdalService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* GetDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* GetDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_index__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_index__["a" /* ModalService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"]) === "function" && _d || Object])
], HomeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_adal_core__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_adal_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_adal_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WelcomeComponent = (function () {
    function WelcomeComponent(router, adalService) {
        this.router = router;
        this.adalService = adalService;
        console.log('Entering welcome');
        if (this.adalService.userInfo.isAuthenticated) {
            this.router.navigate(['/']);
        }
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit is called');
    };
    WelcomeComponent.prototype.logIn = function () {
        this.adalService.login();
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'welcome',
        template: '<h1>Welcome!</h1><button (click)="logIn()">Login</button>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_adal_core__["AdalService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_adal_core__["AdalService"]) === "function" && _b || Object])
], WelcomeComponent);

var _a, _b;
//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 178;


/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(74);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.environmentName = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].envName;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.loading = false;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: "<div><router-outlet>\n    <div class=\"my-container\">\n      <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\">\n      </ngx-loading>\n    </div>\n  </router-outlet></div>",
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_adal_core__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_adal_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_adal_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_fontawesome_angular2_fontawesome__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_fontawesome_angular2_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_fontawesome_angular2_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_loading__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routers_app_router__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_welcome_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_upload_component__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_subFolders_component__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_error_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__authentication_logged_in_guard__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_secret_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_data_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_primeng_primeng__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_tooltip__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ngx_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__directives_index__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_index__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular2_busy__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angular2_busy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_angular2_busy__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"], __WEBPACK_IMPORTED_MODULE_8__routers_app_router__["a" /* routes */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_6__angular_http__["HttpModule"], __WEBPACK_IMPORTED_MODULE_4_angular2_fontawesome_angular2_fontawesome__["Angular2FontawesomeModule"], __WEBPACK_IMPORTED_MODULE_17_primeng_primeng__["MultiSelectModule"], __WEBPACK_IMPORTED_MODULE_17_primeng_primeng__["DropdownModule"], __WEBPACK_IMPORTED_MODULE_17_primeng_primeng__["DialogModule"], __WEBPACK_IMPORTED_MODULE_17_primeng_primeng__["MessagesModule"], __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_18_ngx_tooltip__["TooltipModule"], __WEBPACK_IMPORTED_MODULE_17_primeng_primeng__["InputTextModule"], __WEBPACK_IMPORTED_MODULE_17_primeng_primeng__["RadioButtonModule"], __WEBPACK_IMPORTED_MODULE_22_angular2_busy__["BusyModule"], __WEBPACK_IMPORTED_MODULE_5_ngx_loading__["a" /* LoadingModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_10__components_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_9__components_welcome_component__["a" /* WelcomeComponent */], __WEBPACK_IMPORTED_MODULE_19__directives_index__["a" /* ModalComponent */], __WEBPACK_IMPORTED_MODULE_11__components_upload_component__["a" /* UploadComponent */], __WEBPACK_IMPORTED_MODULE_12__components_subFolders_component__["a" /* SubFolderComponent */], __WEBPACK_IMPORTED_MODULE_13__components_error_component__["a" /* ErrorComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3_ng2_adal_core__["AdalService"], __WEBPACK_IMPORTED_MODULE_15__services_secret_service__["a" /* SecretService */], __WEBPACK_IMPORTED_MODULE_14__authentication_logged_in_guard__["a" /* LoggedInGuard */], __WEBPACK_IMPORTED_MODULE_16__services_data_service__["a" /* GetDataService */], __WEBPACK_IMPORTED_MODULE_20__services_index__["a" /* ModalService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Attribute; });
var Attribute = (function () {
    function Attribute(_name, _value) {
        this.name = '';
        this.value = '';
        this.datatype = '';
        this.isEditable = false;
        this.codeValues = new Array();
        this.name = _name;
        this.value = _value;
    }
    return Attribute;
}());

;
//# sourceMappingURL=attribute.class.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Library = (function () {
    function Library(_id, _name, _path) {
        this.children = new Array();
        this.id = _id;
        this.name = _name;
        this.path = _path;
    }
    return Library;
}());
/* harmony default export */ __webpack_exports__["a"] = Library;
//# sourceMappingURL=library.class.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_directory_class__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubFolderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubFolderComponent = (function () {
    function SubFolderComponent(dataService) {
        this.dataService = dataService;
        this.selectLib = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectDir = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selDir = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SubFolderComponent.prototype.loadFolders = function (dir) {
        var _this = this;
        if (dir.isDirectory) {
            this.selDir.emit(true);
        }
        else {
            this.selDir.emit(false);
        }
        var currentDir = dir.parentDir ? dir.parentDir.children : this.library.directories;
        currentDir.map(function (singleDir) {
            singleDir.children = [];
            singleDir.checkEnable = dir.isDirectory ? false : true;
            singleDir.isSelected = false;
        });
        dir.isSelected = true;
        this.busy = this.dataService.getChildLibrary(dir.parentId, dir.path)
            .then(function (data) {
            data.map(function (d) { return dir.children.push(new __WEBPACK_IMPORTED_MODULE_1__class_directory_class__["a" /* default */](dir.parentId, d['name'], d['relativePath'], d['fullPath'], d['isDirectory'], dir.level + 1, dir)); });
            _this.levelFolder = _this.levelFolder.slice(0, dir.level);
            if (dir.children.length > 0)
                _this.levelFolder.push(dir.children);
            _this.selectDir.emit(_this.levelFolder);
        })
            .catch(function (err) { return console.log('error occur', err); });
    };
    SubFolderComponent.prototype.getBackGroundColor = function (dir) {
        if (dir.isSelected) {
            return '#ccc';
        }
    };
    SubFolderComponent.prototype.selectSingle = function (directory) {
        directory.isSelected = !directory.isSelected;
        this.selectLib.emit(directory);
        if (directory.isSelected)
            this.selDir.emit(false);
        else {
            var parent = directory.parentDir;
            var allChecked_1 = true;
            parent.children.map(function (dir) {
                if (!dir.isDirectory && dir.isSelected) {
                    allChecked_1 = false;
                }
            });
            this.selDir.emit(allChecked_1);
        }
    };
    return SubFolderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SubFolderComponent.prototype, "library", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SubFolderComponent.prototype, "directory", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SubFolderComponent.prototype, "levelFolder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SubFolderComponent.prototype, "clearSubmission", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SubFolderComponent.prototype, "selectLib", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SubFolderComponent.prototype, "selectDir", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SubFolderComponent.prototype, "selDir", void 0);
SubFolderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sub-folder',
        template: "\n      \n      <div class=\"clearfix folder-list\"  [style.background-color]=\"getBackGroundColor(directory)\">\n          <div *ngIf=\"directory.isDirectory === false && directory.checkEnable\" class=\"checkbox checkbox-info\">\n            <input name=\"singleSelected\" type=\"checkbox\" (click)=\"selectSingle(directory)\" [(ngModel)]=\"directory.isSelected\" [ngModelOptions]=\"{standalone: true}\">\n            <label> </label>\n          </div>\n       \n            <i *ngIf=\"directory.isDirectory == false\" class=\"fa fa-file-video-o\" aria-hidden=\"true\"></i>\n            <i *ngIf=\"directory.isDirectory == true\" [ngClass]=\"[directory.isSelected  ? 'fa fa-folder-open-o' : 'fa fa-folder-o']\"></i>\n              <span class=\"folder-list-items point\" (click)=\"loadFolders(directory)\">\n                {{directory.name}}\n              </span>\n          <i class=\"fa fa-angle-right pull-right\" aria-hidden=\"true\"></i>\n        </div>\n     \n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* GetDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* GetDataService */]) === "function" && _a || Object])
], SubFolderComponent);

var _a;
//# sourceMappingURL=subFolders.component.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_library_class__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class_directory_class__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UploadComponent = (function () {
    function UploadComponent(dataService, modalService) {
        this.dataService = dataService;
        this.modalService = modalService;
        this.selectedDir = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.closeDialog = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dirLevelFolder = [];
        this.libraries = new Array();
        this.submitDis = true;
    }
    UploadComponent.prototype.loadLibrary = function () {
        var _this = this;
        this.dataService.getLibraries()
            .subscribe(function (data) {
            data.map(function (library) { return _this.libraries.push(new __WEBPACK_IMPORTED_MODULE_3__class_library_class__["a" /* default */](library['Id'], library['Description'], library['PhysicalPath'])); });
        });
    };
    UploadComponent.prototype.closeModal = function (id) {
        this.currLib = null;
        this.modalService.close(id);
        this.closeDialog.emit(false);
    };
    UploadComponent.prototype.getSubFolder = function (library) {
        var _this = this;
        this.submitDis = true;
        this.loading = true;
        this.currLib = library;
        // clear all the previous selection libraries:
        this.libraries.map(function (lib) {
            lib.isSelected = false;
        });
        library.isSelected = true;
        this.currLib.children = [];
        this.busy = this.dataService.getChildLibrary(library.id, '')
            .then(function (data) {
            data.map(function (dir) { return _this.currLib.children.push(new __WEBPACK_IMPORTED_MODULE_4__class_directory_class__["a" /* default */](library.id, dir['name'], dir['relativePath'], dir['fullPath'], dir['isDirectory'], 1, _this.currLib)); });
            _this.loading = false;
        })
            .catch(function (err) { _this.loading = false; });
        this.dirLevelFolder = [];
        this.dirLevelFolder = [this.currLib.children];
    };
    UploadComponent.prototype.selectAll = function (directories) {
        var _this = this;
        this.allCheck = this.isAllSelected(directories);
        this.allCheck = !this.allCheck;
        directories.map(function (dir) {
            dir.isSelected = (_this.allCheck && !dir.isDirectory) ? true : false;
            _this.submitDis = !dir.isSelected;
        });
    };
    UploadComponent.prototype.allFolder = function (item) {
        var checkDir = false;
        item.map(function (dir) {
            if (!dir.isDirectory)
                checkDir = true;
        });
        return checkDir;
    };
    UploadComponent.prototype.isAllSelected = function (childrenList) {
        var selected = false;
        childrenList.map(function (child) {
            selected = (!child.isDirectory) ? true : selected;
        });
        childrenList.map(function (child) {
            selected = (!child.isDirectory && !child.isSelected) ? false : selected;
        });
        return selected;
    };
    UploadComponent.prototype.updateSelectAll = function () {
        var _this = this;
        var currDirList = this.currLib.children;
        this.allCheck = true;
        currDirList.map(function (curDir) {
            _this.allCheck = (!curDir.isDirectory && !curDir.isSelected) ? false : _this.allCheck;
        });
    };
    UploadComponent.prototype.getBackGroundColor = function (library) {
        if (library.isSelected) {
            return '#ccc';
        }
    };
    UploadComponent.prototype.selDir = function ($event) {
        if ($event) {
            this.submitDis = true;
        }
        else {
            this.submitDis = false;
        }
    };
    UploadComponent.prototype.selectedFolder = function ($event) {
        this.dirLevelFolder = $event;
    };
    UploadComponent.prototype.createTitleName = function (dir) {
        this.updatedResult.map(function (data) {
            var eachFile = {};
            eachFile['FileName'] = data.name;
        });
        var newTitle = dir.fullPhysicalPath.split('%7c');
        newTitle = newTitle.slice(newTitle.length - dir.level);
        newTitle = newTitle.join('_');
        var title = newTitle.replace(/\+/g, ' ');
        var sepIndex = title.lastIndexOf('.');
        title = title.slice(0, sepIndex);
        var filePath = dir.fullPhysicalPath.replace(/%7c/g, '\\');
        var newFilePath = decodeURIComponent(filePath.replace(/\+/g, '%20'));
        dir.title = title;
        dir.newFilePath = newFilePath;
    };
    UploadComponent.prototype.submit = function () {
        var _this = this;
        if (this.currLib.children) {
            var dirArr = this.currLib.children;
            var newSelected = this.getSelected(dirArr, []);
            var getFullPhysical_1 = [];
            this.updatedResult.map(function (dir) { return getFullPhysical_1.push(dir.fullPhysicalPath); });
            newSelected.map(function (dir) {
                if (getFullPhysical_1.indexOf(dir.fullPhysicalPath) < 0) {
                    _this.createTitleName(dir);
                    _this.updatedResult.push(dir);
                }
            });
            this.selectedDir.emit(this.updatedResult);
        }
        var modalId = 'custom-modal-1';
        this.currLib.isSelected = false;
        this.submitDis = true;
        this.closeModal(modalId);
    };
    UploadComponent.prototype.getSelected = function (dirList, resultArr) {
        for (var i = 0; i < dirList.length; i++) {
            var singleDir = dirList[i];
            if (singleDir.children.length > 0) {
                return this.getSelected(singleDir.children, resultArr);
            }
            else {
                if (singleDir.isSelected) {
                    resultArr.push(singleDir);
                }
            }
        }
        return resultArr;
    };
    UploadComponent.prototype.clearSelection = function () {
        this.submitDis = true;
        var latestLevel = this.dirLevelFolder[this.dirLevelFolder.length - 1][0];
        if (latestLevel) {
            latestLevel.parentDir.children.map(function (dir) {
                if (!dir.isDirectory) {
                    dir.isSelected = false;
                }
            });
        }
    };
    ;
    UploadComponent.prototype.ngOnInit = function () {
        this.loadLibrary();
    };
    return UploadComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], UploadComponent.prototype, "updatedResult", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], UploadComponent.prototype, "selectedDir", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], UploadComponent.prototype, "closeDialog", void 0);
UploadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'upload',
        template: __webpack_require__(341)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* GetDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* GetDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* ModalService */]) === "function" && _b || Object])
], UploadComponent);

var _a, _b;
//# sourceMappingURL=upload.component.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_component__ = __webpack_require__(197);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__modal_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalComponent = (function () {
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.clearedOutput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.element = __WEBPACK_IMPORTED_MODULE_1_jquery__(el.nativeElement);
    }
    ModalComponent.prototype.ngOnInit = function () {
        var modal = this;
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        this.element.appendTo('body');
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    };
    // remove self from modal service when directive is destroyed
    ModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    // open modal
    ModalComponent.prototype.open = function () {
        this.element.show();
        __WEBPACK_IMPORTED_MODULE_1_jquery__('body').addClass('modal-open');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('.modal').css({ 'display': 'block', 'overflow': 'scroll' });
    };
    // close modal
    ModalComponent.prototype.close = function () {
        var emeptyLib;
        this.clearedOutput.emit(emeptyLib);
        this.element.hide();
        __WEBPACK_IMPORTED_MODULE_1_jquery__('body').removeClass('modal-open');
    };
    return ModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ModalComponent.prototype, "id", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ModalComponent.prototype, "clearedOutput", void 0);
ModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'modal',
        template: '<ng-content></ng-content>'
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* ModalService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object])
], ModalComponent);

var _a, _b, _c;
//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_welcome_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_logged_in_guard__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_error_component__ = __webpack_require__(112);
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });





var router = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__components_home_component__["a" /* HomeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__authentication_logged_in_guard__["a" /* LoggedInGuard */]]
    },
    {
        path: 'welcome',
        component: __WEBPACK_IMPORTED_MODULE_2__components_welcome_component__["a" /* WelcomeComponent */]
    },
    {
        path: 'error',
        component: __WEBPACK_IMPORTED_MODULE_4__components_error_component__["a" /* ErrorComponent */]
    }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(router);
//# sourceMappingURL=app.router.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });

var ModalService = (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        // remove modal from array of active modals
        var modalToRemove = __WEBPACK_IMPORTED_MODULE_0_underscore__["findWhere"](this.modals, { id: id });
        this.modals = __WEBPACK_IMPORTED_MODULE_0_underscore__["without"](this.modals, modalToRemove);
    };
    ModalService.prototype.open = function (id) {
        // open modal specified by id
        console.log('modal open service');
        var modal = __WEBPACK_IMPORTED_MODULE_0_underscore__["findWhere"](this.modals, { id: id });
        modal.open();
    };
    ModalService.prototype.close = function (id) {
        // close modal specified by id
        var modal = __WEBPACK_IMPORTED_MODULE_0_underscore__["find"](this.modals, { id: id });
        modal.close();
    };
    return ModalService;
}());

//# sourceMappingURL=modal.service.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecretService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SecretService = (function () {
    function SecretService() {
    }
    Object.defineProperty(SecretService.prototype, "adalConfig", {
        get: function () {
            return {
                tenant: 'viacom.onmicrosoft.com',
                clientId: 'db9e37de-bea0-48b1-b0b8-7c787232bf75',
                redirectUri: window.location.href.slice(0, window.location.href.lastIndexOf('/')),
                postLogoutRedirectUri: window.location.href.slice(0, window.location.href.lastIndexOf('/'))
            };
        },
        enumerable: true,
        configurable: true
    });
    return SecretService;
}());
SecretService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SecretService);

//# sourceMappingURL=secret.service.js.map

/***/ }),

/***/ 339:
/***/ (function(module, exports) {

module.exports = "\r\n<div class = \"container\">\r\n    <div class=\"jumbotron\">\r\n    <div class=\"card\">\r\n  <div class=\"card-block\">\r\n    <h4 class=\"card-title\">Unauthorized</h4>\r\n\r\n    <p class=\"card-text\">You are not authorized to access this page. Sorry for inconvenience.</p>\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default custom-navbar\">\r\n    <div class=\"container-fluid\">\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a [attr.href]=\"redireURl\" class=\"navbar-brand\"></a>\r\n        </div>\r\n        <div class=\"layout-header\">\r\n            Bulk Ingest\r\n        </div>\r\n        <!-- Collect the nav links, forms, and other content for toggling -->\r\n\r\n        <!-- /.navbar-collapse -->\r\n    </div>\r\n    <!-- /.container-fluid -->\r\n</nav>\r\n\r\n<div [ngBusy]=\"busy\">\r\n<div class=\"container-fluid\" id=\"BulkIngestContent\">\r\n<div class=\"content-inner\">\r\n<div class=\"panel-group\" id=\"accordion\">\r\n<div class=\"panel panel-default\" id=\"Content-Panel\">\r\n<div class=\"panel-heading\">\r\n  <a class=\"accordion-toggle\" data-toggle=\"collapse\" href=\"#ContentDetails\">\r\n    <h4 class=\"panel-title\">\r\n\r\n      Content Details <span class=\"required-astrick\">*</span>\r\n\r\n    </h4>\r\n\r\n  </a>\r\n</div>\r\n<div id=\"ContentDetails\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\r\n  <div class=\"panel-body\">\r\n\r\n    <div class=\"content-form\">\r\n      <div class=\"col-lg-6\">\r\n        <form  #myForm=\"ngForm\" class=\"form-horizontal\" novalidate>\r\n          <div class=\"form-group\">\r\n            <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">System of Origin</label>\r\n            <div class=\"col-sm-10\">\r\n                <p-dropdown class=\"contentDetails\" [readonly]=\"true\" [options]=\"systemOfOrigins\" [(ngModel)]=\"defaultSoO\" [ngModelOptions]=\"{standalone: true}\" filter=\"filter\" placeholder=\"NONE\"></p-dropdown>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Content Type</label>\r\n            <div class=\"col-sm-10\" >\r\n              <div [ngClass]=\"!selectedContentType && submitclicked ? 'border-validation': '' \">\r\n              <p-dropdown  class=\"contentDetails\" [options]=\"contentTypes\" [(ngModel)]=\"selectedContentType\" [ngModelOptions]=\"{standalone: true}\"  filter=\"filter\" placeholder=\"Choose\"></p-dropdown>\r\n              <!--<p class=\"requiredField\" *ngIf=\"!selectedContentType && submitclicked\">*Required field</p>-->\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Rendition</label>\r\n            <div class=\"col-sm-10\">\r\n               <div [ngClass]=\"!renditionSelected && submitclicked ? 'border-validation': '' \">\r\n              <p-dropdown id =\"rendition\"  placeholder=\"Select Rendition\" class=\"contentDetails\" [options]=\"renditions\" [(ngModel)]=\"renditionSelected\" (onChange)=\"updateFormatChange(renditionSelected)\" [ngModelOptions]=\"{standalone: true}\"  filter=\"filter\" required=\"true\"></p-dropdown>\r\n              <!--<p class=\"requiredField\" *ngIf=\"!renditionSelected && submitclicked\">*Required field</p>-->\r\n               </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Format</label>\r\n            <div class=\"col-sm-10\" >\r\n              <div  class=\"w3-animate-opacity\" [ngClass]=\"!formatSelected && submitclicked ? 'border-validation': '' \">\r\n              <p-dropdown class=\"contentDetails\"  [options]=\"formats\" [(ngModel)]=\"formatSelected\" (onChange)=\"updateWorkFlowChange(formatSelected)\" [ngModelOptions]=\"{standalone: true}\" filter=\"filter\" placeholder='Please select format' required=\"true\"></p-dropdown>\r\n              <!--<p  class=\"requiredField\" *ngIf=\"!formatSelected && submitclicked\">*Required field</p>-->\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Archival Rule</label>\r\n            <div class=\"col-sm-10\">\r\n              <div>\r\n              <p-dropdown class=\"contentDetails\"  id=\"arch\" [options]=\"archivalRules\" [(ngModel)]=\"archRuleSelect\" [ngModelOptions]=\"{standalone: true}\"></p-dropdown>\r\n              <!--<p  class=\"requiredField\" *ngIf=\"!archRuleSelect && submitclicked\">*Required field</p>-->\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n\r\n      <div class=\"col-lg-6\">\r\n        <form class=\"form-horizontal\">\r\n          <div class=\"form-group\"  >\r\n            <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Channel</label>\r\n            <div class=\"col-sm-10\" >\r\n              <div [ngClass]=\"seletedChannels.length == 0 && submitclicked ? 'border-validation': '' \">\r\n              <p-multiSelect class=\"contentDetails\"  name=\"channels\" [options]=\"channels\" [(ngModel)]=\"seletedChannels\" [ngModelOptions]=\"{standalone: true}\"  filter=\"filter\" required=\"true\"></p-multiSelect>\r\n              <!--<p class=\"requiredField\" *ngIf=\"seletedChannels.length == 0 && submitclicked\">*Required field</p>-->\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Workflow</label>\r\n            <div class=\"col-sm-10\" >\r\n              <div [ngClass]=\"!newWork.valid && submitclicked ? 'border-validation': '' \">\r\n              <p-dropdown required='true' class=\"contentDetails\" id=\"arch\"  #newWork=\"ngModel\" [options]=\"workflows\" placeholder='Select Workflow' [(ngModel)]=\"wfSelected\" [ngModelOptions]=\"{standalone: true}\"  filter=\"filter\"></p-dropdown>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Priority</label>\r\n            <div class=\"col-sm-10\">\r\n              <div  [ngClass]=\"selectedPriority == null && submitclicked ? 'border-validation': '' \">\r\n              <p-dropdown class=\"contentDetails\"  name=\"priority\"  [options]=\"priorities\"  [(ngModel)]=\"selectedPriority\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Select Priority\" required=\"true\"></p-dropdown>\r\n\r\n               </div>\r\n           </div>\r\n          </div>\r\n          <div class=\"form-group\" *ngIf=\"selectedPriority == '0'\" >\r\n            <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Reason</label>\r\n\r\n            <div class=\"col-sm-10\">\r\n              <div [ngClass]=\"intputReason == '' && submitclicked ? 'border-validation': '' \">\r\n              <input name=\"rush-reason\" type=\"text\" class=\"form-control\"  [(ngModel)]=\"intputReason\" required autofocus id=\"inputPassword3\" style=\"font-family:inherit !important;\" placeholder=\"Enter a Rush Reason\">\r\n\r\n                </div>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n\r\n      <div class=\"clearfix\"></div>\r\n\r\n    </div>\r\n    <div class=\"panel panel-default attr-panel\">\r\n      <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\r\n\r\n        <h4 class=\"panel-title\">\r\n\r\n          <!--Content Technical Attributes-->\r\n          Technical Attributes\r\n\r\n        </h4>\r\n\r\n\r\n        <span class=\"template-dropdown\">\r\n\r\n          <p-dropdown name=\"priority\"  [options]=\"templates\"  [(ngModel)]=\"selectedTemplate\" (onChange)=\"getTemplate(selectedTemplate)\" [ngModelOptions]=\"{standalone: true}\" filter=\"filter\" placeholder=\"Select a Template\"></p-dropdown>\r\n        </span>\r\n      </div>\r\n\r\n\r\n      <div id=\"Techattr\" *ngIf=\"selectedTemplate || addAttribute\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\r\n\r\n        <div class=\"panel-body scrollbar-dynamic\">\r\n\r\n          <table class=\"table table-striped custom-table\" style=\"margin-bottom: 0px\">\r\n            <thead>\r\n            <tr>\r\n              <th>Name</th>\r\n              <th>Value</th>\r\n              <th> <a href=\"#\"> <i class=\"fa fa-plus\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add New Attribute\"  (click)=\"addAttribute()\"></i> </a></th>\r\n            </tr>\r\n            </thead>\r\n\r\n            <tbody *ngIf=\"attributes.length > 0\">\r\n            <tr *ngFor=\"let attribute of attributes; let i= index\">\r\n              <td style=\"max-height: 40px; padding: 2px !important;\">\r\n                <span class=\"point\" style=\"padding-left:6px;\" tooltip=\"Click to edit\" [hidden]=\"attribute.isEditable || attribute.value == '' || !attribute.value\"  (click)=\"editAttribute(attribute, i)\" >{{attribute.name}}<br></span>\r\n                <div>\r\n                  <p-dropdown autoWidth='true' name=\"priority\" [hidden]=\"!(attribute.isEditable || attribute.value == '' || !attribute.value)\" [placeholder]='attribute.name' [(ngModel)]=\"attribute.name\" [options]=\"codeSetDelta\" (onChange)=\"editAttribute(attribute,i)\" [ngModelOptions]=\"{standalone: true}\" filter=\"filter\"></p-dropdown>\r\n                </div>\r\n              </td>\r\n              <td id=\"general\" class=\"point\" [hidden]=\"(attribute.isEditable) || attribute.value== '' || !attribute.value\" (click)=\"editAttribute(attribute,i)\">{{attribute.value}}</td>\r\n              <!--If Datatype == Boolean-->\r\n              <td id=\"boolean\" [hidden]=\"!(attribute.isEditable && attribute.datatype=='Boolean' || ((attribute.value == '' || !attribute.value)&& attribute.datatype=='Boolean'))\">\r\n\r\n                <div [ngClass]=\"!attribute.value && submitclicked ? 'border-validation': '' \">  <p-radioButton name=\"Yes\" style=\"font-weight:normal!important;\" value=\"True\" label=\"Yes\" [(ngModel)]=\"attribute.value\" selectedValue=\"attribute.value=='True'\"></p-radioButton>\t&nbsp;\r\n              <p-radioButton name=\"No\" style=\"font-weight:normal!important;\"  value=\"False\" label=\"No\"  [(ngModel)]=\"attribute.value\" selectedValue=\"attribute.value=='False'\"></p-radioButton></div>\r\n              </td>\r\n              <!--If Datatype == Dropdown Single-->\r\n\r\n              <td id=\"dropdownSingle\" [hidden]=\"!(attribute.isEditable && attribute.datatype=='Dropdown Single' || ((attribute.value == '' || !attribute.value) && attribute.datatype=='Dropdown Single')) \">\r\n                <div [ngClass]=\"!attribute.value && submitclicked ? 'border-validation': '' \">\r\n                <p-dropdown autoWidth='true'  [(ngModel)]=\"attribute.value\" placeholder=\"Select a value\" [options]=\"attribute.codeValues\"  [ngModelOptions]=\"{standalone: true}\" filter=\"filter\">{{attribute.codeValues}}</p-dropdown>\r\n                </div>\r\n              </td>\r\n\r\n              <!--If Datatype == Number-->\r\n              <td [hidden]=\"!(attribute.isEditable && attribute.datatype=='Number' || ((attribute.value == '' ||  !attribute.value)&& attribute.datatype=='Number'))\">\r\n                <div [ngClass]=\"!attribute.value && submitclicked ? 'border-validation': '' \">\r\n                <input style=\"width:100%;\" type=\"number\" pInputText [(ngModel)]=\"attribute.value\" placeholder=\"Enter Numeric Value\">\r\n                </div>\r\n              </td>\r\n              <!--If Datatype == Text-->\r\n              <td [hidden]=\"!(attribute.isEditable && attribute.datatype=='Text' || ((attribute.value == '' || !attribute.value) && attribute.datatype=='Text'))\">\r\n                <div [ngClass]=\"!attribute.value && submitclicked ? 'border-validation': '' \">\r\n                <input style=\"width:100%;\" pInputText  [(ngModel)]=\"attribute.value\" placeholder=\"Enter A Id\">\r\n                </div>\r\n              </td>\r\n              <td> <a href=\"#\"><i class=\"fa fa-remove\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete Attribute\" (click)=\"deleteAttribute(attribute.name)\"></i> </a></td>\r\n            </tr>\r\n\r\n            </tbody>\r\n\r\n          </table>\r\n          <p-messages *ngIf=\"attributes.length ==0\" [value]=\"attrMsgs\" [closable]=\"false\"></p-messages>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n<div class=\"panel panel-default\" id=\"files\">\r\n  <div class=\"panel-heading\">\r\n    <a class=\"accordion-toggle\" data-toggle=\"collapse\" href=\"#newFiles\">\r\n      <h4 class=\"panel-title\">\r\n\r\n        Files <span class=\"required-astrick\"> * </span>\r\n\r\n      </h4>\r\n    </a>\r\n    <span class=\"panel-header-btn\">\r\n      <button class=\"btn btn-default upload-btn\"data-toggle=\"tooltip\" data-placement=\"top\" title=\"Click to Select Files\" (click)=\"openModal('custom-modal-1')\"><i class=\"fa fa-upload\"></i> Files</button></span>\r\n    <!--openModal('custom-modal-1')-->\r\n    <div>\r\n\r\n    </div>\r\n\r\n    <!--<p-dialog  class=\"dialog\" id=\"dialog\"  resizable='true' header=\"Library Explorer\" [(visible)]=\"display\" modal=\"modal\" closeOnEscape=\"true\" [draggable]=\"false\">-->\r\n\r\n      <!--<upload [updatedResult]=\"selectedDirList\" (selectedDir)=\"dirResult($event)\" (closeDialog)=\"closeDialog()\"></upload>-->\r\n\r\n    <!--</p-dialog>-->\r\n    <modal id=\"custom-modal-1\">\r\n      <div class=\"modal\">\r\n\r\n        <div class=\"modal-body\">\r\n          <h1 class=\"modal-header\"><span class=\"title-header\"><strong>Library Explorer</strong></span> <i (click)=\"closeModal('custom-modal-1')\" class=\"fa fa-close\" style=\"position: relative;\"></i>\r\n          </h1>\r\n\r\n\r\n          <upload [updatedResult]=\"selectedDirList\" (selectedDir)=\"dirResult($event)\" (closeDialog)=\"closeDialog()\"></upload>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-background\"></div>\r\n    </modal>\r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n        <div  id=\"newFiles\"class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\r\n\r\n                <table class=\"table table-striped custom-table\" id=\"filesTable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>File</th>\r\n                            <th style=\"width:75%\">Title</th>\r\n                            <th>\r\n                                <div class=\"dropdown\">\r\n                                    <a class=\"dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\r\n                                        <i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i>\r\n\r\n                                    </a>\r\n                                    <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\r\n                                        <li>\r\n                                        <a href=\"#\"  (click)=\"createTitle()\"> <i class=\"fa fa-text-width\" aria-hidden=\"true\"></i> Create Title from file name</a>\r\n                                        </li>\r\n\r\n                                        <li><a href=\"#\" (click)=\"clickCopy()\"><i class=\"fa fa-copy\" aria-hidden=\"true\"></i> Copy Title To All Files</a></li>\r\n                                        <li><a href=\"#\" (click)=\"openDialog(null)\"><i class=\"fa fa-remove\" aria-hidden=\"true\"></i> Remove All Files</a></li>\r\n\r\n                                    </ul>\r\n\r\n                                </div>\r\n\r\n                            </th>\r\n\r\n                        </tr>\r\n                    </thead>\r\n\r\n                    </table>\r\n\r\n\r\n          <p-messages *ngIf=\"this.selectedDirList.length ==0\" [value]=\"fileMsgs\" [closable]=\"false\"></p-messages>\r\n                <div id=\"scrollTable\" class=\"panel-body files-panel\">\r\n                    <table class=\"table table-striped custom-table\" id=\"filesTable\">\r\n                        <tbody *ngFor=\"let dir of selectedDirList\">\r\n\r\n                            <tr >\r\n\r\n                                <td style=\"max-height: 40px; padding-left: 6px\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{dir.name}}\">\r\n                                    {{dir.name}}\r\n                                </td>\r\n\r\n                                <td style=\"max-height: 40px; padding: 2px !important;\" id=\"initalTitle\" class=\"point\" style=\"width:75%\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Click to Edit Title\" >\r\n                                  <input [readonly]=\"!editable\" type=\"text\" (click)=\"editableFunc()\" class=\"form-control\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" (change)=\"changeName($event.target.value, dir)\" onfocus=\"this.placeholder = ''\" id=\"inputPassword3\" style=\"font-family:inherit !important;\" value=\"{{dir.title}}\" />\r\n                                </td>\r\n                                <td><i class=\"fa fa-remove point\" style=\"margin-left:4px;\"  data-toggle=\"tooltip\" data-placement=\"top\" title=\"Click To Delete File\" (click)=\"openDialog(dir)\"></i> </td>\r\n\r\n                            </tr>\r\n\r\n                        </tbody>\r\n\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n<div class=\"btn-bar\">\r\n  <button pButton class=\"btn primary-btn\" type=\"submit\" name=\"action\"  (click)=\"submit()\">\r\n    <i class=\"fa fa-upload\">\r\n    </i> Bulk Ingest\r\n  </button>\r\n</div>\r\n</div>\r\n  </div>\r\n<div  *ngIf=\"bulkComplete && bulkComplete['Message'] == 'Success'\">\r\n<p-dialog header=\"Success\" [(visible)]=\"show\" modal=\"modal\" [closable]=\"false\"  [responsive]=\"true\">\r\n  <p> Your Work Order Was Submitted Successfully.\r\n   <button class=\"btn btn-primary submitSuccess\" type=\"button\" pButton icon=\"fa-check\" (click)=\"show=false; reloadPage()\" label=\"Continue\"> Continue </button> </p>\r\n  </p-dialog>\r\n\r\n</div>\r\n\r\n\r\n    <p-dialog header=\"Confirmation\" [(visible)]=\"deleteFileShow\" modal=\"modal\" [closable]=\"false\" [responsive]=\"true\">\r\n        <p>\r\n            Are you sure you want to delete?\r\n            <button class=\"btn btn-danger submitSuccess\" type=\"button\" pButton icon=\"fa-check\" (click)=\"cotinueDelete()\" label=\"Yes\">\r\n                Yes\r\n            </button>\r\n\r\n            <button class=\"btn btn-primary submitFail\" type=\"button\" pButton icon=\"fa-check\" (click)=\"deleteFileShow=false\" label=\"No\">\r\n                No\r\n            </button>\r\n        </p>\r\n    </p-dialog>\r\n\r\n</div>\r\n<script>\r\n\r\n$(function () {\r\n  $('[data-toggle=\"tooltip\"]').tooltip()\r\n})\r\n  </script>\r\n"

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

module.exports = "\r\n<!--<modal id=\"custom-modal-1\" style=\"display:block\">-->\r\n<div style=\"display:block\">\r\n\r\n          <div class=\"row dheight\"  style=\"overflow-x:auto; display: inline-block\">\r\n            <div class=\"div-file-fixed-list\"  style=\"overflow-x:auto; display: inline-block\">\r\n              <div  name=\"showSubFolder\"  *ngFor=\"let library of libraries let i = index\" [ngModel]=\"library\" (click)=\"getSubFolder(library)\" ngDefaultControl>\r\n                         <div class=\"folder-list\" [style.background-color]=\"getBackGroundColor(library)\">\r\n                            <i class=\"fa fa-hdd-o\"></i>\r\n                           <span  class=\"folder-list-items point \"> {{library.name}}</span>\r\n                            <i class=\"fa fa-angle-right pull-right\" aria-hidden=\"true\"></i>\r\n                          </div>\r\n\r\n              </div>\r\n            </div>\r\n          \r\n\r\n\r\n        \r\n            <div *ngIf=\"currLib\" style=\"overflow-x:scroll; display: inline-block; white-space: nowrap;\">\r\n              <div *ngFor=\"let item of dirLevelFolder\" class=\"div-file-folder-list\">\r\n               <div style=\"inline-block\"> <input [disabled]=\"!allFolder(item)\" type=\"checkbox\" name=\"selectParent\" (click)=\"selectAll(item)\" [ngModel]=\"isAllSelected(item)\" [ngModelOptions]=\"{standalone: true}\">\r\n                Select All</div>\r\n                <div *ngIf=\"loading\" class=\"loader1\"></div>\r\n                <div>\r\n                  <div *ngFor=\"let dir of item\">\r\n                    <sub-folder (selectDir)=\"selectedFolder($event)\" [directory]=\"dir\" [levelFolder]=\"dirLevelFolder\" (selDir)=\"selDir($event)\" [library] = \"currLib\" (selectLib)=\"updateSelectAll()\"></sub-folder>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            \r\n\r\n\r\n      </div>\r\n      </div>\r\n\r\n\r\n  <div style=\"padding:5px !important;\" class=\"modal-footer\">\r\n    <div style=\"padding-top:3px;\">\r\n      <button type=\"button\" class=\"btn secondary-btn\" (click)=\"clearSelection()\" data-dismiss=\"modal\">Cancel</button>\r\n      <button type=\"button\" class=\"btn primary-btn\" [disabled]=\"submitDis\" (click)=\"submit()\">Select Files</button>\r\n    </div>\r\n  </div>\r\n\r\n<!-- </div> -->\r\n<!--</modal>-->\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GetDataService = (function () {
    function GetDataService(http) {
        this.http = http;
        this.http = http;
    }
    GetDataService.prototype.jwt = function () {
        /** Auth settings **/
        var apiKey = 'F3A4F748-604A-4CDB-83AF-58B20FAC327B';
        this.token = JSON.parse(sessionStorage.getItem("okta-token-storage"));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('ApiKey', apiKey);
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.token.accessToken.accessToken);
        headers.append('oktaIdToken', this.token.idToken.idToken);
        headers.append('authprovider', 'okta');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        return options;
    };
    GetDataService.prototype.getDevUrl = function () {
        /** staging setting **/
        return 'http://als-stg-1.mtvn.ad.viacom.com/alias/venus/';
    };
    GetDataService.prototype.getLocalUrl = function () {
        /** local settings **/
        return 'http://localhost:55200/';
    };
    GetDataService.prototype.getSystemOrigin = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl + 'SystemOfOrigin', this.jwt())
            .map(function (response) { return response.json(); });
    };
    GetDataService.prototype.getPriority = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl + 'Priorities', this.jwt())
            .map(function (response) { return response.json(); });
    };
    GetDataService.prototype.getContentType = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl + 'ContentType', this.jwt())
            .map(function (response) { return response.json(); });
    };
    GetDataService.prototype.getChannel = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl + 'Channels', this.jwt())
            .map(function (response) { return response.json(); });
    };
    GetDataService.prototype.getRen = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl + 'Rendition', this.jwt())
            .map(function (data) { return data.json(); })
            .catch(function (err) { return err; });
    };
    GetDataService.prototype.getFormat = function (renId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl + 'api/Formats/RenditionId?renditionId=' + renId, this.jwt())
            .map(function (response) { return response.json(); });
    };
    GetDataService.prototype.getWorkFlow = function (formatId) {
        var serviceUrl = 'api/workflowtemplate/sourceFormat?formatID=' + formatId + "&$filter=WorkflowTemplateType eq 'Ingest' and IsActive eq true";
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl + serviceUrl, this.jwt())
            .map(function (response) { return response.json(); });
    };
    GetDataService.prototype.getArchivalRule = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl + 'ArchivalRules', this.jwt())
            .map(function (response) { return response.json(); });
    };
    GetDataService.prototype.getCurrentUser = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl + 'api/user', this.jwt())
            .map(function (response) { return response.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    GetDataService.prototype.getLibraries = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl + 'api/Library?$filter=TypeId eq 5 and IsActive eq true', this.jwt())
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    GetDataService.prototype.getChildLibrary = function (libraryId, relativePath) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl + 'api/getDirectories?libraryId=' + libraryId + '&relativePath=' + relativePath + '&filter=*.*&fullPath=/', this.jwt())
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (err) { return err.json(); });
    };
    GetDataService.prototype.getTemplates = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl + 'AttributeTemplate?$filter=AttributeTemplateValue%2Fall(x1%3A%20x1%2FItemType%20eq%20%27Content%27)&$orderby=AttributeTemplateDesc&$expand=AttributeTemplateValue', this.jwt())
            .map(function (response) { return response.json(); });
    };
    GetDataService.prototype.getCodeSets = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl + "CodeSets?$filter=((ActiveInd%20eq%20true)%20and%20(Level%20eq%20'Content'))%20and%20(Usage%20eq%20'Tech%20Attributes')&$orderby=CodeSet1", this.jwt())
            .map(function (response) { return response.json(); });
    };
    GetDataService.prototype.getCodeValues = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl + 'CodeValues?$orderby=CodeValueValue', this.jwt())
            .map(function (response) { return response.json(); });
    };
    GetDataService.prototype.getSecurityGroups = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl + 'api/UserGroups', this.jwt())
            .map(function (response) { return response.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    GetDataService.prototype.submitBulkIngest = function (ingestItem) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl + 'api/SubmitBulkIngest', ingestItem, this.jwt()).toPromise()
            .then(function (response) { return response.json(); }, function (err) { return console.log(err); });
    };
    GetDataService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return GetDataService;
}());
GetDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], GetDataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_service__ = __webpack_require__(199);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__modal_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(179);


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    envName: 'dev',
    apiUrl: 'https://aliasextsvc.viacom.com' + '/'
};
//# sourceMappingURL=environment.js.map

/***/ })

},[611]);
//# sourceMappingURL=main.bundle.js.map
