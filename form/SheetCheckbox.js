﻿//复选框

(function ($) {
    $.fn.SheetCheckbox = function () {
        return $.MvcSheetUI.Run.call(this, "SheetCheckbox", arguments);

    };

    // 构造函数
    $.MvcSheetUI.Controls.SheetCheckbox = function (element, ptions, sheetInfo) {
        $.MvcSheetUI.Controls.SheetCheckbox.Base.constructor.call(this, element, ptions, sheetInfo);
    };

    // 继承及控件实现
    $.MvcSheetUI.Controls.SheetCheckbox.Inherit($.MvcSheetUI.IControl, {
        Checked: false,
        Render: function () {
            //设置默认值
        	if(this.DefaultValue == "" || this.DefaultValue == "false"){
        		this.DefaultValue = false;
        	}else if(this.DefaultValue == "true"){
        		this.DefaultValue = true;
        	}
        	
        	var thisV = false;
        	
        	if(this.V == "false" || this.V == false){
        		this.Checked = false;
        		thisV = false;
        	}else{
        		this.Checked  = true;
        		thisV = true;
        	}
            if (this.Originate) {
                this.Checked = this.DefaultValue || thisV;
                this.Element.checked = this.DefaultValue || thisV;
            }
            else {
                this.Checked = thisV;
                this.Element.checked = this.Checked;
            }
			if(this.DefaultValue){
				//如果默认值为true，则添加时选中
        		this.Element.checked=true;
        	}
            if (!this.Visiable) {
                this.Element.style.display = "none";
                return;
            }

            if (this.TrackVisiable && !this.Originate && this.DataField.indexOf(".") == -1) { this.RenderDataTrackLink(); }
            //渲染前端
            $(this.Element).unbind("mouseenter").unbind("mouseover").unbind("mouseup").unbind("mouseout");
            $(this.Element).css("cursor", "pointer");
            var divElement = $("<div class='checkbox checkbox-primary'></div>");// $("<div class='checkbox'><label>" + this.DataField + "</label></div>");
            $(this.Element).before(divElement);
            $(this.Element).appendTo(divElement);
            $("<label>" + this.Text + "</label>").appendTo(divElement);

            if (!this.Editable) {// 不可编辑
                $(this.Element).prop("disabled", true);
                return;
            }
            //绑定事件
            if (this.OnChange) {
                $(this.Element).unbind("click.SheetCheckbox").bind("click.SheetCheckbox", this, function (e) {
                    e.data.RunScript(e.data.Element, e.data.OnChange);
                });
            }
        },
        GetValue: function () {
            return this.Element.checked;
        },
        SetValue: function (value) {
            //$(this.Element).prop("checked", !!value);

            // true/false  子表导入时是字符串
            if (typeof (value) == "string" && value.toLowerCase() == "true") {
                this.Checked = true;
            } else if (typeof (value) == "boolean" && value == true) {
                this.Checked = true;
            } else {
                this.Checked = false;
            }

            this.Element.checked = this.Checked;
            if (this.IsMobile) {
                //this.Switchery.setPosition();
            }
        },
        RenderMobile: function () {
        	
        	var thisV = !(this.V == "false" || this.V == false);
        	
            //设置默认值
            if (this.Originate) {
                this.Checked = this.DefaultValue||thisV;
                this.Element.checked = this.DefaultValue||thisV;
            }
            else {
                this.Checked = thisV;
                this.Element.checked = this.Checked;
            }

            //不可见返回
            if (!this.Visiable) return;

            var _ID = $(this.Element).attr("id");
            if (!_ID) {
                _ID = $.uuid();
                $(this.Element).attr("id", _ID);
            }
            
            var title = $("<span class='checkboxtitle'></span>");
            title.text(this.Text);

            $(this.Element).parent().before(title);
            //显示为开关按钮
            $(this.Element).addClass("toggle");
            //var span = $("<span style='width: 120px!important;'></span>");
            //$(this.Element).after(span);
            //$(this.Element).appendTo(span);
            //$(span).append('<label for="' + _ID + '" data-on="" data-off=""><span></span></label>');

            if (!this.Editable) {// 不可编辑
                $(this.Element).prop("disabled", true);
            }

            if (this.Editable) {
                //this.Switchery = new Switchery(this.Element);
                // 绑定修改事件
                $(this.Element).unbind("click.SheetCheckbox").bind("click.SheetCheckbox", this, function (e) {
                   
                    e.data.RunScript(e.data.Element, e.data.OnChange);
                  
                });
            }
            else {
                // 不可编辑 
                //为不破坏控件相应功能以及避免影响其他地方的调用，此处不对控件做删除只做隐藏然后插入文本显示
                var parentLabel = $(this.Element).parent('label');
                parentLabel.children().hide(); 
                parentLabel.append(this.Checked ? "<span style='font-size:16px;'>是</span>" : "<span style='font-size:16px;'>否</span>");
            }
        },
        Validate: function () {
            return true;
        },
        SaveDataField: function () {
            var result = {};
            if (!this.Visiable || !this.Editable) return result;
            result[this.DataField] = $.MvcSheetUI.GetSheetDataItem(this.DataField);// this.SheetInfo.BizObject.DataItems[this.DataField];

            if (!result[this.DataField]) {
                if (this.DataField.indexOf(".") == -1) { alert(SheetLanguages.Current.DataItemNotExists + ":" + this.DataField); }
                return {};
            }
           // if (result[this.DataField].V != this.GetValue())
            {
                result[this.DataField].V = this.GetValue();
                return result;
            }
            if (this.Originate) {
                return result;
            }
            return {};
        }
    });
})(jQuery);