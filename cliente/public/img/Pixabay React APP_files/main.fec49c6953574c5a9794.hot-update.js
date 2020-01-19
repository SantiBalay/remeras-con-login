webpackHotUpdate("main",{

/***/ "./src/components/Buscador.js":
/*!************************************!*\
  !*** ./src/components/Buscador.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/santiagobalay/Desktop/workspace/ReactProjects/buscador-img-react/src/components/Buscador.js";


class Buscador extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.refBusqueda = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();

    this.enviarForm = e => {
      e.preventDefault();
      const busqueda = this.refBusqueda.current.value;
      this.props.buscarImagenes(busqueda);
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.enviarForm,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group col-md-8 col-sm-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      ref: this.refBusqueda,
      type: "text",
      placeholder: "Ingresa tu busqueda",
      className: "form-control form-control-lg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group col-md-4 col-sm-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "submit",
      value: "Buscar",
      className: "btn btn-lg btn-danger btn-block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Buscador);

/***/ })

})
//# sourceMappingURL=main.fec49c6953574c5a9794.hot-update.js.map