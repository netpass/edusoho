define(function(require, exports, module) {
    var Validator = require('arale/validator/0.9.6/validator');

    var BootstrapValidator = Validator.extend({
        attrs: {
            explainClass: "help-block",
            itemClass: "form-group",
            itemHoverClass: "on-hover",
            itemFocusClass: "in-focus",
            itemErrorClass: "has-error",
            inputClass: "input-with-feedback",
            textareaClass: "input-with-feedback",
            showMessage: function(message, element) {
                 this.element.css("display","block");
                message = '<span class="text-danger">' + message + '</span>';
                console.log(message);
                this.getExplain(element).html(message).show();
                if(message=="") {
                    console.log("sdfsdf");
                }
                this.getItem(element).addClass(this.get("itemErrorClass"));
            }
        },
        getExplain: function(ele) {
            var item = this.getItem(ele);
            ele = $(ele);
            var explain = ele.parents('.controls').find("." + this.get("explainClass"));
           
            if (explain.length == 0) {
                var explain = $('<div class="' + this.get("explainClass") + '" style="display:none;"></div>').appendTo(ele.parents('.controls'));
            }

            $(explain).css("display", "none");

            return explain;
        }
    });

    module.exports = BootstrapValidator;
});
