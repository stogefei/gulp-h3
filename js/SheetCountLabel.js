﻿// Label控件
(function ($) {
    //控件执行
    $.fn.SheetCountLabel = function () {
        return $.MvcSheetUI.Run.call(this, "SheetCountLabel", arguments);
    };

    $.MvcSheetUI.Controls.SheetCountLabel = function (element, options, sheetInfo) {
        $.MvcSheetUI.Controls.SheetCountLabel.Base.constructor.call(this, element, options, sheetInfo);
    };

    $.MvcSheetUI.Controls.SheetCountLabel.Inherit($.MvcSheetUI.IControl, {
        Render: function () {
            if (arguments) {
                var value = arguments[0];
                if(value == undefined) return;
                //$(this.Element).text(value);
                if (this.FormatRule) {
                    // value = this.ForMat(value);
                    this.GetFromatValue($(this.Element), value);
                }else{
                	//update by luwei ; toFixed 是Number类型的方法
                	$(this.Element).text(Number(value).toFixed(2));
                }
                // $(this.Element).text(value);
            }
        }
    });
})(jQuery);