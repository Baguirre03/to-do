"use strict";
(self["webpackChunkto_do"] = self["webpackChunkto_do"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Crimson+Text&family=Roboto+Slab&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  --basicPadding: 2vw;\n\n  --majorBlue: #1d3557;\n  --royalBlue: #457b9d;\n  --ultraVoilet: #a8dadc;\n  --lavender: white;\n  --muave: #e63946;\n  --darkBlue: #020024;\n  --darkGrey: #e5e5e5;\n  font-family: \"Roboto Slab\", serif;\n}\n\n.main-container {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\n/* Header */\n\nheader {\n  height: 7vh;\n  display: flex;\n  justify-content: space-between;\n  padding-left: var(--basicPadding);\n  color: var(--lavender);\n  font-size: 2rem;\n  border-bottom: 2px solid black;\n  background: rgb(2, 0, 36);\n  background: linear-gradient(\n    90deg,\n    rgba(2, 0, 36, 1) 0%,\n    rgba(32, 81, 107, 1) 30%,\n    rgba(168, 218, 220, 1) 100%\n  );\n}\n\nheader div {\n  height: 7vh;\n  font-size: 2rem;\n  display: flex;\n  align-items: center;\n  gap: 1vw;\n}\n\nheader div svg {\n  height: 60%;\n  fill: var(--lavender);\n}\n\n#logo-svg:hover {\n  cursor: pointer;\n}\n\n.dropdown {\n  visibility: hidden;\n}\n\n/* Main Content */\n\nmain {\n  display: grid;\n  grid-template-columns: 1fr 6fr;\n  grid-template-rows: min-content 1fr;\n  flex: 1;\n}\n\n/* Sidebar */\n.projects {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  gap: 10px;\n}\n\n.sidebar {\n  grid-row: span 2;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  background-color: var(--darkGrey);\n  border-right: 2px solid var(--majorBlue);\n}\n\n.current-times {\n  display: flex;\n  flex-direction: column;\n  padding-top: 2vh;\n  align-items: center;\n  gap: 2vh;\n}\n\nli {\n  width: 80%;\n  list-style-type: none;\n}\n\n.default-options {\n  width: 100%;\n  background-color: var(--darkGrey);\n  border: none;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  padding: 0.5vh;\n  cursor: pointer;\n  display: flex;\n  border-radius: 1vw;\n}\n\n.default-options:hover {\n  font-size: 1.3rem;\n  translate: 0rem -0.2rem;\n  transition: 0.2s;\n}\n\n.projects h3 {\n  font-size: 1.5rem;\n  align-self: center;\n  border-bottom: 2px solid black;\n}\n\n.projects-holder {\n  display: flex;\n  flex-direction: column;\n}\n\n.projects-holder .project {\n  background-color: var(--darkGrey);\n  border: none;\n  font-size: 1.3rem;\n  padding: 0.4vh;\n  cursor: pointer;\n}\n\n.projects-holder .project:hover {\n  background-color: var(--majorBlue);\n  color: white;\n  transition: 0.2s;\n  font-size: 1.5rem;\n}\n\n.selected {\n  font-size: 1.5rem;\n  color: white;\n  background: linear-gradient(\n    90deg,\n    rgba(2, 0, 36, 1) 0%,\n    rgba(32, 81, 107, 1) 30%,\n    rgba(168, 218, 220, 1) 100%\n  );\n  background-size: 100%;\n  transition: 0.5s;\n}\n\n.selected:hover {\n  color: white !;\n  font-size: 1.5rem;\n}\n\n/* Sidebar End */\n\n/* Task holder */\n.to-do-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-top: 2vh;\n  padding-bottom: 2vh;\n  background-color: var(--lavender);\n  gap: 2.5vh;\n}\n\n.proj-display {\n  font-size: 2rem;\n}\n\n.can-edit-name:hover {\n  cursor: pointer;\n  color: var(--ultraVoilet);\n}\n\n#createToDo {\n  font-size: 1.3rem;\n  background-color: var(--lavender);\n  border: none;\n  padding: 2vh;\n}\n\n#createToDo:hover {\n  color: var(--lavender);\n  background-color: var(--majorBlue);\n  box-shadow: 3px 3px 3px black;\n  transition: 0.5s;\n  cursor: pointer;\n  border-radius: 1vw;\n}\n\n.task-holder {\n  padding: 1vw;\n  background-color: var(--darkGrey);\n  border-radius: 1vw;\n  display: flex;\n  flex-direction: column;\n  gap: 1vh;\n  border: #020024 solid 2px;\n  margin-left: 3vw;\n  margin-right: 3vw;\n  margin-bottom: 2vh;\n  box-shadow: 3px 3px 20px black;\n}\n\n.to-do {\n  display: flex;\n  gap: 1vw;\n  justify-content: space-between;\n  border: 2px solid black;\n  background-color: var(--ultraVoilet);\n  background-color: white;\n  border-radius: 1vw;\n  overflow: hidden;\n  align-items: center;\n  box-shadow: 5px 5px 5px var(--majorBlue);\n  padding: 1vh;\n}\n\n.left-side {\n  display: flex;\n  gap: 1vw;\n  align-items: center;\n}\n\n.to-do:hover {\n  translate: 0px -0.2vh;\n  box-shadow: 5px 5px 5px black;\n}\n\n.title {\n  display: flex;\n}\n\n@keyframes strike {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 100%;\n  }\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.done-title {\n  position: relative;\n}\n\n.done-title::after {\n  content: \" \";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background: black;\n  animation-name: strike;\n  animation-duration: 0.5s;\n  animation-timing-function: linear;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n}\n\n.right-task-items {\n  display: flex;\n  gap: 1vw;\n  align-items: center;\n}\n\n.check-stat {\n  height: 1.7rem;\n  width: 1.7rem;\n  border-radius: 100%;\n}\n\n.false-task {\n  background-color: white;\n}\n\n.priority {\n  display: flex;\n  gap: 0.5vw;\n  height: 100%;\n}\n\n.priority-button {\n  height: 1.4rem;\n  width: 1.4rem;\n  align-self: center;\n  border-radius: 1vw;\n  box-shadow: 2px 2px 1px var(--darkBlue);\n  background-color: var(--darkGrey);\n}\n\n[data-priority=\"one\"]:hover {\n  background-color: green;\n  transition: 0.3s;\n}\n\n[data-priority=\"two\"]:hover {\n  background-color: yellow;\n  transition: 0.3s;\n}\n\n[data-priority=\"three\"]:hover {\n  background-color: red;\n  transition: 0.3s;\n}\n/*  */\n[data-priority=\"one\"].active-priority {\n  background-color: green;\n}\n\n[data-priority=\"two\"].active-priority {\n  background-color: yellow;\n}\n\n[data-priority=\"three\"].active-priority {\n  background-color: red;\n}\n\n.data .done-task {\n  background-color: darkgray;\n  transition: 0.3s;\n}\n\n.done-entire-task {\n  border: 1px solid black;\n  box-shadow: none;\n  filter: brightness(90%);\n}\n\n.done-entire-task:hover {\n  box-shadow: none;\n}\n\n.edit-task {\n  background-color: white;\n  border: none;\n}\n\n.edit-image {\n  height: 2rem;\n  width: 2rem;\n  margin-top: 2px;\n}\n\n.edit-image:hover {\n  fill: green;\n  scale: 1.05;\n  transition: 0.2s;\n}\n\n.delete-btn {\n  background-color: white;\n  border: none;\n}\n\n.delete-img {\n  height: 2rem;\n  width: 2rem;\n  margin-top: 2px;\n}\n\n.delete-img:hover {\n  fill: #e63946;\n  scale: 1.05;\n  transition: 0.2s;\n}\n\n.info-btn {\n  background-color: white;\n  border: none;\n}\n\n.info-btn:hover {\n  fill: var(--royalBlue);\n  scale: 1.05;\n  transition: 0.2s;\n}\n\n.info-image {\n  height: 2rem;\n  width: 2rem;\n  margin-top: 2px;\n}\n\n.task-info-popup {\n  position: absolute;\n  display: flex;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: min-content;\n  width: 50vw;\n  background-color: var(--majorBlue);\n  color: var(--darkGrey);\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  padding: 2vw;\n  box-shadow: 5px 5px 5px black;\n  border-radius: 1vw;\n}\n\n.remove-popup {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1rem;\n  width: 1rem;\n  font-size: 1rem;\n  padding: 1vw;\n  margin: 1vw;\n  top: 0;\n  right: 0;\n  background-color: var(--ultraVoilet);\n  border-radius: 50%;\n}\n\n.remove-popup:hover {\n  background-color: var(--muave);\n  color: var(--darkGrey);\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n.empty-display {\n  display: flex;\n  justify-content: center;\n}\n\n.delete-proj {\n  display: grid;\n  width: 15vw;\n  margin-top: 2vh;\n  align-self: center;\n  padding: 1vw;\n  font-size: 1.3rem;\n  background-color: var(--lavender);\n  box-shadow: 5px 5px 5px black;\n}\n\n.delete-proj:hover {\n  background-color: var(--muave);\n  color: var(--lavender);\n  box-shadow: 5px 5px 5px black;\n  border-radius: 1vw;\n  transition: 0.4s;\n}\n\n.hidden {\n  position: absolute;\n  visibility: hidden;\n}\n\n/* FORMS */\n\n#createProj {\n  font-size: 1rem;\n  background-color: var(--lavender);\n  margin-left: 1vw;\n  margin-right: 1vw;\n  padding: 0.4vh;\n  box-shadow: 3px 3px 3px black;\n}\n\n#createProj:hover {\n  background-color: var(--majorBlue);\n  color: var(--lavender);\n  transition: 0.4s;\n}\n\n.project-form {\n  display: flex;\n  padding: 1vw;\n  align-items: center;\n  justify-content: center;\n  gap: 0.6vw;\n}\n\n#project-name {\n  width: 70%;\n  border: none;\n  background-color: var(--darkGrey);\n  border-bottom: 3px black dotted;\n  font-size: 1.2rem;\n  padding: 2px;\n}\n\n#project-name:focus {\n  outline: none;\n}\n\n.project-form button {\n  font-size: 1rem;\n  padding-left: 0.5vw;\n  padding-right: 0.5vw;\n  background-color: var(--lavender);\n  color: var(--darkBlue);\n  border: 1px solid black;\n  box-shadow: 2px 2px 2px black;\n}\n\n.project-form button:hover {\n  background-color: var(--majorBlue);\n  color: var(--darkGrey);\n  border-radius: 50%;\n  transition: 0.4s;\n}\n\n.to-do-form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  justify-content: center;\n  flex-direction: column;\n  background-color: white;\n  box-shadow: 5px 5px 5px var(--darkBlue);\n  border: 3px solid black;\n  border-radius: 1vh;\n  padding: 2vw;\n  width: fit-content;\n  height: fit-content;\n  gap: 1.1vh;\n  color: black;\n  animation: fadeIn 0.5s;\n}\n\n.blur-this {\n  filter: blur(1px);\n}\n\ntextarea {\n  resize: none;\n}\n\n.to-do-form input,\nselect,\ntextarea {\n  height: 2.5vh;\n  padding: 0.2vh;\n  border: 1px solid black;\n}\n\n.to-do-form input:focus,\nselect:focus,\ntextarea:focus {\n  outline: none;\n}\n\n.to-do-form select {\n  height: 3vh;\n}\n\n.submit-form {\n  grid-column: span 2;\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n  justify-content: center;\n  background-color: var(--darkGrey);\n  box-shadow: 2px 2px 2px black;\n}\n\n.submit-form:hover {\n  background-color: var(--majorBlue);\n  color: var(--darkGrey);\n  border-radius: 1vw;\n  box-shadow: 2px 2px 2px var(--darkGrey);\n  transition: 0.5s;\n}\n\n.remove-form {\n  position: absolute;\n  right: 0;\n  margin: 2px 2px 0px 0px;\n  padding: 2px;\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n  justify-content: center;\n  background-color: var(--darkGrey);\n  box-shadow: 1px 1px 1px black;\n}\n\n.remove-form:hover {\n  background-color: red;\n  color: white;\n}\n\n.to-do-form #priority {\n  display: flex;\n  flex-direction: column;\n}\n\n#priority .input-and-label {\n  display: flex;\n  align-content: center;\n  gap: 0.3vw;\n}\n\n.edit-task-form {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  color: black;\n  padding: 2vw;\n  gap: 1.1vh;\n  width: fit-content;\n  height: fit-content;\n  box-shadow: 5px 5px 5px var(--darkBlue);\n  border: 3px solid black;\n  border-radius: 1vw;\n  animation: fadeIn 0.5s;\n}\n\n.edit-task-form input,\nselect,\ntextarea {\n  height: 2.5vh;\n  padding: 0.2vh;\n  border: 1px solid black;\n}\n\n.edit-task-form select {\n  height: 3vh;\n}\n\n.edit-task-form input:focus {\n  outline: none;\n}\n\n.edit-task-form button {\n  grid-column: span 2;\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n  justify-content: center;\n  background-color: var(--darkGrey);\n  box-shadow: 2px 2px 2px black;\n}\n\n.edit-task-form button:hover {\n  background-color: var(--majorBlue);\n  color: var(--darkGrey);\n  border-radius: 1vw;\n  box-shadow: 2px 2px 2px var(--darkGrey);\n  transition: 0.5s;\n}\n\n.change-proj-name {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.change-proj-name input {\n  background-color: white;\n  font-size: 1.2rem;\n\n  border: none;\n  border-bottom: black dotted 2px;\n  padding: 0.5vw;\n}\n\n.change-proj-name button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  padding: 5px;\n  width: 5vh;\n  height: 5vh;\n  background-color: white;\n  border: 2px solid black;\n  box-shadow: 4px 4px 4px var(--darkBlue);\n}\n\n.change-proj-name button:hover {\n  background-color: var(--majorBlue);\n  color: var(--darkGrey);\n  font-size: 1.2rem;\n  align-items: center;\n  border-radius: 50%;\n  transition: 0.4s;\n}\n\n/* Responsiveness */\n\n@media screen and (max-width: 1100px) {\n  .remove-form {\n    position: relative;\n    grid-column: span 2;\n  }\n}\n\n/* Put projects on top */\n\n@media screen and (max-width: 600px) {\n  main {\n    display: flex;\n    flex-direction: column;\n  }\n  .sidebar {\n    display: flex;\n    width: 100%;\n    height: auto;\n    position: relative;\n    padding-bottom: 15px;\n    gap: 1px;\n  }\n\n  .current-times {\n    gap: 1px;\n  }\n\n  .default-options {\n    width: 100%;\n    background-color: var(--darkGrey);\n    border: none;\n    align-items: center;\n    justify-content: center;\n    font-size: 1rem;\n    padding: 0.5vh;\n    cursor: pointer;\n    display: flex;\n    border-radius: 1vw;\n  }\n\n  .default-options:hover {\n    font-size: 1rem;\n    translate: 0rem;\n  }\n\n  .projects h3 {\n    font-size: 1.1rem;\n    align-self: center;\n    border-bottom: 2px solid black;\n    border-top: 2px solid black;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n  }\n\n  .projects {\n    gap: 1px;\n  }\n\n  .projects-holder {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .projects-holder .project {\n    background-color: var(--darkGrey);\n    border: none;\n    font-size: 1rem;\n    padding: 0.4vh;\n    cursor: pointer;\n  }\n\n  .projects-holder .project:hover {\n    background-color: var(--majorBlue);\n    color: white;\n    transition: 0.2s;\n    font-size: 1rem;\n  }\n\n  #createProj {\n    font-size: 1rem;\n    background-color: var(--lavender);\n    margin-left: 1vw;\n    margin-right: 1vw;\n    padding: 0.2vh;\n    box-shadow: 3px 3px 3px black;\n  }\n\n  #createProj:hover {\n    background-color: var(--majorBlue);\n    color: var(--lavender);\n    transition: 0.4s;\n  }\n\n  .project-form {\n    display: flex;\n    padding: 0.4vw;\n    align-items: center;\n    justify-content: center;\n    gap: 0.3vw;\n  }\n\n  #project-name {\n    width: 70%;\n    border: none;\n    background-color: var(--darkGrey);\n    border-bottom: 2px black dotted;\n    font-size: 1rem;\n    padding: 2px;\n  }\n\n  .proj-display {\n    font-size: 1.7rem;\n  }\n\n  #createToDo {\n    font-size: 1rem;\n    background-color: var(--lavender);\n    border: none;\n    padding: 1vh;\n  }\n\n  #createToDo:hover {\n    color: var(--lavender);\n    background-color: var(--majorBlue);\n    box-shadow: 2px 2px 2px black;\n    transition: 0.5s;\n    cursor: pointer;\n    border-radius: 1vw;\n  }\n\n  .empty-display {\n    display: flex;\n    justify-content: center;\n    font-size: 1.4rem;\n  }\n\n  .delete-proj {\n    width: fit-content;\n  }\n\n  .change-proj-name {\n    display: flex;\n    align-items: center;\n    gap: 3px;\n  }\n\n  .change-proj-name input {\n    background-color: white;\n    font-size: 1rem;\n    border: none;\n    border-bottom: black dotted 1px;\n    padding: 0.3vw;\n  }\n\n  .change-proj-name button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1rem;\n    padding: 3px;\n    width: 3vh;\n    height: 3vh;\n    background-color: white;\n    border: 2px solid black;\n    box-shadow: 2px 2px 2px var(--darkBlue);\n  }\n\n  .change-proj-name button:hover {\n    background-color: var(--majorBlue);\n    color: var(--darkGrey);\n    font-size: 1rem;\n    align-items: center;\n    border-radius: 50%;\n    transition: 0.4s;\n  }\n\n  .done-title::after {\n    content: \" \";\n    position: absolute;\n    top: 50%;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    background: none;\n    animation-name: strike;\n    animation-duration: 0.5s;\n    animation-timing-function: linear;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n  }\n}\n\n/* Drop down menu */\n\n@media screen and (max-width: 400px) {\n  .dropdown {\n    visibility: visible;\n    background: none;\n    border: none;\n    width: 5vh;\n    height: 5vh;\n    align-self: center;\n    margin: 3px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .btn-burger {\n    background-color: black;\n    border-radius: 5px;\n    width: 100%;\n    height: 4px;\n    box-shadow: 0 2px 5px var(--majorBlue);\n    transition: all 0.5s ease-in-out;\n  }\n\n  .btn-burger::before,\n  .btn-burger::after {\n    content: \"\";\n    background-color: black;\n    position: absolute;\n    width: 5vh;\n    height: 4px;\n    border-radius: 5px;\n    box-shadow: 0 2px 5px var(--majorBlue);\n    transition: all 0.5s ease-out;\n  }\n\n  .btn-burger::before {\n    transform: translateY(-8px);\n  }\n\n  .btn-burger::after {\n    transform: translateY(8px);\n  }\n\n  .is-open .btn-burger {\n    transform: translateX(-50px);\n    background: transparent;\n    box-shadow: none;\n  }\n\n  .is-open .btn-burger::before {\n    box-shadow: none;\n    transform: rotate(45deg) translate(35px, -35px);\n  }\n\n  .is-open .btn-burger::after {\n    box-shadow: none;\n    transform: rotate(-45deg) translate(35px, 35px);\n  }\n\n  .sidebar {\n    position: fixed;\n    display: none;\n    transition: fadeIn 2s;\n  }\n\n  .active-dropdown {\n    display: block;\n    position: relative;\n    transition: fadeIn 2s;\n  }\n}\n\n@media screen and (max-width: 340px) {\n  .logo {\n    font-size: 1.5rem;\n  }\n\n  .right-task-items {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    align-items: center;\n    justify-items: center;\n  }\n\n  .priority {\n    justify-self: center;\n    align-self: center;\n    grid-column: span 3;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Crimson+Text&family=Roboto+Slab&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  --basicPadding: 2vw;\n\n  --majorBlue: #1d3557;\n  --royalBlue: #457b9d;\n  --ultraVoilet: #a8dadc;\n  --lavender: white;\n  --muave: #e63946;\n  --darkBlue: #020024;\n  --darkGrey: #e5e5e5;\n  font-family: \"Roboto Slab\", serif;\n}\n\n.main-container {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\n/* Header */\n\nheader {\n  height: 7vh;\n  display: flex;\n  justify-content: space-between;\n  padding-left: var(--basicPadding);\n  color: var(--lavender);\n  font-size: 2rem;\n  border-bottom: 2px solid black;\n  background: rgb(2, 0, 36);\n  background: linear-gradient(\n    90deg,\n    rgba(2, 0, 36, 1) 0%,\n    rgba(32, 81, 107, 1) 30%,\n    rgba(168, 218, 220, 1) 100%\n  );\n}\n\nheader div {\n  height: 7vh;\n  font-size: 2rem;\n  display: flex;\n  align-items: center;\n  gap: 1vw;\n}\n\nheader div svg {\n  height: 60%;\n  fill: var(--lavender);\n}\n\n#logo-svg:hover {\n  cursor: pointer;\n}\n\n.dropdown {\n  visibility: hidden;\n}\n\n/* Main Content */\n\nmain {\n  display: grid;\n  grid-template-columns: 1fr 6fr;\n  grid-template-rows: min-content 1fr;\n  flex: 1;\n}\n\n/* Sidebar */\n.projects {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  gap: 10px;\n}\n\n.sidebar {\n  grid-row: span 2;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  background-color: var(--darkGrey);\n  border-right: 2px solid var(--majorBlue);\n}\n\n.current-times {\n  display: flex;\n  flex-direction: column;\n  padding-top: 2vh;\n  align-items: center;\n  gap: 2vh;\n}\n\nli {\n  width: 80%;\n  list-style-type: none;\n}\n\n.default-options {\n  width: 100%;\n  background-color: var(--darkGrey);\n  border: none;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  padding: 0.5vh;\n  cursor: pointer;\n  display: flex;\n  border-radius: 1vw;\n}\n\n.default-options:hover {\n  font-size: 1.3rem;\n  translate: 0rem -0.2rem;\n  transition: 0.2s;\n}\n\n.projects h3 {\n  font-size: 1.5rem;\n  align-self: center;\n  border-bottom: 2px solid black;\n}\n\n.projects-holder {\n  display: flex;\n  flex-direction: column;\n}\n\n.projects-holder .project {\n  background-color: var(--darkGrey);\n  border: none;\n  font-size: 1.3rem;\n  padding: 0.4vh;\n  cursor: pointer;\n}\n\n.projects-holder .project:hover {\n  background-color: var(--majorBlue);\n  color: white;\n  transition: 0.2s;\n  font-size: 1.5rem;\n}\n\n.selected {\n  font-size: 1.5rem;\n  color: white;\n  background: linear-gradient(\n    90deg,\n    rgba(2, 0, 36, 1) 0%,\n    rgba(32, 81, 107, 1) 30%,\n    rgba(168, 218, 220, 1) 100%\n  );\n  background-size: 100%;\n  transition: 0.5s;\n}\n\n.selected:hover {\n  color: white !;\n  font-size: 1.5rem;\n}\n\n/* Sidebar End */\n\n/* Task holder */\n.to-do-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding-top: 2vh;\n  padding-bottom: 2vh;\n  background-color: var(--lavender);\n  gap: 2.5vh;\n}\n\n.proj-display {\n  font-size: 2rem;\n}\n\n.can-edit-name:hover {\n  cursor: pointer;\n  color: var(--ultraVoilet);\n}\n\n#createToDo {\n  font-size: 1.3rem;\n  background-color: var(--lavender);\n  border: none;\n  padding: 2vh;\n}\n\n#createToDo:hover {\n  color: var(--lavender);\n  background-color: var(--majorBlue);\n  box-shadow: 3px 3px 3px black;\n  transition: 0.5s;\n  cursor: pointer;\n  border-radius: 1vw;\n}\n\n.task-holder {\n  padding: 1vw;\n  background-color: var(--darkGrey);\n  border-radius: 1vw;\n  display: flex;\n  flex-direction: column;\n  gap: 1vh;\n  border: #020024 solid 2px;\n  margin-left: 3vw;\n  margin-right: 3vw;\n  margin-bottom: 2vh;\n  box-shadow: 3px 3px 20px black;\n}\n\n.to-do {\n  display: flex;\n  gap: 1vw;\n  justify-content: space-between;\n  border: 2px solid black;\n  background-color: var(--ultraVoilet);\n  background-color: white;\n  border-radius: 1vw;\n  overflow: hidden;\n  align-items: center;\n  box-shadow: 5px 5px 5px var(--majorBlue);\n  padding: 1vh;\n}\n\n.left-side {\n  display: flex;\n  gap: 1vw;\n  align-items: center;\n}\n\n.to-do:hover {\n  translate: 0px -0.2vh;\n  box-shadow: 5px 5px 5px black;\n}\n\n.title {\n  display: flex;\n}\n\n@keyframes strike {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 100%;\n  }\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.done-title {\n  position: relative;\n}\n\n.done-title::after {\n  content: \" \";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  background: black;\n  animation-name: strike;\n  animation-duration: 0.5s;\n  animation-timing-function: linear;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n}\n\n.right-task-items {\n  display: flex;\n  gap: 1vw;\n  align-items: center;\n}\n\n.check-stat {\n  height: 1.7rem;\n  width: 1.7rem;\n  border-radius: 100%;\n}\n\n.false-task {\n  background-color: white;\n}\n\n.priority {\n  display: flex;\n  gap: 0.5vw;\n  height: 100%;\n}\n\n.priority-button {\n  height: 1.4rem;\n  width: 1.4rem;\n  align-self: center;\n  border-radius: 1vw;\n  box-shadow: 2px 2px 1px var(--darkBlue);\n  background-color: var(--darkGrey);\n}\n\n[data-priority=\"one\"]:hover {\n  background-color: green;\n  transition: 0.3s;\n}\n\n[data-priority=\"two\"]:hover {\n  background-color: yellow;\n  transition: 0.3s;\n}\n\n[data-priority=\"three\"]:hover {\n  background-color: red;\n  transition: 0.3s;\n}\n/*  */\n[data-priority=\"one\"].active-priority {\n  background-color: green;\n}\n\n[data-priority=\"two\"].active-priority {\n  background-color: yellow;\n}\n\n[data-priority=\"three\"].active-priority {\n  background-color: red;\n}\n\n.data .done-task {\n  background-color: darkgray;\n  transition: 0.3s;\n}\n\n.done-entire-task {\n  border: 1px solid black;\n  box-shadow: none;\n  filter: brightness(90%);\n}\n\n.done-entire-task:hover {\n  box-shadow: none;\n}\n\n.edit-task {\n  background-color: white;\n  border: none;\n}\n\n.edit-image {\n  height: 2rem;\n  width: 2rem;\n  margin-top: 2px;\n}\n\n.edit-image:hover {\n  fill: green;\n  scale: 1.05;\n  transition: 0.2s;\n}\n\n.delete-btn {\n  background-color: white;\n  border: none;\n}\n\n.delete-img {\n  height: 2rem;\n  width: 2rem;\n  margin-top: 2px;\n}\n\n.delete-img:hover {\n  fill: #e63946;\n  scale: 1.05;\n  transition: 0.2s;\n}\n\n.info-btn {\n  background-color: white;\n  border: none;\n}\n\n.info-btn:hover {\n  fill: var(--royalBlue);\n  scale: 1.05;\n  transition: 0.2s;\n}\n\n.info-image {\n  height: 2rem;\n  width: 2rem;\n  margin-top: 2px;\n}\n\n.task-info-popup {\n  position: absolute;\n  display: flex;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: min-content;\n  width: 50vw;\n  background-color: var(--majorBlue);\n  color: var(--darkGrey);\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  padding: 2vw;\n  box-shadow: 5px 5px 5px black;\n  border-radius: 1vw;\n}\n\n.remove-popup {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1rem;\n  width: 1rem;\n  font-size: 1rem;\n  padding: 1vw;\n  margin: 1vw;\n  top: 0;\n  right: 0;\n  background-color: var(--ultraVoilet);\n  border-radius: 50%;\n}\n\n.remove-popup:hover {\n  background-color: var(--muave);\n  color: var(--darkGrey);\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n.empty-display {\n  display: flex;\n  justify-content: center;\n}\n\n.delete-proj {\n  display: grid;\n  width: 15vw;\n  margin-top: 2vh;\n  align-self: center;\n  padding: 1vw;\n  font-size: 1.3rem;\n  background-color: var(--lavender);\n  box-shadow: 5px 5px 5px black;\n}\n\n.delete-proj:hover {\n  background-color: var(--muave);\n  color: var(--lavender);\n  box-shadow: 5px 5px 5px black;\n  border-radius: 1vw;\n  transition: 0.4s;\n}\n\n.hidden {\n  position: absolute;\n  visibility: hidden;\n}\n\n/* FORMS */\n\n#createProj {\n  font-size: 1rem;\n  background-color: var(--lavender);\n  margin-left: 1vw;\n  margin-right: 1vw;\n  padding: 0.4vh;\n  box-shadow: 3px 3px 3px black;\n}\n\n#createProj:hover {\n  background-color: var(--majorBlue);\n  color: var(--lavender);\n  transition: 0.4s;\n}\n\n.project-form {\n  display: flex;\n  padding: 1vw;\n  align-items: center;\n  justify-content: center;\n  gap: 0.6vw;\n}\n\n#project-name {\n  width: 70%;\n  border: none;\n  background-color: var(--darkGrey);\n  border-bottom: 3px black dotted;\n  font-size: 1.2rem;\n  padding: 2px;\n}\n\n#project-name:focus {\n  outline: none;\n}\n\n.project-form button {\n  font-size: 1rem;\n  padding-left: 0.5vw;\n  padding-right: 0.5vw;\n  background-color: var(--lavender);\n  color: var(--darkBlue);\n  border: 1px solid black;\n  box-shadow: 2px 2px 2px black;\n}\n\n.project-form button:hover {\n  background-color: var(--majorBlue);\n  color: var(--darkGrey);\n  border-radius: 50%;\n  transition: 0.4s;\n}\n\n.to-do-form {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  justify-content: center;\n  flex-direction: column;\n  background-color: white;\n  box-shadow: 5px 5px 5px var(--darkBlue);\n  border: 3px solid black;\n  border-radius: 1vh;\n  padding: 2vw;\n  width: fit-content;\n  height: fit-content;\n  gap: 1.1vh;\n  color: black;\n  animation: fadeIn 0.5s;\n}\n\n.blur-this {\n  filter: blur(1px);\n}\n\ntextarea {\n  resize: none;\n}\n\n.to-do-form input,\nselect,\ntextarea {\n  height: 2.5vh;\n  padding: 0.2vh;\n  border: 1px solid black;\n}\n\n.to-do-form input:focus,\nselect:focus,\ntextarea:focus {\n  outline: none;\n}\n\n.to-do-form select {\n  height: 3vh;\n}\n\n.submit-form {\n  grid-column: span 2;\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n  justify-content: center;\n  background-color: var(--darkGrey);\n  box-shadow: 2px 2px 2px black;\n}\n\n.submit-form:hover {\n  background-color: var(--majorBlue);\n  color: var(--darkGrey);\n  border-radius: 1vw;\n  box-shadow: 2px 2px 2px var(--darkGrey);\n  transition: 0.5s;\n}\n\n.remove-form {\n  position: absolute;\n  right: 0;\n  margin: 2px 2px 0px 0px;\n  padding: 2px;\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n  justify-content: center;\n  background-color: var(--darkGrey);\n  box-shadow: 1px 1px 1px black;\n}\n\n.remove-form:hover {\n  background-color: red;\n  color: white;\n}\n\n.to-do-form #priority {\n  display: flex;\n  flex-direction: column;\n}\n\n#priority .input-and-label {\n  display: flex;\n  align-content: center;\n  gap: 0.3vw;\n}\n\n.edit-task-form {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  color: black;\n  padding: 2vw;\n  gap: 1.1vh;\n  width: fit-content;\n  height: fit-content;\n  box-shadow: 5px 5px 5px var(--darkBlue);\n  border: 3px solid black;\n  border-radius: 1vw;\n  animation: fadeIn 0.5s;\n}\n\n.edit-task-form input,\nselect,\ntextarea {\n  height: 2.5vh;\n  padding: 0.2vh;\n  border: 1px solid black;\n}\n\n.edit-task-form select {\n  height: 3vh;\n}\n\n.edit-task-form input:focus {\n  outline: none;\n}\n\n.edit-task-form button {\n  grid-column: span 2;\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n  justify-content: center;\n  background-color: var(--darkGrey);\n  box-shadow: 2px 2px 2px black;\n}\n\n.edit-task-form button:hover {\n  background-color: var(--majorBlue);\n  color: var(--darkGrey);\n  border-radius: 1vw;\n  box-shadow: 2px 2px 2px var(--darkGrey);\n  transition: 0.5s;\n}\n\n.change-proj-name {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.change-proj-name input {\n  background-color: white;\n  font-size: 1.2rem;\n\n  border: none;\n  border-bottom: black dotted 2px;\n  padding: 0.5vw;\n}\n\n.change-proj-name button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  padding: 5px;\n  width: 5vh;\n  height: 5vh;\n  background-color: white;\n  border: 2px solid black;\n  box-shadow: 4px 4px 4px var(--darkBlue);\n}\n\n.change-proj-name button:hover {\n  background-color: var(--majorBlue);\n  color: var(--darkGrey);\n  font-size: 1.2rem;\n  align-items: center;\n  border-radius: 50%;\n  transition: 0.4s;\n}\n\n/* Responsiveness */\n\n@media screen and (max-width: 1100px) {\n  .remove-form {\n    position: relative;\n    grid-column: span 2;\n  }\n}\n\n/* Put projects on top */\n\n@media screen and (max-width: 600px) {\n  main {\n    display: flex;\n    flex-direction: column;\n  }\n  .sidebar {\n    display: flex;\n    width: 100%;\n    height: auto;\n    position: relative;\n    padding-bottom: 15px;\n    gap: 1px;\n  }\n\n  .current-times {\n    gap: 1px;\n  }\n\n  .default-options {\n    width: 100%;\n    background-color: var(--darkGrey);\n    border: none;\n    align-items: center;\n    justify-content: center;\n    font-size: 1rem;\n    padding: 0.5vh;\n    cursor: pointer;\n    display: flex;\n    border-radius: 1vw;\n  }\n\n  .default-options:hover {\n    font-size: 1rem;\n    translate: 0rem;\n  }\n\n  .projects h3 {\n    font-size: 1.1rem;\n    align-self: center;\n    border-bottom: 2px solid black;\n    border-top: 2px solid black;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n  }\n\n  .projects {\n    gap: 1px;\n  }\n\n  .projects-holder {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .projects-holder .project {\n    background-color: var(--darkGrey);\n    border: none;\n    font-size: 1rem;\n    padding: 0.4vh;\n    cursor: pointer;\n  }\n\n  .projects-holder .project:hover {\n    background-color: var(--majorBlue);\n    color: white;\n    transition: 0.2s;\n    font-size: 1rem;\n  }\n\n  #createProj {\n    font-size: 1rem;\n    background-color: var(--lavender);\n    margin-left: 1vw;\n    margin-right: 1vw;\n    padding: 0.2vh;\n    box-shadow: 3px 3px 3px black;\n  }\n\n  #createProj:hover {\n    background-color: var(--majorBlue);\n    color: var(--lavender);\n    transition: 0.4s;\n  }\n\n  .project-form {\n    display: flex;\n    padding: 0.4vw;\n    align-items: center;\n    justify-content: center;\n    gap: 0.3vw;\n  }\n\n  #project-name {\n    width: 70%;\n    border: none;\n    background-color: var(--darkGrey);\n    border-bottom: 2px black dotted;\n    font-size: 1rem;\n    padding: 2px;\n  }\n\n  .proj-display {\n    font-size: 1.7rem;\n  }\n\n  #createToDo {\n    font-size: 1rem;\n    background-color: var(--lavender);\n    border: none;\n    padding: 1vh;\n  }\n\n  #createToDo:hover {\n    color: var(--lavender);\n    background-color: var(--majorBlue);\n    box-shadow: 2px 2px 2px black;\n    transition: 0.5s;\n    cursor: pointer;\n    border-radius: 1vw;\n  }\n\n  .empty-display {\n    display: flex;\n    justify-content: center;\n    font-size: 1.4rem;\n  }\n\n  .delete-proj {\n    width: fit-content;\n  }\n\n  .change-proj-name {\n    display: flex;\n    align-items: center;\n    gap: 3px;\n  }\n\n  .change-proj-name input {\n    background-color: white;\n    font-size: 1rem;\n    border: none;\n    border-bottom: black dotted 1px;\n    padding: 0.3vw;\n  }\n\n  .change-proj-name button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1rem;\n    padding: 3px;\n    width: 3vh;\n    height: 3vh;\n    background-color: white;\n    border: 2px solid black;\n    box-shadow: 2px 2px 2px var(--darkBlue);\n  }\n\n  .change-proj-name button:hover {\n    background-color: var(--majorBlue);\n    color: var(--darkGrey);\n    font-size: 1rem;\n    align-items: center;\n    border-radius: 50%;\n    transition: 0.4s;\n  }\n\n  .done-title::after {\n    content: \" \";\n    position: absolute;\n    top: 50%;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    background: none;\n    animation-name: strike;\n    animation-duration: 0.5s;\n    animation-timing-function: linear;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n  }\n}\n\n/* Drop down menu */\n\n@media screen and (max-width: 400px) {\n  .dropdown {\n    visibility: visible;\n    background: none;\n    border: none;\n    width: 5vh;\n    height: 5vh;\n    align-self: center;\n    margin: 3px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .btn-burger {\n    background-color: black;\n    border-radius: 5px;\n    width: 100%;\n    height: 4px;\n    box-shadow: 0 2px 5px var(--majorBlue);\n    transition: all 0.5s ease-in-out;\n  }\n\n  .btn-burger::before,\n  .btn-burger::after {\n    content: \"\";\n    background-color: black;\n    position: absolute;\n    width: 5vh;\n    height: 4px;\n    border-radius: 5px;\n    box-shadow: 0 2px 5px var(--majorBlue);\n    transition: all 0.5s ease-out;\n  }\n\n  .btn-burger::before {\n    transform: translateY(-8px);\n  }\n\n  .btn-burger::after {\n    transform: translateY(8px);\n  }\n\n  .is-open .btn-burger {\n    transform: translateX(-50px);\n    background: transparent;\n    box-shadow: none;\n  }\n\n  .is-open .btn-burger::before {\n    box-shadow: none;\n    transform: rotate(45deg) translate(35px, -35px);\n  }\n\n  .is-open .btn-burger::after {\n    box-shadow: none;\n    transform: rotate(-45deg) translate(35px, 35px);\n  }\n\n  .sidebar {\n    position: fixed;\n    display: none;\n    transition: fadeIn 2s;\n  }\n\n  .active-dropdown {\n    display: block;\n    position: relative;\n    transition: fadeIn 2s;\n  }\n}\n\n@media screen and (max-width: 340px) {\n  .logo {\n    font-size: 1.5rem;\n  }\n\n  .right-task-items {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    align-items: center;\n    justify-items: center;\n  }\n\n  .priority {\n    justify-self: center;\n    align-self: center;\n    grid-column: span 3;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */
var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};

var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};

