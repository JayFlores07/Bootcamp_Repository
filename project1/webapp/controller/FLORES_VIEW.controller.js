sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project1.controller.FLORES_VIEW", {
        onInit() {
            },
        onclear: function () {
            this.byId("input_name").setValue("");
            this.byId("input_street").setValue("");
            this.byId("input_no").setValue("");
            this.byId("input_zip").setValue("");
            this.byId("input_city").setValue("");
            this.byId("combo_1").setSelectedKey(""); // For ComboBox
            }
    });
});