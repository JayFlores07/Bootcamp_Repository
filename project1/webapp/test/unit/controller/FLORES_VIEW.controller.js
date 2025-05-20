/*global QUnit*/

sap.ui.define([
	"project1/controller/FLORES_VIEW.controller"
], function (Controller) {
	"use strict";

	QUnit.module("FLORES_VIEW Controller");

	QUnit.test("I should test the FLORES_VIEW controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