var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];

    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getWeek/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/getWeek/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _startOfWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfWeekYear/index.js */ "./node_modules/date-fns/esm/startOfWeekYear/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Number} the week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */

function getWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getWeekYear/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/getWeekYear/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeekYear)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Number} the local week-numbering year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */

function getWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getFullYear();
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || _typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, options) {
  var _options$additionalDi;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeekYear/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeekYear/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeekYear)
/* harmony export */ });
/* harmony import */ var _getWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getWeekYear/index.js */ "./node_modules/date-fns/esm/getWeekYear/index.js");
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Date} the start of a week-numbering year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */

function startOfWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  var date = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/FormControllers.js":
/*!********************************!*\
  !*** ./src/FormControllers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectForm": () => (/* binding */ createProjectForm),
/* harmony export */   "createToDoForm": () => (/* binding */ createToDoForm),
/* harmony export */   "eventListeners": () => (/* binding */ eventListeners),
/* harmony export */   "toggleBackgroundBlur": () => (/* binding */ toggleBackgroundBlur)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _projectAssign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectAssign */ "./src/projectAssign.js");
/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDo */ "./src/toDo.js");
/* harmony import */ var _displayProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayProjects */ "./src/displayProjects.js");
/* harmony import */ var _displayAllTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayAllTasks */ "./src/displayAllTasks.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* eslint-disable no-unused-expressions */
/* eslint-disable quotes */
/* eslint-disable import/no-cycle */







const toggleBackgroundBlur = () => {
  const container = document.querySelector(".main-container");
  container.classList.contains("blur-this")
    ? container.classList.remove("blur-this")
    : container.classList.add("blur-this");
};

const valiDate = (inputDate) => {
  const parts = inputDate.split(/[/\-.]/);

  if (parts.length < 3) {
    return false;
  }
  const dt = new Date(parts[2], parts[1] - 1, parts[0]);
  return dt && dt.getMonth() === parseInt(parts[1], 10) - 1;
};

const createProjectForm = () => {
  const parent = document.querySelector(".projects-holder");
  const form = document.createElement("form");
  const newProject = document.querySelector("#createProj");

  form.classList.add("project-form");

  parent.appendChild(form);

  const input = document.createElement("input");
  input.setAttribute("id", "project-name");

  const submit = document.createElement("button");
  submit.textContent = "+";

  form.appendChild(input);
  form.appendChild(submit);

  input.focus();

  submit.addEventListener("click", (event) => {
    event.preventDefault();
    if (input.value === "") {
      // eslint-disable-next-line no-alert
      alert("Give your project a name");
      return;
    }

    (0,_project__WEBPACK_IMPORTED_MODULE_0__.createNewProject)(input.value);
    (0,_storage__WEBPACK_IMPORTED_MODULE_5__.addProjectsToStore)();
    (0,_projectAssign__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_displayProjects__WEBPACK_IMPORTED_MODULE_3__.clearAndDisplayProjects)();
    (0,_displayProjects__WEBPACK_IMPORTED_MODULE_3__.changeCurrentProject)(_project__WEBPACK_IMPORTED_MODULE_0__.allProjects.length - 1);
    (0,_displayAllTasks__WEBPACK_IMPORTED_MODULE_4__.sortAndDisplayTasks)(_displayProjects__WEBPACK_IMPORTED_MODULE_3__.currentProject);
    (0,_displayProjects__WEBPACK_IMPORTED_MODULE_3__.addProjectTitleToDOM)();

    form.remove();
    newProject.disabled = false;
  });
};

const createToDoForm = () => {
  toggleBackgroundBlur();

  const newToDo = document.querySelector("#createToDo");
  const parent = document.querySelector("body");
  const form = document.createElement("form");
  form.classList.add("to-do-form");

  parent.appendChild(form);

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "to-do-name");
  nameLabel.textContent = "To-Do * : ";

  const nameInput = document.createElement("input");
  nameInput.setAttribute("id", "to-do-name");
  nameInput.setAttribute("placeholder", "Task");

  const descLabel = document.createElement("label");
  descLabel.setAttribute("for", "description");
  descLabel.textContent = "Description: ";

  const descInput = document.createElement("textarea");
  descInput.setAttribute("id", "description");
  descInput.setAttribute("placeholder", "Description");

  const dueDate = document.createElement("label");
  dueDate.setAttribute("for", "due-date");
  dueDate.textContent = "Due-date * : ";

  const dueDateInput = document.createElement("input");
  dueDateInput.setAttribute("id", "due-date");
  dueDateInput.setAttribute("type", "date");

  const priorityLable = document.createElement("legend");
  priorityLable.setAttribute("for", "priority");
  priorityLable.textContent = "Priority * : ";

  const priorityHolder = document.createElement("div");
  priorityHolder.id = "priority";

  priorityHolder.innerHTML += `<div class="input-and-label">
    <input class="radio" value="one" type="radio" id="one" name="priority"></input>
    <label for="one">One</label>
  </div>
  <div class="input-and-label">
    <input class="radio" value="two" type="radio" id="two" name="priority"></input>
    <label for="two">Two</label>
  </div>
  <div class="input-and-label">
      <input class="radio" value="three" type="radio" id="three" name="priority"></input>
      <label for="three">Three</label>
  </div>`;

  const timeLabel = document.createElement("label");
  timeLabel.setAttribute("for", "time");
  timeLabel.textContent = "Time Allocation: ";

  const timeInput = document.createElement("select");
  const oneHour = document.createElement("option");
  oneHour.textContent = "1 hour";
  oneHour.value = "1 hour";
  timeInput.appendChild(oneHour);
  for (let i = 2; i <= 6; i += 1) {
    const option = document.createElement("option");
    option.value = `${i} hours`;
    option.textContent = `${i} hours`;
    timeInput.appendChild(option);
  }
  timeInput.setAttribute("id", "description");

  const noteLabel = document.createElement("label");
  noteLabel.setAttribute("for", "notes");
  noteLabel.textContent = "Notes: ";

  const noteInput = document.createElement("textarea");
  noteInput.setAttribute("id", "notes");
  noteInput.setAttribute("placeholder", "Notes");

  const doneLabel = document.createElement("label");
  doneLabel.setAttribute("for", "done");
  doneLabel.textContent = "Complete? ";

  const doneInput = document.createElement("input");
  doneInput.setAttribute("id", "done");
  doneInput.setAttribute("type", "checkbox");

  const projectLabel = document.createElement("label");
  projectLabel.setAttribute("for", "project");
  projectLabel.textContent = "Project: ";

  const projectInput = document.createElement("select");
  projectInput.setAttribute("id", "project");

  const currentProjectName = _project__WEBPACK_IMPORTED_MODULE_0__.allProjects[_displayProjects__WEBPACK_IMPORTED_MODULE_3__.currentProject].getName();

  _project__WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach((element) => {
    const option = document.createElement("option");
    option.value = element.name;
    option.textContent = element.name;
    projectInput.appendChild(option);
    if (option.value === currentProjectName) {
      option.setAttribute("selected", "selected");
    }
  });

  const submit = document.createElement("button");
  submit.textContent = "Add Task";
  submit.classList.add("submit-form");

  const removeFormButton = document.createElement("button");
  removeFormButton.textContent = "X";
  removeFormButton.classList.add("remove-form");
  removeFormButton.addEventListener("click", () => {
    form.remove();
    toggleBackgroundBlur();
    newToDo.disabled = false;
  });

  form.append(
    nameLabel,
    nameInput,
    descLabel,
    descInput,
    dueDate,
    dueDateInput,
    priorityLable,
    priorityHolder,
    timeLabel,
    timeInput,
    noteLabel,
    noteInput,
    doneLabel,
    doneInput,
    projectLabel,
    projectInput,
    submit,
    removeFormButton
  );

  submit.addEventListener("click", (event) => {
    event.preventDefault();
    valiDate(dueDateInput.value);
    if (!dueDateInput.value) {
      // eslint-disable-next-line no-alert
      alert("please put a valid date");
      return;
    }
    const radio = document.querySelector(
      'input[name="priority"]:checked'
    ).value;
    (0,_toDo__WEBPACK_IMPORTED_MODULE_2__.createNewToDo)(
      nameInput.value,
      descInput.value,
      dueDateInput.value,
      radio,
      timeInput.value,
      noteInput.value,
      doneInput.checked,
      projectInput.value
    );

    (0,_storage__WEBPACK_IMPORTED_MODULE_5__.addTasksToStorage)();
    (0,_projectAssign__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_displayAllTasks__WEBPACK_IMPORTED_MODULE_4__.sortAndDisplayTasks)(_displayProjects__WEBPACK_IMPORTED_MODULE_3__.currentProject);

    toggleBackgroundBlur();
    form.remove();
    newToDo.disabled = false;
  });
};

const eventListeners = () => {
  const newProject = document.querySelector("#createProj");
  newProject.addEventListener("click", () => {
    newProject.disabled = true;
    createProjectForm();
  });

  const newToDo = document.querySelector("#createToDo");
  newToDo.addEventListener("click", () => {
    newToDo.disabled = true;
    createToDoForm();
  });

  const logo = document.querySelector("#logo-svg");
  logo.addEventListener("click", () => {
    document.querySelector("#all").click();
  });

  const dropDown = document.querySelector(".dropdown");
  dropDown.addEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar.classList.contains("active-dropdown")) {
      sidebar.classList.remove("active-dropdown");
      dropDown.classList.remove("is-open");
    } else {
      sidebar.classList.add("active-dropdown");
      dropDown.classList.add("is-open");
    }
  });
};




/***/ }),

/***/ "./src/displayAllTasks.js":
/*!********************************!*\
  !*** ./src/displayAllTasks.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkDatesOfTasks": () => (/* binding */ checkDatesOfTasks),
/* harmony export */   "checkForCurrentWeek": () => (/* binding */ checkForCurrentWeek),
/* harmony export */   "clearToDoDisplay": () => (/* binding */ clearToDoDisplay),
/* harmony export */   "sortAndDisplayTasks": () => (/* binding */ sortAndDisplayTasks),
/* harmony export */   "sortByPriority": () => (/* binding */ sortByPriority)
/* harmony export */ });
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getWeek/index.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDo */ "./src/toDo.js");
/* harmony import */ var _projectAssign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectAssign */ "./src/projectAssign.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _displayProjects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayProjects */ "./src/displayProjects.js");
/* harmony import */ var _FormControllers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormControllers */ "./src/FormControllers.js");
/* eslint-disable no-use-before-define */
/* eslint-disable quotes */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */









const clearToDoDisplay = () => {
  const holder = document.querySelector(".task-holder");
  while (holder.firstChild) {
    holder.removeChild(holder.firstChild);
  }
};

const editTaskPopUp = (task) => {
  (0,_FormControllers__WEBPACK_IMPORTED_MODULE_5__.toggleBackgroundBlur)();

  const parent = document.querySelector("body");
  const form = document.createElement("form");
  form.classList.add("edit-task-form");

  parent.appendChild(form);

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "to-do-name");
  nameLabel.textContent = "To-Do : ";

  const nameInput = document.createElement("input");
  nameInput.setAttribute("id", "to-do-name");
  nameInput.value = task.getTitle();

  const descLabel = document.createElement("label");
  descLabel.setAttribute("for", "description");
  descLabel.textContent = "Description: ";

  const descInput = document.createElement("textarea");
  descInput.setAttribute("id", "description");
  descInput.value = task.getDescription();

  const dueDate = document.createElement("label");
  dueDate.setAttribute("for", "due-date");
  dueDate.textContent = "Due-date: ";

  const dueDateInput = document.createElement("input");
  dueDateInput.setAttribute("id", "due-date");
  dueDateInput.setAttribute("type", "date");
  dueDateInput.value = task.getDueDate();

  const timeLabel = document.createElement("label");
  timeLabel.setAttribute("for", "time");
  timeLabel.textContent = "Time Allocation: ";

  const timeInput = document.createElement("select");
  const oneHour = document.createElement("option");
  oneHour.textContent = "1 hour";
  oneHour.value = "1 hour";
  timeInput.appendChild(oneHour);
  for (let i = 2; i <= 6; i += 1) {
    const option = document.createElement("option");
    option.value = `${i} hours`;
    option.textContent = `${i} hours`;
    if (option.value === task.getTimeAllocate()) {
      option.setAttribute("selected", "selected");
    }
    timeInput.appendChild(option);
  }

  timeInput.setAttribute("id", "time");

  const noteLabel = document.createElement("label");
  noteLabel.setAttribute("for", "notes");
  noteLabel.textContent = "Notes: ";

  const noteInput = document.createElement("textarea");
  noteInput.setAttribute("id", "notes");
  noteInput.value = task.getNotes();

  const projectLabel = document.createElement("label");
  projectLabel.setAttribute("for", "project");
  projectLabel.textContent = "Project : ";

  const projectInput = document.createElement("select");
  projectInput.setAttribute("id", "project");
  projectInput.value = task.getProject();

  const currentProjectName = task.getProject();

  _project__WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach((element) => {
    const option = document.createElement("option");
    option.value = element.name;
    option.textContent = element.name;
    projectInput.appendChild(option);
    if (option.value === currentProjectName) {
      option.setAttribute("selected", "selected");
    }
  });

  const submit = document.createElement("button");
  submit.textContent = "Edit Task";

  form.append(
    nameLabel,
    nameInput,
    descLabel,
    descInput,
    dueDate,
    dueDateInput,
    timeLabel,
    timeInput,
    noteLabel,
    noteInput,
    projectLabel,
    projectInput,
    submit
  );

  submit.addEventListener("click", (e) => {
    e.preventDefault();

    task.setTitle(nameInput.value);
    task.setDescription(descInput.value);
    task.setDueDate(dueDateInput.value);
    task.setTimeAllocate(timeInput.value);
    task.setNotes(noteInput.value);
    task.setProject(projectInput.value);

    sortAndDisplayTasks(_displayProjects__WEBPACK_IMPORTED_MODULE_4__.currentProject);
    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.addTasksToStorage)();

    (0,_FormControllers__WEBPACK_IMPORTED_MODULE_5__.toggleBackgroundBlur)();
    form.remove();
  });
};

const displayInfoPopUp = (task) => {
  (0,_FormControllers__WEBPACK_IMPORTED_MODULE_5__.toggleBackgroundBlur)();

  const parent = document.querySelector("body");
  const holder = document.createElement("div");
  holder.innerHTML = task.getInfo();
  holder.classList.add("task-info-popup");

  const removeElement = document.createElement("button");
  removeElement.classList.add("remove-popup");
  removeElement.textContent = "X";

  holder.appendChild(removeElement);
  parent.appendChild(holder);

  removeElement.addEventListener("click", () => {
    (0,_FormControllers__WEBPACK_IMPORTED_MODULE_5__.toggleBackgroundBlur)();
    holder.remove();
  });
};

