sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        none: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});