const editCheckStat = (task, btn) => {
  const editThis = task;
  const lineThrough =
    btn.parentElement.nextElementSibling.querySelector("#title");
  const entireToDO = btn.parentElement.parentElement.parentElement;

  if (editThis.getCheckStat()) {
    editThis.setCheckStat(false);

    btn.classList.add("false-task");
    btn.classList.remove("done-task");
    btn.innerHTML = "";

    lineThrough.classList.remove("done-title");
    entireToDO.classList.remove("done-entire-task");

    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.addTasksToStorage)();
    sortAndDisplayTasks(_displayProjects__WEBPACK_IMPORTED_MODULE_4__.currentProject);
  } else {
    editThis.setCheckStat(true);

    btn.classList.add("done-task");
    btn.classList.remove("false-task");
    btn.innerHTML +=
      '<svg class="check-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-bold</title><path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" /></svg>';

    lineThrough.classList.add("done-title");
    entireToDO.classList.add("done-entire-task");

    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.addTasksToStorage)();
    sortAndDisplayTasks(_displayProjects__WEBPACK_IMPORTED_MODULE_4__.currentProject);
  }
};

const checkStat = () => {
  const getCheckStatButtons = document.querySelectorAll(".check-stat");
  getCheckStatButtons.forEach((btn) => {
    const task = _toDo__WEBPACK_IMPORTED_MODULE_1__.allToDo[btn.id];
    const lineThrough =
      btn.parentElement.nextElementSibling.querySelector("#title");
    const entireToDO = btn.parentElement.parentElement.parentElement;
    if (task.getCheckStat()) {
      btn.classList.add("done-task");
      btn.innerHTML +=
        '<svg class = "check-mark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-bold</title><path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" /></svg>';
      lineThrough.classList.add("done-title");
      entireToDO.classList.add("done-entire-task");
    } else {
      btn.classList.add("false-task");
      btn.textContent = "";
      lineThrough.classList.remove("done-title");
      entireToDO.classList.remove("done-entire-task");
    }
  });
};

const radioButtonDisplay = () => {
  const priorityButtons = document.querySelectorAll(".priority-button");
  priorityButtons.forEach((btn) => {
    const task = _toDo__WEBPACK_IMPORTED_MODULE_1__.allToDo[btn.id];
    const taskPriority = task.getPriority();
    btn.classList.remove("active-priority");

    if (btn.dataset.priority === taskPriority) {
      btn.classList.add("active-priority");
    }
  });
};

const editPriorityButtons = (taskInAllToDo, buttonItself) => {
  const task = taskInAllToDo;
  if (buttonItself.dataset.priority === "one") {
    task.setPriority("one");
    sortAndDisplayTasks(_displayProjects__WEBPACK_IMPORTED_MODULE_4__.currentProject);
    radioButtonDisplay();
  } else if (buttonItself.dataset.priority === "two") {
    task.setPriority("two");
    sortAndDisplayTasks(_displayProjects__WEBPACK_IMPORTED_MODULE_4__.currentProject);
    radioButtonDisplay();
  } else if (buttonItself.dataset.priority === "three") {
    task.setPriority("three");
    sortAndDisplayTasks(_displayProjects__WEBPACK_IMPORTED_MODULE_4__.currentProject);
    radioButtonDisplay();
  }
  (0,_storage__WEBPACK_IMPORTED_MODULE_3__.addTasksToStorage)();
};

const getEventListeners = () => {
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      (0,_toDo__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(event.currentTarget.id);
      (0,_storage__WEBPACK_IMPORTED_MODULE_3__.addTasksToStorage)();
      sortAndDisplayTasks(_displayProjects__WEBPACK_IMPORTED_MODULE_4__.currentProject);
    });
  });

  const getInfoButtons = document.querySelectorAll(".info-btn");
  getInfoButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      displayInfoPopUp(_toDo__WEBPACK_IMPORTED_MODULE_1__.allToDo[event.currentTarget.id]);
    });
  });

  const getEditButtons = document.querySelectorAll(".edit-task");
  getEditButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      editTaskPopUp(_toDo__WEBPACK_IMPORTED_MODULE_1__.allToDo[event.currentTarget.id]);
    });
  });

  const getCheckStatButtons = document.querySelectorAll(".check-stat");
  getCheckStatButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      editCheckStat(_toDo__WEBPACK_IMPORTED_MODULE_1__.allToDo[event.currentTarget.id], btn);
    });
  });

  const priorityButtons = document.querySelectorAll(".priority-button");
  priorityButtons.forEach((btn) => {
    btn.classList.remove("active-priority");
    btn.addEventListener("click", (event) => {
      editPriorityButtons(_toDo__WEBPACK_IMPORTED_MODULE_1__.allToDo[event.currentTarget.id], btn);
    });
  });
};

const disiplayOnDOM = (indexDisplay, i) => {
  const holder = document.querySelector(".task-holder");

  const eachToDoHolder = document.createElement("div");
  eachToDoHolder.classList.add("to-do");
  eachToDoHolder.id = i;

  holder.appendChild(eachToDoHolder);

  const indexOfTask = _toDo__WEBPACK_IMPORTED_MODULE_1__.allToDo.indexOf(indexDisplay);

  const date = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_6__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(indexDisplay.dueDate), "MM/dd/yyyy");

  eachToDoHolder.innerHTML += `  
  <div class="left-side"> 
      <div class="done"><button class="check-stat" id="${indexOfTask}"></button></div>
    <div class="left-task-items">
      <div class='title'><p id="title">${indexDisplay.title}</p></div>
      <div class="due"><p>Due: ${date}</p></div>
    </div>
  </div>
  <div class="right-task-items">
    <div class="priority"><button data-priority="one" id=${indexOfTask} class="priority-button"></button><button data-priority="two" id=${indexOfTask} class="priority-button"></button><button data-priority="three" id=${indexOfTask} class="priority-button"></button></div>
    <div class="edit"><button class=edit-task id=${indexOfTask}><svg class="edit-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.13 12L19.39 10.74C19.83 10.3 20.39 10.06 21 10V9L15 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11V19.13L11.13 19H5V5H12V12H18.13M14 4.5L19.5 10H14V4.5M19.13 13.83L21.17 15.87L15.04 22H13V19.96L19.13 13.83M22.85 14.19L21.87 15.17L19.83 13.13L20.81 12.15C21 11.95 21.33 11.95 21.53 12.15L22.85 13.47C23.05 13.67 23.05 14 22.85 14.19Z" /></svg></button></div>
    <div class="get-information"><button class=info-btn id=${indexOfTask}><svg class="info-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 3H19C20.1 3 21 3.89 21 5V19C21 19.53 20.79 20.04 20.41 20.41C20.04 20.79 19.53 21 19 21H5C4.47 21 3.96 20.79 3.59 20.41C3.21 20.04 3 19.53 3 19V5C3 3.89 3.89 3 5 3M13 9V7H11V9H13M13 17V11H11V17H13Z" /></svg></button></div>
    <div class="delete"><button class=delete-btn id=${indexOfTask}><svg class="delete-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9,7H11L12,9.5L13,7H15L13,12L15,17H13L12,14.5L11,17H9L11,12L9,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" /></svg></button></div>
  </div>`;
};

const createEmptyDisplay = () => {
  const project = _project__WEBPACK_IMPORTED_MODULE_0__.allProjects[_displayProjects__WEBPACK_IMPORTED_MODULE_4__.currentProject];

  const parent = document.querySelector(".task-holder");
  const emptyDisplay = document.createElement("h2");
  emptyDisplay.classList.add("empty-display");
  emptyDisplay.textContent = `${project.getName()} has no tasks, go add some!`;
  parent.appendChild(emptyDisplay);

  if (_displayProjects__WEBPACK_IMPORTED_MODULE_4__.currentProject === "0") {
    emptyDisplay.textContent = "No tasks at all? Lets get this going";
    return;
  }

  const deleteBtn = document.createElement("button");
  parent.appendChild(deleteBtn);
  deleteBtn.textContent = "Delete Project";
  deleteBtn.classList.add("delete-proj");

  deleteBtn.addEventListener("click", () => {
    (0,_project__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(_displayProjects__WEBPACK_IMPORTED_MODULE_4__.currentProject);
    (0,_displayProjects__WEBPACK_IMPORTED_MODULE_4__.highlightAllTaskOnDOM)();
    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.addProjectsToStore)();
    (0,_displayProjects__WEBPACK_IMPORTED_MODULE_4__.clearAndDisplayProjects)();
  });
};

const nonCheckedItems = (display) => {
  for (let i = 0; i < display.projectToDo.length; i += 1) {
    if (display.projectToDo[i].getCheckStat() === false) {
      disiplayOnDOM(display.projectToDo[i], i);
    }
  }
};

const checkItems = (display) => {
  for (let i = 0; i < display.projectToDo.length; i += 1) {
    if (display.projectToDo[i].getCheckStat() === true) {
      disiplayOnDOM(display.projectToDo[i], i);
    }
  }
};

const loopThroughTasks = (index) => {
  const display = _project__WEBPACK_IMPORTED_MODULE_0__.allProjects[index];
  if (display.getProjects().length === 0) {
    createEmptyDisplay();
  }
  nonCheckedItems(display);
  checkItems(display);
};

const checkEmptyDivForNav = (text) => {
  const displayHolder = document.querySelector(".task-holder");
  if (displayHolder.childElementCount === 0) {
    const emptyDisplay = document.createElement("h2");
    emptyDisplay.classList.add("empty-display");
    emptyDisplay.textContent = text;
    displayHolder.appendChild(emptyDisplay);
  }
};

const checkDatesOfTasks = () => {
  const getToday = new Date();
  const formattedDate = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_6__["default"])(getToday, "MM/dd/yyyy");
  for (let i = 0; i < _toDo__WEBPACK_IMPORTED_MODULE_1__.allToDo.length; i += 1) {
    const date = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_6__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(_toDo__WEBPACK_IMPORTED_MODULE_1__.allToDo[i].getDueDate()), "MM/dd/yyyy");
    if (date === formattedDate) {
      disiplayOnDOM(_toDo__WEBPACK_IMPORTED_MODULE_1__.allToDo[i], i);
    }
  }
  checkEmptyDivForNav("No tasks due today, nice job!");
};

const checkForCurrentWeek = () => {
  const getToday = new Date();
  const findWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])(getToday);
  for (let i = 0; i < _toDo__WEBPACK_IMPORTED_MODULE_1__.allToDo.length; i += 1) {
    const taskWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(_toDo__WEBPACK_IMPORTED_MODULE_1__.allToDo[i].getDueDate()));
    if (taskWeek === findWeek) {
      disiplayOnDOM(_toDo__WEBPACK_IMPORTED_MODULE_1__.allToDo[i], i);
    }
  }
  checkEmptyDivForNav("No tasks due this week, enjoy it!");
};

const priorOne = () => {
  for (let i = 0; i < _toDo__WEBPACK_IMPORTED_MODULE_1__.allToDo.length; i += 1) {
    if (_toDo__WEBPACK_IMPORTED_MODULE_1__.allToDo[i].getPriority() === "one") {
      disiplayOnDOM(_toDo__WEBPACK_IMPORTED_MODULE_1__.allToDo[i], i);
    }
  }
};
const priorTwo = () => {
  for (let i = 0; i < _toDo__WEBPACK_IMPORTED_MODULE_1__.allToDo.length; i += 1) {
    if (_toDo__WEBPACK_IMPORTED_MODULE_1__.allToDo[i].getPriority() === "two") {
      disiplayOnDOM(_toDo__WEBPACK_IMPORTED_MODULE_1__.allToDo[i], i);
    }
  }
};
const priorThree = () => {
  for (let i = 0; i < _toDo__WEBPACK_IMPORTED_MODULE_1__.allToDo.length; i += 1) {
    if (_toDo__WEBPACK_IMPORTED_MODULE_1__.allToDo[i].getPriority() === "three") {
      disiplayOnDOM(_toDo__WEBPACK_IMPORTED_MODULE_1__.allToDo[i], i);
    }
  }
};

const sortByPriority = () => {
  priorOne();
  priorTwo();
  priorThree();
};

const removeCreateTask = () => {
  const buttonCreateTask = document.querySelector("#createToDo");
  buttonCreateTask.classList.add("hidden");
};

const addBackCreateTask = () => {
  const buttonCreateTask = document.querySelector("#createToDo");
  buttonCreateTask.classList.remove("hidden");
};

const sortAndDisplayTasks = (project) => {
  (0,_projectAssign__WEBPACK_IMPORTED_MODULE_2__["default"])();
  clearToDoDisplay();

  switch (project) {
    case "today":
      checkDatesOfTasks();
      removeCreateTask();
      break;
    case "week":
      checkForCurrentWeek();
      removeCreateTask();
      break;
    case "priority":
      sortByPriority();
      removeCreateTask();
      break;
    default:
      loopThroughTasks(project);
      addBackCreateTask();
  }

  getEventListeners();
  (0,_displayProjects__WEBPACK_IMPORTED_MODULE_4__.selectedProj)();
  (0,_displayProjects__WEBPACK_IMPORTED_MODULE_4__.addProjectTitleToDOM)();
  checkStat();
  radioButtonDisplay();
};




/***/ }),

/***/ "./src/displayProjects.js":
/*!********************************!*\
  !*** ./src/displayProjects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectTitleToDOM": () => (/* binding */ addProjectTitleToDOM),
/* harmony export */   "changeCurrentProject": () => (/* binding */ changeCurrentProject),
/* harmony export */   "clearAndDisplayProjects": () => (/* binding */ clearAndDisplayProjects),
/* harmony export */   "currentProject": () => (/* binding */ currentProject),
/* harmony export */   "highlightAllTaskOnDOM": () => (/* binding */ highlightAllTaskOnDOM),
/* harmony export */   "navBarEvents": () => (/* binding */ navBarEvents),
/* harmony export */   "selectedProj": () => (/* binding */ selectedProj)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _displayAllTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayAllTasks */ "./src/displayAllTasks.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDo */ "./src/toDo.js");
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
/* eslint-disable no-loop-func */
/* eslint-disable import/no-mutable-exports */





let currentProject = "0";

const changeCurrentProject = (projectNumber) => {
  currentProject = projectNumber;
  return currentProject;
};

const clearProjects = () => {
  const holder = document.querySelector(".projects-holder");
  while (holder.firstChild) {
    holder.removeChild(holder.firstChild);
  }
};

const displayProjects = () => {
  const projectHolder = document.querySelector(".projects-holder");
  for (let i = 1; i < _project__WEBPACK_IMPORTED_MODULE_0__.allProjects.length; i += 1) {
    const project = document.createElement("button");
    project.textContent = _project__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].getName();
    project.classList.add("project");
    project.id = i;

    projectHolder.appendChild(project);

    project.addEventListener("click", () => {
      changeCurrentProject(project.id);
      (0,_displayAllTasks__WEBPACK_IMPORTED_MODULE_1__.sortAndDisplayTasks)(currentProject);
    });
  }
};

const clearAndDisplayProjects = () => {
  clearProjects();
  displayProjects();
};

const navBarEvents = () => {
  const allTasks = document.querySelector("#all");
  const today = document.querySelector("#today");
  const week = document.querySelector("#week");
  const priority = document.querySelector("#priority");

  allTasks.addEventListener("click", () => {
    changeCurrentProject("0");
    (0,_displayAllTasks__WEBPACK_IMPORTED_MODULE_1__.clearToDoDisplay)();
    (0,_displayAllTasks__WEBPACK_IMPORTED_MODULE_1__.sortAndDisplayTasks)(currentProject);
  });

  today.addEventListener("click", () => {
    changeCurrentProject("today");
    (0,_displayAllTasks__WEBPACK_IMPORTED_MODULE_1__.clearToDoDisplay)();
    (0,_displayAllTasks__WEBPACK_IMPORTED_MODULE_1__.sortAndDisplayTasks)(currentProject);
  });

  week.addEventListener("click", () => {
    changeCurrentProject("week");
    (0,_displayAllTasks__WEBPACK_IMPORTED_MODULE_1__.clearToDoDisplay)();
    (0,_displayAllTasks__WEBPACK_IMPORTED_MODULE_1__.sortAndDisplayTasks)(currentProject);
  });

  priority.addEventListener("click", () => {
    changeCurrentProject("priority");
    (0,_displayAllTasks__WEBPACK_IMPORTED_MODULE_1__.clearToDoDisplay)();
    (0,_displayAllTasks__WEBPACK_IMPORTED_MODULE_1__.sortAndDisplayTasks)(currentProject);
  });
};

const reAssignProjects = (tasks, newProject) => {
  const taskArray = tasks;
  taskArray.forEach((task) => {
    if (task.getProject() === _project__WEBPACK_IMPORTED_MODULE_0__.allProjects[currentProject].getName()) {
      task.setProject(newProject);
    }
  });
};

const removeNameChangeForm = () => {
  if (document.querySelector(".change-proj-name") === null) {
    /* empty */
  } else {
    document.querySelector(".change-proj-name").remove();
  }
};

const changeProjName = (event) => {
  const parent = document.querySelector(".proj-display-container");
  if (currentProject === "0") {
    return;
  }
  const currentProj = _project__WEBPACK_IMPORTED_MODULE_0__.allProjects[currentProject].getName();
  const formHolder = document.createElement("h3");
  formHolder.classList.add("change-proj-name-form");
  const form = document.createElement("form");
  form.classList.add("change-proj-name");

  const input = document.createElement("input");
  input.value = currentProj;
  const submit = document.createElement("button");
  submit.textContent = "+";

  form.append(input, submit);

  event.target.textContent = "";

  formHolder.appendChild(form);
  parent.append(formHolder);

  form.addEventListener(
    "submit",
    (e) => {
      e.preventDefault();
      reAssignProjects(_toDo__WEBPACK_IMPORTED_MODULE_3__.allToDo, input.value);
      _project__WEBPACK_IMPORTED_MODULE_0__.allProjects[currentProject].setName(input.value);
      // eslint-disable-next-line no-use-before-define
      addProjectTitleToDOM();
      clearAndDisplayProjects();
      (0,_storage__WEBPACK_IMPORTED_MODULE_2__.addProjectsToStore)();
      (0,_storage__WEBPACK_IMPORTED_MODULE_2__.addTasksToStorage)();
      form.remove();
    },
    { once: true }
  );
};

const addProjectTitleToDOM = () => {
  const titleDisplay = document.querySelector(".proj-display");

  if (
    currentProject === "week" ||
    currentProject === "today" ||
    currentProject === "priority"
  ) {
    titleDisplay.textContent =
      currentProject.charAt(0).toUpperCase() + currentProject.substring(1);
    titleDisplay.classList.remove("can-edit-name");
  } else {
    titleDisplay.textContent = _project__WEBPACK_IMPORTED_MODULE_0__.allProjects[currentProject].getName();
    titleDisplay.classList.add("can-edit-name");
  }

  if (currentProject === "0") {
    titleDisplay.classList.remove("can-edit-name");
  }
  removeNameChangeForm();
  titleDisplay.addEventListener("click", changeProjName);
};

const selectedProj = () => {
  const buttons = document.querySelectorAll(".project");
  buttons.forEach((btn) => {
    if (btn.classList.contains("selected")) {
      btn.classList.remove("selected");
    }
    if (btn.id === currentProject.toString()) {
      btn.classList.add("selected");
    } else if (btn.id === "all" && currentProject === "0") {
      btn.classList.add("selected");
    }
  });
};

const highlightAllTaskOnDOM = () => {
  document.querySelector("#all").click();
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageLoad */ "./src/pageLoad.js");



(0,_pageLoad__WEBPACK_IMPORTED_MODULE_1__["default"])();


/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displayProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayProjects */ "./src/displayProjects.js");
/* harmony import */ var _FormControllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormControllers */ "./src/FormControllers.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");



// import Svg from "./imgs/check.svg";

const pageLoad = () => {
  const body = document.querySelector("body");
  body.innerHTML = `    <div class="main-container">
      <header>
      <div>
      <svg id="logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.5 2H5.5C3.6 2 2 3.6 2 5.5V18.5C2 20.4 3.6 22 5.5 22H16L22 16V5.5C22 3.6 20.4 2 18.5 2M7 12.5L8.3 11.1L10.4 13.2L15.6 8L17 9.4L10.5 16L7 12.5M15 20V18.5C15 16.6 16.6 15 18.5 15H20L15 20Z"/></svg>
        <h3 class="logo">To Do List</h3>
      </div>
        <button class="dropdown"><div class="btn-burger"></div></button>
      </header>
      <main>
        <div class="sidebar">
          <ul class="current-times">
          <li><button id="all" class="project default-options">All Tasks</button></li>
            <li><button id="today" class="default-options project">Today</button></li>
            <li><button id="week" class="default-options project">This Week</button></li>
            <li><button id="priority" class="default-options project">Priority</button></li>
          </ul>
          <div class="projects">
            <h3>Your Projects</h3>
            <div class="projects-holder"></div>
            <button id="createProj">Create New Project</button>
          </div>
        </div>
        <div class="to-do-container">
        <div class="proj-display-container">
          <h3 class="proj-display"></h3>
        </div>
          <button id="createToDo">Create New Task +</button>
        </div>
        <div class=task-holder>
        </div>
      </main>
    </div>`;
  (0,_displayProjects__WEBPACK_IMPORTED_MODULE_0__.navBarEvents)();
  (0,_storage__WEBPACK_IMPORTED_MODULE_2__.checkProjStorage)();
  (0,_storage__WEBPACK_IMPORTED_MODULE_2__.checkStorage)();
  (0,_FormControllers__WEBPACK_IMPORTED_MODULE_1__.eventListeners)();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "allProjects": () => (/* binding */ allProjects),
/* harmony export */   "createNewProject": () => (/* binding */ createNewProject),
/* harmony export */   "defaultProjects": () => (/* binding */ defaultProjects),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject)
/* harmony export */ });
class Project {
  constructor(name) {
    this.name = name;
    this.projectToDo = [];
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getProjects() {
    return this.projectToDo;
  }
}

const allProjects = [];

const pushProject = (project) => {
  allProjects.push(project);
};

const createNewProject = (name) => {
  const proj = new Project(name);
  pushProject(proj);
};

const deleteProject = (index) => {
  allProjects.splice(index, 1);
};

const defaultProjects = () => {
  createNewProject("All");
  createNewProject("School");
  createNewProject("Personal");
};




/***/ }),

/***/ "./src/projectAssign.js":
/*!******************************!*\
  !*** ./src/projectAssign.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDo */ "./src/toDo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* eslint-disable no-plusplus */



const resetProjects = () => {
  for (let i = 0; i < _project__WEBPACK_IMPORTED_MODULE_1__.allProjects.length; i++) {
    _project__WEBPACK_IMPORTED_MODULE_1__.allProjects[i].projectToDo = [];
  }
};

const pushToDefault = () => {
  for (let i = 0; i < _toDo__WEBPACK_IMPORTED_MODULE_0__.allToDo.length; i++) {
    _project__WEBPACK_IMPORTED_MODULE_1__.allProjects[0].projectToDo.push(_toDo__WEBPACK_IMPORTED_MODULE_0__.allToDo[i]);
  }
};

const assignToDo = () => {
  for (let i = 1; i < _project__WEBPACK_IMPORTED_MODULE_1__.allProjects.length; i++) {
    const projects = _project__WEBPACK_IMPORTED_MODULE_1__.allProjects[i];
    if (projects === undefined) {
      return;
    }
    for (let j = 0; j < _toDo__WEBPACK_IMPORTED_MODULE_0__.allToDo.length; j++) {
      if (_toDo__WEBPACK_IMPORTED_MODULE_0__.allToDo[j].project === projects.name) {
        projects.projectToDo.push(_toDo__WEBPACK_IMPORTED_MODULE_0__.allToDo[j]);
      }
    }
  }
};


const projectSort = () => {
  resetProjects();
  pushToDefault();
  assignToDo();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectSort);


/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectsToStore": () => (/* binding */ addProjectsToStore),
/* harmony export */   "addTasksToStorage": () => (/* binding */ addTasksToStorage),
/* harmony export */   "checkProjStorage": () => (/* binding */ checkProjStorage),
/* harmony export */   "checkStorage": () => (/* binding */ checkStorage)
/* harmony export */ });
/* harmony import */ var _displayAllTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayAllTasks */ "./src/displayAllTasks.js");
/* harmony import */ var _displayProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayProjects */ "./src/displayProjects.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDo */ "./src/toDo.js");
/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/no-cycle





// Task storage
const addTasksToStorage = () => {
  localStorage.setItem("allTasks", JSON.stringify(_toDo__WEBPACK_IMPORTED_MODULE_3__.allToDo));
};

const displayTasksFromStore = () => {
  const storageData = JSON.parse(localStorage.getItem("allTasks"));

  storageData.map((data) =>
    _toDo__WEBPACK_IMPORTED_MODULE_3__.allToDo.push(
      new _toDo__WEBPACK_IMPORTED_MODULE_3__.ToDo(
        data.title,
        data.description,
        data.dueDate,
        data.priority,
        data.timeAllocate,
        data.notes,
        data.checkStat,
        data.project
      )
    )
  );
};

// on page load
const checkStorage = () => {
  const storage = localStorage.getItem("allTasks");
  if (storage === null) {
    (0,_toDo__WEBPACK_IMPORTED_MODULE_3__.defaultTasks)();
    addTasksToStorage();
    (0,_displayAllTasks__WEBPACK_IMPORTED_MODULE_0__.sortAndDisplayTasks)("0");
  } else if (storage.length !== 0) {
    displayTasksFromStore();
    (0,_displayAllTasks__WEBPACK_IMPORTED_MODULE_0__.sortAndDisplayTasks)("0");
  }
};

// Project storage
const addProjectsToStore = () => {
  localStorage.setItem("projects", JSON.stringify(_project__WEBPACK_IMPORTED_MODULE_2__.allProjects));
};

const displayProjectsFromStorage = () => {
  const storageData = JSON.parse(localStorage.getItem("projects"));

  storageData.map((data) =>
    _project__WEBPACK_IMPORTED_MODULE_2__.allProjects.push(new _project__WEBPACK_IMPORTED_MODULE_2__.Project(data.name, data.projectToDo))
  );
  (0,_displayProjects__WEBPACK_IMPORTED_MODULE_1__.clearAndDisplayProjects)();
};

// For page load
const checkProjStorage = () => {
  const storage = localStorage.getItem("projects");
  if (storage === null) {
    (0,_project__WEBPACK_IMPORTED_MODULE_2__.defaultProjects)();
    addProjectsToStore();
    (0,_displayProjects__WEBPACK_IMPORTED_MODULE_1__.clearAndDisplayProjects)();
  } else if (storage.length !== 0) {
    displayProjectsFromStorage();
  }
};




/***/ }),

/***/ "./src/toDo.js":
/*!*********************!*\
  !*** ./src/toDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDo": () => (/* binding */ ToDo),
/* harmony export */   "allToDo": () => (/* binding */ allToDo),
/* harmony export */   "createNewToDo": () => (/* binding */ createNewToDo),
/* harmony export */   "defaultTasks": () => (/* binding */ defaultTasks),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "pushToDo": () => (/* binding */ pushToDo)
/* harmony export */ });
class ToDo {
  constructor(
    title,
    description,
    dueDate,
    priority,
    timeAllocate,
    notes,
    checkStat,
    project
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.timeAllocate = timeAllocate;
    this.notes = notes;
    this.checkStat = checkStat;
    this.project = project;
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }

  getDescription() {
    return this.description;
  }

  setDescription(description) {
    this.description = description;
  }

  getDueDate() {
    return this.dueDate;
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  getTimeAllocate() {
    return this.timeAllocate;
  }

  setTimeAllocate(time) {
    this.timeAllocate = time;
  }

  setPriority(priority) {
    this.priority = priority;
  }

  getPriority() {
    return this.priority;
  }

  getNotes() {
    return this.notes;
  }

  setNotes(notes) {
    this.notes = notes;
  }

  setCheckStat(checkStat) {
    this.checkStat = checkStat;
  }

  getCheckStat() {
    return this.checkStat;
  }

  getProject() {
    return this.project;
  }

  setProject(project) {
    this.project = project;
  }

  getInfo() {
    return `Description: ${this.description} </br> Notes: ${this.notes} </br> Time Allocation: ${this.timeAllocate} </br> Project: ${this.project}`;
  }
}

const allToDo = [];

const pushToDo = (holder) => {
  allToDo.push(holder);
};

const deleteTask = (index) => {
  allToDo.splice(index, 1);
};

const createNewToDo = (
  title,
  description,
  dueDate,
  priority,
  timeAllocate,
  notes,
  checkStat,
  project
) => {
  const holder = new ToDo(
    title,
    description,
    dueDate,
    priority,
    timeAllocate,
    notes,
    checkStat,
    project
  );
  pushToDo(holder);
};

const defaultTasks = () => {
  createNewToDo(
    "You can edit the title of a project (hint: click School on the left, then its title on the top!)",
    "Looks like you found the more info!",
    "2023-04-05",
    "one",
    "1 hour",
    "And some notes can go in here!",
    false,
    "Personal"
  );
  createNewToDo(
    "Homework",
    "Mark HW",
    "2023-04-05",
    "one",
    "1 hour",
    "No Notes",
    false,
    "School"
  );
  createNewToDo(
    "Code",
    "Get it done every day!",
    "2023-03-10",
    "two",
    "2 Hours",
    "You can figure it out!",
    true,
    "Personal"
  );
  createNewToDo(
    "Study for LREB exam",
    "Lots of content on it",
    "2023-03-20",
    "two",
    "3 hours",
    "No notes",
    true,
    "School"
  );
  createNewToDo(
    "Read a book",
    "Gotta find a book first",
    "2023-07-04",
    "three",
    "1 hour",
    "No notes",
    false,
    "Personal"
  );
};




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLFVBQVUsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE9BQU8sVUFBVSxVQUFVLFlBQVksT0FBTyxPQUFPLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxjQUFjLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sZ0lBQWdJLEtBQUssY0FBYyxlQUFl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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtRUFBaUI7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxlQUFlLG9FQUFVOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFrQix1RUFBYTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IseUVBQWU7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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O0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdExtQztBQUNnQjtBQUNsQjtBQUNvQjtBQUNRO0FBQzJCO0FBQzZCO0FBQ3pFO0FBQ007QUFDVztBQUNULENBQUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0ZBQXNGO0FBQ3RGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEUsd0JBQXdCLDRDQUE0QztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRLGlFQUFpRTtBQUNwRixXQUFXLGVBQWU7QUFDMUIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsU0FBUztBQUNwQjtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLGFBQWEsUUFBUTtBQUNyQixZQUFZLFdBQVc7QUFDdkIsWUFBWSxZQUFZO0FBQ3hCLFlBQVksWUFBWTtBQUN4QixZQUFZLFlBQVk7QUFDeEIsWUFBWSxZQUFZO0FBQ3hCLFlBQVksWUFBWTtBQUN4QixZQUFZLFlBQVkseUdBQXlHO0FBQ2pJLFlBQVksWUFBWSxxR0FBcUc7QUFDN0gsWUFBWSxZQUFZLCtHQUErRztBQUN2SSxZQUFZLFlBQVksaUhBQWlIO0FBQ3pJLFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQSxFQUFFLHNFQUFZO0FBQ2Q7QUFDQSx1QkFBdUIsK0VBQWlCO0FBQ3hDLG1PQUFtTyxtRUFBYTtBQUNoUCw4QkFBOEIsbUVBQVMscTVCQUFxNUI7O0FBRTU3QjtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLG1FQUFTLG8zQkFBbzNCOztBQUVsNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLDREQUFNOztBQUUzQixPQUFPLDZEQUFPO0FBQ2Q7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7O0FBR0EsdUJBQXVCLHlGQUErQjtBQUN0RCxnQkFBZ0IscUVBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQiwyRUFBYztBQUN4QztBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsdUVBQVU7O0FBRTlCO0FBQ0EsOEZBQThGLHdGQUF3QjtBQUN0SCxRQUFRLG1GQUFtQjtBQUMzQjs7QUFFQSwrRkFBK0YseUZBQXlCO0FBQ3hILFFBQVEsbUZBQW1CO0FBQzNCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDamFrRDtBQUNRO0FBQ2xCO0FBQ2lCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRLGlFQUFpRTtBQUNwRixXQUFXLGVBQWU7QUFDMUIsV0FBVyxlQUFlO0FBQzFCLGFBQWEsUUFBUTtBQUNyQixZQUFZLFdBQVc7QUFDdkIsWUFBWSxZQUFZO0FBQ3hCLFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CLGFBQWEsaUVBQVcsNEJBQTRCLHFFQUFlLDJCQUEyQjtBQUM5RjtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRGtEO0FBQ1Y7QUFDVztBQUNNO0FBQ1c7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRLGlFQUFpRTtBQUNwRixXQUFXLGVBQWU7QUFDMUIsV0FBVyxlQUFlO0FBQzFCLGFBQWEsUUFBUTtBQUNyQixZQUFZLFdBQVc7QUFDdkIsWUFBWSxZQUFZO0FBQ3hCLFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGlCQUFpQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCwwQkFBMEI7QUFDbEY7QUFDQTs7QUFFZTtBQUNmOztBQUVBLEVBQUUsc0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CO0FBQ0EsdUJBQXVCLCtFQUFpQjtBQUN4Qyw4QkFBOEIsbUVBQVMsKzRCQUErNEI7O0FBRXQ3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlFQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpRUFBVzs7QUFFbkM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFFQSx3QkFBd0IsMkJBQTJCLDJFQUEyRSxrQ0FBa0Msd0JBQXdCLE9BQU8sa0NBQWtDLG1JQUFtSTs7QUFFM1M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q3dDO0FBQ0E7QUFDaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZCxhQUFhLFNBQVM7QUFDdEIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTs7QUFFZCxPQUFPLDREQUFNO0FBQ2I7QUFDQTs7QUFFQSxhQUFhLDREQUFNO0FBQ25CO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNSZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHdGQUF3Rjs7QUFFeEY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9DZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUJBQXFCLFFBQVE7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSix5Q0FBeUMsT0FBTztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7O0FDdkY0QztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTyxPQUFPLE1BQU07QUFDL0IsV0FBVyxPQUFPLE9BQU8sTUFBTTtBQUMvQixhQUFhLE1BQU0sSUFBSSxNQUFNO0FBQzdCLFlBQVksTUFBTSxJQUFJLE1BQU07QUFDNUI7QUFDQTtBQUNBLFFBQVEsMkVBQWlCO0FBQ3pCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsUUFBUSwyRUFBaUI7QUFDekI7QUFDQTtBQUNBLEdBQUc7QUFDSCxZQUFZLDJFQUFpQjtBQUM3QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUNqQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7OztBQ2J3QztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPLHlFQUFlO0FBQ3RCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsV0FBVyx5RUFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILFNBQVMseUVBQWU7QUFDeEI7QUFDQTtBQUNBLEdBQUc7QUFDSCxPQUFPLHlFQUFlO0FBQ3RCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsYUFBYSx5RUFBZTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSndDO0FBQ2M7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDZFQUFtQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILE9BQU8sc0VBQVk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsV0FBVyxzRUFBWTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxTQUFTLHNFQUFZO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILE9BQU8sc0VBQVk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsYUFBYSxzRUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGlFQUFlLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR3dDO0FBQ1I7QUFDUTtBQUNaO0FBQ047O0FBRTFDO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0VBQWM7QUFDaEMsY0FBYyxnRUFBVTtBQUN4QixrQkFBa0Isb0VBQWM7QUFDaEMsWUFBWSw4REFBUTtBQUNwQixTQUFTLDJEQUFLO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdCNEQ7QUFDeEI7QUFDTjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QixZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHFCQUFxQjtBQUMvRDtBQUNBOztBQUVlO0FBQ2Y7O0FBRUEsRUFBRSxzRUFBWTtBQUNkLHlCQUF5QixtRUFBUzs7QUFFbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRTtBQUN4RSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSx3QkFBd0IsRUFBRTtBQUMxRSxnQ0FBZ0MsRUFBRSxVQUFVLEVBQUU7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsRUFBRSxTQUFTLCtCQUErQixPQUFPLEVBQUUsU0FBUywrQkFBK0I7QUFDOUgsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixtRUFBa0IsYUFBYSxxRUFBb0I7QUFDcEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsbUVBQWtCLGFBQWEscUVBQW9CO0FBQzVFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pRd0M7QUFDVztBQUNNO0FBQ1c7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVEsaUVBQWlFO0FBQ3BGLFdBQVcsZUFBZTtBQUMxQixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCLFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLGlCQUFpQjtBQUNsRjtBQUNBOztBQUVlO0FBQ2Y7O0FBRUEsRUFBRSxzRUFBWTtBQUNkLHVCQUF1QiwrRUFBaUI7QUFDeEMscUJBQXFCLG1FQUFTLDIyQkFBMjJCOztBQUV6NEI7QUFDQTtBQUNBOztBQUVBLGFBQWEsNERBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakRrRDtBQUNBO0FBQ0M7QUFDTTtBQUNXO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUSxpRUFBaUU7QUFDcEYsV0FBVyxlQUFlO0FBQzFCLFdBQVcsZUFBZTtBQUMxQixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCLFlBQVksWUFBWTtBQUN4QixZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFZTtBQUNmOztBQUVBLEVBQUUsc0VBQVk7QUFDZCx1QkFBdUIsK0VBQWlCO0FBQ3hDLDhCQUE4QixtRUFBUztBQUN2QyxhQUFhLGlFQUFXO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaUVBQVc7QUFDeEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RDBEO0FBQ0Q7QUFDTjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxlQUFlLG1FQUFTO0FBQ3hCLFNBQVMscUVBQWU7QUFDeEI7Ozs7Ozs7Ozs7Ozs7OztBQzFCQSx3QkFBd0IsMkJBQTJCLDJFQUEyRSxrQ0FBa0Msd0JBQXdCLE9BQU8sa0NBQWtDLG1JQUFtSTs7QUFFM1M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLHlEQUF5RDs7QUFFekQ7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSwwT0FBME87O0FBRTFPO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUMwRDtBQUNoQjtBQUNIO0FBTVo7QUFDNkI7QUFDVTs7QUFFbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksMERBQWdCO0FBQ3BCLElBQUksNERBQWtCO0FBQ3RCLElBQUksMERBQVc7QUFDZixJQUFJLHlFQUF1QjtBQUMzQixJQUFJLHNFQUFvQixDQUFDLHdEQUFrQjtBQUMzQyxJQUFJLHFFQUFtQixDQUFDLDREQUFjO0FBQ3RDLElBQUksc0VBQW9COztBQUV4QjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQSxzQkFBc0IsR0FBRztBQUN6Qiw0QkFBNEIsR0FBRztBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDZCQUE2QixpREFBVyxDQUFDLDREQUFjOztBQUV2RCxFQUFFLHlEQUFtQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDJEQUFpQjtBQUNyQixJQUFJLDBEQUFXO0FBQ2YsSUFBSSxxRUFBbUIsQ0FBQyw0REFBYzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBT0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6UkY7QUFDQTtBQUNBO0FBQ0E7QUFDcUM7QUFDUTtBQUNVO0FBQ1Y7QUFDSDtBQUN3QjtBQU92QztBQUM4Qjs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxzRUFBb0I7O0FBRXRCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQSxzQkFBc0IsR0FBRztBQUN6Qiw0QkFBNEIsR0FBRztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFFLHlEQUFtQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLDREQUFjO0FBQ3RDLElBQUksMkRBQWlCOztBQUVyQixJQUFJLHNFQUFvQjtBQUN4QjtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLEVBQUUsc0VBQW9COztBQUV0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUksc0VBQW9CO0FBQ3hCO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFJLDJEQUFpQjtBQUNyQix3QkFBd0IsNERBQWM7QUFDdEMsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSSwyREFBaUI7QUFDckIsd0JBQXdCLDREQUFjO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDBDQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQ0FBTztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0REFBYztBQUN0QztBQUNBLElBQUk7QUFDSjtBQUNBLHdCQUF3Qiw0REFBYztBQUN0QztBQUNBLElBQUk7QUFDSjtBQUNBLHdCQUF3Qiw0REFBYztBQUN0QztBQUNBO0FBQ0EsRUFBRSwyREFBaUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlEQUFVO0FBQ2hCLE1BQU0sMkRBQWlCO0FBQ3ZCLDBCQUEwQiw0REFBYztBQUN4QyxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMENBQU87QUFDOUIsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBDQUFPO0FBQzNCLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwQ0FBTztBQUMzQixLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwQ0FBTztBQUNqQyxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLHNCQUFzQixrREFBZTs7QUFFckMsZUFBZSwyREFBTSxDQUFDLG9EQUFROztBQUU5QjtBQUNBO0FBQ0EseURBQXlELFlBQVk7QUFDckU7QUFDQSx5Q0FBeUMsbUJBQW1CO0FBQzVELGlDQUFpQyxLQUFLO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxhQUFhLGtFQUFrRSxhQUFhLG9FQUFvRSxhQUFhO0FBQ3hPLG1EQUFtRCxZQUFZO0FBQy9ELDZEQUE2RCxZQUFZO0FBQ3pFLHNEQUFzRCxZQUFZO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsaURBQVcsQ0FBQyw0REFBYzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG1CQUFtQjtBQUNuRDs7QUFFQSxNQUFNLDREQUFjO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksdURBQWEsQ0FBQyw0REFBYztBQUNoQyxJQUFJLHVFQUFxQjtBQUN6QixJQUFJLDREQUFrQjtBQUN0QixJQUFJLHlFQUF1QjtBQUMzQixHQUFHO0FBQ0g7O0FBRUE7QUFDQSxrQkFBa0IsZ0NBQWdDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsZ0NBQWdDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsaURBQVc7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLDJEQUFNO0FBQzlCLGtCQUFrQixJQUFJLGlEQUFjLEVBQUU7QUFDdEMsaUJBQWlCLDJEQUFNLENBQUMsb0RBQVEsQ0FBQywwQ0FBTztBQUN4QztBQUNBLG9CQUFvQiwwQ0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLG9EQUFPO0FBQzFCLGtCQUFrQixJQUFJLGlEQUFjLEVBQUU7QUFDdEMscUJBQXFCLG9EQUFPLENBQUMsb0RBQVEsQ0FBQywwQ0FBTztBQUM3QztBQUNBLG9CQUFvQiwwQ0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixJQUFJLGlEQUFjLEVBQUU7QUFDdEMsUUFBUSwwQ0FBTztBQUNmLG9CQUFvQiwwQ0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixJQUFJLGlEQUFjLEVBQUU7QUFDdEMsUUFBUSwwQ0FBTztBQUNmLG9CQUFvQiwwQ0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixJQUFJLGlEQUFjLEVBQUU7QUFDdEMsUUFBUSwwQ0FBTztBQUNmLG9CQUFvQiwwQ0FBTztBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsMERBQVc7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSw4REFBWTtBQUNkLEVBQUUsc0VBQW9CO0FBQ3RCO0FBQ0E7QUFDQTs7QUFRRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xlRjtBQUNBO0FBQ0E7QUFDQTtBQUN3QztBQUNrQztBQUNSO0FBQ2pDOztBQUVqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixJQUFJLHdEQUFrQixFQUFFO0FBQzFDO0FBQ0EsMEJBQTBCLGlEQUFXO0FBQ3JDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQU0scUVBQW1CO0FBQ3pCLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksa0VBQWdCO0FBQ3BCLElBQUkscUVBQW1CO0FBQ3ZCLEdBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUksa0VBQWdCO0FBQ3BCLElBQUkscUVBQW1CO0FBQ3ZCLEdBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUksa0VBQWdCO0FBQ3BCLElBQUkscUVBQW1CO0FBQ3ZCLEdBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUksa0VBQWdCO0FBQ3BCLElBQUkscUVBQW1CO0FBQ3ZCLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsaURBQVc7QUFDekM7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaURBQVc7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwQ0FBTztBQUM5QixNQUFNLGlEQUFXO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNERBQWtCO0FBQ3hCLE1BQU0sMkRBQWlCO0FBQ3ZCO0FBQ0EsS0FBSztBQUNMLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSiwrQkFBK0IsaURBQVc7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFVRTs7Ozs7Ozs7Ozs7Ozs7QUN0TG1CO0FBQ2E7O0FBRWxDLHFEQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIeUM7QUFDRTtBQUNRO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw4REFBWTtBQUNkLEVBQUUsMERBQWdCO0FBQ2xCLEVBQUUsc0RBQVk7QUFDZCxFQUFFLGdFQUFjO0FBQ2hCOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDakI7QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFeUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEN6RTtBQUNpQztBQUNPOztBQUV4QztBQUNBLGtCQUFrQixJQUFJLHdEQUFrQixFQUFFO0FBQzFDLElBQUksaURBQVc7QUFDZjtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLElBQUksaURBQWMsRUFBRTtBQUN0QyxJQUFJLHFFQUErQixDQUFDLDBDQUFPO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsSUFBSSx3REFBa0IsRUFBRTtBQUMxQyxxQkFBcUIsaURBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLElBQUksaURBQWMsRUFBRTtBQUN4QyxVQUFVLDBDQUFPO0FBQ2pCLGtDQUFrQywwQ0FBTztBQUN6QztBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQzNCO0FBQ0E7QUFDd0Q7QUFDSTtBQUNNO0FBQ2I7O0FBRXJEO0FBQ0E7QUFDQSxrREFBa0QsMENBQU87QUFDekQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUksK0NBQVk7QUFDaEIsVUFBVSx1Q0FBSTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVk7QUFDaEI7QUFDQSxJQUFJLHFFQUFtQjtBQUN2QixJQUFJO0FBQ0o7QUFDQSxJQUFJLHFFQUFtQjtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrREFBa0QsaURBQVc7QUFDN0Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUksc0RBQWdCLEtBQUssNkNBQU87QUFDaEM7QUFDQSxFQUFFLHlFQUF1QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQWU7QUFDbkI7QUFDQSxJQUFJLHlFQUF1QjtBQUMzQixJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQU9FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNFSztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixrQkFBa0IsZUFBZSxZQUFZLHlCQUF5QixtQkFBbUIsaUJBQWlCLGFBQWE7QUFDbEo7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZ2V0V2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZ2V0V2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZUlTTy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9Gb3JtQ29udHJvbGxlcnMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZGlzcGxheUFsbFRhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2Rpc3BsYXlQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Byb2plY3RBc3NpZ24uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90b0RvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q3JpbXNvbitUZXh0JmZhbWlseT1Sb2JvdG8rU2xhYiZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICAtLWJhc2ljUGFkZGluZzogMnZ3O1xcblxcbiAgLS1tYWpvckJsdWU6ICMxZDM1NTc7XFxuICAtLXJveWFsQmx1ZTogIzQ1N2I5ZDtcXG4gIC0tdWx0cmFWb2lsZXQ6ICNhOGRhZGM7XFxuICAtLWxhdmVuZGVyOiB3aGl0ZTtcXG4gIC0tbXVhdmU6ICNlNjM5NDY7XFxuICAtLWRhcmtCbHVlOiAjMDIwMDI0O1xcbiAgLS1kYXJrR3JleTogI2U1ZTVlNTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIFNsYWJcXFwiLCBzZXJpZjtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuaGVhZGVyIHtcXG4gIGhlaWdodDogN3ZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmctbGVmdDogdmFyKC0tYmFzaWNQYWRkaW5nKTtcXG4gIGNvbG9yOiB2YXIoLS1sYXZlbmRlcik7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMiwgMCwgMzYpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICA5MGRlZyxcXG4gICAgcmdiYSgyLCAwLCAzNiwgMSkgMCUsXFxuICAgIHJnYmEoMzIsIDgxLCAxMDcsIDEpIDMwJSxcXG4gICAgcmdiYSgxNjgsIDIxOCwgMjIwLCAxKSAxMDAlXFxuICApO1xcbn1cXG5cXG5oZWFkZXIgZGl2IHtcXG4gIGhlaWdodDogN3ZoO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDF2dztcXG59XFxuXFxuaGVhZGVyIGRpdiBzdmcge1xcbiAgaGVpZ2h0OiA2MCU7XFxuICBmaWxsOiB2YXIoLS1sYXZlbmRlcik7XFxufVxcblxcbiNsb2dvLXN2Zzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kcm9wZG93biB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi8qIE1haW4gQ29udGVudCAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xcbiAgZmxleDogMTtcXG59XFxuXFxuLyogU2lkZWJhciAqL1xcbi5wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXg6IDE7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGdyaWQtcm93OiBzcGFuIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLW1ham9yQmx1ZSk7XFxufVxcblxcbi5jdXJyZW50LXRpbWVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZy10b3A6IDJ2aDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJ2aDtcXG59XFxuXFxubGkge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmRlZmF1bHQtb3B0aW9ucyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogMC41dmg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXJhZGl1czogMXZ3O1xcbn1cXG5cXG4uZGVmYXVsdC1vcHRpb25zOmhvdmVyIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgdHJhbnNsYXRlOiAwcmVtIC0wLjJyZW07XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4ucHJvamVjdHMgaDMge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5wcm9qZWN0cy1ob2xkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5wcm9qZWN0cy1ob2xkZXIgLnByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0dyZXkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBwYWRkaW5nOiAwLjR2aDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWhvbGRlciAucHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWpvckJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDkwZGVnLFxcbiAgICByZ2JhKDIsIDAsIDM2LCAxKSAwJSxcXG4gICAgcmdiYSgzMiwgODEsIDEwNywgMSkgMzAlLFxcbiAgICByZ2JhKDE2OCwgMjE4LCAyMjAsIDEpIDEwMCVcXG4gICk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uc2VsZWN0ZWQ6aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlICE7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLyogU2lkZWJhciBFbmQgKi9cXG5cXG4vKiBUYXNrIGhvbGRlciAqL1xcbi50by1kby1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMnZoO1xcbiAgcGFkZGluZy1ib3R0b206IDJ2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhdmVuZGVyKTtcXG4gIGdhcDogMi41dmg7XFxufVxcblxcbi5wcm9qLWRpc3BsYXkge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uY2FuLWVkaXQtbmFtZTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogdmFyKC0tdWx0cmFWb2lsZXQpO1xcbn1cXG5cXG4jY3JlYXRlVG9EbyB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhdmVuZGVyKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDJ2aDtcXG59XFxuXFxuI2NyZWF0ZVRvRG86aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWxhdmVuZGVyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1ham9yQmx1ZSk7XFxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCBibGFjaztcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxdnc7XFxufVxcblxcbi50YXNrLWhvbGRlciB7XFxuICBwYWRkaW5nOiAxdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxuICBib3JkZXItcmFkaXVzOiAxdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXZoO1xcbiAgYm9yZGVyOiAjMDIwMDI0IHNvbGlkIDJweDtcXG4gIG1hcmdpbi1sZWZ0OiAzdnc7XFxuICBtYXJnaW4tcmlnaHQ6IDN2dztcXG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCBibGFjaztcXG59XFxuXFxuLnRvLWRvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDF2dztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWx0cmFWb2lsZXQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxdnc7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHZhcigtLW1ham9yQmx1ZSk7XFxuICBwYWRkaW5nOiAxdmg7XFxufVxcblxcbi5sZWZ0LXNpZGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXZ3O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvLWRvOmhvdmVyIHtcXG4gIHRyYW5zbGF0ZTogMHB4IC0wLjJ2aDtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IGJsYWNrO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuQGtleWZyYW1lcyBzdHJpa2Uge1xcbiAgMCUge1xcbiAgICB3aWR0aDogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbi5kb25lLXRpdGxlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRvbmUtdGl0bGU6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGFuaW1hdGlvbi1uYW1lOiBzdHJpa2U7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbi5yaWdodC10YXNrLWl0ZW1zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDF2dztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaGVjay1zdGF0IHtcXG4gIGhlaWdodDogMS43cmVtO1xcbiAgd2lkdGg6IDEuN3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxufVxcblxcbi5mYWxzZS10YXNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41dnc7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5wcmlvcml0eS1idXR0b24ge1xcbiAgaGVpZ2h0OiAxLjRyZW07XFxuICB3aWR0aDogMS40cmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMXZ3O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxcHggdmFyKC0tZGFya0JsdWUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0dyZXkpO1xcbn1cXG5cXG5bZGF0YS1wcmlvcml0eT1cXFwib25lXFxcIl06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG5bZGF0YS1wcmlvcml0eT1cXFwidHdvXFxcIl06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuW2RhdGEtcHJpb3JpdHk9XFxcInRocmVlXFxcIl06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuLyogICovXFxuW2RhdGEtcHJpb3JpdHk9XFxcIm9uZVxcXCJdLmFjdGl2ZS1wcmlvcml0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuW2RhdGEtcHJpb3JpdHk9XFxcInR3b1xcXCJdLmFjdGl2ZS1wcmlvcml0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbltkYXRhLXByaW9yaXR5PVxcXCJ0aHJlZVxcXCJdLmFjdGl2ZS1wcmlvcml0eSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5kYXRhIC5kb25lLXRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uZG9uZS1lbnRpcmUtdGFzayB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoOTAlKTtcXG59XFxuXFxuLmRvbmUtZW50aXJlLXRhc2s6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmVkaXQtdGFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmVkaXQtaW1hZ2Uge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBtYXJnaW4tdG9wOiAycHg7XFxufVxcblxcbi5lZGl0LWltYWdlOmhvdmVyIHtcXG4gIGZpbGw6IGdyZWVuO1xcbiAgc2NhbGU6IDEuMDU7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uZGVsZXRlLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmRlbGV0ZS1pbWcge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBtYXJnaW4tdG9wOiAycHg7XFxufVxcblxcbi5kZWxldGUtaW1nOmhvdmVyIHtcXG4gIGZpbGw6ICNlNjM5NDY7XFxuICBzY2FsZTogMS4wNTtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5pbmZvLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmluZm8tYnRuOmhvdmVyIHtcXG4gIGZpbGw6IHZhcigtLXJveWFsQmx1ZSk7XFxuICBzY2FsZTogMS4wNTtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5pbmZvLWltYWdlIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgbWFyZ2luLXRvcDogMnB4O1xcbn1cXG5cXG4udGFzay1pbmZvLXBvcHVwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFqb3JCbHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBhZGRpbmc6IDJ2dztcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMXZ3O1xcbn1cXG5cXG4ucmVtb3ZlLXBvcHVwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDFyZW07XFxuICB3aWR0aDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmc6IDF2dztcXG4gIG1hcmdpbjogMXZ3O1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11bHRyYVZvaWxldCk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5yZW1vdmUtcG9wdXA6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXVhdmUpO1xcbiAgY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVtcHR5LWRpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZGVsZXRlLXByb2oge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiAxNXZ3O1xcbiAgbWFyZ2luLXRvcDogMnZoO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcGFkZGluZzogMXZ3O1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXZlbmRlcik7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCBibGFjaztcXG59XFxuXFxuLmRlbGV0ZS1wcm9qOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11YXZlKTtcXG4gIGNvbG9yOiB2YXIoLS1sYXZlbmRlcik7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDF2dztcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4vKiBGT1JNUyAqL1xcblxcbiNjcmVhdGVQcm9qIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhdmVuZGVyKTtcXG4gIG1hcmdpbi1sZWZ0OiAxdnc7XFxuICBtYXJnaW4tcmlnaHQ6IDF2dztcXG4gIHBhZGRpbmc6IDAuNHZoO1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggYmxhY2s7XFxufVxcblxcbiNjcmVhdGVQcm9qOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1ham9yQmx1ZSk7XFxuICBjb2xvcjogdmFyKC0tbGF2ZW5kZXIpO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLnByb2plY3QtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMXZ3O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjZ2dztcXG59XFxuXFxuI3Byb2plY3QtbmFtZSB7XFxuICB3aWR0aDogNzAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0dyZXkpO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IGJsYWNrIGRvdHRlZDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4jcHJvamVjdC1uYW1lOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0gYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMC41dnc7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjV2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhdmVuZGVyKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrQmx1ZSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWpvckJsdWUpO1xcbiAgY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi50by1kby1mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCB2YXIoLS1kYXJrQmx1ZSk7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDF2aDtcXG4gIHBhZGRpbmc6IDJ2dztcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBnYXA6IDEuMXZoO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cztcXG59XFxuXFxuLmJsdXItdGhpcyB7XFxuICBmaWx0ZXI6IGJsdXIoMXB4KTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4udG8tZG8tZm9ybSBpbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAyLjV2aDtcXG4gIHBhZGRpbmc6IDAuMnZoO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50by1kby1mb3JtIGlucHV0OmZvY3VzLFxcbnNlbGVjdDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4udG8tZG8tZm9ybSBzZWxlY3Qge1xcbiAgaGVpZ2h0OiAzdmg7XFxufVxcblxcbi5zdWJtaXQtZm9ybSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xcbn1cXG5cXG4uc3VibWl0LWZvcm06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFqb3JCbHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxuICBib3JkZXItcmFkaXVzOiAxdnc7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCB2YXIoLS1kYXJrR3JleSk7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4ucmVtb3ZlLWZvcm0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICBtYXJnaW46IDJweCAycHggMHB4IDBweDtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCBibGFjaztcXG59XFxuXFxuLnJlbW92ZS1mb3JtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvLWRvLWZvcm0gI3ByaW9yaXR5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jcHJpb3JpdHkgLmlucHV0LWFuZC1sYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjN2dztcXG59XFxuXFxuLmVkaXQtdGFzay1mb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAydnc7XFxuICBnYXA6IDEuMXZoO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHZhcigtLWRhcmtCbHVlKTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMXZ3O1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cztcXG59XFxuXFxuLmVkaXQtdGFzay1mb3JtIGlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDIuNXZoO1xcbiAgcGFkZGluZzogMC4ydmg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmVkaXQtdGFzay1mb3JtIHNlbGVjdCB7XFxuICBoZWlnaHQ6IDN2aDtcXG59XFxuXFxuLmVkaXQtdGFzay1mb3JtIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5lZGl0LXRhc2stZm9ybSBidXR0b24ge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcXG59XFxuXFxuLmVkaXQtdGFzay1mb3JtIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWpvckJsdWUpO1xcbiAgY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDF2dztcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHZhcigtLWRhcmtHcmV5KTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5jaGFuZ2UtcHJvai1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5jaGFuZ2UtcHJvai1uYW1lIGlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuXFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiBibGFjayBkb3R0ZWQgMnB4O1xcbiAgcGFkZGluZzogMC41dnc7XFxufVxcblxcbi5jaGFuZ2UtcHJvai1uYW1lIGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogNXZoO1xcbiAgaGVpZ2h0OiA1dmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggdmFyKC0tZGFya0JsdWUpO1xcbn1cXG5cXG4uY2hhbmdlLXByb2otbmFtZSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFqb3JCbHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4vKiBSZXNwb25zaXZlbmVzcyAqL1xcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xcbiAgLnJlbW92ZS1mb3JtIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgfVxcbn1cXG5cXG4vKiBQdXQgcHJvamVjdHMgb24gdG9wICovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIG1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgICBnYXA6IDFweDtcXG4gIH1cXG5cXG4gIC5jdXJyZW50LXRpbWVzIHtcXG4gICAgZ2FwOiAxcHg7XFxuICB9XFxuXFxuICAuZGVmYXVsdC1vcHRpb25zIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjV2aDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxdnc7XFxuICB9XFxuXFxuICAuZGVmYXVsdC1vcHRpb25zOmhvdmVyIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0cmFuc2xhdGU6IDByZW07XFxuICB9XFxuXFxuICAucHJvamVjdHMgaDMge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLnByb2plY3RzIHtcXG4gICAgZ2FwOiAxcHg7XFxuICB9XFxuXFxuICAucHJvamVjdHMtaG9sZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0cy1ob2xkZXIgLnByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjR2aDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLnByb2plY3RzLWhvbGRlciAucHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1ham9yQmx1ZSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcblxcbiAgI2NyZWF0ZVByb2oge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhdmVuZGVyKTtcXG4gICAgbWFyZ2luLWxlZnQ6IDF2dztcXG4gICAgbWFyZ2luLXJpZ2h0OiAxdnc7XFxuICAgIHBhZGRpbmc6IDAuMnZoO1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCBibGFjaztcXG4gIH1cXG5cXG4gICNjcmVhdGVQcm9qOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFqb3JCbHVlKTtcXG4gICAgY29sb3I6IHZhcigtLWxhdmVuZGVyKTtcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXG4gIH1cXG5cXG4gIC5wcm9qZWN0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAwLjR2dztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMC4zdnc7XFxuICB9XFxuXFxuICAjcHJvamVjdC1uYW1lIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBibGFjayBkb3R0ZWQ7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgfVxcblxcbiAgLnByb2otZGlzcGxheSB7XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgfVxcblxcbiAgI2NyZWF0ZVRvRG8ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhdmVuZGVyKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAxdmg7XFxuICB9XFxuXFxuICAjY3JlYXRlVG9Ebzpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1sYXZlbmRlcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1ham9yQmx1ZSk7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IGJsYWNrO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDF2dztcXG4gIH1cXG5cXG4gIC5lbXB0eS1kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgfVxcblxcbiAgLmRlbGV0ZS1wcm9qIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgfVxcblxcbiAgLmNoYW5nZS1wcm9qLW5hbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDNweDtcXG4gIH1cXG5cXG4gIC5jaGFuZ2UtcHJvai1uYW1lIGlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiBibGFjayBkb3R0ZWQgMXB4O1xcbiAgICBwYWRkaW5nOiAwLjN2dztcXG4gIH1cXG5cXG4gIC5jaGFuZ2UtcHJvai1uYW1lIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgd2lkdGg6IDN2aDtcXG4gICAgaGVpZ2h0OiAzdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggdmFyKC0tZGFya0JsdWUpO1xcbiAgfVxcblxcbiAgLmNoYW5nZS1wcm9qLW5hbWUgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFqb3JCbHVlKTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxuICB9XFxuXFxuICAuZG9uZS10aXRsZTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHN0cmlrZTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XFxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgfVxcbn1cXG5cXG4vKiBEcm9wIGRvd24gbWVudSAqL1xcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAuZHJvcGRvd24ge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiA1dmg7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogM3B4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5idG4tYnVyZ2VyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggdmFyKC0tbWFqb3JCbHVlKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICB9XFxuXFxuICAuYnRuLWJ1cmdlcjo6YmVmb3JlLFxcbiAgLmJ0bi1idXJnZXI6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA1dmg7XFxuICAgIGhlaWdodDogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCB2YXIoLS1tYWpvckJsdWUpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcXG4gIH1cXG5cXG4gIC5idG4tYnVyZ2VyOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7XFxuICB9XFxuXFxuICAuYnRuLWJ1cmdlcjo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHB4KTtcXG4gIH1cXG5cXG4gIC5pcy1vcGVuIC5idG4tYnVyZ2VyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MHB4KTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICB9XFxuXFxuICAuaXMtb3BlbiAuYnRuLWJ1cmdlcjo6YmVmb3JlIHtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgzNXB4LCAtMzVweCk7XFxuICB9XFxuXFxuICAuaXMtb3BlbiAuYnRuLWJ1cmdlcjo6YWZ0ZXIge1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgzNXB4LCAzNXB4KTtcXG4gIH1cXG5cXG4gIC5zaWRlYmFyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBmYWRlSW4gMnM7XFxuICB9XFxuXFxuICAuYWN0aXZlLWRyb3Bkb3duIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdHJhbnNpdGlvbjogZmFkZUluIDJzO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNDBweCkge1xcbiAgLmxvZ28ge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG5cXG4gIC5yaWdodC10YXNrLWl0ZW1zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAucHJpb3JpdHkge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAzO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxc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LGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNyaW1zb24rVGV4dCZmYW1pbHk9Um9ib3RvK1NsYWImZGlzcGxheT1zd2FwXFxcIik7XFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgLS1iYXNpY1BhZGRpbmc6IDJ2dztcXG5cXG4gIC0tbWFqb3JCbHVlOiAjMWQzNTU3O1xcbiAgLS1yb3lhbEJsdWU6ICM0NTdiOWQ7XFxuICAtLXVsdHJhVm9pbGV0OiAjYThkYWRjO1xcbiAgLS1sYXZlbmRlcjogd2hpdGU7XFxuICAtLW11YXZlOiAjZTYzOTQ2O1xcbiAgLS1kYXJrQmx1ZTogIzAyMDAyNDtcXG4gIC0tZGFya0dyZXk6ICNlNWU1ZTU7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90byBTbGFiXFxcIiwgc2VyaWY7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcblxcbmhlYWRlciB7XFxuICBoZWlnaHQ6IDd2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWJhc2ljUGFkZGluZyk7XFxuICBjb2xvcjogdmFyKC0tbGF2ZW5kZXIpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZDogcmdiKDIsIDAsIDM2KTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgOTBkZWcsXFxuICAgIHJnYmEoMiwgMCwgMzYsIDEpIDAlLFxcbiAgICByZ2JhKDMyLCA4MSwgMTA3LCAxKSAzMCUsXFxuICAgIHJnYmEoMTY4LCAyMTgsIDIyMCwgMSkgMTAwJVxcbiAgKTtcXG59XFxuXFxuaGVhZGVyIGRpdiB7XFxuICBoZWlnaHQ6IDd2aDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxdnc7XFxufVxcblxcbmhlYWRlciBkaXYgc3ZnIHtcXG4gIGhlaWdodDogNjAlO1xcbiAgZmlsbDogdmFyKC0tbGF2ZW5kZXIpO1xcbn1cXG5cXG4jbG9nby1zdmc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZHJvcGRvd24ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4vKiBNYWluIENvbnRlbnQgKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi8qIFNpZGViYXIgKi9cXG4ucHJvamVjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBncmlkLXJvdzogc3BhbiAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1tYWpvckJsdWUpO1xcbn1cXG5cXG4uY3VycmVudC10aW1lcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmctdG9wOiAydmg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAydmg7XFxufVxcblxcbmxpIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5kZWZhdWx0LW9wdGlvbnMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDAuNXZoO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1yYWRpdXM6IDF2dztcXG59XFxuXFxuLmRlZmF1bHQtb3B0aW9uczpob3ZlciB7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIHRyYW5zbGF0ZTogMHJlbSAtMC4ycmVtO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLnByb2plY3RzIGgzIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ucHJvamVjdHMtaG9sZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdHMtaG9sZGVyIC5wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgcGFkZGluZzogMC40dmg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy1ob2xkZXIgLnByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFqb3JCbHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICA5MGRlZyxcXG4gICAgcmdiYSgyLCAwLCAzNiwgMSkgMCUsXFxuICAgIHJnYmEoMzIsIDgxLCAxMDcsIDEpIDMwJSxcXG4gICAgcmdiYSgxNjgsIDIxOCwgMjIwLCAxKSAxMDAlXFxuICApO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLnNlbGVjdGVkOmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZSAhO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi8qIFNpZGViYXIgRW5kICovXFxuXFxuLyogVGFzayBob2xkZXIgKi9cXG4udG8tZG8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDJ2aDtcXG4gIHBhZGRpbmctYm90dG9tOiAydmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXZlbmRlcik7XFxuICBnYXA6IDIuNXZoO1xcbn1cXG5cXG4ucHJvai1kaXNwbGF5IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmNhbi1lZGl0LW5hbWU6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHZhcigtLXVsdHJhVm9pbGV0KTtcXG59XFxuXFxuI2NyZWF0ZVRvRG8ge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXZlbmRlcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAydmg7XFxufVxcblxcbiNjcmVhdGVUb0RvOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1sYXZlbmRlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWpvckJsdWUpO1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggYmxhY2s7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMXZ3O1xcbn1cXG5cXG4udGFzay1ob2xkZXIge1xcbiAgcGFkZGluZzogMXZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0dyZXkpO1xcbiAgYm9yZGVyLXJhZGl1czogMXZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDF2aDtcXG4gIGJvcmRlcjogIzAyMDAyNCBzb2xpZCAycHg7XFxuICBtYXJnaW4tbGVmdDogM3Z3O1xcbiAgbWFyZ2luLXJpZ2h0OiAzdnc7XFxuICBtYXJnaW4tYm90dG9tOiAydmg7XFxuICBib3gtc2hhZG93OiAzcHggM3B4IDIwcHggYmxhY2s7XFxufVxcblxcbi50by1kbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxdnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVsdHJhVm9pbGV0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMXZ3O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCB2YXIoLS1tYWpvckJsdWUpO1xcbiAgcGFkZGluZzogMXZoO1xcbn1cXG5cXG4ubGVmdC1zaWRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDF2dztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50by1kbzpob3ZlciB7XFxuICB0cmFuc2xhdGU6IDBweCAtMC4ydmg7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCBibGFjaztcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbkBrZXlmcmFtZXMgc3RyaWtlIHtcXG4gIDAlIHtcXG4gICAgd2lkdGg6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4uZG9uZS10aXRsZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5kb25lLXRpdGxlOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMXB4O1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBhbmltYXRpb24tbmFtZTogc3RyaWtlO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTtcXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5cXG4ucmlnaHQtdGFzay1pdGVtcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxdnc7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2stc3RhdCB7XFxuICBoZWlnaHQ6IDEuN3JlbTtcXG4gIHdpZHRoOiAxLjdyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbn1cXG5cXG4uZmFsc2UtdGFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByaW9yaXR5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXZ3O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ucHJpb3JpdHktYnV0dG9uIHtcXG4gIGhlaWdodDogMS40cmVtO1xcbiAgd2lkdGg6IDEuNHJlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDF2dztcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMXB4IHZhcigtLWRhcmtCbHVlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcXG59XFxuXFxuW2RhdGEtcHJpb3JpdHk9XFxcIm9uZVxcXCJdOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuW2RhdGEtcHJpb3JpdHk9XFxcInR3b1xcXCJdOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbltkYXRhLXByaW9yaXR5PVxcXCJ0aHJlZVxcXCJdOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcbi8qICAqL1xcbltkYXRhLXByaW9yaXR5PVxcXCJvbmVcXFwiXS5hY3RpdmUtcHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbltkYXRhLXByaW9yaXR5PVxcXCJ0d29cXFwiXS5hY3RpdmUtcHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG5bZGF0YS1wcmlvcml0eT1cXFwidGhyZWVcXFwiXS5hY3RpdmUtcHJpb3JpdHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZGF0YSAuZG9uZS10YXNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmRvbmUtZW50aXJlLXRhc2sge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDkwJSk7XFxufVxcblxcbi5kb25lLWVudGlyZS10YXNrOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi5lZGl0LXRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5lZGl0LWltYWdlIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgbWFyZ2luLXRvcDogMnB4O1xcbn1cXG5cXG4uZWRpdC1pbWFnZTpob3ZlciB7XFxuICBmaWxsOiBncmVlbjtcXG4gIHNjYWxlOiAxLjA1O1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLmRlbGV0ZS1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kZWxldGUtaW1nIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgbWFyZ2luLXRvcDogMnB4O1xcbn1cXG5cXG4uZGVsZXRlLWltZzpob3ZlciB7XFxuICBmaWxsOiAjZTYzOTQ2O1xcbiAgc2NhbGU6IDEuMDU7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uaW5mby1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5pbmZvLWJ0bjpob3ZlciB7XFxuICBmaWxsOiB2YXIoLS1yb3lhbEJsdWUpO1xcbiAgc2NhbGU6IDEuMDU7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uaW5mby1pbWFnZSB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIG1hcmdpbi10b3A6IDJweDtcXG59XFxuXFxuLnRhc2staW5mby1wb3B1cCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICB3aWR0aDogNTB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1ham9yQmx1ZSk7XFxuICBjb2xvcjogdmFyKC0tZGFya0dyZXkpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwYWRkaW5nOiAydnc7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDF2dztcXG59XFxuXFxuLnJlbW92ZS1wb3B1cCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgd2lkdGg6IDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAxdnc7XFxuICBtYXJnaW46IDF2dztcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWx0cmFWb2lsZXQpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ucmVtb3ZlLXBvcHVwOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11YXZlKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lbXB0eS1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMTV2dztcXG4gIG1hcmdpbi10b3A6IDJ2aDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDF2dztcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGF2ZW5kZXIpO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggYmxhY2s7XFxufVxcblxcbi5kZWxldGUtcHJvajpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tdWF2ZSk7XFxuICBjb2xvcjogdmFyKC0tbGF2ZW5kZXIpO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxdnc7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLyogRk9STVMgKi9cXG5cXG4jY3JlYXRlUHJvaiB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXZlbmRlcik7XFxuICBtYXJnaW4tbGVmdDogMXZ3O1xcbiAgbWFyZ2luLXJpZ2h0OiAxdnc7XFxuICBwYWRkaW5nOiAwLjR2aDtcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IGJsYWNrO1xcbn1cXG5cXG4jY3JlYXRlUHJvajpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWpvckJsdWUpO1xcbiAgY29sb3I6IHZhcigtLWxhdmVuZGVyKTtcXG4gIHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDF2dztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMC42dnc7XFxufVxcblxcbiNwcm9qZWN0LW5hbWUge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtHcmV5KTtcXG4gIGJvcmRlci1ib3R0b206IDNweCBibGFjayBkb3R0ZWQ7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuI3Byb2plY3QtbmFtZTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtIGJ1dHRvbiB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXZ3O1xcbiAgcGFkZGluZy1yaWdodDogMC41dnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXZlbmRlcik7XFxuICBjb2xvcjogdmFyKC0tZGFya0JsdWUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcXG59XFxuXFxuLnByb2plY3QtZm9ybSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFqb3JCbHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4udG8tZG8tZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggdmFyKC0tZGFya0JsdWUpO1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxdmg7XFxuICBwYWRkaW5nOiAydnc7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgZ2FwOiAxLjF2aDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuNXM7XFxufVxcblxcbi5ibHVyLXRoaXMge1xcbiAgZmlsdGVyOiBibHVyKDFweCk7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnRvLWRvLWZvcm0gaW5wdXQsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGhlaWdodDogMi41dmg7XFxuICBwYWRkaW5nOiAwLjJ2aDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udG8tZG8tZm9ybSBpbnB1dDpmb2N1cyxcXG5zZWxlY3Q6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnRvLWRvLWZvcm0gc2VsZWN0IHtcXG4gIGhlaWdodDogM3ZoO1xcbn1cXG5cXG4uc3VibWl0LWZvcm0ge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcXG59XFxuXFxuLnN1Ym1pdC1mb3JtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1ham9yQmx1ZSk7XFxuICBjb2xvcjogdmFyKC0tZGFya0dyZXkpO1xcbiAgYm9yZGVyLXJhZGl1czogMXZ3O1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggdmFyKC0tZGFya0dyZXkpO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLnJlbW92ZS1mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgbWFyZ2luOiAycHggMnB4IDBweCAwcHg7XFxuICBwYWRkaW5nOiAycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0dyZXkpO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggYmxhY2s7XFxufVxcblxcbi5yZW1vdmUtZm9ybTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50by1kby1mb3JtICNwcmlvcml0eSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3ByaW9yaXR5IC5pbnB1dC1hbmQtbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMC4zdnc7XFxufVxcblxcbi5lZGl0LXRhc2stZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMnZ3O1xcbiAgZ2FwOiAxLjF2aDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCB2YXIoLS1kYXJrQmx1ZSk7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDF2dztcXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuNXM7XFxufVxcblxcbi5lZGl0LXRhc2stZm9ybSBpbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAyLjV2aDtcXG4gIHBhZGRpbmc6IDAuMnZoO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5lZGl0LXRhc2stZm9ybSBzZWxlY3Qge1xcbiAgaGVpZ2h0OiAzdmg7XFxufVxcblxcbi5lZGl0LXRhc2stZm9ybSBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZWRpdC10YXNrLWZvcm0gYnV0dG9uIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0dyZXkpO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggYmxhY2s7XFxufVxcblxcbi5lZGl0LXRhc2stZm9ybSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFqb3JCbHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxuICBib3JkZXItcmFkaXVzOiAxdnc7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCB2YXIoLS1kYXJrR3JleSk7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uY2hhbmdlLXByb2otbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uY2hhbmdlLXByb2otbmFtZSBpbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogYmxhY2sgZG90dGVkIDJweDtcXG4gIHBhZGRpbmc6IDAuNXZ3O1xcbn1cXG5cXG4uY2hhbmdlLXByb2otbmFtZSBidXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2lkdGg6IDV2aDtcXG4gIGhlaWdodDogNXZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJveC1zaGFkb3c6IDRweCA0cHggNHB4IHZhcigtLWRhcmtCbHVlKTtcXG59XFxuXFxuLmNoYW5nZS1wcm9qLW5hbWUgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1ham9yQmx1ZSk7XFxuICBjb2xvcjogdmFyKC0tZGFya0dyZXkpO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLyogUmVzcG9uc2l2ZW5lc3MgKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcXG4gIC5yZW1vdmUtZm9ybSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gIH1cXG59XFxuXFxuLyogUHV0IHByb2plY3RzIG9uIHRvcCAqL1xcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICBtYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5zaWRlYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gICAgZ2FwOiAxcHg7XFxuICB9XFxuXFxuICAuY3VycmVudC10aW1lcyB7XFxuICAgIGdhcDogMXB4O1xcbiAgfVxcblxcbiAgLmRlZmF1bHQtb3B0aW9ucyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMC41dmg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogMXZ3O1xcbiAgfVxcblxcbiAgLmRlZmF1bHQtb3B0aW9uczpob3ZlciB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdHJhbnNsYXRlOiAwcmVtO1xcbiAgfVxcblxcbiAgLnByb2plY3RzIGgzIHtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0cyB7XFxuICAgIGdhcDogMXB4O1xcbiAgfVxcblxcbiAgLnByb2plY3RzLWhvbGRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAucHJvamVjdHMtaG9sZGVyIC5wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0dyZXkpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMC40dmg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0cy1ob2xkZXIgLnByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWpvckJsdWUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG5cXG4gICNjcmVhdGVQcm9qIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXZlbmRlcik7XFxuICAgIG1hcmdpbi1sZWZ0OiAxdnc7XFxuICAgIG1hcmdpbi1yaWdodDogMXZ3O1xcbiAgICBwYWRkaW5nOiAwLjJ2aDtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggYmxhY2s7XFxuICB9XFxuXFxuICAjY3JlYXRlUHJvajpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1ham9yQmx1ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1sYXZlbmRlcik7XFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxuICB9XFxuXFxuICAucHJvamVjdC1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMC40dnc7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDAuM3Z3O1xcbiAgfVxcblxcbiAgI3Byb2plY3QtbmFtZSB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0dyZXkpO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggYmxhY2sgZG90dGVkO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gIH1cXG5cXG4gIC5wcm9qLWRpc3BsYXkge1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gIH1cXG5cXG4gICNjcmVhdGVUb0RvIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXZlbmRlcik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMXZoO1xcbiAgfVxcblxcbiAgI2NyZWF0ZVRvRG86aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tbGF2ZW5kZXIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWpvckJsdWUpO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCBibGFjaztcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxdnc7XFxuICB9XFxuXFxuICAuZW1wdHktZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gIH1cXG5cXG4gIC5kZWxldGUtcHJvaiB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIH1cXG5cXG4gIC5jaGFuZ2UtcHJvai1uYW1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzcHg7XFxuICB9XFxuXFxuICAuY2hhbmdlLXByb2otbmFtZSBpbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogYmxhY2sgZG90dGVkIDFweDtcXG4gICAgcGFkZGluZzogMC4zdnc7XFxuICB9XFxuXFxuICAuY2hhbmdlLXByb2otbmFtZSBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIHdpZHRoOiAzdmg7XFxuICAgIGhlaWdodDogM3ZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHZhcigtLWRhcmtCbHVlKTtcXG4gIH1cXG5cXG4gIC5jaGFuZ2UtcHJvai1uYW1lIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1ham9yQmx1ZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrR3JleSk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgfVxcblxcbiAgLmRvbmUtdGl0bGU6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBzdHJpa2U7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gIH1cXG59XFxuXFxuLyogRHJvcCBkb3duIG1lbnUgKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgLmRyb3Bkb3duIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogNXZoO1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW46IDNweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuYnRuLWJ1cmdlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDRweDtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHZhcigtLW1ham9yQmx1ZSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgfVxcblxcbiAgLmJ0bi1idXJnZXI6OmJlZm9yZSxcXG4gIC5idG4tYnVyZ2VyOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNXZoO1xcbiAgICBoZWlnaHQ6IDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggdmFyKC0tbWFqb3JCbHVlKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQ7XFxuICB9XFxuXFxuICAuYnRuLWJ1cmdlcjo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO1xcbiAgfVxcblxcbiAgLmJ0bi1idXJnZXI6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XFxuICB9XFxuXFxuICAuaXMtb3BlbiAuYnRuLWJ1cmdlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTBweCk7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgfVxcblxcbiAgLmlzLW9wZW4gLmJ0bi1idXJnZXI6OmJlZm9yZSB7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoMzVweCwgLTM1cHgpO1xcbiAgfVxcblxcbiAgLmlzLW9wZW4gLmJ0bi1idXJnZXI6OmFmdGVyIHtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoMzVweCwgMzVweCk7XFxuICB9XFxuXFxuICAuc2lkZWJhciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogZmFkZUluIDJzO1xcbiAgfVxcblxcbiAgLmFjdGl2ZS1kcm9wZG93biB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRyYW5zaXRpb246IGZhZGVJbiAycztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQwcHgpIHtcXG4gIC5sb2dvIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuXFxuICAucmlnaHQtdGFzay1pdGVtcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLnByaW9yaXR5IHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMztcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCk7XG5cbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cblxuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn0iLCJpbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0TG9jYWxlOyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbmltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gRyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlICdHJzpcbiAgICAgIGNhc2UgJ0dHJzpcbiAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBBLCBCXG5cbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuXG4gICAgICBjYXNlICdHR0dHJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ3lvJykge1xuICAgICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiBZKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7IC8vIFR3byBkaWdpdCB5ZWFyXG5cbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9IC8vIE9yZGluYWwgbnVtYmVyXG5cblxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9IC8vIFBhZGRpbmdcblxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gUihkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpOyAvLyBQYWRkaW5nXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiB1KGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIFEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gcShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAncXEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gTChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gdyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9rZW4gPT09ICd3bycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gSShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdJbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gRChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiBFKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ0VFJzpcbiAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ0VFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdFRUVFJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiBlKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gYyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdjbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdjY2NjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gaShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuXG4gICAgICBjYXNlICdpaSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG5cbiAgICAgIGNhc2UgJ2lvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVcblxuICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2lpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnaWlpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gYihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2JiYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIEIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdCJzpcbiAgICAgIGNhc2UgJ0JCJzpcbiAgICAgIGNhc2UgJ0JCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ0hvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENIb3VycygpLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gSyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiBrKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xuICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnc28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ1NlY29uZHMoKSwge1xuICAgICAgICB1bml0OiAnc2Vjb25kJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiBYKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWic7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuXG4gICAgICBjYXNlICdYWFhYJzpcbiAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiB4KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG5cbiAgICAgIGNhc2UgJ3h4eHgnOlxuICAgICAgY2FzZSAneHgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcblxuICAgICAgY2FzZSAneHh4eHgnOlxuICAgICAgY2FzZSAneHh4JzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIE8oZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiB6KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAneic6XG4gICAgICBjYXNlICd6eic6XG4gICAgICBjYXNlICd6enonOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gdChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiBUKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcblxuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiB5KGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09ICdNJyA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09ICdhbScgPyAnYS5tLicgOiAncC5tLic7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiBoKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gSChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gbShkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiBzKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ1NlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwidmFyIGRhdGVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xuXG52YXIgdGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiB0aW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG5cbnZhciBkYXRlVGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59O1xuXG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWtPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJ2YXIgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gWydEJywgJ0REJ107XG52YXIgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbJ1lZJywgJ1lZWVknXTtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSAnWVlZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnREQnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeSA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KTtcbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG4vKipcbiAqIERheXMgaW4gMSB5ZWFyXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqXG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgZGF5XG4gKlxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgd2Vla1xuICpcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcbi8qKlxuICogU2Vjb25kcyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtb250aFxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7IiwiaW1wb3J0IGlzVmFsaWQgZnJvbSBcIi4uL2lzVmFsaWQvaW5kZXguanNcIjtcbmltcG9ydCBzdWJNaWxsaXNlY29uZHMgZnJvbSBcIi4uL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGxvbmdGb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiwgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLCB0aHJvd1Byb3RlY3RlZEVycm9yIH0gZnJvbSBcIi4uL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanNcIjsgLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG5cbnZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nOyAvLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG5cbnZhciBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xudmFyIGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbnZhciBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xudmFyIHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfb3B0aW9ucyRsb2NhbGUsIF9yZWYyLCBfcmVmMywgX3JlZjQsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlMiwgX29wdGlvbnMkbG9jYWxlMiRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIsIF9yZWY1LCBfcmVmNiwgX3JlZjcsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlMywgX29wdGlvbnMkbG9jYWxlMyRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0O1xuXG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZm9ybWF0U3RyID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGxvY2FsZSA9IChfcmVmID0gKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9vcHRpb25zJGxvY2FsZSAhPT0gdm9pZCAwID8gX29wdGlvbnMkbG9jYWxlIDogZGVmYXVsdE9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogZGVmYXVsdExvY2FsZTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZjIgPSAoX3JlZjMgPSAoX3JlZjQgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUyLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMiRvcHRpLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjQgIT09IHZvaWQgMCA/IF9yZWY0IDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAxKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmNSA9IChfcmVmNiA9IChfcmVmNyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTMub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUzJG9wdGkud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNyAhPT0gdm9pZCAwID8gX3JlZjcgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY2ICE9PSB2b2lkIDAgPyBfcmVmNiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsNC53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY1ICE9PSB2b2lkIDAgPyBfcmVmNSA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH0gLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5cbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcbiAgdmFyIGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlXG4gIH07XG4gIHZhciByZXN1bHQgPSBmb3JtYXRTdHIubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSAncCcgfHwgZmlyc3RDaGFyYWN0ZXIgPT09ICdQJykge1xuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgIHJldHVybiBcIidcIjtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuXG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvcm1hdHRlcih1dGNEYXRlLCBzdWJzdHJpbmcsIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Zvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgJyArIGZpcnN0Q2hhcmFjdGVyICsgJ2AnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHZhciBtYXRjaGVkID0gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cCk7XG5cbiAgaWYgKCFtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZWRbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuLyoqXG4gKiBAbmFtZSBnZXRXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGxvY2FsIHdlZWsgaW5kZXggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGxvY2FsIHdlZWsgaW5kZXggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjV2Vla19udW1iZXJpbmdcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHsxfDJ8M3w0fDV8Nnw3fSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpbiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhclxuICogQHJldHVybnMge051bWJlcn0gdGhlIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1IHdpdGggZGVmYXVsdCBvcHRpb25zP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gMlxuICpcbiAqIC8vIFdoaWNoIHdlZWsgb2YgdGhlIGxvY2FsIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDUsXG4gKiAvLyBpZiBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayxcbiAqIC8vIGFuZCB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhciBhbHdheXMgY29udGFpbnMgNCBKYW51YXJ5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSwge1xuICogICB3ZWVrU3RhcnRzT246IDEsXG4gKiAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNFxuICogfSlcbiAqIC8vPT4gNTNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGdldFdlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjV2Vla19udW1iZXJpbmdcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHsxfDJ8M3w0fDV8Nnw3fSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpbiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhclxuICogQHJldHVybnMge051bWJlcn0gdGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgd2l0aCB0aGUgZGVmYXVsdCBzZXR0aW5ncz9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNikpXG4gKiAvLz0+IDIwMDVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IGlmIHdlZWsgc3RhcnRzIG9uIFNhdHVyZGF5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSwgeyB3ZWVrU3RhcnRzT246IDYgfSlcbiAqIC8vPT4gMjAwNFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgaWYgdGhlIGZpcnN0IHdlZWsgY29udGFpbnMgNCBKYW51YXJ5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSwgeyBmaXJzdFdlZWtDb250YWluc0RhdGU6IDQgfSlcbiAqIC8vPT4gMjAwNFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZldlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgb3B0aW9ucyk7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcblxuICBpZiAoIWlzRGF0ZShkaXJ0eURhdGUpICYmIHR5cGVvZiBkaXJ0eURhdGUgIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7IC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG5cbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcblxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuXG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5cbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXG59OyAvLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG5cbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7IC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcblxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcblxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayhpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDBcbiAgICAvKiBTdW5kYXkgKi9cbiAgICAsXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMkYWRkaXRpb25hbERpO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IHRvSW50ZWdlcigoX29wdGlvbnMkYWRkaXRpb25hbERpID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpICE9PSBudWxsICYmIF9vcHRpb25zJGFkZGl0aW9uYWxEaSAhPT0gdm9pZCAwID8gX29wdGlvbnMkYWRkaXRpb25hbERpIDogMik7XG5cbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuXG4gIGlmICghKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcblxuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuXG4gIGlmICghZGF0ZSB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcblxuICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG5cbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTsgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XG59XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuXG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nOyAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG5cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuXG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDsgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG5cbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuXG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn0gLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxuXG5cbnZhciBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcblxuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgNjAgJiYgbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCA2MCAmJiBob3VycyA+PSAwICYmIGhvdXJzIDwgMjU7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRXZWVrWWVhciBmcm9tIFwiLi4vZ2V0V2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1llYXJcbiAqIEBjYXRlZ29yeSBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1dlZWtfbnVtYmVyaW5nXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7MXwyfDN8NHw1fDZ8N30gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXJcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGFuIGEgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDUgd2l0aCBkZWZhdWx0IHNldHRpbmdzOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpKVxuICogLy89PiBTdW4gRGVjIDI2IDIwMDQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDVcbiAqIC8vIGlmIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHdlZWtcbiAqIC8vIGFuZCA0IEphbnVhcnkgaXMgYWx3YXlzIGluIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMSxcbiAqICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0XG4gKiB9KVxuICogLy89PiBNb24gSmFuIDAzIDIwMDUgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTtcbiAgdmFyIHllYXIgPSBnZXRXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZldlZWsoZmlyc3RXZWVrLCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHF1b3RlcyAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG5pbXBvcnQgeyBhbGxQcm9qZWN0cywgY3JlYXRlTmV3UHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBwcm9qZWN0U29ydCBmcm9tIFwiLi9wcm9qZWN0QXNzaWduXCI7XG5pbXBvcnQgeyBjcmVhdGVOZXdUb0RvIH0gZnJvbSBcIi4vdG9Eb1wiO1xuaW1wb3J0IHtcbiAgYWRkUHJvamVjdFRpdGxlVG9ET00sXG4gIGNoYW5nZUN1cnJlbnRQcm9qZWN0LFxuICBjbGVhckFuZERpc3BsYXlQcm9qZWN0cyxcbiAgY3VycmVudFByb2plY3QsXG59IGZyb20gXCIuL2Rpc3BsYXlQcm9qZWN0c1wiO1xuaW1wb3J0IHsgc29ydEFuZERpc3BsYXlUYXNrcyB9IGZyb20gXCIuL2Rpc3BsYXlBbGxUYXNrc1wiO1xuaW1wb3J0IHsgYWRkUHJvamVjdHNUb1N0b3JlLCBhZGRUYXNrc1RvU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuY29uc3QgdG9nZ2xlQmFja2dyb3VuZEJsdXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJibHVyLXRoaXNcIilcbiAgICA/IGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1ci10aGlzXCIpXG4gICAgOiBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJsdXItdGhpc1wiKTtcbn07XG5cbmNvbnN0IHZhbGlEYXRlID0gKGlucHV0RGF0ZSkgPT4ge1xuICBjb25zdCBwYXJ0cyA9IGlucHV0RGF0ZS5zcGxpdCgvWy9cXC0uXS8pO1xuXG4gIGlmIChwYXJ0cy5sZW5ndGggPCAzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGR0ID0gbmV3IERhdGUocGFydHNbMl0sIHBhcnRzWzFdIC0gMSwgcGFydHNbMF0pO1xuICByZXR1cm4gZHQgJiYgZHQuZ2V0TW9udGgoKSA9PT0gcGFyc2VJbnQocGFydHNbMV0sIDEwKSAtIDE7XG59O1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1ob2xkZXJcIik7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlUHJvalwiKTtcblxuICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWZvcm1cIik7XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtbmFtZVwiKTtcblxuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWJtaXQudGV4dENvbnRlbnQgPSBcIitcIjtcblxuICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gIGlucHV0LmZvY3VzKCk7XG5cbiAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChpbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XG4gICAgICBhbGVydChcIkdpdmUgeW91ciBwcm9qZWN0IGEgbmFtZVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXdQcm9qZWN0KGlucHV0LnZhbHVlKTtcbiAgICBhZGRQcm9qZWN0c1RvU3RvcmUoKTtcbiAgICBwcm9qZWN0U29ydCgpO1xuICAgIGNsZWFyQW5kRGlzcGxheVByb2plY3RzKCk7XG4gICAgY2hhbmdlQ3VycmVudFByb2plY3QoYWxsUHJvamVjdHMubGVuZ3RoIC0gMSk7XG4gICAgc29ydEFuZERpc3BsYXlUYXNrcyhjdXJyZW50UHJvamVjdCk7XG4gICAgYWRkUHJvamVjdFRpdGxlVG9ET00oKTtcblxuICAgIGZvcm0ucmVtb3ZlKCk7XG4gICAgbmV3UHJvamVjdC5kaXNhYmxlZCA9IGZhbHNlO1xuICB9KTtcbn07XG5cbmNvbnN0IGNyZWF0ZVRvRG9Gb3JtID0gKCkgPT4ge1xuICB0b2dnbGVCYWNrZ3JvdW5kQmx1cigpO1xuXG4gIGNvbnN0IG5ld1RvRG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NyZWF0ZVRvRG9cIik7XG4gIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcInRvLWRvLWZvcm1cIik7XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvLWRvLW5hbWVcIik7XG4gIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiVG8tRG8gKiA6IFwiO1xuXG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG8tZG8tbmFtZVwiKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGFza1wiKTtcblxuICBjb25zdCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGRlc2NMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgZGVzY0xhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjogXCI7XG5cbiAgY29uc3QgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBkZXNjSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgZGVzY0lucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRGVzY3JpcHRpb25cIik7XG5cbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkdWUtZGF0ZVwiKTtcbiAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiRHVlLWRhdGUgKiA6IFwiO1xuXG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVlLWRhdGVcIik7XG4gIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcblxuICBjb25zdCBwcmlvcml0eUxhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcbiAgcHJpb3JpdHlMYWJsZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eVwiKTtcbiAgcHJpb3JpdHlMYWJsZS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHkgKiA6IFwiO1xuXG4gIGNvbnN0IHByaW9yaXR5SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJpb3JpdHlIb2xkZXIuaWQgPSBcInByaW9yaXR5XCI7XG5cbiAgcHJpb3JpdHlIb2xkZXIuaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwiaW5wdXQtYW5kLWxhYmVsXCI+XG4gICAgPGlucHV0IGNsYXNzPVwicmFkaW9cIiB2YWx1ZT1cIm9uZVwiIHR5cGU9XCJyYWRpb1wiIGlkPVwib25lXCIgbmFtZT1cInByaW9yaXR5XCI+PC9pbnB1dD5cbiAgICA8bGFiZWwgZm9yPVwib25lXCI+T25lPC9sYWJlbD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJpbnB1dC1hbmQtbGFiZWxcIj5cbiAgICA8aW5wdXQgY2xhc3M9XCJyYWRpb1wiIHZhbHVlPVwidHdvXCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0d29cIiBuYW1lPVwicHJpb3JpdHlcIj48L2lucHV0PlxuICAgIDxsYWJlbCBmb3I9XCJ0d29cIj5Ud288L2xhYmVsPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImlucHV0LWFuZC1sYWJlbFwiPlxuICAgICAgPGlucHV0IGNsYXNzPVwicmFkaW9cIiB2YWx1ZT1cInRocmVlXCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJ0aHJlZVwiIG5hbWU9XCJwcmlvcml0eVwiPjwvaW5wdXQ+XG4gICAgICA8bGFiZWwgZm9yPVwidGhyZWVcIj5UaHJlZTwvbGFiZWw+XG4gIDwvZGl2PmA7XG5cbiAgY29uc3QgdGltZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICB0aW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGltZVwiKTtcbiAgdGltZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaW1lIEFsbG9jYXRpb246IFwiO1xuXG4gIGNvbnN0IHRpbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIGNvbnN0IG9uZUhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvbmVIb3VyLnRleHRDb250ZW50ID0gXCIxIGhvdXJcIjtcbiAgb25lSG91ci52YWx1ZSA9IFwiMSBob3VyXCI7XG4gIHRpbWVJbnB1dC5hcHBlbmRDaGlsZChvbmVIb3VyKTtcbiAgZm9yIChsZXQgaSA9IDI7IGkgPD0gNjsgaSArPSAxKSB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24udmFsdWUgPSBgJHtpfSBob3Vyc2A7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gYCR7aX0gaG91cnNgO1xuICAgIHRpbWVJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9XG4gIHRpbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uXCIpO1xuXG4gIGNvbnN0IG5vdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbm90ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5vdGVzXCIpO1xuICBub3RlTGFiZWwudGV4dENvbnRlbnQgPSBcIk5vdGVzOiBcIjtcblxuICBjb25zdCBub3RlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIG5vdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5vdGVzXCIpO1xuICBub3RlSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJOb3Rlc1wiKTtcblxuICBjb25zdCBkb25lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGRvbmVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkb25lXCIpO1xuICBkb25lTGFiZWwudGV4dENvbnRlbnQgPSBcIkNvbXBsZXRlPyBcIjtcblxuICBjb25zdCBkb25lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRvbmVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRvbmVcIik7XG4gIGRvbmVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG5cbiAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBwcm9qZWN0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvamVjdFwiKTtcbiAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0OiBcIjtcblxuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0XCIpO1xuXG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0TmFtZSA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS5nZXROYW1lKCk7XG5cbiAgYWxsUHJvamVjdHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uLnZhbHVlID0gZWxlbWVudC5uYW1lO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGVsZW1lbnQubmFtZTtcbiAgICBwcm9qZWN0SW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICBpZiAob3B0aW9uLnZhbHVlID09PSBjdXJyZW50UHJvamVjdE5hbWUpIHtcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcInNlbGVjdGVkXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0LnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICBzdWJtaXQuY2xhc3NMaXN0LmFkZChcInN1Ym1pdC1mb3JtXCIpO1xuXG4gIGNvbnN0IHJlbW92ZUZvcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICByZW1vdmVGb3JtQnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCI7XG4gIHJlbW92ZUZvcm1CdXR0b24uY2xhc3NMaXN0LmFkZChcInJlbW92ZS1mb3JtXCIpO1xuICByZW1vdmVGb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZm9ybS5yZW1vdmUoKTtcbiAgICB0b2dnbGVCYWNrZ3JvdW5kQmx1cigpO1xuICAgIG5ld1RvRG8uZGlzYWJsZWQgPSBmYWxzZTtcbiAgfSk7XG5cbiAgZm9ybS5hcHBlbmQoXG4gICAgbmFtZUxhYmVsLFxuICAgIG5hbWVJbnB1dCxcbiAgICBkZXNjTGFiZWwsXG4gICAgZGVzY0lucHV0LFxuICAgIGR1ZURhdGUsXG4gICAgZHVlRGF0ZUlucHV0LFxuICAgIHByaW9yaXR5TGFibGUsXG4gICAgcHJpb3JpdHlIb2xkZXIsXG4gICAgdGltZUxhYmVsLFxuICAgIHRpbWVJbnB1dCxcbiAgICBub3RlTGFiZWwsXG4gICAgbm90ZUlucHV0LFxuICAgIGRvbmVMYWJlbCxcbiAgICBkb25lSW5wdXQsXG4gICAgcHJvamVjdExhYmVsLFxuICAgIHByb2plY3RJbnB1dCxcbiAgICBzdWJtaXQsXG4gICAgcmVtb3ZlRm9ybUJ1dHRvblxuICApO1xuXG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB2YWxpRGF0ZShkdWVEYXRlSW5wdXQudmFsdWUpO1xuICAgIGlmICghZHVlRGF0ZUlucHV0LnZhbHVlKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcbiAgICAgIGFsZXJ0KFwicGxlYXNlIHB1dCBhIHZhbGlkIGRhdGVcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCdcbiAgICApLnZhbHVlO1xuICAgIGNyZWF0ZU5ld1RvRG8oXG4gICAgICBuYW1lSW5wdXQudmFsdWUsXG4gICAgICBkZXNjSW5wdXQudmFsdWUsXG4gICAgICBkdWVEYXRlSW5wdXQudmFsdWUsXG4gICAgICByYWRpbyxcbiAgICAgIHRpbWVJbnB1dC52YWx1ZSxcbiAgICAgIG5vdGVJbnB1dC52YWx1ZSxcbiAgICAgIGRvbmVJbnB1dC5jaGVja2VkLFxuICAgICAgcHJvamVjdElucHV0LnZhbHVlXG4gICAgKTtcblxuICAgIGFkZFRhc2tzVG9TdG9yYWdlKCk7XG4gICAgcHJvamVjdFNvcnQoKTtcbiAgICBzb3J0QW5kRGlzcGxheVRhc2tzKGN1cnJlbnRQcm9qZWN0KTtcblxuICAgIHRvZ2dsZUJhY2tncm91bmRCbHVyKCk7XG4gICAgZm9ybS5yZW1vdmUoKTtcbiAgICBuZXdUb0RvLmRpc2FibGVkID0gZmFsc2U7XG4gIH0pO1xufTtcblxuY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NyZWF0ZVByb2pcIik7XG4gIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBuZXdQcm9qZWN0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICBjcmVhdGVQcm9qZWN0Rm9ybSgpO1xuICB9KTtcblxuICBjb25zdCBuZXdUb0RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcmVhdGVUb0RvXCIpO1xuICBuZXdUb0RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbmV3VG9Eby5kaXNhYmxlZCA9IHRydWU7XG4gICAgY3JlYXRlVG9Eb0Zvcm0oKTtcbiAgfSk7XG5cbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9nby1zdmdcIik7XG4gIGxvZ28uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FsbFwiKS5jbGljaygpO1xuICB9KTtcblxuICBjb25zdCBkcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd25cIik7XG4gIGRyb3BEb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcbiAgICBpZiAoc2lkZWJhci5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmUtZHJvcGRvd25cIikpIHtcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1kcm9wZG93blwiKTtcbiAgICAgIGRyb3BEb3duLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1vcGVuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtZHJvcGRvd25cIik7XG4gICAgICBkcm9wRG93bi5jbGFzc0xpc3QuYWRkKFwiaXMtb3BlblwiKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgZXZlbnRMaXN0ZW5lcnMsXG4gIGNyZWF0ZVRvRG9Gb3JtLFxuICBjcmVhdGVQcm9qZWN0Rm9ybSxcbiAgdG9nZ2xlQmFja2dyb3VuZEJsdXIsXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIHF1b3RlcyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuaW1wb3J0IGZvcm1hdCBmcm9tIFwiZGF0ZS1mbnMvZm9ybWF0XCI7XG5pbXBvcnQgeyBnZXRXZWVrLCBwYXJzZUlTTyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgYWxsUHJvamVjdHMsIGRlbGV0ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBkZWxldGVUYXNrLCBhbGxUb0RvIH0gZnJvbSBcIi4vdG9Eb1wiO1xuaW1wb3J0IHByb2plY3RTb3J0IGZyb20gXCIuL3Byb2plY3RBc3NpZ25cIjtcbmltcG9ydCB7IGFkZFByb2plY3RzVG9TdG9yZSwgYWRkVGFza3NUb1N0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQge1xuICBhZGRQcm9qZWN0VGl0bGVUb0RPTSxcbiAgY2xlYXJBbmREaXNwbGF5UHJvamVjdHMsXG4gIGN1cnJlbnRQcm9qZWN0LFxuICBoaWdobGlnaHRBbGxUYXNrT25ET00sXG4gIHNlbGVjdGVkUHJvaixcbn0gZnJvbSBcIi4vZGlzcGxheVByb2plY3RzXCI7XG5pbXBvcnQgeyB0b2dnbGVCYWNrZ3JvdW5kQmx1ciB9IGZyb20gXCIuL0Zvcm1Db250cm9sbGVyc1wiO1xuXG5jb25zdCBjbGVhclRvRG9EaXNwbGF5ID0gKCkgPT4ge1xuICBjb25zdCBob2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2staG9sZGVyXCIpO1xuICB3aGlsZSAoaG9sZGVyLmZpcnN0Q2hpbGQpIHtcbiAgICBob2xkZXIucmVtb3ZlQ2hpbGQoaG9sZGVyLmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuXG5jb25zdCBlZGl0VGFza1BvcFVwID0gKHRhc2spID0+IHtcbiAgdG9nZ2xlQmFja2dyb3VuZEJsdXIoKTtcblxuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJlZGl0LXRhc2stZm9ybVwiKTtcblxuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG8tZG8tbmFtZVwiKTtcbiAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJUby1EbyA6IFwiO1xuXG4gIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG8tZG8tbmFtZVwiKTtcbiAgbmFtZUlucHV0LnZhbHVlID0gdGFzay5nZXRUaXRsZSgpO1xuXG4gIGNvbnN0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZGVzY0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICBkZXNjTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOiBcIjtcblxuICBjb25zdCBkZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGRlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICBkZXNjSW5wdXQudmFsdWUgPSB0YXNrLmdldERlc2NyaXB0aW9uKCk7XG5cbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkdWUtZGF0ZVwiKTtcbiAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiRHVlLWRhdGU6IFwiO1xuXG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVlLWRhdGVcIik7XG4gIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgZHVlRGF0ZUlucHV0LnZhbHVlID0gdGFzay5nZXREdWVEYXRlKCk7XG5cbiAgY29uc3QgdGltZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICB0aW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGltZVwiKTtcbiAgdGltZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaW1lIEFsbG9jYXRpb246IFwiO1xuXG4gIGNvbnN0IHRpbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIGNvbnN0IG9uZUhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBvbmVIb3VyLnRleHRDb250ZW50ID0gXCIxIGhvdXJcIjtcbiAgb25lSG91ci52YWx1ZSA9IFwiMSBob3VyXCI7XG4gIHRpbWVJbnB1dC5hcHBlbmRDaGlsZChvbmVIb3VyKTtcbiAgZm9yIChsZXQgaSA9IDI7IGkgPD0gNjsgaSArPSAxKSB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24udmFsdWUgPSBgJHtpfSBob3Vyc2A7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gYCR7aX0gaG91cnNgO1xuICAgIGlmIChvcHRpb24udmFsdWUgPT09IHRhc2suZ2V0VGltZUFsbG9jYXRlKCkpIHtcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcInNlbGVjdGVkXCIpO1xuICAgIH1cbiAgICB0aW1lSW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfVxuXG4gIHRpbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpbWVcIik7XG5cbiAgY29uc3Qgbm90ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBub3RlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibm90ZXNcIik7XG4gIG5vdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiTm90ZXM6IFwiO1xuXG4gIGNvbnN0IG5vdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgbm90ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibm90ZXNcIik7XG4gIG5vdGVJbnB1dC52YWx1ZSA9IHRhc2suZ2V0Tm90ZXMoKTtcblxuICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHByb2plY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcm9qZWN0XCIpO1xuICBwcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3QgOiBcIjtcblxuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0XCIpO1xuICBwcm9qZWN0SW5wdXQudmFsdWUgPSB0YXNrLmdldFByb2plY3QoKTtcblxuICBjb25zdCBjdXJyZW50UHJvamVjdE5hbWUgPSB0YXNrLmdldFByb2plY3QoKTtcblxuICBhbGxQcm9qZWN0cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24udmFsdWUgPSBlbGVtZW50Lm5hbWU7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gZWxlbWVudC5uYW1lO1xuICAgIHByb2plY3RJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIGlmIChvcHRpb24udmFsdWUgPT09IGN1cnJlbnRQcm9qZWN0TmFtZSkge1xuICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwic2VsZWN0ZWRcIik7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWJtaXQudGV4dENvbnRlbnQgPSBcIkVkaXQgVGFza1wiO1xuXG4gIGZvcm0uYXBwZW5kKFxuICAgIG5hbWVMYWJlbCxcbiAgICBuYW1lSW5wdXQsXG4gICAgZGVzY0xhYmVsLFxuICAgIGRlc2NJbnB1dCxcbiAgICBkdWVEYXRlLFxuICAgIGR1ZURhdGVJbnB1dCxcbiAgICB0aW1lTGFiZWwsXG4gICAgdGltZUlucHV0LFxuICAgIG5vdGVMYWJlbCxcbiAgICBub3RlSW5wdXQsXG4gICAgcHJvamVjdExhYmVsLFxuICAgIHByb2plY3RJbnB1dCxcbiAgICBzdWJtaXRcbiAgKTtcblxuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGFzay5zZXRUaXRsZShuYW1lSW5wdXQudmFsdWUpO1xuICAgIHRhc2suc2V0RGVzY3JpcHRpb24oZGVzY0lucHV0LnZhbHVlKTtcbiAgICB0YXNrLnNldER1ZURhdGUoZHVlRGF0ZUlucHV0LnZhbHVlKTtcbiAgICB0YXNrLnNldFRpbWVBbGxvY2F0ZSh0aW1lSW5wdXQudmFsdWUpO1xuICAgIHRhc2suc2V0Tm90ZXMobm90ZUlucHV0LnZhbHVlKTtcbiAgICB0YXNrLnNldFByb2plY3QocHJvamVjdElucHV0LnZhbHVlKTtcblxuICAgIHNvcnRBbmREaXNwbGF5VGFza3MoY3VycmVudFByb2plY3QpO1xuICAgIGFkZFRhc2tzVG9TdG9yYWdlKCk7XG5cbiAgICB0b2dnbGVCYWNrZ3JvdW5kQmx1cigpO1xuICAgIGZvcm0ucmVtb3ZlKCk7XG4gIH0pO1xufTtcblxuY29uc3QgZGlzcGxheUluZm9Qb3BVcCA9ICh0YXNrKSA9PiB7XG4gIHRvZ2dsZUJhY2tncm91bmRCbHVyKCk7XG5cbiAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IGhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvbGRlci5pbm5lckhUTUwgPSB0YXNrLmdldEluZm8oKTtcbiAgaG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWluZm8tcG9wdXBcIik7XG5cbiAgY29uc3QgcmVtb3ZlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHJlbW92ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInJlbW92ZS1wb3B1cFwiKTtcbiAgcmVtb3ZlRWxlbWVudC50ZXh0Q29udGVudCA9IFwiWFwiO1xuXG4gIGhvbGRlci5hcHBlbmRDaGlsZChyZW1vdmVFbGVtZW50KTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGhvbGRlcik7XG5cbiAgcmVtb3ZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRvZ2dsZUJhY2tncm91bmRCbHVyKCk7XG4gICAgaG9sZGVyLnJlbW92ZSgpO1xuICB9KTtcbn07XG5cbmNvbnN0IGVkaXRDaGVja1N0YXQgPSAodGFzaywgYnRuKSA9PiB7XG4gIGNvbnN0IGVkaXRUaGlzID0gdGFzaztcbiAgY29uc3QgbGluZVRocm91Z2ggPVxuICAgIGJ0bi5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpO1xuICBjb25zdCBlbnRpcmVUb0RPID0gYnRuLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gIGlmIChlZGl0VGhpcy5nZXRDaGVja1N0YXQoKSkge1xuICAgIGVkaXRUaGlzLnNldENoZWNrU3RhdChmYWxzZSk7XG5cbiAgICBidG4uY2xhc3NMaXN0LmFkZChcImZhbHNlLXRhc2tcIik7XG4gICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJkb25lLXRhc2tcIik7XG4gICAgYnRuLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBsaW5lVGhyb3VnaC5jbGFzc0xpc3QucmVtb3ZlKFwiZG9uZS10aXRsZVwiKTtcbiAgICBlbnRpcmVUb0RPLmNsYXNzTGlzdC5yZW1vdmUoXCJkb25lLWVudGlyZS10YXNrXCIpO1xuXG4gICAgYWRkVGFza3NUb1N0b3JhZ2UoKTtcbiAgICBzb3J0QW5kRGlzcGxheVRhc2tzKGN1cnJlbnRQcm9qZWN0KTtcbiAgfSBlbHNlIHtcbiAgICBlZGl0VGhpcy5zZXRDaGVja1N0YXQodHJ1ZSk7XG5cbiAgICBidG4uY2xhc3NMaXN0LmFkZChcImRvbmUtdGFza1wiKTtcbiAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcImZhbHNlLXRhc2tcIik7XG4gICAgYnRuLmlubmVySFRNTCArPVxuICAgICAgJzxzdmcgY2xhc3M9XCJjaGVjay1tYXJrXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2hlY2stYm9sZDwvdGl0bGU+PHBhdGggZD1cIk05LDIwLjQyTDIuNzksMTQuMjFMNS42MiwxMS4zOEw5LDE0Ljc3TDE4Ljg4LDQuODhMMjEuNzEsNy43MUw5LDIwLjQyWlwiIC8+PC9zdmc+JztcblxuICAgIGxpbmVUaHJvdWdoLmNsYXNzTGlzdC5hZGQoXCJkb25lLXRpdGxlXCIpO1xuICAgIGVudGlyZVRvRE8uY2xhc3NMaXN0LmFkZChcImRvbmUtZW50aXJlLXRhc2tcIik7XG5cbiAgICBhZGRUYXNrc1RvU3RvcmFnZSgpO1xuICAgIHNvcnRBbmREaXNwbGF5VGFza3MoY3VycmVudFByb2plY3QpO1xuICB9XG59O1xuXG5jb25zdCBjaGVja1N0YXQgPSAoKSA9PiB7XG4gIGNvbnN0IGdldENoZWNrU3RhdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoZWNrLXN0YXRcIik7XG4gIGdldENoZWNrU3RhdEJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgY29uc3QgdGFzayA9IGFsbFRvRG9bYnRuLmlkXTtcbiAgICBjb25zdCBsaW5lVGhyb3VnaCA9XG4gICAgICBidG4ucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKTtcbiAgICBjb25zdCBlbnRpcmVUb0RPID0gYnRuLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIGlmICh0YXNrLmdldENoZWNrU3RhdCgpKSB7XG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImRvbmUtdGFza1wiKTtcbiAgICAgIGJ0bi5pbm5lckhUTUwgKz1cbiAgICAgICAgJzxzdmcgY2xhc3MgPSBcImNoZWNrLW1hcmtcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5jaGVjay1ib2xkPC90aXRsZT48cGF0aCBkPVwiTTksMjAuNDJMMi43OSwxNC4yMUw1LjYyLDExLjM4TDksMTQuNzdMMTguODgsNC44OEwyMS43MSw3LjcxTDksMjAuNDJaXCIgLz48L3N2Zz4nO1xuICAgICAgbGluZVRocm91Z2guY2xhc3NMaXN0LmFkZChcImRvbmUtdGl0bGVcIik7XG4gICAgICBlbnRpcmVUb0RPLmNsYXNzTGlzdC5hZGQoXCJkb25lLWVudGlyZS10YXNrXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImZhbHNlLXRhc2tcIik7XG4gICAgICBidG4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgbGluZVRocm91Z2guY2xhc3NMaXN0LnJlbW92ZShcImRvbmUtdGl0bGVcIik7XG4gICAgICBlbnRpcmVUb0RPLmNsYXNzTGlzdC5yZW1vdmUoXCJkb25lLWVudGlyZS10YXNrXCIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCByYWRpb0J1dHRvbkRpc3BsYXkgPSAoKSA9PiB7XG4gIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJpb3JpdHktYnV0dG9uXCIpO1xuICBwcmlvcml0eUJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgY29uc3QgdGFzayA9IGFsbFRvRG9bYnRuLmlkXTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSB0YXNrLmdldFByaW9yaXR5KCk7XG4gICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtcHJpb3JpdHlcIik7XG5cbiAgICBpZiAoYnRuLmRhdGFzZXQucHJpb3JpdHkgPT09IHRhc2tQcmlvcml0eSkge1xuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcHJpb3JpdHlcIik7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGVkaXRQcmlvcml0eUJ1dHRvbnMgPSAodGFza0luQWxsVG9EbywgYnV0dG9uSXRzZWxmKSA9PiB7XG4gIGNvbnN0IHRhc2sgPSB0YXNrSW5BbGxUb0RvO1xuICBpZiAoYnV0dG9uSXRzZWxmLmRhdGFzZXQucHJpb3JpdHkgPT09IFwib25lXCIpIHtcbiAgICB0YXNrLnNldFByaW9yaXR5KFwib25lXCIpO1xuICAgIHNvcnRBbmREaXNwbGF5VGFza3MoY3VycmVudFByb2plY3QpO1xuICAgIHJhZGlvQnV0dG9uRGlzcGxheSgpO1xuICB9IGVsc2UgaWYgKGJ1dHRvbkl0c2VsZi5kYXRhc2V0LnByaW9yaXR5ID09PSBcInR3b1wiKSB7XG4gICAgdGFzay5zZXRQcmlvcml0eShcInR3b1wiKTtcbiAgICBzb3J0QW5kRGlzcGxheVRhc2tzKGN1cnJlbnRQcm9qZWN0KTtcbiAgICByYWRpb0J1dHRvbkRpc3BsYXkoKTtcbiAgfSBlbHNlIGlmIChidXR0b25JdHNlbGYuZGF0YXNldC5wcmlvcml0eSA9PT0gXCJ0aHJlZVwiKSB7XG4gICAgdGFzay5zZXRQcmlvcml0eShcInRocmVlXCIpO1xuICAgIHNvcnRBbmREaXNwbGF5VGFza3MoY3VycmVudFByb2plY3QpO1xuICAgIHJhZGlvQnV0dG9uRGlzcGxheSgpO1xuICB9XG4gIGFkZFRhc2tzVG9TdG9yYWdlKCk7XG59O1xuXG5jb25zdCBnZXRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgY29uc3QgZGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlLWJ0blwiKTtcbiAgZGVsZXRlQnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgZGVsZXRlVGFzayhldmVudC5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgICAgIGFkZFRhc2tzVG9TdG9yYWdlKCk7XG4gICAgICBzb3J0QW5kRGlzcGxheVRhc2tzKGN1cnJlbnRQcm9qZWN0KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgZ2V0SW5mb0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmluZm8tYnRuXCIpO1xuICBnZXRJbmZvQnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgZGlzcGxheUluZm9Qb3BVcChhbGxUb0RvW2V2ZW50LmN1cnJlbnRUYXJnZXQuaWRdKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgZ2V0RWRpdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkaXQtdGFza1wiKTtcbiAgZ2V0RWRpdEJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGVkaXRUYXNrUG9wVXAoYWxsVG9Eb1tldmVudC5jdXJyZW50VGFyZ2V0LmlkXSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IGdldENoZWNrU3RhdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoZWNrLXN0YXRcIik7XG4gIGdldENoZWNrU3RhdEJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGVkaXRDaGVja1N0YXQoYWxsVG9Eb1tldmVudC5jdXJyZW50VGFyZ2V0LmlkXSwgYnRuKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgcHJpb3JpdHlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmlvcml0eS1idXR0b25cIik7XG4gIHByaW9yaXR5QnV0dG9ucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1wcmlvcml0eVwiKTtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgZWRpdFByaW9yaXR5QnV0dG9ucyhhbGxUb0RvW2V2ZW50LmN1cnJlbnRUYXJnZXQuaWRdLCBidG4pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGRpc2lwbGF5T25ET00gPSAoaW5kZXhEaXNwbGF5LCBpKSA9PiB7XG4gIGNvbnN0IGhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1ob2xkZXJcIik7XG5cbiAgY29uc3QgZWFjaFRvRG9Ib2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlYWNoVG9Eb0hvbGRlci5jbGFzc0xpc3QuYWRkKFwidG8tZG9cIik7XG4gIGVhY2hUb0RvSG9sZGVyLmlkID0gaTtcblxuICBob2xkZXIuYXBwZW5kQ2hpbGQoZWFjaFRvRG9Ib2xkZXIpO1xuXG4gIGNvbnN0IGluZGV4T2ZUYXNrID0gYWxsVG9Eby5pbmRleE9mKGluZGV4RGlzcGxheSk7XG5cbiAgY29uc3QgZGF0ZSA9IGZvcm1hdChwYXJzZUlTTyhpbmRleERpc3BsYXkuZHVlRGF0ZSksIFwiTU0vZGQveXl5eVwiKTtcblxuICBlYWNoVG9Eb0hvbGRlci5pbm5lckhUTUwgKz0gYCAgXG4gIDxkaXYgY2xhc3M9XCJsZWZ0LXNpZGVcIj4gXG4gICAgICA8ZGl2IGNsYXNzPVwiZG9uZVwiPjxidXR0b24gY2xhc3M9XCJjaGVjay1zdGF0XCIgaWQ9XCIke2luZGV4T2ZUYXNrfVwiPjwvYnV0dG9uPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJsZWZ0LXRhc2staXRlbXNcIj5cbiAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz48cCBpZD1cInRpdGxlXCI+JHtpbmRleERpc3BsYXkudGl0bGV9PC9wPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImR1ZVwiPjxwPkR1ZTogJHtkYXRlfTwvcD48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJyaWdodC10YXNrLWl0ZW1zXCI+XG4gICAgPGRpdiBjbGFzcz1cInByaW9yaXR5XCI+PGJ1dHRvbiBkYXRhLXByaW9yaXR5PVwib25lXCIgaWQ9JHtpbmRleE9mVGFza30gY2xhc3M9XCJwcmlvcml0eS1idXR0b25cIj48L2J1dHRvbj48YnV0dG9uIGRhdGEtcHJpb3JpdHk9XCJ0d29cIiBpZD0ke2luZGV4T2ZUYXNrfSBjbGFzcz1cInByaW9yaXR5LWJ1dHRvblwiPjwvYnV0dG9uPjxidXR0b24gZGF0YS1wcmlvcml0eT1cInRocmVlXCIgaWQ9JHtpbmRleE9mVGFza30gY2xhc3M9XCJwcmlvcml0eS1idXR0b25cIj48L2J1dHRvbj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZWRpdFwiPjxidXR0b24gY2xhc3M9ZWRpdC10YXNrIGlkPSR7aW5kZXhPZlRhc2t9PjxzdmcgY2xhc3M9XCJlZGl0LWltYWdlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTE4LjEzIDEyTDE5LjM5IDEwLjc0QzE5LjgzIDEwLjMgMjAuMzkgMTAuMDYgMjEgMTBWOUwxNSAzSDVDMy44OSAzIDMgMy44OSAzIDVWMTlDMyAyMC4xIDMuODkgMjEgNSAyMUgxMVYxOS4xM0wxMS4xMyAxOUg1VjVIMTJWMTJIMTguMTNNMTQgNC41TDE5LjUgMTBIMTRWNC41TTE5LjEzIDEzLjgzTDIxLjE3IDE1Ljg3TDE1LjA0IDIySDEzVjE5Ljk2TDE5LjEzIDEzLjgzTTIyLjg1IDE0LjE5TDIxLjg3IDE1LjE3TDE5LjgzIDEzLjEzTDIwLjgxIDEyLjE1QzIxIDExLjk1IDIxLjMzIDExLjk1IDIxLjUzIDEyLjE1TDIyLjg1IDEzLjQ3QzIzLjA1IDEzLjY3IDIzLjA1IDE0IDIyLjg1IDE0LjE5WlwiIC8+PC9zdmc+PC9idXR0b24+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImdldC1pbmZvcm1hdGlvblwiPjxidXR0b24gY2xhc3M9aW5mby1idG4gaWQ9JHtpbmRleE9mVGFza30+PHN2ZyBjbGFzcz1cImluZm8taW1hZ2VcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNNSAzSDE5QzIwLjEgMyAyMSAzLjg5IDIxIDVWMTlDMjEgMTkuNTMgMjAuNzkgMjAuMDQgMjAuNDEgMjAuNDFDMjAuMDQgMjAuNzkgMTkuNTMgMjEgMTkgMjFINUM0LjQ3IDIxIDMuOTYgMjAuNzkgMy41OSAyMC40MUMzLjIxIDIwLjA0IDMgMTkuNTMgMyAxOVY1QzMgMy44OSAzLjg5IDMgNSAzTTEzIDlWN0gxMVY5SDEzTTEzIDE3VjExSDExVjE3SDEzWlwiIC8+PC9zdmc+PC9idXR0b24+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImRlbGV0ZVwiPjxidXR0b24gY2xhc3M9ZGVsZXRlLWJ0biBpZD0ke2luZGV4T2ZUYXNrfT48c3ZnIGNsYXNzPVwiZGVsZXRlLWltZ1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk05LDdIMTFMMTIsOS41TDEzLDdIMTVMMTMsMTJMMTUsMTdIMTNMMTIsMTQuNUwxMSwxN0g5TDExLDEyTDksN00xMiwyQTEwLDEwIDAgMCwxIDIyLDEyQTEwLDEwIDAgMCwxIDEyLDIyQTEwLDEwIDAgMCwxIDIsMTJBMTAsMTAgMCAwLDEgMTIsMk0xMiw0QTgsOCAwIDAsMCA0LDEyQTgsOCAwIDAsMCAxMiwyMEE4LDggMCAwLDAgMjAsMTJBOCw4IDAgMCwwIDEyLDRaXCIgLz48L3N2Zz48L2J1dHRvbj48L2Rpdj5cbiAgPC9kaXY+YDtcbn07XG5cbmNvbnN0IGNyZWF0ZUVtcHR5RGlzcGxheSA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdCA9IGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XTtcblxuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2staG9sZGVyXCIpO1xuICBjb25zdCBlbXB0eURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGVtcHR5RGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZW1wdHktZGlzcGxheVwiKTtcbiAgZW1wdHlEaXNwbGF5LnRleHRDb250ZW50ID0gYCR7cHJvamVjdC5nZXROYW1lKCl9IGhhcyBubyB0YXNrcywgZ28gYWRkIHNvbWUhYDtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGVtcHR5RGlzcGxheSk7XG5cbiAgaWYgKGN1cnJlbnRQcm9qZWN0ID09PSBcIjBcIikge1xuICAgIGVtcHR5RGlzcGxheS50ZXh0Q29udGVudCA9IFwiTm8gdGFza3MgYXQgYWxsPyBMZXRzIGdldCB0aGlzIGdvaW5nXCI7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlIFByb2plY3RcIjtcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvalwiKTtcblxuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBkZWxldGVQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KTtcbiAgICBoaWdobGlnaHRBbGxUYXNrT25ET00oKTtcbiAgICBhZGRQcm9qZWN0c1RvU3RvcmUoKTtcbiAgICBjbGVhckFuZERpc3BsYXlQcm9qZWN0cygpO1xuICB9KTtcbn07XG5cbmNvbnN0IG5vbkNoZWNrZWRJdGVtcyA9IChkaXNwbGF5KSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGlzcGxheS5wcm9qZWN0VG9Eby5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChkaXNwbGF5LnByb2plY3RUb0RvW2ldLmdldENoZWNrU3RhdCgpID09PSBmYWxzZSkge1xuICAgICAgZGlzaXBsYXlPbkRPTShkaXNwbGF5LnByb2plY3RUb0RvW2ldLCBpKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGNoZWNrSXRlbXMgPSAoZGlzcGxheSkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRpc3BsYXkucHJvamVjdFRvRG8ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoZGlzcGxheS5wcm9qZWN0VG9Eb1tpXS5nZXRDaGVja1N0YXQoKSA9PT0gdHJ1ZSkge1xuICAgICAgZGlzaXBsYXlPbkRPTShkaXNwbGF5LnByb2plY3RUb0RvW2ldLCBpKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGxvb3BUaHJvdWdoVGFza3MgPSAoaW5kZXgpID0+IHtcbiAgY29uc3QgZGlzcGxheSA9IGFsbFByb2plY3RzW2luZGV4XTtcbiAgaWYgKGRpc3BsYXkuZ2V0UHJvamVjdHMoKS5sZW5ndGggPT09IDApIHtcbiAgICBjcmVhdGVFbXB0eURpc3BsYXkoKTtcbiAgfVxuICBub25DaGVja2VkSXRlbXMoZGlzcGxheSk7XG4gIGNoZWNrSXRlbXMoZGlzcGxheSk7XG59O1xuXG5jb25zdCBjaGVja0VtcHR5RGl2Rm9yTmF2ID0gKHRleHQpID0+IHtcbiAgY29uc3QgZGlzcGxheUhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1ob2xkZXJcIik7XG4gIGlmIChkaXNwbGF5SG9sZGVyLmNoaWxkRWxlbWVudENvdW50ID09PSAwKSB7XG4gICAgY29uc3QgZW1wdHlEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGVtcHR5RGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiZW1wdHktZGlzcGxheVwiKTtcbiAgICBlbXB0eURpc3BsYXkudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGRpc3BsYXlIb2xkZXIuYXBwZW5kQ2hpbGQoZW1wdHlEaXNwbGF5KTtcbiAgfVxufTtcblxuY29uc3QgY2hlY2tEYXRlc09mVGFza3MgPSAoKSA9PiB7XG4gIGNvbnN0IGdldFRvZGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGZvcm1hdChnZXRUb2RheSwgXCJNTS9kZC95eXl5XCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFRvRG8ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBkYXRlID0gZm9ybWF0KHBhcnNlSVNPKGFsbFRvRG9baV0uZ2V0RHVlRGF0ZSgpKSwgXCJNTS9kZC95eXl5XCIpO1xuICAgIGlmIChkYXRlID09PSBmb3JtYXR0ZWREYXRlKSB7XG4gICAgICBkaXNpcGxheU9uRE9NKGFsbFRvRG9baV0sIGkpO1xuICAgIH1cbiAgfVxuICBjaGVja0VtcHR5RGl2Rm9yTmF2KFwiTm8gdGFza3MgZHVlIHRvZGF5LCBuaWNlIGpvYiFcIik7XG59O1xuXG5jb25zdCBjaGVja0ZvckN1cnJlbnRXZWVrID0gKCkgPT4ge1xuICBjb25zdCBnZXRUb2RheSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGZpbmRXZWVrID0gZ2V0V2VlayhnZXRUb2RheSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsVG9Eby5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHRhc2tXZWVrID0gZ2V0V2VlayhwYXJzZUlTTyhhbGxUb0RvW2ldLmdldER1ZURhdGUoKSkpO1xuICAgIGlmICh0YXNrV2VlayA9PT0gZmluZFdlZWspIHtcbiAgICAgIGRpc2lwbGF5T25ET00oYWxsVG9Eb1tpXSwgaSk7XG4gICAgfVxuICB9XG4gIGNoZWNrRW1wdHlEaXZGb3JOYXYoXCJObyB0YXNrcyBkdWUgdGhpcyB3ZWVrLCBlbmpveSBpdCFcIik7XG59O1xuXG5jb25zdCBwcmlvck9uZSA9ICgpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUb0RvLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGFsbFRvRG9baV0uZ2V0UHJpb3JpdHkoKSA9PT0gXCJvbmVcIikge1xuICAgICAgZGlzaXBsYXlPbkRPTShhbGxUb0RvW2ldLCBpKTtcbiAgICB9XG4gIH1cbn07XG5jb25zdCBwcmlvclR3byA9ICgpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUb0RvLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGFsbFRvRG9baV0uZ2V0UHJpb3JpdHkoKSA9PT0gXCJ0d29cIikge1xuICAgICAgZGlzaXBsYXlPbkRPTShhbGxUb0RvW2ldLCBpKTtcbiAgICB9XG4gIH1cbn07XG5jb25zdCBwcmlvclRocmVlID0gKCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFRvRG8ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoYWxsVG9Eb1tpXS5nZXRQcmlvcml0eSgpID09PSBcInRocmVlXCIpIHtcbiAgICAgIGRpc2lwbGF5T25ET00oYWxsVG9Eb1tpXSwgaSk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBzb3J0QnlQcmlvcml0eSA9ICgpID0+IHtcbiAgcHJpb3JPbmUoKTtcbiAgcHJpb3JUd28oKTtcbiAgcHJpb3JUaHJlZSgpO1xufTtcblxuY29uc3QgcmVtb3ZlQ3JlYXRlVGFzayA9ICgpID0+IHtcbiAgY29uc3QgYnV0dG9uQ3JlYXRlVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlVG9Eb1wiKTtcbiAgYnV0dG9uQ3JlYXRlVGFzay5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufTtcblxuY29uc3QgYWRkQmFja0NyZWF0ZVRhc2sgPSAoKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbkNyZWF0ZVRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NyZWF0ZVRvRG9cIik7XG4gIGJ1dHRvbkNyZWF0ZVRhc2suY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbn07XG5cbmNvbnN0IHNvcnRBbmREaXNwbGF5VGFza3MgPSAocHJvamVjdCkgPT4ge1xuICBwcm9qZWN0U29ydCgpO1xuICBjbGVhclRvRG9EaXNwbGF5KCk7XG5cbiAgc3dpdGNoIChwcm9qZWN0KSB7XG4gICAgY2FzZSBcInRvZGF5XCI6XG4gICAgICBjaGVja0RhdGVzT2ZUYXNrcygpO1xuICAgICAgcmVtb3ZlQ3JlYXRlVGFzaygpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIndlZWtcIjpcbiAgICAgIGNoZWNrRm9yQ3VycmVudFdlZWsoKTtcbiAgICAgIHJlbW92ZUNyZWF0ZVRhc2soKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJwcmlvcml0eVwiOlxuICAgICAgc29ydEJ5UHJpb3JpdHkoKTtcbiAgICAgIHJlbW92ZUNyZWF0ZVRhc2soKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBsb29wVGhyb3VnaFRhc2tzKHByb2plY3QpO1xuICAgICAgYWRkQmFja0NyZWF0ZVRhc2soKTtcbiAgfVxuXG4gIGdldEV2ZW50TGlzdGVuZXJzKCk7XG4gIHNlbGVjdGVkUHJvaigpO1xuICBhZGRQcm9qZWN0VGl0bGVUb0RPTSgpO1xuICBjaGVja1N0YXQoKTtcbiAgcmFkaW9CdXR0b25EaXNwbGF5KCk7XG59O1xuXG5leHBvcnQge1xuICBzb3J0QW5kRGlzcGxheVRhc2tzLFxuICBjaGVja0RhdGVzT2ZUYXNrcyxcbiAgY2xlYXJUb0RvRGlzcGxheSxcbiAgY2hlY2tGb3JDdXJyZW50V2VlayxcbiAgc29ydEJ5UHJpb3JpdHksXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tbG9vcC1mdW5jICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzICovXG5pbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IGNsZWFyVG9Eb0Rpc3BsYXksIHNvcnRBbmREaXNwbGF5VGFza3MgfSBmcm9tIFwiLi9kaXNwbGF5QWxsVGFza3NcIjtcbmltcG9ydCB7IGFkZFByb2plY3RzVG9TdG9yZSwgYWRkVGFza3NUb1N0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyBhbGxUb0RvIH0gZnJvbSBcIi4vdG9Eb1wiO1xuXG5sZXQgY3VycmVudFByb2plY3QgPSBcIjBcIjtcblxuY29uc3QgY2hhbmdlQ3VycmVudFByb2plY3QgPSAocHJvamVjdE51bWJlcikgPT4ge1xuICBjdXJyZW50UHJvamVjdCA9IHByb2plY3ROdW1iZXI7XG4gIHJldHVybiBjdXJyZW50UHJvamVjdDtcbn07XG5cbmNvbnN0IGNsZWFyUHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IGhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtaG9sZGVyXCIpO1xuICB3aGlsZSAoaG9sZGVyLmZpcnN0Q2hpbGQpIHtcbiAgICBob2xkZXIucmVtb3ZlQ2hpbGQoaG9sZGVyLmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuXG5jb25zdCBkaXNwbGF5UHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWhvbGRlclwiKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBhbGxQcm9qZWN0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHByb2plY3QudGV4dENvbnRlbnQgPSBhbGxQcm9qZWN0c1tpXS5nZXROYW1lKCk7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICBwcm9qZWN0LmlkID0gaTtcblxuICAgIHByb2plY3RIb2xkZXIuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG5cbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjaGFuZ2VDdXJyZW50UHJvamVjdChwcm9qZWN0LmlkKTtcbiAgICAgIHNvcnRBbmREaXNwbGF5VGFza3MoY3VycmVudFByb2plY3QpO1xuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCBjbGVhckFuZERpc3BsYXlQcm9qZWN0cyA9ICgpID0+IHtcbiAgY2xlYXJQcm9qZWN0cygpO1xuICBkaXNwbGF5UHJvamVjdHMoKTtcbn07XG5cbmNvbnN0IG5hdkJhckV2ZW50cyA9ICgpID0+IHtcbiAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FsbFwiKTtcbiAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZGF5XCIpO1xuICBjb25zdCB3ZWVrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3ZWVrXCIpO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIik7XG5cbiAgYWxsVGFza3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjaGFuZ2VDdXJyZW50UHJvamVjdChcIjBcIik7XG4gICAgY2xlYXJUb0RvRGlzcGxheSgpO1xuICAgIHNvcnRBbmREaXNwbGF5VGFza3MoY3VycmVudFByb2plY3QpO1xuICB9KTtcblxuICB0b2RheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNoYW5nZUN1cnJlbnRQcm9qZWN0KFwidG9kYXlcIik7XG4gICAgY2xlYXJUb0RvRGlzcGxheSgpO1xuICAgIHNvcnRBbmREaXNwbGF5VGFza3MoY3VycmVudFByb2plY3QpO1xuICB9KTtcblxuICB3ZWVrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2hhbmdlQ3VycmVudFByb2plY3QoXCJ3ZWVrXCIpO1xuICAgIGNsZWFyVG9Eb0Rpc3BsYXkoKTtcbiAgICBzb3J0QW5kRGlzcGxheVRhc2tzKGN1cnJlbnRQcm9qZWN0KTtcbiAgfSk7XG5cbiAgcHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjaGFuZ2VDdXJyZW50UHJvamVjdChcInByaW9yaXR5XCIpO1xuICAgIGNsZWFyVG9Eb0Rpc3BsYXkoKTtcbiAgICBzb3J0QW5kRGlzcGxheVRhc2tzKGN1cnJlbnRQcm9qZWN0KTtcbiAgfSk7XG59O1xuXG5jb25zdCByZUFzc2lnblByb2plY3RzID0gKHRhc2tzLCBuZXdQcm9qZWN0KSA9PiB7XG4gIGNvbnN0IHRhc2tBcnJheSA9IHRhc2tzO1xuICB0YXNrQXJyYXkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmdldFByb2plY3QoKSA9PT0gYWxsUHJvamVjdHNbY3VycmVudFByb2plY3RdLmdldE5hbWUoKSkge1xuICAgICAgdGFzay5zZXRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCByZW1vdmVOYW1lQ2hhbmdlRm9ybSA9ICgpID0+IHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhbmdlLXByb2otbmFtZVwiKSA9PT0gbnVsbCkge1xuICAgIC8qIGVtcHR5ICovXG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGFuZ2UtcHJvai1uYW1lXCIpLnJlbW92ZSgpO1xuICB9XG59O1xuXG5jb25zdCBjaGFuZ2VQcm9qTmFtZSA9IChldmVudCkgPT4ge1xuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2otZGlzcGxheS1jb250YWluZXJcIik7XG4gIGlmIChjdXJyZW50UHJvamVjdCA9PT0gXCIwXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY3VycmVudFByb2ogPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF0uZ2V0TmFtZSgpO1xuICBjb25zdCBmb3JtSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBmb3JtSG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJjaGFuZ2UtcHJvai1uYW1lLWZvcm1cIik7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiY2hhbmdlLXByb2otbmFtZVwiKTtcblxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQudmFsdWUgPSBjdXJyZW50UHJvajtcbiAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0LnRleHRDb250ZW50ID0gXCIrXCI7XG5cbiAgZm9ybS5hcHBlbmQoaW5wdXQsIHN1Ym1pdCk7XG5cbiAgZXZlbnQudGFyZ2V0LnRleHRDb250ZW50ID0gXCJcIjtcblxuICBmb3JtSG9sZGVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICBwYXJlbnQuYXBwZW5kKGZvcm1Ib2xkZXIpO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcInN1Ym1pdFwiLFxuICAgIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZUFzc2lnblByb2plY3RzKGFsbFRvRG8sIGlucHV0LnZhbHVlKTtcbiAgICAgIGFsbFByb2plY3RzW2N1cnJlbnRQcm9qZWN0XS5zZXROYW1lKGlucHV0LnZhbHVlKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgICAgYWRkUHJvamVjdFRpdGxlVG9ET00oKTtcbiAgICAgIGNsZWFyQW5kRGlzcGxheVByb2plY3RzKCk7XG4gICAgICBhZGRQcm9qZWN0c1RvU3RvcmUoKTtcbiAgICAgIGFkZFRhc2tzVG9TdG9yYWdlKCk7XG4gICAgICBmb3JtLnJlbW92ZSgpO1xuICAgIH0sXG4gICAgeyBvbmNlOiB0cnVlIH1cbiAgKTtcbn07XG5cbmNvbnN0IGFkZFByb2plY3RUaXRsZVRvRE9NID0gKCkgPT4ge1xuICBjb25zdCB0aXRsZURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2otZGlzcGxheVwiKTtcblxuICBpZiAoXG4gICAgY3VycmVudFByb2plY3QgPT09IFwid2Vla1wiIHx8XG4gICAgY3VycmVudFByb2plY3QgPT09IFwidG9kYXlcIiB8fFxuICAgIGN1cnJlbnRQcm9qZWN0ID09PSBcInByaW9yaXR5XCJcbiAgKSB7XG4gICAgdGl0bGVEaXNwbGF5LnRleHRDb250ZW50ID1cbiAgICAgIGN1cnJlbnRQcm9qZWN0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgY3VycmVudFByb2plY3Quc3Vic3RyaW5nKDEpO1xuICAgIHRpdGxlRGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKFwiY2FuLWVkaXQtbmFtZVwiKTtcbiAgfSBlbHNlIHtcbiAgICB0aXRsZURpc3BsYXkudGV4dENvbnRlbnQgPSBhbGxQcm9qZWN0c1tjdXJyZW50UHJvamVjdF0uZ2V0TmFtZSgpO1xuICAgIHRpdGxlRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiY2FuLWVkaXQtbmFtZVwiKTtcbiAgfVxuXG4gIGlmIChjdXJyZW50UHJvamVjdCA9PT0gXCIwXCIpIHtcbiAgICB0aXRsZURpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcImNhbi1lZGl0LW5hbWVcIik7XG4gIH1cbiAgcmVtb3ZlTmFtZUNoYW5nZUZvcm0oKTtcbiAgdGl0bGVEaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VQcm9qTmFtZSk7XG59O1xuXG5jb25zdCBzZWxlY3RlZFByb2ogPSAoKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XG4gIGJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xuICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICB9XG4gICAgaWYgKGJ0bi5pZCA9PT0gY3VycmVudFByb2plY3QudG9TdHJpbmcoKSkge1xuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICB9IGVsc2UgaWYgKGJ0bi5pZCA9PT0gXCJhbGxcIiAmJiBjdXJyZW50UHJvamVjdCA9PT0gXCIwXCIpIHtcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGhpZ2hsaWdodEFsbFRhc2tPbkRPTSA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbGxcIikuY2xpY2soKTtcbn07XG5cbmV4cG9ydCB7XG4gIGNsZWFyQW5kRGlzcGxheVByb2plY3RzLFxuICBjdXJyZW50UHJvamVjdCxcbiAgbmF2QmFyRXZlbnRzLFxuICBzZWxlY3RlZFByb2osXG4gIGFkZFByb2plY3RUaXRsZVRvRE9NLFxuICBoaWdobGlnaHRBbGxUYXNrT25ET00sXG4gIGNoYW5nZUN1cnJlbnRQcm9qZWN0LFxufTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgcGFnZUxvYWQgZnJvbSBcIi4vcGFnZUxvYWRcIjtcblxucGFnZUxvYWQoKTtcbiIsImltcG9ydCB7IG5hdkJhckV2ZW50cyB9IGZyb20gXCIuL2Rpc3BsYXlQcm9qZWN0c1wiO1xuaW1wb3J0IHsgZXZlbnRMaXN0ZW5lcnMgfSBmcm9tIFwiLi9Gb3JtQ29udHJvbGxlcnNcIjtcbmltcG9ydCB7IGNoZWNrUHJvalN0b3JhZ2UsIGNoZWNrU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbi8vIGltcG9ydCBTdmcgZnJvbSBcIi4vaW1ncy9jaGVjay5zdmdcIjtcblxuY29uc3QgcGFnZUxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgYm9keS5pbm5lckhUTUwgPSBgICAgIDxkaXYgY2xhc3M9XCJtYWluLWNvbnRhaW5lclwiPlxuICAgICAgPGhlYWRlcj5cbiAgICAgIDxkaXY+XG4gICAgICA8c3ZnIGlkPVwibG9nby1zdmdcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTguNSAySDUuNUMzLjYgMiAyIDMuNiAyIDUuNVYxOC41QzIgMjAuNCAzLjYgMjIgNS41IDIySDE2TDIyIDE2VjUuNUMyMiAzLjYgMjAuNCAyIDE4LjUgMk03IDEyLjVMOC4zIDExLjFMMTAuNCAxMy4yTDE1LjYgOEwxNyA5LjRMMTAuNSAxNkw3IDEyLjVNMTUgMjBWMTguNUMxNSAxNi42IDE2LjYgMTUgMTguNSAxNUgyMEwxNSAyMFpcIi8+PC9zdmc+XG4gICAgICAgIDxoMyBjbGFzcz1cImxvZ29cIj5UbyBEbyBMaXN0PC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZHJvcGRvd25cIj48ZGl2IGNsYXNzPVwiYnRuLWJ1cmdlclwiPjwvZGl2PjwvYnV0dG9uPlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNpZGViYXJcIj5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJjdXJyZW50LXRpbWVzXCI+XG4gICAgICAgICAgPGxpPjxidXR0b24gaWQ9XCJhbGxcIiBjbGFzcz1cInByb2plY3QgZGVmYXVsdC1vcHRpb25zXCI+QWxsIFRhc2tzPC9idXR0b24+PC9saT5cbiAgICAgICAgICAgIDxsaT48YnV0dG9uIGlkPVwidG9kYXlcIiBjbGFzcz1cImRlZmF1bHQtb3B0aW9ucyBwcm9qZWN0XCI+VG9kYXk8L2J1dHRvbj48L2xpPlxuICAgICAgICAgICAgPGxpPjxidXR0b24gaWQ9XCJ3ZWVrXCIgY2xhc3M9XCJkZWZhdWx0LW9wdGlvbnMgcHJvamVjdFwiPlRoaXMgV2VlazwvYnV0dG9uPjwvbGk+XG4gICAgICAgICAgICA8bGk+PGJ1dHRvbiBpZD1cInByaW9yaXR5XCIgY2xhc3M9XCJkZWZhdWx0LW9wdGlvbnMgcHJvamVjdFwiPlByaW9yaXR5PC9idXR0b24+PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0c1wiPlxuICAgICAgICAgICAgPGgzPllvdXIgUHJvamVjdHM8L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RzLWhvbGRlclwiPjwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNyZWF0ZVByb2pcIj5DcmVhdGUgTmV3IFByb2plY3Q8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0by1kby1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2otZGlzcGxheS1jb250YWluZXJcIj5cbiAgICAgICAgICA8aDMgY2xhc3M9XCJwcm9qLWRpc3BsYXlcIj48L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwiY3JlYXRlVG9Eb1wiPkNyZWF0ZSBOZXcgVGFzayArPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPXRhc2staG9sZGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5gO1xuICBuYXZCYXJFdmVudHMoKTtcbiAgY2hlY2tQcm9qU3RvcmFnZSgpO1xuICBjaGVja1N0b3JhZ2UoKTtcbiAgZXZlbnRMaXN0ZW5lcnMoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VMb2FkO1xuIiwiZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnByb2plY3RUb0RvID0gW107XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0UHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdFRvRG87XG4gIH1cbn1cblxuY29uc3QgYWxsUHJvamVjdHMgPSBbXTtcblxuY29uc3QgcHVzaFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICBhbGxQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xufTtcblxuY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IHByb2ogPSBuZXcgUHJvamVjdChuYW1lKTtcbiAgcHVzaFByb2plY3QocHJvaik7XG59O1xuXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gKGluZGV4KSA9PiB7XG4gIGFsbFByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG59O1xuXG5jb25zdCBkZWZhdWx0UHJvamVjdHMgPSAoKSA9PiB7XG4gIGNyZWF0ZU5ld1Byb2plY3QoXCJBbGxcIik7XG4gIGNyZWF0ZU5ld1Byb2plY3QoXCJTY2hvb2xcIik7XG4gIGNyZWF0ZU5ld1Byb2plY3QoXCJQZXJzb25hbFwiKTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZU5ld1Byb2plY3QsIGFsbFByb2plY3RzLCBkZWxldGVQcm9qZWN0LCBkZWZhdWx0UHJvamVjdHMgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5pbXBvcnQgeyBhbGxUb0RvIH0gZnJvbSBcIi4vdG9Eb1wiO1xuaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmNvbnN0IHJlc2V0UHJvamVjdHMgPSAoKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBhbGxQcm9qZWN0c1tpXS5wcm9qZWN0VG9EbyA9IFtdO1xuICB9XG59O1xuXG5jb25zdCBwdXNoVG9EZWZhdWx0ID0gKCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFRvRG8ubGVuZ3RoOyBpKyspIHtcbiAgICBhbGxQcm9qZWN0c1swXS5wcm9qZWN0VG9Eby5wdXNoKGFsbFRvRG9baV0pO1xuICB9XG59O1xuXG5jb25zdCBhc3NpZ25Ub0RvID0gKCkgPT4ge1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGFsbFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBhbGxQcm9qZWN0c1tpXTtcbiAgICBpZiAocHJvamVjdHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbFRvRG8ubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmIChhbGxUb0RvW2pdLnByb2plY3QgPT09IHByb2plY3RzLm5hbWUpIHtcbiAgICAgICAgcHJvamVjdHMucHJvamVjdFRvRG8ucHVzaChhbGxUb0RvW2pdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cblxuY29uc3QgcHJvamVjdFNvcnQgPSAoKSA9PiB7XG4gIHJlc2V0UHJvamVjdHMoKTtcbiAgcHVzaFRvRGVmYXVsdCgpO1xuICBhc3NpZ25Ub0RvKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0U29ydDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxuaW1wb3J0IHsgc29ydEFuZERpc3BsYXlUYXNrcyB9IGZyb20gXCIuL2Rpc3BsYXlBbGxUYXNrc1wiO1xuaW1wb3J0IHsgY2xlYXJBbmREaXNwbGF5UHJvamVjdHMgfSBmcm9tIFwiLi9kaXNwbGF5UHJvamVjdHNcIjtcbmltcG9ydCB7IGFsbFByb2plY3RzLCBkZWZhdWx0UHJvamVjdHMsIFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBhbGxUb0RvLCBkZWZhdWx0VGFza3MsIFRvRG8gfSBmcm9tIFwiLi90b0RvXCI7XG5cbi8vIFRhc2sgc3RvcmFnZVxuY29uc3QgYWRkVGFza3NUb1N0b3JhZ2UgPSAoKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWxsVGFza3NcIiwgSlNPTi5zdHJpbmdpZnkoYWxsVG9EbykpO1xufTtcblxuY29uc3QgZGlzcGxheVRhc2tzRnJvbVN0b3JlID0gKCkgPT4ge1xuICBjb25zdCBzdG9yYWdlRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbGxUYXNrc1wiKSk7XG5cbiAgc3RvcmFnZURhdGEubWFwKChkYXRhKSA9PlxuICAgIGFsbFRvRG8ucHVzaChcbiAgICAgIG5ldyBUb0RvKFxuICAgICAgICBkYXRhLnRpdGxlLFxuICAgICAgICBkYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgICBkYXRhLmR1ZURhdGUsXG4gICAgICAgIGRhdGEucHJpb3JpdHksXG4gICAgICAgIGRhdGEudGltZUFsbG9jYXRlLFxuICAgICAgICBkYXRhLm5vdGVzLFxuICAgICAgICBkYXRhLmNoZWNrU3RhdCxcbiAgICAgICAgZGF0YS5wcm9qZWN0XG4gICAgICApXG4gICAgKVxuICApO1xufTtcblxuLy8gb24gcGFnZSBsb2FkXG5jb25zdCBjaGVja1N0b3JhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFsbFRhc2tzXCIpO1xuICBpZiAoc3RvcmFnZSA9PT0gbnVsbCkge1xuICAgIGRlZmF1bHRUYXNrcygpO1xuICAgIGFkZFRhc2tzVG9TdG9yYWdlKCk7XG4gICAgc29ydEFuZERpc3BsYXlUYXNrcyhcIjBcIik7XG4gIH0gZWxzZSBpZiAoc3RvcmFnZS5sZW5ndGggIT09IDApIHtcbiAgICBkaXNwbGF5VGFza3NGcm9tU3RvcmUoKTtcbiAgICBzb3J0QW5kRGlzcGxheVRhc2tzKFwiMFwiKTtcbiAgfVxufTtcblxuLy8gUHJvamVjdCBzdG9yYWdlXG5jb25zdCBhZGRQcm9qZWN0c1RvU3RvcmUgPSAoKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlQcm9qZWN0c0Zyb21TdG9yYWdlID0gKCkgPT4ge1xuICBjb25zdCBzdG9yYWdlRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG5cbiAgc3RvcmFnZURhdGEubWFwKChkYXRhKSA9PlxuICAgIGFsbFByb2plY3RzLnB1c2gobmV3IFByb2plY3QoZGF0YS5uYW1lLCBkYXRhLnByb2plY3RUb0RvKSlcbiAgKTtcbiAgY2xlYXJBbmREaXNwbGF5UHJvamVjdHMoKTtcbn07XG5cbi8vIEZvciBwYWdlIGxvYWRcbmNvbnN0IGNoZWNrUHJvalN0b3JhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpO1xuICBpZiAoc3RvcmFnZSA9PT0gbnVsbCkge1xuICAgIGRlZmF1bHRQcm9qZWN0cygpO1xuICAgIGFkZFByb2plY3RzVG9TdG9yZSgpO1xuICAgIGNsZWFyQW5kRGlzcGxheVByb2plY3RzKCk7XG4gIH0gZWxzZSBpZiAoc3RvcmFnZS5sZW5ndGggIT09IDApIHtcbiAgICBkaXNwbGF5UHJvamVjdHNGcm9tU3RvcmFnZSgpO1xuICB9XG59O1xuXG5leHBvcnQge1xuICBhZGRUYXNrc1RvU3RvcmFnZSxcbiAgY2hlY2tTdG9yYWdlLFxuICBhZGRQcm9qZWN0c1RvU3RvcmUsXG4gIGNoZWNrUHJvalN0b3JhZ2UsXG59O1xuIiwiZXhwb3J0IGNsYXNzIFRvRG8ge1xuICBjb25zdHJ1Y3RvcihcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIHRpbWVBbGxvY2F0ZSxcbiAgICBub3RlcyxcbiAgICBjaGVja1N0YXQsXG4gICAgcHJvamVjdFxuICApIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMudGltZUFsbG9jYXRlID0gdGltZUFsbG9jYXRlO1xuICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICB0aGlzLmNoZWNrU3RhdCA9IGNoZWNrU3RhdDtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gIH1cblxuICBzZXRUaXRsZSh0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgfVxuXG4gIGdldERlc2NyaXB0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXREdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gIH1cblxuICBzZXREdWVEYXRlKGR1ZURhdGUpIHtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICB9XG5cbiAgZ2V0VGltZUFsbG9jYXRlKCkge1xuICAgIHJldHVybiB0aGlzLnRpbWVBbGxvY2F0ZTtcbiAgfVxuXG4gIHNldFRpbWVBbGxvY2F0ZSh0aW1lKSB7XG4gICAgdGhpcy50aW1lQWxsb2NhdGUgPSB0aW1lO1xuICB9XG5cbiAgc2V0UHJpb3JpdHkocHJpb3JpdHkpIHtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cblxuICBnZXRQcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgfVxuXG4gIGdldE5vdGVzKCkge1xuICAgIHJldHVybiB0aGlzLm5vdGVzO1xuICB9XG5cbiAgc2V0Tm90ZXMobm90ZXMpIHtcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gIH1cblxuICBzZXRDaGVja1N0YXQoY2hlY2tTdGF0KSB7XG4gICAgdGhpcy5jaGVja1N0YXQgPSBjaGVja1N0YXQ7XG4gIH1cblxuICBnZXRDaGVja1N0YXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tTdGF0O1xuICB9XG5cbiAgZ2V0UHJvamVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0O1xuICB9XG5cbiAgc2V0UHJvamVjdChwcm9qZWN0KSB7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxuXG4gIGdldEluZm8oKSB7XG4gICAgcmV0dXJuIGBEZXNjcmlwdGlvbjogJHt0aGlzLmRlc2NyaXB0aW9ufSA8L2JyPiBOb3RlczogJHt0aGlzLm5vdGVzfSA8L2JyPiBUaW1lIEFsbG9jYXRpb246ICR7dGhpcy50aW1lQWxsb2NhdGV9IDwvYnI+IFByb2plY3Q6ICR7dGhpcy5wcm9qZWN0fWA7XG4gIH1cbn1cblxuY29uc3QgYWxsVG9EbyA9IFtdO1xuXG5jb25zdCBwdXNoVG9EbyA9IChob2xkZXIpID0+IHtcbiAgYWxsVG9Eby5wdXNoKGhvbGRlcik7XG59O1xuXG5jb25zdCBkZWxldGVUYXNrID0gKGluZGV4KSA9PiB7XG4gIGFsbFRvRG8uc3BsaWNlKGluZGV4LCAxKTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5ld1RvRG8gPSAoXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZHVlRGF0ZSxcbiAgcHJpb3JpdHksXG4gIHRpbWVBbGxvY2F0ZSxcbiAgbm90ZXMsXG4gIGNoZWNrU3RhdCxcbiAgcHJvamVjdFxuKSA9PiB7XG4gIGNvbnN0IGhvbGRlciA9IG5ldyBUb0RvKFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgdGltZUFsbG9jYXRlLFxuICAgIG5vdGVzLFxuICAgIGNoZWNrU3RhdCxcbiAgICBwcm9qZWN0XG4gICk7XG4gIHB1c2hUb0RvKGhvbGRlcik7XG59O1xuXG5jb25zdCBkZWZhdWx0VGFza3MgPSAoKSA9PiB7XG4gIGNyZWF0ZU5ld1RvRG8oXG4gICAgXCJZb3UgY2FuIGVkaXQgdGhlIHRpdGxlIG9mIGEgcHJvamVjdCAoaGludDogY2xpY2sgU2Nob29sIG9uIHRoZSBsZWZ0LCB0aGVuIGl0cyB0aXRsZSBvbiB0aGUgdG9wISlcIixcbiAgICBcIkxvb2tzIGxpa2UgeW91IGZvdW5kIHRoZSBtb3JlIGluZm8hXCIsXG4gICAgXCIyMDIzLTA0LTA1XCIsXG4gICAgXCJvbmVcIixcbiAgICBcIjEgaG91clwiLFxuICAgIFwiQW5kIHNvbWUgbm90ZXMgY2FuIGdvIGluIGhlcmUhXCIsXG4gICAgZmFsc2UsXG4gICAgXCJQZXJzb25hbFwiXG4gICk7XG4gIGNyZWF0ZU5ld1RvRG8oXG4gICAgXCJIb21ld29ya1wiLFxuICAgIFwiTWFyayBIV1wiLFxuICAgIFwiMjAyMy0wNC0wNVwiLFxuICAgIFwib25lXCIsXG4gICAgXCIxIGhvdXJcIixcbiAgICBcIk5vIE5vdGVzXCIsXG4gICAgZmFsc2UsXG4gICAgXCJTY2hvb2xcIlxuICApO1xuICBjcmVhdGVOZXdUb0RvKFxuICAgIFwiQ29kZVwiLFxuICAgIFwiR2V0IGl0IGRvbmUgZXZlcnkgZGF5IVwiLFxuICAgIFwiMjAyMy0wMy0xMFwiLFxuICAgIFwidHdvXCIsXG4gICAgXCIyIEhvdXJzXCIsXG4gICAgXCJZb3UgY2FuIGZpZ3VyZSBpdCBvdXQhXCIsXG4gICAgdHJ1ZSxcbiAgICBcIlBlcnNvbmFsXCJcbiAgKTtcbiAgY3JlYXRlTmV3VG9EbyhcbiAgICBcIlN0dWR5IGZvciBMUkVCIGV4YW1cIixcbiAgICBcIkxvdHMgb2YgY29udGVudCBvbiBpdFwiLFxuICAgIFwiMjAyMy0wMy0yMFwiLFxuICAgIFwidHdvXCIsXG4gICAgXCIzIGhvdXJzXCIsXG4gICAgXCJObyBub3Rlc1wiLFxuICAgIHRydWUsXG4gICAgXCJTY2hvb2xcIlxuICApO1xuICBjcmVhdGVOZXdUb0RvKFxuICAgIFwiUmVhZCBhIGJvb2tcIixcbiAgICBcIkdvdHRhIGZpbmQgYSBib29rIGZpcnN0XCIsXG4gICAgXCIyMDIzLTA3LTA0XCIsXG4gICAgXCJ0aHJlZVwiLFxuICAgIFwiMSBob3VyXCIsXG4gICAgXCJObyBub3Rlc1wiLFxuICAgIGZhbHNlLFxuICAgIFwiUGVyc29uYWxcIlxuICApO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlTmV3VG9EbywgYWxsVG9EbywgZGVsZXRlVGFzaywgcHVzaFRvRG8sIGRlZmF1bHRUYXNrcyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9