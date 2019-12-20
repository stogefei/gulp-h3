//JS框架,JS框架加载所有JS部件，提供与后台通讯方法
SheetControls = {
    SheetAttachment: {
        DesignProperties: [
            { Name: "DataField", Text: "数据项名称", Description: "获取或设置控件绑定的数据项名称", DefaultValue: "", ValueRange: null },
            { Name: "AllowBatchDownload", Text: "批量下载", Description: "获取或设置是否允许批量下载", DefaultValue: true, ValueRange: [true, false] },
            { Name: "FileExtensions", Text: "支持扩展名", Description: "获取或设置附件上传的文件名格式,示例:.jpg,.gif", DefaultValue: "", ValueRange: null },
            { Name: "MaxUploadSize", Text: "最大上传大小", Description: "获取或设置限制文件上传的大小(MB)，默认为 10MB", DefaultValue: 10, ValueRange: null }
        ]
    },
    SheetHandwrittenSignature: {
        DesignProperties: [
            { Name: "DataField", Text: "数据项名称", Description: "获取或设置控件绑定的数据项名称", DefaultValue: "", ValueRange: null },
            { Name: "FileExtensions", Text: "支持扩展名", Description: "获取或设置附件上传的文件名格式,示例:.jpg,.gif", DefaultValue: "", ValueRange: null },
            { Name: "MaxUploadSize", Text: "最大上传大小", Description: "获取或设置限制文件上传的大小(MB)，默认为 10MB", DefaultValue: 10, ValueRange: null }
        ]
    },
    SheetCheckbox: {
        DesignProperties: [
            { Name: "DataField", Text: "数据项名称", Description: "获取或设置控件绑定的数据项名称", DefaultValue: "", ValueRange: null },
            { Name: "DefaultValue", Text: "默认值", Description: "获取或设置控件的默认值", DefaultValue: false, ValueRange: [true, false] },
            { Name: "Text", Text: "文本描述", Description: "获取或设置控件的文本说明", DefaultValue: "", ValueRange: null }
        ],
        DesignEvents: [
            { Name: "OnChange", Description: "获取或设置选项值改变事件" }
        ]
    },
    SheetCheckboxList: {
        DesignProperties: [
            { Name: "DataField", Description: "获取或设置控件绑定的数据项名称", DefaultValue: "", ValueRange: null },
            { Name: "DefaultItems", Description: "获取或设置绑定的选项值，多个值以;隔开", DefaultValue: "", ValueRange: null },
            { Name: "DisplayRule", Description: "获取或设置控件的显示规则", DefaultValue: "", ValueRange: null },
            { Name: "MasterDataCategory", Description: "获取或设置绑定的数据字典类型名称", DefaultValue: "", ValueRange: null },
            { Name: "RepeatColumns", Description: "获取或设置要在控件中显示的列数", DefaultValue: "5", ValueRange: null },
            { Name: "RepeatDirection", Description: "获取或设置组中单选按钮的显示方向", DefaultValue: "Horizontal", ValueRange: ["Horizontal", "Vertical"] },
            { Name: "SelectedValue", Description: "获取或设置控件选中的值", DefaultValue: "", ValueRange: null },
            { Name: "VaildationRule", Description: "获取或设置控件的验证规则，为True时必填!", DefaultValue: "", ValueRange: null }
        ],
        DesignEvents: [
            { Name: "OnChange", Description: "获取或设置选择和取消选择事件" }
        ]
    },
    SheetComment: {
        DesignProperties: [
            { Name: "DataField", Description: "获取或设置控件绑定的数据项名称", DefaultValue: "", ValueRange: null },
            { Name: "DefaultComment", Description: "获取或设置默认审批意见", DefaultValue: "", ValueRange: null },
            { Name: "DisplaySign", Description: "获取或设置是否显示用户签名", DefaultValue: false, ValueRange: [true, false] },
            { Name: "DisplayHead", Description: "获取或设置是否显示用户头像", DefaultValue: true, ValueRange: [true, false] },
            { Name: "DisplayBorder", Description: "获取或设置历史意见是否显示边框", DefaultValue: true, ValueRange: [true, false] },
            { Name: "FrequentCommentVisible", Description: "获取或设置是否显示常用意见", DefaultValue: true, ValueRange: [true, false] },
            { Name: "FrequentSettingVisible", Description: "获取或设置是否显示设置为常用意见", DefaultValue: true, ValueRange: [true, false] },
            { Name: "LastestCommentOnly", Description: "获取或设置是否显示最后一条意见", DefaultValue: false, ValueRange: [true, false] },
            { Name: "NullCommentTitleVisible", Description: "获取或设置当意见为空时是否显示意见标题", DefaultValue: true, ValueRange: [true, false] },
            { Name: "OUNameVisible", Description: "获取或设置是否显示OU名称", DefaultValue: false, ValueRange: [true, false] },
            { Name: "ActivityNameVisible", Description: "获取或设置是否显示活动节点名称", DefaultValue: true, ValueRange: [true, false] },
            { Name: "DateNewLine", Description: "获取或设置签名和日期是否换行", DefaultValue: false, ValueRange: [true, false] }
        ]
    },
    SheetDropDownList: {
        DesignProperties: [
            { Name: "DataField", Description: "获取或设置绑定的数据项名称", DefaultValue: "", ValueRange: null },
            { Name: "DefaultItems", Description: "获取或设置绑定的默认值，多个值以&quot;;&quot;号隔开", DefaultValue: "", ValueRange: null },
            { Name: "DisplayEmptyItem", Description: "获取或设置是否默认显示空项", DefaultValue: false, ValueRange: [true, false] },
            { Name: "EmptyItemText", Description: "获取或设置空项显示文本", DefaultValue: "", ValueRange: null },
            { Name: "DisplayRule", Description: "获取或设置控件的显示规则。", DefaultValue: "", ValueRange: null },
            { Name: "MasterDataCategory", Description: "获取或设置绑定数据字典的类型", DefaultValue: "", ValueRange: null },
            { Name: "Queryable", Description: "获取或设置是否允许对项目进行搜索", DefaultValue: true, ValueRange: [true, false] },

            { Name: "SchemaCode", Description: "获取或设置绑定的业务对象名称", DefaultValue: "", ValueRange: null, Popup: "DropDownListSetting", Height: 450, Width: 540 },
            { Name: "QueryCode", Description: "获取或设置业务对象的查询编码", DefaultValue: "", ValueRange: null, Popup: "DropDownListSetting", Height: 450, Width: 540 },
            { Name: "Filter", Description: "获取或设置过滤条件，例如&quot;数据项:查询字段1,控件ID:查询字段2,固定值:查询字段3&quot;", DefaultValue: "", ValueRange: null, Popup: "DropDownListSetting", Height: 450, Width: 540 },
            { Name: "DataValueField", Description: "获取或设置数据源绑定时显示的值字段的名称", DefaultValue: "", ValueRange: null, Popup: "DropDownListSetting", Height: 450, Width: 540 },
            { Name: "DataTextField", Description: "获取或设置数据源绑定时显示的文本字段的名称", DefaultValue: "", ValueRange: null, Popup: "DropDownListSetting", Height: 450, Width: 540 },

            { Name: "SelectedValue", Description: "获取或设置下拉框选定的值", DefaultValue: "", ValueRange: null },
            { Name: "TextDataField", Description: "获取或设置存储选中项文本值的数据项名称", DefaultValue: "", ValueRange: null },
            { Name: "VaildationRule", Description: "获取或设置控件的验证规则，为True时必填!", DefaultValue: "", ValueRange: null },
            { Name: "ViewInNewContainer", Description: "获取或设置在移动端是否显示到新窗口", DefaultValue: false, ValueRange: [true, false] }

        ],
        DesignEvents: [
            { Name: "OnChange", Description: "获取或设置数据改变时执行脚本" }
        ]
    },
    SheetGridView: {
        DesignProperties: [
            { Name: "DataField", Description: "获取或设置控件绑定的数据项名称", DefaultValue: "", ValueRange: null },
            { Name: "DisplayAdd", Description: "获取或设置是否显示添加按钮", DefaultValue: true, ValueRange: [true, false] },
            { Name: "DisplayClear", Description: "获取或设置是否显示清除按钮", DefaultValue: false, ValueRange: [true, false] },
            { Name: "DisplayDelete", Description: "获取或设置是否显示删除按钮", DefaultValue: true, ValueRange: [true, false] },
            { Name: "DisplayExport", Description: "获取或设置是否显示导出按钮", DefaultValue: false, ValueRange: [true, false] },
            { Name: "DisplayImport", Description: "获取或设置是否显示导入按钮", DefaultValue: false, ValueRange: [true, false] },
            { Name: "DisplayInsertRow", Description: "获取或设置是否显示插入行按钮", DefaultValue: false, ValueRange: [true, false] },
            { Name: "DefaultRowCount", Description: "获取或设置显示默认行总数", DefaultValue: 1, ValueRange: null },
            { Name: "DisplaySequenceNo", Description: "获取或设置是否显示序号行", DefaultValue: true, ValueRange: [true, false] },
            { Name: "DisplaySummary", Description: "获取或设置是否显示汇总行", DefaultValue: true, ValueRange: [true, false] },
            { Name: "VirtualPaging", Description: "获取或设置是否分页加载", DefaultValue: false, ValueRange: [true, false] },
            { Name: "VirtualPageNum", Description: "获取或设置每页加载行数", DefaultValue: 10, ValueRange: [10, 20, 30, 40, 50] },
            { Name: "AlternatingRowStyle", Description: "获取或设置奇数行样式,如：background-color:#ccc", DefaultValue: "", ValueRange: null }
        ],
        DesignEvents: [
            { Name: "OnPreAdd", Description: "获取或设置添加行之前的事件", DefaultValue: "", ValueRange: null },
            { Name: "OnAdded", Description: "获取或设置添加行后的事件", DefaultValue: "", ValueRange: null },
            { Name: "OnEditorSaving", Description: "获取或设置子表行的保存事件", DefaultValue: "", ValueRange: null },
            { Name: "OnPreRemove", Description: "获取或设置删除行之前的事件", DefaultValue: "", ValueRange: null },
            { Name: "OnRemoved", Description: "获取或设置删除行后的事件", DefaultValue: "", ValueRange: null },
            { Name: "OnRendered", Description: "获取或设置控件初始化完成后事件", DefaultValue: "", ValueRange: null }
        ]
    },
    SheetCountLabel: {
        DesignProperties: [
            { Name: "DataField", Description: "获取或设置控件绑定的数据项名称", DefaultValue: "", ValueRange: null },
            { Name: "StatType", Description: "获取或设置控件统计的方式", DefaultValue: "SUM", ValueRange: ["NONE", "SUM", "AVG", "MAX", "MIN"] },
            { Name: "FormatRule", Description: "获取或设置控件的格式化规则,如{0：C2}", DefaultValue: "", ValueRange: null }
        ]
    },
    SheetHyperLink: {
        DesignProperties: [
            { Name: "DataField", Description: "获取或设置控件绑定的数据项名称", DefaultValue: "", ValueRange: null },
            { Name: "NavigateUrl", Description: "获取或设置链接的URL", DefaultValue: "", ValueRange: null },
            { Name: "NavigateUrlDataField", Description: "获取或设置链接URL绑定的数据项值", DefaultValue: "", ValueRange: null },
            { Name: "Text", Description: "获取或设置链接显示的文本", DefaultValue: "", ValueRange: null },
            { Name: "TextDataField", Description: "获取或设置显示链接文本的数据项名称", DefaultValue: "", ValueRange: null }
        ],
        DesignEvents: []
    },
    SheetInstancePrioritySelector: {
        DesignProperties: [
           { Name: "DataField", Description: "获取或设置控件绑定的数据项名称", DefaultValue: "", ValueRange: null },
           { Name: "DefaultValue", Description: "获取或设置默认选定的值", DefaultValue: "Normal", ValueRange: ["High", "Normal", "Low"] }
        ],
        DesignEvents: [
            { Name: "OnChange", Description: "获取或设置控件的点击事件" }
        ]
    },
    SheetLabel: {
        BindTypeEnum: { OnlyVisiable: "onlyvisiable", OnlyData: "onlydata" },
        DesignProperties: [
           { Name: "DataField", Description: "获取或设置控件绑定的数据项名称", DefaultValue: "", ValueRange: null },
           { Name: "BindType", Description: "获取或设置控件绑定的方式", DefaultValue: "OnlyVisiable", ValueRange: ["OnlyVisiable", "OnlyData"] },
           { Name: "ComputationRule", Description: "获取或设置控件的计算规则", DefaultValue: "", ValueRange: null },
           { Name: "DisplayRule", Description: "获取或设置控件的显示规则", DefaultValue: "", ValueRange: null }
           //, { Name: "MobileText", Description: "获取或设置在移动办公模式时显示的文本", DefaultValue: "", ValueRange: null }
        ],
        DesignEvents: [
            { Name: "OnClick", Description: "设置控件的点击事件" }
        ]
    },
    SheetOffice: {
        DesignProperties: [
            { Name: "DataField", Description: "获取或设置控件绑定的数据项名称", DefaultValue: "", ValueRange: null },
            { Name: "PDFDataField", Description: "获取或设置绑定的PDF文件数据项名称", DefaultValue: "", ValueRange: null },
            { Name: "Template", Description: "获取或设置文档的模板路径", DefaultValue: "Office/Template.doc", ValueRange: null },
            { Name: "SignType", Description: "获取或设置印章类型(服务器/EKEY)", DefaultValue: "Server", ValueRange: ["Server", "EKEY"] },
            { Name: "SignUrl", Description: "获取或设置(服务器)印章URL", DefaultValue: "", ValueRange: null },
            { Name: "SignBookmark", Description: "获取或设置印章位置书签", DefaultValue: "SignDate", ValueRange: null },
            { Name: "SignLeft", Description: "获取或设置印章位置相对书签的水平位移", DefaultValue: "0", ValueRange: null },
            { Name: "SignTop", Description: "获取或设置印章位置相对书签的垂直位移", DefaultValue: "0", ValueRange: null },
            { Name: "OfficeHeight", Description: "获取或设置Office控件的Height值", DefaultValue: "800px", ValueRange: null },
            { Name: "OfficeWidth", Description: "获取或设置Office控件的OfficeWidth值", DefaultValue: "800px", ValueRange: null },
            { Name: "RedTemplate", Description: "获取或设置套用模板的URL", DefaultValue: "", ValueRange: null },
            { Name: "BookmartMapping", Description: "获取或设置套用模板书签与数据项映射关系", DefaultValue: "", ValueRange: null },
            { Name: "CABPath", Description: "获取或设置CABPath包所在的路径", DefaultValue: "officecontrol.cab", ValueRange: null },
            { Name: "ClassID", Description: "获取或设置绑定的NTKO给定的ClassID", DefaultValue: "A39F1330-3322-4a1d-9BF0-0BA2BB90E970", ValueRange: null },
            { Name: "ProductVersion", Description: "获取或设置绑定的NTKO给定的Version", DefaultValue: "5,0,1,6", ValueRange: null },
            { Name: "ProductCaption", Description: "获取或设置绑定的NTKO给定的ProductCaption", DefaultValue: "", ValueRange: null },
            { Name: "ProductKey", Description: "获取或设置绑定的NTKO给定的ProductKey", DefaultValue: "422A6ECE92EB12A0E87319303E6160A06B3C897E", ValueRange: null }
        ],
        DesignEvents: [
            { Name: "OnTemplate", Description: "设置文档控件的模板套用事件" },
            { Name: "OnSign", Description: "设置文档控件加盖签章的方法" }
        ]
    },
    SheetRadioButtonList: {
        RepeatDirectionEnum: { OnlyVisiable: "horizontal", All: "vertical" },
        DesignProperties: [
            { Name: "DataField", Description: "获取或设置绑定的数据项名称", DefaultValue: "", ValueRange: null },
            { Name: "DefaultItems", Description: "获取或设置控件的显示项", DefaultValue: "", ValueRange: null }, /*Render时，转换为<option></option>*/
            { Name: "DefaultSelected", Description: "获取或设置是否默认选中状态", DefaultValue: true, ValueRange: [true, false] },
            { Name: "DisplayRule", Description: "获取或设置控件的显示规则。", DefaultValue: "", ValueRange: null },
            { Name: "MasterDataCategory", Description: "获取或设置绑定的数据字典类型名称", DefaultValue: "", ValueRange: null },
            { Name: "RepeatColumns", Description: "获取或设置要在每行显示的列数。", DefaultValue: 5, ValueRange: null },
            { Name: "RepeatDirection", Description: "获取或设置组中单选按钮的显示方向。", DefaultValue: "Horizontal", ValueRange: ["Horizontal", "Vertical"] },
            { Name: "SelectedValue", Description: "获取或设置控件选中的值", DefaultValue: "", ValueRange: null },
            { Name: "VaildationRule", Description: "获取或设置控件的验证规则，为True时必填!", DefaultValue: "", ValueRange: null }
        ],
        DesignEvents: [
            { Name: "OnChange", Description: "获取或设置数据改变时执行脚本。" }
        ]
    },
    SheetRichTextBox: {
        DesignProperties: [
            { Name: "DataField", Description: "获取或设置控件绑定的数据项名称", DefaultValue: "", ValueRange: null },
            { Name: "AutoTrim", Description: "获取或设置是否自动去除前后空格", DefaultValue: false, ValueRange: [true, false] },
            { Name: "DefaultValue", Description: "获取或设置控件的默认值", DefaultValue: "", ValueRange: null },
            { Name: "DisplayRule", Description: "获取或设置控件的显示规则", DefaultValue: "", ValueRange: null, RichProperty: true },
            { Name: "PlaceHolder", Description: "获取或设置控件的水印文本", DefaultValue: "", ValueRange: null },
            { Name: "RichTextBox", Description: "获取或设置是否使用富文本框进行展现", DefaultValue: false, ValueRange: [true, false] },
            { Name: "ToolTip", Description: "获取或设置显示的提示信息", DefaultValue: "", ValueRange: null },
            { Name: "VaildationRule", Description: "获取或设置控件的验证规则", DefaultValue: "", ValueRange: null, RichProperty: true },
            { Name: "PopupWindow", Description: "获取或设置是否支持开窗查询", DefaultValue: "None", ValueRange: ["None", "PopupWindow", "Dropdown"] },
            { Name: "DisplayText", Description: "获取或设置开窗查询文本", DefaultValue: "选择", ValueRange: null },
            { Name: "PopupHeight", Description: "获取或设置开窗查询高度", DefaultValue: "400px", ValueRange: null },
            { Name: "PopupWidth", Description: "获取或设置开窗查询宽度", DefaultValue: "600px", ValueRange: null },
            { Name: "SchemaCode", Description: "获取或设置文本框开窗查询绑定的业务对象编码", DefaultValue: "", ValueRange: null, Popup: "SheetTextBoxSetting", Height: 450, Width: 550 },
            { Name: "QueryCode", Description: "获取或设置文本框开窗查询绑定的查询编码", DefaultValue: "", ValueRange: null, Popup: "SheetTextBoxSetting", Height: 450, Width: 550 },
            { Name: "InputMappings", Description: "获取或设置开窗查询输入参数条件，例&quot;数据项1:查询字段1,数据项2:查询字段2&quot;", DefaultValue: "", ValueRange: null, Popup: "SheetTextBoxSetting", Height: 450, Width: 550 },
            { Name: "OutputMappings", Description: "获取或设置开窗查询输出关系映射，例&quot;数据项1:查询字段1,数据项2:查询字段2&quot;", DefaultValue: "", ValueRange: null, Popup: "SheetTextBoxSetting", Height: 450, Width: 550 },
            { Name: "ViewInNewContainer", Description: "获取或设置在移动端是否显示到新窗口", DefaultValue: false, ValueRange: [true, false] }
        ],
        DesignEvents: []
    },
    SheetTextBox: {
        DesignProperties: [
            { Name: "DataField", Description: "获取或设置控件绑定的数据项名称", DefaultValue: "", ValueRange: null },             // OK
            { Name: "ComputationRule", Description: "获取或设置控件的计算规则", DefaultValue: "", ValueRange: null, Popup: "ComputationRule", Height: 390, Width: 490 },
            { Name: "DefaultValue", Description: "获取或设置控件的默认值", DefaultValue: "", ValueRange: null },
            { Name: "DisplayRule", Description: "获取或设置控件的显示规则", DefaultValue: "", ValueRange: null, RichProperty: true },
            { Name: "FormatRule", Description: "获取或设置控件的格式化规则,如{0：C2}", DefaultValue: "", ValueRange: null },
            { Name: "PlaceHolder", Description: "获取或设置控件的水印文本", DefaultValue: "", ValueRange: null },
            { Name: "ToolTip", Description: "获取或设置显示的提示信息", DefaultValue: "", ValueRange: null },
            { Name: "RegularExpression", Description: "获取或设置控件的正则表达式规则", DefaultValue: "", ValueRange: null, Popup: "SheetTextBoxRegular", Height: 450, Width: 540 },
            { Name: "RegularInvalidText", Description: "获取或设置验证失败时显示的文本", DefaultValue: "", ValueRange: null },
            { Name: "VaildationRule", Description: "获取或设置控件的验证表达式，为True时必填!", DefaultValue: "", ValueRange: null, RichProperty: true },
            { Name: "PopupWindow", Description: "获取或设置是否支持开窗查询", DefaultValue: "None", ValueRange: ["None", "PopupWindow", "Dropdown"] },
            { Name: "DisplayText", Description: "获取或设置开窗查询文本", DefaultValue: "选择", ValueRange: null },
            { Name: "PopupHeight", Description: "获取或设置开窗查询高度", DefaultValue: "400px", ValueRange: null },
            { Name: "PopupWidth", Description: "获取或设置开窗查询宽度", DefaultValue: "600px", ValueRange: null },
            { Name: "SchemaCode", Description: "获取或设置文本框开窗查询绑定的业务对象编码", DefaultValue: "", ValueRange: null, Popup: "SheetTextBoxSetting", Height: 450, Width: 550 },
            { Name: "QueryCode", Description: "获取或设置文本框开窗查询绑定的查询编码", DefaultValue: "", ValueRange: null, Popup: "SheetTextBoxSetting", Height: 450, Width: 550 },
            { Name: "InputMappings", Description: "获取或设置开窗查询输入参数条件，例&quot;数据项1:查询字段1,数据项2:查询字段2&quot;", DefaultValue: "", ValueRange: null, Popup: "SheetTextBoxSetting", Height: 450, Width: 550 },
            { Name: "OutputMappings", Description: "获取或设置开窗查询输出关系映射，例&quot;数据项1:查询字段1,数据项2:查询字段2&quot;", DefaultValue: "", ValueRange: null, Popup: "SheetTextBoxSetting", Height: 450, Width: 550 },

            { Name: "ViewInNewContainer", Description: "获取或设置在移动端是否显示到新窗口", DefaultValue: false, ValueRange: [true, false] }
        ],
        DesignEvents: [
            { Name: "OnChange", Description: "获取或设置文本框值改变事件" },
            { Name: "OnFocus", Description: "获取或设置文本框获取焦点时事件" },
            { Name: "OnKeyDown", Description: "获取或设置键盘摁下事件" },
            { Name: "OnKeyUp", Description: "获取或设置键盘回弹事件" }
        ]
    },
    SheetAssociation: {
        DesignProperties: [
            { Name: "DataField", Description: "获取或设置控件绑定的数据项名称", DefaultValue: "", ValueRange: null },
            { Name: "DisplayRule", Description: "获取或设置控件的显示规则", DefaultValue: "", ValueRange: null, RichProperty: true },
            { Name: "PlaceHolder", Description: "获取或设置控件的水印文本", DefaultValue: "", ValueRange: null },
            { Name: "VaildationRule", Description: "获取或设置控件的验证表达式，为True时必填!", DefaultValue: "", ValueRange: null, RichProperty: true },
            { Name: "LinkMode", Description: "获取或设置点击打开关联表单的链接方式", DefaultValue: "None", ValueRange: ["None", "BizObject", "Workflow"] },
            { Name: "DisplayText", Description: "获取或设置开窗查询文本", DefaultValue: "选择", ValueRange: null },
            { Name: "PopupHeight", Description: "获取或设置开窗查询高度", DefaultValue: "400px", ValueRange: null },
            { Name: "PopupWidth", Description: "获取或设置开窗查询宽度", DefaultValue: "600px", ValueRange: null },
            { Name: "SchemaCode", Description: "获取或设置文本框开窗查询绑定的业务对象编码", DefaultValue: "", ValueRange: null, Popup: "SheetTextBoxSetting", Height: 450, Width: 550 },
            { Name: "QueryCode", Description: "获取或设置文本框开窗查询绑定的查询编码", DefaultValue: "", ValueRange: null, Popup: "SheetTextBoxSetting", Height: 450, Width: 550 },
            { Name: "InputMappings", Description: "获取或设置开窗查询输入参数条件，例&quot;数据项1:查询字段1,数据项2:查询字段2&quot;", DefaultValue: "", ValueRange: null, Popup: "SheetTextBoxSetting", Height: 450, Width: 550 },
            { Name: "OutputMappings", Description: "获取或设置开窗查询输出关系映射，例&quot;数据项1:查询字段1,数据项2:查询字段2&quot;", DefaultValue: "", ValueRange: null, Popup: "SheetTextBoxSetting", Height: 450, Width: 550 },
            { Name: "ViewInNewContainer", Description: "获取或设置在移动端是否显示到新窗口", DefaultValue: true, ValueRange: [true, false] }
        ],
        DesignEvents: [
            { Name: "OnChange", Description: "获取或设置绑定值变更后事件" }
        ]
    },
    SheetTime: {
        TimeModeEnum: { "OnlyDate": "OnlyDate", "SimplifiedTime": "SimplifiedTime", "FullTime": "FullTime", "OnlyTime": "OnlyTime" },
        DesignProperties: [
            { Name: "DataField", Description: "获取或设置控件绑定的数据项名称", DefaultValue: "", ValueRange: null },
            { Name: "DefaultValue", Description: "获取或设置当前控件的默认值", DefaultValue: "", ValueRange: null },
            { Name: "TimeMode", Description: "获取或设置日期控件的显示模式", DefaultValue: "OnlyDate", ValueRange: ["OnlyDate", "FullTime", "SimplifiedTime", "OnlyTime"] },
            { Name: "MinValue", Description: "获取或设置日期控件显示的最小值", DefaultValue: "2010-01-01 00:00:00", ValueRange: null },
            { Name: "MaxValue", Description: "获取或设置日期控件显示的最大值", DefaultValue: "2050-12-31 23:59:59", ValueRange: null },
            { Name: "WdatePickerJson", Description: "获取或设置日期控件的显示JSON字符串(参考WdatePicker控件)", DefaultValue: "", ValueRange: null },
            { Name: "ViewInNewContainer", Description: "获取或设置在移动端是否显示到新窗口", DefaultValue: false, ValueRange: [true, false] }
        ],
        DesignEvents: [
            { Name: "OnChange", Description: "获取或设置日期选定值变更后事件" }
        ]
    },
    SheetWorkflow: {
        DesignProperties: [
             { Name: "DataField", Description: "获取或设置控件绑定的数据项名称", DefaultValue: "", ValueRange: null },
             { Name: "DefaultValue", Description: "获取或设置选人控件绑定的默认值", DefaultValue: "", ValueRange: null },
             { Name: "PlaceHolder", Description: "获取或设置控件的水印文本", DefaultValue: "", ValueRange: null },
             { Name: "RootCode", Description: "获取或设置根节点流程模板编码", DefaultValue: "", ValueRange: null },
             { Name: "WorkflowCodes", Description: "获取或设置根节点流程模板编码", DefaultValue: "", ValueRange: null },
             { Name: "Mode", Description: "获取或设置选择方式(流程包/流程模板)", DefaultValue: "Package", ValueRange: ["Package", "WorkflowTemplate"] },
             { Name: "IsMultiple", Description: "获取或设置是否支持多选", DefaultValue: true, ValueRange: [true, false] },
             { Name: "AllowSearch", Description: "获取或设置是否支持搜索", DefaultValue: true, ValueRange: [true, false] },
             { Name: "IsShared", Description: "获取或设置是否值显示共享流程包", DefaultValue: false, ValueRange: [true, false] }
        ],
        DesignEvents: [
            { Name: "OnChange", Description: "获取或设置流程模板的Change事件" }
        ]
    },
    SheetUser: {
        DesignProperties: [
             { Name: "DataField", Description: "获取或设置控件绑定的数据项名称", DefaultValue: "", ValueRange: null },
             { Name: "DefaultValue", Description: "获取或设置选人控件绑定的默认值", DefaultValue: "", ValueRange: null },
             { Name: "PlaceHolder", Description: "获取或设置控件的水印文本", DefaultValue: "", ValueRange: null },
             // { Name: "SegmentVisible", Description: "获取或设置是否选择【组织群】", DefaultValue: false, ValueRange: [true, false] },
             { Name: "OrgUnitVisible", Description: "获取或设置是否选择【组织单元】", DefaultValue: false, ValueRange: [true, false] },
             { Name: "GroupVisible", Description: "获取或设置是否选择【用户组】", DefaultValue: false, ValueRange: [true, false] },
             //{ Name: "PostVisible", Description: "获取或设置是否选择【岗位】", DefaultValue: false, ValueRange: [true, false] },
             { Name: "UserVisible", Description: "获取或设置是否选择【用户】", DefaultValue: true, ValueRange: [true, false] },
             { Name: "RootUnitID", Description: "获取或设置显示的根节点组织节点ID", DefaultValue: "", ValueRange: null },
             { Name: "VisibleUnits", Description: "获取允许显示的组织单元ID集合", DefaultValue: "", ValueRange: null },
             { Name: "Recursive", Description: "获取或设置是否递归显示所有子节点", DefaultValue: true, ValueRange: [true, false] },
             { Name: "RootSelectable", Description: "获取或设置是否允许选择根节点", DefaultValue: true, ValueRange: [true, false] },
             { Name: "OrgSelectable", Description: "获取或设置是否允许选择发起人", DefaultValue: true, ValueRange: [true, false] },
             // { Name: "RoleName", Description: "获取或设置显示指定的组名称中的用户", DefaultValue: "", ValueRange: null },
             // { Name: "OrgJobCode", Description: "获取或设置显示指定的职务编码中的用户", DefaultValue: "", ValueRange: null },
             // { Name: "OrgPostCode", Description: "获取或设置显示指定的岗位编码中的用户", DefaultValue: "", ValueRange: null },
             { Name: "UserCodes", Description: "获取或设置只显示指定帐号的用户，多个以,分隔", DefaultValue: "", ValueRange: null },
             { Name: "MappingControls", Description: "获取控件和属性映射关系", DefaultValue: "", ValueRange: null, Popup: "SheetUserSetting", Height: 430, Width: 520 }
        ],
        DesignEvents: [
            { Name: "OnChange", Description: "获取或设置控件的选人变更事件" }
        ]
    },
    // 属性定义
    SheetTimeSpan: {
        DesignProperties: [
            { Name: "DataField", Description: "获取或设置控件绑定的数据项名称", DefaultValue: "", ValueRange: null }
        ],
        DesignEvents: [
            { Name: "OnChange", Description: "获取或设置日期选定值变更后事件" }
        ]
    }
};
//属性定义
//定义MvcSheet命名控件
jQuery.extend({
    MvcSheet: {
        Version: "V1.0",
        AjaxUrl: "MvcDefaultSheet/OnLoad",
        LOADKEY: "load", // 加载表单
        Actions: [], // 执行事件:保存、提交...
        InitFunctions: [], // 初始化之前的函数集合
        ReadyFunctions: [], // 加载完成需要执行事件集合
        //ActionKey
        Action_Save: "Save",
        Action_ViewInstance: "ViewInstance",
        Action_PreviewParticipant: "PreviewParticipant",
        Action_Print: "Print",
        Action_CancelInstance: "CancelInstance",
        Action_Reject: "Reject",
        Action_Submit: "Submit",
        Action_FinishInstance: "FinishInstance",
        Action_Forward: "Forward",
        Action_Assist: "Assist",
        Action_Consult: "Consult",
        Action_Circulate: "Circulate",
        Action_AdjustParticipant: "AdjustParticipant",
        Action_LockInstance: "LockInstance",
        Action_UnLockInstance: "UnLockInstance",
        Action_Close: "Close",
        Action_RetrieveInstance: "RetrieveInstance",
        Action_Viewed: "Viewed", //已阅

        //默认Actions
        SaveAction: {
            Action: "Save",
            Icon: "fa-save",
            Text: "保存",
            en_us: "Save",
            OnActionPreDo: null,
            OnActionDone: null
        },
        PrintAction: {
            Action: "Print",
            Icon: "fa-print",
            Text: "打印",
            en_us: "Print",
            OnActionDone: function () {
            }
        },
        ViewedAction: {
            Action: "Viewed",
            Icon: "fa-check",
            Text: "已阅",
            en_us: "View",
            OnActionDone: function () {
            }
        },
        CancelInstanceAction: {
            Action: "CancelInstance",
            Icon: "fa-square-o",
            en_us: "Cancel",
            Text: "取消流程"
        },
        SubmitAction: {
            Action: "Submit",
            Icon: "fa-check",
            Text: "提交",
            en_us: "Submit",
            OnActionDone: function () {
            }
        },
        RejectAction: {
            Action: "Reject",
            Icon: "fa-mail-reply",
            Text: "驳回",
            en_us: "Reject",
            OnActionDone: function () {
            }
        },
        RetrieveInstanceAction: {
            Action: "RetrieveInstance",
            Icon: "fa-sign-in",
            en_us: "Retrieve",
            Text: "取回"
        },
        ViewInstanceAction: {
            Action: "ViewInstance",
            Icon: "fa-ellipsis-v",
            Text: "流程状态",
            en_us: "State"
        },
        PreviewParticipantAction: {
            Action: "PreviewParticipant",
            Icon: "fa-coumns",
            Text: "预览",
            en_us: "Preview"
        },
        FinishInstanceAction: {
            Action: "FinishInstance",
            Icon: "fa-square",
            Text: "结束流程",
            en_us: "Finish Instance"
        },
        ForwardAction: {
            Action: "Forward",
            Icon: "fa-mail-forward",
            Text: "转办",
            en_us: "Forward"
        },
        AssistAction: {
            Action: "Assist",
            Icon: "fa-qrcode",
            Text: "协办", // zaf
            en_us: "Assist"
        },
        ConsultAction: {
            Action: "Consult",
            Icon: "fa-phone",
            Text: "征询意见",
            en_us: "Consult"
        },
        CirculateAction: {
            Action: "Circulate",
            Icon: "fa-share-square-o",
            Text: "传阅",  // zaf
            en_us: "Circulate"
        },
        AdjustParticipantAction: {
            Action: "AdjustParticipant",
            Icon: "fa-random",
            Text: "加签",
            en_us: "Plus"
        },
        LockInstanceAction: {
            Action: "LockInstance",
            Icon: "fa-unlock-alt",
            Text: "锁定",
            en_us: "Lock"
        },
        UnLockInstanceAction: {
            Action: "UnLockInstance",
            Icon: "fa-unlock-alt",
            Text: "解锁",
            en_us: "UnLock"
        },
        CloseAction: {
            Action: "Close",
            Icon: "fa-times",
            Text: "关闭",
            en_us: "Close"
        }
    }
});

// 装载JSON文件
var loadJSON = function (key, url) {
    if (window.sessionStorage.getItem(key)) {
        return JSON.parse(window.sessionStorage.getItem(key));
    }
    else {
        $.ajax({
            url: url,
            dataType: "JSON",
            type: "GET",
            async: false,//同步执行
            success: function (data) {
                window.sessionStorage.setItem(key, JSON.stringify(data));
            }
        });
        return JSON.parse(window.sessionStorage.getItem(key));
    }
};

if (!$.uuid) {
    $.uuid = function () {
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    };
}

//函数定义
jQuery.extend(
    $.MvcSheet, {
        //初始化
        Init: function (_AfterMvcInit) {
            var params = "";
            if (window.location.href.indexOf("?") > -1) {
                params = window.location.href.substring(window.location.href.indexOf("?"));
            }
            // console.time('testForEach');
            this.AjaxUrl += params + "&T=" + (Math.random() * 1000000).toString().substring(0, 6);
            this.LoadData(_AfterMvcInit);
            // console.timeEnd('testForEach');
        },
        //初始化工具栏
        InitToolBar: function () {
            //工具栏
            if ($.MvcSheet.Actions.length == 0) {
                $.MvcSheet.AddDefaultActions();
            }

            //新版移动端移从toolbar移除流程状态
            if ($.MvcSheetUI.SheetInfo.IsMobile) {
                $.MvcSheet.Actions.forEach(function (v, i) {
                    if (v.Action == 'ViewInstance') {
                        $.MvcSheet.Actions.splice(i, 1);
                        return;
                    }
                })
            }

            var manager = $(".SheetToolBar").SheetToolBar($.MvcSheet.Actions);

            if ($.MvcSheetUI.SheetInfo.IsMobile) {
                var _Actions = [];
                var _GetProxy = function (_thatAction, _actionKey) {
                    return {
                        text: _thatAction.Text,
                        handler: function () {
                            _thatAction.ActionClick();
                        },
                        actionKey: _actionKey
                    }
                }

                //FIXME luwei bug here manager maybe undefined
                for (_Action in manager.ControlManagers) {
                    var that = manager.ControlManagers[_Action];
                    if (that.MobileVisible) {
                        _Actions.push(_GetProxy(that, _Action));
                    }
                };

                //修改成IONIC
                var _ActionButton = $("#dvmButtons"); //$("#btnShowActions");
                //无按钮
                if (_Actions.length == 0) {
                    _ActionButton.hide();
                    _ActionButton.parents('ion-footer-bar').siblings('ion-content').removeClass('has-footer').end().remove();
                }

                //update by zyj  .net 版本
                else if (_Actions.length < 4) {
                    _Actions.forEach(function (e) {
                        var strClass = "icon-left";
                        if (e.actionKey == "Reject") {
                            e.Text = SheetLanguages.Current.Reject;
                        }
                        if (e.actionKey == "Submit") {
                        }
                        var button = $("<button class=\"button foot-button " + strClass + " button-clear \"></button>")
                        button.text(e.text);
                        button.unbind("click." + e.actionKey).bind("click." + e.actionKey, function () {
                            //移动端流程表单关闭功能 zcw
                            var reg = new RegExp("(^|&)" + "go" + "=([^&]*)(&|$)", "i");
                            var r = window.location.search.substr(1).match(reg);
                            var go;
                            try {
                                go = unescape(r[2]);
                            } catch (error) {
                            }

                            if (go == -2 && e.actionKey == "Close") {
                                //update by ouyangsk 采用钉钉提供的关闭方法
                                //window.history.back();
                                if ($.MvcSheetUI.IonicFramework.$rootScope && $.MvcSheetUI.IonicFramework.$rootScope.loginfrom == "dingtalk") {
                                    dd.biz.navigation.close({});
                                } else if ($.MvcSheetUI.IonicFramework.$rootScope && $.MvcSheetUI.IonicFramework.$rootScope.loginfrom == "wechat") {
                                    WeixinJSBridge.call("closeWindow");
                                } else {
                                    manager.ControlManagers[e.actionKey].ActionClick();
                                }
                            } else {
                                manager.ControlManagers[e.actionKey].ActionClick();
                            }
                        })
                        _ActionButton.append(button);
                    })
                }
                //多个按钮
                else {
                    var moreActions = [];
                    _Actions.forEach(function (e) {
                        if (e.actionKey == "Reject" || e.actionKey == "Submit") {
                            var strClass = "icon-left";
                            if (e.actionKey == "Reject") {
                                e.text = SheetLanguages.Current.Reject;
                            } else {
                                e.text = SheetLanguages.Current.Approve;
                                manager.ControlManagers[e.actionKey].Text = SheetLanguages.Current.Approve;
                            }
                            var button = $("<button class=\"button foot-button " + strClass + " button-clear \"></button>")
                            button.text(e.text);
                            button.unbind("click." + e.actionKey).bind("click." + e.actionKey, function () {

                                manager.ControlManagers[e.actionKey].ActionClick();
                            })
                            _ActionButton.append(button);
                        } else {
                            moreActions.push(e);
                        }
                    })

                    if (moreActions.length > 0) {
                        var btnMore = $("<button class=\"button foot-button icon-left button-clear\">" + SheetLanguages.Current.More + "</button>")
                        var buttonsA = [];
                        moreActions.forEach(function (action) {
                            buttonsA.push({
                                text: action.text
                            });
                        });

                        btnMore.unbind("click.moreaction").bind("click.moreaction", function () {
                            console.log('oye!');
                            var hideSheet = $.MvcSheetUI.IonicFramework.$ionicActionSheet.show({
                                buttons: buttonsA,
                                cancelText: SheetLanguages.Current.Cancel,
                                cancel: function () {
                                    return false;
                                },
                                buttonClicked: function (index) {
                                    // console.log(index, 'index')
                                    // debugger
                                    moreActions[index].handler();
                                    return true;
                                }
                            });
                            //$timeout(function () {
                            //    hideSheet();
                            //}, 10000);
                        });
                        _ActionButton.append(btnMore);
                    }
                }
            }
            var _PORTALROOT_GLOBAL = window.localStorage.getItem("H3.PortalRoot") || "";
            //公共地址
            $.PublicAddress = loadJSON("PublicAddressData", "lang/PublicAddressData.json");
        },
        //初始化HiddenFields
        InitHiddenFields: function () {
            $("input:hidden").each(function () {
                if ($(this).data("type") == "SheetHiddenField") {
                    $(this).SheetHiddenField();
                }
            });
        },
        //加载数据
        LoadData: function (_AfterMvcInit) {

            var loadText = "正在努力加载...";
            $.MvcSheetUI.Loading = true;
            if (this.AjaxUrl.toLowerCase().indexOf("ismobile") > -1)
                loadText = "";
            $.LoadingMask.Show(loadText, false);

            this.GetSheet({
                    "Command": this.LOADKEY,
                    "Lang": window.localStorage.getItem("H3.Language")
                },

                function (data) {
                    $.MvcSheetUI.SheetInfo = data;
                    $.MvcSheetUI.SheetInfo.Language = window.localStorage.getItem("H3.Language");
                    //处理表单锁
                    if (data.Message) {
                        if (data.Close) {
                            if ($.MvcSheetUI.IonicFramework.$rootScope && $.MvcSheetUI.IonicFramework.$rootScope.loginfrom == "dingtalk") {
                                dd.device.notification.alert({
                                    message: data.Message,
                                    title: "提示", //可传空
                                    buttonName: "确定",
                                    onSuccess: function () {
                                        dd.biz.navigation.close({
                                            onSuccess: function (result) {
                                            },
                                            onFail: function (err) {
                                            }
                                        });
                                    },
                                    onFail: function (err) {
                                    }
                                });
                            } else if ($.MvcSheetUI.IonicFramework.$rootScope && $.MvcSheetUI.IonicFramework.$rootScope.loginfrom == "wechat") {
                                alert(data.Message)
                                setTimeout(function () {
                                    WeixinJSBridge.call("closeWindow");
                                }, 1000)
                            } else {
                                alert(data.Message)
                                setTimeout(function () {
                                    $.MvcSheet.ClosePage();
                                }, 1000)
                            }
                            return;
                        }
                    }

                    //添加自定义javascript扩展的输出
                    if ($.MvcSheetUI.SheetInfo.PageScript) {
                        var pagescript = $('<script type="text/javascript">' + $.MvcSheetUI.SheetInfo.PageScript + '</script>');
                        $('body').append(pagescript);
                    }

                    // 初始化语言
                    $.MvcSheet.PreInitLanguage();

                    // 添加征询意见DOM元素，与数据项Sheet__ConsultComment关联
                    if ($.MvcSheetUI.SheetInfo.IsMobile) {
                        $(".divContent:last").append('<div class="list"><div class="item item-input"><span data-type="SheetLabel" class="input-label" data-datafield="Sheet__ConsultComment">'+SheetLanguages.Current.ConsultComment+'<</span><div class="detail"><div data-datafield="Sheet__ConsultComment" data-type="SheetComment"></div></div></div></div>');
                        $(".divContent:last").append('<div class="list"><div class="item item-input"><span data-type="SheetLabel" class="input-label" data-datafield="Sheet__AssistComment">'+SheetLanguages.Current.AssistComment+'</span><div class="detail"><div data-datafield="Sheet__AssistComment" data-type="SheetComment"></div></div></div></div>');
                        $(".divContent:last").append('<div class="list"><div class="item item-input"><span data-type="SheetLabel" class="input-label" data-datafield="Sheet__ForwardComment">'+SheetLanguages.Current.ForwardComment+'</span><div class="detail"><div data-datafield="Sheet__ForwardComment" data-type="SheetComment"></div></div></div></div>');
                    } else {
                        $(".divContent:last").append('<div class="row tableContent"><div class="col-md-2"><span data-type="SheetLabel" data-datafield="Sheet__ConsultComment">'+SheetLanguages.Current.ConsultComment+'</span></div><div class="col-md-10"><div data-datafield="Sheet__ConsultComment" data-type="SheetComment"></div></div></div>');
                        $(".divContent:last").append('<div class="row tableContent"><div class="col-md-2"><span data-type="SheetLabel" data-datafield="Sheet__AssistComment">'+SheetLanguages.Current.AssistComment+'</span></div><div class="col-md-10"><div data-datafield="Sheet__AssistComment" data-type="SheetComment"></div></div></div>');
                        $(".divContent:last").append('<div class="row tableContent"><div class="col-md-2"><span data-type="SheetLabel" data-datafield="Sheet__ForwardComment">'+SheetLanguages.Current.ForwardComment+'</span></div><div class="col-md-10"><div data-datafield="Sheet__ForwardComment" data-type="SheetComment"></div></div></div>');
                    }
                    $.MvcSheet.PreInit.apply(this, [$.MvcSheetUI.SheetInfo]);

                    // 初始化事件
                    if ($.MvcSheet.InitFunctions.length > 0) {
                        for (var i = 0; i < $.MvcSheet.InitFunctions.length; i++) {
                            $.MvcSheet.InitFunctions[i].call(this, $.MvcSheetUI.SheetInfo);
                        }
                    }


                    //工具栏
                    $.MvcSheet.InitToolBar();

                    //判断元素类型，渲染成MvcControl
                    var datafields = $("[" + $.MvcSheetUI.PreDataKey + $.MvcSheetUI.DataFieldKey.toLowerCase() + "]");
                    // 子表中的控件会在子表中进行初始化，故过滤掉子表模板行中的控件
                    var filterDataFields = []; // 正常顺序加载的控件
                    var delayDataFields = []; // 需要延迟加载的控件
                    for (var i = 0, len = datafields.length; i < len; i++) {
                        var datafield = datafields[i];
                        if (datafield.tagName.toLowerCase() == "table") {
                            delayDataFields.push(datafield);
                        } else if ($(datafield).parents("tr.template").length == 0) {
                            filterDataFields.push(datafield);
                        }
                    }
                    for (i = 0, len = filterDataFields.length; i < len; i++) {
                        $(filterDataFields[i]).SheetUIManager();
                    }
                    for (i = 0, len = delayDataFields.length; i < len; i++) {

                        $(delayDataFields[i]).SheetUIManager();
                    }
                    //HiddenFields
                    $.MvcSheet.InitHiddenFields();

                    //移动端布局
                    if ($.MvcSheetUI.SheetInfo.IsMobile) {
                        $("ion-content").removeClass("ng-cloak");
                    } else {
                        //处理不可见布局
                        $("div[class^='col-md-']").each(function () {
                            var needHide = true;
                            if ($(this).text()) {
                                needHide = false;
                            } else {
                                var DataFieldElements = $(this).find("[" + $.MvcSheetUI.PreDataKey + $.MvcSheetUI.DataFieldKey.toLowerCase() + "]");
                                for (var i = 0; i < DataFieldElements.length; i++) {
                                    var manager = $(DataFieldElements).SheetUIManager();
                                    if (!manager) {
                                        var datafield = $(DataFieldElements).attr($.MvcSheetUI.PreDataKey + $.MvcSheetUI.DataFieldKey.toLowerCase());
                                        alert("数据项:{" + datafield + "}不存在");
                                        return;
                                    }
                                    if (manager.Visiable) {
                                        needHide = false;
                                        break;
                                    }
                                }
                            }
                            if (needHide) {
                                $(this).hide();
                            }
                        });

                        //处理不可见布局
                        $("div[class='row']").each(function () {
                            if ($(this).find("div:visible[class^='col-md-']").length == 0) {
                                $(this).hide();
                            }
                        });
                    }
                    if (typeof(_AfterMvcInit) == "function") {
                        _AfterMvcInit();
                    }
                    $.MvcSheet.RenderLanguage(); // 多语言初始化
                    $.MvcSheet.Rendered.apply(this, [$.MvcSheetUI.SheetInfo]);
                    $.MvcSheetUI.Loading = false;
                    $.LoadingMask.Hide();
                    $.MvcSheet.Loaded.apply(this, [$.MvcSheetUI.SheetInfo]);

                    if ($.MvcSheet.ReadyFunctions.length > 0) {
                        for (var i = 0; i < $.MvcSheet.ReadyFunctions.length; i++) {
                            $.MvcSheet.ReadyFunctions[i].call(this, $.MvcSheetUI.SheetInfo);
                        }
                    }
                },
                function (e) {
                    alert("表单数据加载失败，请稍候再试!");
                }),
                false //同步加载数据
        },
        //MvcSheet完成事件
        Ready: function (fn) {
            $.MvcSheet.ReadyFunctions.push(fn);
        },
        PreInitLanguage: function () {
            var language = $.MvcSheetUI.SheetInfo.Language;
            if (typeof(SheetLanguages[language]) == "undefined" || SheetLanguages[language] == null) {
                language = "zh_cn";
            }
            //update by ouyangsk 处理移动端有时获取不到SheetLanguages语言文件的问题
            if (!language || language == "null") {
                language = "zh_cn";
            }
            $.extend(SheetLanguages.Current, SheetLanguages[language]);
        },
        RenderLanguage: function () {
            // 多语言初始化
            var language = $.MvcSheetUI.SheetInfo.Language;
            if (language) {
                language = $.MvcSheetUI.PreDataKey + language.replace("-", "_");
                $("span[" + language + "],label[" + language + "]").each(function () {
                    $(this).html($(this).attr(language));
                });
            }
            //手机端基本信息特殊处理
            if ($.MvcSheetUI.SheetInfo.IsMobile == true) {
                //发起人
                $("#divFullName .input-label").text(SheetLanguages.Current.BasicInfo.divFullName);
                //发起时间
                $("#divOriginateDate .input-label").text(SheetLanguages.Current.BasicInfo.divOriginateDate);
                //所属组织
                $($("#divOriginateOUName .input-label")[0]).text(SheetLanguages.Current.BasicInfo.divOriginateOUName);
                //流水号
                $("#divSequenceNo .input-label").text(SheetLanguages.Current.BasicInfo.divSequenceNo);
            }
        },
        PreInit: function () {
        },
        PreLoad: function (fn) {
            $.MvcSheet.InitFunctions.push(fn);
        },
        Loaded: function () {
        },
        Rendered: function () {
            // 注册输入框鼠标样式
            $("input,textarea,select").addClass($.MvcSheetUI.Css.inputMouseOut).unbind("mouseover.style").bind("mouseover.style",
                function () {
                    var target = $(this);
                    if (target.parent().is("li") && target.parent().parent().parent().is("div")) {
                        target = target.parent().parent().parent();
                    }
                    target.removeClass($.MvcSheetUI.Css.inputMouseOut).addClass($.MvcSheetUI.Css.inputMouseMove);
                })
                .unbind("mouseenter.style").bind("mouseenter.style",
                function () {
                    var target = $(this);
                    if (target.parent().is("li") && target.parent().parent().parent().is("div")) {
                        target = target.parent().parent().parent();
                    }
                    target.removeClass($.MvcSheetUI.Css.inputMouseMove).addClass($.MvcSheetUI.Css.inputMouseEnter);
                })
                .unbind("mouseout.style").bind("mouseout.style",
                function () {
                    var target = $(this);
                    if (target.parent().is("li") && target.parent().parent().parent().is("div")) {
                        target = target.parent().parent().parent();
                    }
                    target.removeClass($.MvcSheetUI.Css.inputMouseEnter).removeClass($.MvcSheetUI.Css.inputMouseMove).addClass($.MvcSheetUI.Css.inputMouseOut);
                });

            if ($.MvcSheetUI.SheetInfo.IsMobile) {
                var selects = $("select[data-datafield]");
                if (selects && selects.length > 0) {
                    for (var i = 0; i < selects.length; i++) {
                        var manager = $(selects[i]).SheetUIManager();
                        if ($(selects[i]).attr("data-datafield").indexOf('.') > -1) {
                            manager = $(selects[i]).SheetUIManager($(selects[i]).parent().parent().attr("data-row"));
                        }
                        if (manager && !manager.Editable) {
                            if ($.MvcSheetUI.SheetInfo.IsOriginateMode && $(selects[i]).attr("data-datafield") == "Originator.OUName" && $(selects[i]).find("option").length > 1)
                                break;
                            $(selects[i]).siblings(".afFakeSelect").hide();
                        }
                    }
                }
            }

            // 原表单运行对象-待合并之后完全删除
            $.MvcSheetUI.MvcRuntime = new Sheet();
        },
        //执行动作: {Action:"方法名称",Datas:[{数据项1},{数据项2}]}
        Action: function (actionControl) {
            if (typeof(actionControl.Mask) == "undefined" || actionControl.Mask) {
                $.LoadingMask.Show((actionControl.Text || SheetLanguages.Current.Doing) + "...");
            }

            //执行动作标示
            var actionName = actionControl.Action;
            //参数：[{数据项1},{数据项2},...]或["#ID1"，"#ID2",...]或["数据1","数据2"]或混合
            var datas = actionControl.Datas;

            //构造数据项的值
            var CommandParams = {
                Command: actionName
            };
            var params = [];
            if (typeof(actionControl.LoadControlValue) == "undefined" || actionControl.LoadControlValue) {
                if (datas) {
                    for (var i = 0; i < datas.length; i++) {
                        if (datas[i].toString().indexOf("{") == 0) {
                            var key = datas[i].replace("{", "").replace("}", "");
                            params.push($.MvcSheetUI.GetControlValue(key));
                        } else if (datas[i].toString().indexOf("#") == 0) {
                            var key = datas[i].replace("#");
                            params.push($.MvcSheetUI.GetControlValue(datas[i]));
                        } else {
                            params.push(datas[i]);
                        }
                    }
                }
            } else {
                params = datas;
            }

            CommandParams["Param"] = JSON.stringify(params);
            if (actionControl.PostSheetInfo) {
                CommandParams["MvcPostValue"] = JSON.stringify(this.GetMvcPostValue(this.actionName));
            }
            var that = this;
            //提交到后台执行
            this.PostSheet(
                CommandParams,
                function (data) {
                    if (actionControl.OnActionDone) {
                        actionControl.OnActionDone.apply(actionControl, [data]);
                    }
                    that.ResultHandler.apply(that, [actionControl, data]);
                    if (actionControl.CloseAfterAction) {
                        $.MvcSheet.ClosePage();
                    }
                    $.LoadingMask.Hide();
                },
                undefined,
                actionControl.Async);
        },
        // 弹出消息确认框
        AlertAction: function (message, doneCallback) {
            if ($.MvcSheetUI.IonicFramework.$ionicPopup) {
                var myPopup = $.MvcSheetUI.IonicFramework.$ionicPopup.show({
                    cssClass: 'bpm-sheet-AlertAction',
                    template: '<span>' + message + '<span>',
                    buttons: [{
                        text: SheetLanguages.Current.Confirm,
                        type: 'button-clear',
                        onTap: function (e) {
                            doneCallback();
                        }
                    }
                    ]
                });
            } else if (alert(message)) {
                doneCallback();
            }
        },
        // 弹出消息确认/取消框
        ConfirmAction: function (message, doneCallback) {
            if ($.MvcSheetUI.IonicFramework.$ionicPopup) {
                var myPopup = $.MvcSheetUI.IonicFramework.$ionicPopup.show({
                    cssClass: 'bpm-sheet-ConfirmAction',
                    template: '<span>' + message + '<span>',
                    buttons: [{
                        text: SheetLanguages.Current.Cancel,
                        type: 'button-clear'
                    }, {
                        text: SheetLanguages.Current.Confirm,
                        type: 'button-clear',
                        onTap: function (e) {
                        //    debugger
                            console.log(e)
                            doneCallback();
                        }
                    }
                    ]
                });
            } else if (confirm(message)) {
                doneCallback();
            }
        },
        //校验
        ActionValidata: function (actionControl, effective) {
            var result = true;
            if (this.Validate) {
                result = this.Validate.apply(actionControl);
            }

            if (result || result == undefined) {
                return $.MvcSheetUI.Validate(actionControl, effective);
            } else
                return false;
        },

        //保存
        Save: function (actionControl) {
            if (!$.MvcSheet.ActionValidata(actionControl, true))
                return false;
            $.LoadingMask.Show(SheetLanguages.Current.Saving);
            var SheetPostValue = this.GetMvcPostValue(this.Action_Save);
            var that = this;
            // console.log(JSON.stringify(SheetPostValue),'JSON.stringify(SheetPostValue)')
            // return
            this.PostSheet({
                    Command: this.Action_Save,
                    MvcPostValue: JSON.stringify(SheetPostValue)
                },
                function (data) {
                    that.ResultHandler.apply(that, [actionControl, data]);
                });
        },
        //提交
        Submit: function (actionControl, text, destActivity, postValue) {
            if ($.MvcSheetUI.SheetInfo.IsMobile) {
                var controls = $("#divSheet input[data-type='SheetTextBox']");
                controls.each(function () {
                    $(this).trigger("change");
                });
            }
            if (!$.MvcSheet.ActionValidata(actionControl))
                return false;
            var that = this;
            // debugger
            // console.log(text)
            $.MvcSheet.ConfirmAction(SheetLanguages.Current.ConfirmDo + "【" + text + "】" + SheetLanguages.Current.Operation + "?", function () {
                //创建离职专兼职流程专用
                // var InstanceId = "cf7b346c-3120-429f-bfdb-fb32ca5bc10e;5315d3be-b657-4f14-b1d9-928d6811634e;1a6c673d-be56-4480-ad5c-4a966bbcca56;93f73a16-fac4-4ac7-87fb-0a6970a1200c;";
                // if (InstanceId.indexOf($.MvcSheetUI.SheetInfo.InstanceId) == -1) {
                //     if ($.MvcSheetUI.SheetInfo.WorkflowCode == "DimissionFullTime" &&
                //         $.MvcSheetUI.SheetInfo.WorkItemType != "WorkItemAssist") {
                //         var text22;
                //         if ($.MvcSheetUI.SheetInfo.ActivityCode == "Activity24") {
                //             var request_id = $.MvcSheetUI.SheetInfo.InstanceId;
                //             var workcode = $.MvcSheetUI.SheetInfo.BizObject.DataItems.EmployeeID.V;
                //             var SQRSJ = $.MvcSheetUI.SheetInfo.BizObject.DataItems.Phone.V;
                //             var personal_email = $.MvcSheetUI.SheetInfo.BizObject.DataItems.GEEmail.V;
                //             var data = $.MvcSheetUI.SheetInfo.BizObject.DataItems.OriginateTime.V;
                //             var submitted_at = data;
                //             var empl_rcd = "0";
                //             var company_code = $.MvcSheetUI.SheetInfo.BizObject.DataItems.GSBH.V;
                //             var data3 = $.MvcSheetUI.SheetInfo.BizObject.DataItems.LZRQ.V;
                //             var data4 = data3.substring(0, 10);
                //             var expect_leaving_on = data4;
                //             if ($("div[data-datafield='SPQXJJMan']").text() == "") {
                //                 var ss2 = "";
                //             } else {
                //                 var ss2 = $.MvcSheetUI.SheetInfo.BizObject.DataItems.SPQXJJMan.V[0].Code;
                //             }
                //
                //             var work_to = ss2.substring(30, 36); //"038148";
                //             var leader_role_to = ss2.substring(30, 36); //"038148";
                //             var hrbp_restraint_of_trade;
                //             if ($.MvcSheetUI.SheetInfo.BizObject.DataItems.JCQK.V == "解除") {
                //                 hrbp_restraint_of_trade = "1"
                //             }
                //             if ($.MvcSheetUI.SheetInfo.BizObject.DataItems.JCQK.V == "不解除") {
                //                 hrbp_restraint_of_trade = "2"
                //             }
                //             if ($.MvcSheetUI.SheetInfo.BizObject.DataItems.JCQK.V == "无竞业限制") {
                //                 hrbp_restraint_of_trade = "0"
                //             }
                //
                //             var hrbp_reason_of_leaving = $.MvcSheetUI.SheetInfo.BizObject.DataItems.HR_LZYY.V == "" ? $.MvcSheetUI.GetElement("HR_LZYY").val() : $.MvcSheetUI.SheetInfo.BizObject.DataItems.HR_LZYY.V;
                //             //var hrbp_reason_of_leaving = "A01";
                //             var reason_of_leaving = $.MvcSheetUI.SheetInfo.BizObject.DataItems.LZYY.V == "" ? $.MvcSheetUI.GetElement("LZYY").val() : $.MvcSheetUI.SheetInfo.BizObject.DataItems.LZYY.V;
                //             //var reason_of_leaving = "A02";
                //             //var lzlx = $.MvcSheetUI.GetControlValue('LZType');
                //             //modify by kinson.guo临时改为这个
                //             var lzlx = $.MvcSheetUI.SheetInfo.BizObject.DataItems.LZType.V == "" ? $.MvcSheetUI.GetControlValue('LZType') : $.MvcSheetUI.SheetInfo.BizObject.DataItems.LZType.V;
                //             var hrbp_type_of_leaving;
                //             if (lzlx == "主动离职") {
                //                 hrbp_type_of_leaving = "1";
                //             }
                //
                //             if (lzlx == "被动离职") {
                //                 hrbp_type_of_leaving = "2";
                //             }
                //             var hrbp_feedback = $.MvcSheetUI.SheetInfo.BizObject.DataItems.HR_BPFK.V;
                //             var hrd_feedback = "";
                //             var direct_leader_feedback = $.MvcSheetUI.SheetInfo.BizObject.DataItems.YWJXorZJSJFK.V;
                //             var indirect_leader_feedback = "";
                //
                //             var nonce = Math.floor((new Date()).valueOf() / 1000);
                //             var key = "375fccaaf3f6372aa60904188c87f3e739101765";
                //             var allin =
                //                 "company_code=" + company_code +
                //                 "&direct_leader_feedback=" + direct_leader_feedback +
                //                 "&empl_rcd=" + empl_rcd +
                //                 "&expect_leaving_on=" + expect_leaving_on +
                //                 "&hrbp_feedback=" + hrbp_feedback +
                //                 "&hrbp_reason_of_leaving=" + hrbp_reason_of_leaving +
                //                 "&hrbp_restraint_of_trade=" + hrbp_restraint_of_trade +
                //                 "&hrbp_type_of_leaving=" + hrbp_type_of_leaving +
                //                 "&hrd_feedback=" + hrd_feedback +
                //                 "&indirect_leader_feedback=" + indirect_leader_feedback +
                //                 "&leader_role_to=" + leader_role_to +
                //                 "&mobile=" + SQRSJ +
                //                 "&nonce=" + nonce +
                //                 "&personal_email=" + personal_email +
                //                 "&reason_of_leaving=" + reason_of_leaving +
                //                 "&request_id=" + request_id +
                //                 "&submitted_at=" + submitted_at +
                //                 "&work_to=" + work_to +
                //                 "&workcode=" + workcode +
                //                 key;
                //             var gn2 = $.md5(allin);
                //             $.ajax({
                //                 async: false,
                //                 data: {
                //                     "request_id": request_id,
                //                     "workcode": workcode,
                //                     "submitted_at": submitted_at,
                //                     "empl_rcd": empl_rcd,
                //                     "company_code": company_code,
                //                     "expect_leaving_on": expect_leaving_on,
                //                     "mobile": SQRSJ,
                //                     "personal_email": personal_email,
                //                     "reason_of_leaving": reason_of_leaving,
                //                     "work_to": work_to,
                //                     "leader_role_to": leader_role_to,
                //                     "hrbp_restraint_of_trade": hrbp_restraint_of_trade,
                //                     "hrbp_type_of_leaving": hrbp_type_of_leaving,
                //                     "hrbp_reason_of_leaving": hrbp_reason_of_leaving,
                //                     "hrbp_feedback": hrbp_feedback,
                //                     "hrd_feedback": hrd_feedback,
                //                     "direct_leader_feedback": direct_leader_feedback,
                //                     "indirect_leader_feedback": indirect_leader_feedback,
                //                     "nonce": nonce,
                //                     "sign": gn2
                //                 },
                //                 //url: "https://hr-api.info.100tal.com/api/oa/v2/resignations/teacher",
                //                 url: "http://magpie-t1.info.runmystage.com/api/oa/v2/resignations/teacher",
                //                 //url: $.PublicAddress.MvcSheet.teacher,
                //                 type: "POST",
                //                 success: function (msg) {
                //                     var text7 = msg;
                //                     //alert("创建离职接口成功");
                //                 },
                //                 error: function (ww) {
                //                     text22 = ww;
                //                     alertMessage2(text22);
                //                 }
                //
                //             })
                //         }
                //         if (text22) {
                //             return;
                //         }
                //     }
                //     //离职申请(专用)
                //     if ($.MvcSheetUI.SheetInfo.WorkflowCode == "Dimission" &&
                //         $.MvcSheetUI.SheetInfo.WorkItemType != "WorkItemAssist") {
                //         //modify by kinson.guo for  对于协办第一次不调用
                //         var ygzj = $.MvcSheetUI.GetControlValue("YGZJ")
                //         var test11;
                //         if (ygzj > 30) {
                //             if ($.MvcSheetUI.SheetInfo.ActivityCode == "Activity11") {
                //                 var request_id = $.MvcSheetUI.SheetInfo.InstanceId;
                //                 var workcode = $.MvcSheetUI.SheetInfo.BizObject.DataItems.YGBH.V;
                //                 var SQRSJ = $.MvcSheetUI.SheetInfo.BizObject.DataItems.SQRSJ.V;
                //                 var personal_email = $.MvcSheetUI.SheetInfo.BizObject.DataItems.GRYX.V;
                //                 var data = $.MvcSheetUI.SheetInfo.BizObject.DataItems.OriginateTime.V;
                //                 var submitted_at = data;
                //                 var empl_rcd = "0";
                //                 var company_code = $.MvcSheetUI.SheetInfo.BizObject.DataItems.GSBH.V;
                //                 var data3 = $.MvcSheetUI.SheetInfo.BizObject.DataItems.LZRQ.V;
                //                 var data4 = data3.substring(0, 10);
                //                 var expect_leaving_on = data4;
                //                 var ss = $.MvcSheetUI.SheetInfo.BizObject.DataItems.GZJJR.V.Code;
                //                 var work_to = ss.substring(30, 36);
                //                 var leader_role_to = work_to;
                //                 var hrbp_restraint_of_trade;
                //                 if ($.MvcSheetUI.SheetInfo.ActivityCode == "Activity11") {
                //                     if ($.MvcSheetUI.SheetInfo.BizObject.DataItems.JCQK.V == "解除") {
                //                         hrbp_restraint_of_trade = "1"
                //                     }
                //                     if ($.MvcSheetUI.SheetInfo.BizObject.DataItems.JCQK.V == "不解除") {
                //                         hrbp_restraint_of_trade = "2"
                //                     }
                //                     if ($.MvcSheetUI.SheetInfo.BizObject.DataItems.JCQK.V == "无竞业限制") {
                //                         hrbp_restraint_of_trade = "0"
                //                     }
                //                 } else {
                //                     if ($.MvcSheetUI.GetControlValue('JCQK') == "解除") {
                //                         hrbp_restraint_of_trade = "1"
                //                     }
                //                     if ($.MvcSheetUI.GetControlValue('JCQK') == "不解除") {
                //                         hrbp_restraint_of_trade = "2"
                //                     }
                //                     if ($.MvcSheetUI.GetControlValue('JCQK') == "无竞业限制") {
                //                         hrbp_restraint_of_trade = "0"
                //                     }
                //                 }
                //
                //                 var hrbp_reason_of_leaving = $.MvcSheetUI.SheetInfo.BizObject.DataItems.LZYYT.V == "" ? $.MvcSheetUI.GetElement("LZYYT").val() : $.MvcSheetUI.SheetInfo.BizObject.DataItems.LZYYT.V;
                //                 var reason_of_leaving = $.MvcSheetUI.SheetInfo.BizObject.DataItems.LZYY.V;
                //                 var reason_of_leaving = $.MvcSheetUI.SheetInfo.BizObject.DataItems.LZYY.V == "" ? $.MvcSheetUI.GetElement("LZYY").val() : $.MvcSheetUI.SheetInfo.BizObject.DataItems.LZYY.V;
                //                 var lzlx = $.MvcSheetUI.GetControlValue('LZLX');
                //                 var hrbp_type_of_leaving;
                //                 if (lzlx == "主动离职") {
                //                     hrbp_type_of_leaving = "1";
                //                 }
                //                 if (lzlx == "被动离职") {
                //                     hrbp_type_of_leaving = "2";
                //                 }
                //                 var hrbp_feedback = $.MvcSheetUI.SheetInfo.BizObject.DataItems.HRBPFK.V;
                //                 if (hrbp_feedback == "") {
                //                     hrbp_feedback = $.MvcSheetUI.GetControlValue('HRBPFK');
                //                 }
                //                 var hrd_feedback = $.MvcSheetUI.SheetInfo.BizObject.DataItems.HRDFK.V;
                //                 if (hrd_feedback == "") {
                //                     hrd_feedback = $.MvcSheetUI.GetControlValue('HRDFK');
                //                 }
                //                 var direct_leader_feedback = $.MvcSheetUI.SheetInfo.BizObject.DataItems.ZJSJFK.V;
                //                 var indirect_leader_feedback = "";
                //                 var nonce = Math.floor((new Date()).valueOf() / 1000);
                //                 var key = "375fccaaf3f6372aa60904188c87f3e739101765";
                //                 var allin = "company_code=" + company_code + "&direct_leader_feedback=" + direct_leader_feedback + "&empl_rcd=" + empl_rcd + "&expect_leaving_on=" + expect_leaving_on + "&hrbp_feedback=" + hrbp_feedback + "&hrbp_reason_of_leaving=" + hrbp_reason_of_leaving + "&hrbp_restraint_of_trade=" + hrbp_restraint_of_trade + "&hrbp_type_of_leaving=" + hrbp_type_of_leaving + "&hrd_feedback=" + hrd_feedback + "&indirect_leader_feedback=" + indirect_leader_feedback + "&leader_role_to=" + leader_role_to + "&mobile=" + SQRSJ + "&nonce=" + nonce + "&personal_email=" + personal_email + "&reason_of_leaving=" + reason_of_leaving + "&request_id=" + request_id + "&submitted_at=" + submitted_at + "&work_to=" + work_to + "&workcode=" + workcode + key;
                //                 var gn2 = $.md5(allin);
                //                 console.log(nonce);
                //                 console.log(allin);
                //                 console.log(gn2);
                //                 $.ajax({
                //                     async: false,
                //                     data: {
                //                         "request_id": request_id,
                //                         "workcode": workcode,
                //                         "submitted_at": submitted_at,
                //                         "empl_rcd": empl_rcd,
                //                         "company_code": company_code,
                //                         "expect_leaving_on": expect_leaving_on,
                //                         "mobile": SQRSJ,
                //                         "personal_email": personal_email,
                //                         "reason_of_leaving": reason_of_leaving,
                //                         "work_to": work_to,
                //                         "leader_role_to": leader_role_to,
                //                         "hrbp_restraint_of_trade": hrbp_restraint_of_trade,
                //                         "hrbp_type_of_leaving": hrbp_type_of_leaving,
                //                         "hrbp_reason_of_leaving": hrbp_reason_of_leaving,
                //                         "hrbp_feedback": hrbp_feedback,
                //                         "hrd_feedback": hrd_feedback,
                //                         "direct_leader_feedback": direct_leader_feedback,
                //                         "indirect_leader_feedback": indirect_leader_feedback,
                //                         "nonce": nonce,
                //                         "sign": gn2
                //                     },
                //                     //url: "https://hr-api.info.100tal.com/api/oa/v2/resignations",
                //                     url: "http://magpie-t1.info.runmystage.com/api/oa/v2/resignations",
                //                     //url: $.PublicAddress.MvcSheet.resignations,
                //                     type: "POST",
                //                     success: function (msg) {
                //                         //alert("成功创建离职流程1");
                //                     },
                //                     error: function (ww) {
                //                         test11 = ww;
                //                         alertMessage2(test11);
                //
                //
                //                     }
                //                 })
                //
                //             }
                //         } else {
                //             if ($.MvcSheetUI.SheetInfo.ActivityCode == "Activity10" || $.MvcSheetUI.SheetInfo.ActivityCode == "Activity44") {
                //
                //                 var request_id = $.MvcSheetUI.SheetInfo.InstanceId;
                //                 var workcode = $.MvcSheetUI.SheetInfo.BizObject.DataItems.YGBH.V;
                //                 var SQRSJ = $.MvcSheetUI.SheetInfo.BizObject.DataItems.SQRSJ.V;
                //                 var personal_email = $.MvcSheetUI.SheetInfo.BizObject.DataItems.GRYX.V;
                //                 var data = $.MvcSheetUI.SheetInfo.BizObject.DataItems.OriginateTime.V;
                //                 var submitted_at = data;
                //                 var empl_rcd = "0";
                //                 var company_code = $.MvcSheetUI.SheetInfo.BizObject.DataItems.GSBH.V;
                //                 var data3 = $.MvcSheetUI.SheetInfo.BizObject.DataItems.LZRQ.V;
                //                 var data4 = data3.substring(0, 10);
                //                 var expect_leaving_on = data4;
                //                 var ss = $.MvcSheetUI.SheetInfo.BizObject.DataItems.GZJJR.V.Code;
                //                 var work_to = ss.substring(30, 36);
                //                 var leader_role_to = work_to;
                //                 var hrbp_restraint_of_trade;
                //                 if ($.MvcSheetUI.SheetInfo.ActivityCode == "Activity11") {
                //                     if ($.MvcSheetUI.SheetInfo.BizObject.DataItems.JCQK.V == "解除") {
                //                         hrbp_restraint_of_trade = "1"
                //                     }
                //                     if ($.MvcSheetUI.SheetInfo.BizObject.DataItems.JCQK.V == "不解除") {
                //                         hrbp_restraint_of_trade = "2"
                //                     }
                //                     if ($.MvcSheetUI.SheetInfo.BizObject.DataItems.JCQK.V == "无竞业限制") {
                //                         hrbp_restraint_of_trade = "0"
                //                     }
                //                 } else {
                //                     if ($.MvcSheetUI.GetControlValue('JCQK') == "解除") {
                //                         hrbp_restraint_of_trade = "1"
                //                     }
                //                     if ($.MvcSheetUI.GetControlValue('JCQK') == "不解除") {
                //                         hrbp_restraint_of_trade = "2"
                //                     }
                //                     if ($.MvcSheetUI.GetControlValue('JCQK') == "无竞业限制") {
                //                         hrbp_restraint_of_trade = "0"
                //                     }
                //                 }
                //
                //                 var hrbp_reason_of_leaving = $.MvcSheetUI.SheetInfo.BizObject.DataItems.LZYYT.V == "" ? $.MvcSheetUI.GetElement("LZYYT").val() : $.MvcSheetUI.SheetInfo.BizObject.DataItems.LZYYT.V;
                //                 var reason_of_leaving = $.MvcSheetUI.SheetInfo.BizObject.DataItems.LZYY.V;
                //                 var reason_of_leaving = $.MvcSheetUI.SheetInfo.BizObject.DataItems.LZYY.V == "" ? $.MvcSheetUI.GetElement("LZYY").val() : $.MvcSheetUI.SheetInfo.BizObject.DataItems.LZYY.V;
                //                 var lzlx = $.MvcSheetUI.GetControlValue('LZLX');
                //                 var hrbp_type_of_leaving;
                //                 if (lzlx == "主动离职") {
                //                     hrbp_type_of_leaving = "1";
                //                 }
                //                 if (lzlx == "被动离职") {
                //                     hrbp_type_of_leaving = "2";
                //                 }
                //                 var hrbp_feedback = $.MvcSheetUI.SheetInfo.BizObject.DataItems.HRBPFK.V;
                //                 if (hrbp_feedback == "") {
                //                     hrbp_feedback = $.MvcSheetUI.GetControlValue('HRBPFK');
                //                 }
                //                 var hrd_feedback = $.MvcSheetUI.SheetInfo.BizObject.DataItems.HRDFK.V;
                //                 if (hrd_feedback == "") {
                //                     hrd_feedback = $.MvcSheetUI.GetControlValue('HRDFK');
                //                 }
                //                 var direct_leader_feedback = $.MvcSheetUI.SheetInfo.BizObject.DataItems.ZJSJFK.V;
                //                 var indirect_leader_feedback = "";
                //                 var nonce = Math.floor((new Date()).valueOf() / 1000);
                //                 var key = "375fccaaf3f6372aa60904188c87f3e739101765";
                //                 var allin = "company_code=" + company_code + "&direct_leader_feedback=" + direct_leader_feedback + "&empl_rcd=" + empl_rcd + "&expect_leaving_on=" + expect_leaving_on + "&hrbp_feedback=" + hrbp_feedback + "&hrbp_reason_of_leaving=" + hrbp_reason_of_leaving + "&hrbp_restraint_of_trade=" + hrbp_restraint_of_trade + "&hrbp_type_of_leaving=" + hrbp_type_of_leaving + "&hrd_feedback=" + hrd_feedback + "&indirect_leader_feedback=" + indirect_leader_feedback + "&leader_role_to=" + leader_role_to + "&mobile=" + SQRSJ + "&nonce=" + nonce + "&personal_email=" + personal_email + "&reason_of_leaving=" + reason_of_leaving + "&request_id=" + request_id + "&submitted_at=" + submitted_at + "&work_to=" + work_to + "&workcode=" + workcode + key;
                //                 var gn2 = $.md5(allin);
                //                 console.log(nonce);
                //                 console.log(allin);
                //                 console.log(gn2);
                //                 $.ajax({
                //                     async: false,
                //                     data: {
                //                         "request_id": request_id,
                //                         "workcode": workcode,
                //                         "submitted_at": submitted_at,
                //                         "empl_rcd": empl_rcd,
                //                         "company_code": company_code,
                //                         "expect_leaving_on": expect_leaving_on,
                //                         "mobile": SQRSJ,
                //                         "personal_email": personal_email,
                //                         "reason_of_leaving": reason_of_leaving,
                //                         "work_to": work_to,
                //                         "leader_role_to": leader_role_to,
                //                         "hrbp_restraint_of_trade": hrbp_restraint_of_trade,
                //                         "hrbp_type_of_leaving": hrbp_type_of_leaving,
                //                         "hrbp_reason_of_leaving": hrbp_reason_of_leaving,
                //                         "hrbp_feedback": hrbp_feedback,
                //                         "hrd_feedback": hrd_feedback,
                //                         "direct_leader_feedback": direct_leader_feedback,
                //                         "indirect_leader_feedback": indirect_leader_feedback,
                //                         "nonce": nonce,
                //                         "sign": gn2
                //                     },
                //                     //url: "https://hr-api.info.100tal.com/api/oa/v2/resignations",
                //                     url: "http://magpie-t1.info.runmystage.com/api/oa/v2/resignations",
                //                     //url: $.PublicAddress.MvcSheet.resignations,
                //                     type: "POST",
                //                     success: function (msg) {
                //                         //alert("成功创建离职流程1");
                //                     },
                //                     error: function (ww) {
                //                         test11 = ww;
                //                         alertMessage2(test11);
                //                     }
                //                 })
                //
                //
                //             }
                //         }
                //         if (test11) {
                //             return;
                //         }
                //     }
                    //$.LoadingMask.Show(SheetLanguages.Current.Sumiting);
                    if ($.MvcSheetUI.SheetInfo.WorkflowCode == "JSLYApprove") {
                        ////////////////申请人审批节点传参函数/////////////////
                        if ($.MvcSheetUI.SheetInfo.ActivityCode == "Activity8") {
                            siolon_test();
                        }
                        ////////////////申请人审批节点结束/////////////////////
                    }
                    var SheetPostValue = that.GetMvcPostValue(that.Action_Submit, destActivity, postValue);
                    that.PostSheet({
                            Command: that.Action_Submit,
                            MvcPostValue: JSON.stringify(SheetPostValue)
                        },
                    function (data) {
                        that.ResultHandler.apply(that, [actionControl, data]);
                    });
                }
            )
        },
        // 控件初始化事件
        ControlInit: function () {
        },
        // 控件初始化之前函数
        ControlPreRender: function () {
        },
        // 控件加载完成事件
        ControlRendered: function () {
        },
        //驳回
        Reject: function (actionControl, destActivity) {
            actionControl.IsReject = true;
            if (!$.MvcSheet.ActionValidata(actionControl))
                return false;
            var that = this;
            $.MvcSheet.ConfirmAction(SheetLanguages.Current.ConfirmDo + "【" + SheetLanguages.Current.Reject + "】" + SheetLanguages.Current.Operation + "?", function () {
                $.LoadingMask.Show(SheetLanguages.Current.Rejecting);
                var SheetPostValue = that.GetMvcPostValue(that.Action_Reject, destActivity);
                that.PostSheet({
                        Command: that.Action_Reject,
                        MvcPostValue: JSON.stringify(SheetPostValue)
                    },
                    function (data) {
                        that.ResultHandler.apply(that, [actionControl, data]);
                    });
            })
        },
        //结束流程
        FinishInstance: function (actionControl) {
            $.LoadingMask.Show(SheetLanguages.Current.Finishing);
            var SheetPostValue = this.GetMvcPostValue(this.Action_FinishInstance);
            var that = this;
            this.PostSheet({
                    Command: this.Action_FinishInstance,
                    MvcPostValue: JSON.stringify(SheetPostValue)
                },
                function (data) {
                    that.ResultHandler.apply(that, [actionControl, data]);
                });
        },
        //取回流程
        RetrieveInstance: function (actionControl) {
            $.LoadingMask.Show(SheetLanguages.Current.Retrieving);
            var that = this;

            this.GetSheet({
                    Command: this.Action_RetrieveInstance
                },
                function (data) {
                    that.ResultHandler.apply(that, [actionControl, data]);
                });
        },
        //获取Mvc表单传给后台的数据
        GetMvcPostValue: function (actionName, destActivity, postValue) {
            var SheetPostValue = {
                Command: actionName,
                DestActivityCode: destActivity,
                PostValue: postValue,
                BizObjectId: $.MvcSheetUI.SheetInfo.BizObjectID,
                InstanceId: $.MvcSheetUI.SheetInfo.InstanceId,
                BizObject: {}
                //当前表单的数据项集合值
            };

            SheetPostValue.BizObject.DataItems = $.MvcSheetUI.SaveSheetData(actionName);
            SheetPostValue.Priority = $.MvcSheetUI.Priority;
            SheetPostValue.HiddenFields = $.MvcSheetUI.HiddenFields;
            // TODO:需要获取当前提交人所选择的发起组织
            SheetPostValue.ParentUnitID = $.MvcSheetUI.ParentUnitID;
            return SheetPostValue;
        },
        //回调函数处理
        ResultHandler: function (actionControl, data) {
            if (data.UserIsNull || data.UserIsNull == "true") {
                alert("用户信息已失效，请重新登录！");
                $.LoadingMask.Hide();
                return;
            }

            if ($.MvcSheet.ActionDone) {
                $.MvcSheet.ActionDone.apply(actionControl, [data])
            }
            if (data == "undefined" || data == null)
                return;

            //提示消息设置
            if (data.EvalStr) {
                var message = eval(data.EvalStr);
                if (data.Message) {
                    data.Message = data.Message + message;
                } else {
                    data.Message = message;
                }
            }

            if (data.Successful) {
                //执行操作后获取任务数量
                top.postMessage("TotalCount", "*");
                if ($.MvcSheetUI.SheetInfo.IsMobile) {
                    if (actionControl.Action == "Save" && !$.MvcSheetUI.SheetInfo.IsOriginateMode) {
                        $.LoadingMask.Hide();
                        return;
                    }
                    //update by luxm发起流程先保存后提交bug
                    if (actionControl.Action == "Save" && $.MvcSheetUI.SheetInfo.IsOriginateMode) {
                        $.LoadingMask.Hide();
                        if ($.MvcSheetUI.IonicFramework.$rootScope.dingMobile.isDingMobile) {
                            window.location.href = data.Url;
                        } else {
                            window.location.replace(data.Url);
                        }
                        return;
                    }
                    //update by ouyangsk 同意，驳回，取消流程，或转发时才关闭表单
                    if (actionControl.Action != 'Assist' && actionControl.Action != 'Consult' && actionControl.Action != 'Circulate') {
                        //钉钉关闭表单
                        if ($.MvcSheetUI.IonicFramework.$rootScope.dingMobile.isDingMobile && $.MvcSheetUI.IonicFramework.$rootScope.loginfrom == "dingtalk") {
                            // dd.biz.navigation.close({
                            //     onSuccess: function (result) {
                            //     },
                            //     onFail: function (err) {
                            //     }
                            // });
                            // 返回上一级
                            dd.biz.navigation.goBack({
                                onSuccess : function(result) {
                                },
                                onFail : function(err) {}
                            });
                            // window.history.back();
                        } else {
                            if (typeof(WeixinJSBridge) != "undefined" && $.MvcSheetUI.IonicFramework.$rootScope.source == "message") {
                                //微信打开消息关闭表单
                                WeixinJSBridge.call("closeWindow");
                            } else if ($.MvcSheetUI.IonicFramework.$rootScope.loginfrom == "wechat") {
                                //微信关闭表单
                                var goIndex = $.MvcSheetUI.IonicFramework.$rootScope.orgIndex - window.history.length - 1;
                                window.history.go(goIndex);
                            } else {
                                //app关闭表单
                                //window.location.href = data.MobileReturnUrl;
                                window.history.go(-1);
                            }
                        }
                    } else {
                        //update by ouyangsk 协办，征询意见，传阅时不关闭当前表单
                        $.LoadingMask.Hide();
                        if (data.Message) {
                            alert(data.Message);
                            return;
                        }
                    }
                } else {
                    if (data.ClosePage || actionControl.Action === "Assist") {
                        //update by luwei : 异步处理可能导致拿不到数据,sleep 500ms FIXME
                        var t = Date.now();

                        function sleep(d) {
                            while (Date.now() - t <= d) ;
                        }
                        sleep(500);
                        if (!data.IsSaveAction) {
                            $.MvcSheet.ClosePage();
                        } else {
                            if (data.Refresh) {
                                var href = window.location.href;
                                href = href.replace("&T=", "&T=" + Math.round(Math.random() * 100, 0));
                                window.location.href = href;
                            }
                        }
                        // $.MvcSheet.ClosePage();
                        if (actionControl.Action === "Forward") {
                            alert(eval(data.EvalStr));
                        }
                    } else if (data.Url) {
                        window.location.href = data.Url;
                    } else if (data.Message) {
                        if (data.Refresh) {
                            var href = window.location.href;
                            href = href.replace("&T=", "&T=" + Math.round(Math.random() * 100, 0));
                            window.location.href = href;
                        }
                        alert(data.Message);
                    }
                }
            } else {
                //Error:错误提示方式需要修改
                if (data.Errors) {
                    for (var i = 0; i < data.Errors.length; i++) {
                        alert(data.Errors[i]);
                    }
                }
                if (data.Message) {
                    alert(data.Message);
                }
            }
            $.LoadingMask.Hide();
        },

        //关闭页面
        ClosePage: function () {
            try {
                if (window.opener != null
                    && window.opener.location != null
                    && window.opener.location.href != window.location.href
                    && $.MvcSheetUI.QueryString("Mode").toLowerCase() != "originate") {
                    window.opener.location.reload();
                    window.close();
                } else {
                    window.close();
                    //钉钉pc表单
                    window.open("about:blank", "_self");
                }
                //iframe 关闭当前表单页面
                top.window.postMessage("ClosePage", "*");
                if (!this.IsPC()) {
                    if ($.MvcSheetUI.IonicFramework.$rootScope.dingMobile.isDingMobile) {
                        dd.biz.navigation.close({});
                    } else {
                        //window.open('/Portal/Mobile/index.html', '_self');
                        window.history.go(-1);
                    }
                }
            } catch (e) {
                window.close();
            }
        },

        IsPC: function () {
            var userAgentInfo = navigator.userAgent;
            var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
            var flag = true;
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = false;
                    break;
                }
            }
            return flag;
        },
        //添加默认的事件
        AddDefaultActions: function () {
            if ($.MvcSheetUI.SheetInfo && $.MvcSheetUI.SheetInfo.IsMobile) {
                this.Actions.splice(0, this.Actions.length,
                    this.RetrieveInstanceAction,
                    this.SaveAction,
                    this.ViewInstanceAction,
                    this.PreviewParticipantAction,
                    this.PrintAction,
                    this.ViewedAction,
                    this.CancelInstanceAction,
                    this.RejectAction,
                    this.SubmitAction,
                    this.FinishInstanceAction,
                    this.ForwardAction,
                    this.AssistAction,
                    this.ConsultAction,
                    this.CirculateAction,
                    this.AdjustParticipantAction,
                    this.LockInstanceAction,
                    this.UnLockInstanceAction,
                    this.CloseAction);
            } else {
                this.Actions.splice(0, this.Actions.length,
                    this.RetrieveInstanceAction,
                    this.SaveAction,
                    this.ViewInstanceAction,
                    this.PreviewParticipantAction,
                    this.PrintAction,
                    this.ViewedAction,
                    this.CancelInstanceAction,
                    this.SubmitAction,
                    this.RejectAction,
                    this.FinishInstanceAction,
                    this.ForwardAction,
                    this.AssistAction,
                    this.ConsultAction,
                    this.CirculateAction,
                    this.AdjustParticipantAction,
                    this.LockInstanceAction,
                    this.UnLockInstanceAction,
                    this.CloseAction);
            }

        },

        //添加自定义事件
        AddAction: function (option) {
            // Actions.length为0时，说明Load的异步返回数据还没返回，添加到Actions里面就可以了，系统Load回来会执行
            if ($.MvcSheetToolbar.AddButton) {
                $.MvcSheetToolbar.AddButton(option);
            } else {
                if (this.Actions.length == 0) {
                    this.AddDefaultActions();
                }
            }
            if (option.PreAction) {
                for (var i in this.Actions) {
                    if (this.Actions[i].Action == option.PreAction) {
                        if (i < this.Actions.length - 1)
                            i++;
                        this.Actions.splice(i, 0, option);
                        break;
                    }
                }
            } else {
                this.Actions.push(option);
            }
        },

        //用get方式可传送简单数据，但大小一般限制在1KB下，数据追加到url中发送（http的header传送），
        //也就是说，浏览器将各个表单字段元素及其数据按照URL参数的格式附加在请求行中的资源路径后面。
        //另外最重要的一点是，它会被客户端的浏览器缓存起来，那么，别人就可以从浏览器的历史记录中，读取到此客户的数据，比如帐号和密码等。
        //因此，在某些情况下，get方法会带来严重的安全性问题;GET方式传送数据量小，处理效率高，安全性低，会被缓存，而POST反之
        GetSheet: function (data, callback, errorhandler, async) {
            $.ajax({
                type: "GET",
                url: this.AjaxUrl,
                data: data,
                dataType: "json",
                //update by ouyangsk
                async: false,
                success: callback,
                error: errorhandler
            });
        },
        //当使用POST方式时，浏览器把各表单字段元素及其数据作为HTTP消息的实体内容发送给Web服务器，
        //而不是作为URL地址的参数进行传递，使用POST方式传递的数据量要比使用GET方式传送的数据量大的多
        PostSheet: function (data, callback, errorhandler, async) {
            var ajaxUrl = this.AjaxUrl;
            //update by zhengyj 。地址拼接
            if (ajaxUrl.indexOf("http://") == -1) {
                ajaxUrl = window.location.href.substr(0, window.location.href.indexOf("MvcDefaultSheet")) + this.AjaxUrl;
            }
            if (ajaxUrl.toLowerCase().indexOf("&bizobjectid=") == -1) {
                ajaxUrl = ajaxUrl + "&BizObjectID=" + $.MvcSheetUI.SheetInfo.BizObjectID;
            }
            if (typeof(async) == "undefined")
                async = true;
            if (typeof(errorhandler) == "undefined") {
                errorhandler = function (e) {
                    alert("系统出现异常!");
                    $.LoadingMask.Hide();
                };
            }

            $.ajax({
                type: "POST",
                url: ajaxUrl,
                data: data,
                dataType: "json",
                async: async,
                success: callback,
                error: errorhandler
            });
        }
    });
var MvcSheetUIGlobalString = {
    "RegularExpression_errorMessage": "绑定的正则表达式不合法:"
};

//组件基类
(function ($) {
    //继承函数:所有的类继承关系，通过这个函数实现
    Function.prototype.Inherit = function (parent, overrides) {
        if (typeof parent != 'function') return this;
        // 保存对父类的引用
        this.Base = parent.prototype;
        this.Base.constructor = parent;
        // 继承
        var f = function () { };
        f.prototype = parent.prototype;
        this.prototype = new f();
        this.prototype.constructor = this;
        //附加属性方法
        if (overrides) $.extend(this.prototype, overrides);
    };

    // 获取字符串类
    String.prototype = {
        trim: function () {
            return this.replace(/[ ]/g, "");
        }
    }
    Date.prototype.format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S": this.getMilliseconds()
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? o[k] : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    }

    //获取SheetUi控件管理器
    $.fn.SheetUIManager = function (rowNum) {
        var manager;

        if ($(this).data($.MvcSheetUI.SheetIDKey)) {
            return $.MvcSheetUI.ControlManagers[$(this).data($.MvcSheetUI.SheetIDKey)]
        }

        //数据项
        var datafield = $(this).data($.MvcSheetUI.DataFieldKey.toLowerCase());
        if (datafield == undefined) return manager;

        var dataitem = $.MvcSheetUI.GetSheetDataItem(datafield, rowNum);
        if (dataitem == undefined) return manager;

        //控件名称:如 SheetTextBox,可以直接 $(this).SheetTextBox(),也可以通过 $.MvcSheetUI.Run.call(this,"SheetTextBox",{参数});
        //var controlName = $(this).attr($.MvcSheetUI.PreDataKey + $.MvcSheetUI.SheetControlKey.toLowerCase());
        //$.MvcSheetUI.Run.call($(this), controlName, DataItems[datafield] || {});
        $(this).each(function () {
            if (manager != null) {
                return;
            }
            switch (this.tagName.toLowerCase()) {
                case "label":
                case "span":
                    manager = $(this).SheetLabel(dataitem);
                    break;
                case "p":

                    manager = $(this).SheetHandwrittenSignature(dataitem);
                    break;
                case "input":
                    switch (this.type) {
                        case "text":
                            if (dataitem.L == $.MvcSheetUI.LogicType.DateTime) {
                                manager = $(this).SheetTime(dataitem);
                            } else if (dataitem.L == $.MvcSheetUI.LogicType.SheetAssociation) {
                                manager = $(this).SheetAssociation(dataitem);
                            } else {
                                manager = $(this).SheetTextBox(dataitem);
                            }
                            break;
                        case "checkbox":
                            $(this).SheetCheckbox(dataitem);
                            break;
                        case "radio":
                            manager = $(this).SheetRadioButtonList(dataitem);
                            break;
                        default:
                            break;
                    }
                    break;
                case "textarea":
                    manager = $(this).SheetRichTextBox(dataitem);
                    break;
                case "div":
                    var controlType = $(this).data("type");
                    if (controlType) {
                        if (controlType.toLowerCase() == "sheetoffice" && !(!!window.ActiveXObject || "ActiveXObject" in window)) {
                            controlType = "SheetAttachment";
                        }
                        manager = $.MvcSheetUI.Run.call($(this), controlType, [dataitem]);
                        //if (controlType.toLowerCase() == "sheetcheckboxlist")
                        //    manager = $(this).SheetCheckboxList(dataitem);
                        //else if (controlType.toLowerCase() == "sheetradiobuttonlist")
                        //    manager = $(this).SheetRadioButtonList(dataitem);
                        //else if (controlType.toLowerCase() == "sheetuser") {
                        //    manager = $(this).SheetUser(dataitem);
                        //}
                        //else if (controlType.toLowerCase() == "sheetattachment") {
                        //    manager = $(this).SheetAttachment(dataitem);
                        //}
                        //else if (controlType.toLowerCase() == "sheetcomment") {
                        //    manager = $(this).SheetComment(dataitem);
                        //}
                    } else if (dataitem) {
                        if (dataitem.L == $.MvcSheetUI.LogicType.SingleParticipant ||
                            dataitem.L == $.MvcSheetUI.LogicType.MultiParticipant) {
                            //参与者
                            manager = $(this).SheetUser(dataitem);
                        } else if (dataitem.L == $.MvcSheetUI.LogicType.Attachment) {
                            manager = $(this).SheetAttachment(dataitem);
                        } else if (dataitem.L == $.MvcSheetUI.LogicType.Comment) {
                            manager = $(this).SheetComment(dataitem);
                        } else if (dataitem.L == $.MvcSheetUI.LogicType.TimeSpan) {
                            manager = $(this).SheetTimeSpan(dataitem);
                        }
                    }
                    break;
                case "table":
                    if (dataitem.L == $.MvcSheetUI.LogicType.BizObjectArray || dataitem.L == $.MvcSheetUI.LogicType.BizObject) {
                        manager = $(this).SheetGridView(dataitem);
                    }
                    break;
                case "select":
                    if ($(this).data("type") == "SheetInstancePrioritySelector") {
                        manager = $(this).SheetInstancePrioritySelector(dataitem);
                    } else if ($(this).data("type") == "SheetOriginatorUnit") {
                        manager = $(this).SheetOriginatorUnit(dataitem);
                    } else {
                        manager = $(this).SheetDropDownList(dataitem);
                    }
                    break;
                case "a":
                    manager = $(this).SheetHyperLink(dataitem);
                    break;
                    //default:
                    //    manager = $(this).SheetTextBox(dataitem);
            }
        });
        return manager;
    }
    $.fn.SheetUIManager2 = function (rowNum) {
        var manager;

        if ($(this).data($.MvcSheetUI.SheetIDKey)) {
            return $.MvcSheetUI.ControlManagers[$(this).data($.MvcSheetUI.SheetIDKey)]
        }

        //数据项
        var datafield = $(this).data($.MvcSheetUI.DataFieldKey.toLowerCase());
        if (datafield == undefined) return manager;

        var dataitem = $.MvcSheetUI.GetSheetDataItem2(datafield, rowNum);
        if (dataitem == undefined) return manager;

        //控件名称:如 SheetTextBox,可以直接 $(this).SheetTextBox(),也可以通过 $.MvcSheetUI.Run.call(this,"SheetTextBox",{参数});
        //var controlName = $(this).attr($.MvcSheetUI.PreDataKey + $.MvcSheetUI.SheetControlKey.toLowerCase());
        //$.MvcSheetUI.Run.call($(this), controlName, DataItems[datafield] || {});
        $(this).each(function () {
            if (manager != null) {
                return;
            }
            switch (this.tagName.toLowerCase()) {
                case "label":
                case "span":
                    manager = $(this).SheetLabel(dataitem);
                    break;
                case "input":
                    switch (this.type) {
                        case "text":
                            if (dataitem.L == $.MvcSheetUI.LogicType.DateTime) {
                                manager = $(this).SheetTime(dataitem);
                            } else if (dataitem.L == $.MvcSheetUI.LogicType.SheetAssociation) {
                                manager = $(this).SheetAssociation(dataitem);
                            } else {
                                manager = $(this).SheetTextBox(dataitem);
                            }
                            break;
                        case "checkbox":
                            $(this).SheetCheckbox(dataitem);
                            break;
                        case "radio":
                            manager = $(this).SheetRadioButtonList(dataitem);
                            break;
                        default:
                            break;
                    }
                    break;
                case "textarea":
                    manager = $(this).SheetRichTextBox(dataitem);
                    break;
                case "div":
                    var controlType = $(this).data("type");
                    if (controlType) {
                        if (controlType.toLowerCase() == "sheetoffice" && !(!!window.ActiveXObject || "ActiveXObject" in window)) {
                            controlType = "SheetAttachment";
                        }
                        manager = $.MvcSheetUI.Run.call($(this), controlType, [dataitem]);
                        //if (controlType.toLowerCase() == "sheetcheckboxlist")
                        //    manager = $(this).SheetCheckboxList(dataitem);
                        //else if (controlType.toLowerCase() == "sheetradiobuttonlist")
                        //    manager = $(this).SheetRadioButtonList(dataitem);
                        //else if (controlType.toLowerCase() == "sheetuser") {
                        //    manager = $(this).SheetUser(dataitem);
                        //}
                        //else if (controlType.toLowerCase() == "sheetattachment") {
                        //    manager = $(this).SheetAttachment(dataitem);
                        //}
                        //else if (controlType.toLowerCase() == "sheetcomment") {
                        //    manager = $(this).SheetComment(dataitem);
                        //}
                    } else if (dataitem) {
                        if (dataitem.L == $.MvcSheetUI.LogicType.SingleParticipant ||
                            dataitem.L == $.MvcSheetUI.LogicType.MultiParticipant) {
                            //参与者
                            manager = $(this).SheetUser(dataitem);
                        } else if (dataitem.L == $.MvcSheetUI.LogicType.Attachment) {
                            manager = $(this).SheetAttachment(dataitem);
                        } else if (dataitem.L == $.MvcSheetUI.LogicType.Comment) {
                            manager = $(this).SheetComment(dataitem);
                        } else if (dataitem.L == $.MvcSheetUI.LogicType.TimeSpan) {
                            manager = $(this).SheetTimeSpan(dataitem);
                        }
                    }
                    break;
                case "table":
                    if (dataitem.L == $.MvcSheetUI.LogicType.BizObjectArray || dataitem.L == $.MvcSheetUI.LogicType.BizObject) {
                        manager = $(this).SheetGridView(dataitem);
                    }
                    break;
                case "select":
                    if ($(this).data("type") == "SheetInstancePrioritySelector") {
                        manager = $(this).SheetInstancePrioritySelector(dataitem);
                    } else if ($(this).data("type") == "SheetOriginatorUnit") {
                        manager = $(this).SheetOriginatorUnit(dataitem);
                    } else {
                        manager = $(this).SheetDropDownList(dataitem);
                    }
                    break;
                case "a":
                    manager = $(this).SheetHyperLink(dataitem);
                    break;
                //default:
                //    manager = $(this).SheetTextBox(dataitem);
            }
        });
        return manager;
    }
    //核心属性
    $.MvcSheetUI = {
            //版本信息
            Version: "V1.0",
            //已经渲染过后的标示前缀
            SheetIDKey: "sheetid",
            //页面参数属性、事件的属性
            PreDataKey: "data-",
            //数据项属性
            DataFieldKey: "DataField",
            //数据项属性
            ComputationRule: "ComputationRule",
            //控件名称
            SheetControlKey: "SheetControl",
            Type: "Type",
            // 2018-12-28 modify by ousf 增加子目录支持 -----------------
            //PortalRoot: typeof (_PORTALROOT_GLOBAL) == "undefined" ? window.localStorage.getItem("H3.PortalRoot") : _PORTALROOT_GLOBAL, // 这是一个全局变量，获取Portal的根目录路径
            PortalRoot: window.localStorage.getItem("H3.PortalRoot")==""? getRootPath_web() : window.localStorage.getItem("H3.PortalRoot"), // 这是一个全局变量，获取Portal的根目录路径
            // --------------------------------------------------------
            // Mvc后台传递给表单的信息
            SheetInfo: null,
            // 这个对象是之前版本的JS，待合并之前的MvcRuntime后可以去除
            MvcRuntime: null,
            //优先级
            Priority: "Unspecified",
            ParentUnitID: "", //存储发起部门
            //HiddenFields
            HiddenFields: {},
            // 是否正在加载中
            Loading: false,
            //控件池
            Controls: {},
            //数量
            ManagerCount: 0,
            //管理器
            ControlManagers: {},
            IonicFramework: {},
            // Css 定义
            Css: {
                inputMouseOut: "inputMouseOut", // 鼠标离开时样式
                inputMouseMove: "inputMouseMove", // 鼠标移动到上面时样式
                inputMouseEnter: "", //inputMouseEnter 鼠标进入控件时样式
                inputError: "inputError", // 输入错误时显示样式
                InvalidText: "InvalidText", // 错误字体时样式
                Readonly: "Readonly" // 只读样式
            },
            ValidateText: "表单验证不通过!",
            //$.fn.Sheet{control}
            //会调用这个方法,并传入作用域(this)
            //control [control]  空间名
            //parm [args] 参数(数组)
            Run: function (control, args) {
                //属性
                var p = $.ControlsOptions.GetDefaultOptions(control);
                if (args.length > 0) {
                    $.extend(p, { DataItem: args[0] });
                    $.extend(p, args[0]);
                }
                var currentSheetIDKey = 0;
                var isOneControl = 0;
                //循环页面上的控件
                this.each(function () {
                    if (!$(this).data($.MvcSheetUI.SheetIDKey)) {
                        isOneControl++;
                        $.MvcSheetUI.ManagerCount++;
                        currentSheetIDKey = $.MvcSheetUI.SheetIDKey + "-" + $.MvcSheetUI.ManagerCount.toString();
                        p[$.MvcSheetUI.DataFieldKey] = $(this).data($.MvcSheetUI.DataFieldKey.toLowerCase());
                        p[$.MvcSheetUI.Type] = control;
                        $(this).data($.MvcSheetUI.SheetIDKey, currentSheetIDKey);
                        $.MvcSheetUI.ControlManagers[$(this).data($.MvcSheetUI.SheetIDKey)] = new $.MvcSheetUI.Controls[control](this, p, $.MvcSheetUI.SheetInfo);
                    } else {
                        isOneControl = 1;
                        return;
                    }
                });
                //如果是一个的话，返回当前控件管理器
                if (isOneControl == 1) {
                    return $.MvcSheetUI.ControlManagers[$(this).data($.MvcSheetUI.SheetIDKey)];
                }
            },
            //读取表单数据
            GetSheetDataItem: function (datafield, rowNum) {
                // console.log(datafield, rowNum)
                var DataItems = $.MvcSheetUI.SheetInfo.BizObject.DataItems;
                if (datafield == undefined) return null;
                var dataitem = null;
                //处理子表
                if (datafield.indexOf(".") > -1 && DataItems[datafield.split(".")[0]] && DataItems[datafield.split(".")[0]].L == $.MvcSheetUI.LogicType.BizObject) {
                    if (DataItems[datafield.split(".")[0]].V.DataItems) {
                        dataitem = DataItems[datafield.split(".")[0]].V.DataItems[datafield];
                        $.extend(dataitem, { BizObjectID: DataItems[datafield.split(".")[0]].V.DataItems[datafield.split(".")[0] + ".ObjectID"].V })
                        $.extend(dataitem, { RowNum: 1 })
                        return DataItems[datafield.split(".")[0]].V.DataItems[datafield];
                    }
                }
                else if (rowNum != undefined && rowNum > 0 && datafield.indexOf(".") > -1) {
                    rowNum = rowNum - 1;
                    var parentdatafield = datafield.split(".")[0];
                    var DetailVale = DataItems[parentdatafield].V;
                    if (DetailVale.R && DetailVale.R.length > rowNum) {
                        //该行有数据，默认加载数据
                        dataitem = DetailVale.R[rowNum].DataItems[datafield];
                        // console.log(target, "target----")
                        // dataitem.V = ""
                        $.extend(dataitem, { BizObjectID: DetailVale.R[rowNum].DataItems[parentdatafield + ".ObjectID"].V })
                    } else { //该行无数据，默认数据渲染
                        var DefaultRow = DetailVale.T;
                        if (!DefaultRow) {
                            DefaultRow = this.GetElement(parentdatafield).SheetUIManager().DefaultRow;
                        }
                        if (DefaultRow)
                            dataitem = DefaultRow.DataItems[datafield];
                    }
                    $.extend(dataitem, { RowNum: rowNum + 1 })
                }
                else {
                    dataitem = DataItems[datafield];
                    $.extend(dataitem, { RowNum: 0 })
                }
                if (datafield == "OriginateTime") {
                    dataitem.V = (new Date(dataitem.V.replace(/-/g, '/'))).format("yyyy-MM-dd hh:mm");
                }
                return dataitem;
            },
            GetSheetDataItem2: function (datafield, rowNum) {
                // console.log(datafield, rowNum)
                var DataItems = $.MvcSheetUI.SheetInfo.BizObject.DataItems;
                if (datafield == undefined) return null;
                var dataitem = null;
                //处理子表
                if (datafield.indexOf(".") > -1 && DataItems[datafield.split(".")[0]] && DataItems[datafield.split(".")[0]].L == $.MvcSheetUI.LogicType.BizObject) {
                    if (DataItems[datafield.split(".")[0]].V.DataItems) {
                        dataitem = DataItems[datafield.split(".")[0]].V.DataItems[datafield];
                        $.extend(dataitem, { BizObjectID: DataItems[datafield.split(".")[0]].V.DataItems[datafield.split(".")[0] + ".ObjectID"].V })
                        $.extend(dataitem, { RowNum: 1 })
                        return DataItems[datafield.split(".")[0]].V.DataItems[datafield];
                    }
                } else if (rowNum != undefined && rowNum > 0 &&
                    datafield.indexOf(".") > -1) {
                    rowNum = rowNum - 1;
                    var parentdatafield = datafield.split(".")[0];
                    var DetailVale = DataItems[parentdatafield].V;
                    if (DetailVale.R && DetailVale.R.length > rowNum) {
                        //该行有数据，默认加载数据
                        dataitem = DetailVale.R[rowNum].DataItems[datafield];
                        // console.log(target, "target----")
                        dataitem.V = "";
                        $.extend(dataitem, { BizObjectID: DetailVale.R[rowNum].DataItems[parentdatafield + ".ObjectID"].V });
                    } else { //该行无数据，默认数据渲染
                        var DefaultRow = DetailVale.T;
                        if (!DefaultRow) {
                            DefaultRow = this.GetElement(parentdatafield).SheetUIManager().DefaultRow;
                        }
                        if (DefaultRow)
                            dataitem = DefaultRow.DataItems[datafield];
                    }
                    $.extend(dataitem, { RowNum: rowNum + 1 })
                } else {
                    dataitem = DataItems[datafield];
                    $.extend(dataitem, { RowNum: 0 })
                }
                if (datafield == "OriginateTime") {
                    dataitem.V = (new Date(dataitem.V.replace(/-/g, '/'))).format("yyyy-MM-dd hh:mm");
                }
                return dataitem;
            },
            //保存事件，获取所有控件的保存后返回的值
            SaveSheetData: function (actionName) {
                var SheetData = {};
                for (var control in this.ControlManagers) {
                    var controlManager = this.ControlManagers[control];
                    //字表中的control不调用SaveDataField，由子表自己调用SaveDataField保存值
                    if (controlManager.Type && controlManager.Type == "SheetHiddenField") {
                        $.extend(SheetData, controlManager.SaveDataField(actionName));
                    } else {
                        if (!$.isFunction(controlManager.SaveDataField) ||
                            controlManager.DataField == undefined ||
                            (controlManager.DataField.indexOf(".") != -1 && controlManager.DataField != "Originator.OUName")) continue;
                        $.extend(SheetData, controlManager.SaveDataField(actionName));
                    }
                }
                return SheetData;
            },
            //获取控件Dom元素(JQuery对象)，参数可以是数据项名称，也可以是#id
            GetElement: function (datafiled, rownum) {
                var element;
                var row = rownum == undefined ? 0 : rownum;
                if (datafiled.indexOf("#") == 0) {
                    element = $(datafiled);
                } else {
                    if (datafiled.indexOf('.') > -1) {
                        //子表
                        if (rownum == undefined) {
                            row = 1; //默认第一行
                        }

                        //element = $("[" + this.PreDataKey + this.DataFieldKey.toLowerCase() + "='" + datafiled + "'][data-row=" + row + "]");
                        element = $("tr[data-row='" + row + "']").find("[" + this.PreDataKey + this.DataFieldKey.toLowerCase() + "='" + datafiled + "']");
                        if ($.MvcSheetUI.QueryString("ismobile") == "true" || element.length == 0) {
                            element = $("div[data-row='" + row + "']").find("[" + this.PreDataKey + this.DataFieldKey.toLowerCase() + "='" + datafiled + "']");
                        }
                    }
                    else {
                        $("[" + this.PreDataKey + this.DataFieldKey.toLowerCase() + "='" + datafiled + "']").each(function () {
                            var flag = true;
                            if (this.tagName.toLowerCase() == "td") {
                                flag = false;
                            }
                            else if (this.tagName.toLowerCase() == "div") {
                                if ($("table[" + $.MvcSheetUI.PreDataKey + $.MvcSheetUI.DataFieldKey.toLowerCase() + "='" + datafiled + "']").length > 0) {
                                    flag = false;
                                }
                            }
                            if (flag) {
                                if ((this.tagName.toLowerCase() == "label" || this.tagName.toLowerCase() == "span") &&
                                    $(this).attr("BindType") == "All") {
                                    element = $(this);
                                }
                                else {
                                    element = $(this);
                                }
                            }
                        });
                    }
                }
                return element;
            },
            //读取数据，参数可以是数据项名称，也可以是#id
            GetControlValue: function (datafiled, rownum) {
                var control = this.GetElement(datafiled, rownum);
                if (control) {
                    var manager = $(control).SheetUIManager();
                    if (manager) {
                        return manager.GetValue();
                    } else {
                        return null;
                    }
                } else {
                    return null;
                }
            },
            // 设置数据项前端控件的值
            // 参数1：数据项名称，参数2：数据项的值，参数3：行号(对子表有效)
            SetControlValue: function (datafiled, val, rownum) {
                var control = this.GetElement(datafiled, rownum);
                if (control) {
                    var manager = $(control).SheetUIManager();
                    if (manager) {
                        manager.SetValue(val);
                    }
                }
            },
            // 函数：控件校验
            // 参数1：effective是否做有效校验，在Save时，只做数据有效校验，不做必填校验
            Validate: function (actionControl, effective) {
                var flag = true;
                if (!effective) effective = false;
                //if (this.SheetInfo.IsMobile) {
                //    if ($(".SheetComment").find("textarea").length > 0 && !$.trim($(".SheetComment").find("textarea").val())) {
                //        alert("请输入审核意见!");
                //        return false;
                //    }
                //}

                if (actionControl.IsReject) { // 驳回只做有效性校验
                    effective = true;
                }
                for (var control in this.ControlManagers) {
                    var controlManager = this.ControlManagers[control];
                    if (!$.isFunction(controlManager.Validate)) continue;
                    if (controlManager instanceof $.MvcSheetUI.Controls.SheetComment &&
                        actionControl.IsReject) {
                        if (!controlManager.Validate(false) && flag) {
                            controlManager.SetFocus();
                            flag = false;
                        }
                    } else if (!controlManager.Validate(effective) && flag) {
                        controlManager.SetFocus();
                        flag = false;
                    }
                }
                if (!flag) {
                	//update by ouyangsk
                	alert(SheetLanguages.Current.SheetValidateError);
                }
                return flag;
            }
        };

    //控件属性
    $.ControlsOptions = {
        GetDefaultOptions: function (control) {
            var p = {};
            var options = SheetControls[control] || this[control];
            for (var key in options) {
                if (options[key].constructor == String ||
                    options[key].constructor == Number ||
                    options[key].constructor == Object) {
                    p[key] = options[key] || "";
                } else if (options[key].constructor == Array) {
                    for (var i = 0; i < options[key].length; ++i) {
                        p[options[key][i].Name] = options[key][i].DefaultValue || "";
                    }
                }
            }
            return p;
        }
    };

    // 控件的逻辑类型
    $.MvcSheetUI.SheetMode = {
        Unspecified: -1,
        Work: 1,
        View: 2,
        Originate: 3,
        Print: 4
    },

    // 控件的逻辑类型
        $.MvcSheetUI.LogicType = {
            /// 空值
            Unspecified: -1,
            /// 逻辑数组型
            BoolArray: 0,
            /// 逻辑型
            Bool: 1,
            /// 时间数组型
            DateTimeArray: 4,
            /// 日期型
            DateTime: 5,
            /// 双精度数组型
            DoubleArray: 6,
            /// 双精度数值型
            Double: 7,
            /// 整数数组型
            IntArray: 8,
            /// 整数
            Int: 9,
            /// 长整型数组型
            LongArray: 10,
            /// 长整数
            Long: 11,
            /// 字符串数组型
            StringArray: 12,
            /// 长文本
            String: 13,
            /// 短文本
            ShortString: 14,
            /// 签名
            // Sign : 15,
            /// 链接
            HyperLink: 16,
            /// 审批
            Comment: 17,
            /// 二进制流
            ByteArray: 20,
            /// 未指定类型的附件
            Attachment: 24,
            /// 时间段型
            TimeSpan: 25,
            /// 参与者（单人）
            SingleParticipant: 26,
            /// 参与者（多人）
            MultiParticipant: 27,
            /// Html
            Html: 30,
            /// 对象类型
            Object: 31,
            /// Xml
            Xml: 32,
            /// Guid  
            Guid: 33,
            /// Guid数组
            GuidArray: 34,
            /// Decimal
            Decimal: 35,
            /// Decimal数组
            DecimalArray: 36,
            /// 业务对象
            BizObject: 40,
            /// 业务对象数组
            BizObjectArray: 41,
            /// 业务结构
            BizStructure: 42,
            /// 业务结构数组
            BizStructureArray: 43,
            //关联表单
            SheetAssociation: 45,
            //手写签名
            SheetHandwrittenSignature: 46,
        },

    //用户类型
        $.MvcSheetUI.UnitType = {
            /// 未指定
            Unspecified: 0x01 | 0x10 | 0x02 | 0x04 | 0x08 | 0x20 | 0x40,
            /// 公司
            Company: 0x01,
            /// 组织单元
            OrganizationUnit: 0x02,
            /// 组
            Group: 0x04,
            /// 用户
            User: 0x08,
            /// 类别组
            Segment: 0x10,
            /// 岗位
            Post: 0x20,
            /// 编制
            Staff: 0x40
        };

    //读取url的参数值
    $.MvcSheetUI.QueryString = function (name) {
        var reg = new RegExp("(^|&)" + name.toLowerCase() + "=([^&]*)(&|$)", "i");
        var r = decodeURI(window.location.search.toLowerCase().substr(1)).match(reg);
        if (r != null) return decodeURI(r[2]); //   decodeURIComponent(encodeURIComponent (unescape(r[2])));
        return null;
    };

    //创建Guid
    $.MvcSheetUI.NewGuid = function () {
        var getStr = function (len) {
            if (len > 12) len = 12;
            return Math.floor(Math.random() * 100000000000000).toString("16").substring(0, len);
        };
        return (getStr(8) + "-" + getStr(4) + "-4" + getStr(3) + "-" + getStr(4) + "-" + getStr(12)).trim();
    };

    //使用bootstrap的模态框
    //@title:标题
    //@target:内容，可以是<div></div>
    //@actions:工具栏，可不传；[{Text:"test",DoAction:function,其他想要的参数},{Text:"test",DoAction:function,其他想要的参数}]
    $.SheetModal = function (title, target, actions) {
        this.IsShow = false;
        this.ShowModal(title, target, actions);
    };
    $.SheetModal.prototype = {

        ShowModal: function (title, target, actions) {
            // console.log(title, target, actions)
            this.ID = $.MvcSheetUI.NewGuid();
            this.Modal = $('<div class="modal fade" id="' + this.ID + '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"></div>');
            var modalDialog = $('<div class="modal-dialog"></div>');
            var modalContent = $('<div class="modal-content"></div>');
            var modalHeader = $('<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');

            //以下三个主要才是需要填充的
            this.ModalTitle = $('<h4 class="modal-title" id="myModalLabel"></h4>');
            this.ModalBody = $('<div class="modal-body"></div>');
            this.ModalFooter = $('<div class="modal-footer"></div>');

            this.Modal.append(modalDialog);
            modalDialog.append(modalContent);
            modalContent.append(modalHeader);
            modalHeader.append(this.ModalTitle);
            modalContent.append(this.ModalBody);
            modalContent.append(this.ModalFooter);

            this.SetTile(title);
            this.SetBody(target);
            //操作
            if (actions) {
                for (var i = 0; i < actions.length; i++) {
                    var btnJson = actions[i];
                    this.AddAction(btnJson);
                }
            }
            //显示
            this.Show();

            //绑定关闭事件
            this.Modal.on("hidden.bs.modal", this, function (e) {
                e.data.IsShow = false;
            });

            return this;
        },
        SetTile: function (title) {
            this.ModalTitle.html(title);
        },
        SetBody: function (target) {
            this.ModalBody.append($(target));
        },
        AddAction: function (actionObject) {
            $.extend(actionObject, { ModalManager: this })
            var btn = $('<button type="button" class="btn">' + actionObject.Text + '</button>');
            // 绑定修改事件
            if (actionObject.DoAction) {
                btn.unbind("click").bind("click", actionObject, function (e) {
                    e.data.DoAction.apply(e.data);
                });
            }
            this.ModalFooter.append(btn);
        },
        Show: function () {
            if (this.IsShow) return;
            this.IsShow = true;
            this.Modal.modal("show");

        },
        Hide: function () {
            if (!this.IsShow) return;
            this.IsShow = false;
            this.Modal.modal("hide");
        }
    };

    //添加Jquery 的公共接口
    $.extend({
        //加载提示
        LoadingMask: {
            Show: function (msg, isAlpha) {
                if ($.MvcSheetUI.QueryString("ismobile")
                    && $.MvcSheetUI.QueryString("ismobile").toLowerCase() == "true") {
                    $.MvcSheetUI.IonicFramework.fcommonJS.loadingShow("");
                } else {
                    if ($.SheetMask.IsShow) return;
                    $.SheetMask.Show(isAlpha);
                    //添加消息
                    this.MsgDiv = $("<div></div>");
                    this.MsgDiv.append($("<img src='WFRes/_Content/themes/ligerUI/Aqua/images/common/bigloading.gif' />"));
                    this.MsgDiv.append($("<span style=\"font-size: 18px;font-weight: bold;padding-left: 10px;\">" + msg + "</span>"));
                    this.MsgDiv.css("position", "fixed");
                    this.MsgDiv.css("top", "42%");
                    this.MsgDiv.css("left", "43%");
                    this.MsgDiv.css("z-index", "9999");
                    this.MsgDiv.appendTo($("body"));
                }
            },
            Hide: function () {
                if ($.MvcSheetUI.QueryString("ismobile") && $.MvcSheetUI.QueryString("ismobile").toLowerCase() == "true") {
                    $.MvcSheetUI.IonicFramework.fcommonJS.loadingHide();
                } else {
                    if ($.SheetMask.IsShow) {
                        $.SheetMask.Hide();
                        this.MsgDiv.remove();
                    }
                }
            }
        },
        //遮盖
        SheetMask: {
            IsShow: false,
            Show: function (isAlpha) {
                var opacity = 0.6;
                if (isAlpha != undefined && isAlpha == false) {
                    opacity = 1;
                }
                if (this.IsShow) return;
                this.IsShow = true;
                this.ID = $.MvcSheetUI.NewGuid();
                this.Mask = $("<div></div>").attr("id", "SheetMask_" + this.ID);
                this.Mask.appendTo($("body"));

                //添加样式
                this.Mask.css("position", "absolute");
                this.Mask.css("top", "0px");
                this.Mask.css("left", "0px");
                this.Mask.css("width", "100%");
                this.Mask.css("height", $("body").height() + 60);
                this.Mask.css("text-align", "center");
                this.Mask.css("z-index", "9999");
                this.Mask.css("background-color", "#ffffff");
                this.Mask.css("filter", "Alpha (opacity=1)");
                this.Mask.css("opacity", opacity);
                $("body").css("overflow", "hidden");
            },
            Hide: function () {
                if (this.IsShow) {
                    this.IsShow = false;
                    this.Mask.remove();
                    $("body").css("overflow", "");
                }
            }
        }
    });

    //控件基类
    //1,完成界面初始化:设置组件id并存入组件管理器池,初始化参数
    //2,渲染的工作,细节交给子类实现
    //parm [element] 组件对应的dom element对象
    //parm [options] 组件的参数
    $.MvcSheetUI.IControl = function (element, options, sheetInfo) {
        //是否支持Html5
        this.IsHtml5 = ((!!window.ActiveXObject || "ActiveXObject" in window) || typeof(Worker) != "undefined");
        this.SchemaCode = sheetInfo ? sheetInfo.SchemaCode : "";
        this.PortalRoot = $.MvcSheetUI.PortalRoot; // 这是一个全局变量，获取Portal的根目录路径
        //页面元素，可以通过$(this.Element)得到jquery对象
        this.Element = element;
        //是否移动端
        if ((sheetInfo && sheetInfo.IsMobile) || ($.MvcSheetUI.QueryString("ismobile") == "true")) {
            this.IsMobile = true;
        }
        //是否发起模式
        var mode = $.MvcSheetUI.QueryString("Mode");
        this.Originate = mode && mode.toLowerCase() == "originate";
        this.Originate = options.Originate || this.Originate;

        this.Css = {
            inputMouseOut: $.MvcSheetUI.Css.inputMouseOut,
            inputMouseMove: $.MvcSheetUI.Css.inputMouseMove,
            inputMouseEnter: $.MvcSheetUI.Css.inputMouseEnter,
            inputError: $.MvcSheetUI.Css.inputError,
            InvalidText: $.MvcSheetUI.Css.InvalidText
        };
        // 记录当前控件是否验证通过
        this.ValidateResult = true;
        //配置参数,包含属性和事件
        this.Options = options || {};
        // 表单信息
        this.SheetInfo = sheetInfo;
        //是否显示在新容器中显示编辑，只对移动端有效
        this.ViewInNewContainer = true;
        //初始化参数
        this.Init();
        
        //update by ousihang
        //获取参与者类型
        var filterColumnType = $(element).data('filterColumnType');
        // 逻辑类型
        switch(filterColumnType){
        	case 3 : this.LogicType = $.MvcSheetUI.LogicType.SingleParticipant; break;
        	case 4 : this.LogicType = $.MvcSheetUI.LogicType.MultiParticipant; break;
        	default : this.LogicType = this.L || $.MvcSheetUI.LogicType.ShortString;
        }
        
        // 是否可见
        this.Visiable = this.IsMobile ? (this.O && this.O.indexOf("M") != -1) : (this.O && this.O.indexOf("V") != -1);
        this.Visiable = this.Options.Visiable || this.Visiable;
        // 是否可编辑
        this.Editable = this.O && this.O.indexOf("E") != -1;
        this.Editable = this.Options.Editable || this.Editable;
        if (mode && mode.toLowerCase() == "print") {
            this.Editable = false;
        }

        //移动端的容器
        this.MobileContainer = null;
        this.FormatAction = "GetFormatValue";
        // 是否必填
        this.Required = this.O && this.O.indexOf("R") != -1;
        // 是否可查看痕迹
        this.TrackVisiable = this.O && this.O.indexOf("T") != -1;

        //在div上设置控件标题,他被用于css:  :before{content:attr(data-title)};
        $(this.Element).parent().attr("data-title", ($(this.Element).parent().prev().text() || "").trim());

        // 初始化之前函数
        this.PreRender();

        if (this.IsMobile) {
            //创建一个span用于展现
            this.Mask = $("<span class='input-label'></span>");

            if (!this.Visiable) {
                $(this.Element).parent().hide();
                $(this.Element).parent().prev().hide();
            }

            //修改样式到Mobile
            var itemClass = " item-input";
            var controlType = $(this.Element).data("type");
            if (controlType == "SheetTextBox") {
                $(this.Element).attr("autocomplete", "off");
            } else if (controlType == "SheetDropDownList") {
                itemClass = "item-input"; // item-select
                if (!this.Editable) { itemClass = " item-input " }
            } else if (controlType == "SheetCheckbox") {
                itemClass = "item-input item-toggle"; //逻辑型需要做处理
            }
            //update by luxm
            //解决前端判断报错undifined的问题
            if ($(this.Element).parent().length != 0 &&$(this.Element).parent().attr("class")&& ($(this.Element).parent().attr("class").indexOf("col-md-4") > -1 || $(this.Element).parent().attr("class").indexOf("col-md-10") > -1)) {
                //保留除 col-md-4/col-md-10 以外的class
                var eleClass = $(this.Element).parent().attr("class");
                var addClass = "";
                if (eleClass.indexOf("col-md-4") > -1) {
                    for (var i = 0; i < eleClass.split("col-md-4").length; i++) {
                        var c = eleClass.split("col-md-4")[i];
                        if (c != "" && c.trim() != "col-md-10") {
                            addClass = addClass + " " + c;
                        }
                    }
                } else if (eleClass.indexOf("col-md-10") > -1) {
                    for (var i = 0; i < eleClass.split("col-md-10").length; i++) {
                        var c = eleClass.split("col-md-10")[i];
                        if (c != "" && c.trim() != "col-md-4") {
                            addClass = addClass + " " + c;
                        }
                    }
                }
                var div = $("<div class='detail " + addClass + "'></div>")
                if (controlType == "SheetCheckbox") {
                    div = $("<label class='toggle toggle-positive'></label>");
                }
                var parent = $(this.Element).parent();
                div.append(parent.children());

                //
                if (controlType == "SheetCheckbox") {
                    div.append("<div class=\"track\"><div class=\"handle\"></div></div>")
                }
                parent.empty().append(div);
                //
                parent.attr("class", "").addClass("item " + itemClass);

                var dom = $("<span class='input-label'>" + parent.data("title") + "</span>");
                if (parent.prev().attr("class").indexOf("col-md-2") > -1) {
                    if (parent.prev().find("span").length>0) {
                        dom = parent.prev().find("span").addClass("input-label");
                    }
                    parent.prev().remove();
                }
                div.before(dom);
            }

            if (this.RenderMobile) {
                this.RenderMobile();
            }
        } else {
            this.Render();
        }

        // 加载完成后事件
        this.Rendered();

        if (this.IsMobile) {
            if (!($(this.Element).is("label,span") && ($(this.Element).attr("bindtype") || "").toLowerCase() != "all") &&
                this.Editable) {
                if (this.Validate(true, true)) {
                    $(this.Element).trigger("MobileValidateSucceed");
                } else {
                    $(this.Element).trigger("MobileValidateFaild");
                }
            }
        }
        else if (this.Editable) {
            // 做初始化校验
            this.Validate(true, true);
        }
    };
    //基础属性
    $.MvcSheetUI.IControl.prototype = {
        // 从页面读取参数,将页面上 data-***的设置读取到Options里面
        //初始化参数，转为容易用的方式this.***
        //循环所有默认属性事件,构造成 this.***的格式
        //如:AutoTrim，在页面是 data-autotrim，这里可以通过this.AutoTrim读取，也可以通过 this.Properties["AutoTrim"]读取
        Init: function () {
            var g = this,
                p = this.Options;
            for (var key in p) {
                var elementkey = key.toLowerCase();

                if ($(g.Element).data(elementkey) != undefined) {
                    if (p[key].constructor == Boolean) {
                        p[key] = $(g.Element).data(elementkey).constructor == Boolean ?
                            $(g.Element).data(elementkey) :
                            ($(g.Element).data(elementkey).toString().toLowerCase() == "true" ||
                                $(g.Element).data(elementkey).toString().toLowerCase() == "1");
                    } else if (p[key].constructor == Number) {
                        p[key] = parseInt($(g.Element).data(elementkey));
                    } else {
                        p[key] = $(g.Element).data(elementkey).toString();
                    }
                }
            }

            var p = this.Options;
            for (var key in p) {
                this[key] = p[key];
            }
            if ($.MvcSheet) $.MvcSheet.ControlInit.apply(this, [this.DataItem, this.SheetInfo]);
        },
        // 增加验证消息显示
        AddInvalidText: function (element, invalidText, cssChange) {
            var id = element.id || "";
            if (cssChange == null || cssChange) $(element).addClass(this.Css.inputError);

            if ($.MvcSheetUI.SheetInfo.IsMobile == false) {
                if (!$(element).next().hasClass(this.Css.InvalidText)) {
                    $("<label class=\"" + this.Css.InvalidText + "\">" + invalidText + "</label>").insertAfter($(element));
                }
            } else {
                //移动端comment
                if (element.dataset && element.dataset['type'] == 'SheetComment') {
                    if ($(element).prev().find('.' + this.Css.InvalidText).length == 0) {
                        var InvalidTextLabel = $("<label class=\"" + this.Css.InvalidText + "\">" + invalidText + "</label>");
                        InvalidTextLabel.appendTo($(element).prev());
                    }
                    return;
                }
                //移动端其他
                if ($(element).closest('.item.item-input').find(".input-label").find('.' + this.Css.InvalidText).length == 0) {
                    var input_label = $(element).closest('.item.item-input').find(".input-label")[0];
                    var input_label_text = $(input_label).text();
                    $(input_label).empty();
                    $("<span>" + input_label_text + "</span>").appendTo($(input_label));
                    var InvalidTextLabel = $("<label class=\"" + this.Css.InvalidText + "\">" + invalidText + "</label>");
                    if (invalidText !== "*") {
                        InvalidTextLabel.addClass('plentyWords');
                    }
                    InvalidTextLabel.appendTo($(element).closest('.item.item-input').find(".input-label")[0]);
                }
            }
        },
        // 移除验证显示信息
        RemoveInvalidText: function (element) {
            $(element).removeClass(this.Css.inputError);
            if ($.MvcSheetUI.SheetInfo.IsMobile == false) {
            	if ($(element).next().hasClass(this.Css.InvalidText)) $(element).next().remove();
            } else {
            	//移动端comment
                if (element.dataset && element.dataset['type'] == 'SheetComment') {
                    $(element).prev().find("." + this.Css.InvalidText).remove();
                    return;
                }
                //移动端其他
                $(element).closest('.item.item-input').find("." + this.Css.InvalidText).remove();
            }
        },
        PreRender: function () {
            if ($.MvcSheet) $.MvcSheet.ControlPreRender.apply(this, [this.DataItem, this.SheetInfo]);
        },
        //控件渲染
        Render: function () { },
        // 执行脚本
        RunScript: function (obj, script, args) {
            if (!script) return;
            if ($.isFunction(script)) {
                script.apply(obj, args);
            } else {
                (new Function(script)).apply(obj, args);
            }
        },
        GetRowNumber: function () {
            //this.RowNum>0
            //重新计算RowNum
            if (this.RowNum <= 0) return this.RowNum;
            if (!this.IsMobile) {
                return $(this.Element).closest("tr[class='rows']").attr("data-row");
            } else {
                return $(this.Element).attr("data-row");
            }
        },
        //显示到移动端
        RenderMobile: function () {
            this.Render();
            if (!this.Editable ||
                !this.Visiable ||
                ($(this.Element).is("label,span") && ($(this.Element).attr("bindtype") || "").toLowerCase() != "all")) {
                return;
            }

            //if (false) {
            if (this.ViewInNewContainer) {
                this.MoveToMobileContainer(this.Element);
            } else {
                //SELECT 控件如果显示在当前界面,靠右
                if ($(this.Element).is("select")) {
                    $(this.Element).attr("dir", "rtl");
                }
            }
        },
        //Error:这个逻辑需要改一下
        //移动到移动端Panel

        MoveToMobileContainer: function (_Editor) {
            _Element = _Editor || this.Element;
            var _Mask = this.Mask.text(this.GetText());

            _Mask.insertAfter(_Element);

            if (this instanceof $.MvcSheetUI.Controls.SheetTimeSpan) {
                $(_Element).hide();
            } else {
                //Error:这个逻辑需要改一下
                //$(_Element).before('<div class="bannerTitle"></div>');
            }

            //文本框设置最小高度
            if ($(_Element).is("textarea")) {
                $(_Element).css("min-height", "120px");
            }

            var thatSheetControl = this;
            $(_Element).unbind("change.MobileEditable").bind("change.MobileEditable", function (e) {
                _Mask.text(thatSheetControl.GetText());
            });

            //校验失败
            $(_Element).unbind("MobileValidateFaild").bind("MobileValidateFaild", function (e) {
                $(_Mask).addClass("error");
            });

            //校验成功
            $(_Element).unbind("MobileValidateSucceed").bind("MobileValidateSucceed", function (e) {
                $(_Mask).removeClass("error");
            });

            ////Error:有两个地方绑定这个事件，因为之前的事件，这个按钮不一定有
            //$("#defaultHeader").find(".backButton").unbind("click.EditCompleted").bind("click.EditCompleted",
            //    thatSheetControl, function (e) {
            //        e.data.MobilePreBack.apply(e.data);
            //        if ($.ui.activeDiv.id != _EditPanelID) return;
            //        _Mask.text(thatSheetControl.GetText());

            ////防止多次快速点击
            //var _LastTopTimeStamp = 0;
            //var _thatElement = _Element;
            //var _MobileEdit = function (et) {
            //    if (et.timeStamp - _LastTopTimeStamp < 2000) {
            //        return;
            //    }

            //    _LastTopTimeStamp = et.timeStamp;

            //    var _PrevTitle = $("#header").children("header").find("h1").text().trim();
            //    //
            //    //$.ui.loadContent(_EditPanelID);
            //    //显示返回
            //    //$.ui.setBackButtonVisibility(true);
            //    //Error:有两个地方绑定这个事件，因为之前的事件，这个按钮不一定有
            //    //$("#defaultHeader").find(".backButton").unbind("click.EditCompleted").bind("click.EditCompleted",
            //    //thatSheetControl, function (e) {
            //    //    e.data.MobilePreBack.apply(e.data);
            //    //    if ($.ui.activeDiv.id != _EditPanelID) return;
            //    //    _Mask.text(thatSheetControl.GetText());

            //    //    if (thatSheetControl.Validate()) {
            //    //        $(thatSheetControl.Element).trigger("MobileValidateSucceed");
            //    //    }
            //    //    else {
            //    //        $(thatSheetControl.Element).trigger("MobileValidateFaild");
            //    //    }
            //    //});

            //    //$.ui.setBackButtonText(_PrevTitle);
            //    //$.ui.setBackButtonText("返回");

            //    setTimeout(function () {
            //        //ios7下date类型的SheetTime500ms后自动focus，无法弹出时间控件
            //        if (!($(_thatElement).data("type") == "SheetTime" && $.os.isios7)) {
            //            $(_thatElement).focus();
            //        }
            //        thatSheetControl.AfterMobileEditShow.apply(thatSheetControl);
            //    }, 500);
            //}

            ////在设置了VaildationRule时，移动端给元素绑定一个change事件，用于MobileValidate的显示隐藏
            //if (this.VaildationRule) {
            //    $(_Element).unbind("change.MobileValidate").bind("change.MobileValidate", function () {
            //        if (thatSheetControl.Validate()) {
            //            $(thatSheetControl.Element).trigger("MobileValidateSucceed");
            //        }
            //        else {
            //            $(thatSheetControl.Element).trigger("MobileValidateFaild");
            //        }
            //    });
            //}

            ////Error:我觉得不需要通过change事件来改变Text，直接用this.Mask.Text("")改变就行
            ////在设置了ComputationRule时，移动端给元素绑定一个change事件，用于MaskText的显示改变
            //if (this.ComputationRule) {
            //    $(_Element).unbind("change.MobileMaskText").bind("change.MobileMaskText", function (e) {
            //        _Mask.text(thatSheetControl.GetText());
            //    });
            //}

            ////SheetDropDownList异步构建option，异步回调方法通过change事件改变MaskText
            //if ($(this.Element).data("type") == "SheetDropDownList") {
            //    $(_Element).unbind("change.DropDownList").bind("change.DropDownList", function (e) {
            //        _Mask.text(thatSheetControl.GetText());
            //    });
            //}

            //var viewable = true;
            ////附件、子表只读且只有0项时,不可点击查看.
            //if ((this instanceof $.MvcSheetUI.Controls.SheetAttachment
            //    //|| this instanceof $.MvcSheetUI.Controls.SheetGridView
            //    )
            //    && !this.Editable && this.V && this.V.length == 0) {
            //    viewable = false;
            //    $(_Mask).removeClass("input-mask");
            //}

            //附件处理
            if ((this instanceof $.MvcSheetUI.Controls.SheetAttachment) &&
                !this.Editable && this.V && this.V.length == 0) {
                viewable = false;
                $(_Mask).removeClass("input-mask");
            }



            //if (viewable) {
            //    //点击进入编辑
            //    $(_Parent).unbind("click.MobileEditable").bind("click.MobileEditable", function (et) {
            //        _MobileEdit(et);
            //    }).unbind("click.MobileEditable").bind("click.MobileEditable", function (et) {
            //        _MobileEdit(et);
            //    });
            //    //点击标题进入编辑
            //    $(_Title).unbind("click.MobileEditable").bind("click.MobileEditable", function (et) {
            //        _MobileEdit(et);
            //    }).unbind("click.MobileEditable").bind("click.MobileEditable", function (et) {
            //        _MobileEdit(et);
            //    });
            //}
            //return _EditPanelID;
        },
        // 控件完成事件
        Rendered: function () {
            if ($.MvcSheet) $.MvcSheet.ControlRendered.apply(this, [this.DataItem, this.SheetInfo]);
        },
        //控件的保存函数
        SaveDataField: function () {
            return {};
        },
        //移动容器返回
        MobilePreBack: function () {
            return true;
        },
        //移动容器显示后
        AfterMobileEditShow: function () {

        },
        //获取值
        GetValue: function () {
//            var v = null;
//            var $element = $(this.Element);
//            if ($element.is("label,span")) {
//                v = $element.html();
//            } else {
//                //update by luwei
//                if ($element.is("input") && !$element.is(":visible")) {
//                    v = $element.next().find("span").text();
//                } else {
//                    v = $element.val();
//                }
//            }
//            if (this.FormatRule) {
//                v = v.replace(/,/g, "").replace(/$/g, "").replace(/¥/g, "");
//            }
//            return v;
        	 var v = null;
             if ($(this.Element).is("label,span")) {
                 v = $(this.Element).html();
             } else {
                 v = $(this.Element).val();
             }
             if (this.FormatRule) {
                 v = v.replace(/,/g, "").replace(/$/g, "").replace(/¥/g, "");
             }
             return v;
        },

        //设置值:复杂控件必须重写该接口
        SetValue: function (obj) {
            $(this.Element).val(obj);
            //移动
            if (this.IsMobile) {
                this.Mask.html(this.GetText());
            }
        },

        GetText: function () {
            return $(this.Element).val();
        },

        //设置是否可编辑
        SetReadonly: function (flag) {

        },
        //设置是否可见
        SetVisiable: function (flag) {
            if (flag) {
                $(this.Element).show();
            } else {
                $(this.Element).hide();
            }
        },
        // 控件校验:这里可以把校验错误信息，直接输出到控件后面显示
        // 参数1：effective是否只做数据有效性校验，如果保存，则只做有效校验
        // 参数2：initValid是否页面初始化时校验，只显示*号
        Validate: function (effective, initValid) {
            if (!this.Editable) return true;
            if (initValid) {
                if (this.Required && !this.GetValue()) {
                    this.AddInvalidText(this.Element, "*", false);
                    return false;
                } else {
                    return true;
                }
            }
            if (!effective) { // 数据有效性不做必填验证
                if (this.Required) { //必填的
                    if (!this.GetValue()) {
                        this.AddInvalidText(this.Element, "*");
                        return false;
                    } else {
                        this.RemoveInvalidText(this.Element);
                    }
                }
            }

            return true;
        },
        // 执行函数验证
        DoValidate: function (f, arg, message) {
            if (!f) {
                return true;
            }
            if (!f.apply(this, arg)) {
                this.AddInvalidText(this.Element, message);
                return false;
            } else {
                this.RemoveInvalidText(this.Element);
                return true;
            }
        },
        Valid: {
            // 验证表达式
            RegularExpression: function (val, expression) {
                try {
                    return eval(expression).test(val);
                } catch (e) {
                    //alert("RegularExpression is valid:" + expression);
                    alert(MvcSheetUIGlobalString.RegularExpression_errorMessage + expression);
                    return true;
                }
            },
            // 验证是否为空
            Required: function (val) {
                if (!val) return false;
                return val.trim();
            },
            // 验证整数
            Integer: function (val) {
                return /^(-|\+)?(\d)*$/.test(val);
            },
            // 验证int类型整数范围
            VerifyIntRange: function (val) {
            	if(val < Math.pow(-2, 31) || val > (Math.pow(2, 31)-1)){
            		return false;
            	}
            	return true;
            },
            // 验证long类型整数范围  js大数字计算精度会丢失
            VerifyLongRange: function (val) {
            	if(val < Math.pow(-2, 53) || val > (Math.pow(2, 53)) || val == "9007199254740993"){
            		return false;
            	}
            	return true;
            },
            // 验证数值
            Number: function (val) {
                return /^[\+\-]?\d*?\.?\d*?$/.test(val);
            },
            // 验证时间段
            TimeSpan: function (val) {
                return /^((20|21|22|23|[0-1]\d)\:[0-5][0-9])(\:[0-5][0-9])?$/.test(val);
            }
        },
        // 设置为焦点
        SetFocus: function () {
            $(this.Element).focus();
        },
        //修改痕迹
        RenderDataTrackLink: function () {
            if (this.SheetInfo && this.SheetInfo.IsMobile) return;
            var popupWindowId = (this.Element.id || "") + "_PopWindow";
            var html = "<a class=\"nav-icon fa fa-list-alt\" style=\"padding-left:5px;line-height: 2.4;\" data-toggle=\"modal\" data-target='#" + popupWindowId + "'></a>";
            $(html).insertAfter($(this.Element));

            var url = $.MvcSheetUI.PortalRoot + "/InstanceDataTrack.html?";
            url += "InstanceId=" + $.MvcSheetUI.SheetInfo.InstanceId + "&WorkItemId=" + $.MvcSheetUI.SheetInfo.WorkItemId + "&ItemName=" + this.DataField + "&F=frm_" + popupWindowId;
            this.CreatePopupDiv(popupWindowId, $.Lang("TrackTable.Track"), url, "400px");
        },
        RefreshDataTrackLink: function () {
            var controlId = (this.Element.id || "") + "_PopWindow";
            var frm = document.getElementById("frm_" + controlId);
            if (frm && frm.src) {
                frm.src = frm.src;
            }
        },
        // 开窗
        CreatePopupDiv: function (controlId, displayText, url, height) {
            var popupDiv = "<div id='" + controlId + "' class='modal fade' tabindex='-1' role='dialog' aria-hidden='true'>"
            popupDiv += "<div class='modal-dialog'>";
            popupDiv += "<div class='modal-content'>";
            popupDiv += "<div class='modal-header'>";
            popupDiv += "<button type='button' class='close' data-dismiss='modal'>";
            popupDiv += "<span aria-hidden='true'>&times;</span></button>";
            popupDiv += "<h4 class='modal-title'>" + displayText + "</h4>";
            popupDiv += "</div><div class='modal-body'>";
            popupDiv += "<iframe id=\"frm_" + controlId + "\" src='" + url + "' scrolling='no' frameborder='0' width='100%' height='" + height + "'></iframe>";
            popupDiv += "</div></div></div></div>";
            popupDiv = $(popupDiv);
            // 在Element后添加弹窗元素
            $(this.Element).after(popupDiv);
        },
        // 获取格式化字符串的值
        GetFromatValue: function (element, value) {
            if (!this.FormatRule) return "";
            if (value == null) return "";
            $.MvcSheet.Action({
                Action: this.FormatAction,
                Datas: [this.FormatRule, value ? value.toString() : ""],
                Mask: false,
                LoadControlValue: false,
                OnActionDone: function (e) {
                    if (element.is("label,span")) {
                        element.html(e);
                    } else if (element.is("input")) {
                        element.val(e);
                    }
                }
            });
        }
    }
})(jQuery);
/// <reference path="../MvcSheetUI.js" />

//文本框(SheetAssociation)
(function ($) {
    // 控件执行
    // 参数{AutoTrim:true,DefaultValue:datavalue,OnChange:""}
    //可以通过  $("#id").SheetAssociation(参数)  来渲染控件和获取控件对象
    $.fn.SheetAssociation = function () {
        return $.MvcSheetUI.Run.call(this, "SheetAssociation", arguments);
    };

    // 构造函数
    $.MvcSheetUI.Controls.SheetAssociation = function (element, options, sheetInfo) {
        this.TextRightAlign = false; // 全局是否右对齐
        this.NumberRightAlign = false; // 数值是否右对齐
        $.MvcSheetUI.Controls.SheetAssociation.Base.constructor.call(this, element, options, sheetInfo);
    };

    // 继承及控件实现
    $.MvcSheetUI.Controls.SheetAssociation.Inherit($.MvcSheetUI.IControl, {
        //控件渲染函数
        Render: function () {
            if (!this.Visiable) {
                this.Element.style.display = "none";
                return;
            }
            // 移动端设置PlaceHolder
            if (this.IsMobile) {
                this.PlaceHolder = this.PlaceHolder || this.N;
            }
            if (this.OutputMappings != "") {
                this.OutputMappings += ',' + this.DataField + ':ObjectID;Name;RunningInstanceId';
            } else {
                this.OutputMappings += this.DataField + ':ObjectID;Name;RunningInstanceId';
            }

            $(this.Element).attr("OutputMappings", this.OutputMappings);
            $(this.Element).attr("PlaceHolder", this.PlaceHolder);
            if (!this.Editable) { // 不可编辑
                this.SetReadonly(true);
                return;
            }
            if (this.TextRightAlign) $(this.Element).addClass("txtAlignRight");
            else if (this.NumberRightAlign && this.IsNubmer()) { $(this.Element).addClass("txtAlignRight"); }
            if (this.ToolTip) $(this.Element).attr("title", this.ToolTip);

            // 注册KeyDown事件
            $(this.Element).unbind("change.SheetAssociation").bind("change.SheetAssociation", [this], function (e) {
                e.data[0]._OnChange();
            });


            // 绑定焦点事件
            $(this.Element).unbind("focus.SheetAssociation").bind("focus.SheetAssociation", [this],
                function (e) {
                    if (e.data[0].FormatRule) {
                        this.value = this.value.replace(/,/g, "").replace(/$/g, "").replace(/¥/g, "");
                    }
                    if (e.data[0].OnFocus) {
                        e.data[0].RunScript(this, e.data[0].OnFocus);
                    }
                });
            // 注册KeyUp事件
            if (this.OnKeyUp) {
                $(this.Element).unbind("keyup.SheetAssociation").bind("keyup.SheetAssociation", [this], function (e) {
                    e.data[0].RunScript(this, e.data[0].OnKeyUp);
                });
            }
            // 注册KeyDown事件

            $(this.Element).unbind("keydown.SheetAssociation").bind("keydown.SheetAssociation", [this], function (e) {
                if (e.key == "Enter") return false;
                if (this.OnKeyDown) {
                    e.data[0].RunScript(this, e.data[0].OnKeyDown);
                }
            });
            // 失去焦点事件
            $(this.Element).unbind("blur.SheetAssociation").bind("blur.SheetAssociation", [this], function (e) {
                if (e.data[0].FormatRule) {
                    e.data[0].GetFromatValue($(e.data[0].Element), e.data[0].GetValue());
                }
            });

            if (this.IsMobile) {
                //移动端的开窗查询
                this._mobilePopup();
            } else {
                var linkUrl = this.GetLinkUrl();
                $(this.Element).wrap("<a href='" + linkUrl.url + "' target='" + linkUrl.target+ "'></a>");
                this._createPopup();
            }
            this.SetValue(this.V);
        },
        RenderMobile: function () {
            this.Render();
        },
        GetLinkUrl: function () {
            var instanceId = $(this.Element).attr("data-instanceid");
            var bizobjectId= $(this.Element).attr("data-objectid");
            var linkUrl = "javascript:void(0);";
            var target = "";
            if (this.LinkMode != "None" && bizobjectId) {
                linkUrl = "MvcDefaultSheet.aspx?Mode=View&SchemaCode=" + $(this.Element).attr("data-schemacode") + "&BizObjectID=" + bizobjectId;
                target = "_blank";
            }
            if (this.LinkMode == "Workflow" && instanceId) {
                linkUrl = "InstanceSheets.html?InstanceId=" + instanceId;
                target = "_blank";
            }
            if (this.IsMobile && target) {
                linkUrl += "&IsMobile=true";
            }
            var linkInfo = {
                url: linkUrl,
                target:target
            };
            return linkInfo;
        },
        IsNubmer: function () {
            return (this.LogicType == 7 || this.LogicType == 9 || this.LogicType == 35);
        },
        SetValue: function (v) {
            var objId = '';
            var instanceid = '';
            if (v && v.length > 1) {
                objId = v[0];
                instanceid = v[2];
                v = v[1];
            }
            $(this.Element).attr("data-objectid", objId);
            $(this.Element).attr("data-instanceid", instanceid);
            if (this.LinkMode != "None" && !this.IsMobile) {
                var linkUrl = this.GetLinkUrl();
                $(this.Element).parent().attr("href", linkUrl.url);
                $(this.Element).parent().attr("target", linkUrl.target);
            }
            $(this.Element).val(v);
            $(this.Element).change();
            if (this.FormatRule) {
                this.GetFromatValue($(this.Element), v);
            }
            //移动
            if (this.IsMobile) {
                this.Mask.html(this.GetText());
                if (this.Editable) {
                    if (this.Mask.text() === "") {
                        this.Mask.text(this.PlaceHolder);
                        this.Mask.css({ "color": "#aaa" });
                    } else {
                        this.Mask.css({ "color": "#2c3038" });
                    }
                } else {
                    this.Mask.css({ "color": "#aaa" });
                }
            }
        },
        //移动端开窗
        _mobilePopup: function () {
            if (this.PopupWindow == "None") return;
            //1.隐藏当前输入框
            //2.增加显示返回值 a
            //3.增加图标提示点击事件
            //4.item 添加样式 item-icon-right
            //this.ViewInNewContainer = $(this.Element).parent();
            this.ID = $(this.Element).attr("Id");
            $(this.Element).hide();
            $(this.Element).parent().find("[id*=mask]").remove();
            $(this.Element).parent().find("i.icon").remove();
            this.Mask = $("<span></span>").insertAfter(this.Element).attr("id", "mask_" + this.ID);
            this.Mask.insertAfter(this.Element).attr("id", "mask_" + this.ID);
            var _that = this;
            if (_that.Editable) {
                this.pupIcon = $("<i class='icon ion-ios-arrow-right'></i>").insertAfter(this.Mask);
                $(this.Element).closest("div.item").addClass("item-icon-right");
                $(this.Element).parent().parent().unbind("click.query").bind("click.query", function () {
                     //objectid用来显示已选择的项
                    $.MvcSheetUI.IonicFramework.$state.go("form.sheetquery", { datafield: _that.DataField, rownum: $(this).find("[data-datafield='" + _that.DataField + "']").attr("data-row"), objectid: _that.Element.dataset.objectid });
                })
            }

        },
        AfterMobileEditShow: function () {
            if (this.PopupElement)
                this.PopupElement.SheetQuery().AfterMobileEditShow();
        },
        _createPopup: function () {
            var that = this;
            //开窗查询(DisplayText SchemaCode QueryCode InputMappings OutputMappings)
            //弹窗模式
            console.log(this.DisplayText, 'this.DisplayText')
            var displayText = this.DisplayText === "" ? "&nbsp;" : this.DisplayText;
            var popupDivId = "popupLink" + (new Date()).getTime();
            var outputParams = "";
            outputParams = "&OutputParams=" + encodeURI(this.OutputMappings.replace(/,/g, "|").replace(/:/g, ","));
            var w = that.PopupWidth ? that.PopupWidth : "600px";
            var h = that.PopupHeight ? that.PopupHeight : "400px";
            //弹窗div
            var popupDiv = "<div id='" + popupDivId + "' class='modal fade' tabindex='-1' role='dialog' aria-hidden='true'>"
            popupDiv += "<div class='modal-dialog'>";
            popupDiv += "<div class='modal-content' style='width:" + w + ";'>";
            popupDiv += "<div class='modal-header'>";
            popupDiv += "<button type='button' class='close' data-dismiss='modal'>";
            popupDiv += "<span aria-hidden='true'>&times;</span></button>";
            popupDiv += "<h4 class='modal-title'>" + displayText  + "</h4>";
            popupDiv += "</div><div class='modal-body'>";
            popupDiv += "<iframe scrolling='no' frameborder='0' width='100%' height='" + h + "'></iframe>";
            popupDiv += "</div></div></div></div>";
            popupDiv = $(popupDiv);
            //弹窗按钮
            var popupLink = $("<a href='javascript:;'>" + displayText + "</a>");
            popupLink.click(function () {
                var src = that.PortalRoot + "/admin/TabMaster.html?url=ListMasterData.html&OpenType=1&IsPopup=1&SchemaCode=" + that.SchemaCode +
                    "&QueryCode=" + that.QueryCode + "&CtrlID=" + popupDivId + outputParams + that._getInputParam();
                popupDiv.find("iframe").attr("src", src);
                popupDiv.modal("show");
            });
            //在Element后添加弹窗元素
            $(this.Element).after(popupLink).after(popupDiv);
            //弹窗页面双击回调函数(\Portal\WFRes\_Scripts\bizquery.js)
            window[popupDivId] = {};
            window[popupDivId].ListMasterCallBack = function (data) {
                //将选择的记录值，赋值到界面元素
                if (data) {
                    for (var field in data) {
                        $.MvcSheetUI.SetControlValue(field, data[field], that.GetRowNumber());
                    }
                }
                //关闭弹窗
                popupDiv.modal("hide");
            };
        },
        _getInputParam: function () {
            var inputParam = "";
            if (this.InputMappings) {
                var items = this.InputMappings.split(",");
                for (var i = 0; i < items.length; i++) {
                    var fields = items[i].split(":");
                    if (fields && fields.length == 2) {
                        if (fields[0] && $.MvcSheetUI.GetSheetDataItem(fields[0], this.GetRowNumber())) {
                            inputParam += fields[1] + "," + $.MvcSheetUI.GetControlValue(fields[0], this.GetRowNumber()) + "|";
                        }
                    }
                }
                if (inputParam) {
                    inputParam = "&InputParam=" + encodeURI(inputParam.substring(0, inputParam.length - 1));
                }
            }
            return inputParam;
        },
        SetReadonly: function (v) {
            if (v) {
                var objId = '';
                if (this.V && this.V.length > 1) {
                    objId = this.V[0];
                    this.V = this.V[1];
                }
                $(this.Element).hide();
                var that = this;
                var lbl = $("<label for='" + $(that.Element).attr("id") + "'></label>");
                if (this.TextRightAlign) lbl.addClass("txtAlignRight").css("width", $(this.Element).width());
                else if (this.NumberRightAlign && this.IsNubmer()) { lbl.addClass("txtAlignRight"); }
                var val = $.trim(this.V);
                var linkUrl = this.GetLinkUrl();
                if (val != "") {
                    var strs = val.split("\n");
                    $(strs).each(function (i) {
                        if (i > 0) {
                            lbl.append("<br />");
                        }
                        lbl.append($("<a href='" + linkUrl.url+ "' target='" + linkUrl.target+ "'><span></span></a>").text(this.toString()));
                    });
                }
                lbl.insertAfter($(this.Element));
                this.GetFromatValue(lbl, this.Element.value);
            } else {
                $(this.Element).show();
                $(this.Element).next().remove();
            }
        },
        //值改变事件
        _OnChange: function (e) {
            // 执行验证
            this.Validate();

            if (this.OnChange) {
                //执行绑定事件
                this.RunScript(this.Element, this.OnChange);
            }

            //是否自动去除前后空格
            if (this.AutoTrim) {
                this.Value = that.Value.trim();
            }
        },
        // 数据验证
        Validate: function (effective, initValid) {
            if (!this.Editable) return true;
            if (initValid) {
                if (this.Required && !this.GetValue()) {
                    this.AddInvalidText(this.Element, "*", false);
                    return false;
                }
            }
            var val = this.GetValue();
            if (!effective) {
                if ($(this.Element).attr("data-required") || this.O.indexOf("R") > -1) this.Required = true;
                else this.Required = false;
                // 必填验证
                if (this.Required && !this.DoValidate(this.Valid.Required, [val], "*")) {
                    this.ValidateResult = false;
                    return false;
                }
                if (this.RegularExpression && val) {
                    if (!this.DoValidate(this.Valid.RegularExpression, [val, this.RegularExpression], this.RegularInvalidText)) {
                        this.ValidateResult = false;
                        return false;
                    }
                }
            }

            // 处理数据逻辑型验证
            switch (this.LogicType) {
                case $.MvcSheetUI.LogicType.Int:
                case $.MvcSheetUI.LogicType.Long:
                    if (!this.DoValidate(this.Valid.Integer, [val], SheetLanguages.Current.EnterInteger)) {
                        this.ValidateResult = false;
                        return false;
                    }
                    break;
                case $.MvcSheetUI.LogicType.Double:
                    if (!this.DoValidate(this.Valid.Number, [val], SheetLanguages.Current.EnterNumber)) {
                        this.ValidateResult = false;
                        return false;
                    }
                    break;
                default:
                    break;
            }
            this.ValidateResult = true;
            return true;
        },
        //返回数据值
        SaveDataField: function () {
            var result = {};
            if (!this.Visiable || !this.Editable) return result;
            result[this.DataField] = $.MvcSheetUI.GetSheetDataItem(this.DataField); // this.SheetInfo.BizObject.DataItems[this.DataField];
            if (!result[this.DataField]) {
                if (this.DataField.indexOf(".") == -1) { alert(SheetLanguages.Current.DataItemNotExists + ":" + this.DataField); }
                return {};
            }

            if (("" + result[this.DataField].V) != this.GetValue()) {
                this.RefreshDataTrackLink();
                result[this.DataField].V = this.GetValue().trim();
                return result;
            }

            return {};
        },
        GetValue: function () {
            return $(this.Element).attr("data-objectid");
        }
    });
})(jQuery);
     // 附件控件
(function ($) {
    $.fn.SheetAttachment = function () {
        return $.MvcSheetUI.Run.call(this, "SheetAttachment", arguments);
    };
    // 构造函数
    $.MvcSheetUI.Controls.SheetAttachment = function (element, ptions, sheetInfo) {
        this.SheetAttachmentHandler = _PORTALROOT_GLOBAL + "/FileUpload/UploadFile";
        this.FileUpload = $("<input type='file' id='myUpfile' />").attr("data-attachment", true);
        //文件数
        this.Files = 0;
        //新添加的
        this.AddAttachments = {};
        this.UploadAttachmentsIds = [];
        //删除数据库的
        this.RomveAttachments = [];
        //异步数据
        this.XHRJson = {};
        //数据模型编码
        this.SchemaCode = "";

        //隐藏了可配置属性，设置固定多选
        this.Multiple = true;
        //update by luxm
        //设置最大文件值
        this.MaxUploadSizefloat = element.getAttribute("data-maxuploadsize");
        // window.console.log(parseFloat(this.MaxUploadSizefloat));

        $.MvcSheetUI.Controls.SheetAttachment.Base.constructor.call(this, element, ptions, sheetInfo);
        // window.console.log($.MvcSheetUI.Controls.SheetAttachment);
    };

    // 继承及控件实现
    $.MvcSheetUI.Controls.SheetAttachment.Inherit($.MvcSheetUI.IControl, {
        Render: function () {
            if (!this.Visiable) {
                $(this.Element).hide();
                return;
            }

            this.HtmlRender();
            //初始化数据
            this.InitValue();

            //是否支持Html5
            if ((this.IsHtml5)) {
                this.Html5Render();
            } else {
                this.NotHtml5Render();
            }
        },
        RenderMobile: function () {
            this.Render();
            //this.MoveToMobileContainer(this.Element);
            //移动端附件需要另外创建一个div存放内容
            var oldDivContainer = $(this.Element).closest("div.item");
            oldDivContainer.css("padding", "1px").removeClass("item-input");
            var spantitle = $(this.Element).parent().prev().remove();
            var newDivTitle = $("<div class='item item-input attachment'></div>");
            newDivTitle.append(spantitle);
            if (this.Visiable)
                newDivTitle.insertBefore(oldDivContainer);
            $(this.Element).parent().width("100%");
            if (this.Editable) {
                this.btnUpload = $('<div class="detail item-icon-right file-up"><span>' + SheetLanguages.Current.PleaseSelect + '</span><div class="paperclip"></div></div>').appendTo(newDivTitle);
                this.FileUpload.appendTo(newDivTitle)
                var _that = this;
                newDivTitle.bind("click.uploadAttachment", function () {
                    _that.MobileSelectFileAction()
                })
            }



            //截取文件名
            $(this.Element).find('.file').next(".input-label").each(function (index, ele) {
                var fileName = $(this).text();
                if (fileName && fileName.length >= 15) {
                    fileName = fileName.substr(0, 12) + '...';
                }
                $(this).text(fileName);

            })

        },
        // 选择附件
        MobileSelectFileAction: function () {
            var _that = this;
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            var isDingTalk = $.MvcSheetUI.IonicFramework.$rootScope.dingMobile.isDingMobile;
            // ios或者钉钉
            if (isiOS || isDingTalk) {
                // alert('isiOS-isDingTalk')
                // _that.FileUpload.click();
                document.getElementById("myUpfile").addEventListener("click", function(){
                    // alert(11111)
                })
            }
            else {
                var hideSheet = $.MvcSheetUI.IonicFramework.$ionicActionSheet.show({
                    buttons: [
                        {text: SheetLanguages.Current.TakePhotos},
                        {text: SheetLanguages.Current.FileSelect}
                    ],
                    cancelText: SheetLanguages.Current.Cancel,
                    cancel: function () {
                        return false;
                    },
                    buttonClicked: function (index) {
                        if (index == 0) {
                            hideSheet()
                            //限定只能上传图片和相机
                            _that.FileUpload.removeAttr("multiple").attr("accept", "image/*").attr("capture", "camera")
                            if ($(_that.Element).data($.MvcSheetUI.DataFieldKey.toLowerCase()) != _that.DataField)
                                return;
                            _that.FileUpload.click();

                        } else {
                            hideSheet()
                            _that.FileUpload.removeAttr("capture").removeAttr("accept");

                            //if (_that.FileExtensions) {
                            //    _that.FileUpload.attr("accept", _that.FileExtensions)
                            //}
                            if ($(_that.Element).data($.MvcSheetUI.DataFieldKey.toLowerCase()) != _that.DataField)
                                return;
                            _that.FileUpload.click();
                        }
                    }
                });
                $.MvcSheetUI.IonicFramework.$timeout(function () {
                    hideSheet();
                }, 10000);
            }
        },

        MobileDownLoad: function (url) {

        },
        MobileItemClick: function (fileId, fileUrl, IsImg) {
            var _that = this;
            var buttons = [
                {text: SheetLanguages.Current.Preview, code: 'Preview'},
                {text: SheetLanguages.Current.Delete, code: 'delete'}
            ];
            if (!fileUrl && this.Editable) {
                buttons = [{text: SheetLanguages.Current.Delete, code: 'delete'}];
            }
            if (fileUrl && !this.Editable) {
                buttons = [{text: SheetLanguages.Current.Preview, code: 'Preview'}];
            }
            // 预览
            var hideSheet = $.MvcSheetUI.IonicFramework.$ionicActionSheet.show({
                buttons: buttons,
                titleText: SheetLanguages.Current.AtatchmentAcction,
                cancelText: SheetLanguages.Current.Cancel,
                buttonClicked: function (index, button) {
                    // console.log(button)
                    if (button.code == "Preview") {
                        var url = window.location.href;
                        url = url.split(_PORTALROOT_GLOBAL)[0];
                        // 钉钉
                        if ($.MvcSheetUI.IonicFramework.$rootScope.loginfrom == "dingtalk" && dd) {
                            var u = navigator.userAgent;
                            var ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                            if (ios) {
                                dd.biz.util.openLink({
                                    url: url + fileUrl + "?" + Math.random(),
                                    onSuccess: function (data) {},
                                    onFail: function (err) {
                                        $.MvcSheetUI.IonicFramework.fcommonJS.loadingShow("响应错误");
                                    }
                                });
                            }
                            else {
                                $.ajax({
                                    type: "POST",
                                    url: url + fileUrl + "&AppLogin=true" + "?" + Math.random(),
                                    cache: false,
                                    success: function (data) {
                                        if (data && data.success && data.url) {
                                            var downloadUrl = data.url;
                                            //支持的格式
                                            //var SupportFileExtension = ".jpg,.gif,.jpeg,.png,.txt,.doc,.docx,.pdf,.xls,.xlsx,.ppt,.pptx,.xml";
                                            var Browse_Extension = ["jpg", "gif", "jpeg", "png", "txt", "doc", "docx", "pdf", "xls", "xlsx", "ppt", "pptx", "xml"];
                                            if (Browse_Extension.indexOf(data.extension) > -1) {
                                                $.MvcSheetUI.IonicFramework.$rootScope.AttachmentUrl = downloadUrl;
                                                $.MvcSheetUI.IonicFramework.$state.go("form.downLoadFile", {extension: data.extension})
                                                // window.location.href = downloadUrl;
                                                // window.open(downloadUrl);
                                            } else {
                                                $.MvcSheetUI.IonicFramework.fcommonJS.loadingShow("不支持" + data.extension + "格式文件的预览");
                                            }
                                        } else {
                                            $.MvcSheetUI.IonicFramework.fcommonJS.loadingShow("不支持" + data.extension + "格式文件的预览");
                                        }
                                    }
                                });
                            }
                        }
                        else {
                            //liming  20180914 修改附件预览方式
                            //wechat,mobile,app
                            $.ajax({
                                type: "POST",
                                url: url + fileUrl + "&AppLogin=true" + "?" + Math.random(),
                                cache: false,
                                success: function (data) {
                                    // $.MvcSheetUI.IonicFramework.fcommonJS.loadingShow(data.extension, '2')
                                    if (data && data.success && data.url) {
                                        var downloadUrl = data.url;
                                        //支持的格式
                                        //var SupportFileExtension = ".jpg,.gif,.jpeg,.png,.txt,.doc,.docx,.pdf,.xls,.xlsx,.ppt,.pptx,.xml";
                                        var Browse_Extension = ["jpg", "gif", "jpeg", "png", "txt", "doc", "docx", "pdf", "xls", "xlsx", "ppt", "pptx", "xml"];
                                        if (Browse_Extension.indexOf(data.extension) > -1) {
                                            $.MvcSheetUI.IonicFramework.$rootScope.AttachmentUrl = downloadUrl;
                                            var u = navigator.userAgent;
                                            var ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                                            if (ios) {
                                                window.location.href = downloadUrl;
                                            } else {
                                                $.MvcSheetUI.IonicFramework.$state.go("form.downLoadFile", {extension: data.extension})
                                            }
                                            // window.location.href = downloadUrl;
                                        } else {
                                            $.MvcSheetUI.IonicFramework.fcommonJS.loadingShow("不支持" + data.extension + "格式文件的预览");
                                        }
                                    } else {
                                        $.MvcSheetUI.IonicFramework.fcommonJS.loadingShow("不支持" + data.extension + "格式文件的预览");
                                    }
                                },
                                error: function () {
                                    $.MvcSheetUI.IonicFramework.fcommonJS.loadingShow("响应错误");
                                }
                            })
                        }
                    } else if (button.code == "delete") {
                        _that.RemoveFile.apply(_that, [fileId]);
                    }
                    return true;
                }
            });
        },

        //初始化已上传文件
        InitValue: function () {
            if (this.V) {
                //子表编辑时
                if (this.BizObjectID == undefined) {
                    this.BizObjectID = this.SheetInfo.BizObjectID;
                }

                for (var i = 0; i < this.V.length; ++i) {
                    this.CreateFileElement($.trim(this.V[i].Code), this.V[i].Name, this.V[i].Size, this.V[i].Url, this.V[i].ContentType);
                }

                /*批量下载
                 *只有一个文件的时候不需要批量下载
                 */
                if (!this.IsMobile && this.AllowBatchDownload && this.V.length > 1) {
                    var BatchDownload = $("<a href=\"" + _PORTALROOT_GLOBAL + "/ReadAttachment/ReadBatch?BizObjectID=" + this.BizObjectID + "&SchemaCode=" + this.SchemaCode + "&DataField=" + this.DataField + "&DisplayName=" + this.DataField + "\" class=\"printHidden\">批量下载</a>");
                    $(this.Element).append(BatchDownload);
                    if (this.IsMobile) {
                        BatchDownload.css("margin-left", "10px").css("margin-right", "10px").addClass("button").addClass("block");
                    } else {
                        BatchDownload.width("100%")
                                .addClass("btn").addClass("btn-outline").addClass("btn-lg")
                                .css("border", "1px dashed #ddd");
                    }
                }
            }
        },
        // 数据验证
        Validate: function (effective, initValid) {
            if (!this.Editable)
                return true;
            if (initValid) {
                if (this.Required && this.Files < 1) {
                    if (this.IsMobile) {
                        this.AddMobileInvalidText(this.Element, "*", false);
                    } else {
                        this.AddInvalidText(this.Element, "*", false);
                    }
                    return false;
                }
            }
            if (!effective) {
                if (this.Required) {//必填的
                    if (this.Files < 1) {
                        if (this.IsMobile) {
                            this.AddMobileInvalidText(this.Element, "*", false);
                        } else {
                            this.AddInvalidText(this.Element, "*");
                        }
                        return false;
                    }
                    // IE8  产品不支持IE8
                    if (false && this.Files[0] == null && $(this.Element).find("a").length < 2) {
                        this.AddInvalidText(this.Element, "*");
                        return false;
                    }
                }

              //提交时增加对不合法附件的校验
                if (this.FileExtensions || this.MaxUploadSizefloat) {
                    var fileLength = 0;
                    if(this.IsMobile) {
                        fileLength = $(this.Element).children('.list').children('a').length;
                    } else {
                        fileLength = $(this.Element).find('table tr').length;
                    }
                    if(fileLength > this.Files) {
                        $(this.Element).addClass('inputError');
                        return false;
                    } else if ($(this.Element).hasClass('inputError')) {
                        $(this.Element).removeClass('inputError');
                    }
                }
            }

            if (this.IsHtml5) {
                //如果是支持Html5的话，得判断是否已经上传完整，需要等待
                for (var key in this.AddAttachments) {
                    if (this.AddAttachments[key].state == 0) {
                        this.AddInvalidText(this.Element, SheetLanguages.Current.Uploading);
                        return false;
                    }
                }
            } else {
                this.Form.submit();
            }
            if (this.IsMobile) {
                this.RemoveMobileInvalidText();
            } else {
                this.RemoveInvalidText(this.Element);
            }
            return true;
        },

        AddMobileInvalidText: function (element, invalidText, cssChange) {
            if ($.MvcSheetUI.SheetInfo.IsMobile == false) {
                if (!$(this.btnUpload).prev().hasClass(this.Css.InvalidText)) {
                    $("<label class=\"" + this.Css.InvalidText + "\">" + invalidText + "</label>").insertBefore($(this.btnUpload));
                }
            } else {
                if ($(this.btnUpload).closest('.item.item-input').find(".input-label").find('.' + this.Css.InvalidText).length == 0) {
                    var input_label = $(this.btnUpload).closest('.item.item-input').find(".input-label")[0];
                    var input_label_text = $(input_label).text();
                    $(input_label).empty();
                    $("<span>" + input_label_text + "</span>").appendTo($(input_label));
                    var InvalidTextLabel = $("<label class=\"" + this.Css.InvalidText + "\">" + invalidText + "</label>");
                    InvalidTextLabel.appendTo($(this.btnUpload).closest('.item.item-input').find(".input-label"));
                }
            }
        },
        RemoveMobileInvalidText: function () {
            if ($.MvcSheetUI.SheetInfo.IsMobile == false) {
                $(this.btnUpload).removeClass(this.Css.inputError);
                if ($(this.btnUpload).prev().hasClass(this.Css.InvalidText))
                    $(this.btnUpload).prev().remove();
            } else {
                $(this.btnUpload).closest('.item.item-input').find("." + this.Css.InvalidText).remove();
            }
        },
        SaveDataField: function () {
            var result = {};
            if (!this.Visiable || !this.Editable)
                return result;

            //result[this.DataField] = this.SheetInfo.BizObject.DataItems[this.DataField];
            result[this.DataField] = this.DataItem;

            result[this.DataField].V = this.GetValue();
            return result;
        },

        GetValue: function () {
            // debugger
            var AttachmentIds = "";
            if ((this.IsHtml5)) {
                //如果是支持Html5的话，得判断是否已经上传完整，需要等待
                for (var key in this.AddAttachments) {
                    if (this.AddAttachments[key].state == 1 && this.AddAttachments[key].AttachmentId) {
                        AttachmentIds += this.AddAttachments[key].AttachmentId + ";";
                    }
                }
                if (key == undefined && this.DataItem.V.length > 0) {
                    AttachmentIds += this.DataItem.V[0].Code + ";";
                }
            } else {
                for (var i = 0; i < this.UploadAttachmentsIds.length; i++) {
                    AttachmentIds += this.UploadAttachmentsIds[i] + ";"
                }
            }

            var DelAttachmentIds = "";
            for (var i = 0; i < this.RomveAttachments.length; ++i) {
                DelAttachmentIds += this.RomveAttachments[i] + ";";
            }
            var result = {
                AttachmentIds: AttachmentIds,
                DelAttachmentIds: DelAttachmentIds
            };
            return result;
        },

        GetText: function () {
            return this.Files;
        },

        ClearFiles: function () {
            $(this.Element).html("");
            this.Files = 0;
            this.Validate();
        },

        HtmlRender: function () {
            //设置宽度
            $(this.Element).addClass("SheetAttachment");

            if (this.IsMobile) {
                this.UploadList = $("<div class='list'></div>")
            } else {
                //添加附件展示列表和按钮
                this.UploadList = $("<table class='table table-striped'></table>").css("margin", 0).css("min-height", "0px");
            }

            $(this.Element).append(this.UploadList);
        },

        NotHtml5Render: function () {
            if (!this.Editable)
                return;
            $(this.Element).width(this.Width);
            var id = $.MvcSheetUI.NewGuid();

            var param = "DataField=" + encodeURI(this.DataField) + "&PostForm=true&BizObjectID=" + this.SheetInfo.BizObjectID + "&SchemaCode=" + encodeURI(this.SchemaCode);
            param += "&MaxSize=" + (this.MaxUploadSize * 1024);
            //设置form属性，关键是target要指向iframe
            this.Form = $("<form id=\"" + id + "\" method=\"post\" enctype=\"multipart/form-data\" action=\"" + this.SheetAttachmentHandler + "?" + param + "\"></form>");
            $(this.Element).append(this.Form);
            ///创建iframe
            this.CreateFrame();

            //是否多选
            if (this.Multiple) {
                this.BtnAdd = $("<div>" + SheetLanguages.Current.Add + "</div>").addClass("SheetAttachmentAdd");
                $(this.Form).append(this.BtnAdd);
                $(this.BtnAdd).unbind("click.AddAttachment").bind("click.AddAttachment", this, function (e) {
                    e.data.AddAttachment.apply(e.data);
                });
            } else {
                $(this.FileUpload).attr("name", $.MvcSheetUI.NewGuid());
                $(this.Form).append(this.FileUpload);
            }
            this.BtnUpload = $("<div>" + SheetLanguages.Current.Upload + "</div>").addClass("SheetAttachmentUpload");
            $(this.BtnUpload).unbind("click.UploadAttachment").bind("click.UploadAttachment", this, function (e) {
                e.data.Form.submit();
                var ids = "";
                $(e.data.Form).find("input").each(function () {
                    if (this.value)
                        ids += "," + this.name;
                    if (e.data.UploadAttachmentsIds.indexOf(this.name) == -1) {
                        e.data.UploadAttachmentsIds.push(this.name);
                    }
                });
                var that = e.data;
                if (ids) {
                    setTimeout(function () {
                        that.CheckUpload(ids)
                    }, 500);
                }
            });
            $(this.Form).append(this.BtnUpload);
            this.AddAttachment();
        },
        CheckUpload: function (ids) {
            // console.log(ids, 'ids')
            var that = this;
            $.MvcSheet.GetSheet(
                    {
                        "Command": "GetAttachmentHeader",
                        "Param": JSON.stringify([this.SheetInfo.SchemaCode, this.SheetInfo.BizObjectID, ids])
                    },
                    function (data) {
                        if (data && data.length > 0) {
                            for (var i = 0; i < data.length; i++) {
                                that.CreateFileElement(data[i].AttachmentID, data[i].FileName, data[i].ContentLength, that.PortalRoot + "/ReadAttachment/Read?AttachmentID=" + data[i].AttachmentID, data[i].ContentType)
                                ids = ids.replace("," + $.trim(data[i].AttachmentID), "");
                                $("div[id='" + $.trim(data[i].AttachmentID) + "']").remove();
                            }
                        }

                        if (ids) {
                            setTimeout(function () {
                                that.CheckUpload(ids)
                            }, 500);
                        }
                    }
            );
        },
        // 创建iframe
        CreateFrame: function () {
            var FrameName = "uploadFrame_" + $.MvcSheetUI.NewGuid();
            var oframe = $('<iframe name=' + FrameName + '>');
            //修改样式是css，修改属性是attr
            oframe.css("display", "none");
            //在内部的前面加节点
            $('body').prepend(oframe);
            //设置form属性，关键是target要指向iframe
            this.Form.attr("target", FrameName);
            this.Form.attr("method", "post");
            //注意ie的form没有enctype属性，要用encoding
            this.Form.attr("encoding", "multipart/form-data");
        },
        // 非Html5添加附件
        AddAttachment: function () {
            var contentid = $.MvcSheetUI.NewGuid();
            var newContent = $("<div>").attr("id", contentid).addClass("upload").css("clear", "both");//.css("padding-bottom", "6px");
            var fileinput = $("<input type=\"file\" style=\"width:60%;\"  />").attr("name", contentid);
            var btnDel = $("<a href='#' style=\"padding-left:10px;\">" + SheetLanguages.Current.Remove + "</a>").attr("data-content", contentid);

            $(btnDel).unbind("click.DeleteAttachment").bind("click.DeleteAttachment", this, function (e) {
                e.data.Files--;
                $("#" + $(this).attr("data-content")).remove();
            });

            newContent.append(fileinput).append(btnDel);
            $(this.BtnAdd).before(newContent);
            this.Files++;
            this.Validate();
        },
        // Html5渲染
        Html5Render: function () {
            if (!this.Editable)
                return;
            // 是否多选
            if (this.Multiple) {
                this.FileUpload.attr("multiple", "multiple");
            }

            //上传地址
            this.SheetAttachmentHandler += "?IsMobile=" + this.IsMobile + "&" + "SchemaCode=" + encodeURI(this.SchemaCode) + "&fileid=";
            // console.log(this.SheetAttachmentHandler, 'this.SheetAttachmentHandler')
            this.ActionPanel = $("<div>" + SheetLanguages.Current.DragUpload + "</div>")
            if (this.IsMobile) {
                this.ActionPanel.css("margin-left", "10px").css("margin-right", "10px").addClass("button").addClass("block");
            } else {
                this.ActionPanel.width("100%")
                        .addClass("btn").addClass("btn-outline").addClass("btn-lg")
                        .css("border", "1px dashed #ddd");
            }
            $(this.Element).append(this.ActionPanel);

            if (this.FileExtensions) {
                this.FileUpload.attr("accept", this.FileExtensions);
            }

            //添加上传控件
            $(this.Element).append(this.FileUpload);
            if (this.IsMobile) {
                this.ActionPanel.hide();
                // this.FileUpload.hide();
                this.FileUpload.css({'opacity': '0', 'z-index': '99'});
            } else {
                this.FileUpload.hide();
            }
            $(this.ActionPanel).unbind("click.SheetAttachment").bind("click.SheetAttachment", this, function (e) {
                $.extend(this, e.data);
                if ($(this.Element).data($.MvcSheetUI.DataFieldKey.toLowerCase()) != this.DataField)
                    return;
                this.FileUpload.click();
            });

            this.FileUpload.unbind("change.FileUpload").bind("change.FileUpload", this, function (e) {
                e.data.AddFiles.apply(e.data, [e.data.getFiles(this.files)]);
                $(this).val("")
            });

            this.BindDrag();
        },
        //绑定拖拽上传事件
        BindDrag: function () {
            //移动端不支持拖拽
            if (this.IsMobile)
                return;
            $(this.ActionPanel).on({
                dragenter: function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                },
                dragleave: function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                },
                dragover: function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                }
            });

            var that = this;
            this.ActionPanel[0].addEventListener("drop", function (e) {
                e.stopPropagation();
                e.preventDefault();//取消默认浏览器拖拽效果

                var files = that.getFiles(e.dataTransfer.files);
                that.AddFiles.apply(that, [files]);
            }, false);
        },
        getFiles: function (files) {
            var filesArr = [];
            for (var i = 0; i < files.length; i++) {
                filesArr.push(files[i]);
            }
            return filesArr;
        },
        //链接点击时打开图片
        _OpenImage: function (e) {
            var thisAnchor = $(e.target);
            if (!thisAnchor.is("[data-img-url]")) {
                thisAnchor = $(thisAnchor).closest("[data-img-url]");
            }
            var panelId = $(thisAnchor).attr("img-panel-id");

            if (!panelId) {
                panelId = $.uuid();
                $(thisAnchor).attr("img-panel-id", panelId);

                var _panel = $("<div>").addClass("panel").attr("id", panelId).attr("js-scrolling", "false").attr("data-footer", "none");
                var _imgWrapper = $("<div>").addClass("img-wrapper");
                var img = document.createElement("img");
                _imgWrapper.append(img);
                _panel.append(_imgWrapper);
                _panel.appendTo("#content");
                $.ui.loadContent(panelId);

                img.onload = function () {
                    var thisImg = $(arguments[0].target);
                    var imgWidth = thisImg.width();
                    //var imgheight = thisImg.height();
                    var panelWidth = $(thisImg).closest(".panel").width();
                    //var panelHeight = $("#content").height();

                    //默认缩放
                    var zoomMin = 1;
                    //如果图片过宽，将图片默认显示为适应屏幕宽度
                    if (imgWidth > panelWidth) {
                        zoomMin = panelWidth / imgWidth;
                    }

                    setTimeout(function () {
                        imgScroll = new IScroll(_imgWrapper.get(0), {
                            zoom: true,
                            zoomMin: zoomMin,
                            zoomMax: 4,
                            scrollX: true,
                            scrollY: true,
                            wheelAction: "zoom"
                        });
                        imgScroll.zoom(zoomMin);
                    }, 600)
                }
                //img.src = $(thisAnchor).attr("data-img-url");
                var url = $(thisAnchor).attr("data-img-url");
                $.ajax({
                    type: "POST",
                    url: url,
                    success: function (data) {
                        img.src = data;
                    }
                });
            } else {
                $.ui.loadContent(panelId);
            }
        },
        //渲染图片链接
        RenderImageAnchor: function (anchor, url) {
            anchor.unbind("click").bind("click", this._OpenImage);
        },

        //创建上传元素
        //有url就是已经上传的控件，不需要判断size 大小
        CreateFileElement: function (fileid, name, size, url, contentType) {
            var fileSizeStr = 0;
            if (size > 1024 * 1024)
                fileSizeStr = (Math.round(size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
            else
                fileSizeStr = (Math.round(size * 100 / 1024) / 100).toString() + 'KB';
            var fileSize = $("<td data-filesize='" + fileid + "'><span data-filerate='" + fileid + "'>" + SheetLanguages.Current.Loading + "</span> (" + fileSizeStr + ")</td>").addClass("text-info");
            var actionTd = $("<td data-action='" + fileid + "' class=\"printHidden\"></td>");

            //移动端使用span
            if (this.IsMobile) {
                fileSize = $("<span class='item-note' data-filesize='" + fileid + "'>（" + fileSizeStr + "）</span><span class='item-note' data-filerate='" + fileid + "'>" + SheetLanguages.Current.Loading + "</span>")
                actionTd = $("<span data-action='" + fileid + "' class=\"printHidden\"></span>");
            }
            //移动端不需要actionStr
            //var actionStr = $("<a href='javascript:void(0);' class='fa fa-minus'>" + SheetLanguages.Current.Remove + "</a>");
            var actionStr = $("<a href='#' class='fa fa-minus'>" + SheetLanguages.Current.Remove + "</a>");
            if (this.Editable) {
                actionStr.unbind("click.fileDeleteBtn").bind("click.fileDeleteBtn", this, function (e) {
                    if (confirm(SheetLanguages.Current.ConfirmRemove)) {
                        e.data.RemoveFile.apply(e.data, [$(this).closest("tr").attr("id")]);
                    }
                });
            } else {
                actionStr.hide();
            }

            //标志是否能上传
            var flag = true;
            var fileName = name;
            var fileType = "";
            if (fileName.lastIndexOf(".") > 0) {
                //fileName = name.substring(0, name.lastIndexOf("."));
                fileType = name.substring(name.lastIndexOf("."), name.length);
                fileType = fileType.toLowerCase();
            }
            if (this.IsMobile) {
                //限制文件名长度
                if (fileName.length >= 15) {
                    fileName = fileName.substr(0, 12) + '...';
                }
                // console.log(fileName);
            }


            if (url == undefined) {
                if (this.FileExtensions) {
                    //文件格式校验
                    if (fileType != "") {
                        if (this.FileExtensions.indexOf(fileType) < 0) {
                            flag = false;
                        }
                    } else {
                        flag = false;
                    }
                }
                if (!flag) {

                    if (this.IsMobile) {
                        fileSize = $("<span data-filesize='" + fileid + "'data-filerate='" + fileid + "' style='color:red;'>" + SheetLanguages.Current.FileExtError + "</span>" + "<span>(" + fileSizeStr + ")</span>")
                    } else {
                        fileSize = $("<td data-filesize='" + fileid + "'><span data-filerate='" + fileid + "' style='color:red;'>" + SheetLanguages.Current.FileExtError + "</span> (" + fileSizeStr + ")</td>").addClass("text-info");
                    }
                } else {
                    //判断文件大小
                    var kbSize = Math.round(size * 100 / 1024) / 100;
                    // window.console.log(this.MaxUploadSize);
                    //update by luxm
                    //文件限制大小可为小数,默认10M
                    if (0 == parseFloat(this.MaxUploadSizefloat) || !this.MaxUploadSizefloat) {
                        // window.console.log("是否为0" + true);
                        this.MaxUploadSizefloat = "10";
                    }
                    if (kbSize > Math.round(parseFloat(this.MaxUploadSizefloat) * 1024)) {
                        flag = false;
                        window.console.log("最大设置上传大小" + Math.round(parseFloat(this.MaxUploadSizefloat) * 1024) + 'kb')
                        if (this.IsMobile) {
                            fileSize = $("<span data-filesize='" + fileid + "'data-filerate='" + fileid + "' style='color:red;'>" + SheetLanguages.Current.OverMaxLength + "</span>" + "<span>(" + fileSizeStr + ")</span>")
                        } else {
                            fileSize = $("<td data-filesize='" + fileid + "'><span data-filerate='" + fileid + "'  style='color:red;'>" + SheetLanguages.Current.OverMaxLength + "</span> (" + fileSizeStr + ")</td>").addClass("text-info");
                        }
                    }


                    //Ionic 1+版本使用UIWEBVIEW，此ISO控件在INPUT为多选时，无法上传视频
                    if (this.IsMobile) {
                        var u = navigator.userAgent;
                        var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                        if (isIOS && (contentType.indexOf("video") > -1)) {
                            fileSize = $("<span style='color:red;'>" + SheetLanguages.Current.ISOVideoUploadWarn + "</span>").addClass("text-info");
                            //update by luxm
                            //ios不能上传视频，flag与文件File有关，验证的时候会以此为依据
                            flag = false;
                        }
                    }

                }
            } else {
                if (!this.IsMobile) {
                    actionTd.append($("<a href='" + url + "' class='fa fa-download' target='_blank' UC=true>" + SheetLanguages.Current.Download + "</a>"));
                    actionTd.append("&nbsp;&nbsp;");
                }
                if (this.IsMobile) {
                    fileSize = $("<span class='item-note' data-filesize='" + fileid + "'>" + fileSizeStr + "</span>")
                } else {
                    fileSize = $("<td data-filesize='" + fileid + "'>" + fileSizeStr + "</td>").addClass("text-info");
                }
            }

            var trRow = $("<tr></tr>").attr("id", fileid);
            if (this.IsMobile) {
                trRow = $("<a class='item item-input item-icon-right' style='white-space:nowrap;flex-wrap:wrap;' href='javascript:void(0)'></a>").attr("id", fileid);
            }


            if (!this.IsMobile || url == undefined) {
                if (url == undefined && this.IsMobile) {

                    trRow.append("<label class='input-label' title='" + name + "'>" + fileName + "<label>")
                    trRow.bind("click.mobilerow", this, function (e) {
                        e.data.MobileItemClick.apply(e.data, [trRow.attr("id"), url]);
                    });
                } else {
                    trRow.append("<td ><div class='LongWord'>" + name + "</div></td>");
                }

            } else {
                //移动端显示图片在Div里
                if (this.IsMobile && contentType && contentType.toLowerCase().indexOf("image/") == 0) {
                    trRow.attr("data-img-url", url);
                    trRow.append("<label  class='input-label'>" + name + "<label>");
                    // console.log(name);
                    trRow.attr("data-url", url);
                    trRow.bind("click.mobilerow", this, function (e) {
                        e.data.MobileItemClick.apply(e.data, [trRow.attr("id"), url, true]);
                    });
                } else {
                    //$.ajax({
                    //    type: "POST",
                    //    url: url,
                    //    async: false,
                    //    success: function (data) {
                    //        url = data;
                    //    }
                    //});

                    if (this.IsMobile) {
                        trRow.append("<label  class='input-label'>" + name + "<label>")
                        trRow.attr("data-url", url);
                        //trRow.attr("href", url);
                        trRow.unbind("click.mobilerow").bind("click.mobilerow", this, function (e) {
                            e.data.MobileItemClick.apply(e.data, [trRow.attr("id"), url]);
                        });
                    } else {
                        trRow.append("<td ><a href='" + url + "' class='fa fa-download' target='_blank' UC=true><div class='LongWord'>" + name + "</div></a></td>");
                    }
                }
            }
            trRow.append(fileSize.css("text-align", "right"));
            if (this.IsMobile) {
                //移动端添加文件类型图标
                var fileTypeIcon = $("<span></span>");
                var suffix = name.match(/\.\w+$/);
                var fileTypeObj = {
                    'img': ['.bmp', '.jpg', '.jpeg', '.gif', '.png'],
                    'ppt': ['.ppt', '.pptx'],
                    'word': ['.doc', '.docx'],
                    'pdf': ['.pdf'],
                    'excel': ['.xls', '.xlsx']
                };
                suffix = String(suffix).toLowerCase();
                for (key in fileTypeObj) {
                    if (fileTypeObj[key].indexOf(suffix) != -1) {
                        fileTypeIcon.removeClass('file').addClass(key);
                        break;
                    } else {
                        fileTypeIcon.removeClass('file').addClass('file');
                    }
                }
                trRow.prepend(fileTypeIcon);
            }
            if (!this.IsMobile) {
                trRow.append(actionTd.append(actionStr).css("text-align", "center"));
            }
            this.UploadList.append(trRow);
            if (flag) {
                this.Files++;
            }

            var divWidth = 150;
            if ($(this.Element).width() > 100)
                divWidth = $(this.Element).width() / 2;

            trRow.find(".LongWord").width(divWidth + "px");
            //计算文字的长度
            var temID = $.MvcSheetUI.NewGuid();
            var wordWidth = $("<span>").attr("id", temID).text(name).appendTo("body").width();
            $("#" + temID).remove();
            if (divWidth < wordWidth) {
                trRow.find(".LongWord").attr("title", name).css("float", "left").after(fileType);
            }

            return flag;
        },
        //添加文件
        AddFiles: function (files) {
            if (!this.Multiple) {
                this.ClearFiles();
            }
            var getUrlParam = function (name) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                var r = window.location.search.substr(1).match(reg);
                if (r != null) return unescape(r[2]); return null;
            };
            // debugger
            // 改成列队上传模式
            if (files && files.length > 0) {
                var fileid = $.MvcSheetUI.NewGuid(); // 文件id
                var SheetCode = getUrlParam("SheetCode"); // SheetCode
                // console.log(getUrlParam("SheetCode"))
                // var fileid = $.MvcSheetUI; // 文件id
                if (this.CreateFileElement(fileid, files[0].name, files[0].size, null, files[0].type)) {
                    //需要添加的附件
                    this.AddAttachments[fileid] = {
                        fileid: fileid,
                        file: files[0],
                        ContentType: files[0].type,
                        xhr: new XMLHttpRequest(),
                        state: 0//0:未上传完，1:已上传完,100:失败
                    };
                    files.splice(0, 1);
                    this.UploadFile(fileid, files, SheetCode);
                }
            }

        },
        //上传
        UploadFile: function (fileid, files, SheetCode) {
            if (this.AddAttachments[fileid] == null && this.AddAttachments[fileid].state != 0)
                return;

            var fd = new FormData();
            fd.append('fileToUpload', this.AddAttachments[fileid].file);
            fd.append('MaxSize', this.MaxUploadSize * 1024);

            var xhr = this.AddAttachments[fileid].xhr;
            xhr.context = this;
            xhr.files = files;
            xhr.upload.fileid = fileid;
            xhr.abort.fileid = fileid;

            xhr.upload.addEventListener('progress', this.UploadProgress, false);
            xhr.addEventListener('load', this.UploadComplete, false);
            xhr.addEventListener('error', this.UploadFailed, false);
            xhr.addEventListener('abort', this.UploadCanceled, false);

            xhr.open('POST', this.SheetAttachmentHandler + fileid + "&SheetCode=" + SheetCode);
            xhr.send(fd);
        },
        UploadProgress: function (evt) {
            if (evt.lengthComputable) {
                var percentComplete = Math.round(evt.loaded * 100 / evt.total);
                /*
                 * 在上传大文件的时候，在后台处理的时间会比较久
                 * 先只将上传进度显示为99%，在UploadComplete里改为100%
                 */
                if (percentComplete >= 100)
                    percentComplete = 99;
                $("span[data-filerate='" + evt.currentTarget.fileid + "']").html(percentComplete + "%");
            } else {
                this.context.AddAttachments[evt.currentTarget.fileid].state = 100;
                $("span[data-filerate='" + evt.currentTarget.fileid + "']").css("color", "red").html(SheetLanguages.Current.UploadError);
            }
        },
        UploadComplete: function (evt) {
            if (evt.target.status == 200) {
                var resultObj = eval('(' + evt.target.responseText + ')');
                var fileid = resultObj.FileId;
                this.context.AddAttachments[fileid].state = 1;
                this.context.AddAttachments[fileid].AttachmentId = resultObj.AttachmentId;
                $("td[data-action='" + fileid + "']").prepend("&nbsp;&nbsp;");
                if (this.context.IsMobile) {
                    //显示图片
                    if (this.context.AddAttachments[fileid].ContentType && this.context.AddAttachments[fileid].ContentType.toLowerCase().indexOf("image/") == 0) {
                        $("#" + fileid).attr("data-img-url", resultObj.Url)
                                .attr("data-url", resultObj.Url)
                                .unbind("click.mobilerow")
                                .bind("click.mobilerow", this.context, function (e) {
                                    e.data.MobileItemClick.apply(e.data, [fileid, resultObj.Url, true]);
                                });
                    } else {
                        $("#" + fileid)
                                .attr("data-url", resultObj.Url)
                                .unbind("click.mobilerow")
                                .bind("click.mobilerow", this.context, function (e) {
                                    e.data.MobileItemClick.apply(e.data, [fileid, resultObj.Url]);
                                });
                    }
                } else {
                    $("td[data-action='" + fileid + "']").prepend($("<a href='" + resultObj.Url + "' class='fa fa-download' target='_blank' UC=true>" + SheetLanguages.Current.Download + "</a>"));
                }

                /*
                 *android对upload的progress事件支持不完善
                 *在Complete事件里将上传进度赋值为100%
                 */
                $("span[data-filerate='" + fileid + "']").html("100%");
                this.context.Validate();
            } else {
                this.context.UploadFailed(evt);
            }
            // 单个附件上传完成，继续下一个
            this.context.AddFiles(this.files);
        },

        UploadFailed: function (evt) {
            this.context.AddAttachments[evt.currentTarget.fileid].state = 100;
            $("span[data-filerate='" + evt.currentTarget.fileid + "']").html(SheetLanguages.Current.UploadError);
        },

        UploadCanceled: function () {
        },

        RemoveFile: function (fileID) {
            fileID = $.trim(fileID);
            $("#" + fileID).remove();
            this.Files--;
            this.Files = this.Files < 0 ? 0 : this.Files;
            if (this.AddAttachments[fileID]) {
                this.AddAttachments[fileID].xhr.abort();
                delete this.AddAttachments[fileID];
            } else {
                this.RomveAttachments.push(fileID);
            }
            this.Validate();
        }
    });
})(jQuery);
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
            var divElement = $("<div class='checkbox'><label>" + this.Text + "</label></div>");// $("<div class='checkbox'><label>" + this.DataField + "</label></div>");
            $(this.Element).before(divElement);
            $(this.Element).appendTo(divElement.children("label"));

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
﻿//复选框

(function ($) {
	//update by luxm
	//记录id值获取displayrole，因为移动端复选框和pc端不一样，目前在该js中处理
	var ids = [];
	var thats = [];
    $.fn.SheetCheckboxList = function () {
        return $.MvcSheetUI.Run.call(this, "SheetCheckboxList", arguments);
    };

    // 构造函数
    $.MvcSheetUI.Controls.SheetCheckboxList = function (element, ptions, sheetInfo) {
        this.CheckListDisplay = [];
        $.MvcSheetUI.Controls.SheetCheckboxList.Base.constructor.call(this, element, ptions, sheetInfo);

    };

    // 继承及控件实现
    $.MvcSheetUI.Controls.SheetCheckboxList.Inherit($.MvcSheetUI.IControl, {
        Render: function () {
            if (!this.Visiable) {
                $(this.Element).hide();
                return;
            }
			// 查看痕迹
			if (this.TrackVisiable && !this.Originate && this.DataField.indexOf(".") == -1) { this.RenderDataTrackLink(); }
            // 渲染前端
            this.HtmlRender();

            // 初始化默认值
            this.InitValue();

            // 校验操作
            this.Validate();
        },

        //获取值
        GetValue: function () {
            var value = "";
            $(this.Element).find("input").each(function () {
                if (this.checked)
                    value += $(this).val() + ";";
            });
            if (this.IsMobile && !value)
                value = this.DataItem.V;
            return value;
        },

        //移动内容
        MobileAddItem: function (value, text, isDefault) {
            this.CheckListDisplay.push({ text: text, value: value, checked: isDefault });
        },
        //设置控件的值
        SetValue: function (value) {
            if (value) {
                var items = value.split(';');
            }
            //value为""或undefined
            if (this.IsMobile && value !== undefined) {
            	//指向this的指针,用完立马置为空值 update by ousihang
            	var pointerToThis = this;
                $(this.Element).find("input").each(function () {
                	$(pointerToThis.CheckListDisplay).each(function (i, checkItem) { 
                		$(items).each(function (j, item){
                			if (checkItem.value == item) {
                				checkItem.checked = true;
                			}
                		});
                	}); 

                    $(this).prop("checked", false);
                });
                pointerToThis = null;
            }

            if (items != undefined) {
                for (var i = 0; i < items.length; i++) {
                    $(this.Element).find("input").each(function () {
                        if (this.value == items[i] || this.value == items[i].replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/\"/g,"&quot;"))
                            $(this).prop("checked", true);
                    });
                }
            }
            if (this.IsMobile) {
                if (this.OnChange) {
                    this.RunScript(this, this.OnChange);
                }

                this.Mask.text(this.GetText());
                if (this.Editable) {
                    if (this.Mask.text() == '' || this.Mask.text() == SheetLanguages.Current.PleaseSelect) {
                        ;
                        this.Mask.text(SheetLanguages.Current.PleaseSelect);
                        this.Mask.css({ 'color': '#797f89' });
                    }else{
                        this.Mask.css({ 'color': '#2c3038' });
                    }
                }
            }
        },
        GetText: function () {
            var text = "";
            $(this.Element).find("input").each(function () {
                if (this.checked) {
                    if (text) text += ",";
                    text += $(this).next().text();
                }
            });

            //if (this.OnChange) {
            //    this.RunScript(this, this.OnChange);
            //}
            return text;
        },

        SetReadonly: function (flag) {
        	
            if (flag) {
                $(this.Element).find("input").prop("disabled", true);
            }
            else {
                $(this.Element).find("input").prop("disabled", false);
            }
        },
        //设置一行显示数目
        SetColumns: function () {
            if (this.RepeatColumns && /^([1-9]\d*)$/.test(this.RepeatColumns)) {
                var width = (100 / this.RepeatColumns) + "%";
                var divs = $(this.Element).find("div"),
                    i;
                for (i = 0; i < divs.length; i++) {
                    $(divs[i]).css({ "width": width });
                }
            }
        },

        InitValue: function () {
            //设置默认值
            var _that = this;
            var items = undefined;
            var texts = "";
            if (this.V == undefined || this.V == "") {
                if (this.SelectedValue == undefined || this.SelectedValue == "") return;
                items = this.SelectedValue.split(';');
            }
            else {
                items = this.V.split(';');
            }
            if (items != undefined) {
                $(this.Element).find("input").each(function () {
                    $(this).prop("checked", false);
                });
                for (var i = 0; i < items.length; i++) {
                    $(this.Element).find("input").each(function () {
                        if (this.value == items[i]) {
                            if (texts) texts += "、";
                            texts += $(this).next().text();
                            $(this).prop("checked", true);
                        }
                    });

                    if (_that.IsMobile) {
                        var isChecked = false;
                        for (var x in this.CheckListDisplay) {
                            if (this.CheckListDisplay[x].value == items[i]) {
                                this.CheckListDisplay[x].checked = true;
                            }
                        }
                    }
                }
            }

            if (this.IsMobile) {

                if (this.Editable) {
                    this.Mask.html(texts);
                }
                else {
                    //移动端不可编辑
                    $(this.Element).html(texts);
                }
            }
        },

        MobileInit: function () {
             
            //跳转到查询页面
            var that = this;
            var ionic = $.MvcSheetUI.IonicFramework;
            //update by ouyangsk 记录上次item的checkBox值
            var lastItems = [];
            //复选框控件使用
        	if (that.DisplayRule) {
        		ids.push(that.DataField);
        	}
        	if (that.VaildationRule) {
        		thats.push(that);
        	}
            if (this.Editable) {
                //只往上一级，只能通过控件绑定click事件，防止DisplayRule属性存在时出现异常
                $(this.Element).parent().unbind('click.MobileCheckListBox').bind("click.MobileCheckListBox", function () {
                    ionic.$ionicModal.fromTemplateUrl('Mobile/form/templates/checkbox_popover.html?v=20171222', {
                        scope: ionic.$scope
                    }).then(function (popover) {
                        popover.scope.header = that.N;
                        popover.scope.CheckListDisplay = that.CheckListDisplay;
                        //update by luxm
                        popover.scope.DataField = that.DataField;
                        popover.show();
                        popover.scope.hide = function () {
                            popover.hide();
                            that.Validate();
                            popover.scope.rememberCheck();
                        };
                        //update by ouyangsk 关闭按钮则取消选择
                        popover.scope.closePopover = function () {
                        	popover.hide();
	                        for (var i = 0; i < popover.scope.CheckListDisplay.length; i++) {
	                        	popover.scope.CheckListDisplay[i].checked = lastItems[i];
	                        }
                        	var val = that.MobileGetCheckListValue(popover.scope.CheckListDisplay);
                            that.SetValue(val);
                        };
                        popover.scope.rememberCheck = function () {
                        	for (var i = 0; i < popover.scope.CheckListDisplay.length; i++) {
                        		 if (popover.scope.CheckListDisplay[i].checked == false) {
                        			 lastItems[i] = false;
                                 } else {
                                	 lastItems[i] = true;
                                 }
                        	} 
                        };
                        
                        popover.scope.checkAllSelected = function () {
                        	
                            popover.scope.allSelected = true;
                            for (item in popover.scope.CheckListDisplay) {
                                if (popover.scope.CheckListDisplay[item].checked == false) {
                                    popover.scope.allSelected = false;
                                }
                            }
                        };

                        popover.scope.checkAllSelected();

                        popover.scope.clickCheckList = function () {
                            var val = that.MobileGetCheckListValue(popover.scope.CheckListDisplay);
                            that.SetValue(val);
                        	//update by luxm
                            //移动端处理displayRole属性
                            popover.scope.displayRole(val,that);
                            popover.scope.checkAllSelected();
                        };
                        popover.scope.selectAll = function () {
                        	//create update by luxm
                        	//多选框全选bug
                        	var a = $(".active .popover .list").find('label').find('span');
                        	window.console.log($(".active .popover .list").find('label').find('span').eq(0).text());
                            	for(i in a){
                            		for (item in popover.scope.CheckListDisplay) {
                            			if(a.eq(i).text().replace(/^\s+|\s+$/g,"") == popover.scope.CheckListDisplay[item].text){
                            				popover.scope.CheckListDisplay[item].checked = true;
                            				//update by luxm
                            				//display属性
                            				if (ids.length != 0) {
                            				for (var i = 0; i < ids.length; i++) {
                            					var displayrule = $("div[data-datafield='"+ids[i]+"']").attr('data-displayrule');
                            					if (popover.scope.DataField == displayrule.substring(displayrule.indexOf("{")+1,displayrule.indexOf("}")) && popover.scope.CheckListDisplay[item].text == displayrule.split('==')[1].split("'")[1]) {
                            						$("div[data-datafield='"+ids[i]+"']").parent().removeClass("hidden");
                            					}
                            				}
                            				}
                            			}			
                                }
                            	}
                            var val = that.MobileGetCheckListValue(popover.scope.CheckListDisplay);
                            that.SetValue(val);
                            popover.scope.allSelected = true;
                        };
                        //create update by luxm
                        //移动端处理displayRole属性
                        popover.scope.displayRole = function (val,that) {
                        	if (ids.length != 0) {
                        		var midArray = val.split(";");
                                for (var i = 0; i < ids.length;i++) {
                                	var a = $("div[data-datafield='"+ids[i]+"']").attr('data-displayrule').split('==')[1].split("'");
                                	var displayrule = $("div[data-datafield='"+ids[i]+"']").attr('data-displayrule');
                                	var VaildationRule = $("div[data-datafield='"+ids[i]+"']").attr('data-vaildationrule');
                                	if (displayrule.indexOf(""+that.DataField) > 0 && (displayrule.substring(displayrule.indexOf("{")+1,displayrule.indexOf("}")) == that.DataField) && ($("div[data-datafield='"+ids[i]+"']").attr('data-datafield') != that.DataField)) {

                                    	if (midArray && ($.inArray(""+a[1],midArray) != -1)) {
                                    		$("div[data-datafield='"+ids[i]+"']").parent().removeClass("hidden");
                                    	} else {
                                    		$("div[data-datafield='"+ids[i]+"']").parent().addClass("hidden");
                                    	}	
                                	}
                                	//验证 $.inArray(VaildationRule.split('==')[1].split("'")[1],midArray) !=-1
                                	if (VaildationRule && VaildationRule.indexOf(""+that.DataField) > 0) {
                                		if (thats.length > 0) {
                                			for (var i = 0; i < thats.length; i++) {
                                				if (!($.inArray(""+a[1],midArray) != -1) && thats[i].DataField == $("div[data-datafield='"+ids[i]+"']").attr('data-datafield') && $.inArray(VaildationRule.split('==')[1].split("'")[1],midArray) !=-1 || (thats[i].DataField == $("div[data-datafield='"+ids[i]+"']").attr('data-datafield') && displayrule == VaildationRule && $.inArray(VaildationRule.split('==')[1].split("'")[1],midArray) !=-1)) {
                                					thats[i].Required = true;
                                				} else {
                                					thats[i].Required = false;
                                				}
                                			}
                                		}
                                	}
                                }
                        	}
                        };
                        popover.scope.unSelectAll = function () {
                        	
                            for (item in popover.scope.CheckListDisplay) {
                                popover.scope.CheckListDisplay[item].checked = false;
                            	if (ids.length != 0) {
                            		for (var i = 0; i < ids.length; i++) {
                            			var displayrule = $("div[data-datafield='"+ids[i]+"']").attr('data-displayrule');
                    					if (popover.scope.DataField == displayrule.substring(displayrule.indexOf("{")+1,displayrule.indexOf("}")) && popover.scope.CheckListDisplay[item].text == displayrule.split('==')[1].split("'")[1]) {
                    						$("div[data-datafield='"+ids[i]+"']").parent().addClass("hidden");
                    					}
                            		}
                            	}
                            }
                            var val = that.MobileGetCheckListValue(popover.scope.CheckListDisplay);
                            that.SetValue(val);
                            popover.scope.allSelected = false;
                        };
                        popover.scope.searchFocus = false;
                        popover.scope.searchAnimate = function () {
                            popover.scope.searchFocus = !popover.scope.searchFocus;
                        };
                        popover.scope.searChange = function () {
                        	//update by ouyangsk 搜索前清空所有已选择的项
                        	popover.scope.unSelectAll();
                            popover.scope.searchNum = $(".active .popover .list").children('label').length;
                        };
                    });
                    return;
                })
            }
        },

        MobileGetCheckListValue: function (display) {
        	
            var v = [];
            if (display && display.length > 0) {
                for (var d in display) {
                    var od = display[d];
                    if (od.checked) { v.push(od.value) };
                }
            }
            if (v.length == 0) { return ''; }
            return v.join(';');
        },

        HtmlRender: function () {
            var that = this;
            //组标示
            if (!this.Visiable) { $(this.Element).hide(); return; }
            $(this.Element).addClass("SheetCheckBoxList");
            this.SheetGropName = this.DataField + "_" + Math.floor(Math.random() * 1000);//设置统一的name

            // 显示红色*号提示
            if (this.Editable && this.Required && !$(this.Element).val() && !this.IsMobile) {
                this.AddInvalidText(this.Element, "*", false);
            }
            var existedHtml = $(this.Element).html();

            $(this.Element).html("");

            if (this.MasterDataCategory) {
                var that = this;
                var cmdParam = JSON.stringify([this.MasterDataCategory]);
                if ($.MvcSheetUI.CacheData && $.MvcSheetUI.CacheData[cmdParam]) {
                    var cacheData = $.MvcSheetUI.CacheData[cmdParam];
                    for (var key in cacheData) {
                        that.AddCheckboxItem.apply(that, [cacheData[key].Code, cacheData[key].EnumValue, cacheData[key].IsDefault]);
                    }
                    that.InitValue.apply(that);

                    that.DoRepeatDirection.apply(that);
                    if (that.IsMobile) {
                        that.MobileInit.apply(that);
                    }
                }
                else {
                    $.MvcSheet.GetSheet({
                        "Command": "GetMetadataByCategory",
                        "Param": cmdParam
                    },
                        function (data) {
                            if (data) {
                                //将数据缓存
                                if (!$.MvcSheetUI.CacheData) { $.MvcSheetUI.CacheData = {}; }
                                $.MvcSheetUI.CacheData[cmdParam] = data;

                                for (var i = 0, len = data.length; i < len; i++) {
                                    that.AddCheckboxItem.apply(that, [data[i].Code, data[i].EnumValue, data[i].IsDefault]);
                                }
                            }
                            //初始化默认值
                            that.InitValue.apply(that);
                            that.DoRepeatDirection.apply(that);
                            if (that.IsMobile) {
                                that.MobileInit.apply(that);
                            }
                        }, null, this.DataField.indexOf(".") == -1);
                }
            }
            else if (this.DefaultItems) {
                var items = this.DefaultItems.split(';');
                for (var i = 0; i < items.length; i++) {
                    that.AddCheckboxItem.apply(that, [items[i], items[i], false]);
                }
                this.InitValue();
                if (that.IsMobile) {
                    that.MobileInit.apply(that);
                }
                this.DoRepeatDirection();
            }
            else {
                $(this.Element).html(existedHtml);
                this.InitValue();
                if (that.IsMobile) {
                    that.MobileInit.apply(that);
                }
            }

            //绑定选择事件
            $(that.Element).unbind("click").bind("click", [that], function (e) {
                that.SetInvalidText();
            });
            $(that.Element).unbind("change").bind("change", [that], function (e) {
                e.data[0].RunScript(this, e.data[0].OnChange);
            });
        },

        RenderMobile: function () {
            this.HtmlRender();
            //不可用
            if (!this.Editable) {
                $(this.Element).addClass(this.Css.Readonly);
                if (!this.GetValue())
                    $(this.Element).hide();
            }
            else {
                this.SetValue();
                //var _Mask = this.Mask.text(this.GetText());
                this.Mask.insertAfter($(this.Element));
                this.pupIcon = $("<i class='icon ion-ios-arrow-right'></i>").insertAfter(this.Mask);
                $(this.Element).closest("div.item").addClass("item-icon-right");
                $(this.Element).hide();
            }
        },

        DoRepeatDirection: function () {
        	
            //横向展示
            if (this.RepeatDirection == "Horizontal") {
                //$("div[SheetGropName='" + this.SheetGropName + "']").css("float", "left");
                $(this.Element).find("[SheetGropName='" + this.SheetGropName + "']").css("float", "left");
            }

            //设置行数量
            this.SetColumns();

            //this.SetInvalidText();
        },

        Validate: function (effective, initValid) {
        	if (this.IsMobile) {
        		if (!this.Editable) return true;
        		// create update by luxm
        		//规则验证
        		for (var i = 0; i < thats.length; i++) {
        			if (thats[i].Required) {
        				thats[i].SetInvalidText();
        			} else {
        				thats[i].RemoveInvalidText(thats[i].Element, "*", false);
        			}
        		}
                if (initValid || !effective) {
                    return this.SetInvalidText();
                }
                return true;
        	} else {
                if (!this.Editable) return true;
                if (initValid || !effective) {
                    return this.SetInvalidText();
                }
                return true;
        	}
        },
        //处理必填红色*号
        SetInvalidText: function () {
            var check = true;
            if (this.Editable && this.Required) {
                check = false;
                var inputs = $(this.Element).find("input");
                for (var i = 0; i < inputs.length; i++) {
                    if ($(inputs[i]).is(":checked")) {
                        check = true;
                        break;
                    }
                }
                if (check) {
                    this.RemoveInvalidText(this.Element, "*", false);
                }
                else {
                    this.AddInvalidText(this.Element, "*", false);
                }
            }

            return check;
        },

        AddCheckboxItem: function (value, text, isDefault) {
        	
            if (text || value) {
            	if (this.IsMobile) {
                    this.MobileAddItem(value, text, isDefault);
                }
            	//update by xl@Future
                text = $('<div/>').text(text).html();
                value = $('<div/>').text(value).html();
                var option = $("<div SheetGropName='" + this.SheetGropName + "'></div>");
                var id = $.MvcSheetUI.NewGuid();
                var checkbox = $("<input type='checkbox' />").attr("name", this.SheetGropName).attr("id", id).val(value);//.text(text || value)
                checkbox.prop("checked", isDefault);
                if (!this.Editable) {//不可用
                    checkbox.prop("disabled", "disabled")
                }
                var label = $("<label for='" + id + "' style=\"padding-left:3px;padding-right:5px;\">" + (text || value) + "</label>");
                $(this.Element).append(option);
                option.append(checkbox);
                option.append(label);
                
            }


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
            return {};
        }
    });
})(jQuery);
// SheetComment控件
(function ($) {
    //控件执行
    $.fn.SheetComment = function () {
        return $.MvcSheetUI.Run.call(this, "SheetComment", arguments);
    };
    $.MvcSheetUI.Controls.SheetComment = function (element, options, sheetInfo) {
        // 获取签章的显示位置，是放置在文本之前还是文本之后
        this.SignPosition = "BeforeComment"; // BeforeComment,AfterComment
        this.SignAlign = "Center";           // Left,Center,Right
        this.SignHeight = 0;                 // 签章高度,0表示自然高度
        this.SignWidth = 0;                  // 签章宽度,0表示自然宽度
        this.CommentFolded = false;          // 审批意见是否折叠，只针对移动端
        // ---------------------------------------
        var upfileUrl = _PORTALROOT_GLOBAL?_PORTALROOT_GLOBAL:"/Portal";
        this.loCalUrl = upfileUrl;
        this.SheetAttachmentHandler = upfileUrl+ "/FileUpload/UploadFile";
        // this.SheetAttachmentHandler = _PORTALROOT_GLOBAL + "/FileUpload/UploadFile";
        this.FileUpload = $("<input type='file' />").attr("data-attachment", true);
        //文件数
        this.Files = 0;
        //新添加的
        this.AddAttachments = {};
        this.UploadAttachmentsIds = [];
        this.ProcessIds = [];
        //删除数据库的
        this.RomveAttachments = [];
        //异步数据
        this.XHRJson = {};
        //数据模型编码
        this.SchemaCode = "";
        this.NewComment = false; //新增评论状态
        //隐藏了可配置属性，设置固定多选
        this.Multiple = true;
        //update by luxm
        //设置最大文件值
        this.MaxUploadSizefloat = element.getAttribute("data-maxuploadsize");

        $.MvcSheetUI.Controls.SheetComment.Base.constructor.call(this, element, options, sheetInfo);
    };

    $.MvcSheetUI.Controls.SheetComment.Inherit($.MvcSheetUI.IControl, {
        Modal: {},

        ProcessModal: {},

        Render: function () {

            //不可见返回 发起模式也不可见
            if (!this.Visiable) { //  || this.Originate
                this.Element.style.display = "none";
                return;
            }
            $(this.Element).addClass("SheetComment list-group-item SheetCommentShow");

            //历史评论
            this.InitHistoryComment();

            var isEditor = this.O.indexOf("E") != -1
            // 不可编辑
            if (!this.Editable) {
                if (!this.NullCommentTitleVisible && (!this.V || !this.V.Comments || this.V.Comments.length === 0)) {
                    $("span[" + $.MvcSheetUI.PreDataKey + $.MvcSheetUI.DataFieldKey.toLowerCase() + "='" + this.DataField + "']").parent().hide();
                }
                return;
            }
            //评论输入
            this.InitCommentInput();

            // 常用意见和签章
            this.InitFrequentlyUsedCommentsAndSignature();


        },

        //移动端
        RenderMobile: function () {
            // if (!this.Editable) {
            //     $(this.Element).closest(".item.item-input").hide();
            //     return;
            // }
            //无编辑权限则隐
            this.Render();

            // var bannerTitle = $('<div class="nav-icon fa fa-chevron-right bannerTitle"></div>');
            var bannerTitle = $('<div id="commentTitle" class="nav-icon fa bannerTitle fa-chevron-down"></div>');
            //update by luxm
            //审批意见必填*距离问题
            var bannerTitleLabel = $('<span id="commentTileLabel" style = " float: none !important; padding-right: 8px; padding-left: 4px;"></span>');
            bannerTitleLabel.text(SheetLanguages.Current.Comments);
            bannerTitleLabel.appendTo(bannerTitle);
            bannerTitle.insertBefore(this.Element);

            bannerTitleLabel.unbind("click.show").bind("click.show", this, function (e) {
                $(".tableContent .SheetComment").addClass('hide')
                $(".tableContent .SheetComment").hide()
                if($(".tableContent .SheetComment").hasClass("SheetCommentShow")) {
                    // 执行隐藏
                    $(".tableContent .SheetComment").hide().removeClass("SheetCommentShow");
                    $("#commentTitle").removeClass("fa-chevron-down").addClass("fa-chevron-right");
                } else {
                    $("#commentTitle").removeClass("fa-chevron-right").addClass("fa-chevron-down");
                    // 显示
                    $(".tableContent .SheetComment").show().addClass("SheetCommentShow");
                }
            });
            //将审批意见移动到底部
            $(this.Element).closest('.list').appendTo($('#mobile-content div.scroll'));

            var oldDivContainer = $(this.Element).closest("div.item");
            oldDivContainer.css("padding", "0").removeClass("item-input");
            var spantitle = $(this.Element).parent().prev().remove();

            this.newDivTitle = $("<div class='item item-input item-icon-right'></div>");
            this.newDivTitle.append(spantitle);
            this.newDivTitle.insertBefore(oldDivContainer);
            if ($(this.Element).is(':hidden')) {
                this.newDivTitle.hide();
            }
        },

        // 数据验证
        Validate: function (effective, initValid) {
            // console.log(effective, initValid, '--------------');
            if (!this.Editable)
                return true;
            if (initValid) {
                if (this.Required && !this.GetValue()) {
                    // $(this.Element).css('width','98%');
                    this.AddInvalidText(this.Element, "*", false);
                    return false;
                }
            }
            if (!effective) {
                if (this.Required) {//必填的
                    if (!this.GetValue()) {
                        // $(this.Element).css('width','98%');
                        this.AddInvalidText(this.Element, "*");
                        return false;
                    } else {
                        this.RemoveInvalidText(this.Element);
                    }
                }
            }
            return true;
        },

        GetValue: function () {
            var data = $(this.CommentInput).val();
            return data;
        },

        _changeSignaturePic: function (panel, picName) {
            // console.log(panel, picName);
            if (picName) {
                panel.html("<img alt='' border='0' src='" + $.MvcSheetUI.PortalRoot + "/TempImages/" + picName + ".jpeg' />");
                var img = panel.find("img");
                if (this.SignWidth) {
                    img.width(this.SignWidth);
                }
                if (this.SignHeight) {
                    img.height(this.SignHeight);
                }
                // 签章过宽时，调整签章的宽度 用setTimeout是为了获取到宽度
                setTimeout(function () {
                    if (img.width() > panel.width()) {
                        img.width(panel.width());
                    }
                }, 100);
            } else {
                panel.html("");
            }
        },

        SetReadonly: function (flag) {
            if (flag) {
                $(this.Element).find("textarea").hide();
                $(this.Element).find("select").hide();
                $(this.Element).find(":checkbox").hide();
                $(this.Element).find("label").hide();
            } else {
                $(this.Element).find("textarea").show();
                $(this.Element).find("select").show();
                $(this.Element).find(":checkbox").show();
                $(this.Element).find("label").show();
            }
        },

        //返回数据值
        SaveDataField: function (data) {
            // debugger
            // console.log(data, 'data------')
            var result = {};
            if (!this.Visiable || !this.Editable)
                return result;
            result[this.DataField] = this.SheetInfo.BizObject.DataItems[this.DataField];

            if (!result[this.DataField]) {
                alert(SheetLanguages.Current.DataItemNotExists + ":" + this.DataField);
                return {};
            }

            var IsNewComment = this.NewComment;

            // 签章
            var signatureId = "";
            if (this.SignatureSel) {
                signatureId = this.SignatureSel.val();
            }
                // 初始化 发起流程 评论新增
            if (this.MyComment === undefined) {
                //update by ouyangsk 允许不填审批意见
                //if (!this.GetValue()) return {};
                this.MyComment = {
                    CommentID: $.MvcSheetUI.NewGuid(),
                    UserName: SheetLanguages.Current.MyComment,
                    DateStr: new Date().toString(),
                    Text: this.GetValue(),
                    Avatar: $.MvcSheetUI.SheetInfo.UserImage, //$.MvcSheetUI.PortalRoot + "/assets/images/pixel-admin/user.jpg",
                    SignatureId: signatureId
                };
                IsNewComment = true;
                this.AddCommentItem(this.MyComment);
            }
            //else if (this.MyComment.Text == this.GetValue() && (this.MyComment.SignatureId || "") == signatureId) { //添加校验，如果值没变，就不会需要提交
            //    return {};
            //}
            else {
                var comment = $("#" + this.MyComment.CommentID);
                comment.find("div.comment-text").html(this.GetValue());
                //修改签章
                var signature = comment.find("div.comment-signature");
                this._changeSignaturePic(signature, signatureId);
            }


            // console.log(ProcessIds, 'ProcessIds')
            result[this.DataField].V = {
                CommentID: IsNewComment ? $.MvcSheetUI.NewGuid(): this.MyComment.CommentID,
                Text: this.GetValue(),
                IsNewComment: IsNewComment,
                SetFrequent: this.IsMobile ? false : $(this.SaveFrequentCk).is(":checked"),
                SignatureId: signatureId
            };
            // console.table(result, 'result------------')
            return result;
        },


        //历史评论
        InitHistoryComment: function () {
            var that = this;
            if (this.V && this.V.Comments) {
                var commentLine = false;
                for (var i = 0; i < this.V.Comments.length; i++) {
                    if (this.LastestCommentOnly && i < this.V.Comments.length - 1)
                        continue;
                    var commentObject = this.V.Comments[i];
                    // var AttachmentObject = this.V.Attachment[i]?this.V.Attachment[i]: null; // 添加评论附件内容

                    // var AttachmentObject = new Array(0);
                    // var AttachmentObject = [];
                    // // 获取审批意见对应的附件
                    // if (that.V.Attachment) {
                    //     for (var j = 0; j < this.V.Attachment.length; j++) {
                    //         if (that.V.Comments[i].CommentID.trim() == that.V.Attachment[j].CommentId) {
                    //             AttachmentObject.push(this.V.Attachment[j]);
                    //         }
                    //     }
                    // }
                    if (commentObject.IsMyComment) {
                        this.MyComment = commentObject;
                        if (commentObject.DelegantName === "" && !this.IsMobile) {
                            //this.MyComment.UserName = SheetLanguages.Current.MyComment;
                        }
                    }
                    // 驳回后 新增评论
                    if(that.MyComment && that.MyComment.Approval !== -1) {
                        that.NewComment = true
                    }
                    // console.log(AttachmentObject,'AttachmentObject-历史评论');
                    commentLine = (that.V.Comments.length > 0 && i < that.V.Comments.length - 1);
                    if (commentObject.Approval !== undefined && commentObject.Approval !== -1) {
                        if (this.IsMobile) {
                            that.AddMobileCommentItem(commentObject, i == that.V.Comments.length - 1 ? true : false);
                        } else {
                            that.AddCommentItem(commentObject, commentLine); // 添加评论
                        }
                    }
                }
            }
        },

        //添加他人历史评论
        AddCommentItem: function (commentObject, commentLine) {
            if (this.PanelBody === undefined) {
                var CommentsPanel = $("<div class='widget-comments'></div>");
                if (this.IsMobile) {
                    CommentsPanel.hide();
                }
                if (this.DisplayBorder) {
                    CommentsPanel.addClass("bordered");
                }
                this.PanelBody = $("<div class='widget-comments-box'></div>");
                CommentsPanel.append(this.PanelBody);//历史审批容器
                $(this.Element).prepend(CommentsPanel);
            }

            var commentItem = $("<div class='comment'></div>").attr("id", commentObject.CommentID);
            var commentBody = $("<div class='comment-body'></div>");
            if (!this.DisplayHead) {
                commentBody.css("margin-left:3px");
            }
            if (commentLine) {
                commentBody.addClass("comment-line");
            }
            // 是否显示头像
            if (this.DisplayHead) {
                // console.log(commentObject, 'commentObject')
                var avatar = $("<img alt='' src='" + commentObject.Avatar + "' class='comment-avatar' />");
                commentItem.append(avatar);
            } else {
                commentBody.css({"padding-left": 0}); // pc端
                commentBody.css({"margin-left": 0}); // 移动端
            }
            var userName = commentObject.UserName;
            if (this.OUNameVisible && commentObject.OUName != undefined) {
                userName = commentObject.OUName + " " + userName;
            }

            //审批时间
            var dateStr = "";

            dateStr = commentObject.DateStr;


            if (commentObject.DelegantName) {
                userName = commentObject.DelegantName + "(" + userName + SheetLanguages.Current.Delegant + ")";
            }

            var commenby;
            var toUsers = "";

            if (commentObject.toUsers) {
                for (var _i in commentObject.toUsers) {
                    toUsers = toUsers + "," + commentObject.toUsers[_i];
                }
            }
            if (toUsers.length > 0) {
                toUsers = toUsers.substring(1);
            }

            //TODO luwei 国际化
            var commentType = "";
            var isApprove = true;
            if (commentObject.commentType) {
                if (commentObject.commentType === "Sheet__ConsultComment") {
                    commentType = $.Lang("SheetComment.Consult");
                    isApprove = false;
                } else if (commentObject.commentType === "Sheet__AssistComment") {
                    commentType = $.Lang("SheetComment.Assist");
                    isApprove = false;
                } else if (commentObject.commentType === "Sheet__ForwardComment") {
                    commentType = $.Lang("SheetComment.Forward");
                    isApprove = false;
                }
            }
            if (isApprove) {
                //操作：通过 or 驳回
                var approval = "";
                if (commentObject.Approval === 1) {
                    approval = $.Lang("SheetComment.OperateApprove");
                } else if (commentObject.Approval === 0) {
                    approval = $.Lang("SheetComment.OperateReject");
                }
            }
            if (toUsers.length != 0 && commentType != "") {
                if (commentObject.isReply) {
                    commenby = $("<div class='comment-by'><a href='javascript:void(0)'>" + userName + "</a> "+$.Lang("SheetComment.Feedback")+"  <a href='javascript:void(0)'>" + toUsers + "</a> "+$.Lang("SheetComment.Of")+" [<a href='javascript:void(0)'>" + commentType + "</a>]</div>")
                } else {
                    commenby = $("<div class='comment-by'><a href='javascript:void(0)'>" + userName + "</a> "+$.Lang("SheetComment.Originate")+"  [<a href='javascript:void(0)'>" + commentType + "</a>], "+$.Lang("SheetComment.Wait")+" <a href='javascript:void(0)'>" + toUsers + "</a> "+$.Lang("SheetComment.Feedback")+"</div>")
                }
            } else {
                commenby = $("<div class='comment-by'><a href='javascript:void(0)'>" + userName + "</a></div>")
            }


            if (commentObject.Activity && this.ActivityNameVisible && commentType === "") {
                var ActivityText = commentObject.Activity;
                ActivityText = ActivityText.replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/\"/g,"&quot;");
                commenby.append("[<a href='javascript:void(0)'>" + ActivityText + "</a>]");
            }
            //update by xl@Future
            commentObject.Text = $('<div/>').text(commentObject.Text).html();


            var commenttext = $("<div class='comment-text'>" + commentObject.Text.replace(/\n/g, "<br>") + "</div>");
            if (isApprove) {
                var text = commentObject.Text;
                if (!text || text.trim() === "") {
                    if(commentObject.Approval === 1){
                        commenttext = $("<div class='comment-text'>"+$.Lang("SheetComment.Approve")+"</div>");
                    } else if(commentObject.Approval === 0){
                        commenttext = $("<div class='comment-text'>"+$.Lang("SheetComment.Reject")+"</div>");
                    }
                }
            }

            if (this.IsMobile || this.DateNewLine) {
                commenby.append("<div style=\"padding-left:5px;\">" + dateStr + "</div>");
            } else {
                var approvalText = approval? approval : '';
                commenby.append("<span style=\"padding-left:5px;\">" + dateStr + "</span>");
                commenby.append($("<span class='approval-action'>"+ approvalText +"</span>"))
            }
            if (this.SignPosition && this.SignPosition == "BeforeComment") {
                commentBody.append(commenby);
                commentBody.append(commenttext);
            } else {
                commentBody.append(commenttext);
                commenby.css("text-align", "right"); // 签名靠右对齐
                commentBody.append(commenby);
            }
            commentItem.append(commentBody);

            // if (isApprove) {
            //     //操作：通过 or 驳回
            //     var approval = "";
            //     if (commentObject.Approval === 1) {
            //         approval = $.Lang("SheetComment.OperateApprove");
            //     } else if (commentObject.Approval === 0) {
            //         approval = $.Lang("SheetComment.OperateReject");
            //     }
            //     var commentApproval = $("<br><div class='comment-approval' style='float:right;margin-right:30px;'>" + approval + "</div><br>")
            //     commenttext.append(commentApproval)
            // }

            //签章
            var commentSignature = $("<div class='comment-signature' style='text-align:" + this.SignAlign + ";'></div>");
            commentBody.append(commentSignature);
            if (this.DisplaySign && commentObject.SignatureId) {
                this._changeSignaturePic(commentSignature, commentObject.SignatureId);
            }

            this.PanelBody.append(commentItem);
        },

        //手机端添加评论
        AddMobileCommentItem: function (commentObject, last) {
            // console.log(commentObject, last, AttachmentObject, '-------------')
            var Icon = "";
            var approvaltext = "";
            if (commentObject.Approval == 1) {  //通过
                Icon = "icon-comment-approval";
                approvaltext = $.Lang("SheetComment.Approved");
            } else if (commentObject.Approval == 0) { //驳回
                Icon = "icon-comment-reject";
                approvaltext = $.Lang("SheetComment.Reject");
            }
            if (this.PanelBody == undefined) {
                var CommentsPanel = $("<div class=\"widget-comments mobile-widget\"></div>");
                if (this.DisplayBorder) {
                    CommentsPanel.addClass("bordered");
                }
                this.PanelBody = $("<div class='list border-only-bottom'></div>");
                CommentsPanel.append(this.PanelBody); //历史审批容器
                $(this.Element).prepend(CommentsPanel);
            }
            //审批意见div
            var commentItem = $("<div class='comment-tab lefttriangle'></div>").attr("id", commentObject.CommentID);
            //时间轴
            var TimeAxis = last ? "" : "comment-time-axis";
            var commentTimeAxis = $("<i class='" + TimeAxis + "'></i><i class='" + Icon + "'></i>");
            //审批节点
            var commentActivity = $('<div class="comment-activity"><span >' + commentObject.Activity + '</span></div>');
            commentItem.append(commentTimeAxis);
            var commentDetails = $("<div class='comment-details'></div>");
            commentDetails.append(commentActivity);
            commentItem.append(commentDetails);

            // 主体摘要
            var commentTitle = $("<div class='comment-title'></div>");
            var text = "";
            if (commentObject.Text) {
                text = commentObject.Text.replace(/\n/g, "<br>");
            }
            //审批时间
            var dateStr = "";

            dateStr = commentObject.DateStr;

            var userName = commentObject.UserName;
            var Circlename = userName.substr(-3);
            if (this.OUNameVisible && commentObject.OUName !== undefined) {
                userName = userName + " " + "<span class='comment-userOU'>" + commentObject.OUName + "</span>";
            }
            var commentCirclename = $("<i class='circle-name user-a'><span style='color:#fff;'>" + Circlename + "</span></i>");
            var commentUsername = $("<span class='comment-user'>" + userName + "</span>");
            var commentDate = $("<span class='comment-date'>" + dateStr + "</span>");
            var commentApprovaltext = $("<div class='comment-approvaltext'>" + approvaltext + "</div>");
            commentTitle.append(commentCirclename).append(commentUsername).append(commentDate).append(commentApprovaltext);
            commentDetails.append(commentTitle);
            //审批内容
            var commentBody = $("<div class='comment-body'></div>");
            text = text.replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/\"/g,"&quot;");
            var commentText = $("<div class='comment-text'>" + text + "</div>");
            commentBody.append(commentText);
            commentDetails.append(commentBody);
            this.PanelBody.append(commentItem);
        },

        //评论输入
        InitCommentInput: function () {

            var InputPanel = $("<div class='comment-box'></div>");
            var tag = $("<span class='comment-box-tag'><span class='comment-box-tag-inner'></span></span>");
            // var lengthText = $("<p class='text-length'><span>0</span>/2000</p>");
            this.CommentInput = $("<textarea onchange=\"this.value=this.value.substring(0,2000)\" style='padding-bottom: 15px' maxlength='2000' placeholder='输入内容'></textarea>").width(this.Width);

            if (this.IsMobile) {
                InputPanel.addClass('InputPanel item hidden-Mobile');
                $("span[data-datafield = " + this.DataField + "]").remove();
                var IPtitle = $("<div class='IPtitle'></div>");
                IPtitle.text('输入'+ this.N);
                InputPanel.append(IPtitle);
                this.CommentInput = $("<textarea class='CommentInput' rows='4' placeholder='" + SheetLanguages.Current.InputYourComment + "'></textarea>");
            } else {
                InputPanel.append(tag)
                // InputPanel.append(lengthText)
            }

            // console.log(this, 'this.MyComment')
            // && this.MyComment.Approval === -1
            // console.log(this.DefaultComment, 'this.DefaultComment')
            //已经有保存的评论
            // if (this.MyComment && this.MyComment.toUsers.length === 0) {
            if (this.MyComment && this.MyComment.Approval === -1) {
                //不加载已保存的审批意见 黎明 20180919
                this.CommentInput.val(this.MyComment.Text);
            } else {//默认评论
                this.CommentInput.val(this.DefaultComment);
            }
            InputPanel.append(this.CommentInput);
            $(this.Element).append(InputPanel);

            //值改变事件
            $(this.CommentInput).unbind("change.CommentInput").bind("change.CommentInput", this, function (e) {
                e.data.Validate.apply(e.data);
                var inputLength = e.target.value.length
                $(".text-length span").html(inputLength)
            });
            $(this.CommentInput).keyup(function (e) {
                var inputLength = e.target.value.length
                $(".text-length span").html(inputLength)
            });
            $(this.CommentInput).keydown(function (e) {
                var inputLength = e.target.value.length
                $(".text-length span").html(inputLength)
            });
        },

        //常用意见
        InitFrequentlyUsedCommentsAndSignature: function () {
            var that = this;
            var ionic = $.MvcSheetUI.IonicFramework;
            var LatestCommentPanel = $("<div class='select-comment'></div>").width(this.Width).css({"text-align": "right","margin": "10px 0 15px 0", "min-height": '30px'}),
                    LatestCommentSel,
                    SettingPanel,
                    SignaturePanel,
                    SignatureSel,
                    SignaturePicPanel = $("<div></div>").width(this.Width).css({"text-align": "right", "margin-top": "3px"});
            if (that.IsMobile) {
                LatestCommentPanel = $("<div></div>");
                LatestCommentPanel.addClass("item item-input LatestCommentPanel hidden-Mobile");
                SignaturePanel = $("<div></div>");
                SignaturePanel.addClass("item item-input SignaturePanel");
                $(this.Element).append(SignaturePanel);
                if (!this.Element.dataset['displaysign']) {
                    SignaturePanel.hide();
                }
            }

            $(this.Element).append(LatestCommentPanel);
            $(this.Element).append(SignaturePicPanel);

            // 常用意见下拉框
            if (this.FrequentCommentVisible) {
                if (!this.IsMobile) {
                    //pc端
                    LatestCommentSel = $("<select class='select-comment-inner'></select>");
                    LatestCommentSel.css({width: "100%",float: "left"});
                    LatestCommentSel.append("<option value=''>--" + SheetLanguages.Current.SelectComment + "--</option>");
                    // LatestCommentSel.append("<option value=''>--" + 121212 + "--</option>");
                    if (this.V && this.V.FrequentlyUsedComments) {
                        for (var i = 0; i < this.V.FrequentlyUsedComments.length; i++) {
                            var text = this.V.FrequentlyUsedComments[i];
                            if (text != null && text.length > 18) {
                                text = text.substring(0, 18) + "...";
                            }
                            //update by xl@Future
                            text = $('<div/>').text(text).html();

                            var option = $("<option value='" + this.V.FrequentlyUsedComments[i] + "'>" + text + "</option>");
                            LatestCommentSel.append(option);
                        }
                    }
                    $(LatestCommentSel).unbind("change.LatestCommentSel").bind("change.LatestCommentSel", this, function (e) {
                        if ($(this).val().length > 0) {
                            e.data.CommentInput.val($(this).val());
                            e.data.Validate();
                        }
                    });
                    LatestCommentPanel.append(LatestCommentSel);
                }
                else {
                    //移动端
                    $("<span class='input-label'>" + SheetLanguages.Current.FreComments + "</span>").appendTo(LatestCommentPanel);
                    var mobileFreCommentValue = $("<div class='detail item-icon-right'><span class='input-label'>" + SheetLanguages.Current.PleaseSelectComment + "</span><i class='icon ion-ios-arrow-right'></i></div>").appendTo(LatestCommentPanel);
                    ionic.$scope.frequentCommentIndex = -1;
                    LatestCommentPanel.unbind('click.chooseComments').bind('click.chooseComments', function (e) {
                        ionic.$ionicModal.fromTemplateUrl('Mobile/form/templates/radio_popover2.html?v=201803121505', {
                            scope: ionic.$scope
                        }).then(function (popover) {
                            console.log(that.V,' that.V')
                            popover.scope.header = SheetLanguages.Current.FreComments;
                            popover.scope.data = {};
                            var findex = ionic.$scope.frequentCommentIndex;
                            popover.scope.data.RadioListValue = findex;
                            popover.scope.RadioListDisplay = that.V.FrequentlyUsedComments;
                            popover.show();
                            popover.scope.hide = function () {
                                popover.hide();
                            }
                            //常用意见重置事件绑定 add by ousihang
                            popover.scope.reset = function () {
                                popoverScope = this.$parent;
                                var RadioListDisplay = popoverScope.RadioListDisplay;
                                if (RadioListDisplay.length > 0) {
                                    popoverScope.data.RadioListValue = -1;
                                    that.CommentInput.val("");
                                    mobileFreCommentValue.find("span").text(SheetLanguages.Current.PleaseSelect);
                                } else {
                                    var value = RadioListDisplay[0].id;
                                    var img = RadioListDisplay[0].SignatureImg;
                                    popoverScope.radioValue = value;
                                    SignatureSel.val(value);
                                    SignatureSel.parents(".SignaturePanel").find('.detail.item-icon-right').html("<img src=" + img + " />");
                                }
                            }
                            popover.scope.clickRadio = function (value, index) {
                                that.CommentInput.val(value);
                                //update by ousihang 选中常用意见提示已经选中
                                popover.scope.data.textValue = value;
                                var selectedStatus = popover.scope.data.textValue || SheetLanguages.Current.hasBeenSelected;
                                mobileFreCommentValue.find("span").text(selectedStatus);
                                that.Validate();
                                ionic.$scope.frequentCommentIndex = index;
                            };
                            popover.scope.searchFocus = false;
                            popover.scope.searchAnimate = function () {
                                //update by ousihang 如果搜索框中没有你内容才变换样式
                                if (popover.$el.find("ion-header-bar").eq(1).find("input").val() == "") {
                                    popover.scope.searchFocus = !popover.scope.searchFocus;
                                }
                            };
                            popover.scope.searChange = function () {
                                popover.scope.searchNum = $(".active .popover .list").children('label').length;
                            };
                        });
                        return;
                    });
                }
            }

            // 设为常用checkbox 移动端不显示
            if (this.FrequentSettingVisible && !this.IsMobile) {
                var checkboxid = $.MvcSheetUI.NewGuid();
                SettingPanel = $("<div class='pretty p-default'></div>").css({"margin-top": "7px","margin-left": "10px"});
                this.SaveFrequentCk = $("<input type='checkbox' id='"+ checkboxid +"' lay-skin='primary' />");
                var Spantxt = $("<div class='state p-primary'><label type='checkbox' for='" + checkboxid + "'>" + SheetLanguages.Current.FrequentlyUsedComment + "</label></div>")
                Spantxt.css("cursor", "pointer");


                SettingPanel.append(this.SaveFrequentCk);
                SettingPanel.append(Spantxt);

                LatestCommentPanel.append(SettingPanel);

                if (LatestCommentSel) {
                    LatestCommentSel.width("80%");
                }
            }

            // 签章下拉框
            if (this.DisplaySign) {
                var mySignatures = $.MvcSheetUI.SheetInfo.MySignatures;
                var defaultSignatures;
                if (mySignatures) {
                    for (var i = 0; i < mySignatures.length; i++) {
                        if (mySignatures[i].IsDefault) {
                            defaultSignatures = mySignatures[i];
                            break;
                        }
                    }
                }
                if (!this.IsMobile) {
                    //pc
                    SignatureSel = $("<select></select>").css({"margin-left": "20px"});
                    SignatureSel.append("<option value=''>--" + SheetLanguages.Current.SelectSign + "--</option>");
                    if (mySignatures) {
                        for (var i = 0, len = mySignatures.length; i < len; i++) {
                            var signature = mySignatures[i];
                            //update by xl@Future
                            signature.Name = $('<div/>').text(signature.Name).html();

                            var option = $("<option title='" + signature.Name + "' value='" + signature._ObjectID + "'>"
                                    + (signature.Name.length > 18 ? signature.Name.substring(0, 18) + "..." : signature.Name)
                                    + "</option>");
                            SignatureSel.append(option);
                            if (signature.IsDefault)
                                SignatureSel.val(signature._ObjectID);
                        }
                        if (mySignatures.length == 1)
                            SignatureSel.val(mySignatures[0]._ObjectID);
                        that._changeSignaturePic(SignaturePicPanel, SignatureSel.val());
                    }

                    $(SignatureSel).unbind("change.signatureSel").bind("change.signatureSel", function () {
                        that._changeSignaturePic(SignaturePicPanel, $(this).val());
                    });

                    LatestCommentPanel.append(SignatureSel);


                    if (this.MyComment) {
                        SignatureSel.val(this.MyComment.SignatureId);
                        SignatureSel.trigger("change");
                    }

                    SignatureSel.width("20%");
                    if (LatestCommentSel) {
                        LatestCommentSel.width("55%");
                    }

                } else {
                    //移动端
                    $('<span class="input-label">' + SheetLanguages.Current.Signature + '</span>').appendTo(SignaturePanel);
                    //update by ousihang 添加"请输入"提示
                    $("<div class='detail item-icon-right'><span>" + SheetLanguages.Current.PleaseSelect + "</span><i class='icon ion-ios-arrow-right'></i></div>").appendTo(SignaturePanel);

                    //val存储id
                    var SignatureSel = $('<input type="text" style="display:none;"></input>');
                    SignatureSel.appendTo(SignaturePanel);



                    //渲染默认的签章
                    if (defaultSignatures && defaultSignatures.SignatureID) {
                        SignatureSel.val(defaultSignatures.SignatureID);
                        var detail = SignaturePanel.find('.detail');
                        //update by ousihang
                        detail.html("<img src=" + $.MvcSheetUI.PortalRoot + "/TempImages/" + defaultSignatures.SignatureID + ".jpg" + " />");
                    }

                    //如果有保存的评论
                    if (this.MyComment) {
                        SignatureSel.parents(".SignaturePanel").find('.detail .input-label').html("<img src=" + $.MvcSheetUI.PortalRoot + "/TempImages/" + this.MyComment.SignatureId + ".jpg" + " />");
                    }

                }
            }


            //保存表单时以SignatureSel.val()
            if (SignatureSel) {
                this.SignatureSel = SignatureSel;
            }
        }
    });
})(jQuery);


// JS 多语言包
var SheetLanguages = {
    Current: {},
    zh_cn: {
        Approve:'同意',
        Back: "返回",
        Spread: "展开",
        Retract: "收起",
        WorkflowCharts: '流程图',
        ChangeMode: '切换模式',
        ChildSchema: '子表',
        ChildSchemaInfo1: '子表信息',
        ChildSchemaInfo2: '(共',
        ChildSchemaInfo3: '条记录)',
        AddChildSchema: '添加子表明细',
        Copy: '复制',
        Delete: '删除',
        SelectAll: '全选',
        UnselectAll: '全不选',
        TakePhotos: '拍照',
        FileSelect: '文件选择',
        AtatchmentAcction: '附件操作',
        More: "更多",
        Comfirm: '确定',
        State: '流程状态',
        Confirm: '确定',
        InputYourComment: '请输入您的审批意见',
        InputYourForwardComment: '请输入转办意见',
        InputYourAssistComment: '请输入协办意见',
        InputYourConsultComment: '请输入征询意见',
        hasSelectDefault: '已选择默认',
        PleaseInput: '请输入',
        PleaseSelect:'请选择',
        hasBeenSelected: '已选择',
        FreComments: '常用意见',
        PleaseSelectComment:'请选择',
        //常用审批意见
        Signature: '签章',
        Comments: '审批意见',
        ForwardComment: '转办意见',
        AssistComment: '协办意见',
        ConsultComment: '征询意见',
        Forward: '转办',
        Assist: '协办',
        Consult: '征询',
        Circulate: '传阅',
        Approver: '审批',
        Waiting:'等待',
        Uploading: "未上传完!",
        Add: "添加",
        Upload: "上传",
        All: "全部",
        OK: "确定",
        Clear: "清除",
        Remove: "删除",
        Export: "导出",
        Close: "关闭",
        Import: "导入",
        Cancel: "取消",
        DragUpload: "点击上传或拖拽文件到此上传",
        Loading: "请稍候...",
        Doing: "正在处理",
        ConfirmRemove: "确认删除？",
        FileExtError: "文件格式不对",
        OverMaxLength: "超出限制文件上传的大小",
        Download: "下载",
        Preview: "预览",
        UploadError: "上传失败",
        DataItemNotExists: "数据项不存在",
        MyComment: "我的意见",
        Today: "今天",
        Notice: "提示",
        Delegant: "委托",
        SelectComment: "请选择常用意见",
        FrequentlyUsedComment: "设为常用",
        SelectSign: "请选择签章",
        Records: "条记录",
        BookmarkNotExists: "Word 模板中不存在名称为 {{0}} 的书签!",
        PdfNotSave: "不能执行保存,没有编辑文档或者没有安装PDF虚拟打印机!",
        IE: "请使用IE浏览器，并安装第三方插件！",
        CreatePDF: "生成PDF",
        ViewPDF: "查看PDF",
        AddESP: "加盖印章",
        AddTemplate: "套用模板",
        EnterInteger: "请输入一个有效的整数",
        VerifyIntRange: "输入的整数超出范围",
        VerifyLongRange: "输入的长整数超出范围",
        EnterNumber: "请输入一个有效的数值",
        Day: "天",
        Hour: "小时",
        Minute: "分钟",
        Second: "秒",
        SelectUser: "请选择参与者",
        ConfirmCancelInstance: "确定执行取消流程操作?",
        Disagree: "不同意",
        Agree: "同意",
        Search: "搜索",
        ConfirmFinishInstance: "确定执行结束流程操作?",
        SelectForwardUser: "请选择转办人",
        SelectAssistUser: "请选择协办接收人",
        AssistRemind: "用户提交意见或取消协助任务时接收邮件提醒",
        ConsultRemind: "用户提交意见时接收邮件提醒.",
        SelectConsultUser: "请选择要征询意见的人",
        SelectCirculateUser: "请选择要传阅的人员",
        AllowCirculate: "允许再传阅给其他人",
        SelectSignUser: "请选择要加签的人",
        ConfrimClose: "确定要关闭页面?",
        ConfirmReterive: "确定执行取回流程操作",
        SelectFromOrg: "从组织架构选择",
        SearchNone: "没搜索到组织",
        Saving: "正在保存...",
        Sumiting: "正在提交...",
        Reject: "驳回",
        Rejecting: "正在驳回...",
        Finishing: "正在结束流程...",
        Retrieving: "正在取回流程...",
        ConfirmDo: "确定执行",
        Operation: "操作",
        SubmitPrompt:"即同意，流程将继续流转",
        ForwardPrompt:"允许当前用户将任务转&#10;办给其他人，转办后自&#10;己的任务消失，由转办&#10;人进行继续处理；",
        RetrievePrompt:"提交任务后，并且下一活动&#10;环节未处理时，取回后任务&#10;重新回到当前用户的待办中；",
        RejectPrompt:"即拒绝，将流程驳回到某&#10;一节点，被驳回人需在待&#10;办中重新处理",
        CirculatePrompt:"将当前活动环节传阅给其他用户",
        AssistPrompt:"A协办给B，流程从A消失&#10;并流转到B，B拥有和A一&#10;样的表单权限，B提交后会&#10;直接回到A继续审批",
        //表单基本信息中英文特殊处理
        BasicInfo:{
            divFullName: '发起人',
            divOriginateDate: '发起时间',
            divOriginateOUName: '所属组织',
            divSequenceNo:'流水号'
        },
        States:{
        	Reject:"驳回",
        	Disagree:"不同意",
        	Agree:"同意",
        	Canceled:"已取消",
        	Running:"进行中",
        	Assist:"发起协办",
        	Forward:"发起转办",
        	Consult:"发起征询",
        	SystomAssist:"的协办",
        	SystomConsult:"的征询",
        	SystomForward:"的转办",
        	Circulate:"传阅",
        	Finishedread:"已阅：",
        	Toread:"待阅：",
        },

        SheetUser: {
            isShow: true,
            organnization: '组织机构',
            departmentStaff: '本部门',
            search: '搜索',
            checkAll: '全选',
            user: '人员',
            result: '',
            Back: '返回',
            confirm: '确定',
            close: '关闭'
        },
        ISOVideoUploadWarn: "IOS系统不支持上传视频附件",
        Query: "查询",
        AssociatedSheet: "关联查询",
        SheetValidateError: "表单验证不通过！",
        //update by ouyangsk
        Reset: '重置',
        NoMoreData: '没有更多的数据',
        ForwardCommentTip:'转办意见（非必填）',
        AssistCommentTip:'协办意见（非必填）',
        ConsultCommentTip:'征询意见（非必填）',
        OperateSuccess: '操作成功',
        CanNotConsuleSelf: '征询失败，不能征询自己！',
        CanNotCirculateSelf: '传阅失败，不能传阅给自己！',
        CanNotAssistSelf: '协办失败，不能协办自己！',
        CanNotConsultCreator: '征询失败，不能征询请求您征询的人！',
        CanNotConsultParticipent: '征询失败，不能征询当前活动参与者！',
        CanNotConsultOriginator: '征询失败，不能征询发起人！',
        ConsultSuccess: '征询成功！',
        HasConsulted: ' 已被征询，不能再次征询！',
        ConsultSuccessInMultiple: ' 已被征询，不能再次征询！其余征询成功！',
        ConsultFailed: '征询失败！',
        CanNotAssistOriginator: '协办失败，不能协办发起人！',
        CanNotAssistCreator: '协办失败，不能协办请求协办的人！',
        CanNotAssistParticipent: '协办失败，不能协办当前活动参与者！',
        HasAssist: ' 已被协办，不能再次协办！',
        AssistFailed: '协办失败！',
        AssistSuccess: '协办成功！',
        AssistSuccessInMultiple: ' 已被协办，不能再次协办！其余协办成功！',
        CirculateSuccess: '传阅成功！',
        CanNotForwardSelf: '转办失败，不能转办给自己！',
        ForwardSuccess: '转办成功！'
    },
    en_us: {
        Approve: 'Approve',
        Back: 'Back',
        Spread: 'Extend',
        Retract: 'Shrink',
        WorkflowCharts: 'Flow chart',
        ChangeMode: 'Switching mode',
        ChildSchema: 'Child-sheet',
        ChildSchemaInfo1: 'Schema information',
        ChildSchemaInfo2: '(',
        ChildSchemaInfo3: ' in total)',
        AddChildSchema: 'Add a child schema',
        Copy: 'Copy',
        Delete: 'Delete',
        SelectAll: 'Select all',
        UnselectAll: 'Unselect all',
        TakePhotos: 'Camera',
        FileSelect: 'Files',
        AtatchmentAcction: 'Atatchment',
        More: "More",
        State: 'State',
        Confirm: 'Comfirm',
        InputYourComment: 'Please enter your comment',
        InputYourForwardComment: 'Please enter your Forward comment',
        InputYourAssistComment: 'Please enter your Assist comment',
        InputYourConsultComment: 'Please enter your Consult comment',
        hasSelectDefault: "has select default",
        PleaseInput: 'Please input',
        PleaseSelect:'Please select',
        hasBeenSelected: 'has selected',
        FreComments: 'My frequentely used comments',
        PleaseSelectComment: "Please select comment",
        Signature: 'Signature',
        Comments: 'Comments',
        ForwardComment: 'Forward Comment',
        AssistComment: 'Assist Comment',
        ConsultComment: 'Consult Comment',
        Forward: 'Forward',
        Assist: 'Assist',
        Consult: 'Consult',
        Circulate: 'Circulate',
        Approver: 'approve',
        Waiting: 'Waiting',
        Uploading: "upload not complete!",
        Add: "Add",
        All: "All",
        OK: "OK",
        Cancel: "Cancel",
        Search: "Search",
        Close: "Close",
        Clear: "Clear",
        Upload: "Upload",
        Remove: "Remove",
        Export: "Export",
        Import: "Import",
        DragUpload: "Click or drag file to here for upload",
        Loading: "Load...",
        Doing: "Load",
        ConfirmRemove: "Confrim remove this?",
        FileExtError: "File extension error.",
        OverMaxLength: "File size exceeds the limit.",
        Download: "Download",
        Preview: "Preview",
        UploadError: "Upload error",
        DataItemNotExists: "dataitem not exists",
        MyComment: "My comment",
        Today: "Today",
        Notice: "Notice",
        Delegant: "Delegant",
        SelectComment: "Please select comment",
        FrequentlyUsedComment: "Frequently",
        SelectSign: "Please select sign",
        Records: "records",
        BookmarkNotExists: "Bookmark {{0}} is not exists in this word template!",
        PdfNotSave: "Can't save,does not have edit document or pdf creator not install!",
        IE: "Please use the ie browser!",
        CreatePDF: "Create PDF",
        ViewPDF: "View PDF",
        AddESP: "Add Sign",
        AddTemplate: "Add Template",
        EnterInteger: "Please enter a valid integer",
        VerifyIntRange: "The input integers are out of range",
        VerifyLongRange: "The long integers enteredis out of range",
        EnterNumber: "Please enter a valid number",
        Day: "Day",
        Hour: "Hour",
        Minute: "Minute",
        Second: "Second",
        SelectUser: "Please select user",
        ConfirmCancelInstance: "Confirm cancel this instance?",
        Disagree: "Disagree",
        Agree: "Agree",
        ConfirmFinishInstance: "Confirm finish this instance?",
        SelectForwardUser: "Select forward user",
        SelectAssistUser: "Select assist user",
        AssistRemind: "Receive email after assist user submit or cancel.",
        ConsultRemind: "Receive email after consult user submit.",
        SelectConsultUser: "Select consult user",
        SelectCirculateUser: "Select circulate user",
        AllowCirculate: "Allow recirculate to other",
        SelectSignUser: "Add an approve user",
        ConfrimClose: "Confirm close this page?",
        ConfirmReterive: "Confirm retrieve this instance?",
        SelectFromOrg: "Select from organization",
        SearchNone: "No search results",
        Saving: "Saving...",
        Sumiting: "Submiting...",
        Reject: "Reject",
        Rejecting: "Rejecting...",
        Finishing: "Finishing...",
        Retrieving: "Retrieving...",
        ConfirmDo: "Confirm to do ",
        Operation: "",
        SubmitPrompt:"I agree, the process will continue to flow.",
        ForwardPrompt:"Allow the current user to transfer the task to other people.&#10; After the transfer, &#10;the task disappears and the transferee continues to process it;",
        RetrievePrompt:"After the task is submitted, &#10;and the next activity link is not processed, &#10;the task is returned to the current user's pending operation after being retrieved;",
        RejectPrompt:"That is, reject, the process is rejected back to a certain node, &#10;and the rejected person needs to be reprocessed in the pending",
        CirculatePrompt:"Circulate the current activity to other users",
        AssistPrompt:"A co-organizes to B, the process disappears from A and flows to B.&#10; B has the same form permissions as A. After B submits, &#10;it will return directly to A to continue the approval.",
        //表单基本信息中英文特殊处理
        BasicInfo: {
            divFullName: 'Originator',
            divOriginateDate: 'Originate Date',
            divOriginateOUName: 'Originate OUName',
            divSequenceNo: 'SequenceNo'
        },
        SheetUser: {
            isShow:false,
            organnization: 'Organnization',
            departmentStaff: 'DepartmentStaff',
            search: 'Search',
            checkAll: 'Check all',
            user: 'Personnel',
            result: 'No results related to ',
            Back: 'Back',
            confirm: 'Confirm',
            close: 'Close'
        },
        //update by ouyangsk 移动端中显示字符过长，故缩短为此信息
        ISOVideoUploadWarn: "Can't uploading video in IOS system",
        Query: "Query",
        AssociatedSheet: "Associated Sheet",
        SheetValidateError: "Sheet Validate Error!",
        Reset: 'Reset',
        NoMoreData: 'no more data',
        ForwardCommentTip:'forward comment(not required)',
        AssistCommentTip:'assist comment(not required)',
        ConsultCommentTip:'consult comment(not required)',
        OperateSuccess: 'Operate Success!',
        CanNotConsuleSelf: 'Consule Failed, Can Not Consule Yourserf!',
        CanNotCirculateSelf: 'Circulate Failed, Can Not Circulate Yourserf!',
        CanNotAssistSelf: 'Assist Failed, Can Not Assist Yourserf!',
        CanNotConsultCreator: 'Consult Failed, Can Not Consult Creator!',
        CanNotConsultParticipent: 'Consult Failed, Can Not Consult Current Activity Participant!',
        CanNotConsultOriginator: 'Consult Failed, Can Not Consult Originator!',
        ConsultSuccess: 'Consult Success!',
        HasConsulted: ' Has Consulted Can Not Consult Again!',
        ConsultSuccessInMultiple: ' Has Consulted Can Not Consult Again! Others Consulted Success!',
        ConsultFailed: 'Consult Failed!',
        CanNotAssistOriginator: 'Assist Failed, Can Not Assist Originator!',
        CanNotAssistCreator: 'Assist Failed, Can Not Assist Creator!',
        CanNotAssistParticipent: 'Assist Failed, Can Not Assist Current Activity Participant!',
        HasAssist: ' Has Assist Can Not Assist Again!',
        AssistFailed: 'Assist Failed!',
        AssistSuccess: 'Assist Success!',
        AssistSuccessInMultiple: ' Has Assisted Can Not Consult Again! Others Assist Success!',
        CirculateSuccess: 'Circulate Success!',
        CanNotForwardSelf: 'Forward Failed, Can Not Forward Yourserf!',
        ForwardSuccess: 'Forward Success!'
    }
}
// Label控件
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
// SheetDropDownList控件
        ;
(function ($) {
    //控件执行
    $.fn.SheetDropDownList = function () {
        return $.MvcSheetUI.Run.call(this, "SheetDropDownList", arguments);
    };

    // 构造函数
    $.MvcSheetUI.Controls.SheetDropDownList = function (element, options, sheetInfo) {
        this.FilterValue = "";
        this.FilterDataFields = [];
        this.ParentFilterDataFields = [];
        $.MvcSheetUI.Controls.SheetDropDownList.Base.constructor.call(this, element, options, sheetInfo);
    };

    // 继承及控件实现
    $.MvcSheetUI.Controls.SheetDropDownList.Inherit($.MvcSheetUI.IControl, {
        //控件渲染函数
        Render: function () {
            var $element = $(this.Element);
            var dataFieldValue = this.V;
            var that = this;
            //是否可见
            if (!this.Visiable) {
                $element.hide();
                if ($element.find("option").length <= 0) {
                    $element.append("<option value=\"\"></option>");
                }
                return;
            }

            //不可编辑
            if (!this.Editable) {
                //先将select隐藏，改善界面加载体验
                $element.hide();
            } else {
                // 设置为搜索框的效果
                if (this.Queryable && !this.IsMobile) {
                    $element.select2({placeholder: this.EmptyItemText});
                }
            }

            // 查看痕迹
            if (this.TrackVisiable && !this.Originate && this.DataField.indexOf(".") == -1) {
                this.RenderDataTrackLink();
            }

            // 控件中已有的option
            var $existedOptions = $element.children("option");

            if (this.SchemaCode.trim() != "") { //业务对象数据源（主数据）
                var filter = this._createFilter();
                if (this.ParentFilterDataFields.length > 0 && $.MvcSheetUI.Loading) {
                    // return;
                }
                //console.log(this.DataField);
                var cmdParam = JSON.stringify([this.SchemaCode, this.QueryCode, filter,
                    this.DataTextField, this.DataValueField]);
                if (this.FilterValue == cmdParam)
                    return;
                this.SetEmpty();
                // 是否默认显示空项
                this.SetEmptyItem();
                //如果缓存中有对应参数的数据，直接用缓存数据构造option
                if ($.MvcSheetUI.CacheData && $.MvcSheetUI.CacheData[cmdParam]) {
                    var cacheData = $.MvcSheetUI.CacheData[cmdParam];
                    for (var key in cacheData) {
                        //update by xl@Future
                        key = key + "";
                        if (this.IsMobile) {
                            this.AddMobileItem(key, cacheData[key + ""], false);
                        }
                        cacheData[key + ""] = (cacheData[key + ""]).replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/\"/g,"&quot;").replace(/\'/g,"&apos;");
                       

                        $element.append("<option value=\"" + $('<div/>').text(key).html() + "\">" + cacheData[key + ""] + "</option>");
                        
                    }
                    this._selectItem($element, dataFieldValue);
                    if (this.IsMobile && that.Editable)
                        this.ionicInit($.MvcSheetUI.IonicFramework);
                } else {
                    //filter中有值不为空的项
                    var hasValueItem = false;
                    for (var k in filter) {
                        if (filter[k]) {
                            hasValueItem = true;
                            break;
                        }
                    }
                    //异步获取option数据
                    //条件:1.未设置Filter   2.filter中有值不为空的项 
                    //当设置了Filter，filter中的所有项的值都是空时，不用异步获取option来显示
                    //即：触发联动的元素没有值时，被触发的元素不显示option
                    if (!this.Filter || hasValueItem) {
                        $.MvcSheet.GetSheet(
                                {
                                    "Command": "GetBizServiceData",
                                    "Param": cmdParam
                                },
                                function (data) {
                                    //将数据缓存
                                    if (!$.MvcSheetUI.CacheData) {
                                        $.MvcSheetUI.CacheData = {};
                                    }
                                    if (data.Successful != null && !data.Successful) {
                                        // 执行报错则输出日志
                                        console.log(data.Message);
                                    } else {
                                        $.MvcSheetUI.CacheData[cmdParam] = data;

                                        for (var key in data) {
                                            //update by xl@Future
                                            key = key + "";
                                            
                                            

                                            if (!$element.find("option[value='" + key.replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/\"/g,"&quot;").replace(/\'/g,"&apos;") + "']") || $element.find("option[value='" + key.replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/\"/g,"&quot;").replace(/\'/g,"&apos;") + "']").length == 0) {
                                            	if (that.IsMobile) {
                                                    that.AddMobileItem(key, data[key], false);
                                                }
                                            	data[key] = (data[key]).replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/\"/g,"&quot;");
                                            	$element.append("<option value=\"" + key.replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/\"/g,"&quot;") + "\">" + data[key] + "</option>");
                                                
                                            }
                                        }
                                        that._selectItem($element, dataFieldValue);
                                        if (that.IsMobile && that.Editable)
                                            that.ionicInit($.MvcSheetUI.IonicFramework);
                                    }
                                }, null, this.DataField.indexOf(".") == -1);
                    }
                }
                this.FilterValue = cmdParam;
            } else if (this.MasterDataCategory.trim() != "") { //数据字典数据源
                this.SetEmpty();
                // 是否默认显示空项
                this.SetEmptyItem();
                var cmdParam = JSON.stringify([this.MasterDataCategory]);
                if ($.MvcSheetUI.CacheData && $.MvcSheetUI.CacheData[cmdParam]) {
                    var cacheData = $.MvcSheetUI.CacheData[cmdParam];
                    for (var key in cacheData) {
                    	if (this.IsMobile) {
                            this.AddMobileItem(cacheData[key].Code, cacheData[key].EnumValue, false);
                        }
                        //update by xl@Future
                        cacheData[key].Code = $('<div/>').text(cacheData[key].Code).html();
                    
                        cacheData[key].EnumValue = $('<div/>').text(cacheData[key].EnumValue).html();                    

                        $element.append("<option value=\"" + cacheData[key].Code + "\"" +
                                (cacheData[key].IsDefault ? " selected=\"selected\"" : "") + ">" + cacheData[key].EnumValue + "</option>");
                        
                    }
                    this._selectItem($element, dataFieldValue);
                    if (this.IsMobile && this.Editable)
                        this.ionicInit($.MvcSheetUI.IonicFramework);
                } else {
                    $.MvcSheet.PostSheet({
                        "Command": "GetMetadataByCategory",
                        "Param": cmdParam
                    },
                            function (data) {
                                if (data) {
                                    //将数据缓存
                                    if (!$.MvcSheetUI.CacheData) {
                                        $.MvcSheetUI.CacheData = {};
                                    }
                                    $.MvcSheetUI.CacheData[cmdParam] = data;

                                    for (var i = 0, len = data.length; i < len; i++) {
                                    	if (that.IsMobile) {
                                            that.AddMobileItem(data[i].Code, data[i].EnumValue, false);
                                        }
                                        //update by xl@Future
                                        data[i].Code = (data[i].Code).replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/\"/g,"&quot;");
                                        
                                        data[i].EnumValue = (data[i].EnumValue).replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/\"/g,"&quot;");                             

                                        $element.append("<option value=\"" + data[i].Code + "\"" +
                                                ((data[i].IsDefault && !that.DisplayEmptyItem) ? " selected=\"selected\"" : "") + ">" + data[i].EnumValue + "</option>");
                                        
                                    }
                                }
                                that._selectItem($element, dataFieldValue);
                                if (that.IsMobile && that.Editable)
                                    that.ionicInit($.MvcSheetUI.IonicFramework);
                            }, null, this.DataField.indexOf(".") == -1);
                }
            } else if (this.DefaultItems.trim() != "") { // DefaultItems
                // 是否默认显示空项
                this.SetEmptyItem();
                var values = this.DefaultItems.split(";");

                for (var i = 0; i < values.length; i++) {
                	if (this.IsMobile) {
                        this.AddMobileItem(values[i], values[i], false);
                    }
                    //update by xl@Future
                    values[i] = $('<div/>').text(values[i]).html();
                    $element.append("<option value=\"" + values[i] + "\">" + values[i] + "</option>");             
                }
                this._selectItem($element, dataFieldValue);

                if (this.IsMobile && this.Editable)
                    this.ionicInit($.MvcSheetUI.IonicFramework);
            } else {
                // 是否默认显示空项
                this.SetEmptyItem();

                if ($existedOptions && $existedOptions.length > 0) {
                    $element.append($existedOptions);
                    $element.val($element.children(":eq(0)").val());

                    this._selectItem($element, dataFieldValue);
                }
            }

            //绑定change事件
            $element.unbind("change.SheetDropDownList").bind("change.SheetDropDownList", function () {
                if (that.TextDataField) {
                    $.MvcSheetUI.SetControlValue(that.TextDataField, that.GetText(), that.RowNum);
                }
                that.Validate();
                if (that.OnChange) {
                    that.RunScript(this, that.OnChange);
                }
            });
        },
        AddMobileItem: function (value, text, isDefault) {
            var MobileOption = {
                DataField: this.DataField,
                Value: value,
                Text: text
            };
            this.MobileOptions.push(MobileOption);
        },

        ionicInit: function (ionic) {
            var that = this;
            //只往上一级，只能通过控件绑定chick事件，防止DisplayRule属性存在时出现异常
            $(this.Element.parentElement).unbind('click.showChoice').bind('click.showChoice', function (e) {
                ionic.$ionicModal.fromTemplateUrl('Mobile/form/templates/radio_popover.html?v=20180108', {
                    scope: ionic.$scope
                }).then(function (popover) {
                    popover.scope.header = that.N;
                    popover.scope.RadioListDisplay = [];
                    //update by luxm
                    popover.scope.Queryable = that.Queryable;
                    if (that.DisplayEmptyItem && that.EmptyItemText) {
                        var emptyOption = {
                            DataField: that.DataField,
                            Value: "",
                            Text: that.EmptyItemText
                        };
                        popover.scope.RadioListDisplay.push(emptyOption);
                    }
                    popover.scope.RadioListDisplay = popover.scope.RadioListDisplay.concat(that.MobileOptions);
                    popover.scope.RadioListValue = that.GetValue();
                    popover.show();
                    //update by luxm
                    if (that.Queryable == false) {
                        $("#content").css("top", "40px");
                    }

                    popover.scope.hide = function () {
                        popover.hide();
                    }
                    popover.scope.clickRadio = function (value, text) {
                        that.SetValue(value);
                        text = text.replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/\"/g,"&quot;");
                        $(that.Mask).html(text);
                    }
                    popover.scope.searchFocus = false;
                    popover.scope.searchAnimate = function () {
                        popover.scope.searchFocus = !popover.scope.searchFocus;
                    };
                });
                return;
            });

            if (that.IsMobile) {
                var text = that.GetText();
                if (that.Editable) {
                    that.Mask.html(text);
                    $(that.Mask).css({'color': '#2c3038'});
                } else {
                    //移动端不可编辑
                    $(that.Element).html(text);
                }
            }
        },

        SetEmptyItem: function () {
            if (this.DisplayEmptyItem) {
                if (this.EmptyItemText == "") {
                    this.EmptyItemText = " ";
                }
                var emptyText = this.EmptyItemText.replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/\"/g,"&quot;");
                $(this.Element).append("<option value=\"\">" + emptyText + "</option>");
            }
        },
        SetEmpty: function () {// 清空所有选项
            //清空options
            $(this.Element).empty();
            if ($("#s2id_" + $(this.Element).attr("id")).length > 0) {
                $("#s2id_" + $(this.Element).attr("id")).find(".select2-chosen").html("");
            }
            if ($(this.element).find("div[class='afFakeSelect']").length == 1) {
                $element.parent().find("div[class='afFakeSelect']").html("")
            }
        },
        SetValue: function (v) {
            $(this.Element).val(v);
            if (this.Queryable) {
                var txt = $(this.Element).find("option:selected").text();
                $("#s2id_" + this.Element.id).find(".select2-chosen").html(txt);
                if ($(this.Element).parent().find("div[class='afFakeSelect']").length == 1) {
                    $(this.Element).parent().find("div[class='afFakeSelect']").html(txt)
                }
            }
            //手动触发change事件,以触发联动
            $(this.Element).trigger("change");
        },
        GetValue: function () {
            var v = $(this.Element).val() || $(this.Element).find("option:selected").val();
            if (this.IsMobile && !v) {
                v = this.DataItem.V;
            }
            return v;
        },
        //绑定的数据源为业务对象（主数据），将设置的Filter转换成键值对象，并为联动触发控件绑定联动change事件
        _createFilter: function () {
            var that = this;
            var filter = {};
            //Filter 查询字段1:数据项1;查询字段2:控件ID;查询字段3:固定值
            if (this.Filter) {
                var filterItems = this.Filter.split(",");
                var filterElements = {};
                if (filterItems) {
                    for (var i = 0; i < filterItems.length; i++) {
                        if (filterItems[i] && filterItems[i].split(":").length == 2) {
                            var dataField = filterItems[i].split(":")[0]; //数据项 or 控件ID or 固定值
                            var searchField = filterItems[i].split(":")[1]; //查询字段编码
                            //var element = $.MvcSheetUI.GetElement(dataField, this.RowNum);
                            var element = $.MvcSheetUI.GetElement(dataField, that.GetRowNumber());

                            if (element) { //数据项
                                element.unbind("change." + this.DataField + that.GetRowNumber()).bind("change." + this.DataField + that.GetRowNumber(), function () {
                                    if (!$.MvcSheetUI.Loading) {
                                        //update by zhengyj 加上移动端的判断执行的语句
                                        if (that.IsMobile) {
                                            that.RenderMobile();
                                        } else {
                                            that.Render();
                                        }

                                    }
                                });
                                filterElements[dataField] = element;
                                var sheetUI = element.SheetUIManager();
                                if (sheetUI && sheetUI instanceof $.MvcSheetUI.Controls.SheetDropDownList) {
                                    for (var m in sheetUI.FilterDataFields) {
                                        this.ParentFilterDataFields.push(sheetUI.FilterDataFields[m]);
                                    }
                                    for (var m in sheetUI.ParentFilterDataFields) {
                                        this.ParentFilterDataFields.push(sheetUI.FilterDataFields[m]);
                                    }
                                }
                                filter[searchField] = $.MvcSheetUI.GetControlValue(dataField, that.GetRowNumber());
                            } else if (document.getElementById(dataField)) { //控件ID
                                $("#" + dataField).unbind("change." + this.DataField + that.GetRowNumber()).bind("change." + this.DataField + that.GetRowNumber(), function () {
                                    if (!$.MvcSheetUI.Loading) {
                                        that.Render();
                                    }
                                });
                                filter[searchField] = $("#" + dataField).val();
                            } else { //固定值
                                filter[searchField] = dataField;
                            }
                            // 记录过滤的字段
                            this.FilterDataFields.push(dataField);
                        }
                    }
                }
                // 移除不是直接元素的绑定事件
                for (var k in filterElements) {
                    if (this.ParentFilterDataFields.indexOf(k) > -1) {
                        filterElements[k].unbind("change." + this.DataField + that.GetRowNumber());
                    }
                }
            }
            return filter;
        },
        //设置选中项
        _selectItem: function ($element, selectedValue) {
            //选中的值 dataFieldValue/SelectedValue
            if (!selectedValue) {
                selectedValue = this.SelectedValue;
            }
            if (selectedValue != "") {
                $element.val(selectedValue);
            }
            if ($element.find("option:selected").length == 0 && $element.find("option").length > 0) {
                $element.find("option")[0].selected = true;
            }
            if ($element.parent().find("div[class='afFakeSelect']").length == 1) {
                var select = $element.find("option:selected").text();
                $element.parent().find("div[class='afFakeSelect']").html(select)
            }

            //手动触发change事件,以触发联动
            $element.trigger("change");

            //不可编辑
            if (!this.Editable) {
                var textLable = $element.parent().find("#myselecttext");
                if (textLable.length > 0) {
                    textLable.text(this.GetText());
                } else {
                	var valueText = this.GetText();
                	valueText = valueText.replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/\"/g,"&quot;");
                    $element.after("<label id='myselecttext' for='" + $element.attr("id") + "' style='width:100%;'>" + valueText + "</label>");
                }
            }


        },
        RenderMobile: function () {
            //this.MobileOptions = [];
            ////可编辑
            //if (this.Editable) {
            //    this.constructor.Base.RenderMobile.apply(this);
            //}
            //else {
            //    this.Render();
            //}
            this.MobileOptions = [];
            this.Render();
            //不可用
            if (!this.Editable) {
                $(this.Element).addClass(this.Css.Readonly);
            } else {
                this.MoveToMobileContainer();
                this.pupIcon = $("<i class='icon ion-ios-arrow-right'></i>").insertAfter(this.Mask);
                $(this.Element).closest("div.item").addClass("item-icon-right");
                $(this.Element).hide();
            }
        },
        GetText: function () {
            return $(this.Element).children("option:selected").text();
        },
        SaveDataField: function () {
            var result = {};
            if (!this.Visiable || !this.Editable)
                return result;

            if (this.DataField) {
                //var dataFieldItem = $.MvcSheetUI.GetSheetDataItem(this.DataField, this.RowNum);
                var dataFieldItem = $.MvcSheetUI.GetSheetDataItem(this.DataField, this.GetRowNumber());
                if (dataFieldItem) {
                    var value = $(this.Element).val();
                    // if (dataFieldItem.V != value)
                    {
                        result[this.DataField] = dataFieldItem;
                        result[this.DataField].V = value;
                    }
                } else {
                    alert(SheetLanguages.Current.DataItemNotExists + ":" + this.DataField);
                }
            }
            return result;
        }
    });
})(jQuery);
// Label控件
(function ($) {
    var resetValue = [];
    //控件执行
    $.fn.SheetGridView = function () {
        $(this).find(".template>*[data-datafield]").children().each(function () {
            var datafiled = $(this).attr("data-datafield");
            $(this).removeAttr("data-datafield").attr("data-field", datafiled);
        });

        $(this).find("td[data-datafield]").each(function () {
            $(this).attr("data-field", $(this).attr("data-datafield"));
            $(this).removeAttr("data-datafield");
        });

        return $.MvcSheetUI.Run.call(this, "SheetGridView", arguments);
    };

    $.MvcSheetUI.Controls.SheetGridView = function (element, options, sheetInfo) {
        this.pageIndex = 0;
        this.loadNum = 10;//每次分页加载数据量
        this.dataContainerDivHeight = 0;
        this.originateValue = null;
        $.MvcSheetUI.Controls.SheetGridView.Base.constructor.call(this, element, options, sheetInfo);
    };

    $.MvcSheetUI.Controls.SheetGridView.Inherit($.MvcSheetUI.IControl, {
        Render: function () {
            this.loadNum = this.VirtualPageNum;
            //不可见返回
            if (!this.Visiable) {
                if (this.VirtualPaging) {
                    $(this.Element).parent().hide();
                } else {
                    $(this.Element).hide();
                }
                return;
            };
            // 渲染前端
            this.HtmlRender();
            // 绑定事件
            this._BindEvents();
            // 初始化数据源
            this.SetValue();
            // 设置按钮可见
            this.SetVisible();
            // 子表展现完成后事件
            if (this.OnRendered) {
                this.RunScript(this, this.OnRendered, arguments);
            }
        },
        _BindEvents: function () {
            //绑定增加事件
            $(this.addbtn).unbind("click").bind("click", [this], function (e) {
                console.log(e.data[0], "add");
                // if (e.data[0]._AddRow() != undefined) {
                //     e.data[0]._AddRow().apply(this, true);
                // }
                if (e.data[0]._AddNewRow() != undefined) {
                    e.data[0]._AddNewRow().apply(this, true);
                }
            });
            //绑定清除事件
            $(this.clearbtn).unbind("click").bind("click", [this], function (e) {
                if (e.data[0]._Clear() != undefined) {
                    e.data[0]._Clear().apply(this, arguments);
                }
            });
            //绑定导出事件
            $(this.exportbtn).unbind("click").bind("click", [this], function (e) {
                //if (e.data[0]._Export() != undefined) {
                e.data[0]._Export.apply(e.data[0], arguments);
                //}
            });
            //绑定导入事件
            $(this.importbtn).find("a").unbind("click").bind("click", [this], function (e) {
                //if (e.data[0]._Import() != undefined) {
                e.data[0]._Import.apply(e.data[0], arguments);
                //}
            });
        },
        // 设置相关按钮是否可见
        SetVisible: function () {
            if (this.VirtualPaging) {
                var dataTableHeight = $(this.Element).height();
                var divDataTable = $(this.Element).parent().parent().height();
                if (dataTableHeight < divDataTable) {
                    $(this.Element).parent().css("height", dataTableHeight + 60 + "px");
                    $(this.Element).parent().parent().css("height", dataTableHeight + 150 + "px");
                }
            }
            if (this.V.R) {
                if (this.V.R.length == 1 && (this.IsEmptyRow($(this.Element).find("tr.rows:first")) || this.Originate))
                    if (this.DefaultRowCount > 0) {                           //添加默认行
                        for (var i = 0; i < this.DefaultRowCount - 1; i++) {
                            this._AddRow();
                        }
                    }
            }
            if (!this.DisplayAdd || this.L == $.MvcSheetUI.LogicType.BizObject || !this.Editable) {    //添加按钮
                $(this.addbtn).css("display", "none");
            }
            if (!this.DisplayExport || this.L == $.MvcSheetUI.LogicType.BizObject) { //导出按钮
                $(this.exportbtn).css("display", "none");
            }
            if (!this.DisplayImport || this.L == $.MvcSheetUI.LogicType.BizObject || !this.Editable) { //导入按钮
                $(this.importbtn).css("display", "none");
            }
            if (!this.DisplayClear || this.L == $.MvcSheetUI.LogicType.BizObject || !this.Editable) {  //清除按钮
                $(this.clearbtn).css("display", "none");
            }
            if (!this.DisplayInsertRow || this.L == $.MvcSheetUI.LogicType.BizObject || !this.Editable || this.VirtualPaging) { //插入行按钮
                $(this.Element).find("a.insert").css("display", "none");
            }
            if (!this.DisplayDelete || this.L == $.MvcSheetUI.LogicType.BizObject || !this.Editable) {    //删除按钮
                $(this.Element).find("a.delete").css("display", "none");
            }
            if (((!this.DisplayInsertRow && !this.DisplayDelete) || !this.Editable) && this.L != $.MvcSheetUI.LogicType.BizObject) {
                if ($(this.template).length > 1) {
                    var tdsnum = $($(this.template)[0]).find("td").length;
                    $(this.Element).find("tr").each(function (e) {
                        if ($(this).find("td").length == tdsnum) {
                            if ($(this).find("td:last").find("a.delete").length > 0)
                                $(this).find("td:last").css("display", "none");
                        }
                    });
                }
                else {
                    $(this.Element).find("tr[data-row]").each(function (e) {
                        $(this).find("td:last").css("display", "none");
                    });
                }
                $(this.Element).find("tr:first").find("td:last").css("display", "none");
                $(this.Element).find("tr.footer").find("td:last").css("display", "none");

                if (this.VirtualPaging)
                    $($(this.Element).parent().parent().find("tr.header")).find("td.rowOption").hide();
            }
            if (!this.DisplaySequenceNo) {                 //序号列
                if ($(this.template).length > 1) {
                    var tdsnum = $($(this.template)[0]).find("td").length;
                    $(this.Element).find("tr").each(function (e) {
                        if ($(this).find("td").length == tdsnum)
                            $(this).find("td:first").css("display", "none");
                    });
                }
                else {
                    $(this.Element).find("tr").each(function (e) {
                        $(this).find("td:first").css("display", "none");
                    });
                }

                if (this.VirtualPaging)
                    $($(this.Element).parent().parent().find("tr.header")).find("td:first").hide()
            }
            if (!this.DisplaySummary || this.L == $.MvcSheetUI.LogicType.BizObject) {       //汇总行
                $(this.Summary).css("display", "none");
            }
            else {
                var tds = $(this.template).find("td");
                var doSummary = false;
                for (var i = 0; i < tds.length; i++) {
                    if (this.GetSummaryTd(tds[i])) {
                        this._Summary($(tds[i]).children());
                        doSummary = true;
                    }
                }
                if (!doSummary) {
                    $(this.Summary).css("display", "none");
                }
            }

            var tds = $(this.Element).find("td");
            if (this.VirtualPaging) {
                tds = $(this.Element).parent().parent().find("td");
            }
            for (var i = 0; i < tds.length; i++) {
                var datafield = $(tds[i]).attr("data-field");
                if (datafield) {
                    var dataitem = $.MvcSheetUI.GetSheetDataItem(datafield, 1);
                    if (dataitem && dataitem.O.indexOf("V") < 0) {
                        $(tds[i]).css("display", "none");

                    }
                }
            }
            if (this.VirtualPaging)
                this._SetVirtualPagingContainerHeight();
        },
        GetSummaryTd: function (td) {           //判断单元格中是否包含数值类型
            var datafield = $(td).attr("data-field");
            if (datafield) {
                var dataitem = $.MvcSheetUI.GetSheetDataItem(datafield, 1);
                if (dataitem && (dataitem.L == $.MvcSheetUI.LogicType.Int
                    || dataitem.L == $.MvcSheetUI.LogicType.Double
                    || dataitem.L == $.MvcSheetUI.LogicType.Long)) {
                    return true;
                }
            }
            return false;
        },
        _Summary: function (input) {            //汇总计算
            var datafield = $(input).closest("td").attr("data-field");
            var countControl;
            var countLabels = $(this.Summary).find("label");
            for (var i = 0; i < countLabels.length; i++) {
                if ($(countLabels[i]).attr("data-datafield") == datafield) {
                    countControl = $(countLabels[i]);
                }
            }

            var count = 0;
            var sum = 0;
            var valueArray = new Array();
            var tds = $(this.Element).find("tr.rows").find("td");
            for (var i = 0; i < tds.length; i++) {
                if ($(tds[i]).attr("data-field") == datafield) {
                    var v = $(tds[i]).children().text() || $(tds[i]).children().val() || "0";
                    var value = v;
                    if (isNaN(v)) {
                        value = parseFloat(v.replace(/,/g, "").replace(/$/g, "").replace(/¥/g, ""));
                    }
                    sum += parseFloat(value);
                    count++;
                    valueArray.push(value)
                }
            }
            var max = Math.max.apply(Math, valueArray)
            var min = Math.min.apply(Math, valueArray)

            if (isNaN(sum)) {
                return;
            }

            var manager = $(countControl).SheetCountLabel();
            if (manager && manager.StatType) {
                switch (manager.StatType) {
                    case "SUM":
                        manager.Render(sum);
                        break;
                    case "AVG":
                        manager.Render((sum / count).toFixed(2));
                        break;
                    case "MAX":
                        manager.Render(max);
                        break;
                    case "MIN":
                        manager.Render(min);
                        break;
                    default:
                        break;
                }
            }
            // this._SummaryOTher(input);
        },
        _SummaryOTher: function (input) { // 计算汇总字段
            var datafield = $(input).attr($.MvcSheetUI.PreDataKey + $.MvcSheetUI.DataFieldKey);
            if (!datafield) return;
            var parent = $(input).parent();
            var i = 0;
            while (!parent.is("tr")) {
                parent = parent.parent();
                i++;
                if (i > 10) break;
            }
            var ctl = parent.find("input[data-computationrule*='{" + datafield + "}'],label[data-computationrule*='{" + datafield + "}'],span[data-computationrule*='{" + datafield + "}']");
            if (ctl.length > 0) {
                for (var i = 0; i < ctl.length; i++) {
                    this._Summary(ctl[i]);
                }
            }
        },
        GetText: function () {
            var num = 0;
            if (this.IsMobile)
                num = $(this.Element).find("ul.list").length - 1;
            else
                num = $(this.Element).find("tr.rows").length
            return num + SheetLanguages.Current.Records;
        },
        GetValue: function () {
            var value = new Array();
            var trvalue = {};

            if (this.IsMobile) {
                // debugger
                var gridview = this.MobileRows;
                if (gridview) {
                    for (var i = 0; i < gridview.length; i++) {
                        var row = gridview[i];
                        row.id = row.RowControl.attr('id');
                        if (row) {
                            var controls = row.Editors;
                            for (var j = 0; j < controls.length; j++) {
                                var control = controls[j];
                                if (control) {
                                    var datafield = control.DataField;
                                    if (datafield) {
                                        if (control.Type == "SheetTimeSpan") {
                                            var tmpStr = control.GetValue();
                                            trvalue[datafield.split(".")[1]] = tmpStr;
                                        } else if(control.Type == "SheetHandwrittenSignature"){
                                            // debugger
                                            console.log(datafield,'datafield')
                                            var tmpStr = control.GetValue();
                                            trvalue[datafield.split(".")[1]] = tmpStr
                                        }
                                        else {
                                            trvalue[datafield.split(".")[1]] = control.GetValue();
                                        }
                                    }
                                }
                            }
                            if (row.id) {
                                trvalue["ObjectID"] = row.id;
                            }
                            value.push(trvalue);
                            trvalue = {};
                        }
                    }
                }
            }
            else {
                // debugger
                var trs = $(this.Element).find("tr.rows");
                var tableid = $(this.Element).attr("id");
                var parentDatafield = $(this.Element).attr("data-datafield");
                if (this.template.length > 1) {
                    for (var i = 0; i < trs.length; i = i + this.template.length) {
                        var row = trs[i];
                        var datarow = $(row).attr("data-row");
                        var rows = $("#" + tableid + " tr[data-row='" + datarow + "']");
                        for (var k = 0; k < rows.length; k++) {
                            if (arguments && arguments[0])
                                trvalue = this.GetRowValue(rows[k], trvalue, arguments[0]);
                            else
                                trvalue = this.GetRowValue(rows[k], trvalue);
                        }
                        // 调用外部委托事件
                        if (this.OnEditorSaving != null) {
                            // trvalue = this.EditorSaving.apply(this, [rows, trvalue]);
                            this.RunScript(this, this.OnEditorSaving, [rows, trvalue]);
                        }
                        value.push(trvalue);
                        trvalue = {};
                    }
                }
                else {
                    for (var i = 0; i < trs.length; i++) {
                        var row = trs[i];
                        if (arguments && arguments[0])
                            trvalue = this.GetRowValue(row, trvalue, arguments[0]);
                        else
                            trvalue = this.GetRowValue(row, trvalue);
                        // 调用外部委托事件
                        if (this.OnEditorSaving != null) {
                            // trvalue = this.EditorSaving.apply(this, [$(row), trvalue]);
                            this.RunScript(this, this.OnEditorSaving, [$(row), trvalue]);
                        }
                        value.push(trvalue);
                        trvalue = {};
                    }
                }
            }
            return value;
        },
        //// 子表行保存委托事件
        //EditorSaving: function (row, trValue) {
        //    return trValue;
        //},
        GetRowValue: function (row, trvalue, isexport) {
            // debugger
            if (!this.IsEmptyRow(row) || (this.V && this.V.R && this.V.R.length > 0) || this.L == $.MvcSheetUI.LogicType.BizObject) {
                var tds = $(row).find("td");
                for (var j = 0; j < tds.length; j++) {
                    var td = tds[j];
                    var datafiledElement = $(td).find("[data-datafield]");
                    var datafield = datafiledElement.attr("data-datafield");
                    if (datafield != undefined) {
                        if (isexport) {
                            var dataitem = $.MvcSheetUI.GetSheetDataItem(datafield, 1);
                            if (dataitem && dataitem.L == $.MvcSheetUI.LogicType.Attachment) {
                                var fjtrs = datafiledElement.find("table").find("tr");
                                var fjvalue = "";
                                for (var k = 0; k < fjtrs.length; k++) {
                                    fjvalue += $(fjtrs[k]).find("td:first").find("div").html() + ";";
                                }
                                trvalue[datafield.split(".")[1]] = fjvalue;
                            } else {
                                //trvalue[datafield.split(".")[1]] = datafiledElement.SheetUIManager($(row).attr("data-row")).GetValue();
                                //trvalue[datafield.split(".")[1]] = datafiledElement.SheetUIManager().GetValue()==""?datafiledElement.SheetUIManager().V:datafiledElement.SheetUIManager().GetValue();//修改子表导出无值的问题
                                trvalue[datafield.split(".")[1]] = datafiledElement.SheetUIManager() != undefined ? (datafiledElement.SheetUIManager().GetValue() == "" ? datafiledElement.SheetUIManager().V : datafiledElement.SheetUIManager().GetValue()) : dataitem.V;//修改子表导出无值的问题
                            }
                        }
                        else {
                            var datafiledType = datafiledElement.SheetUIManager($(row).attr("data-row"))
                            if (datafiledType)
                                if(datafiledType.Type == "SheetHandwrittenSignature") {
                                    var value = datafiledElement.SheetUIManager($(row).attr("data-row")).GetValue()
                                    console.log(value,'value')
                                    trvalue[datafield.split(".")[1]] = {
                                        HandSignId: value
                                    }
                                } else {
                                    trvalue[datafield.split(".")[1]] = datafiledElement.SheetUIManager($(row).attr("data-row")).GetValue();
                                }

                        }
                    }
                }
                if ($(row).attr("id") != undefined) {
                    trvalue["ObjectID"] = $(row).attr("id");
                }
            }
            return trvalue;
        },
        IsEmptyRow: function (tr) {
            var value = "";
            var num = $(tr).attr("data-row");
            $(tr).find("td").each(function () {
                if ($(this).children().SheetUIManager(num)) {
                    if ($(this).children().attr("class") == "SheetAttachment") {
                        var attachment = $(this).children().SheetUIManager(num).GetValue();
                        if (attachment.AttachmentIds != "" || attachment.DelAttachmentIds != "") {
                            value += "1";
                        }
                    }
                    else
                        value += $(this).children().SheetUIManager(num).GetValue();
                }
            })
            if (value == "" || value.replace("0", "") == "") {
                return true;
            }
            return false;
        },

        //分页加载数据
        //endIndex==-1:非分页加载；
        //dataGridview: 加载数据
        SetValue: function (dataSource) {
            // 初始化默认值 是否分页加载数据

            //移动端暂未支持VirtualPaging属性
            if (this.VirtualPaging && !this.IsMobile) {
                this._SetValueByPage(0, this.loadNum, null);//分页加载

                $(this.Element.parentElement).unbind("scroll.horizontal").bind("scroll.horizontal", [this], function (e) {
                    var left = $(this).scrollLeft();
                    $(this.parentElement).find(".SheetGridViewTitle").scrollLeft(left);
                });

                $(this.Element.parentElement).unbind("scroll.PageShow").bind("scroll.PageShow", [this], function (e) {
                    //判断是否加载
                    var IsLoad = false;
                    var divHeight = $(this).height();//显示子表table 的div高度
                    var tableHeight = $(this).find("table[data-type='SheetGridView']").height();//子表table高度
                    var ShowHeight = $(this).scrollTop();

                    var pageNum = Math.ceil(tableHeight / divHeight);//页数
                    var precent = ShowHeight / Number(tableHeight);
                    var relative = (pageNum - 2) / pageNum;
                    if (precent > relative) {
                        IsLoad = true;
                        var pageIndex = e.data[0].pageIndex;
                        var loadNum = e.data[0].loadNum;
                        var startIndex = pageIndex * loadNum;
                        var endIndex = (pageIndex + 1) * loadNum;
                        // e.data[0].SetValueByPage(startIndex, endIndex, e);// HuangJie，对应到后面也有注释，这里不能传递e过去，只能传指定的数据源
                        e.data[0]._SetValueByPage(startIndex, endIndex, dataSource);
                    }
                });
            }
            else {
                this._SetValueByPage(0, -1, dataSource);
            }
        },

        _SetValueByPage: function (startIndex, endIndex, dataSource) {
            // 初始化,若不传参数,则使用this.V,否则用设置的数据源,格式为MvcBizObjectList
            if (this.V.T) this.DefaultRow = this.V.T;
            var value = dataSource;
            if (this.L == $.MvcSheetUI.LogicType.BizObjectArray) {
                value = value || this.V.R;   // 如果指定的数据源为空，那么使用系统默认的数据源
            } else if (this.L == $.MvcSheetUI.LogicType.BizObject) {
                value = value || this.V;
            }
            if (!value) return;  // 数据源为空，不做处理

            // 加载方式：一次、分页
            if (endIndex == -1) {
                endIndex = value.length;
            }

            if (this.Originate && this.DefaultRowCount < 1) {
                return;
            }

            if (this.L == $.MvcSheetUI.LogicType.BizObjectArray) {
                if (startIndex < value.length) {
                    for (var i = startIndex; i < endIndex; i++) {
                        var row = value[i];
                        if (row != undefined) {
                            var objectid = $(this.Element).attr("data-datafield") + ".ObjectID";
                            if (this.IsMobile) {
                                this._AddMobileRow(row.DataItems[objectid].V);   //移动端
                            }
                            else {
                                this._AddRow(row.DataItems[objectid].V);
                            }
                        }
                    }
                    this.pageIndex += 1;
                }
                if (endIndex >= value.length) {
                    if (this.IsMobile) {
                        return true;
                    } else {
                        this.Element.parentElement.removeAttribute("scroll");
                        $(this.Element.parentElement).unbind("scroll.PageShow");
                    }

                }
            }
            else if (this.L == $.MvcSheetUI.LogicType.BizObject) {
                if (this.IsMobile) {
                    this._AddMobileRow();
                }
                else {
                    //this._AddRow();
                    this.newRow = $(this.Element).find("tr.template").removeClass("template").addClass("rows").attr("data-row", "1");
                    var objectid = this.V.DataItems[$(this.Element).attr("data-datafield") + ".ObjectID"].V;
                    $(this.newRow).attr("id", objectid);
                    $(this.newRow).find("td").each(function () {
                        var control = $(this).find("[data-field]");
                        var datafield = $(control).attr("data-field");
                        $(control).removeAttr("data-field").attr("data-datafield", datafield)
                            .attr("data-row", "1"); // 业务对象也给control加上data-row，方便通过datafield查找
                        $(control).SheetUIManager(1);
                    })
                }
                //this.EditorLoading.apply(this, [this.V]);
            }
        },
        HtmlRender: function () {
            if (this.VirtualPaging) {
                this._RenderVirtualPagingContainer();
            }

            this.ButtonId = this.DataField + "_" + Math.floor(Math.random() * 1000);//设置按钮ID
            this.RowCount = 0;
            this.RowNum = 0;
            this.template = $(this.Element).find("tr.template");
            // $(this.Element).css("width", "100%");
            $(this.Element).parent().css("overflow", "auto");//超出边界增加滑动
            var tds = this.template.find("td");
            this.Summary = $(this.Element).find("tr.footer");
            var tooldiv = $("<div></div>").css("width", "100%");
            this.addbtn = $("<div><a id='Add_" + this.ButtonId + "'>" + SheetLanguages.Current.Add + "</a></div>").css("width", "8%").css("float", "left").css("padding-top", "3px");
            this.clearbtn = $("<div><a id='Clear_" + this.ButtonId + "'>" + SheetLanguages.Current.Clear + "</a></div>").css("width", "8%").css("float", "left").css("padding-top", "3px");
            this.importbtn = $("<div><input id='importExcel_" + this.ButtonId + "' name='importExcel' type='file' style='width:60%' /><a id='Import_" + this.ButtonId + "'>" + SheetLanguages.Current.Import + "</a></div>").css("float", "left");
            this.exportbtn = $("<div><a id='Export_" + this.ButtonId + "'>" + SheetLanguages.Current.Export + "</a></div>").css("width", "8%").css("float", "left").css("padding-top", "3px");
            tooldiv.append(this.addbtn).append(this.clearbtn).append(this.exportbtn).append(this.importbtn);
            if (this.VirtualPaging) {
                $(this.Element).parent().after(tooldiv);
            } else {
                $(this.Element).after(tooldiv);
            }

        },
        _RenderVirtualPagingContainer: function () {
            this.dataContainerDivHeight = $(this.Element).parent().height() - 70;  // 去掉表头的高度
            this.dataContainerDivHeight = this.dataContainerDivHeight < 80 ? 80 : this.dataContainerDivHeight;

            $("table").css("max-width", "none");
            // 表头div
            var divTitleTableContainer = $("<div class='SheetGridView SheetGridViewTitle' data-datafield='" + this.DataField + "' style='overflow:hidden;width:100%;'></div>");
            // 主体div
            var divDataTableContainer = $("<div class='SheetGridView SheetGridViewData' data-datafield='" + this.DataField + "' data-type='SheetGridView' style='overflow:auto;width:100%;height:" + this.dataContainerDivHeight + "px;' scroll='scroll'></div>");
            $(this.Element).parent().append(divTitleTableContainer);
            $(this.Element).parent().append(divDataTableContainer);

            //填充主体
            divDataTableContainer.append($(this.Element));//针对当前div.SheetGridViewData 对象

            // 填充表头 
            var dataTableWidth = $(this.Element).width();
            var tableTitleDom = $("<table class='SheetGridView'></table>").css("max-width", "none").css({
                "width": dataTableWidth,
                "table-layout": "fixed"
            });
            $(this.Element).css("width", $(this.Element).width());

            var tbody = $("<tbody class=''></tbody>");
            var header = $(this.Element).find("tr.header");
            tbody.append(header);
            tableTitleDom.append(tbody);
            divTitleTableContainer.append(tableTitleDom);//同上
            //divDataTableContainer.css("overflow", "inherit");
        },

        RenderMobile: function () {
            //不可见返回
            if (!this.Visiable) {
                $(this.Element).hide();
                return;
            }
            //移到表单最下方
            $(this.Element).closest("div[class=tableContent list]").hide();
            resetValue = $(this.Element).find("tr")[0].innerText.replace(/\s+/g, ",").split(",");
            // window.console.log("值"+resetValue);
            //关联关系
            $(this.Element).closest("div[class=list]").hide();

            var parentDatafield = $(this.Element).data($.MvcSheetUI.DataFieldKey.toLowerCase());//数据项编码
            var sheetid = $(this.Element).data($.MvcSheetUI.SheetIDKey);
            this.template = $(this.Element).find(".template");
            $(this.Element).find("table").remove();
            $(this.Element).data($.MvcSheetUI.SheetIDKey, sheetid);

            //主容器 
            var panelContainer = $(this.Element).closest("div[class=tableContent list]");
            if ($(this.Element.parentElement).hasClass("hidden")) {
                this.Element = $("<div>").attr("data-datafield", parentDatafield).addClass("SheetGridView hidden");
            }
            else {
                this.Element = $("<div>").attr("data-datafield", parentDatafield).addClass("SheetGridView");
            }
            panelContainer.after(this.Element);

            //var titleText = $(this.Element).parent().attr("data-title") || this.DataItem.N;
            var titleText = SheetLanguages.Current.ChildSchemaInfo1;
            //区分关联关系
            var length = 0;
            if (this.V.DataItems != undefined) {
                this.IsAssociation = true;
                length = 1;
            } else {
                this.IsAssociation = false;
                length = this.V.R.length;
            }
            if (this.DataItem.N && this.DataItem.N.length > 7) {
                this.DataItem.N = this.DataItem.N.substr(0, 7) + '...';
            }
            txt = this.DataItem.N + SheetLanguages.Current.ChildSchemaInfo2 + length + SheetLanguages.Current.ChildSchemaInfo3;
            this.title = $("<div>").addClass("item item-title").append("<span>" + txt + "</span>");
            this.title.appendTo(this.Element);
            var content = $("<div>").addClass("item-content").addClass("tab-mode");//子表默认显示模式tab-mode
            content.appendTo(this.Element);

            this.modal =
                '<div class="item-index">' +
                '<div class="buttons-left">' +
                '<ion-scroll class="scroll" direction="x" scrollbar-x="false" delegate-handle="' + this.DataField + '_1" style="display:none;">' +
                '<button class="button button-small" type="button" ng-click="test()">1</button>' +
                '</ion-scroll>' +
                '<ion-scroll class="scroll" direction="x" scrollbar-x="false" delegate-handle="' + this.DataField + '" style="display:block;">' +
                '</ion-scroll>' +
                '</div>' +
                '<div class="buttons-right">' +
                '<span style="font-size:35px;" class="addrow">+</span>' +
                '</div>' +
                '</div>' +
                '<div class="item-content" style="height:100%;border-top:1px solid rgb(221, 221, 221);border-bottom:1px solid rgb(221, 221, 221);">' +
                '<div class="slider-slides">' +
                '</div>' +
                '</div>';
            $(this.modal).appendTo(content);
            if (this.IsAssociation) {
                $(this.Element).find("div[class='buttons-right']").addClass("hide");
            }
            //初始化索引
            this.InitMobileIndex();
            $.MvcSheetUI.IonicFramework.$compile($($(this.Element).find("ion-scroll")))($.MvcSheetUI.IonicFramework.$scope);

            //this.copybtn = $('<div></div>').addClass("button-fun").attr("align", "center").append($('<a>').addClass("button button-small button-blue").text("复制"));
            //this.addbtn = $('<div></div>').addClass("button-fun").attr("align", "center").append($('<a>').addClass("button button-small  button-blue").text("添加"));
            //this.delebtn = $('<div></div>').addClass("button-fun").attr("align", "center").append($('<a>').addClass("button button-small button-red").text("删除"));
            this.changeSchemeShowMode = $('<div></div>').addClass("button-fun").attr("align", "center").append($('<a>').addClass("button button-small button-red").text(SheetLanguages.Current.ChangeMode));
            this.title.append(this.changeSchemeShowMode);

            //不可编辑时，子表数目为零，隐藏切换模式按钮
            if (!this.Editable) {
                if (length == 0) {
                    content.addClass('list-mode');
                    $(this.changeSchemeShowMode).hide();
                }
            }

            this.addbtnBottom = $('<div class="addbtn"><span>+</span>' + SheetLanguages.Current.AddChildSchema + '</div>');
            if (this.V.R) {
                content.append(this.addbtnBottom);
                //content.append(this.copybtn).append(this.addbtn).append(this.delebtn);
            }

            this.RowCount = 0;
            this.RowNum = 0;
            this.MobileRow = $("<div>").addClass("slider-slide").attr("style", "display:none;");
            var tt = $('<div></div>').addClass('list-title');
            var ttl = $('<div></div>').addClass('list-title-left');
            ttl.text(titleText);
            var ttr = $('<div></div>').addClass('list-title-right');
            ttr.append($("<div></div>").addClass('copy').text(SheetLanguages.Current.Copy)).append($("<div></div>").addClass('delete').text(SheetLanguages.Current.Delete));
            tt.append(ttl).append(ttr);
            this.MobileRow.append(tt);
            var tds = $(this.template).find("td");
            if (this.L == $.MvcSheetUI.LogicType.BizObjectArray) {
                for (var i = 1; i < tds.length - 1; i++) {
                    //update by luxm 移动端设置子表的名称不生效
                    var control = $(tds[i]).find("[data-field]");
                    var datafield = $(control).attr("data-field");
                    var dataField = $.MvcSheetUI.GetSheetDataItem(datafield, 1);
                    if (dataField.N != resetValue[i + 1]) {
                        dataField.N = resetValue[i + 1];
                    };
                    this.GetChildrenTd(tds[i]);
                }
            }
            else {
                for (var i = 0; i < tds.length; i++) {
                    this.GetChildrenTd(tds[i]);
                }
            }
            this.SetValue();
            this.currentIndex = 0;
            this.ShowMobileData(0);
            this.childSchemaShowMode = 'tabMode';
            var that = this;
            //绑定添加事件——add模式 添加到末尾
            this.bindAddLast = function (ele) {
                ele.unbind('click.add').bind('click.add', [this], function (e) {
                    console.log(that.currentIndex, 'add------');
                    e.data[0]._AddMobileRow();
                    MobileIndexChange(that.currentIndex, 'add');
                    RebindChildSchemaEvents();
                    $.MvcSheetUI.IonicFramework.$ionicScrollDelegate.resize();
                });
            };
            //绑定添加事件——insert模式 添加到项的后面
            this.bindAddAfter = function (ele) {
                ele.unbind('click.add').bind('click.add', [this], function (e) {
                    e.data[0]._InsertMobileRow.apply(e.data[0], [$(this), false]);
                    MobileIndexChange(that.currentIndex, 'insert');
                    RebindChildSchemaEvents();
                });
            }
            //绑定切换子表模式事件list-mode、tab-mode
            $(this.changeSchemeShowMode.find("a")).unbind('click.changeMode').bind('click.changeMode', [this], function (e) {
                // console.log("change mode");
                if (that.childSchemaShowMode == 'listMode') {
                    content.removeClass("list-mode").addClass("tab-mode");
                    that.childSchemaShowMode = 'tabMode';
                    var items = that.Element.find('.slider-slide').hide();
                    that.Element.find(".item-index").find('button').each(function (i, v) {
                        if (v.getAttribute('index') == that.currentIndex) {
                            that.MobileIndexButtonClick(v);
                        }
                    });
                } else {
                    content.removeClass("tab-mode").addClass("list-mode");
                    that.childSchemaShowMode = 'listMode';
                }
                $.MvcSheetUI.IonicFramework.$ionicScrollDelegate.resize();

            });
            //绑定复制事件——insert模式
            this.bindCopy = function (ele) {
                ele.unbind('click.copy').bind('click.copy', [this], function (e) {
                    var index = $(e.target).parents(".slider-slide")[0].getAttribute('data-row') - 1;
                    that.currentIndex = index;
                    var ele = $(e.data[0].Element).find("div[class='slider-slide']");
                    if (ele.length == 0) return;
                    e.data[0]._InsertMobileRow.apply(e.data[0], [$(this), true]);
                    MobileIndexChange(that.currentIndex, 'insert');
                    RebindChildSchemaEvents();
                });
            }
            //绑定删除事件
            this.bindDelete = function (ele) {
                ele.unbind('click.delete').bind('click.delete', [this], function (e) {
                    that.currentIndex = $(e.target).parents(".slider-slide")[0].getAttribute('data-row') - 1;
                    var index = that.currentIndex;
                    //删除表单元素
                    var Rows = $(this).closest('div[data-datafield="' + that.DataField + '"]').find('div[class="slider-slide"]');
                    if (Rows.length == 0) return;
                    if (that.OnPreRemove) {
                        that.RunScript($(Rows[index]), that.OnPreRemove);
                    }
                    if (that.OnRemoved) {
                        that.RunScript($(Rows[index]), that.OnRemoved);
                    }
                    for (var i = 0; i < that.V.R.length; i++) {
                        var id = that.V.R[i].DataItems[that.DataField + ".ObjectID"].V;
                        if (id == $(Rows[index]).attr("id")) {
                            that.V.R.splice(i, 1);
                            break;
                        }
                    }

                    var thisMobileRow = that.MobileRows[index];
                    for (var k in thisMobileRow.Editors) {
                        var id = $(thisMobileRow.Editors[k].Element).data($.MvcSheetUI.SheetIDKey);
                        if (id && $.MvcSheetUI.ControlManagers[id]) {
                            delete $.MvcSheetUI.ControlManagers[id];
                        }
                    }
                    ;
                    $(Rows[index]).remove();
                    that.MobileRows.splice(index, 1);
                    //重新排序
                    if (index == that.MobileRows.length && index != 0) {
                        index--;
                    }
                    --that.RowCount;
                    that.ShowMobileData(index);
                    MobileIndexChange(that.currentIndex, 'delete');
                    if (this.OnRemoved) {
                        this.RunScript($(deleterow), this.OnRemoved);
                    }
                    $.MvcSheetUI.MvcRuntime.init($("body"));//计算属性
                    RebindChildSchemaEvents();
                });
            }
            //绑定事件
            this.bindAddLast(this.Element.find('.addrow'));
            this.bindAddLast(this.addbtnBottom);
            var RebindChildSchemaEvents = function () {
                var copys = that.Element.find('.copy');
                var deletes = that.Element.find('.delete');
                copys.each(function (i, v) {
                    that.bindCopy($(v));
                });
                deletes.each(function (i, v) {
                    that.bindDelete($(v));
                });
                //显示子表序号
                that.Element.find(".list-title").each(function (i, v) {
                    var ltl = $(v).find('.list-title-left')[0];
                    var index = $(ltl).parents('.slider-slide')[0].getAttribute('data-row');
                    $(ltl).text(SheetLanguages.Current.ChildSchema + "(" + index + ")");
                });
            };
            RebindChildSchemaEvents();

            var MobileIndexChange = function (index, type) {
                var indexEle = $(that.Element).find("ion-scroll");
                if (type == "delete") {
                    var button = $(indexEle[1]).find("button");
                    button[index].remove();
                    button = $(indexEle[1]).find("button");
                    for (var i = 0; i < button.length; i++) {
                        $(button[i]).attr("id", that.DataField + (i + 1)).attr("index", i).text(i + 1);
                    }
                    var rows = $(that.Element).find("div.slider-slide");
                    for (var i = 0; i < rows.length; i++) {
                        $(rows[i]).attr("data-row", i + 1);
                    }
                    $(button[index]).addClass("button-blue");
                }
                else {
                    var button = $(indexEle[0]).find("button").clone(true);
                    if ($(indexEle[1]).find("button").length == 0) {
                        $($(indexEle[1]).find("div.scroll")).append(button);
                        $(button).addClass("button-blue");
                        that.ShowMobileData(0)
                    } else {
                        $($(indexEle[1]).find("button:last")).after(button);
                        if (type == "add") {
                            that.ShowMobileData(that.RowCount - 1);
                        } else {
                            that.ShowMobileData(index + 1);
                        }
                    }
                    $(button).attr('index', that.RowCount - 1).attr('id', that.DataField).text(that.RowCount);
                    $(button).unbind("click.switch").bind("click.switch", [that], function (e) {
                        e.data[0].MobileIndexButtonClick(this);
                    })
                }

                //var txt = $(that.Element).parent().attr("data-title") || that.DataItem.N;
                //txt = txt + "(共 " + $(indexEle[1]).find("button").length + " 条纪录)";
                var txt = that.DataItem.N + SheetLanguages.Current.ChildSchemaInfo2 + $(indexEle[1]).find("button").length + SheetLanguages.Current.ChildSchemaInfo3;
                that.title.find('span').text(txt);
                $.MvcSheetUI.IonicFramework.$ionicScrollDelegate.$getByHandle(that.DataField).resize();
            }
            if (!this.DisplayAdd || this.L == $.MvcSheetUI.LogicType.BizObject || !this.Editable) {    //添加按钮
                $(this.Element).find("div[class='buttons-right']").css("display", "none");
                //$(this.copybtn).css("display", "none");
                //$(this.addbtn).css("display", "none");
                $(this.Element).find('.copy').css('display', "none");
                $(this.Element).find('.addbtn').css('display', 'none');
                //删除复制按钮被子表的复制删除按钮代替
                // console.log(this.Element);
            }
            if (!this.DisplayDelete || this.L == $.MvcSheetUI.LogicType.BizObject || !this.Editable) {    //删除按钮
                //$(this.delebtn).css("display", "none");
                $(this.Element).find('.delete').css('display', "none");
            }
            // 子表展现完成后事件
            if (this.OnRendered) {
                this.RunScript(this, this.OnRendered, arguments);
            }

            //添加默认行
            if ($.MvcSheetUI.SheetInfo.IsOriginateMode) {
                for (var i = 1; i < this.DefaultRowCount; i++) {
                    this._AddMobileRow();
                    MobileIndexChange(this.currentIndex, "add");
                }
                //初始化导航
                this.ShowMobileData(0);
            }
            //$(".input-label").attr("style",{"color":""});
        },
        //初始化索引
        InitMobileIndex: function (currentIndex) {
            var that = this;
            this.currentIndex = currentIndex || 0;
            var indexEle = $(this.Element).find("ion-scroll");
            var value = this.V.R;
            //区分关联关系
            var length = 0;
            if (this.IsAssociation) {
                length = 1;
            } else {
                length = this.V.R.length;
            }
            if (this.Originate && this.DefaultRowCount < 1) {
                return;
            }
            for (var i = 1; i < length + 1; i++) {
                var button = $("<button>").addClass("button button-small").attr("id", (this.DataField + "-" + i)).attr("type", "button").attr('index', (i - 1)).text(i);
                $(indexEle[1]).append(button);
                $(button).unbind("click.switch").bind("click.switch", [this], function (e) {
                    e.data[0].MobileIndexButtonClick(this);
                })
            }
            $($(indexEle[1]).find("button")[this.currentIndex]).addClass("button-blue");
        },
        //绑定导航点击事件
        MobileIndexButtonClick: function (element) {
            var index = Number($(element).attr('index'));
            var indexEle = $(element).closest("ion-scroll");
            //$($(indexEle[1]).find("button")[this.currentIndex]).removeClass("button-blue");
            $($(indexEle[0]).find("button")).removeClass("button-blue");
            $($(indexEle[0]).find("button")[index]).addClass("button-blue");
            this.ShowMobileData(index);
        },
        ShowMobileData: function (showIndex) {
            var dataEle = $(this.Element).find("div[class='slider-slide']");
            if (dataEle.length == 0) return;
            var indexEle = $(this.Element).find("ion-scroll");
            var delegate = $.MvcSheetUI.IonicFramework.$ionicScrollDelegate.$getByHandle(this.DataField);
            $($(indexEle[1]).find("button")[this.currentIndex]).removeClass("button-blue");
            $($(indexEle[1]).find("button")[showIndex]).addClass("button-blue");
            //数据显示
            $(dataEle[this.currentIndex]).hide();
            $(dataEle[showIndex]).show();
            this.currentIndex = showIndex;
            //导航栏偏移量
            var ele = $(indexEle[1]).find("button")[showIndex];
            this.SetNavPosition(ele)
        },
        //设置导航位置
        SetNavPosition: function (ele) {
            var delegate = $.MvcSheetUI.IonicFramework.$ionicScrollDelegate.$getByHandle(this.DataField);
            var delegateLeft = delegate.getScrollPosition().left;
            var left = $(ele).offset().left;
            delegate.scrollTo(delegateLeft - 120 + left, 0, true);
        },
        _AddMobileRow: function (e) {
            //移动端添加行：三种情况
            /*   参数：无参/1个（id）/2个（插入行，是否复制）
            1、直接添加：添加在最后一行
            2、复制插入：插入有数据的行
            2、直接插入：插入空白行
            */
            if (!this.MobileRows) {
                this.MobileRows = [];
            }

            var thisGridView = this;
            if (this.OnPreAdd) {
                this.RunScript($(this.Element), this.OnPreAdd, arguments);
            }

            getTrValue = function (rowIndex) {
                var trvalue = {};
                var row = thisGridView.MobileRows[rowIndex];
                var controls = row.Editors;
                for (var j = 0; j < controls.length; j++) {
                    var control = controls[j];
                    if (control) {
                        var datafield = control.DataField;
                        if (datafield)
                            trvalue[datafield.split(".")[1]] = control.GetValue();
                    }
                }
                if (row.id) {
                    trvalue["ObjectID"] = row.id;
                }
                return trvalue;
            }

            //移动端添加行事件
            MobileRowCtor = function (_RowTemplate, _RowIndex, _RowNum, _Element, _id, _copy) {

                this.RowControl = $(_RowTemplate).clone().attr("data-row", _RowIndex).attr("id", _id);
                this.RowControl.find("[data-datafield]").attr("data-row", _RowIndex);
                if (_RowIndex != _RowNum && $(_Element).find("div[class='slider-slide']").length > 0) {
                    //插入
                    $($(_Element).find("div[class='slider-slide']")[_RowIndex - 2]).after(this.RowControl);
                } else {
                    $(_Element).find("div[class='slider-slides']").append(this.RowControl);
                }
                $.MvcSheetUI.IonicFramework.$compile($(this.RowControl))($.MvcSheetUI.IonicFramework.$scope);
                var _Editors = [];
                this.RowControl.find("div.list").each(function () {
                    var control = $(this).children(":last").children();
                    if ($(control).attr("id")) {
                        var id = $(control).attr("id");
                        id = id + "_Row" + _RowIndex;
                        $(control).attr("id", id);
                    }
                    if (_copy) {
                        var trValue = getTrValue(_RowIndex - 2);
                        var c = $(control).SheetUIManager(_RowNum);
                        var value = trValue[c.DataField.split(".")[1]];
                        c.SetValue(value);
                    }
                    _Editors.push($(control).SheetUIManager(_RowNum));
                });
                this.Editors = _Editors;
                return this;
            }

            var id;
            var newRow;
            var RowIndex;
            if (arguments && arguments.length == 1) {
                var guid = arguments[0];
                id = guid;
                RowIndex = this.RowCount + 1;
                newRow = new MobileRowCtor(this.MobileRow, RowIndex, ++this.RowNum, this.Element, id, false);
            } else if (arguments && arguments.length == 2) {
                //插入（复制/添加）
                id = $.uuid();
                RowIndex = this.currentIndex + 2;
                newRow = new MobileRowCtor(this.MobileRow, RowIndex, ++this.RowNum, this.Element, id, arguments[1]);
            }
            else {
                //末尾添加新行
                id = $.uuid();
                RowIndex = this.RowCount + 1;
                newRow = new MobileRowCtor(this.MobileRow, RowIndex, ++this.RowNum, this.Element, id, false);
            }

            if (this.OnAdded) {
                this.RunScript($(this.Element), this.OnAdded, [this, this.V.R[this.RowCount]]);
            }

            ++this.RowCount;
            var num = this.RowCount;
            /*
               // 添加行的时候，重新初始化Rule
            if ($.MvcSheetUI.MvcRuntime && !$.MvcSheetUI.Loading) {
                $.MvcSheetUI.MvcRuntime.init($("body"));// $(this.newRow[0]));
            }
            */
            this.MobileRows.splice(RowIndex - 1, 0, newRow);
            //添加行的时候，重新初始化Rule
            if ($.MvcSheetUI.MvcRuntime && !$.MvcSheetUI.Loading) {
                $.MvcSheetUI.MvcRuntime.init($("body"));
            }
        },
        _InsertMobileRow: function (e) {
            var insertIndex = this.currentIndex + 1;
            var rows = $(this.Element).find("div.slider-slide");
            for (var i = 0; i < rows.length; i++) {
                var row = rows[i];
                var rownum = parseInt($(row).attr("data-row"));
                if (rownum > insertIndex) {
                    rownum = rownum - 1 + 2;
                    $(row).attr("data-row", rownum);
                    $(row).find("[data-row]").attr("data-row", rownum);
                    if ($(row).find("td:first").html() == rownum - 1)
                        $(row).find("td:first").html(rownum);
                }
            }
            this._AddMobileRow(arguments[0], arguments[1]);
        },
        GetChildrenTd: function (tds) {
            // window.console.log("" + resetValue);
            var control = $(tds).find("[data-field]");
            //qiancheng 修改移动端能够显示PC端已经隐藏的字段
            var td;
            if ($(tds).attr("class")) {
                if ($(tds).attr("class").indexOf("hidden") != -1) {
                    td = $("<div></div>").addClass("list hidden").attr("type", "item-text-wrap");
                } else {
                    td = $("<div></div>").addClass("list").attr("type", "item-text-wrap");
                }

            } else {
                td = $("<div></div>").addClass("list").attr("type", "item-text-wrap");
            }


            var datafield = $(control).attr("data-field");
            $(control).removeAttr("data-field").attr("data-datafield", datafield);
            $(td).attr("data-field", datafield);
            var dataitem = $.MvcSheetUI.GetSheetDataItem(datafield, 1);
            if (dataitem)
                $(td).append($("<div></div>").addClass("col-md-2").append($("<label>" + dataitem.N + "</label>")));
            $(td).append($("<div></div>").addClass("col-md-4").append($(control)));
            $(this.MobileRow).append(td);
        },

        // 设置行只读
        SetRowReadOnly: function (rowIndex) {
            if (rowIndex < this.V.R.length) {
                for (var k in this.V.R[rowIndex].DataItems) {
                    this.V.R[rowIndex].DataItems[k].O = this.V.R[rowIndex].DataItems[k].O.replace("E", "");
                }
            }
        },
        // 添加一行解决 新增后数据无法清除的Bug
        _AddNewRow: function (e) {
            if (!this.SheetInfo.BizObject.DataItems[this.DataField].V.R) {
                this.TransferValue();
            }

            var rowIndex = this.RowCount;
            if (this.OnPreAdd) {
                this.RunScript($(this.Element), this.OnPreAdd, [this, rowIndex]);
            }
            //执行绑定事件
            this.newRow = this.template.clone(true).attr("class", "rows").attr("data-row", this.RowCount + 1).removeAttr("style", "display:none");
            // console.log(this.newRow)
            $(this.newRow).find("td").each(function () {
                var childrenElement = $(this).find("[data-field]");
                var field = childrenElement.attr("data-field");
                childrenElement.removeAttr("data-field").attr("data-datafield", field);
                childrenElement.attr("data-row", $(this).closest("tr").attr("data-row"));
            });
            if (this.L == $.MvcSheetUI.LogicType.BizObjectArray) {
                if (this.newRow.length > 1) {
                    $($(this.newRow)[0]).find("td:first").html(++this.RowCount);
                }
                else {
                    $(this.newRow).find("td:first").html(++this.RowCount);
                }
            }

            if (arguments && arguments.length == 1) {
                var guid = arguments[0];
                $(this.newRow).attr("id", guid);
            }

            if (arguments.length > 1) {
                var rownums = $(arguments[1]).attr("data-row") - 1 + 2;
                this.newRow.attr("data-row", rownums);
                if (this.newRow.length > 1) {
                    $($(this.newRow)[0]).find("td:first").html(rownums);
                    var insertr;
                    for (var i = 0; i < this.newRow.length; i++) {
                        insertr = $(arguments[1]).next("tr");
                    }
                    $(insertr).after(this.newRow);
                }
                else {
                    $(this.newRow).find("td:first").html(rownums);
                    $(arguments[1]).after(this.newRow);
                }
            }
            else {
                if ($(this.Element).find("tr.rows").length == 0) {
                    if (this.template.length > 1) {
                        $($(this.template)[this.template.length - 1]).after(this.newRow);
                    }
                    else {
                        $(this.template).after(this.newRow);
                    }
                }
                else {
                    $(this.Element).find("tr.rows:last").after(this.newRow);
                }
            }

            ++this.RowNum;
            var num = this.RowCount;
            var that = this;
            $(this.newRow).find("td").each(function () {
                var control = $(this).children();
                if ($(control).attr("id")) {
                    var id = $(control).attr("id");
                    id = id + "_Row" + that.RowNum;
                    $(control).attr("id", id);
                }
                // console.log($(control), '$(control)')
                var cmanager = $(control).SheetUIManager2(that.RowCount);
                // console.log(cmanager, 'cmanager')
            });
            if (this.AlternatingRowStyle && num % 2 == 0) {
                $(this.newRow).attr("style", this.AlternatingRowStyle);
            }

            var tds = $(this.newRow).find("td");
            for (var i = 0; i < tds.length; i++) {
                var td = tds[i];
                if (this.GetSummaryTd(td)) {
                    $(td).children().unbind("change.Summary").bind("change.Summary", [this], function (e) {
                        e.data[0]._Summary(this);
                    });
                }
            }
            // 添加行的时候，重新初始化Rule
            if ($.MvcSheetUI.MvcRuntime && !$.MvcSheetUI.Loading) {
                $.MvcSheetUI.MvcRuntime.init($("body"));// $(this.newRow[0]));
            }
            //绑定删除事件
            var delbtn = $(this.newRow).find("a.delete");
            $(delbtn).unbind("click").bind("click", [this], function (e) {
                e.data[0]._Deleterow($(this).closest("tr"));
            });
            //绑定插入事件
            var insertbtn = $(this.newRow).find("a.insert");
            $(insertbtn).unbind("click").bind("click", [this], function (e) {
                e.data[0]._Insertrow($(this).closest("tr"));
            });
            if (this.OnAdded) {
                this.RunScript($(this.newRow), this.OnAdded, [this, this.V.R[rowIndex], rowIndex]);
            }
            var dataTable = this.Element;//主体table
            this.deafaultTableHeight = $(dataTable).height();
            if (this.VirtualPaging) {
                this._SetVirtualPagingContainerHeight();
                //虚拟分页时使表头的宽度与表的内容td的宽度保持一致
                var tdHead = $(this.Element).parent(".SheetGridViewData").siblings(".SheetGridViewTitle").find("tr.header td");
                $(this.Element).find("tr.rows").find("td").each(function (i, e) {
                    $(e).children().each(function () {
                        if ($(this).attr("data-displayrule")) { //虚拟分页时控件元素有displayrule的时候，控件不显示也占有位置。
                            $(e).children().addClass("block");
                        }
                    });
                });
                $(this.Element).find("tr.rows").eq(0).find("td").each(function (i, e) {
                    tdHead.eq(i).css("width", $(e).outerWidth(true));
                });
                if (this.Element.parentElement.getAttribute("scroll") == "scroll") {
                } else {
                    //$(this.Element).find("tr[class='rows']:last").find("td input:first").focus();
                    var a = $(this.Element).find("tr[class='rows']:last").find("td:first").next();
                    if (a.find("input").length > 0) {
                        a.find("input").focus();
                    } else if (a.find("textarea").length > 0) {
                        a.find("textarea").focus();
                    } else if (a.find("select").length > 0) {
                        a.find("select").focus();
                    }
                }
            }
        },
        // 添加一行
        _AddRow: function (e) {
            if (!this.SheetInfo.BizObject.DataItems[this.DataField].V.R) {
                this.TransferValue();
            }

            var rowIndex = this.RowCount;
            if (this.OnPreAdd) {
                this.RunScript($(this.Element), this.OnPreAdd, [this, rowIndex]);
            }
            //执行绑定事件            
            this.newRow = this.template.clone(true).attr("class", "rows").attr("data-row", this.RowCount + 1).removeAttr("style", "display:none");
            // console.log(this.newRow)
            $(this.newRow).find("td").each(function () {
                var childrenElement = $(this).find("[data-field]");
                var field = childrenElement.attr("data-field");
                childrenElement.removeAttr("data-field").attr("data-datafield", field);
                childrenElement.attr("data-row", $(this).closest("tr").attr("data-row"));
            });
            if (this.L == $.MvcSheetUI.LogicType.BizObjectArray) {
                if (this.newRow.length > 1) {
                    $($(this.newRow)[0]).find("td:first").html(++this.RowCount);
                }
                else {
                    $(this.newRow).find("td:first").html(++this.RowCount);
                }
            }

            if (arguments && arguments.length == 1) {
                var guid = arguments[0];
                $(this.newRow).attr("id", guid);
            }

            if (arguments.length > 1) {
                var rownums = $(arguments[1]).attr("data-row") - 1 + 2;
                this.newRow.attr("data-row", rownums);
                if (this.newRow.length > 1) {
                    $($(this.newRow)[0]).find("td:first").html(rownums);
                    var insertr;
                    for (var i = 0; i < this.newRow.length; i++) {
                        insertr = $(arguments[1]).next("tr");
                    }
                    $(insertr).after(this.newRow);
                }
                else {
                    $(this.newRow).find("td:first").html(rownums);
                    $(arguments[1]).after(this.newRow);
                }
            }
            else {
                if ($(this.Element).find("tr.rows").length == 0) {
                    if (this.template.length > 1) {
                        $($(this.template)[this.template.length - 1]).after(this.newRow);
                    }
                    else {
                        $(this.template).after(this.newRow);
                    }
                }
                else {
                    $(this.Element).find("tr.rows:last").after(this.newRow);
                }
            }

            ++this.RowNum;
            var num = this.RowCount;
            var that = this;
            $(this.newRow).find("td").each(function () {
                var control = $(this).children();
                if ($(control).attr("id")) {
                    var id = $(control).attr("id");
                    id = id + "_Row" + that.RowNum;
                    $(control).attr("id", id);
                }
                // console.log($(control), '$(control)')
                var cmanager = $(control).SheetUIManager(that.RowCount);
                // console.log(cmanager, 'cmanager')
            });
            if (this.AlternatingRowStyle && num % 2 == 0) {
                $(this.newRow).attr("style", this.AlternatingRowStyle);
            }

            var tds = $(this.newRow).find("td");
            for (var i = 0; i < tds.length; i++) {
                var td = tds[i];
                if (this.GetSummaryTd(td)) {
                    $(td).children().unbind("change.Summary").bind("change.Summary", [this], function (e) {
                        e.data[0]._Summary(this);
                    });
                }
            }
            // 添加行的时候，重新初始化Rule
            if ($.MvcSheetUI.MvcRuntime && !$.MvcSheetUI.Loading) {
                $.MvcSheetUI.MvcRuntime.init($("body"));// $(this.newRow[0]));
            }
            //绑定删除事件
            var delbtn = $(this.newRow).find("a.delete");
            $(delbtn).unbind("click").bind("click", [this], function (e) {
                e.data[0]._Deleterow($(this).closest("tr"));
            });
            //绑定插入事件
            var insertbtn = $(this.newRow).find("a.insert");
            $(insertbtn).unbind("click").bind("click", [this], function (e) {
                e.data[0]._Insertrow($(this).closest("tr"));
            });
            if (this.OnAdded) {
                this.RunScript($(this.newRow), this.OnAdded, [this, this.V.R[rowIndex], rowIndex]);
            }
            var dataTable = this.Element;//主体table
            this.deafaultTableHeight = $(dataTable).height();
            if (this.VirtualPaging) {
                this._SetVirtualPagingContainerHeight();
                //虚拟分页时使表头的宽度与表的内容td的宽度保持一致
                var tdHead = $(this.Element).parent(".SheetGridViewData").siblings(".SheetGridViewTitle").find("tr.header td");
                $(this.Element).find("tr.rows").find("td").each(function (i, e) {
                    $(e).children().each(function () {
                        if ($(this).attr("data-displayrule")) { //虚拟分页时控件元素有displayrule的时候，控件不显示也占有位置。
                            $(e).children().addClass("block");
                        }
                    });
                });
                $(this.Element).find("tr.rows").eq(0).find("td").each(function (i, e) {
                    tdHead.eq(i).css("width", $(e).outerWidth(true));
                });
                if (this.Element.parentElement.getAttribute("scroll") == "scroll") {
                } else {
                    //$(this.Element).find("tr[class='rows']:last").find("td input:first").focus();
                    var a = $(this.Element).find("tr[class='rows']:last").find("td:first").next();
                    if (a.find("input").length > 0) {
                        a.find("input").focus();
                    } else if (a.find("textarea").length > 0) {
                        a.find("textarea").focus();
                    } else if (a.find("select").length > 0) {
                        a.find("select").focus();
                    }
                }
            }
        },
        // 删除行
        _Deleterow: function (deleterow, isRemoveAll) {
            var delnum = parseInt($(deleterow).attr("data-row"));
            if (this.OnPreRemove) {
                this.RunScript($(deleterow), this.OnPreRemove);
            }

            // 清除 ControlManagers 的内容
            $(deleterow).find("[data-datafield]").each(function (index, control) {
                var id = $(this).data($.MvcSheetUI.SheetIDKey);
                if (id && $.MvcSheetUI.ControlManagers[id]) {
                    $.MvcSheetUI.ControlManagers[id].DataItem.V = "";
                    delete $.MvcSheetUI.ControlManagers[id];
                }
            });
            $(deleterow).remove();
            var rows = $(this.Element).find("tr.rows");
            // 重新计算行
            if (typeof (isRemoveAll) == "undefined" || !isRemoveAll) {
                for (var i = 0; i < rows.length; i++) {
                    var row = rows[i];
                    if ($(row).attr("data-row") == delnum) {
                        $(row).remove();
                    }

                    var rownum = parseInt($(row).attr("data-row"));
                    if (rownum > delnum) {
                        if (this.AlternatingRowStyle) {
                            if (rownum % 2 == 1) {
                                $(row).attr("style", this.AlternatingRowStyle);
                            } else {
                                $(row).attr("style", "");
                            }
                        }

                        $(row).attr("data-row", rownum - 1);

                        if ($(row).find("td:first").html() == rownum)
                            $(row).find("td:first").html(rownum - 1);

                        $(row).find("td").each(function () {
                            if ($(this).attr("data-title"))
                                $(this).attr("data-title", rownum - 1);
                            if ($(this).children() && $(this).find("[data-datafield]"))
                                $(this).find("[data-datafield]").attr("data-row", rownum - 1);
                        });
                    }
                }

                var tds = $(this.template).find("td");
                for (var i = 0; i < tds.length; i++) {
                    if (this.GetSummaryTd(tds[i])) {
                        this._Summary($(tds[i]).children());
                    }
                }
            }

            this.RowCount = this.RowCount - 1;

            if (this.OnRemoved) {
                this.RunScript($(deleterow), this.OnRemoved);
            }
            if (typeof (isRemoveAll) == "undefined" || !isRemoveAll) {
                //删除行的时候，重新初始化Rule
                if ($.MvcSheetUI.MvcRuntime) {
                    // $.MvcSheetUI.MvcRuntime.init($(this.Element));
                    $.MvcSheetUI.MvcRuntime.init($("body"));
                }
            }

            if (this.VirtualPaging) {
                this._SetVirtualPagingContainerHeight();
                //虚拟分页时，删除行从新设置表头宽度对齐。
                if (!$(this.Element).find("tr.rows").length && !$(this.Element).find("tr.footer").is(":hidden")) {
                    var tdHead = $(this.Element).parent(".SheetGridViewData").siblings(".SheetGridViewTitle").find("tr.header td");
                    $(this.Element).find("tr.footer").eq(0).find("td").each(function (i, e) {
                        tdHead.eq(i).css("width", $(e).outerWidth(true));
                    });
                }
            }
        },

        _Insertrow: function (nowrow) {
            var insertnum = parseInt($(nowrow).attr("data-row"));
            var rows = $(this.Element).find("tr.rows");
            for (var i = 0; i < rows.length; i++) {
                var row = rows[i];
                var rownum = parseInt($(row).attr("data-row"));
                if (rownum > insertnum) {
                    rownum = rownum - 1 + 2;
                    $(row).attr("data-row", rownum);
                    if ($(row).find("td:first").html() == rownum - 1)
                        $(row).find("td:first").html(rownum);
                }
            };
            this._AddRow(true, nowrow);
        },

        _Clear: function (e) {
            var that = this;
            $(this.Element).find("tr.rows").each(function (e) {
                that._Deleterow.apply(that, [$(this), true]);
            });
            this.RowCount = 0;
            // 重新计算统计
            var tds = $(this.template).find("td");
            for (var i = 0; i < tds.length; i++) {
                if (this.GetSummaryTd(tds[i])) {
                    this._Summary($(tds[i]).children());
                }
            }
            if ($.MvcSheetUI.MvcRuntime) {
                $.MvcSheetUI.MvcRuntime.init();
            }
            if (this.VirtualPaging)
                this._SetVirtualPagingContainerHeight();
        },

        //虚拟分页 删除，添加行divDataTableContainer高度重新计算
        _SetVirtualPagingContainerHeight: function () {
            var dataTable = this.Element;//主体table
            var dataContainerDiv = this.Element.parentElement;//主体Div,每个子表都是设置的

            var dataTableHeight = $(dataTable).height();
            //var dataContainerDivHeight = this.dataContainerDivHeight;
            var dataContainerDivHeight = dataTableHeight;
            this.trHeight = dataContainerDivHeight - (this.trHeight == undefined ? this.deafaultTableHeight : this.trHeight);
            dataContainerDivHeight = dataTableHeight > this.trHeight * 10 && this.trHeight > 0 ? this.trHeight * 10 : dataTableHeight;
            //dataContainerDivHeight = this.trHeight > 0 ? dataContainerDivHeight:this.trHeight*10;

            $(dataContainerDiv).css("height", dataContainerDivHeight);
            $(dataContainerDiv.parentElement).css("height", 100 + dataContainerDivHeight);//100是给表头预留的位置
            this.trHeight = dataTableHeight;
        },

        _Export: function (e) {
            var columnNames = {};
            if (this.VirtualPaging) {
                var tds = $(this.Element).parent().parent().find("tr.header").find("td");
            } else {
                var tds = $(this.Element).find("tr.header").find("td");
            }
            //var tds = $(this.Element).find("tr.header").find("td");
            for (var i = 0; i < tds.length; i++) {
                var datafield = $(tds[i]).attr("data-field");
                if (datafield) {
                    var dataitem = $.MvcSheetUI.GetSheetDataItem(datafield, 1);
                    if (dataitem) {
                        columnNames[datafield.split(".")[1]] = dataitem.N;
                    }
                }
            }
            var datatab = this.GetValue(true);

            if (this.VirtualPaging) {
                var LoadData = this.pageIndex * this.loadNum;
                var AllValue = this.V.R;
                if (LoadData < AllValue.length && LoadData != 0) {
                    var notShowData = this.GetNotShowData(LoadData, "Export");
                    if (notShowData.length > 0) {
                        for (var i = 0; i < notShowData.length; i++) {
                            datatab.push(notShowData[i]);
                        }
                    }
                }
            }

            $.MvcSheet.PostSheet({"Command": "Exportexcel", "Param": JSON.stringify([datatab, columnNames])},
                function (data) {
                    if (data)
                    //数据格式是json  UPDATE BY ZHANGJ
                        window.location.href = data.FileUrl;
                }, null, true);
        },

        _Import: function (e) {
            var thisElement = this;
            if (!$('#importExcel_' + thisElement.ButtonId).val()) {
                alert("未选择任何文件！");
                return;
            }
            // console.log(e, 'e')
            $.ajaxFileUpload({
                url: $.MvcSheetUI.PortalRoot + "/ImportHandler/ImportHandler",
                secureuri: false,
                fileElementId: "importExcel_" + this.ButtonId,
                // dataType: "json",
                type: "post",
                success: function (data, status) {
                    $('#importExcel_' + thisElement.ButtonId).val('');
                    // console.log(data, status)
                    var str = $(data).find("body").text();
                    var json = $.parseJSON(str);
                    if (json.sucess && json.data.length > 0) {
                        thisElement._ImportInit.apply(thisElement, [json.data]);
                    } else {
                        alert($.Lang(json.message));
                    }
                },
                error: function (e) {
                    console.log(e);
                }
            });
        },

        _ImportInit: function (data) {
            this._Clear();
            for (var i = 0; i < data.length; i++) {
                var row = data[i];
                //if (i > 0) {
                this._AddRow();
                //}
                var rowdata = row.split(';');
                var tds = $(this.newRow).find("td");
                var k = 0;
                for (var y = 0; y < tds.length; y++) {
                    if ($(tds[y]).find("[data-datafield]") && $(tds[y]).find("[data-datafield]").length > 0
                        && $(tds[y]).is(':visible')) {
                        if (rowdata[k] != undefined) {
                            $(tds[y]).find("[data-datafield]").SheetUIManager(i + 1).SetValue(rowdata[k]);
                            this._Summary($(tds[y]).find("[data-datafield]"));
                            k++;
                        }
                    }
                }

                //导入后重新计算pageIndex，防止在加载数据
                if (this.VirtualPaging) {
                    this.pageIndex = Math.ceil(data.length / this.loadNum);
                }
            }
        },

        GetDefaultRow: function (trvalue) {
            var tds = $(this.Element).parent().parent().find("tr.header").find("td");
            trvalue.push("ObjectID");
            for (var j = 0; j < tds.length; j++) {
                var datafield = $(tds[j]).attr("data-field");
                if (datafield) {
                    var tdName = datafield.split(".")[1];
                    trvalue.push(tdName);
                }
            }
            return trvalue;
        },

        GetNotShowData: function (LoadData, callmode) {
            var value = [];
            var AllValue = this.V.R;
            if (LoadData < AllValue.length) {
                var parentDatafield = $(this.Element).attr("data-datafield");
                var tdTitle = [];
                tdTitle = this.GetDefaultRow(tdTitle);
                //循环行
                for (var i = LoadData; i < AllValue.length; i++) {
                    var rowvalue = {};
                    var data = AllValue[i].DataItems;
                    //循环列
                    for (var item in tdTitle) {
                        var itemkey = tdTitle[item];
                        if (data[parentDatafield + "." + itemkey] == undefined) continue;
                        if (data[parentDatafield + "." + itemkey].L == 24) {//附件
                            if (callmode == "save") {
                                var attach = data[parentDatafield + "." + itemkey].V;
                                var rowAttachment = {};
                                var AttachmentIds = "";
                                var DelAttachmentIds = "";
                                if (attach.length > 0) {
                                    for (var j = 0; j < attach.length; j++) {
                                        AttachmentIds = AttachmentIds + attach[j].Code + ";";
                                    }
                                }
                                rowAttachment["AttachmentIds"] = AttachmentIds;
                                rowAttachment["DelAttachmentIds"] = DelAttachmentIds;

                                rowvalue[itemkey] = rowAttachment;
                            }
                            else {
                                rowvalue[itemkey] = "";
                            }

                        }
                        else if (data[parentDatafield + "." + itemkey].L == 26) {//单人参与者
                            var itemvalue;
                            itemvalue = data[parentDatafield + "." + itemkey].V == null ? "" : data[parentDatafield + "." + itemkey].V;//.Code;
                            rowvalue[itemkey] = itemvalue;
                        }
                        else if (data[parentDatafield + "." + itemkey].L == 27) {//多人参与者
                            var itemvalue = new Array();
                            var users = data[parentDatafield + "." + itemkey].V;
                            if (users == "" || users == null) {
                                rowvalue[itemkey] = "";
                            }
                            else if (users.length > 0) {
                                for (var j = 0; j < users.length; j++) {
                                    var code = users[j].Code;
                                    itemvalue.push(code);
                                }
                                rowvalue[itemkey] = itemvalue;
                            }

                        }
                        else {
                            var itemvalue;
                            itemvalue = data[parentDatafield + "." + itemkey].V == null ? "" : data[parentDatafield + "." + itemkey].V;
                            rowvalue[itemkey] = itemvalue;
                        }
                    }
                    value.push(rowvalue);
                }
            }
            return value;
        },

        TransferValue: function () {
            if (this.originateValue == null) return;
            //TODO:将this.SheetInfo.BizObject.DataItems[this.DataFiled].V转为this.originateValue
            var sheetDataValue = this.SheetInfo.BizObject.DataItems[this.DataField].V;
            var originateValue = this.originateValue;

            var transferRowValue = [];
            for (var i = 0; i < sheetDataValue.length; i++) {
                transferRowValue.push(JSON.parse(JSON.stringify(this.originateValue.R[0])));
            }

            for (var i = 0; i < sheetDataValue.length; i++) {
                var oldRoeValue = sheetDataValue[i];
                for (var column in transferRowValue[0].DataItems) {
                    var shortColumn = column.split(".")[1];
                    transferRowValue[i].DataItems[column].V = oldRoeValue[shortColumn];
                    delete transferRowValue[i].DataItems[column].BizObjectID;
                    delete transferRowValue[i].DataItems[column].RoeNum;
                }
            }
            var newStructure = {};
            newStructure["R"] = transferRowValue;
            newStructure["T"] = originateValue.T;
            this.SheetInfo.BizObject.DataItems[this.DataField].V = newStructure;
        },

        SaveDataField: function () {
            if (this.originateValue == null)
                this.originateValue = this.SheetInfo.BizObject.DataItems[this.DataField].V;

            var result = {};
            if (!this.Visiable || !this.Editable) return result;
            result[this.DataField] = this.SheetInfo.BizObject.DataItems[this.DataField];
            if (!result[this.DataField]) {
                alert(SheetLanguages.Current.DataItemNotExists + ":" + this.DataField);
                return {};
            }
            var value = this.GetValue();

            if (this.VirtualPaging) {
                var LoadData = this.pageIndex * this.loadNum;
                var AllValue = this.V.R;
                if (LoadData < AllValue.length && LoadData != 0) {
                    var notShowData = this.GetNotShowData(LoadData, "save");
                    if (notShowData.length > 0) {
                        for (var i = 0; i < notShowData.length; i++) {
                            value.push(notShowData[i]);
                        }
                    }
                }
            }
            if (result[this.DataField].V != value) {
                var T = result[this.DataField].V.T;
                result[this.DataField].V = value;

                result[this.DataField].V.T = T;
                return result;
            }
            return {};
        }

    });
})(jQuery);
// Label控件
(function ($) {
    // 控件实例执行方式
    $.fn.SheetHandwrittenSignature = function () {
        return $.MvcSheetUI.Run.call(this, "SheetHandwrittenSignature", arguments);
    };

    // 控件定义
    $.MvcSheetUI.Controls.SheetHandwrittenSignature = function (element, options, sheetInfo) {
        _PORTALROOT_GLOBAL ? _PORTALROOT_GLOBAL : '/Portal';
        this.SheetAttachmentHandler = _PORTALROOT_GLOBAL + "/FileUpload/UploadFile";
        $.MvcSheetUI.Controls.SheetHandwrittenSignature.Base.constructor.call(this, element, options, sheetInfo);
        this.sigId = '';
        this.AddAttachments = {};
        this.UploadAttachments = {};
        this.SchemaCode = "";
        this.histImg = [];
    };

    // 继承事件
    $.MvcSheetUI.Controls.SheetHandwrittenSignature.Inherit($.MvcSheetUI.IControl, {
        Render: function () {
            // console.log(this, 'V---')
            if (!this.Visiable) { // 不可见
                this.Element.style.display = "none";
                return;
            }
            if (this.V && this.V.length > 0) { // 有历史记录
                this.InitHistorySig();
                $(this.Element).css({"display": "flex", 'justify-content': 'center'});
            } else {
                if (this.Editable) {
                    $(this.Element).html("手写签名暂只支持移动端");
                } else {
                    $(this.Element).html("无签名权限");
                }
                $(this.Element).css({"display": "block", 'line-height': "34px", "color": '#999'});
            }
            // pc 去掉必填
            this.Required = false;
        },

        RenderMobile: function () {
            if (!this.Visiable) {
                this.Element.style.display = "none";
                return;
            }
            var img = $('<img src="" alt="" class="" id="sig-img" style="width: 100%;height: 100%;" />');
            var close = $('<i class="icon ion-close-circled"" id="close"></i>').css({
                "position": 'absolute',
                "right": "0",
                "top": '0',
                "font-size": '20px',
                'z-index': '100'
            });
            var rotate = $('<i class="rotate icon ion-arrow-return-left"></i>').css({
                "position": 'absolute',
                "right": "0",
                "bottom": '0',
                "font-size": '20px',
                'z-index': '100'
            });
            //没有这个属性，宽度无效
            var that = this;
            var span = $("<span id='click-sign'>点击后书写签名</span>").css('line-height', "32px");
            $(that.Element).css({
                "display": "block",
                "border": '0',
                'width': '120px',
                'height': '30px',
                'position': 'relative'
            });
            if (that.Editable) {
                $(that.Element).append(span);
                $(that.Element).append(img);
                $(that.Element).append(close);
                $(that.Element).append(rotate);
                img.css('display', 'none');
                close.css('display', 'none');
                rotate.css('display', 'none');
            } else {
                this.Element.style.display = "none";
            }
            if (this.V && this.V.length > 0) {
                this.InitHistorySig()
            } else {
                img.css("display", "none");
                if (this.Editable) {
                    $(this.Element).append(span);
                } else {
                    span.html('暂无签名');
                    $(this.Element).append(span);
                }
            }

            // 绑定焦点事件
            if (this.Editable) {
                var ionic = $.MvcSheetUI.IonicFramework;
                var that = this;
                that.SheetAttachmentHandler += "?IsMobile=" + that.IsMobile + "&" + "SchemaCode=" + encodeURI(that.SchemaCode) + "&fileid=";
                $(this.Element).unbind("click.SheetHandwrittenSignature").bind("click.SheetHandwrittenSignature", [this], function (e) {
                    ionic.$ionicModal.fromTemplateUrl('Mobile/form/templates/signature.html', {
                        scope: ionic.$scope
                    }).then(function (popover) {
                        popover.show();
                        // console.log(that, 'that')
                        var canvas = document.querySelector("canvas");
                        var width = $("#signature-canvas").width();
                        var height = $("#signature-canvas").height();
                        canvas.width = width;
                        canvas.height = height;

                        var signaturePad = new SignaturePad(canvas, {
                            backgroundColor: 'rgb(255, 255, 255)'
                        });

                        var getUrlParam = function (name) {
                            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                            var r = window.location.search.substr(1).match(reg);
                            if (r != null) return unescape(r[2]);
                            return null;
                        };

                        popover.scope.submit = function () {
                            popover.hide();
                            var data = signaturePad.toDataURL("image/jpeg"); // save image as JPEG
                            popover.remove();
                            $(that.Element).find('#sig-img').attr('src', data);
                            $(that.Element).find('#click-sign').remove();
                            $(that.Element).css({'height': "120px", "width": "120px"});
                            $(that.Element).find('#close').css('display', 'block');
                            $(that.Element).find('.rotate').css('display', 'block');
                            $(that.Element).find('#sig-img').css('display', 'block');
                            //调用
                            var blob = dataURLtoBlob(data);
                            var files = blobToFile(blob, '签名');
                            var fileid = $.MvcSheetUI.NewGuid(); // 文件id
                            var SheetCode = getUrlParam("SheetCode"); // SheetCode

                            that.AddAttachments[fileid] = {
                                fileid: fileid,
                                file: files,
                                ContentType: files.type,
                                xhr: new XMLHttpRequest(),
                                state: 0//0:未上传完，1:已上传完,100:失败
                            };
                            UploadFile(fileid, files, SheetCode);
                        };

                        function dataURLtoBlob(dataurl) {
                            var arr = dataurl.split(','),
                                mime = arr[0].match(/:(.*?);/)[1],
                                bstr = atob(arr[1]),
                                n = bstr.length,
                                u8arr = new Uint8Array(n);
                            while (n--) {
                                u8arr[n] = bstr.charCodeAt(n);
                            }
                            return new Blob([u8arr], {type: mime});
                        }

                        //将blob转换为file
                        function blobToFile(theBlob, fileName) {
                            theBlob.lastModifiedDate = new Date();
                            theBlob.name = fileName;
                            return theBlob;
                        }

                        popover.scope.clear = function () {
                            signaturePad.clear();
                        };

                        popover.scope.hide = function () {
                            popover.hide();
                            popover.remove();
                        };

                        function UploadFile(fileid, files, SheetCode) {
                            var fd = new FormData();
                            fd.append('fileToUpload', that.AddAttachments[fileid].file);
                            fd.append('MaxSize', 10 * 1024);

                            var xhr = that.AddAttachments[fileid].xhr;
                            xhr.context = that;
                            xhr.files = files;
                            xhr.upload.fileid = fileid;
                            xhr.abort.fileid = fileid;

                            xhr.upload.addEventListener('progress', UploadProgress, false);
                            xhr.addEventListener('load', UploadComplete, false);
                            xhr.addEventListener('error', UploadFailed, false);
                            xhr.addEventListener('abort', UploadCanceled, false);

                            xhr.open('POST', that.SheetAttachmentHandler + fileid + "&SheetCode=" + SheetCode);
                            xhr.send(fd);
                        }

                        function UploadProgress(evt) {
                            // console.log(evt,'UploadProgress')
                        }

                        function UploadComplete(evt) {
                            if (evt.target.status === 200) {
                                var resultObj = eval('(' + evt.target.responseText + ')');
                                var fileid = resultObj.FileId;
                                that.sigId = resultObj.AttachmentId;
                                this.context.AddAttachments[fileid].AttachmentId = resultObj.AttachmentId;
                                this.context.AddAttachments[fileid].state = 1;
                                if (this.context.V && this.context.V.length > 0) {
                                    for (var i = 0; i < this.context.V.length; i++) {
                                        if (this.context.V[i].approval == -1) {
                                            this.context.V[i].handSignId = resultObj.AttachmentId
                                        }
                                    }
                                }
                            } else {
                                UploadFailed(evt);
                            }
                        }

                        function UploadFailed(evt) {
                            alert('上传失败')
                        }

                        function UploadCanceled() {
                            console.log('上传')
                        }
                    })
                });
            }

            $(that.Element).find("#close").click(function (e) {
                e.stopPropagation();
                var currentId = $(this).attr("data-id");
                // console.log(that.AddAttachments, 'AddAttachments')
                if (currentId) { // 如果是编辑已保存的
                    if (that.V && that.V.length > 0) {
                        for (var i = 0; i < that.V.length; i++) {
                            if (that.V[i].handSignId == currentId) {
                                that.V[i].handSignId = ''
                            }
                        }
                    }
                } else if (that.AddAttachments) { //如果是删除已上传的
                    that.AddAttachments = {}
                }
                // console.log(that.V,'that.V')
                img.attr('src', '');
                img.css("display", "none");
                $(that.Element).css({
                    "display": "block",
                    'height': "30px",
                    "width": "120px",
                    "position": 'relative',
                    "border": '0'
                });
                close.css('display', 'none');
                rotate.css('display', 'none');
                $(that.Element).append(span);
            });

            var current = 0;
            $(that.Element).find(".rotate").click(function (e) {
                console.log(that.AddAttachments,'AddAttachments')
                e.stopPropagation();
                current = (current + 90) % 360;
                that.AddAttachments.rotate = -current;
                $(that.Element).find("img").css('transform', 'rotate(' + -current + 'deg)')
            })
        },

        //添加历史签名
        InitHistorySig: function () {
            var that = this;
            if (that.V && that.V.length > 0) {
                for (var i = 0; i < that.V.length; i++) {
                    var sigObject = that.V[i];
                    if (sigObject.approval !== undefined && sigObject.approval !== -1) {
                        that.AddCommentItem(sigObject, i); // 添加记录
                    } else {
                        if (that.IsMobile) {
                            if (sigObject.isMySignature && sigObject.approval == -1) {
                                that.addEditor(sigObject); // 添加编辑
                            }
                        } else {
                            that.addNoEditor(); // 添加不可编辑
                        }
                    }
                }
            }
        },

        //添加不可编辑
        addNoEditor: function () {
            $(this.Element).html("手写签名暂只支持移动端");
            $(this.Element).css({"display": "block", 'line-height': "34px", "color": '#999'});
        },
        //添加编辑
        addEditor: function (sigObject) {
            if (!sigObject.handSignId) {
                return
            }
            var that = this;
            var downUrl = _PORTALROOT_GLOBAL + "/ReadAttachment/Read?BizObjectSchemaCode=" + encodeURI(this.SchemaCode) + "&BizObjectID=" + this.SheetInfo.BizObjectID + "&AttachmentID=" + sigObject.handSignId + '&OpenMethod=0&IsMobile=True'
            $.ajax({
                async: false,
                type: "get",
                url: downUrl,
                cache: false,
                dataType: "json",
                success: function (data) {
                    if (data.success) {
                        $(that.Element).find('#sig-img').attr('src', data.url);
                        $(that.Element).find('#click-sign').remove();
                        $(that.Element).find('#close').css('display', 'block');
                        $(that.Element).find('#close').attr('data-id', sigObject.handSignId);
                        $(that.Element).find('#sig-img').css('display', 'block');
                        $(that.Element).find('#sig-img').css('transform', 'rotate(' + sigObject.direction + 'deg)');
                        $(that.Element).css({
                            "display": "block",
                            'height': "120px",
                            "width": "120px",
                            "position": 'relative',
                            "border": '0'
                        });
                    }
                }
            })
        },

        //添加他人历史
        AddCommentItem: function (commentObject, index) {
            index = index + 1;
            var that = this;
            var img = $('<img src="" alt=""  class="sig-img" style="width: 100%;height: 100%" />');
            var span = $('<span>' + index + '</span>');
            var imgbox = $('<p class="img-box"  style="width: 80px;height: 80px" ></p>');
            var downUrl = _PORTALROOT_GLOBAL + "/ReadAttachment/Read?BizObjectSchemaCode=" + encodeURI(this.SchemaCode) + "&BizObjectID=" + this.SheetInfo.BizObjectID + "&AttachmentID=" + commentObject.handSignId + '&OpenMethod=0&IsMobile=True'
            $.ajax({
                async: false,
                type: "get",
                url: downUrl,
                cache: false,
                dataType: "json",
                success: function (data) {
                    if (data.success) {
                        // console.log(data, 'data');
                        img.attr('src', data.url);
                        imgbox.append(img);
                        img.css('transform', 'rotate(' + commentObject.direction + 'deg)')
                        // imgbox.append(span);
                        if (that.IsMobile) {
                            $(that.Element).parent().prepend(imgbox);
                        } else {
                            $(that.Element).append(imgbox);
                        }
                    }
                }
            })
        },

        GetValue: function () {
            if (this.IsMobile) {
                var AttachmentIds = ""; //附件id
                var isNew = true;
                var rotate = 0;
                var editorId = '';//编辑id
                // console.log(this.AddAttachments,'AddAttachments')
                //如果是支持Html5的话，得判断是否已经上传完整，需要等待
                for (var key in this.AddAttachments) {
                    if (this.AddAttachments[key].state == 1 && this.AddAttachments[key].AttachmentId) {
                        AttachmentIds += this.AddAttachments[key].AttachmentId;
                        if(this.AddAttachments.rotate) {
                            rotate = this.AddAttachments.rotate;
                        }
                    }
                }
                if (this.V && this.V.length > 0) {
                    for (var i = 0; i < this.V.length; i++) {
                        if (this.V[i].id && this.V[i].approval == -1) {
                            isNew = false;
                            editorId = this.V[i].id;
                            AttachmentIds = this.V[i].handSignId;
                        }
                    }
                }
                var obj = {
                    Id: editorId,
                    HandSignId: AttachmentIds,
                    IsNewSignId: isNew,
                    Direction: rotate
                };
                console.log(obj,'obj');
                return obj;
            } else {
                return ''
            }
        },

        //返回数据值
        SaveDataField: function () {
            var that = this;
            if (this.IsMobile) {
                var result = {};
                if (!this.Visiable || !this.Editable) return result;
                result[this.DataField] = $.MvcSheetUI.GetSheetDataItem(this.DataField);// this.DataItem;

                if (!result[this.DataField]) {
                    if (this.DataField.indexOf(".") == -1) {
                        alert(SheetLanguages.Current.DataItemNotExists + ":" + this.DataField);
                    }
                    return {};
                }
                console.log(that.GetValue(), 'that.GetValue()')
                // return
                if (result[this.DataField].V != $(this.Element).html()) {
                    result[this.DataField].V = that.GetValue()
                    return result;
                }
                return {};
            }
        }
    });
})(jQuery);
// SheetHiddenField控件

; (function ($) {
    //控件执行
    $.fn.SheetHiddenField = function () {
        return $.MvcSheetUI.Run.call(this, "SheetHiddenField", arguments);
    };

    $.MvcSheetUI.Controls.SheetHiddenField = function (element, options, sheetInfo) {
        $.MvcSheetUI.Controls.SheetHiddenField.Base.constructor.call(this, element, options, sheetInfo);
    };

    $.MvcSheetUI.Controls.SheetHiddenField.Inherit($.MvcSheetUI.IControl, {
        Render: function () {
            var $element = $(this.Element);
            var hiddenFields = $.MvcSheetUI.SheetInfo.HiddenFields;
            if (hiddenFields) {
                for (var key in hiddenFields) {
                    if ($element.attr("id") == key) {
                        $element.val(hiddenFields[key]);
                        break;
                    }
                }
            }
        },
        // 返回数据值,该值需要和其他的区别处理
        SaveDataField: function () {
            var $element = $(this.Element);
            var hiddenFields = $.MvcSheetUI.SheetInfo.HiddenFields;
            if (!hiddenFields || !hiddenFields[$element.attr("id")]) {
                $.MvcSheetUI.HiddenFields[$element.attr("id")] = $element.val();
            }
            else if (hiddenFields[$element.attr("id")] != $element.val()) {
                $.MvcSheetUI.HiddenFields[$element.attr("id")] = $element.val();
            }
            return {};
        }
    });
})(jQuery);
// SheetHyperLink控件

; (function ($) {

    //控件执行
    $.fn.SheetHyperLink = function () {
        return $.MvcSheetUI.Run.call(this, "SheetHyperLink", arguments);
    };

    $.MvcSheetUI.Controls.SheetHyperLink = function (element, options, sheetInfo) {
        $.MvcSheetUI.Controls.SheetHyperLink.Base.constructor.call(this, element, options, sheetInfo);
    };

    $.MvcSheetUI.Controls.SheetHyperLink.Inherit($.MvcSheetUI.IControl, {
        Render: function () {
            var $element = $(this.Element);

            //是否可见
            if (!this.Visiable) {
                $element.hide();
                return;
            }

            //text
            var text = this.Text;
            //update by ouyangsk 当text为空时，将text设置为href值
            if (!text) {
            	text = this.NavigateUrl;
            }
            if (this.TextDataField) {
                text = $.MvcSheetUI.GetControlValue(this.TextDataField, this.RowNum);
            }
            $element.text(text);
            $element.addClass("SheetHyperLink").addClass("printHidden");
            $("<span></span>").addClass("viewHidden").text(text).insertAfter($element);

            //href
            var href = this.NavigateUrl;
            if (this.NavigateUrlDataField) {
                href = $.MvcSheetUI.GetControlValue(this.NavigateUrlDataField, this.RowNum);
            }
            if (href && this.IsMobile) {
                if (href.indexOf("?") != -1) { href += "&UC=true"; }
                else { href += "?UC=true"; }
                $element.attr("href", href);
            }
            if (!this.IsMobile) {
            	//update by ouyangsk 当href为空时，将href设置成#，点击链接页不跳转
                if (href) {
                	$element.attr("target", "_blank");
                	$element.attr("href", href);
                } else {
                	$element.removeAttr("target");
                	$element.removeAttr("href");
                }
            }
        },
        RenderMobile: function () {
            this.Render();
        },
        //链接不允许输入,永不校验
        Validate: function () {
            return true;
        },
        //返回数据值
        SaveDataField: function () {
            result = {};
            result[this.DataField] = this.DataItem;
            var href = this.NavigateUrl;
            if (this.NavigateUrlDataField) {
                href = $.MvcSheetUI.GetControlValue(this.NavigateUrlDataField, this.RowNum);
            }
            result[this.DataField].V = href;
            return result;
        },
        //获取数据值
        GetValue: function () {
            return this.NavigateUrl;
        }
    });
})(jQuery);
// SheetInstancePrioritySelector控件
(function ($) {
    //控件执行
    $.fn.SheetInstancePrioritySelector = function () {
        return $.MvcSheetUI.Run.call(this, "SheetInstancePrioritySelector", arguments);
    };

    $.MvcSheetUI.Controls.SheetInstancePrioritySelector = function (element, options, sheetInfo) {
        $.MvcSheetUI.Controls.SheetInstancePrioritySelector.Base.constructor.call(this, element, options, sheetInfo);
    };

    $.MvcSheetUI.Controls.SheetInstancePrioritySelector.Inherit($.MvcSheetUI.IControl, {
        Render: function () {
            var $element = $(this.Element);
            var that = this;
            //不可见返回
            if (!this.Visiable) {
                $element.hide();
                return;
            }
			// 查看痕迹
			if (this.TrackVisiable && !this.Originate && this.DataField.indexOf(".") == -1) { this.RenderDataTrackLink(); }
            //绑定change事件
            $element.unbind("change.SheetInstancePrioritySelector").bind("change.SheetInstancePrioritySelector", function () {
                if ($.isFunction(that.OnChange)) {
                    that.OnChange.apply(this);
                }
                else {
                    (new Function(that.OnChange)).apply(this);
                }
            });

            var priorities = $.MvcSheetUI.SheetInfo.Priorities;
            if (priorities) {
                $element.empty();
                for (var key in priorities) {
                    $element.append("<option value='" + key + "'>" + priorities[key] + "</option>");
                    if (this.IsMobile) {
                        this.AddMobileItem(key, priorities[key], false);
                    }
                }
                this.V = this.V || this.DefaultValue;
                if (this.V && this.V != "") {
                    $element.val(this.V);
                }
                else {
                    $element.val("Normal");
                }
                //不可编辑
                if (!this.Editable) {
                    $element.after("<label style='width:100%;'>" + $element.children("option:selected").text() + "</label>");
                    $element.hide();
                }
                if (this.IsMobile && this.Editable)
                    this.ionicInit($.MvcSheetUI.IonicFramework);
            }
        },
        RenderMobile: function () {
            //可编辑
            this.MobileOptions = [];
            if (this.Editable) {
                this.constructor.Base.RenderMobile.apply(this);
                this.pupIcon = $("<i class='icon ion-ios-arrow-right'></i>").insertAfter(this.Mask);
                $(this.Element).closest("div.item").addClass("item-icon-right");
                $(this.Element).hide();
            }
            else {
                this.Render();
            }
        },

        ionicInit: function (ionic) {
            var that = this;
            $(this.Element.parentElement.parentElement).unbind('click.showChoice').bind('click.showChoice', function (e) {
                ionic.$ionicModal.fromTemplateUrl('Mobile/form/templates/radio_popover.html', {
                    scope: ionic.$scope
                }).then(function (popover) {
                    console.log(popover);
                    ionic.$scope.popover = popover;
                    popover.scope.RadioListDisplay = that.MobileOptions;
                    popover.scope.RadioListValue = that.GetValue();
                    popover.show();
                    popover.scope.hide = function() {
                        popover.hide();
                    };
                    popover.scope.clickRadio = function (value, text) {
                        that.SetValue(value);
                        $(that.Mask).html(text);
                        that.Validate();
                    };
                    popover.scope.searchFocus = false;
                    popover.scope.searchAnimate = function () {
                        popover.scope.searchFocus = !popover.scope.searchFocus;
                    };
                    popover.scope.searChange = function () {
                        popover.scope.searchNum = $(".active .popover .list").children('label').length;
                    };
                });
                return;
            });
            if (that.IsMobile) {
                var text = that.GetText();
                if (that.Editable) {
                    that.Mask.html(text);
                    $(that.Mask).css({ 'color': '#2c3038' });
                }
                else {
                    //移动端不可编辑
                    $(that.Element).html(text);
                }
            }
        },
        AddMobileItem: function (value, text, isDefault) {
            var MobileOption = {
                DataField: this.DataField,
                Value: value,
                Text: text
            };
            this.MobileOptions.push(MobileOption);
        },
        GetText: function () {
            return $(this.Element).children("option:selected").text();
        },
        //返回数据值
        SaveDataField: function () {
            var result = {};
            if (!this.Visiable || !this.Editable) return result;
            result[this.DataField] = this.SheetInfo.BizObject.DataItems[this.DataField];
            if (!result[this.DataField]) {
                alert(SheetLanguages.Current.DataItemNotExists + ":" + this.DataField);
                return {};
            }
            //update by luwei : 总是设置优先级
            $.MvcSheetUI.Priority = $(this.Element).val();
            
            if (result[this.DataField].V != $(this.Element).val()) {
                result[this.DataField].V = $(this.Element).val();
                return result;
            }
            return {};
        }
    });
})(jQuery);
// Label控件
(function ($) {

    // 控件实例执行方式
    $.fn.SheetLabel = function () {
        return $.MvcSheetUI.Run.call(this, "SheetLabel", arguments);
    };

    // 控件定义
    $.MvcSheetUI.Controls.SheetLabel = function (element, options, sheetInfo) {
        $.MvcSheetUI.Controls.SheetLabel.Base.constructor.call(this, element, options, sheetInfo);
    };

    // 继承事件
    $.MvcSheetUI.Controls.SheetLabel.Inherit($.MvcSheetUI.IControl, {
        Render: function () {
            if (!this.Visiable) {
                this.Element.style.display = "none";
                return;
            }
            //没有这个属性，宽度无效
            $(this.Element).css("display", "block")

            if (this.BindType.toLowerCase() == this.BindTypeEnum.OnlyData) {
                var val = this.V;

                var lbl = $(this.Element);
                if (val && (val = $.trim(val))) {
                    var strs = val.split("\n");
                    $(strs).each(function (i) {
                        if (i > 0) {
                            lbl.append("<br />");
                        }
                        lbl.text(this.toString());
                        //lbl.append($("<span></span>").text(this.toString()));
                    });
                }
                else {
                    lbl.text("");
                }
            }
            else if (!$(this.Element).text()) {
                $(this.Element).text(this.Text || this.N || "");
            }
            else if (!$(this.Element).text().trim()) {
                if (this.DataField) {
                    $(this.Element).text(this.DataField);
                }
            }
            // 绑定焦点事件
            if (this.OnClick) {
                $(this.Element).unbind("click.SheetLabel").bind("click.SheetLabel", [this], function (e) {
                    var that = e.data[0];
                    (new Function(that.OnClick)).apply(that.Element, arguments);
                });
            }
        },
        GetValue: function () {
            return $(this.Element).text() || this.DataField;
        },
        //返回数据值
        SaveDataField: function () {
            var result = {};
            if (!this.Visiable || !this.Editable
                || this.BindType.toLowerCase() == this.BindTypeEnum.OnlyVisiable) return result;
            result[this.DataField] = $.MvcSheetUI.GetSheetDataItem(this.DataField);// this.DataItem;

            if (!result[this.DataField]) {
                if (this.DataField.indexOf(".") == -1) { alert(SheetLanguages.Current.DataItemNotExists + ":" + this.DataField); }
                return {};
            }
            if (result[this.DataField].V != $(this.Element).html()) {
                result[this.DataField].V = $(this.Element).html();
                return result;
            }
            return {};
        }
    });
})(jQuery);
// SheetOffice控件
(function ($) {
    //控件执行
    $.fn.SheetOffice = function () {
        return $.MvcSheetUI.Run.call(this, "SheetOffice", arguments);
    };

    // 构造函数
    $.MvcSheetUI.Controls.SheetOffice = function (element, options, sheetInfo) {
        this.NTKO = null; // NTKO控件对象
        $.MvcSheetUI.Controls.SheetOffice.Base.constructor.call(this, element, options, sheetInfo);
    };

    // 继承及控件实现
    $.MvcSheetUI.Controls.SheetOffice.Inherit($.MvcSheetUI.IControl, {
        Render: function () {
            // <div id="xxx" SheetType="SheetOffice" DataField=""/>
            // TODO:构造 NTKO 的控件输出
            // TODO:如果是发起模式，那么加载Template模板
            // TODO:如果是非发起模式，那么从  URL 加载模板，URL地址为  Office/WordOpen.aspx
            // TODO:根据配置功能，显示不同的按钮
            /*
            // wordObject 是配置在活动节点的属性上的，读到这个属性，设置不同的按钮权限
            var wordObject = {
                ReadOnly: false,   // 是否只读
                Print: false,      // 是否允许打印
                Sign: false,       // 是否允许手写签名
                Stamp: false,      // 是否允许盖章
                Template: false,   // 是否允许套用模板
                Mark: false,       // 打开文档时是否处于修订状态
                Accept: false,     // 是否接受修订状态
                PDF: false         // 是否允许保存PDF
            };
            // 例如：设置 Mark:true,那么设置文档是修订痕迹状态,如果
            */
            if (typeof (wordObject) == "undefined") {
                this.wordObject = {
                    ReadOnly: false,   // 是否只读
                    Print: false,      // 是否允许打印
                    Sign: false,       // 是否允许手写签名
                    Stamp: false,      // 是否允许盖章
                    Template: false,   // 是否允许套用模板
                    Mark: false,       // 打开文档时是否处于修订状态
                    Accept: false,     // 是否接受修订状态
                    PDF: false         // 是否允许保存PDF
                };
            }
            else {
                this.wordObject = wordObject;
            }
            //if (typeof (bookmarks) != undefined)
            //    this.bookmarks = bookmarks;
            var table = $("<table border='0' style='text-align: center; width: 100%'></table>");
            var objectNtko = $("<object id='TANGER_OCX' classid='clsid:" + this.ClassID + "' codebase='" + this.CABPath + "#version=" + this.ProductVersion + "' width='" + this.OfficeWidth + "' height='" + this.OfficeHeight + "'><param name='ProductCaption' value='" + this.ProductCaption + "'><param name='ProductKey' value='" + this.ProductKey + "'></object>");
            $(table).append($("<tr></tr>").append($("<td style='height: " + this.OfficeHeight + ";'></td>").append(objectNtko)));
            $(this.Element).append(table);

            var actionTr = $("<tr></tr>");
            var pdfPrint = $("<td><input type='button' value='" + SheetLanguages.Current.CreatePDF + "' ></td>");
            var viewPDF = $("<td><input type='button' value='" + SheetLanguages.Current.ViewPDF + "' ></td>");
            var addSign = $("<td><input type='button' value='" + SheetLanguages.Current.AddESP + "' ></td>");
            var addTemplate = $("<td><input type='button' value='" + SheetLanguages.Current.AddTemplate + "' ></td>");
            $(actionTr).append($(pdfPrint)).append($(viewPDF)).append($(addSign)).append($(addTemplate));

            if (!this.wordObject.PDF) {
                $(pdfPrint).hide();
                $(viewPDF).hide();
            }
            if (!this.wordObject.Stamp) {
                $(addSign).hide();
            }
            if (!this.wordObject.Template) {
                $(addTemplate).hide();
            }

            $(this.Element).before($(actionTr));
            $(pdfPrint).unbind("click").bind("click", [this], function (e) {
                e.data[0].SavePDF();
            });
            $(viewPDF).unbind("click").bind("click", [this], function (e) {
                e.data[0].ViewPDF();
            });
            $(addSign).unbind("click").bind("click", [this], function (e) {
                e.data[0].AddSign();
            });
            $(addTemplate).unbind("click").bind("click", [this], function (e) {
                e.data[0].AddTemplate();
            });

            var that = this;
            setTimeout(function () {
                that.InitOffice();
            }, 1000)
        },
        InitOffice: function () {
            
            this.NTKO = document.getElementById($(this.Element).find("object").attr("id"));
            var right = true;
            try {
                if (this.Originate) {
                    //this.NTKO.OpenFromURL(this.Template);
                    //this.NTKO.BeginOpenFromURL("http://localhost:8020/portal/office/template.doc");
                    this.NTKO.OpenFromURL(this.Template);
                }
                else {
                    try {
                        var strurl = _PORTALROOT_GLOBAL + "/Office/WordOpen.aspx?SchemaCode=" + $.MvcSheetUI.SheetInfo.SchemaCode + "&BizObjectID=" + $.MvcSheetUI.SheetInfo.BizObjectID + "&InstanceID=" + $.MvcSheetUI.SheetInfo.InstanceId + "&dataField=" + this.DataField;
                        this.NTKO.OpenFromURL(strurl);
                    }
                    catch (e) {
                        this.NTKO.OpenFromURL(this.Template);
                    }
                }
            }
            catch (e) {
                right = false;
                alert(SheetLanguages.Current.IE);
            }

            if (right) {
                //
                if (!this.wordObject.ReadOnly) {
                    this.SetReadOnly(!this.Editable);
                }
                else {
                    this.SetReadOnly(this.wordObject.ReadOnly);
                }
                
                this.NTKO.fileprint = this.wordObject.Print;
                this.NTKO.fileprintPreview = this.wordObject.Print;
                this.NTKO.IsNoCopy = false;
            }
        },
        // 查看 PDF 文档
        ViewPDF: function () {
            // TODO:转向查看PDF的URL，当没有保存PDF时，这个URL弹出保存PDF信息、点击确定后自动关闭
            // BizObjectID,PDFDataField
            var strurl = _PORTALROOT_GLOBAL + "/Office/WordOpen.aspx?SchemaCode=" + $.MvcSheetUI.SheetInfo.SchemaCode + "&BizObjectID=" + $.MvcSheetUI.SheetInfo.BizObjectID + "&dataField=" + this.PDFDataField;
            window.open(strurl);
        },
        SetReadOnly: function (readonly) {
            // TODO:设置文档是否为只读模式
            this.NTKO.SetReadOnly(readonly);
        },
        SaveOffice: function () {
            
            // TODO:保存 WORD 文档保存的文件名称为 [流程实例名称].doc，如果流程实例名称为空，那么保存为 BizObjectID.doc,后台实现
            if (!this.NTKO.ActiveDocument.Saved) {
                // 文档被更改才进入保存方法
                // TODO:NTKO使用独立的方法进行保存，调用 ntkoOffice.js 的 saveDocument 方法
                if (this.wordObject.ReadOnly == null || this.wordObject.ReadOnly) return;

                var retHTML = this.NTKO.SaveToURL
                (
                    _PORTALROOT_GLOBAL + "/Office/OfficeService.aspx",  // 保存的文件地址
                    //_PORTALROOT_GLOBAL + "/OfficeService/SaveOfficeAttachment",
                    "UploadFile",  // 设置文件输入域名称,可任选,不与其他<input type=file name=..>的name部分重复即可
                    "Command=SaveDocument&InstanceID=" + $.MvcSheetUI.SheetInfo.InstanceId + "&dataField=" + this.DataField + "&SchemaCode=" + $.MvcSheetUI.SheetInfo.SchemaCode + "&BizObjectID=" + $.MvcSheetUI.SheetInfo.BizObjectID + "&SaveType=Doc",
                    "dd.doc",                                        // 文件名,此处从表单输入获取，也可自定义
                    document.forms[0].id,                                    // 控件的智能提交功能可以允许同时提交选定的表单的所有数据.此处可使用id或者序号
                    false
                ); //此函数会读取从服务器上返回的信息并保存到返回值中。
            }
        },
        SavePDF: function () {
            // TODO:保存PDF
            // NTKO使用独立的方法进行保存，调用 ntkoOffice.js 的 saveAsPDF 方法
            var download = 1;
            var fileName = "fileName" + ".pdf";
            var isPrint, isCopy;
            isPrint = isCopy = (download == "1");
            if (this.NTKO.fileOpen && this.NTKO.IsPDFCreatorInstalled()) {
                this.setSingPrint(true); // 设置印章可以打印
                var result = this.NTKO.PublishAsPDFToURL(_PORTALROOT_GLOBAL + "/Office/OfficeService.aspx", //提交到的url地址
                    "SavePDF", //文件域的id，类似<input type=file id=upLoadFile 中的id
                    "DataField=" + this.PDFDataField + "&Download=" + download + "&FileName=" + encodeURI(fileName) + "&SchemaCode=" + $.MvcSheetUI.SheetInfo.SchemaCode + "&BizObjectID=" + $.MvcSheetUI.SheetInfo.BizObjectID + "&InstanceID=" + $.MvcSheetUI.SheetInfo.InstanceId + "&SaveType=PDF",
                    "abc.pdf",      // 上传文件的名称，类似<input type=file 的value
                    0,              // 与控件一起提交的表单id，也可以是form的序列号，这里应该是0.
                    null,           // sheetname,保存excel的哪个表格
                    false,          // IsShowUI,是否显示保存界面
                    true,           // IsShowMsg,是否显示保存成功信息
                    true,           // IsUseSecurity,是否使用安全特性   false
                    "123",          // OwnerPass,安全密码.可直接传值
                    isPrint,        // IsPermitPrint,是否允许打印
                    isCopy          // IsPermitCopy,是否允许拷贝
                );
                this.setSingPrint(false); // 设置印章不可以打印
                return true;
            }
            else {
                alert(SheetLanguages.Current.PdfNotSave);
                return false;
            }
        },
        AddSign: function () {
            // TODO:加盖印章
            if (this.wordObject.ReadOnly == null || this.wordObject.ReadOnly) {// 只读状态下，先撤销只读，再进行盖章操作
                this.NTKO.SetReadOnly(false);
                this.addServerSign(this.SignUrl, this.SignBookmark, this.SignTop, this.SignLeft, "", this.SignType);
                this.NTKO.SetReadOnly(true);
                this.wordObject.ReadOnly = false;
            }
            else {
                this.addServerSign(this.SignUrl, this.SignBookmark, this.SignTop, this.SignLeft, "", this.SignType);
            }
        },

        setSingPrint: function (printAble) {
            var shapes = this.NTKO.ActiveDocument.shapes;
            for (i = 1; i <= shapes.Count; i++) {
                if (12 == shapes(i).Type) //如果是控件,判断控件类型  			
                {
                    if ("NTKO.SecSignControl".toUpperCase() == shapes(i).OLEFormat.ClassType.toUpperCase()) {
                        // 如果你要删除印章，首先要明确满足什么条件的印章，应该被删除。示例中判断印章序列号满足一定条件，就删除该印章。 					
                        // 其它用于判断的条件可以有：signer，signname，signcomment，signtime等等 					
                        // shapes(i).OLEFormat.object为印章控件对象                                                                               
                        // shapes(i).OLEFormat.object.SetPrintMode(2);//设置印章打印模式
                        if (printAble) {
                            shapes(i).OLEFormat.object.SetPrintMode(2); // 设置印章可以打印
                        }
                        else {
                            shapes(i).OLEFormat.object.SetPrintMode(0); // 设置印章不可以打印
                        }
                    }
                }
            }
        },

        addServerSign: function (signUrl, bookmark, top, left, signDate, type) {
            if (this.NTKO.fileOpen) {
                try {
                    // 设置文档为可写
                    this.NTKO.SetReadOnly(false);
                    // signDate  2010年9月15日
                    // var dayLength = signDate.substring(signDate.indexOf("月") + 1);
                    // if (dayLength.length == 2) left = parseInt(left) + 30;
                    // else if (dayLength.length == 3) left = parseInt(left) + 15;
                    if (this.NTKO.ActiveDocument.BookMarks != null) {
                        if (this.NTKO.ActiveDocument.BookMarks.Exists(bookmark)) {
                            // 存在签发日期时的印章处理
                            this.NTKO.ActiveDocument.BookMarks(bookmark).Select();
                        }
                        else {// 不存在签发日期书签时的印章处理
                            left = 100;
                            top = 200;
                        }
                    }
                    //var url = document.location.href.toLowerCase();
                    //signUrl = url.split("/portal")[0] + this.SignUrl;
                    if (type == "Server") { // 从服务器加载印章
                        // addSignFromURL(signUrl, this.sheetOfficeInfo.currentUser, parseInt(left), parseInt(top)); // 普通印章
                        this.addSecSignFromURL(this.SignUrl, $.MvcSheetUI.SheetInfo.currentUser, parseInt(left), parseInt(top)); // 安全印章
                    }
                    else if (type == "EKEY") { // 从 E-KEY 加载印章
                        this.addSecSignFromEkey($.MvcSheetUI.SheetInfo.currentUser, parseInt(left), parseInt(top));
                    }
                    else if (type == "2") { // 从 本机 加载印章
                        this.addLocalSign($.MvcSheetUI.SheetInfo.currentUser, parseInt(left), parseInt(top), "");
                    }
                }
                catch (error) {
                    // 设置文档为只读
                    if (this.wordObject.ReadOnly == null || this.wordObject.ReadOnly) {
                        this.NTKO.SetReadOnly(true);
                    }
                    return false;
                }
            }
            return true;
        },
        // 从服务器加盖普通签章
        addSignFromURL: function (signUrl, userName, left, top) {
            this.NTKO.AddSignFromURL(
                                userName,   // 印章的用户名
                                signUrl,    // 印章所在服务器相对url
                                left,       // 左边距
                                top,        // top,上边距 根据Relative的设定选择不同参照对象
                                userName,   // 调用DoCheckSign函数签名印章信息,用来验证印章的字符串
                                3,          // Relative,取值1-4。设置左边距和上边距相对以下对象所在的位置 1：光标位置；2：页边距；3：页面距离 4：默认设置栏，段落
                                100,        // 缩放印章,默认100%
                                1);         // 0印章位于文字下方,1位于上方
        },
        // 从服务器加盖安全印章
        addSecSignFromURL: function (signUrl, userName, left, top) {
            this.NTKO.AddSecSignFromURL(
                                userName, // 印章使用者名称
                                signUrl,  // 印章路径
                                left,     // 左位移
                                top,      // 上位移
                                1,        // 设置印章相对值， 1：光标位置；2：页边距；3：页面距离 4：默认设置栏，段落
                                0,        // 是否允许打印
                                false,    // 签章是否使用数字证书
                                false,    // 签章是否锁定
                                true,     // 检查文档是否改变
                                false,    // 指定签章是否显示以上设定的对话框
                                "",       // 签章口令，如果正确，将不弹出输入口令密码
                                false,    // 是否允许用户输入批注
                                true      // 签章是否在文字下方
                            );
        },
        //从EKEY加盖电子印章
        addSecSignFromEkey: function (userName, left, top) {
            this.NTKO.AddSecSignFromEkey(
                        userName,  // 当前用户名,
                        left,      // 印章左位移
                        top,       // 印章上位移
                        1,         // 设置印章相对值， 1：光标位置；2：页边距；3：页面距离 4：默认设置栏，段落
                        0,         // 设置不打印  1是打印灰色  2是打印原始
                        false,     // 签章是否使用数字证书
                        false,     // 签章是否锁定
                        true,      // 检查文档是否改变
                        false,     // 指定签章是否显示以上设定的对话框
                        "",        // 签章口令，如果正确，将不弹出输入口令密码
                        -1,        // 需要加盖的在 EKEY 的印章索引，如果传递 -1 表示让用户选择
                        false,     // 是否允许用户输入批注
                        true       // 签章是否在文字下方
                    );
        },
        // 从本地加盖印章
        addSignFromLocal: function (userName, left, top, fileName) {
            this.NTKO.AddSignFromLocal(
                userName,     // 印章的用户名
                fileName,     // 缺省文件名，必须是 .esp 类型文件
                true,         // 是否允许用户选择文件
                left,         // 左边距
                top,          // 上边距 根据Relative的设定选择不同参照对象
                userName,     // 调用 DoCheckSign 函数签名印章信息,用来验证印章的字符串
                1,            // Relative,取值1-4。设置左边距和上边距相对以下对象所在的位置 1：光标位置；2：页边距；3：页面距离 4：默认设置栏，段落
                100,          // 缩放印章,默认100%
                1);           // 0印章位于文字下方,1位于上方
        },

        AddTemplate: function () {
            // TODO:套用模板
            // 读取 BookmartMapping  属性  {书签名1:数据项名1,书签名2:数据项名2}
            // 将数据项的值替换到书签名
            // 注册KeyUp事件
            if (this.OnTemplate) {
                this.RunScript(this, this.OnTemplate);
            }
            else {
                //this.NTKO.AddTemplateFromURL(this.RedTemplate);
                try {
                    var doc, curSel;
                    var message = SheetLanguages.Current.BookmarkNotExists;
                    // 选择对象当前文档的所有内容
                    doc = this.NTKO.ActiveDocument;

                    curSel = doc.Application.Selection;
                    // 复制当前文档内容
                    /*
                    curSel.WholeStory();
                    curSel.Cut();
                    */
                    //插入模板
                    //var url = document.location.href.toLowerCase();
                    //var templateDoc = url.split("/portal")[0] + this.RedTemplate;
                    this.NTKO.AddTemplateFromURL(this.RedTemplate);

                    this.bookmarks = [];
                    if (this.BookmartMapping) {
                        var mappings = this.BookmartMapping.split(";");
                        if (mappings && mappings.length > 0) {
                            for (i = 0; i < mappings.length; i++) {
                                var mapDetail = mappings[i].split(":");
                                this.bookmarks.push({ Name: mapDetail[0], Value: mapDetail[1] });
                            }
                        }
                    }

                    // 处理其他书签
                    for (var i = 0; i < this.bookmarks.length; i++) {
                        if (this.bookmarks[i] == null) continue;
                        if (!doc.BookMarks.Exists(this.bookmarks[i].Name)) {
                            continue;
                        }
                        var data = $.MvcSheetUI.GetControlValue(this.bookmarks[i].Value);
                        doc.BookMarks(this.bookmarks[i].Name).Range.Text = data;
                    }
                    // 删除后面的回车键
                    curSel.EndKey(6, 1);
                    curSel.Delete();
                }
                catch (err) {
                    alert("ERROR：" + err.number + ":" + err.description);
                };
            }
            // 注意套用模板的时候，原文档内容移动到 body 中
        },
        // 返回数据值
        SaveDataField: function () {
            this.SaveOffice();
            return {};
        }
    });
})(jQuery);
// SheetInstancePrioritySelector控件
(function ($) {
    //控件执行
    $.fn.SheetOriginatorUnit = function () {
        return $.MvcSheetUI.Run.call(this, "SheetOriginatorUnit", arguments);
    };

    $.MvcSheetUI.Controls.SheetOriginatorUnit = function (element, options, sheetInfo) {
        $.MvcSheetUI.Controls.SheetOriginatorUnit.Base.constructor.call(this, element, options, sheetInfo);
    };

    $.MvcSheetUI.Controls.SheetOriginatorUnit.Inherit($.MvcSheetUI.IControl, {
        Render: function () {
            var $element = $(this.Element);
            var that = this;

            // 绑定change事件
            $element.unbind("change.SheetOriginatorUnit").bind("change.SheetOriginatorUnit", function () {
                if ($.isFunction(that.OnChange)) {
                    that.OnChange.apply(this);
                }
                else {
                    (new Function(that.OnChange)).apply(this);
                }
            });
            var parentUnits = $.MvcSheetUI.SheetInfo.DirectParentUnits;
            if (parentUnits) {
                $element.empty();
                for (var key in parentUnits) {
                    $element.append("<option value='" + key + "'>" + parentUnits[key] + "</option>");
                }
                this.V = $.MvcSheetUI.SheetInfo.OriginatorOU; //当前流程发起人OU
                if (this.V && this.V != "") {
                    $element.val(this.V);
                }

                var length = 0;
                for (var key in $.MvcSheetUI.SheetInfo.DirectParentUnits) {
                    length++;
                }

                // 非发起模式或者不存在兼职情况，则不可编辑
                //if (!this.Originate || length == 1) {
                //非发起环节或者不存在兼职情况，则不可编辑                
                if ($.MvcSheetUI.SheetInfo.ActivityCode != $.MvcSheetUI.SheetInfo.StartActivityCode || length == 1 || $.MvcSheetUI.QueryString("Mode").toLowerCase() == "view") {
                    $element.after("<label style='width:100%;'>" + $element.children("option:selected").text() + "</label>");
                    $element.hide();
                } 
            }
        },
        RenderMobile: function () {

            //返回对象属性的个数
            function countObjectProperties(obj){
                var count=0;
                for(var key in obj){
                    if(obj.hasOwnProperty(key)){
                        count++;
                    }
                }
                return count;
            }

            var $element = $(this.Element);
            var parentUnits = $.MvcSheetUI.SheetInfo.DirectParentUnits;
            $element.empty();
            for (var key in parentUnits) {
                $element.append("<option value='" + key + "'>" + parentUnits[key] + "</option>");
            }
            var ionic = $.MvcSheetUI.IonicFramework;
            var that = this;
            $element.hide();

            var arrowElement = $('<i class="icon ion-ios-arrow-right"></i>');
            var inputLabel = $("<span class='input-label'></span>");
            that.Mask = inputLabel;
            var ParentElement = $element.closest('.detail');
            ParentElement.append(inputLabel);
            ParentElement.append(arrowElement);
            
            
            that.V = $.MvcSheetUI.SheetInfo.OriginatorOU;
            if (that.V && that.V != "") {
                that.Mask.html(parentUnits[that.V]);
                $element.val(that.V);
            }
            
            ParentElement.unbind("click.showSelect").bind("click.showSelect", function () {
                ionic.$ionicModal.fromTemplateUrl('Mobile/form/templates/radio_popover.html', {
                    scope: ionic.$scope
                }).then(function (popover) {
                    popover.scope.header = SheetLanguages.Current.BasicInfo.divOriginateOUName;
                    popover.scope.RadioListDisplay = [];

                    // console.log($element.val());
                    popover.scope.RadioListValue = $element.val();

                    for (var key in parentUnits) {
                        var emptyOption = {
                            Value: key,
                            Text: parentUnits[key]
                        };
                        popover.scope.RadioListDisplay.push(emptyOption);
                    }

                    popover.show();
                    popover.scope.hide = function () {
                        popover.hide();
                    }
                    popover.scope.clickRadio = function (value, text) {
                        $element.val(value);
                        $(that.Mask).html(text);
                    }
                    popover.scope.searchFocus = false;
                    popover.scope.searchAnimate = function () {
                        popover.scope.searchFocus = !popover.scope.searchFocus;
                    };
                });
                return;
            });

            var length = countObjectProperties(parentUnits);
            if ($.MvcSheetUI.SheetInfo.ActivityCode != $.MvcSheetUI.SheetInfo.StartActivityCode || length == 1 || $.MvcSheetUI.QueryString("Mode").toLowerCase() == "view") {
                that.Mask.text($element.children("option:selected").text());
                arrowElement.hide();
                ParentElement.addClass("uneditableOU");
                ParentElement.unbind("click.showSelect");
            } else {
                ParentElement.addClass("editableOU");
            }

        },
        GetText: function () {
            return $(this.Element).children("option:selected").text();
        },
        // 返回数据值
        SaveDataField: function () {
            $.MvcSheetUI.ParentUnitID = $(this.Element).val();
        }
    });
})(jQuery);
(function ($) {
    // 控件实例执行方式
    $.fn.SheetQuery = function () {
        return $.MvcSheetUI.Run.call(this, "SheetQuery", arguments);
    };


    // 构造函数
    $.MvcSheetUI.Controls.SheetQuery = function (element, ptions, sheetInfo) {
        this.QueryCss = {
            List: "list",
            AfList: "orglist"
        };
        //传入参数配置
        this.InputMapJson = {};
        //传出参数配置
        this.OutputMapJson = {};
        //过滤设置的标示,避免重复添加
        this.FilterFlag = true;
        this.Columns = null;

        /// <summary>
        /// 控件类型
        /// </summary>
        this.ControlType =
        {
            /// <summary>
            /// 文本框类型
            /// </summary>
            TextBox: 0,
            /// <summary>
            /// 下拉框类型
            /// </summary>
            DropdownList: 1,
            /// <summary>
            /// 单选框类型
            /// </summary>
            RadioButtonList: 2,
            /// <summary>
            /// 复选框类型
            /// </summary>
            CheckBoxList: 3,
            /// <summary>
            /// 长文本框类型
            /// </summary>
            RichTextBox: 4
        }

        $.MvcSheetUI.Controls.SheetQuery.Base.constructor.call(this, element, ptions, sheetInfo);
    };

    // 继承及控件实现
    $.MvcSheetUI.Controls.SheetQuery.Inherit($.MvcSheetUI.IControl, {
        //SheetQuery本身不是输入控件,无需验证
        Validate: function () {
            return true;
        },

        RenderMobile: function () {
            var that = this;
            //处理映射配置
            this.MappingSetting();
            //初始化查询
            this.InitQuery();
        },

        //移动容器显示后
        AfterMobileEditShow: function () {
            //第一次加载，需要加载数据，第二次的话，如果没有传入参数，不需要刷新
            if (this.Scrllable == null || this.InputMappings.length > 0) {
                this.IsBindInputVlues = false;
                this.LoadQueryData();
            }
        },

        //处理映射配置
        MappingSetting: function () {
            var mapping = this.OutputMappings.split(',');
            for (var i = 0; i < mapping.length; i++) {
                var map = mapping[i].split(':');
                this.OutputMapJson[map[0]] = map[1];
            }

            this.InputMappingSetting();
        },

        //处理传入参数映射配置
        InputMappingSetting: function () {
            var mapping = this.InputMappings.split(',');
            for (var i = 0; i < mapping.length; i++) {
                var map = mapping[i].split(':');
                var targetDataField = map[0];
                var e = $.MvcSheetUI.GetElement(targetDataField, this.RowNum);
                if (e != null) {
                    this.InputMapJson[map[1]] = e.SheetUIManager();
                }
            }
        },

        //初始化查询
        InitQuery: function () {
            $(this.Element).append('<div class="scroll-wrapper"><div class="scroller"></div></div>');
            this.UlElementID = $.MvcSheetUI.NewGuid();
            //数据列表
            this.UlElement = $("<ul>").attr("id", this.UlElementID).addClass(this.QueryCss.AfList).addClass(this.QueryCss.List).appendTo($(this.Element).find("div.scroller"));
        },

        //从后台读取数据
        LoadQueryData: function () {
            var that = this;
            var params = {
                Action: "GetQuerySettingAndData",
                SchemaCode: this.SchemaCode,
                QueryCode: this.QueryCode,
                InputMapping: this.GetInputMappings()
            };

            if (that.FilterPanelID) {
                params["Action"] = "GetQueryData";

                //如何没绑定inputmapping的值，得绑定
                if (!that.IsBindInputVlues) {
                    that.BindFilterInputValues.apply(that);
                }

                params["Filters"] = that.GetFilters();
            }

            if (this.Scrllable) {
                this.UlElement.html("");
                this.Scrllable.UpdateLoadParams(params);
            }
            else {
                this.Scrllable = new ScrollableList({
                    url: $.MvcSheetUI.PortalRoot + "/BizQueryHandler/BizQueryHandler",
                    panelSelector: "#" + this.MobilePanelID,
                    ulSelector: "#" + this.UlElementID,
                    loadMoreAble: true,
                    loadParams: params,
                    //data:后台返回的数据包
                    //scrllable:当前ScrollableList对象
                    //loadMore:true 下一页，false 刷新
                    OnSucceed: function (data, scrllable, loadMore) {
                        that.QueryData = data.QueryData;
                        that.Columns = data.Columns;
                        if (!that.QuerySetting) {
                            that.QuerySetting = data.QuerySetting;
                            that.FilterItems = that.QuerySetting.QueryItems;

                            if (!that.FilterItems) {
                                that.FilterFlag = false;
                            }
                            that.BindFilter.apply(that);
                        }

                        if (!loadMore) {
                            that.UlElement.html("");
                        }

                        that.BindData.apply(that);
                    }
                });

                this.Scrllable.LoadItems();
            }
        },
        GetDisplayName: function (key) {
            if (!this.Columns) return key;
            return this.Columns[key] || key;
        },
        //绑定过滤
        BindFilter: function () {
            if (!this.FilterFlag) return;
            this.FilterFlag = false;

            //查询
            this.FilterBtn = $("<a  class='icon magnifier big'></a>")
                .css("position", "absolute")
                .css("bottom", "20px")
                .css("right", "50px")
                .css("z-index", "999")
                .css("cursor", "pointer").appendTo($(this.Element).find(".scroll-wrapper"));

            this.FilterPanelID = $.MvcSheetUI.NewGuid();
            this.FilterPanel = $("<div>").attr("id", this.FilterPanelID).hide().appendTo(this.Element);

            //添加过滤项
            var ulElement = $("<ul>").addClass("list").appendTo(this.FilterPanel);
            for (var i = 0; i < this.FilterItems.length; i++) {
                var filterItem = this.FilterItems[i];
                if (!filterItem.Visible) continue;//不可见
                if (filterItem.FilterType == 3) continue;//系统参数

                var defaultVal = filterItem.DefaultValue;
                if (this.InputMapJson[filterItem.PropertyName]) {
                    //传入参数
                }

                var liElement = $("<li>").appendTo(ulElement);
                var label = $("<label for='" + this.FilterPanelID + filterItem.PropertyName + "'>" + this.GetDisplayName(filterItem.PropertyName) + "</label>").css("text-align", "left");
                liElement.append(label);
                switch (filterItem.DisplayType) {
                    case this.ControlType.DropdownList:
                        var input = $("<select id='" + this.FilterPanelID + filterItem.PropertyName + "' data-property='" + filterItem.PropertyName + "'>");
                        input.append("<option value=''>" + SheetLanguages.Current.All + "</option>");
                        var vals = filterItem.SelectedValues.split(";");
                        for (var j = 0; j < vals.length; j++) {
                            if (vals[j] != "") {
                                input.append("<option value='" + vals[j] + "'>" + vals[j] + "</option>");
                            }
                        }
                        input.val(filterItem.DefaultValue);
                        liElement.append(input);
                        break;

                    case this.ControlType.RadioButtonList:
                        var vals = filterItem.SelectedValues.split(";");
                        for (var j = 0; j < vals.length; j++) {
                            if (vals[j] != "") {
                                var newid = $.MvcSheetUI.NewGuid();
                                liElement.append("<input id='" + newid + "' type='radio' name='" + filterItem.PropertyName + "' value='" + vals[j] + "'></input>");
                                liElement.append("<label for='" + newid + "'>" + vals[j] + "</label>");
                            }
                        }
                        $("input[name='" + filterItem.PropertyName + "'][value='" + filterItem.DefaultValue + "']").attr("checked", "checked")
                        liElement.append("<br style='clear: both;'></br>");
                        break;

                    case this.ControlType.CheckBoxList:
                        var vals = filterItem.SelectedValues.split(";");
                        for (var j = 0; j < vals.length; j++) {
                            if (vals[j] != "") {
                                var newid = $.MvcSheetUI.NewGuid();
                                liElement.append("<input id='" + newid + "' type='checkbox' name='" + filterItem.PropertyName + "' value='" + vals[j] + "'></input>");
                                liElement.append("<label for='" + newid + "'>" + vals[j] + "</label>");
                            }
                        }
                        $("input[name='" + filterItem.PropertyName + "'][value='" + filterItem.DefaultValue + "']").attr("checked", "checked")
                        liElement.append("<br style='clear: both;'></br>");
                        break;

                    default:
                        //Error:文本类型，需要判断FilterType 和 LogicType,日期、数字 范围
                        liElement.append("<input type='text' id='" + this.FilterPanelID + filterItem.PropertyName + "' data-property='" + filterItem.PropertyName + "'></input>");
                        $("#" + filterItem.PropertyName).val(filterItem.DefaultValue);
                        break;
                }
            }
            //添加容器
            $.ui.addContentDiv(this.FilterPanelID);

            //确定按钮
            this.FooterID = $.MvcSheetUI.NewGuid();
            var footerObj = $("<footer id=" + this.FooterID + " ><a class='icon magnifier big' >" + SheetLanguages.Current.OK + "</a><footer>");
            $("#afui").append(footerObj);
            $(footerObj).unbind("click.footerObj").bind("click.footerObj", this, function (f) {
                f.data.LoadQueryData();
                $.ui.goBack();
            });
            this.FilterPanel.attr("data-footer", this.FooterID);

            //点击事件
            this.FilterBtn.unbind("click.FilterBtn").bind("click.FilterBtn", this, function (e) {
                //显示
                $.ui.loadContent(e.data.FilterPanelID);
            });
        },

        //绑定过滤条件的传入数据
        BindFilterInputValues: function () {
            this.IsBindInputVlues = true;
            for (var i = 0; i < this.FilterItems.length; i++) {
                var filterItem = this.FilterItems[i];
                if (!filterItem.Visible) continue;//不可见
                if (filterItem.FilterType == 3) continue;//系统参数
                if (!this.InputMapJson[filterItem.PropertyName]) continue;
                switch (filterItem.DisplayType) {
                    case this.ControlType.RadioButtonList:
                    case this.ControlType.CheckBoxList:
                        this.FilterPanel.find("input[name='" + filterItem.PropertyName + "'][value='" + this.InputMapJson[filterItem.PropertyName].GetValue() + "']").attr("checked", "checked");
                        break;

                    default:
                        $("#" + this.FilterPanelID + filterItem.PropertyName).val(this.InputMapJson[filterItem.PropertyName].GetValue());
                        break;
                }
            }
        },

        //读取过滤数据
        GetFilters: function () {
            var filters = {};
            for (var i = 0; i < this.FilterItems.length; i++) {
                var filterItem = this.FilterItems[i];
                if (!filterItem.Visible) continue;//不可见
                if (filterItem.FilterType == 3) continue;//系统参数
                switch (filterItem.DisplayType) {
                    case this.ControlType.RadioButtonList:
                    case this.ControlType.CheckBoxList:
                        if (this.FilterPanel.find("input[name='" + filterItem.PropertyName + "']:checked").val()) {
                            filters[filterItem.PropertyName] = $("input[name='" + filterItem.PropertyName + "']:checked").val();
                        }
                        break;

                    default:
                        if ($("#" + this.FilterPanelID + filterItem.PropertyName).val()) {
                            filters[filterItem.PropertyName] = $("#" + this.FilterPanelID + filterItem.PropertyName).val();
                        }
                        break;
                }
            }

            return JSON.stringify(filters);
        },

        //读取inputmapping映射值
        GetInputMappings: function () {
            var inputJson = {};
            if (this.InputMapJson) {
                for (var key in this.InputMapJson) {
                    if (this.InputMapJson[key])
                        inputJson[key] = this.InputMapJson[key].GetValue();
                }
            }

            return JSON.stringify(inputJson);
        },
        getPropertyNameFromData: function (bizObject, propertyName) {
            for (var k in bizObject) {
                if (k.toLocaleLowerCase() == propertyName.toLocaleLowerCase()) {
                    return k;
                }
            }
        },
        //从后台读取数据后，绑定到前端
        BindData: function () {
            for (var i = 0; i < this.QueryData.length; i++) {
                var row = this.QueryData[i];
                var liElement = $("<li>").data("dataindex", i).data("v", JSON.stringify(row));
                var pElement = $("<p>");
                var datafield = $("#" + this.ElementID).attr("data-datafield");

                for (var j = 0; j < this.QuerySetting.Columns.length; j++) {
                    var PropertyName = this.QuerySetting.Columns[j].PropertyName;
                    PropertyName = this.getPropertyNameFromData(row, PropertyName);

                    if (PropertyName == this.OutputMapJson[datafield]) {
                        liElement.html("");
                        liElement.append("<h2>" + row[PropertyName] + "</h2>");
                    }
                    else if (j == 0) {
                        liElement.append("<h2>" + row[PropertyName] + "</h2>");
                    }
                    else if (this.QuerySetting.Columns[j].Visible == 1) {
                        pElement.append("<span style='font-style:italic'>" + this.GetDisplayName(PropertyName) + "</span>:" + row[PropertyName] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
                    }
                }

                liElement.append(pElement).appendTo(this.UlElement);

                liElement.unbind("click.liElement").bind("click.liElement", this, function (e) {
                    e.data.ItemClick.apply(e.data, [JSON.parse($(this).data("v"))]);
                });
            }
        },
        //点击事件
        ItemClick: function (rowdata) {
            // var rowdata = this.QueryData[dataindex];
            var datafield = $("#" + this.ElementID).attr("data-datafield");
            var rowIndex = $("#" + this.ElementID).attr("data-row");
            for (var key in this.OutputMapJson) {
                if (key == datafield) {
                    //当前控件，直接赋值
                    $("#" + this.ElementID).val(rowdata[this.OutputMapJson[key]]);
                    $(this.ElementMask).text(rowdata[this.OutputMapJson[key]]);

                    //赋值后自动验证
                    try {
                        $.MvcSheetUI.ControlManagers[$("#" + this.ElementID).data('sheetid')].Validate()
                    }
                    catch (e) { }

                }
                else {
                    var e = $.MvcSheetUI.GetElement(key, rowIndex);
                    if (e != null && e.data($.MvcSheetUI.SheetIDKey)) {
                        e.SheetUIManager().SetValue(rowdata[this.OutputMapJson[key]]);
                        if (e.SheetUIManager().Validate) {
                            e.SheetUIManager().Validate();
                        }
                    }
                }
            }
            $.ui.goBack(0);
        }
    });

})(jQuery);
// RadioButtonList控件
; (function ($) {
    //控件执行
    $.fn.SheetRadioButtonList = function () {
        return $.MvcSheetUI.Run.call(this, "SheetRadioButtonList", arguments);
    };

    // 构造函数
    $.MvcSheetUI.Controls.SheetRadioButtonList = function (element, ptions, sheetInfo) {
        $.MvcSheetUI.Controls.SheetRadioButtonList.Base.constructor.call(this, element, ptions, sheetInfo);
    };

    // 继承及控件实现
    $.MvcSheetUI.Controls.SheetRadioButtonList.Inherit($.MvcSheetUI.IControl, {
        Render: function () {
            //不可见返回
            if (!this.Visiable) {
                this.Element.style.display = "none";
                return;
            }
            // 查看痕迹
			if (this.TrackVisiable && !this.Originate && this.DataField.indexOf(".") == -1) { this.RenderDataTrackLink(); }
            //渲染前端
            this.HtmlRender();

            //绑定选择事件
            $(this.Element).unbind("change.SheetRadioButtonList").bind("change.SheetRadioButtonList", [this], function (e) {
                //e.data[0].RemoveInvalidText(e.data[0].Element, "*", false);
                e.data[0].Validate();
                e.data[0].RunScript(this, e.data[0].OnChange);
            });
        },

        GetValue: function () {
            var value = "";
            $(this.Element).find("input").each(function () {
                if (this.checked)
                    value = $(this).val();
            });
            return value;
        },

        //设置控件的值
        SetValue: function (value) {
            $(this.Element).find("input").each(function () {
                if (this.value == value)
                    $(this).prop("checked", "checked");
            });
            if (this.IsMobile) {
                this.Mask.text(this.GetText());
                if (this.OnChange) {
                    this.RunScript(this, this.OnChange);
                }
                if (this.Editable) {
                    if (this.Mask.text() == '' || this.Mask.text() == SheetLanguages.Current.PleaseSelect) {
                        this.Mask.text(SheetLanguages.Current.PleaseSelect);
                        this.Mask.css({ 'color': '#797f89' });
                    } else {
                        this.Mask.css({ 'color': '#2c3038' });
                    }
                }
            }
        },
        GetText: function () {
            if (this.OnChange) {
                this.RunScript(this, this.OnChange);
            }
            return $(this.Element).find("input:checked").next().text();
        },
        SetReadonly: function (flag) {
            if (flag) {
                $(this.Element).find("input").prop("disabled", true);
            }
            else {
                $(this.Element).find("input").prop("disabled", false);
            }
        },

        //设置一行显示数目
        SetColumns: function () {
            if (this.RepeatColumns && /^([1-9]\d*)$/.test(this.RepeatColumns)) {
                var width = (100 / this.RepeatColumns) + "%";
                var divs = $(this.Element).find("div"),
                    i;
                for (i = 0; i < divs.length; i++) {
                    $(divs[i]).css({ "width": width });
                }
            }
        },

        //返回数据值
        SaveDataField: function () {
            var result = {};
            if (!this.Visiable || !this.Editable) return result;
            result[this.DataField] = this.SheetInfo.BizObject.DataItems[this.DataField];
            if (!result[this.DataField]) {
                alert(SheetLanguages.Current.DataItemNotExists + ":" + this.DataField);
                return {};
            }

            // if (result[this.DataField].V != this.GetValue())
            {
                result[this.DataField].V = this.GetValue();
                return result;
            }
            return {};
        },

        //设置默认值
        InitValue: function () {
            if (this.SheetInfo.SheetMode == $.MvcSheetUI.SheetMode.Originate && !this.V) {
                if (this.DefaultSelected) {
                    if ($(this.Element).find("input:checked").length === 0) {
                        $(this.Element).find("input").first().prop("checked", "checked");
                        this.V = $(this.Element).find("input").first().val();
                    }
                    // 如果设置了SelectedValue，其优先级大于数据字典的默认值
                    if (this.SelectedValue) {
                        if ($(this.Element).find("input[type='radio'][value='" + this.SelectedValue + "']").length == 1) {
                            $(this.Element).find("input[type='radio'][value='" + this.SelectedValue + "']").prop("checked", "checked");
                            this.V = $(this.Element).find("input[type='radio'][value='" + this.SelectedValue + "']").val();
                        }
                    }
                }
            }

            $(this.Element).find("input[type='radio'][value='" + this.V + "']").prop("checked", "checked");

            if (this.IsMobile) {
                var text = $(this.Element).find("input[type='radio'][value='" + this.V + "']").text();
                if (!text) {
                    text = $(this.Element).find("input[type='radio'][value='" + this.V + "']").parent().find("label").text();
                }
                if (this.Editable) {
                    this.Mask.html(text);
                }
                else {
                    //移动端不可编辑
                	text = text.replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/\"/g,"&quot;");
                    $(this.Element).html(text);
                }
            }
        },

        HtmlRender: function () {
            if (!this.Visiable) { $(this.Element).hide(); return; }
            $(this.Element).addClass("SheetRadioButtonList");
            //组标示
            //this.SheetGropName = this.DataField + "_" + Math.floor(Math.random() * 1000);//设置统一的name                        
            //子表中的单选按钮名字重复不能选择_tangsheng20180828
            this.SheetGropName = this.DataField + "_" + $.MvcSheetUI.NewGuid();
            var existedHtml = $(this.Element).html();

            $(this.Element).html("");

            if (this.MasterDataCategory) {
                var that = this;
                var cmdParam = JSON.stringify([this.MasterDataCategory]);
                if ($.MvcSheetUI.CacheData && $.MvcSheetUI.CacheData[cmdParam]) {
                    var cacheData = $.MvcSheetUI.CacheData[cmdParam];
                    for (var key in cacheData) {
                        that.AddRadioItem.apply(that, [cacheData[key].Code, cacheData[key].EnumValue, cacheData[key].IsDefault]);
                    }
                    that.InitValue.apply(that);
                    that.DoRepeatDirection.apply(that);
                    if (that.IsMobile && that.Editable)
                        that.ionicInit($.MvcSheetUI.IonicFramework);
                }
                else {
                    $.MvcSheet.GetSheet({
                        "Command": "GetMetadataByCategory",
                        "Param": cmdParam
                    },
                        function (data) {
                            if (data) {
                                //将数据缓存
                                if (!$.MvcSheetUI.CacheData) { $.MvcSheetUI.CacheData = {}; }
                                if (data.Successful != null && !data.Successful) {// 执行报错则输出日志
                                    return;
                                }
                                $.MvcSheetUI.CacheData[cmdParam] = data;

                                for (var i = 0, len = data.length; i < len; i++) {
                                    that.AddRadioItem.apply(that, [data[i].Code, data[i].EnumValue, data[i].IsDefault]);
                                }
                            }
                            //初始化默认值
                            that.InitValue.apply(that);
                            that.DoRepeatDirection.apply(that);
                            if (that.IsMobile && that.Editable)
                                that.ionicInit($.MvcSheetUI.IonicFramework);
                        }, null, this.DataField.indexOf(".") == -1);
                }
            }
            else if (this.DefaultItems) {
                var items = this.DefaultItems.split(';');
                for (var i = 0; i < items.length; i++) {
                    this.AddRadioItem.apply(this, [items[i], items[i], false]);
                }
                this.InitValue();
                this.DoRepeatDirection();
                if (this.IsMobile && this.Editable)
                    this.ionicInit($.MvcSheetUI.IonicFramework);
            }
            else {
                $(this.Element).html(existedHtml);
                this.InitValue();
                if (this.IsMobile && this.Editable)
                    this.ionicInit($.MvcSheetUI.IonicFramework);
            }
        },

        //SetCheckView: function (item, value, checkitem) {  //不可编辑时,设置图标字体
        //    var checkbox = $("<i class='icon-checkbox-unchecked'></i>");
        //    if (this.Editable) {
        //        checkbox = $("<input type='radio' />");
        //    }
        //    else {
        //        if (this.V) {
        //            if (checkitem == value) {
        //                checkbox = $("<i class='icon-checkbox-checked'></i>");
        //            }
        //        }
        //    }
        //    this.AddRadioItem.apply(this, [checkbox, value, item])
        //},

        RenderMobile: function () {
            this.MobileOptions = [];
            this.HtmlRender();
            //不可用
            if (!this.Editable) {
                $(this.Element).addClass(this.Css.Readonly);
            }
            else {
                this.MoveToMobileContainer();
                this.pupIcon = $("<i class='icon ion-ios-arrow-right'></i>").insertAfter(this.Mask);
                $(this.Element).closest("div.item").addClass("item-icon-right");
                $(this.Element).hide();
                this.SetValue();
            }
        },

        ionicInit: function (ionic) {
            var that = this;
            //只往上一级，只能通过控件绑定click事件，防止DisplayRule属性存在时出现异常
            $(this.Element.parentElement).unbind('click.showChoice').bind('click.showChoice', function (e) {
                ionic.$ionicModal.fromTemplateUrl('Mobile/form/templates/radio_popover.html', {
                    scope: ionic.$scope
                }).then(function (popover) {
                    popover.scope.header = that.N;
                    popover.scope.RadioListDisplay = that.MobileOptions;
                    popover.scope.RadioListValue = that.GetValue();
                    popover.show();
                    popover.scope.hide = function () {
                        popover.hide();
                    };
                    popover.scope.clickRadio = function (value, text) {
                        for (var i = 0; i < $(that.Element).children("div").length; i++) {
                            if ($($($(that.Element).children("div"))[i])[0].innerText === value)
                                //触发原始radio的change事件
                                $($(that.Element).children("div").children("input")[0]).trigger("change", value);
                        }
                        that.SetValue(value);
                        text = text.replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/\"/g,"&quot;").replace(/\'/g,"&apos;");
                        $(that.Mask).html(text);
                        that.Validate();
                        
                    };
                    popover.scope.searchFocus = false;
                    popover.scope.searchAnimate = function () {
                        popover.scope.searchFocus = !popover.scope.searchFocus;
                    };
                    popover.scope.searChange = function () {
                        popover.scope.searchNum = $(".active .popover .list").children('label').length;
                    };
                });
                return;
            });
        },

        DoRepeatDirection: function () {
            //横向展示
            if (this.RepeatDirection == "Horizontal") {
                $(this.Element).find("[SheetGropName='" + this.SheetGropName + "']").css("float", "left");
            }

            //设置一行显示数目
            this.SetColumns();

            // 显示红色*号提示
            if (this.Editable && this.Required) {
                var inputs = $(this.Element).find("input");
                for (var i = 0; i < inputs.length; i++) {
                    if ($(inputs[i]).prop("checked"))
                        this.RemoveInvalidText(this.Element, "*", false);
                }
            }
        },

        AddRadioItem: function (value, text, isDefault) {
            if (text || value) {
                var option = $("<div SheetGropName='" + this.SheetGropName + "'></div>");
                if (this.IsMobile) {
                    option.attr("style", "display:none;");
                    var MobileOption = {
                        DataField: this.DataField,
                        Value: value,
                        Text: text
                    };
                    this.MobileOptions.push(MobileOption);
                }
                
                //update by xl@Future
                text = $('<div/>').text(text).html();
                text = text.replace(/\"/g,"&quot;").replace(/\'/g,"&apos;");
                value = $('<div/>').text(value).html();
                value = value.replace(/\"/g,"&quot;").replace(/\'/g,"&apos;");
                var id = $.MvcSheetUI.NewGuid();
                var radio = $("<input type='radio' />").prop("name", this.SheetGropName).prop("id", id).val(value);//.text(text || value)
                if (this.DefaultSelected) {
                    radio.prop("checked", isDefault);
                }
                if (!this.Editable) {//不可用
                    radio.prop("disabled", true);
                }
                var span = $("<label for='" + id + "'  style=\"padding-left:3px;padding-right:5px;\">" + (text || value) + "</label>");
                $(this.Element).append(option);
                option.append(radio);
                option.append(span);
                
            }
        }
    });
})(jQuery);
﻿// 关联流程实例控件
(function ($) {

    $.fn.SheetRelationInstance = function () {
        return $.MvcSheetUI.Run.call(this, "SheetRelationInstance", arguments);
    };

    // 构造函数
    $.MvcSheetUI.Controls.SheetRelationInstance = function (element, ptions, sheetInfo) {
        this.RelationInstances = [];
        this.ModalId = "divModal_RelationInstance";
        this.LoadUrl = null;
        this.LinkUrl = null;
        this.InstanceTable = null;

        $.MvcSheetUI.Controls.SheetRelationInstance.Base.constructor.call(this, element, ptions, sheetInfo);
    };

    // 继承及控件实现
    $.MvcSheetUI.Controls.SheetRelationInstance.Inherit($.MvcSheetUI.IControl, {
        Render: function () {
            if (!this.Visiable) {
                $(this.Element).hide();
                return;
            }

            this.LoadUrl = this.PortalRoot + "/SelectInstance.html?InstanceId=" + this.SheetInfo.InstanceId + "&ID=" + this.Element.id;
            this.LinkUrl = this.PortalRoot + "/InstanceSheets.html";

            if (this.V) {
                this.GetInstancesFromValue();
            }

            this.RenderHistory();
            if (this.Editable) {
                this.RenderUpload();
            }
        },
        GetInstancesFromValue: function () {
            var instances = this.V.split("#,#");
            for (var i = 0; i < instances.length; i++) {
                if (instances[i].indexOf("#_#") == -1) continue;
                var arr = instances[i].split("#_#");
                this.RelationInstances.push({ ObjectID: arr[0], InstanceId: arr[1], InstanceName: arr[2] });
            }
        },
        GetValueFromInstances: function () {
            var result = "";
            for (var i = 0; i < this.RelationInstances.length; i++) {
                if (i > 0) result += "#,#";
                result += this.RelationInstances[i].ObjectID + "#_#" + this.RelationInstances[i].InstanceId + "#_#" + this.RelationInstances[i].InstanceName;
            }
            return result;
        },
        RenderHistory: function () {
            // 初始化已经关联的文件
            if (this.InstanceTable == null) {
                var table = "<table class=\"table table-striped\" style=\"margin: 0px; min-height: 0px;\">";
                table += "<tbody>";
                table += "</tbody>";
                table += "</table>";
                this.InstanceTable = $(table);
                this.InstanceTable.appendTo($(this.Element));
            }
            this.InstanceTable.find("row").remove();
            // 增加行
            for (var i = 0; i < this.RelationInstances.length; i++) {
                this.AddItem(this.RelationInstances[i]);
            }
        },
        RenderUpload: function () {
            // 初始化上传按钮
            var id = this.Element.id || this.DataField;
            var html = "<div class=\"btn btn-outline btn-lg\" style=\"width: 100%; border: 1px dashed rgb(221, 221, 221);\" data-toggle=\"modal\" data-target=\"#" + this.ModalId + "\">";
            html += "点击绑定流程";
            html += "</div>";
            if ($("#" + this.ModalId).length == 0) {
                html += "<div id=\"" + this.ModalId + "\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" style=\"display: none;\" aria-hidden=\"true\">";
                html += "<div class=\"modal-dialog\" style=\"width:600px;height:452px;\">";
                html += "<div class=\"modal-content\" style=\"height:100%;\">";
                html += "<div class=\"modal-header\">";
                html += "<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>";
                html += "<h4 class=\"modal-title\">请选择关联流程</h4>";
                html += "</div>";
                html += "<div class=\"modal-body\">";
                html += "<iframe id=\"frm_RelationInstance\" name=\"frm_RelationInstance\" scrolling=\"no\" frameborder=\"0\" style=\"width: 100%; height: 452px;\" src=\"" + this.LoadUrl + "\"></iframe>";
                html += "</div>";
                html += "</div>";
                html += "</div>";
                html += "</div>";
            }

            $(html).appendTo($(this.Element));
        },
        AddItem: function (instance) {
            var that = this;
            var linkUrl = this.LinkUrl + "?RelationID=" + encodeURI(instance.InstanceId);
            var row = "<tr id=\"" + instance.ObjectID + "\">";
            row += "<td>";
            row += "<a href=\"" + linkUrl + "\" target=\"_blank\"><i class=\"fa fa-angle-right\" style=\"padding-right:5px;\"></i>" + instance.InstanceName + "</a>";
            row += "</td>";
            if (this.Editable) {
                row += "<td class=\"printHidden\" style=\"text-align: center;width:60px;\">";
                row += "<a href=\"javascript:void(0);\" data-action=\"" + instance.ObjectID + "\" class=\"fa fa-minus\">删除</a>";
                row += "</td>";
            }
            row += "</tr>";
            $(row).appendTo(this.InstanceTable)
                  .find(".fa-minus").click(function () {
                      var id = $(this).data("action");
                      that.RemoveItem(id);
                  });
            // this.InstanceTable.append($(row));
        },
        AddNewItem: function (objectId, instanceId, instanceName) {
            var item = { ObjectID: objectId, InstanceId: instanceId, InstanceName: instanceName };
            this.RelationInstances.push(item);
            this.AddItem(item);
        },
        RemoveItem: function (objectId) {
            // 删除一项
            for (var i = 0; i < this.RelationInstances.length; i++) {
                if (this.RelationInstances[i].ObjectID == objectId) {
                    // 移除数组
                    this.RelationInstances.splice(i, 1);
                    // 移除行
                    this.InstanceTable.find("#" + objectId).remove();
                    break;
                }
            }
            if (window.frames["frm_RelationInstance"] && window.frames["frm_RelationInstance"].removeItemFromParent) {
                window.frames["frm_RelationInstance"].removeItemFromParent(objectId);
            }
        },
        RenderMobile: function () {
            this.Render();
            this.MoveToMobileContainer(this.Element);
        },
        // 数据验证
        Validate: function (effective, initValid) {
            if (!this.Editable) return true;
            if (initValid) {
                if (this.Required && this.RelationInstances < 1) {
                    this.AddInvalidText(this.Element, "*", false);
                    return false;
                }
            }
            if (!effective) {
                if (this.Required) {//必填的
                    if (this.RelationInstances < 1) {
                        this.AddInvalidText(this.Element, "*");
                        return false;
                    }
                }
            }

            this.RemoveInvalidText(this.Element);
            return true;
        },
        GetValue: function () {
            return this.RelationInstances;
        },
        SetValue: function (options) {
            $.extend(this.RelationInstances, options);
            this.RenderHistory();
        },
        SaveDataField: function () {
            var result = {};
            if (!this.Visiable || !this.Editable) return result;

            result[this.DataField] = this.DataItem;
            result[this.DataField].V = this.GetValueFromInstances();
            return result;
        }
    });
})(jQuery);
/// <reference path="../MvcSheetUI.js" />
//文本框(SheetTextBox/SheetBizTextBox/SheetTime)
(function ($) {
    // 控件执行
    // 参数{AutoTrim:true,DefaultValue:datavalue,OnChange:""}
    //可以通过  $("#id").SheetTextBox(参数)  来渲染控件和获取控件对象
    $.fn.SheetRichTextBox = function () {
        return $.MvcSheetUI.Run.call(this, "SheetRichTextBox", arguments);
    };

    // 构造函数
    $.MvcSheetUI.Controls.SheetRichTextBox = function (element, ptions, sheetInfo) {
        this.EditorObject = null;
        this.EditorIndex = 0;
        $.MvcSheetUI.Controls.SheetRichTextBox.Base.constructor.call(this, element, ptions, sheetInfo);
    };

    // 继承及控件实现
    $.MvcSheetUI.Controls.SheetRichTextBox.Inherit($.MvcSheetUI.IControl, {
        //控件渲染函数
        Render: function () {
            if (!this.Visiable) {
                $(this.Element).hide();
                return;
            }
            // 查看痕迹
            if (this.TrackVisiable && !this.Originate && this.DataField.indexOf(".") == -1) { this.RenderDataTrackLink(); }
            if (!this.Element.id) {
                alert("控件:" + this.DataField + "未设置ID");
                return;
            }
            //把属性重新渲染到页面上去
            // 移动端设置PlaceHolder
            if (this.IsMobile) {
                this.PlaceHolder = this.PlaceHolder || SheetLanguages.Current.PleaseInput;
                this.ionicInit($(this.Element), $.MvcSheetUI.IonicFramework);
            }
            $(this.Element).attr("PlaceHolder", this.PlaceHolder);
            //富文本在移动端显示为长文本样式
            if (this.RichTextBox && this.Editable && this.IsMobile) {
                this.RichTextBox = false;
            }

            var v;
            if ($.MvcSheetUI.SheetInfo.SheetMode == $.MvcSheetUI.SheetMode.Originate && !this.V) {
                v = this.DefaultValue || "";
            } else {
                v = this.V || "";
            }

            this.SetValue(v);

            if (this.RichTextBox && this.Editable && !this.IsMobile) {
                //if (typeof (CKEDITOR) == "undefined") {
                //    //动态加载
                //    $.ajax({
                //        url: _PORTALROOT_GLOBAL + "/WFRes/ckeditor/ckeditor.js",
                //        type: "GET",
                //        dataType: "script",
                //        async: false,//同步请求
                //        global: false
                //    });
                //    CKEDITOR.basePath = "http://" + location.host + _PORTALROOT_GLOBAL + "/WFRes/ckeditor/";
                //}

                // CKEDITOR.replace(this.Element.id);

                this.InitKindEditor();
            }
            //if (typeof (CKEDITOR) != "undefined" && this.RichTextBox && this.Editable) {  }
            if (!this.Editable) { this.SetReadonly(true); return; }

            if (this.ToolTip) {
                $(this.Element).attr("title", this.ToolTip);
            }

            $(this.Element).unbind("change.SheetRichTextBox").bind("change.SheetRichTextBox", [this], function (e) {
                e.data[0].Validate();
            });
        },
        ionicInit: function (element, ionic) {
            element.attr("rows", "4");
            element.parent().addClass("textarea");
        },
        InitKindEditor: function () {
            if (KindEditor == undefined) return;
            this.EditorIndex = KindEditor.instances.length;
            var index = this.EditorIndex;
            var sheetInfo = this.SheetInfo;
            KindEditor.SchemaCode = sheetInfo.SchemaCode;
            KindEditor.UserID = sheetInfo.UserID;
            KindEditor.BizObjectID = sheetInfo.BizObjectID;

			//update by luwei : 使用jsp上传
            this.EditorObject = KindEditor.create(this.Element, {
                cssPath: 'WFRes/editor/plugins/code/prettify.css',
                uploadJson: '/upload/upload_json.jsp',
                fileManagerJson: '/upload/file_manager_json.jsp',
                allowFileManager: true,
                items: [
                    'source', '|', 'undo', 'redo', '|', 'code', 'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter',
                    'justifyright', 'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
                    'superscript', 'clearhtml', 'selectall', '|', 'fullscreen', '/',
                    'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline', 'strikethrough',
                    'lineheight', 'removeformat', '|', 'image', 'table', 'hr', 'emoticons', 'anchor', 'link', 'unlink', '|', 'about'
                ],
                afterCreate: function () {
                    var self = this;

                    // 给KindEditor绑定paste事件，用于粘贴截图
                    $(self.edit.doc).on("paste", function (e) {
                        // 需支持HTML5
                        if (!(!!window.ActiveXObject || "ActiveXObject" in window) && typeof(Worker) === "undefined") {
                            return;
                        }

                        var itmes = (e.clipboardData || e.originalEvent.clipboardData).items,
                            blob = null,
                            i,
                            length;

                        for (i = 0, length = itmes.length; i < length; i++) {
                            if (itmes[i].type.indexOf("image") === 0) {
                                blob = itmes[i].getAsFile();
                                break;
                            }
                        }

                        if (blob) {
                            var data = new FormData();
                            data.append("imgFile", blob, "screenshot.png");
                            data.append("BizObjectID", sheetInfo.BizObjectID);
                            data.append("UserID", sheetInfo.UserID);
                            data.append("SchemaCode", sheetInfo.SchemaCode);
                            data.append("EditorIndex", index);

                            $.ajax({
                                url: _PORTALROOT_GLOBAL + "/WFRes/editor/asp.net/upload_json.ashx",
                                type: "POST",
                                data: data,
                                cache: false,
                                processData: false, // 告诉jQuery不要去处理发送的数据
                                contentType: false, // 告诉jQuery不要去设置Content-Type请求头
                                dataType: "json",
                                success: function (data) {
                                    if (data.error === 0) {
                                        KindEditor.instances[data.editorIndex].insertHtml("<img src=\"" + data.url + "\" alt=\"\" /> ");
                                    }
                                }
                            });
                        }
                    });
                }
            });
        },
        SetReadonly: function (v) {
            if (v) {
                $(this.Element).hide();

                //var parentContainer = $("<div class=\"SheetRichTextBox\"></div>");
                var parentContainer = $("<label class=\"SheetRichTextBox\"></div>");
                // style=\"overflow: auto;\"
                var contentValue = this.Element.value;
                //update by ouyangsk 调整white-space样式，处理AutoTrim无效的问题
                //parentContainer.html("<div style=\"overflow-x:auto;display:block;white-space:normal;padding:7px 0;\" id=\"divRich_" + this.Element.id + "\">" + contentValue + "</div>")
                //    .insertAfter($(this.Element));

                 //update by xl@Future
                //去除<>转义 解决长文本内容 不换行问题
                // contentValue = contentValue.replace(/\"/g,"&quot;");
//                contentValue = contentValue.replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/\"/g,"&quot;");
                // console.log(contentValue)
                var html = filterXSS(contentValue,{
                    onTag : function (tag, html, options) {
                       /* console.log(tag, html, options)*/
                        if (tag === 'script') {
                            return filterXSS(html);
                        } else {
                        	// 不对其属性列表进行过滤
                            return html
                        }
                    }
                });
                parentContainer.html("<div style=\"overflow-x:auto;display:block;white-space:inherit;padding:7px 0;\" id=\"divRich_" + this.Element.id + "\">" + html + "</div>")
                	.insertAfter($(this.Element));

                if (this.IsMobile) {
                    var defaults = { ox: 0, oy: 0, cx: 0, cy: 0 };
                    this.Element.addEventListener("touchstart", function () {
                        defaults.ox = event.targetTouches[0].pageX;
                        defaults.oy = event.targetTouches[0].pageY;
                        //console.log("ox->" + defaults.ox + ",oy->" + defaults.oy);
                        //if (window.navigator.userAgent.toLowerCase().indexOf("android") == -1) {
                        //    $(this).parent().trigger("touchstart");
                        //    event.stopPropagation();
                        //}
                    });
                    this.Element.addEventListener("touchmove", function () {
                        defaults.cx = event.targetTouches[0].pageX;
                        defaults.cy = event.targetTouches[0].pageY;
                        // 左右滑动大于上下滑动
                        if (Math.abs(defaults.cy - defaults.oy) < Math.abs(defaults.cx - defaults.ox)) {
                            event.stopPropagation();
                        }
                    });
                }

                parentContainer.find("p").each(function () {
                    var indent = $(this).css("text-indent");
                    if (indent) {
                        indent = parseInt(indent.replace("px", ""));
                        if (indent < 0) {
                            $(this).css("text-indent", 0);
                        }
                    }
                });
                //.html(this.Element.value)
                //.insertAfter($(this.Element));
            } else {
                $(this.Element).show();
                if ($(this.Element).next().hasClass("Readonly")) $(this.Element).next().remove();
            }
        },
        // 数据验证
        Validate: function (effective, initValid) {
            if (!this.Editable) return true;
            if (initValid) {
                if (this.Required && !this.GetValue()) {
                    this.AddInvalidText(this.Element, "*", false);
                    return false;
                }
            }
            if (!effective) {
                // 必填验证
                var v = this.GetValue();
                if (this.Required && !this.DoValidate(this.Valid.Required, [v], "*")) {
                    return false;
                }
                if (this.RegularExpression) {
                    if (!this.DoValidate(this.Valid.RegularExpression, [v, this.RegularExpression], this.RegularInvalidText)) {
                        return false;
                    }
                }
            }
            return true;
        },
        // 获取值
        GetValue: function () {
            var value;
            if (this.EditorObject != null && this.EditorObject != "" && typeof (this.EditorObject) != "undefined" && this.RichTextBox) { // 富文本框
                value = this.EditorObject.html();
            } else {
                value = $(this.Element).val();
            }
            if (this.AutoTrim) {
                value = value.trim()
            }
            return value;
        },
        // 设置值
        SetValue: function (val) {
        /*	if(this.RichTextBox){
        		//update by xl@Future
        		val = val ? val.replace(/\</g,"&lt;"):val;
        		val = val ? val.replace(/\>/g,"&gt;"):val;
        		val = val ? val.replace(/\"/g,"&quot;"):val;
        	}*/
            if (this.RichTextBox && this.EditorObject) { // 富文本框
                this.EditorObject.html(val);
            } else {
                if (!this.RichTextBox && !this.Editable) {
                    val = val.replace(/\n/g, "<br>");
                }
                $(this.Element).val(val);
            }
        },
        // 设置焦点
        SetFocus: function () {
            if (this.RichTextBox) { // 富文本框
                // return CKEDITOR.instances[this.Element.id].focus();
                this.EditorObject.focus();
            } else {
                return this.Element.focus();
            }
        },
        //返回数据值
        SaveDataField: function () {
            var result = {};
            if (!this.Editable) return result;
            result[this.DataField] = this.SheetInfo.BizObject.DataItems[this.DataField];
            if (!result[this.DataField]) {
                if (this.DataField.indexOf(".") == -1) { alert(SheetLanguages.Current.DataItemNotExists + ":" + this.DataField); }
                return {};
            }
            var v = this.GetValue();
            if (result[this.DataField].V != v) {
                result[this.DataField].V = v;
                return result;
            }
            return {};
        }
    });
})(jQuery);
/// <reference path="../MvcSheetUI.js" />

//文本框(SheetTextBox/SheetBizTextBox/SheetTime)
(function ($) {
    // 控件执行
    // 参数{AutoTrim:true,DefaultValue:datavalue,OnChange:""}
    //可以通过  $("#id").SheetTextBox(参数)  来渲染控件和获取控件对象
    $.fn.SheetTextBox = function () {
        return $.MvcSheetUI.Run.call(this, "SheetTextBox", arguments);
    };

    // 构造函数
    $.MvcSheetUI.Controls.SheetTextBox = function (element, options, sheetInfo) {
        this.TextRightAlign = false; // 全局是否右对齐
        this.NumberRightAlign = false; // 数值是否右对齐
        $.MvcSheetUI.Controls.SheetTextBox.Base.constructor.call(this, element, options, sheetInfo);
    };

    // 继承及控件实现
    $.MvcSheetUI.Controls.SheetTextBox.Inherit($.MvcSheetUI.IControl, {
        //控件渲染函数
        Render: function () {
            if (!this.Visiable) {
                this.Element.style.display = "none";
                return;
            }
            // 查看痕迹
            if (this.TrackVisiable && !this.Originate && this.DataField.indexOf(".") == -1) { this.RenderDataTrackLink(); }
            // 移动端设置PlaceHolder
            if (this.IsMobile) {
                this.PlaceHolder = this.PlaceHolder || SheetLanguages.Current.PleaseInput;
                // 微信端点击显示日期控件
                if ($.MvcSheetUI.IonicFramework.$rootScope.loginfrom == "wechat") {
                    this.Element.addEventListener("touchstart", function () {
                        event.stopPropagation();
                    });
                }
            }
            $(this.Element).attr("PlaceHolder", this.PlaceHolder);

            if ($.MvcSheetUI.SheetInfo.SheetMode == $.MvcSheetUI.SheetMode.Originate && !this.V) {
                if (this.DefaultValue) {
                    if (this.DefaultValue.indexOf("{") > -1 && this.DefaultValue.indexOf("}") > -1) {
                        var datafield = this.DefaultValue.replace("{", "").replace("}", "");
                        if (datafield) {
                            var data = $.MvcSheetUI.GetSheetDataItem(datafield, 0);
                            if (data)
                                $(this.Element).val(data.V);
                        }
                    } else
                        $(this.Element).val(this.DefaultValue);
                } else
                    $(this.Element).val("");
                //$(this.Element).val(this.DefaultValue || "");
                if (!this.DefaultValue && this.V !== "") {
                	//update by ouyangsk 下方SetReadonly会再次发送GetFormatValue请求，所以加上条件，这样使请求只发送一次
                	if (this.Editable) {
                		this.SetValue(this.V);
                	}
                }
            } else {
            	//update by ouyangsk 下方SetReadonly会再次发送GetFormatValue请求，所以加上条件，这样使请求只发送一次
            	if (this.Editable) {
            		if(this.DefaultValue && this.V == ""){
            			this.SetValue(this.DefaultValue);
            		}else{
            			this.SetValue(this.V);
            		}
            	}
            }

            if (!this.Editable) { // 不可编辑
                this.SetReadonly(true);
                this.SetValue(this.V);
                return;
            }
            if (this.TextRightAlign) $(this.Element).addClass("txtAlignRight");
            else if (this.NumberRightAlign && this.IsNubmer()) { $(this.Element).addClass("txtAlignRight"); }
            if (this.ToolTip) $(this.Element).attr("title", this.ToolTip);

            // 注册KeyDown事件
            $(this.Element).unbind("change.SheetTextBox").bind("change.SheetTextBox", [this], function (e) {
                e.data[0]._OnChange();
            });


            // 绑定焦点事件
            $(this.Element).unbind("focus.SheetTextBox").bind("focus.SheetTextBox", [this],
                function (e) {
                    if (e.data[0].FormatRule) {
                        this.value = this.value.replace(/,/g, "").replace(/$/g, "").replace(/¥/g, "");
                    }
                    if (e.data[0].OnFocus) {
                        e.data[0].RunScript(this, e.data[0].OnFocus);
                    }
                });
            // 注册KeyUp事件
            if (this.OnKeyUp) {
                $(this.Element).unbind("keyup.SheetTextBox").bind("keyup.SheetTextBox", [this], function (e) {
                    e.data[0].RunScript(this, e.data[0].OnKeyUp);
                });
            }
            // 注册KeyDown事件

            $(this.Element).unbind("keydown.SheetTextBox").bind("keydown.SheetTextBox", [this], function (e) {
                if (e.key == "Enter") return false;
                if (e.data[0].OnKeyDown) {
                    e.data[0].RunScript(this, e.data[0].OnKeyDown);
                }
            });
            // 失去焦点事件
            $(this.Element).unbind("blur.SheetTextBox").bind("blur.SheetTextBox", [this], function (e) {
                if (e.data[0].FormatRule && e.data[0].GetValue() != "") {
                    e.data[0].GetFromatValue($(e.data[0].Element), e.data[0].GetValue());
                }
            });

            if (this.IsMobile) {
                //移动端的开窗查询
                this._mobilePopup();
            } else {
                this._createPopup();
            }
            //this.Validate();
        },
        IsNubmer: function () {
            return (this.LogicType == 7 || this.LogicType == 9 || this.LogicType == 35);
        },
        SetValue: function (v) {
            $(this.Element).val(v);
            $(this.Element).change();
            if (this.FormatRule) {
                this.GetFromatValue($(this.Element), v);
            }
            //移动
            if (this.IsMobile) {
                this.Mask.html(this.GetText());
            }
        },
        //移动端开窗
        _mobilePopup: function () {
            if (this.PopupWindow == "None") return;

            //1.隐藏当前输入框
            //2.增加显示返回值 a
            //3.增加图标提示点击事件
            //4.item 添加样式 item-icon-right
            //this.ViewInNewContainer = $(this.Element).parent();
            this.ID = $(this.Element).attr("Id");
            $(this.Element).hide();
            $(this.Element).parent().find("[id*=mask]").remove();
            $(this.Element).parent().find("i.icon").remove();
            this.Mask = $("<span></span>").insertAfter(this.Element).attr("id", "mask_" + this.ID);
            this.Mask.text(this.GetText());
            this.Mask.insertAfter(this.Element).attr("id", "mask_" + this.ID);
            var _that = this;
            if (_that.Editable) {
                this.pupIcon = $("<i class='icon ion-ios-arrow-right'></i>").insertAfter(this.Mask);
                $(this.Element).closest("div.item").addClass("item-icon-right");
                $(this.Element).parent().parent().unbind("click.query").bind("click.query", function () {
                    //跳转到查询页面
                    $.MvcSheetUI.IonicFramework.$state.go("form.sheetquery", { datafield: _that.DataField, rownum: $(this).find("[data-datafield='" + _that.DataField + "']").attr("data-row") });
                })
            }

        },
        AfterMobileEditShow: function () {
            if (this.PopupElement)
                this.PopupElement.SheetQuery().AfterMobileEditShow();
        },
        _createPopup: function () {
            var that = this;
            //开窗查询(DisplayText SchemaCode QueryCode InputMappings OutputMappings)
            if (this.PopupWindow === "PopupWindow") { //弹窗模式
                var displayText = this.DisplayText === "" ? "&nbsp;" : this.DisplayText;
                //update by xl@Future xss过滤 
                displayText = displayText.replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/\"/g,"&quot;");
                var popupDivId = "popupLink" + (new Date()).getTime();
                var outputParams = "";
                if (this.OutputMappings != "") {
                    outputParams = "&OutputParams=" + encodeURI(this.OutputMappings.replace(/,/g, "|").replace(/:/g, ","));
                }
                var w = that.PopupWidth ? that.PopupWidth : "600px";
                var h = that.PopupHeight ? that.PopupHeight : "400px";
                //弹窗div
                var popupDiv = "<div id='" + popupDivId + "' class='modal fade' tabindex='-1' role='dialog' aria-hidden='true'>"
                popupDiv += "<div class='modal-dialog'>";
                popupDiv += "<div class='modal-content' style='width:" + w + ";'>";
                popupDiv += "<div class='modal-header'>";
                popupDiv += "<button type='button' class='close' data-dismiss='modal'>";
                popupDiv += "<span aria-hidden='true'>&times;</span></button>";
                popupDiv += "<h4 class='modal-title'>" + displayText  + "</h4>";
                popupDiv += "</div><div class='modal-body'>";
                popupDiv += "<iframe scrolling='no' frameborder='0' width='100%' height='" + h + "'></iframe>";
                popupDiv += "</div></div></div></div>";
                popupDiv = $(popupDiv);
                //弹窗按钮
                var popupLink = $("<a href='javascript:;'>" + displayText + "</a>");
                popupLink.click(function () {
                	// modify by kinson.guo@20180611 for 支持开窗复选 begin
                	var src = "";
                	var ctrlID = that.Element.id===undefined?"":that.Element.id;
                	if(ctrlID.indexOf("mutiselect") > -1){
                		 src = that.PortalRoot + "/admin/TabMaster.html?url=ListMasterDataNew.html&OpenType=1&IsPopup=1&SchemaCode=" + that.SchemaCode +
                         "&QueryCode=" + that.QueryCode + "&CtrlID=" + popupDivId + outputParams + that._getInputParam();
                	}else{
                		 src = that.PortalRoot + "/admin/TabMaster.html?url=ListMasterData.html&OpenType=1&IsPopup=1&SchemaCode=" + that.SchemaCode +
                        "&QueryCode=" + that.QueryCode + "&CtrlID=" + popupDivId + outputParams + that._getInputParam();
                	}
                	// modify by kinson.guo@20180611 for 支持开窗复选 end
                    popupDiv.find("iframe").attr("src", src);
                    popupDiv.modal("show");
                });
                //在Element后添加弹窗元素
                $(this.Element).after(popupLink).after(popupDiv);
                //弹窗页面双击回调函数(\Portal\WFRes\_Scripts\bizquery.js)
                window[popupDivId] = {};
                window[popupDivId].ListMasterCallBack = function (data) {
                    //将选择的记录值，赋值到界面元素
                    if (data) {
                        for (var field in data) {
                            $.MvcSheetUI.SetControlValue(field, data[field], that.GetRowNumber());
                        }
                    }
                    //关闭弹窗
                    popupDiv.modal("hide");
                };
            } else if (this.PopupWindow === "Dropdown") { //浮动层模式
                var popupDivId = "popupLink" + (new Date()).getTime();
                var outputParams = "";
                if (this.OutputMappings != "") {
                    outputParams = "&OutputParams=" + encodeURI(this.OutputMappings.replace(/,/g, "|").replace(/:/g, ","));
                }
                //浮动层div
                var popupDiv = $("<div style='display:none;z-index:9999;position:absolute;background-color:#f8f8f8;' id='" + popupDivId + "'><iframe scrolling='no' frameborder='0' width='550px' height='300px'></iframe></div>");

                //在Element后添加弹窗元素
                $(this.Element).after(popupDiv);

                //在Element后添加弹窗元素
                $(this.Element).after(popupLink).after(popupDiv);
                function showDownList() {
                    // modify by kinson.guo@20180611 for 下拉浮动框支持多选 begin
                    var src = "";
                    var SheetCode = $.MvcSheetUI.QueryString("SheetCode");
                    var ctrlID = that.Element.id==undefined?"":that.Element.id;
                    if(ctrlID.indexOf("mutiselect") > -1){
                        src = that.PortalRoot + "/admin/TabMaster.html?url=ListMasterDataNew.html&OpenType=1&IsPopup=1&SchemaCode=" + that.SchemaCode +
                            "&QueryCode=" + that.QueryCode + "&CtrlID=" + popupDivId + outputParams + that._getInputParam();
                    }else{
                        src = that.PortalRoot + "/admin/TabMaster.html?url=ListMasterData.html&OpenType=1&IsPopup=1&SchemaCode=" + that.SchemaCode +
                            "&QueryCode=" + that.QueryCode + "&CtrlID=" + popupDivId + outputParams + that._getInputParam();
                    }
                    // modify by kinson.guo@20180611 for 下拉浮动框支持多选 end
                    popupDiv.find("iframe").attr("src", src);
                    popupDiv.show();
                    var offset = $(that.Element).offset();
                    popupDiv.offset({ top: offset.top + $(that.Element).outerHeight() + 3, left: offset.left });
                }
                //给focus事件绑定浮动层方法
                $(this.Element).unbind("focus.Popup").bind("focus.Popup", function () {
                    showDownList();
                });
                //浮动层双击回调函数(\Portal\WFRes\_Scripts\bizquery.js)
                window[popupDivId] = {};
                window[popupDivId].ListMasterCallBack = function (data) {
                    //将选择的记录值，赋值到界面元素
                    if (data) {
                        for (var field in data) {
                            $.MvcSheetUI.SetControlValue(field, data[field], that.GetRowNumber());
                        }
                    }
                    //隐藏浮动层
                    popupDiv.hide();
                };
                //点击界面上的其它元素时，隐藏浮动层（浮动层为iframe，点击不会触发该事件）
                $(document).unbind("click." + popupDivId).bind("click." + popupDivId, function (e) {
                    if (!($(e.target).attr("type") == "text" &&
                            $(e.target).attr($.MvcSheetUI.PreDataKey + $.MvcSheetUI.DataFieldKey.toLowerCase()) == that.DataField)) {
                        popupDiv.hide();
                    }
                })
            }
        },
        _getInputParam: function () {
            var inputParam = "";
            if (this.InputMappings) {
                var items = this.InputMappings.split(",");
                for (var i = 0; i < items.length; i++) {
                    var fields = items[i].split(":");
                    if (fields && fields.length == 2) {
                        if (fields[0] && $.MvcSheetUI.GetSheetDataItem(fields[0], this.GetRowNumber())) {
                            inputParam += fields[1] + "," + $.MvcSheetUI.GetControlValue(fields[0], this.GetRowNumber()) + "|";
                        }
                    }
                }
                if (inputParam) {
                    inputParam = "&InputParam=" + encodeURI(inputParam.substring(0, inputParam.length - 1));
                }
            }
            return inputParam;
        },
        SetReadonly: function (v) {
            if (v) {
                $(this.Element).hide();
                var that = this;
                var lbl = $("<label for='" + $(that.Element).attr("id") + "'></label>");
                if (this.TextRightAlign) lbl.addClass("txtAlignRight").css("width", $(this.Element).width());
                else if (this.NumberRightAlign && this.IsNubmer()) { lbl.addClass("txtAlignRight"); }
                var val = $.trim(this.V);
                if (val != "") {
                    var strs = val.split("\n");
                    $(strs).each(function (i) {
                        if (i > 0) {
                            lbl.append("<br />");
                        }
                        lbl.append($("<span></span>").text(this.toString()));
                    });
                }
                lbl.insertAfter($(this.Element));
                this.GetFromatValue(lbl,  val);
                //移动
                if (this.IsMobile) {
                    this.Mask.html(this.GetText());
                }
            } else {
                $(this.Element).show();
                $(this.Element).next().remove();
            }
        },
        //值改变事件
        _OnChange: function (e) {
            // 执行验证
            this.Validate();

            if (this.OnChange) {
                //执行绑定事件
                this.RunScript(this.Element, this.OnChange);
            }

            //是否自动去除前后空格
            if (this.AutoTrim) {
                this.Value = this.Value.trim();
            }
        },
        // 数据验证
        Validate: function (effective, initValid) {
            if (!this.Editable) return true;
            if (initValid) {
                if (this.Required && !this.GetValue()) {
                    this.AddInvalidText(this.Element, "*", false);
                    return false;
                }
            }
            var val = this.GetValue();
            if (!effective) {
                if ($(this.Element).attr("data-required") || this.O.indexOf("R") > -1) this.Required = true;
                else this.Required = false;
                // 必填验证
                if (this.Required && !this.DoValidate(this.Valid.Required, [val], "*")) {
                    this.ValidateResult = false;
                    return false;
                }
                if (this.RegularExpression && val) {
                	this.RegularInvalidText = this.RegularInvalidText.replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/\"/g,"&quot;");
                    if (!this.DoValidate(this.Valid.RegularExpression, [val, this.RegularExpression], this.RegularInvalidText)) {
                        this.ValidateResult = false;
                        return false;
                    }
                }
            }

            // 处理数据逻辑型验证
            switch (this.LogicType) {
                case $.MvcSheetUI.LogicType.Int:
                	if (!this.DoValidate(this.Valid.Integer, [val], SheetLanguages.Current.EnterInteger)) {
                        this.ValidateResult = false;
                        return false;
                    }
                    if (!this.DoValidate(this.Valid.VerifyIntRange, [val], SheetLanguages.Current.VerifyIntRange)) {
                        this.ValidateResult = false;
                        return false;
                    }
                    break;
                case $.MvcSheetUI.LogicType.Long:
                    if (!this.DoValidate(this.Valid.Integer, [val], SheetLanguages.Current.EnterInteger)) {
                        this.ValidateResult = false;
                        return false;
                    }
                    if (!this.DoValidate(this.Valid.VerifyLongRange, [val], SheetLanguages.Current.VerifyLongRange)) {
                        this.ValidateResult = false;
                        return false;
                    }
                    break;
                case $.MvcSheetUI.LogicType.Double:
                    if (!this.DoValidate(this.Valid.Number, [val], SheetLanguages.Current.EnterNumber)) {
                        this.ValidateResult = false;
                        return false;
                    }
                    break;
                default:
                    break;
            }
            this.ValidateResult = true;
            return true;
        },
        //返回数据值
        SaveDataField: function () {
            var result = {};
            if (!this.Visiable || !this.Editable) return result;
            result[this.DataField] = $.MvcSheetUI.GetSheetDataItem(this.DataField); // this.SheetInfo.BizObject.DataItems[this.DataField];
            if (!result[this.DataField]) {
                if (this.DataField.indexOf(".") == -1) { alert(SheetLanguages.Current.DataItemNotExists + ":" + this.DataField); }
                return {};
            }

            // if (("" + result[this.DataField].V) != this.GetValue())
            {
                this.RefreshDataTrackLink();
                result[this.DataField].V = this.GetValue().trim();
                return result;
            }

            return {};
        }
    });
})(jQuery);
// SheetTime控件
//引用WdatePicker.js
//$.ajax({
//    url: _PORTALROOT_GLOBAL + "/WFRes/_Scripts/Calendar/WdatePicker.js",
//    type: "GET",
//    dataType: "script",
//    async: false,
//    cache: true,
//    global: false
//});

;
(function ($) {
    //控件执行
    $.fn.SheetTime = function () {
        return $.MvcSheetUI.Run.call(this, "SheetTime", arguments);
    };


    $.MvcSheetUI.Controls.SheetTime = function (element, options, sheetInfo) {
        //update by luxm
        element.removeAttribute("data-viewinnewcontainer");
        $.MvcSheetUI.Controls.SheetTime.Base.constructor.call(this, element, options, sheetInfo);
    };

    $.MvcSheetUI.Controls.SheetTime.Inherit($.MvcSheetUI.IControl, {
        Render: function () {
            // console.log(this.V,'this.V')
            var $element = $(this.Element),
                dataFieldValue = this.V,
                that = this;
            //是否可见
            if (!this.Visiable) {
                this.Element.style.display = "none";
                return;
            }

            //设置初始化值
            var displayDate;
            //发起模式
            //update by luxm 驳回后添加子表日期没有默认值，增加判断后还未发现其它bug
            // console.log(this.Originate,this.Editable,dataFieldValue,this.DefaultValue, '-------------------')
            if (this.Originate && this.Editable || this.Editable && !dataFieldValue && this.DefaultValue === "CurrentTime") {
                // console.log(dataFieldValue, 'dataFieldValue---')
                if (dataFieldValue && dataFieldValue !== "0001-01-01 00:00:00" && dataFieldValue !== "1753-01-01 00:00:00" && dataFieldValue !== "9999-12-31 00:00:00") {
                    displayDate = new Date(Date.parse(dataFieldValue.replace(/-/g, "/")));
                    // displayDate = '';
                    // console.log(displayDate, 'displayDate---')
                } else if (this.DefaultValue === "CurrentTime") {
                    displayDate = new Date();
                    // console.log(this.DefaultValue, 'this.DefaultValue');
                } else {
                    var ms = Date.parse(this.DefaultValue.replace(/-/g, "/"));
                    if (!isNaN(ms)) {
                        displayDate = new Date(ms);
                    }
                }
            } else {
                // console.log(dataFieldValue, 'dataFieldValue---')
                if ((this.DefaultValue === '' || this.DefaultValue == undefined)
                    && this.V.toString() == "1970-01-01 00:00:00") {
                    displayDate = "";
                } else if (dataFieldValue) {
                    if (dataFieldValue == "0001-01-01 00:00:00" || dataFieldValue == "1753-01-01 00:00:00" || dataFieldValue == "9999-12-31 00:00:00") {
                        displayDate = "";
                    } else {
                        displayDate = new Date(Date.parse(dataFieldValue.replace(/-/g, "/")));
                    }
                    if (dataFieldValue == "1970-01-01 00:00:00") {
                        displayDate = new Date();
                    }
                } else {
                    displayDate = "";
                }
            }
            //始化日期为空
            if (this.DefaultValue == "LBInitTime") {
                displayDate = "";
            }
            //不可编辑
            if (!this.Editable) {
                $element.after("<label style='width:100%;'>" + this._getDateTimeFormatString(displayDate).replace(/T/g, " ").replace("/Z/g", "") + "</label>");
                $element.hide();
                return;
            }

            //移动端
            if (this.IsMobile) {
                //移动端使用HTML5原生日期时间选择控件
                var inputType;
                switch (this.TimeMode) {
                    case "FullTime":
                    case "SimplifiedTime":
                        inputType = "datetime-local";
                        break;
                    case "OnlyDate":
                        inputType = "date";
                        break;
                    case "OnlyTime":
                        inputType = "time";
                        break;
                    default:
                        inputType = "date";
                        break;
                }
                $element.attr("type", "text");
                $element.attr('placeholder', SheetLanguages.Current.PleaseInput);
                var that = this;
                //通过IONIC初始化控件
                this.ionicInit(that, $element, inputType, $.MvcSheetUI.IonicFramework);
                var ua = window.navigator.userAgent.toLowerCase();
                if (ua.match(/MicroMessenger/i) == 'micromessenger' && ua.toLowerCase().indexOf("android") > -1) {
                    // $element.attr("disabled", true).css("color", "#000");
                }
                // 微信端点击显示日期控件
                this.Element.addEventListener("touchend", function () {
                    event.stopPropagation();
                });
                this.Element.addEventListener("touchstart", function () {
                    event.stopPropagation();
                });
                $element.val(this._getDateTimeFormatString(displayDate).replace("T", " "));
                //绑定change事件
                var that = this;
                $element.unbind("change.SheetTime").bind("change.SheetTime", function () {
                    that.Validate();
                    if (that.OnChange) {
                        that.RunScript(this, that.OnChange);
                    }
                });
            } else {
                // 查看痕迹
                if (this.TrackVisiable && !this.Originate && this.DataField.indexOf(".") == -1) {
                    this.RenderDataTrackLink();
                }

                $element.val(this._getDateTimeFormatString(displayDate));

                //绑定click事件
                $element.attr("onclick", "WdatePicker(" + this._getWdatePickerJson() + ")");

                // 绑定修改事件
                $element.attr("onchange", ""); //这行鬼东西不能少，否则无法触发change事件(可能由于WdatePicker的影响)

                if (!!window.ActiveXObject || "ActiveXObject" in window) {
                    $element[0].onchange = function () {
                        that.Validate();
                        if (that.OnChange) {
                            that.RunScript(this, that.OnChange);
                        }
                    };
                } else {
                    $element.unbind("change.SheetTime").bind("change.SheetTime", function () {
                        that.Validate();
                        if (that.OnChange) {
                            that.RunScript(this, that.OnChange);
                        }
                    });
                }

                //MinValue设置为另外一个控件的数据项，那个控件失去焦点时，重新设置minDate
                if (this.MinValue != "CurrentTime" && isNaN(Date.parse(this.MinValue.replace(/-/g, "/")))) {
                    var $control = $.MvcSheetUI.GetElement(this.MinValue);
                    if ($control) {
                        $control.unbind("blur.MinValue").bind("blur.MinValue", function () {
                            $element.attr("onclick", "WdatePicker(" + that._getWdatePickerJson() + ")");
                        });
                    }
                }
                //MaxValue设置为另外一个控件的数据项，那个控件失去焦点时，重新设置maxDate绑定focus
                if (this.MaxValue != "CurrentTime" && isNaN(Date.parse(this.MaxValue.replace(/-/g, "/")))) {
                    var $control = $.MvcSheetUI.GetElement(this.MaxValue);
                    if ($control) {
                        $control.unbind("blur.MaxValue").bind("blur.MaxValue", function () {
                            $element.attr("onclick", "WdatePicker(" + that._getWdatePickerJson() + ")");
                        });
                    }
                }
            }
        },
        ionicInit: function (that, element, inputType, ionic) {
            element.attr("readonly", "readonly");
            ionic.$scope.dateTimeTitle = "选择日期";
            var elementName = that.DataField.replace(".", "") + "element";
            ionic.$scope[elementName] = element;
            ionic.$scope.cancelClick = function (element) {
                element.val('');
            }
            element.parent().parent().attr("ion-datetime-picker", "");
            element.parent().parent().attr("data-title", "dateTimeTitle");
            element.parent().parent().attr("cancel-Click", "cancelClick");
            element.parent().parent().attr("element", elementName);
            element.parent().parent().attr(inputType, "");
            if (that.TimeMode != "SimplifiedTime")
                element.parent().parent().attr("seconds", "");
            var ngmodel = that.DataField + that.Options.RowNum;
            element.parent().parent().attr("ng-model", ngmodel);
            ionic.$compile(element.parent().parent())(ionic.$scope);
            ionic.$scope[ngmodel] = new Date();
            ionic.$scope.$watch(ngmodel, function (newVal, oldVal) {


                //update by luxm
                //移动端时间范围设置不生效
                var ms = new Date(Date.parse(that.MinValue.replace(/-/g, "/")));
                var mx = new Date(Date.parse(that.MaxValue.replace(/-/g, "/")));
                if (newVal && newVal < ms) {
                    alert("不能小于设置的最小时间");
                } else if (newVal > mx) {
                    alert("不能大于设置的最大时间");
                } else {
                    if (newVal == "Invalid Date" || newVal === oldVal) return;
                    if (!newVal) that._SetValue("");
                    else
                        that._SetValue(new Date(newVal));
                    that.RunScript(element, that.OnChange);
                    //修改不触发onchang事件问题
                    element.change();
                    that.Validate();
                }
            });
        },
        /* Validate: function (effective, initValid) {
             if (!this.Editable) return true;
             if (!effective) {
                 if ($(this.Element).attr("data-required") || this.O.indexOf("R") > -1) this.Required = true;
                 else this.Required = false;
                 // 必填验证
                 if (this.Required && !this.DoValidate(this.Valid.Required, [val], "*")) {
                     this.ValidateResult = false;
                     return false;
                 }
                 if (this.RegularExpression && val) {
                     if (!this.DoValidate(this.Valid.RegularExpression, [val, this.RegularExpression], this.RegularInvalidText)) {
                         this.ValidateResult = false;
                         return false;
                     }
                 }
             }
             var val = this.GetValue();
             var minDate = this.MinValue;
             var maxDate = this.MaxValue;

             var ms = new Date(Date.parse(minDate.replace(/-/g, "/")));
             var mx = new Date(Date.parse(maxDate.replace(/-/g, "/")));
             var newDate = new Date(Date.parse(val.replace(/-/g, "/")));
             if(val == "" && (minDate != "" || maxDate != "")){
                 return false;
             }

             //update by luwei
             if (this.IsMobile && typeof(newVal) !== "undefined" && newVal && (newVal < ms ||newVal > mx)) {
                  return false;
             }
            return true;
         },*/
        MobilePreBack: function () {

            //返回时，检查wdatepicker是否关闭
            if ($dp && typeof ($dp.hide) == "function") {
                $dp.hide();
            }
            return true;
        },
        //根据TimeMode返回对应格式的字符串
        _getDateTimeFormatString: function (dateTime) {
            if (!dateTime) {
                return "";
            }
            var month = dateTime.getMonth() + 1 < 10 ? ("0" + (dateTime.getMonth() + 1)) : (dateTime.getMonth() + 1);
            var day = dateTime.getDate() < 10 ? ("0" + dateTime.getDate()) : dateTime.getDate();
            var hour = dateTime.getHours() < 10 ? ("0" + dateTime.getHours()) : dateTime.getHours();
            var minute = dateTime.getMinutes() < 10 ? ("0" + dateTime.getMinutes()) : dateTime.getMinutes();
            var second = dateTime.getSeconds() < 10 ? ("0" + dateTime.getSeconds()) : dateTime.getSeconds();

            var date = dateTime.getFullYear() + "-" + month + "-" + day;
            var time = hour + ":" + minute + ":" + second;
            var stime = hour + ":" + minute;
            switch (this.TimeMode) {
                case "OnlyDate":
                    return date;
                    break;
                case "FullTime":
                    return date + " " + time;
                    break;
                case "OnlyTime":
                    return time;
                    break;
                case "SimplifiedTime":
                    return date + " " + stime;
                    break;
                default:
                    return date;
                    break;
            }
        },
        //构造WdatePickerJson
        _getWdatePickerJson: function () {
            if (this.WdatePickerJson != "") {
                return this.WdatePickerJson;
            } else {
                var p = "";
                switch (this.TimeMode) {
                    case "OnlyDate":
                        p += "dateFmt:'yyyy-MM-dd'";
                        break;
                    case "FullTime":
                        p += "dateFmt:'yyyy-MM-dd HH:mm:ss'";
                        break;
                    case "OnlyTime":
                        p += "dateFmt:'HH:mm:ss'";
                        break;
                    case "SimplifiedTime":
                        p += "dateFmt:'yyyy-MM-dd HH:mm'";
                        break;
                    default:
                        p += "dateFmt:'yyyy-MM-dd'";
                        break;
                }

                var minValue;
                if (this.MinValue != "") {
                    if (this.MinValue == "CurrentTime") {
                        minValue = new Date();
                    } else {
                        var ms = Date.parse(this.MinValue.replace(/-/g, "/"));
                        if (!isNaN(ms)) {
                            minValue = new Date(ms);
                        } else {
                            var $control = $(":text[" + $.MvcSheetUI.PreDataKey + $.MvcSheetUI.DataFieldKey.toLowerCase() +
                                "='" + this.MinValue + "']");
                            if ($control) {
                                var ms = Date.parse($control.val().replace(/-/g, "/"));
                                if (!isNaN(ms)) {
                                    minValue = new Date(ms);
                                }
                            }
                        }
                    }
                }
                if (minValue != undefined) {
                    p += ",minDate:'" + this._getDateTimeFormatString(minValue) + "'";
                }

                var maxValue;
                if (this.MaxValue != "") {
                    if (this.MaxValue == "CurrentTime") {
                        maxValue = new Date();
                    } else {
                        var ms = Date.parse(this.MaxValue.replace(/-/g, "/"));
                        if (!isNaN(ms)) {
                            maxValue = new Date(ms);
                        } else {
                            var $control = $(":text[" + $.MvcSheetUI.PreDataKey + $.MvcSheetUI.DataFieldKey.toLowerCase() +
                                "='" + this.MaxValue + "']");
                            if ($control) {
                                var ms = Date.parse($control.val().replace(/-/g, "/"));
                                if (!isNaN(ms)) {
                                    maxValue = new Date(ms);
                                }
                            }
                        }
                    }
                }
                if (maxValue != undefined) {
                    p += ",maxDate:'" + this._getDateTimeFormatString(maxValue) + "'";
                }
                return "{" + p + "}";
            }
        },
        GetText: function () {
            return $(this.Element).val().replace(/T/g, " ").replace(/Z/g, "");
        },
        SetValue: function (obj) {
            if (obj) {
                if (Array.isArray(obj) && obj.length === 1) {
                    obj = obj[0];
                }
                var stamp = Date.parse(obj.replace(/T/g, " ").replace(/-/g, "/"));
                if (!isNaN(stamp)) {
                    var date = new Date(stamp);
                    $(this.Element).val(this._getDateTimeFormatString(date));
                }
            }
        },
        _SetValue: function (obj) {
            //if (obj) {
            var value = this._getDateTimeFormatString(obj);
            value = value.replace("T", " ");
            $(this.Element).val(value);
            //  }
        },
        GetValue: function () {
            var v = null;
            if (this.Editable) {
                v = $(this.Element).val();
            } else {
                v = $(this.Element).siblings('label').html();
            }
            return v;
        },
        SaveDataField: function () {
            var result = {};
            if (!this.Visiable || !this.Editable) return result;

            if (this.DataField) {
                var dataFieldItem = $.MvcSheetUI.GetSheetDataItem(this.DataField);
                if (dataFieldItem) {
                    var value = $(this.Element).val();
                    //如果为OnlyTime 需要补全年月日，否则数据无法保存
                    if (this.TimeMode == "OnlyTime") {
                        value = "1970-01-01 " + value;
                    }
                    result[this.DataField] = dataFieldItem;
                    result[this.DataField].V = value;
                } else {
                    if (this.DataField.indexOf(".") == -1) {
                        alert(SheetLanguages.Current.DataItemNotExists + ":" + this.DataField);
                    }
                }
            }
            return result;
        }
    });
})(jQuery);
// SheetTimeSpan控件
;
(function ($) {
    //控件执行
    $.fn.SheetTimeSpan = function () {
        return $.MvcSheetUI.Run.call(this, "SheetTimeSpan", arguments);
    };

    $.MvcSheetUI.Controls.SheetTimeSpan = function (element, options, sheetInfo) {
        $.MvcSheetUI.Controls.SheetTimeSpan.Base.constructor.call(this, element, options, sheetInfo);
    };

    $.MvcSheetUI.Controls.SheetTimeSpan.Inherit($.MvcSheetUI.IControl, {
        Render: function () {
        	if(this.V != null && this.V.indexOf(",") > 0){
        		this.V = this.V.replace(/,/g,"");
        	}
            var that = this;
            $element = $(this.Element);

            //是否可见
            if (!this.Visiable) {
                $element.hide();
                return;

            }
            // 查看痕迹
            if (this.TrackVisiable && !this.Originate && this.DataField.indexOf(".") == -1) { this.RenderDataTrackLink(); }
            var timespan = this._getTimeSpan(this.V);
            if (this.Editable) {
                var height = this.IsMobile ? "35px" : "30px";
                this.$dayElement = $("<input type='number' min='0' max='99999999' style='width:58px;height:" + height + ";padding-left:3px;margin:0px 2px 0px 0px' />").val(timespan.day);
                this.$hourElement = $("<input type='number' min='0' max='23' style='width:39px;height:" + height + ";padding-left:3px;margin:0px 2px 0px 2px;' />").val(timespan.hour);
                this.$minuteElement = $("<input type='number' min='0' max='59' style='width:39px;height:" + height + ";padding-left:3px;margin:0px 2px 0px 2px' />").val(timespan.minute);
                this.$secondElement = $("<input type='number' min='0' max='59' style='width:39px;height:" + height + ";padding-left:3px;margin:0px 2px 0px 2px' />").val(timespan.second);

                $element.append(this.$dayElement, document.createTextNode(SheetLanguages.Current.Day),
                    this.$hourElement, document.createTextNode(SheetLanguages.Current.Hour),
                    this.$minuteElement, document.createTextNode(SheetLanguages.Current.Minute),
                    this.$secondElement, document.createTextNode(SheetLanguages.Current.Second));

                //天
                this.$dayElement.unbind("keyup.SheetTimeSpan").bind("keyup.SheetTimeSpan", function (e) {
                    var val = $(this).val();
                    if (!that._isDay(val)) {
                        $(this).val("0");
                        that._focusText(this);
                    //add by luwei : 限制时间段天数的长度为8，即最大值99999999
                    } else if (val.length > 8) {
                    	$(this).val("0");
                        that._focusText(this);
                    }
                });
                //时
                this.$hourElement.unbind("keyup.SheetTimeSpan").bind("keyup.SheetTimeSpan", function () {
                    var val = $(this).val();
                    if (!that._isHour(val)) {
                        $(this).val("0");
                        that._focusText(this);
                    }
                });
                //分
                this.$minuteElement.unbind("keyup.SheetTimeSpan").bind("keyup.SheetTimeSpan", function () {
                    var val = $(this).val();
                    if (!that._isMinuteOrSecond(val)) {
                        $(this).val("0");
                        that._focusText(this);
                    }
                });
                //秒
                this.$secondElement.unbind("keyup.SheetTimeSpan").bind("keyup.SheetTimeSpan", function () {
                    var val = $(this).val();
                    if (!that._isMinuteOrSecond(val)) {
                        $(this).val("0");
                        that._focusText(this);
                    }
                });

                $element.find("input").unbind("focus.SheetTimeSpan").bind("focus.SheetTimeSpan", function () {
                    that._focusText(this);
                });

                $element.find("input").unbind("change.SheetTimeSpan").bind("change.SheetTimeSpan", function () {
                    that.Validate();
                    if (that.OnChange) {
                        that.Element.value = that.GetValue();
                        that.RunScript(that.Element, that.OnChange);
                    }
                });
            } else {
                $element.after("<label style='width:100%;'>" + this._getLabelText(timespan) + "</label>");
                $element.hide();
            }
        },
        _focusText: function (input) {
            if (this.IsMobile && $.os.ios) {
                input.setSelectionRange(0, 9999);
            } else {
                $(input).select();
            }
        },
        RenderMobile: function () {
            //可编辑
            if (this.Editable) {
                this.constructor.Base.RenderMobile.apply(this);
                var that = this;
                if (that._isNotEmpty()) {
                    that.Mask.css({ 'color': '#2c3038' });
                } else {
                    that.Mask.css({ 'color': '#797f89' });
                }
                this.ionicInit(that, $.MvcSheetUI.IonicFramework);
            } else {
                this.Render();
            }
        },
        ionicInit: function (that, ionic) {
            
            that.Mask.parent().parent().unbind("click.showTimespan").bind("click.showTimespan", function () {
                ionic.$scope.data = {
                    day: that.$dayElement.val() - 0,
                    hour: that.$hourElement.val() - 0,
                    min: that.$minuteElement.val() - 0,
                    second: that.$secondElement.val() - 0,
                    dataField: that.DataField
                };
                ionic.$ionicPopup.show({
                    templateUrl: 'Mobile/form/templates/timeSpanTemp.html',
                    title: '填写时间段',
                    scope: ionic.$scope,
                    cssClass: 'timespan-popup',
                    buttons: [{
                        text: SheetLanguages.Current.Cancel,
                        onTap: function (e) { }
                    },
                    {
                        text: '<b>' + SheetLanguages.Current.OK + '</b>',
                        type: 'button-calm',
                        onTap: function (e) {
                            that.$dayElement.val(ionic.$scope.data.day);
                            that.$hourElement.val(ionic.$scope.data.hour);
                            that.$minuteElement.val(ionic.$scope.data.min);
                            that.$secondElement.val(ionic.$scope.data.second);
                            that.Validate();                            
                            that._SetValue(ionic.$scope.data);
                            // console.log(ionic.$scope.data);
                        }
                    }
                    ]
                });
                ionic.$scope.DateChange = function (type) {
                    if (type == "day") {
                    	var day = ionic.$scope.data.day || 0;
                        day = day < 0 ? 0 : day > 99999999 ? 99999999 : day;
                        ionic.$scope.data.day = day;
                    } else if (type == "hour") {
                        var hour = ionic.$scope.data.hour || 0;
                        hour = hour < 0 ? 0 : hour > 23 ? 23 : hour;
                        ionic.$scope.data.hour = hour;
                    } else if (type == "min") {
                        var min = ionic.$scope.data.min || 0
                        min = min < 0 ? 0 : min > 59 ? 59 : min;
                        ionic.$scope.data.min = min;
                    } else if (type == "second") {
                        var second = ionic.$scope.data.second || 0;
                        second = second < 0 ? 0 : second > 59 ? 59 : second;
                        ionic.$scope.data.second = second;
                    }

                    if (that.OnChange) {
                        that.Element.value = that.GetValue();
                        that.RunScript(that.Element, that.OnChange);
                    }
                }
            })
        },
        _getTimeSpan: function (text) {
            var timespan = {};
            if (text) {
                var pointIndex = text.indexOf(".");
                var time = text;
                if (pointIndex > -1) {
                    timespan.day = parseInt(text.substring(0, pointIndex));
                    time = text.substring(pointIndex + 1);
                }
                var timeArray = time.split(":");
                if (timeArray && timeArray.length == 3) {
                    timespan.hour = parseInt(timeArray[0]);
                    timespan.minute = parseInt(timeArray[1]);
                    timespan.second = parseInt(timeArray[2]);
                }
            }
            if (!timespan.day) { timespan.day = 0; }
            if (!timespan.hour) { timespan.hour = 0; }
            if (!timespan.minute) { timespan.minute = 0; }
            if (!timespan.second) { timespan.second = 0; }
            return timespan;
        },
        _isDay: function (val) {
            return /^\d+$/.test(val);
        },
        _isHour: function (val) {
            return /^([0-1]?[0-9]|2[0-3])$/.test(val);
        },
        _isMinuteOrSecond: function (val) {
            return /^[0-5]?[0-9]$/.test(val);
        },
        _getLabelText: function (timespan) {
            var labelText = "";
            if (timespan.day != 0) { labelText = timespan.day + SheetLanguages.Current.Day + timespan.hour + SheetLanguages.Current.Hour + timespan.minute + SheetLanguages.Current.Minute + timespan.second + SheetLanguages.Current.Second; } else if (timespan.hour != 0) { labelText = timespan.hour + SheetLanguages.Current.Hour + timespan.minute + SheetLanguages.Current.Minute + timespan.second + SheetLanguages.Current.Second; } else if (timespan.minute != 0) { labelText = timespan.minute + SheetLanguages.Current.Minute + timespan.second + SheetLanguages.Current.Second; } else { labelText = timespan.second + SheetLanguages.Current.Second; }
            return labelText;
        },
        GetText: function () {
            var text = "";
            var val = this.GetValue();
            if (val) {
                var timespan = this._getTimeSpan(val);
                return this._getLabelText(timespan);
            }
            return text;
        },
        GetValue: function () {
            if (!this.Editable) return this.V;
            var day = this.$dayElement.val();
            var hour = this.$hourElement.val();
            var minute = this.$minuteElement.val();
            var second = this.$secondElement.val();
            if (day || hour || minute || second) {
                return (day ? day : "0") + "." +
                    (hour ? hour : "0") + ":" +
                    (minute ? minute : "0") + ":" +
                    (second ? second : "0");
            } else {
                return null;
            }
        },
        SetValue: function (obj) {
            if (this.Editable) {
                var timespan = this._getTimeSpan(obj);
                if (timespan) {
                    this.$dayElement.val(timespan.day);
                    this.$hourElement.val(timespan.hour);
                    this.$minuteElement.val(timespan.minute);
                    this.$secondElement.val(timespan.second);
                }
                if (this.IsMobile) {
                    this.Mask.html(this.GetText());
                }
            }
        },
        _GetValue: function (obj) {
            var day = obj.day;
            var hour = obj.hour;
            var minute = obj.min;
            var second = obj.second;
            var text = "";
            if (day || hour || minute || second) {
                text = (day ? day : "0") + "." +
                    (hour ? hour : "0") + ":" +
                    (minute ? minute : "0") + ":" +
                    (second ? second : "0");
            } else {
                text = null;
            }
            return text;
        },
        _SetValue: function (obj) {
            if (this._isNotEmpty()) {
                this.Mask.css({ 'color': '#2c3038' });
            } else {
                this.Mask.css({ 'color': '#797f89' });
            }
            this.SetValue(this._GetValue(obj));
            this.Mask.html(this.GetText());
        },
        // 数据验证
        _isNotEmpty: function () {
            var day = parseInt(this.$dayElement.val());
            var hour = parseInt(this.$hourElement.val());
            var minute = parseInt(this.$minuteElement.val());
            var second = parseInt(this.$secondElement.val());
            return day || hour || minute || second;
        },
        Validate: function (effective, initValid) {
            if (!this.Editable) return true;

            if (initValid) {
                // 必填验证
                if (this.Required && !this._isNotEmpty()) {
                    this.AddInvalidText(this.Element, "*", false);
                    return false;
                }
            }

            if (!effective) {
                if (this.Required && !this.DoValidate(this._isNotEmpty, [], "*")) {
                    this.ValidateResult = false;
                    return false;
                }
            }

            this.ValidateResult = true;
            return true;
        },
        SaveDataField: function () {
            var result = {};
            if (!this.Visiable || !this.Editable) return result;

            if (this.DataField) {
                var dataFieldItem = $.MvcSheetUI.GetSheetDataItem(this.DataField);
                if (dataFieldItem) {
                    var value = this.GetValue();
                    //if (value.indexOf(".") > -1) {
                    //    //.在前端存在bug
                    //    value = value.replace(".", ".");
                    //}

                    //if (value && dataFieldItem.V != value)
                    {
                        result[this.DataField] = dataFieldItem;
                        result[this.DataField].V = value;
                    }
                } else {
                    if (this.DataField.indexOf(".") == -1) { alert(SheetLanguages.Current.DataItemNotExists + ":" + this.DataField); }
                }
            }
            return result;
        }
    });
})(jQuery);
﻿//工具栏
//构造SheetToolBar，需要根据表单数据，构造需要的按钮

_PORTALROOT_GLOBAL = $.MvcSheetUI.PortalRoot;

(function () {
    $.fn.SheetToolBar = function () {
        return $.MvcSheetUI.Run.call(this, "SheetToolBar", arguments);
    };

    $.MvcSheetUI.Controls.SheetToolBar = function (element, args, sheetInfo) {
        this.Element = element;
        this.SheetInfo = sheetInfo;
        this.ControlManagers = {};

        for (var i in args) {
            this.AddButton(args[i]);
        }
        return this;
    };

    $.MvcSheetUI.Controls.SheetToolBar.prototype = {
        AddButton: function (option) {
        	
            if (option) {
                var key = option.Action || option.Text;
                if (key == undefined) return;
                if (this.ControlManagers[key]) return this.ControlManagers[key];
                if ($.MvcSheetToolbar[option.Action]) {
                    this.ControlManagers[option.Action] = new $.MvcSheetToolbar[option.Action](this.Element, option, this.SheetInfo);
                } else {
                    this.ControlManagers[key] = new $.MvcSheetToolbar.IButton(this.Element, option, this.SheetInfo);
                }
            }
        }
    };
})(jQuery);

//#region 按钮基类
$.MvcSheetToolbar = {};
$.MvcSheetToolbar.IButton = function (element, args, sheetInfo) {
    //this.Action = args.Action;
    //this.Icon = args.Icon;
    //this.Text = args.Text;
    for (var key in args) {
        this[key] = args[key];
    }
    this.ColumnCss = "> .col-md-1,> .col-md-2,> .col-md-3,> .col-md-4,> .col-md-5,> .col-md-6,> .col-md-7,> .col-md-8,> .col-md-9,> .col-md-10,> .col-md-11,> .col-md-12";
    this.CloseAfterAction = args.CloseAfterAction || false;//关闭
    this.PostSheetInfo = args.PostSheetInfo || false;
    //是否移动端
    this.IsMobile = sheetInfo.IsMobile || ($.MvcSheetUI.QueryString("ismobile") == "true");
    //执行后台通讯之前的事件
    this.OnActionPreDo = args.OnActionPreDo;
    this.OnAction = args.OnAction;
    //执行后台通讯之后的事件
    this.OnActionDone = args.OnActionDone;
    //设置文本样式
    this.CssClass = args.CssClass || "";

    this.Container = element;//按钮容器ul
    this.SheetInfo = sheetInfo;
    this.Element = null;//当前按钮元素 li
    //参数：[{数据项1},{数据项2},...]或["#ID1"，"#ID2",...]或["数据1","数据2"]或混合
    this.Datas = args.Datas;

    //绑定的参数
    this.Options = args.Options;

    this.PermittedActions = sheetInfo.PermittedActions;
    this.Visible = this.PermittedActions[this.Action] == undefined ? true : this.PermittedActions[this.Action];
    this.MobileVisible = args.MobileVisible === undefined ? this.Visible : args.MobileVisible;
    //执行事件
    this.PreRender();
    this.Render();
};
$.MvcSheetToolbar.IButton.prototype = {
    PreRender: function () {
        var txt = this.Text;
        if ($.MvcSheetUI.SheetInfo.Language) {
            txt = this[$.MvcSheetUI.SheetInfo.Language] || this.Text;
        }
        this.Text = txt;
    },
    Render: function () {
        var actionKey = this.Action || this.Text;
        if (!this.Visible) {
            $(this.Container).children("li[data-action='" + actionKey + "']").hide();
            return;
        }
        this.Element = $(this.Container).children("li[data-action='" + actionKey + "']");
        if (this.Element.length == 0) {
            this.Element = this._CreateButtonElement(this.Action, this.Icon, this.Text);
            if (!this.IsMobile) {
                $(this.Container).append(this.Element);
            }
        }
        this.BindClick();
    },
    BindClick: function () {
        var actionKey = this.Action || this.Text;
        this.Element.unbind("click." + actionKey).bind("click." + actionKey, this, function (e) {
            e.data.ActionClick.apply(e.data);
        });
    },
    _CreateButtonElement: function (action, icon, text) {
    	// 每10个汉字注意添加换行符，优化用户体验
    	/*var btnJson = {
    			Submit:"即同意，流程将继续流转",
    			Forward:"允许当前用户将任务转&#10;办给其他人，转办后自&#10;己的任务消失，由转办&#10;人进行继续处理；",
    			Retrieve:"提交任务后，并且下一活动&#10;环节未处理时，取回后任务&#10;重新回到当前用户的待办中；",
    			Reject:"即拒绝，将流程驳回到某&#10;一节点，被驳回人需在待&#10;办中重新处理",
    			Circulate:"将当前活动环节传阅给其他用户",
    			Assist:"A协办给B，流程从A消失&#10;并流转到B，B拥有和A一&#10;样的表单权限，B提交后会&#10;直接回到A继续审批"
    			};  */
    	var btnTitle = SheetLanguages.Current[this.Action+"Prompt"] == undefined ? text:SheetLanguages.Current[this.Action+"Prompt"];
        var liElement = $("<li title='"+btnTitle+"' data-action='" + this.Action + "'></li>");
        var linkElement = $("<a title='"+btnTitle+"' href='javascript:void(0);'></a>");
        var imgElement = $("<i  title='"+btnTitle+"' class='panel-title-icon fa " + this.Icon + " toolImage'></i>");
        var spanElement = $("<span title='"+btnTitle+"' class='toolText'>" + (text.length > 17 ? text.substring(0, 16) + "..." : text) + "</span>");
        if (this.CssClass) {
            spanElement.addClass(this.CssClass);
        }
        return liElement.append(linkElement.append(imgElement).append(spanElement));
        //return $("<li data-action='" + this.Action + "'><a href='javascript:void(0);'><i class='panel-title-icon fa " + this.Icon + " toolImage'></i><span class='toolText'>" + this.Text + "</span></a></li>");
    },
    ActionClick: function () {
        // console.log(11111)
        //doAction之前的事件
        var callResult = true;
        // debugger
        if ($.isFunction(this.OnActionPreDo)) {//javascript函数
            callResult = this.OnActionPreDo.apply(this);
        }
        else if (this.OnActionPreDo) {//javascript语句
            callResult = new Function(this.OnActionPreDo).apply(this);
        }
        //结果成功
        if (callResult == null || callResult == true) {
            //执行后台Action
            this.DoAction.apply(this);
        }

        if (this.OnActionDone) {
            this.OnActionDone.apply(this);
        }
    },
    //执行
    DoAction: function () {
        //继承的按钮，如果需要掉基类的DoAction，用 this.constructor.Base.DoAction.apply(this);
        if (this.OnAction) {
            this.OnAction.apply(this);
        } else {
            if (this.Action) {
                $.MvcSheet.Action(this);
            }
        }
    },
    //回调函数
    OnActionDone: function () { },

    FetchUser: function (_Title, _IsMulti, _UserOptions, _CheckText, _Checked) {
        var that = this;
        if (!this.SheetUserInited && !this.SheetInfo.IsMobile) {
            this.SheetUserInited = true;
            //选人控件
            var DefaultOptions = {
                O: "VE",
                L: _IsMulti ? $.MvcSheetUI.LogicType.MultiParticipant : $.MvcSheetUI.LogicType.SingleParticipant
            };
            if (_UserOptions) {
                $.extend(DefaultOptions, _UserOptions)
            }

            var _SheetUser = $("<div>").SheetUser(DefaultOptions);
            //复选框
            var chkListenConstancy = null;

            if (_CheckText && !this.SheetInfo.IsMobile) { // 只有PC端显示，移动端会遮住选人
                var ckid = $.MvcSheetUI.NewGuid();
                chkListenConstancy = $("<input type='checkbox' id='" + ckid + "' />");
                //默认选中
                chkListenConstancy.prop("checked", !!_Checked);
                var labelForCheckbox = $("<label for='" + ckid + "'>" + _CheckText + "</label>")
                this.CheckText = chkListenConstancy;
            }

            if (!this.SheetInfo.IsMobile) {
                var body = $("<div><div style='padding-bottom:6px'>" + _Title + "<span style='color:red;'>*</span></div></div>");
                //update by luwei : 增大高度
                var userEle = $(_SheetUser.Element);
                if (that.Action && that.Action === "Circulate") {
                	var _css1 = {"min-height" : "201px", "max-height" : "201px"};
                	userEle.css(_css1);
                	userEle.find("ul").css("overflow-y", "auto").css(_css1);
                	userEle.find("ul").find("li");
                }
                body.css({ "min-height": 365, "padding": "10px 20px" }).append(_SheetUser.Element);

                if (that.Action) {
                	if (that.Action === "Forward") {
                		body.append("<div style='padding-bottom:6px'>" + SheetLanguages.Current.ForwardComment + "</div>")
                		body.append("<textarea style='width:100%;height:150px' rows='10' id='forwardComment' placeholder='" + SheetLanguages.Current.ForwardCommentTip + "'></textarea>")
                	} else if (that.Action === "Assist") {
                		body.append("<div style='padding-bottom:6px'>" + SheetLanguages.Current.AssistComment + "</div>")
                		body.append("<textarea style='width:100%;height:150px' rows='10' id='assistComment' placeholder='" + SheetLanguages.Current.AssistCommentTip + "'></textarea>")
                	} else if (that.Action === "Consult") {
                		body.append("<div style='padding-bottom:6px'>" + SheetLanguages.Current.ConsultComment + "</div>")
                		body.append("<textarea style='width:100%;height:150px' rows='10' id='consultComment' maxlength='1000' placeholder='" + SheetLanguages.Current.ConsultCommentTip + "'></textarea>")
                	}
                }
                
                //if (chkListenConstancy) {
                //    $(_SheetUser.Element).after($("<div style='padding-top:6px'></div>").append(chkListenConstancy);.append(labelForCheckbox));
                //}

                this.ModalManager = new $.SheetModal(
                    _Title,
                    body,
                    [{
                        Text: SheetLanguages.Current.OK,
                        DoAction: function () {
                            var userid = this.SheetUser.GetValue();
                            this.SheetAction.Datas = [];
                            if (userid) {
                                this.SheetAction.Datas.push(userid.toString());

                                if (this.ChecBoxOjb) {
                                    this.SheetAction.Datas.push(this.ChecBoxOjb.prop("checked"));
                                }
                                
                                //add by luwei : 转发意见
                                if(this.SheetAction.Action === "Forward") {
                                	this.SheetAction.Datas.push($("#forwardComment").val());
                                } else if(this.SheetAction.Action === "Assist") {
                                	this.SheetAction.Datas.push($("#assistComment").val());
                                } else if(this.SheetAction.Action === "Consult") {
                                	this.SheetAction.Datas.push($("#consultComment").val());
                                }

                                $.MvcSheet.Action(this.SheetAction);
                                this.ModalManager.Hide();
                                
                                _SheetUser.ClearChoices();//清除选人控件值
                                if(this.SheetAction.Action === "Forward") {
                                	$("#forwardComment").val("");
                                } else if(this.SheetAction.Action === "Assist") {
                                	$("#assistComment").val("");
                                } else if(this.SheetAction.Action === "Consult") {
                                	$("#consultComment").val("");
                                }
                                
                                //open(location, '_self').close();
                            }
                            else {
                                // console.log(SheetLanguages.Current.SelectUser)
                                alert(SheetLanguages.Current.SelectUser);
                            }
                        },
                        SheetUser: _SheetUser,
                        ChecBoxOjb: chkListenConstancy,
                        SheetAction: that
                    },
                    {
                        Text: SheetLanguages.Current.Close,
                        DoAction: function () {
                            this.ModalManager.Hide();
                        }
                    }]
                    );
            }
        }

        if (this.SheetInfo.IsMobile) {
        	
            var DefaultOptions = {
                O: "VE",
                L: _IsMulti ? $.MvcSheetUI.LogicType.MultiParticipant : $.MvcSheetUI.LogicType.SingleParticipant
            };
            if (_UserOptions) {
                $.extend(DefaultOptions, _UserOptions)
            }
            var _commentTitle = "";
            var _commentVaule = "";
            if (this.Action == "Forward") { _commentTitle = SheetLanguages.Current.ForwardComment; _commentVaule = SheetLanguages.Current.InputYourForwardComment; }
            if (this.Action == "Assist") { _commentTitle = SheetLanguages.Current.AssistComment; _commentVaule = SheetLanguages.Current.InputYourAssistComment; }
            if (this.Action == "Consult") { _commentTitle = SheetLanguages.Current.ConsultComment; _commentVaule = SheetLanguages.Current.InputYourConsultComment; }
            $.MvcSheetUI.actionSheetParam = {
                ueroptions: DefaultOptions,
                title: this.Text,//标题
                Action: that.Action,
                DisplayName: this.SheetInfo.DisplayName,
                UserName: this.SheetInfo.UserName,
                Text: _Title,//请选择**
                commentVaule: _commentVaule//**意见
            };
            $.MvcSheetUI.IonicFramework.$state.go("form.fetchuser");
        }
        else {
            this.ModalManager.Show();
        }
    },
    GetMobileProxy: function (_thatAction) {
        return {
            text: _thatAction.Text,
            handler: function () {
                _thatAction.ActionClick();
            }
        }
    }
};
//#endregion

//设置提交和驳回下拉框
var dropMenu1 = null;
var dropMenu2 = null;
//#region 保存
$.MvcSheetToolbar.Save = function (element, option, sheetInfo) {
    return $.MvcSheetToolbar.Save.Base.constructor.call(this, element, option, sheetInfo);
};
$.MvcSheetToolbar.Save.Inherit($.MvcSheetToolbar.IButton, {
    DoAction: function () {
        $.MvcSheet.Save(this);
        top.postMessage("IsSave", "*")
    }
});
//#endregion

//#region 流程状态
$.MvcSheetToolbar.ViewInstance = function (element, option, sheetInfo) {
    return $.MvcSheetToolbar.ViewInstance.Base.constructor.call(this, element, option, sheetInfo);
};
$.MvcSheetToolbar.ViewInstance.Inherit($.MvcSheetToolbar.IButton, {
    DoAction: function () {
        if (this.SheetInfo.IsMobile) {
            $.MvcSheetUI.IonicFramework.$state.go("form.instancestate", { Mode: this.SheetInfo.SheetMode, InstanceID: this.SheetInfo.InstanceId, WorkflowCode: this.SheetInfo.WorkflowCode, WorkflowVersion: this.SheetInfo.WorkflowVersion });
        }
        else {
        	if(dropMenu1){dropMenu1.hide();}
        	if(dropMenu2){dropMenu2.hide();}
            //打开新的页面，_PORTALROOT_GLOBAL是模板页定义
            if (!this.SheetInfo.IsOriginateMode) {
                window.open(_PORTALROOT_GLOBAL + "/index.html#/InstanceDetail/" + this.SheetInfo.InstanceId + "/" + (this.SheetInfo.WorkItemId == null ? "" : this.SheetInfo.WorkItemId) + "//?WorkItemType=" + this.SheetInfo.WorkItemType, "_blank");
            } else {
                window.open(_PORTALROOT_GLOBAL + "/index.html#/WorkflowInfo///" + this.SheetInfo.WorkflowCode + "/" + this.SheetInfo.WorkflowVersion, "_blank");
            }
        }
    }
});
//#endregion

//#region 预览
$.MvcSheetToolbar.PreviewParticipant = function (element, option, sheetInfo) {
    return $.MvcSheetToolbar.PreviewParticipant.Base.constructor.call(this, element, option, sheetInfo);
};
$.MvcSheetToolbar.PreviewParticipant.Inherit($.MvcSheetToolbar.IButton, {
    DoAction: function () {
    	if(dropMenu1){dropMenu1.hide();}
    	if(dropMenu2){dropMenu2.hide();}
        this.constructor.Base.DoAction(this);
    }
});
//#endregion

//#region 取消
$.MvcSheetToolbar.CancelInstance = function (element, option, sheetInfo) {
    return $.MvcSheetToolbar.CancelInstance.Base.constructor.call(this, element, option, sheetInfo);
};
$.MvcSheetToolbar.CancelInstance.Inherit($.MvcSheetToolbar.IButton, {
    //PreRender: function () {
    //    this.constructor.Base.PreRender();

    //    //this.OnActionPreDo = function () {
    //    //    return confirm("确定执行取消流程操作?");
    //    //};
    //},
    DoAction: function () {
    	if(dropMenu1){dropMenu1.hide();}
    	if(dropMenu2){dropMenu2.hide();}
        var that = this;
        $.MvcSheet.ConfirmAction(SheetLanguages.Current.ConfirmCancelInstance, function () {
            $.MvcSheet.Action(that);
        });
    }
});
//#endregion

//#region 驳回
$.MvcSheetToolbar.Reject = function (element, option, sheetInfo) {
    return $.MvcSheetToolbar.Reject.Base.constructor.call(this, element, option, sheetInfo);
};
$.MvcSheetToolbar.Reject.Inherit($.MvcSheetToolbar.IButton, {
    Render: function () {
        if (!this.Visible) {
            var actionKey = this.Action || this.Text;
            $(this.Container).children("li[data-action='" + actionKey + "']").hide();
            return;
        }

        if (this.SheetInfo.ApprovalListVisible) {
            this.Text = SheetLanguages.Current.Disagree;
        }

        var RejectActivities = [];
        if (this.SheetInfo.RejectActivities) {
            for (var i = 0; i < this.SheetInfo.RejectActivities.length; ++i) {
                RejectActivities.push(
                    {
                        Action: this.SheetInfo.RejectActivities[i].Code,
                        Icon: this.Icon,
                        Text: this.SheetInfo.RejectActivities[i].Name,
                        OnAction: function () {
                            $.MvcSheet.Reject(this, this.Action);
                        },
                        MobileVisible: false
                    });
            }
        }
        if (RejectActivities.length > 0) {
            if (RejectActivities.length == 1) {
                //只有一个的时候
                this.Text = RejectActivities[0].Text;
                this.DestActivity = RejectActivities[0].Action;
                this.constructor.Base.Render.apply(this);
            } else {
                this.constructor.Base.Render.apply(this);
                this.DropdownMenu = $("<ul class='dropdown-menu'></ul>");
                var Menus = this.DropdownMenu.SheetToolBar(RejectActivities);
                if (this.IsMobile) {
                    this.MobileActions = [];
                    for (_Action in Menus.ControlManagers) {
                        var that = Menus.ControlManagers[_Action];
                        this.MobileActions.push(this.GetMobileProxy(that));
                    };
                }

                this.Element.append(this.DropdownMenu);
                this.OnActionPreDo = null;
                dropMenu1 = this.DropdownMenu;
            }
        }
        else {
            this.constructor.Base.Render.apply(this);
        }
    },
    DoAction: function () {
        if (this.DropdownMenu) {
            if (this.IsMobile) {
                var buttons = this.MobileActions;
                var hideSheet = $.MvcSheetUI.IonicFramework.$ionicActionSheet.show({
                    buttons: buttons,
                    buttonClicked: function (index) {
                        buttons[index].handler();
                        return true;
                    }
                });
            }
            else {
                if (this.DropdownMenu.is(":hidden")){
                	if(dropMenu2){
                		dropMenu2.hide();
                	}
                    this.DropdownMenu.show();
                    $("#divTopBars").css({"height":"inherit","overflow":"inherit"});
                    $("i#dropTopBars").addClass("glyphicon-chevron-up").removeClass("glyphicon-chevron-down");
                    }
                else{
                    this.DropdownMenu.hide();
                    }
            }
        }
        else if (this.DestActivity) {
            $.MvcSheet.Reject(this, this.DestActivity);
        }
        else {
            $.MvcSheet.Reject(this);
        }
    }
});
//#endregion

//#region 提交
$.MvcSheetToolbar.Submit = function (element, option, sheetInfo) {
    // console.log(element, option, sheetInfo, '提交')
    return $.MvcSheetToolbar.Submit.Base.constructor.call(this, element, option, sheetInfo);
};
$.MvcSheetToolbar.Submit.Inherit($.MvcSheetToolbar.IButton, {
    Render: function () {
        var displayPost = false,
            displayGroup = false;

        if (!this.Visible) {
            var actionKey = this.Action || this.Text;
            $(this.Container).children("li[data-action='" + actionKey + "']").hide();
            return;
        }

        if (this.SheetInfo.ApprovalListVisible) {
            this.Text = SheetLanguages.Current.Agree;
        }

        this.SubmitActivities = [];
        if (this.SheetInfo.SubmitActivities == null
            || this.SheetInfo.SubmitActivities == undefined
            || this.SheetInfo.SubmitActivities.length == 0) {

            //根据岗位提交
            if (this.SheetInfo.Posts) {
                displayPost = this.SheetInfo.Posts.length > 1;
                for (var j = 0; j < this.SheetInfo.Posts.length; j++) {
                    this.SubmitActivities.push(
                    {
                        Action: this.Action + "&" + this.SheetInfo.Posts[j].Code,
                        Icon: this.Icon,
                        Text: this.Text + (displayPost ? ("-" + this.SheetInfo.Posts[j].Name) : ""),
                        OnAction: function () {
                            $.MvcSheet.Submit(this, this.Text, "", this.Action.split("&")[1]);
                        },
                        MobileVisible: false
                    });
                }
            }
        }
        else {
            for (var i = 0; i < this.SheetInfo.SubmitActivities.length; ++i) {
                //直接提交
                this.SubmitActivities.push(
                   {
                       Action: this.SheetInfo.SubmitActivities[i].Code,
                       Text: this.Text + "-" + this.SheetInfo.SubmitActivities[i].Name,
                       OnAction: function () {
                           $.MvcSheet.Submit(this, this.Text, this.Action);
                       },
                       MobileVisible: false
                   });
                //根据岗位提交
                if (this.SheetInfo.Posts) {
                    displayPost = this.SheetInfo.Posts.length > 1;
                    for (var j = 0; j < this.SheetInfo.Posts.length; j++) {
                        this.SubmitActivities.push(
                        {
                            Action: this.SheetInfo.SubmitActivities[i].Code + "&" + this.SheetInfo.Posts[j].Code,
                            Icon: this.Icon,
                            Text: this.Text + "-" + this.SheetInfo.SubmitActivities[i].Name +
                                (displayPost ? ("-" + this.SheetInfo.Posts[j].Name) : ""),
                            OnAction: function () {
                                $.MvcSheet.Submit(this, this.Text, this.Action.split("&")[0], this.Action.split("&")[1]);
                            },
                            MobileVisible: false
                        });
                    }
                }
                //根据组提交
                if (this.SheetInfo.Groups) {
                    displayGroup = this.SheetInfo.Groups.length > 1;
                    for (var j = 0; j < this.SheetInfo.Groups.length; j++) {
                        this.SubmitActivities.push(
                        {
                            Action: this.SheetInfo.SubmitActivities[i].Code + "&" + this.SheetInfo.Groups[j].Code,
                            Icon: this.Icon,
                            Text: this.Text + "-" + this.SheetInfo.SubmitActivities[i].Name +
                                (displayGroup ? ("-" + this.SheetInfo.Groups[j].Name) : ""),
                            OnAction: function () {
                                $.MvcSheet.Submit(this, this.Text, this.Action.split("&")[0], null, this.Action.split("&")[1]);
                            },
                            MobileVisible: false
                        });
                    }
                }
            }
        }

        if (this.SubmitActivities.length > 1) {
            this.constructor.Base.Render.apply(this);
            this.DropdownMenu = $("<ul class='dropdown-menu'></ul>");
            var Menus = this.DropdownMenu.SheetToolBar(this.SubmitActivities);

            if (this.IsMobile) {
                this.MobileActions = [];
                for (_Action in Menus.ControlManagers) {
                    var that = Menus.ControlManagers[_Action];
                    this.MobileActions.push(this.GetMobileProxy(that));
                };
            }

            $(this.Element).append(this.DropdownMenu);
            this.OnActionPreDo = null;
            dropMenu2 = this.DropdownMenu;
        }
        else if (this.SubmitActivities.length == 1) {
            this.Text = this.SubmitActivities[0].Text;
            this.constructor.Base.Render.apply(this);
        }
        else {
            this.constructor.Base.Render.apply(this);
        }
    },
    DoAction: function () {
        if (this.SubmitActivities.length == 1) {
            this.SubmitActivities[0].OnAction.apply(this.SubmitActivities[0]);
            return;
        }

        if (this.DropdownMenu) {
            if (this.IsMobile) {
                var buttons = this.MobileActions;
                var hideSheet = $.MvcSheetUI.IonicFramework.$ionicActionSheet.show({
                    buttons: buttons,
                    buttonClicked: function (index) {
                        buttons[index].handler();
                        return true;
                    }
                });
            }
            else {
                if (this.DropdownMenu.is(":hidden")){
                	if(dropMenu1){
                		dropMenu1.hide();
                	}
                	 this.DropdownMenu.show();
                	 $("#divTopBars").css({"height":"inherit","overflow":"inherit"});
                	 $("i#dropTopBars").addClass("glyphicon-chevron-up").removeClass("glyphicon-chevron-down");
                }  
                else{
                    this.DropdownMenu.hide();
                }
            }
        }
        else {
            $.MvcSheet.Submit(this, this.Text);
        }
    }
});
//#endregion

//#region 结束流程
$.MvcSheetToolbar.FinishInstance = function (element, option, sheetInfo) {
    return $.MvcSheetToolbar.FinishInstance.Base.constructor.call(this, element, option, sheetInfo);
};
$.MvcSheetToolbar.FinishInstance.Inherit($.MvcSheetToolbar.IButton, {
    //PreRender: function () {
    //    this.constructor.Base.PreRender();
    //    //this.OnActionPreDo = function () {
    //    //    return confirm("确定执行结束流程操作?");
    //    //}
    //},
    DoAction: function () {
        $.MvcSheet.ConfirmAction(SheetLanguages.Current.ConfirmFinishInstance, function () {
            $.MvcSheet.FinishInstance(this);
        });
    }
});
//#endregion

//#region 转发
$.MvcSheetToolbar.Forward = function (element, option, sheetInfo) {
    return $.MvcSheetToolbar.Forward.Base.constructor.call(this, element, option, sheetInfo);
};
$.MvcSheetToolbar.Forward.Inherit($.MvcSheetToolbar.IButton, {
    DoAction: function () {
    	if(dropMenu1){dropMenu1.hide();}
    	if(dropMenu2){dropMenu2.hide();}
        if (this.SheetInfo.WorkItemType == -1) {
            return;
        } else {
            var option = undefined;
            if (this.SheetInfo.OptionalRecipients) {
                option = this.SheetInfo.OptionalRecipients[this.Action];
            } else {
                option = {
                    OrgUnitVisible: false
                }
            }
            this.FetchUser.apply(this, [SheetLanguages.Current.SelectForwardUser, false, option]);
        }
    }
});
//#endregion

//#region 协办
$.MvcSheetToolbar.Assist = function (element, option, sheetInfo) {
    return $.MvcSheetToolbar.Assist.Base.constructor.call(this, element, option, sheetInfo);
};
$.MvcSheetToolbar.Assist.Inherit($.MvcSheetToolbar.IButton, {
    DoAction: function () {
    	if(dropMenu1){dropMenu1.hide();}
    	if(dropMenu2){dropMenu2.hide();}
        //打开新的页面，_PORTALROOT_GLOBAL是模板页定义
        if (this.SheetInfo.WorkItemType == -1) {
            return;
        }
        else {
            var option = { GroupVisible: true, PostVisible: true };
            if (this.SheetInfo.OptionalRecipients && this.SheetInfo.OptionalRecipients[this.Action]) {
                option = this.SheetInfo.OptionalRecipients[this.Action];
            }
            this.FetchUser.apply(this, [SheetLanguages.Current.SelectAssistUser, true, option, SheetLanguages.Current.AssistRemind]);
        }
    }
});
//#endregion

//#region 征询意见
$.MvcSheetToolbar.Consult = function (element, option, sheetInfo) {
    return $.MvcSheetToolbar.Consult.Base.constructor.call(this, element, option, sheetInfo);
};
$.MvcSheetToolbar.Consult.Inherit($.MvcSheetToolbar.IButton, {
    DoAction: function () {
    	if(dropMenu1){dropMenu1.hide();}
    	if(dropMenu2){dropMenu2.hide();}
        //打开新的页面，_PORTALROOT_GLOBAL是模板页定义
        if (this.SheetInfo.WorkItemType == -1) {
            return;
        } else {
            var option = { GroupVisible: true, PostVisible: true };
            if (this.SheetInfo.OptionalRecipients && this.SheetInfo.OptionalRecipients[this.Action]) {
                option = this.SheetInfo.OptionalRecipients[this.Action];
            }
            this.FetchUser.apply(this, [SheetLanguages.Current.SelectConsultUser, true, option, SheetLanguages.Current.ConsultRemind]);
        }
    }
});
//#endregion

//#region 传阅
$.MvcSheetToolbar.Circulate = function (element, option, sheetInfo) {
    return $.MvcSheetToolbar.Circulate.Base.constructor.call(this, element, option, sheetInfo);
};
$.MvcSheetToolbar.Circulate.Inherit($.MvcSheetToolbar.IButton, {
    DoAction: function () {
    	if(dropMenu1){dropMenu1.hide();}
    	if(dropMenu2){dropMenu2.hide();}
        //打开新的页面，_PORTALROOT_GLOBAL是模板页定义
        if (this.SheetInfo.WorkItemType == -1) {
            return;
        } else {
            var option = { SegmentVisible: true, OrgUnitVisible: true, GroupVisible: true, PostVisible: true, UserVisible: true };
            if (this.SheetInfo.OptionalRecipients && this.SheetInfo.OptionalRecipients[this.Action]) {
                option = this.SheetInfo.OptionalRecipients[this.Action];
            }
            //this.FetchUser.apply(this, [SheetLanguages.Current.SelectCirculateUser, true, option]);
            this.FetchUser.apply(this, [SheetLanguages.Current.SelectCirculateUser, true, option, SheetLanguages.Current.AllowCirculate, false]);
        }
    }
});
//#endregion

//#region 加签
$.MvcSheetToolbar.AdjustParticipant = function (element, option, sheetInfo) {
    return $.MvcSheetToolbar.AdjustParticipant.Base.constructor.call(this, element, option, sheetInfo);
};
$.MvcSheetToolbar.AdjustParticipant.Inherit($.MvcSheetToolbar.IButton, {
    DoAction: function () {
    	if(dropMenu1){dropMenu1.hide();}
    	if(dropMenu2){dropMenu2.hide();}
        //打开新的页面，_PORTALROOT_GLOBAL是模板页定义
        if (this.SheetInfo.WorkItemType == -1) {
            return;
        } else {
            //var option = { V: this.SheetInfo.Participants };
            this.FetchUser.apply(this, [SheetLanguages.Current.SelectSignUser, true]);
        }
    }
});
//#endregion

//#region 关闭
$.MvcSheetToolbar.Close = function (element, option, sheetInfo) {
    return $.MvcSheetToolbar.Close.Base.constructor.call(this, element, option, sheetInfo);
};
$.MvcSheetToolbar.Close.Inherit($.MvcSheetToolbar.IButton, {
    DoAction: function () {
    	if(dropMenu1){dropMenu1.hide();}
    	if(dropMenu2){dropMenu2.hide();}
        if (top.window.location.href.indexOf("/app/") > -1 || top.window.location.href.indexOf("/home") > -1) {
            //V10.0 关闭当前表单页面
            top.$(".app-aside-right").find("iframe").attr("src", "");
            top.$(".app-aside-right").removeClass("show");
        } else {
            $.MvcSheet.ConfirmAction(SheetLanguages.Current.ConfrimClose, function () {
                $.MvcSheet.ClosePage(this);
            });
        }

    }
});
//#endregion

//#region 打印
$.MvcSheetToolbar.Print = function (element, option, sheetInfo) {
    this.Printed = false;
    return $.MvcSheetToolbar.Print.Base.constructor.call(this, element, option, sheetInfo);
};
$.MvcSheetToolbar.Print.Inherit($.MvcSheetToolbar.IButton, {
    DoAction: function () {
    	if(dropMenu1){dropMenu1.hide();}
    	if(dropMenu2){dropMenu2.hide();}
        // 如果有自定义打印表单URL，则转向自定义打印表单
        // 否则直接页面打印
        if (this.SheetInfo.PrintUrl) {
            window.open(this.SheetInfo.PrintUrl);
        }
        else {
            // 打印当前页面
            window.print();
        }
    }
});
//#endregion

//#region 取回流程 RetrieveInstance
$.MvcSheetToolbar.RetrieveInstance = function (element, option, sheetInfo) {
    return $.MvcSheetToolbar.RetrieveInstance.Base.constructor.call(this, element, option, sheetInfo);
};
$.MvcSheetToolbar.RetrieveInstance.Inherit($.MvcSheetToolbar.IButton, {
    //PreRender: function () {
    //    this.constructor.Base.PreRender();
    //    //this.OnActionPreDo = function () {
    //    //    return confirm("确定执行取回流程操作?");
    //    //}
    //},
    DoAction: function () {
    	if(dropMenu1){dropMenu1.hide();}
    	if(dropMenu2){dropMenu2.hide();}
        $.MvcSheet.ConfirmAction(SheetLanguages.Current.ConfirmReterive, function () {
            $.MvcSheet.RetrieveInstance(this);
        });
    }
});
//#endregion

//#region 已阅
$.MvcSheetToolbar.Viewed = function (element, option, sheetInfo) {
    return $.MvcSheetToolbar.Viewed.Base.constructor.call(this, element, option, sheetInfo);
};
$.MvcSheetToolbar.Viewed.Inherit($.MvcSheetToolbar.IButton, {
    DoAction: function () {
    	if(dropMenu1){dropMenu1.hide();}
    	if(dropMenu2){dropMenu2.hide();}
        $.MvcSheet.Submit(this, this.Text);
    }
});
//#endregion
﻿//选人控件
        (function ($) {
            // 控件执行
            // 参数{AutoTrim:true,DefaultValue:datavalue,OnChange:""}
            //可以通过  $("#id").SheetTextBox(参数)  来渲染控件和获取控件对象
            $.fn.SheetUser = function () {
                return $.MvcSheetUI.Run.call(this, "SheetUser", arguments);
            };
            //update by luxm第一次加载表单的时候没有走MappingControlsHandler中的if方法导致联动失效
            var isInit = true;
            // 构造函数
            $.MvcSheetUI.Controls.SheetUser = function (element, ptions, sheetInfo) {
                //console.log("$.MvcSheetUI.PortalRoot="+ $.MvcSheetUI.PortalRoot);
                // 选择数据集合
                this.Choices = {};
                // 所有选择的元素
                this.ChoicesElement = null;
                // 搜索输入框元素
                this.SearchElement = null;
                this.SearchTxtElement = null;
                this.SearchButton = null;
                // 获取选中的组织ID
                this.SelectedValue = null;
                // 获取当前搜索关键字
                this.SearchKey = null;
                this.SearchMode = false;
                this.KeyTime = null;
                // 搜索结果
                this.SearchResults = [];
                // 组织机构容器
                this.SelectorPanel = null;
                // 只在 Enter 进行搜索
                this.EnterSearch = true;
                this.OrgTreePanel = null;
                this.OrgListPanel = null;
                this.IsOverSelectorPanel = false;
                var url = $.MvcSheetUI.PortalRoot ? $.MvcSheetUI.PortalRoot: "/Portal";
                this.SheetUserHandler = $.MvcSheetUI.PortalRoot + "/SheetUser/LoadOrgTreeNodes";
                this.SheetGetUserProperty = $.MvcSheetUI.PortalRoot + "/SheetUser/GetUserProperty";
                this.SheetGetUserProperty =  url + "/SheetUser/GetUserProperty";
                // console.log($.MvcSheetUI.PortalRoot, '$.MvcSheetUI.PortalRoot--------------------')
                // console.log(this.SheetGetUserProperty, 'this.SheetGetUserProperty')
                this.ModelControl = null;
                $.MvcSheetUI.Controls.SheetUser.Base.constructor.call(this, element, ptions, sheetInfo);
            };

            // 继承及控件实现
            $.MvcSheetUI.Controls.SheetUser.Inherit($.MvcSheetUI.IControl, {
                //移动端
                RenderMobile: function () {
                    //baosc s
                    //初始展示当前用户OU人员  包括虚拟用户
                    //if ($.MvcSheetUI.SheetInfo.UserOUMembers || !this.UserVisible) {
                    //} else {
                    //    $.MvcSheetUI.SheetInfo.UserOUMembers = [];
                    //    var parentUnits = $.MvcSheetUI.SheetInfo.DirectParentUnits;
                    //    for (var key in parentUnits) {
                    //        var loadUrl = this.SheetUserHandler + "?IsMobile=true&ParentID=" + key + "&o=U";
                    //        $.ajax({
                    //            type: "GET",
                    //            url: loadUrl,
                    //            dataType: "json",
                    //            async: false,//同步执行
                    //            success: function (data) {
                    //                var filterdata = $.grep(data, function (value) {
                    //                    if (value.ExtendObject.UnitType == "U") {
                    //                        return value;
                    //                    }
                    //                });
                    //                $.MvcSheetUI.SheetInfo.UserOUMembers = $.MvcSheetUI.SheetInfo.UserOUMembers.concat(filterdata);
                    //            }
                    //        });
                    //    }
                    //}
                    ////baosc e

                    //是否多选
                    this.IsMultiple = this.LogicType == $.MvcSheetUI.LogicType.MultiParticipant;
                    //不可用
                    if (!this.Editable) {
                        $(this.Element).prop("readonly", true);
                        $(this.Element).addClass(this.Css.Readonly);
                        $(this.Element).addClass("item-content");
                    } else {
                        this.MoveToMobileContainer();
                        var that = this;
                        //ionic初始化控件
                        this.ionicInit(that, $.MvcSheetUI.IonicFramework);
                    }
                    //初始化默认值
                    this.InitValue();
                },
                //Ionic初始化
                ionicInit: function (that, ionic) {
                    // console.log(that, ionic)
                    //tll:传阅、征询、转发界面展示人员头像采用bpm-sheet-user-selected标签，保存之前表单设计
                    if (that.DataField == "fetchUserSelect") {
                        ionic.TempScope = ionic.$scope;
                        ionic.$scope = $.MvcSheetUI.IonicFramework.$scopeFetchUser;
                        var loadOptions = that.GetLoadTreeOption();
                        var loadUrl = that.SheetUserHandler + "?IsMobile=true&Recursive=" + that.Recursive;
                        var ngmodel = encodeURI(that.DataField).replace(/%/g, '_') + that.Options.RowNum;
                        //  that.Mask.parent().addClass("item-icon-right").css("width", "0px");;
                        // that.Mask.after('<i class="icon icon-rightadd"></i>');
                        that.Mask.parent().addClass("item-icon-right");
                        that.Mask.after('<i class="icon ion-ios-arrow-right"></i>');
                        var tagName = ngmodel;
                        if (tagName.indexOf('.') > -1) {
                            tagName = tagName.replace('.', '_');
                        }
                        ionic.$scope["sheetUsers" + tagName] = that.ConvertIonicItems(that.GetChoices());
                        if (that.Editable) {
                            ionic.$scope["sheetShow"] = true;
                        } else {
                            ionic.$scope["sheetShow"] = false;
                        }
                        //非编辑状态下展示**人*部门
                        if (that.V && !that.Editable && that.IsMultiple) {
                            var user = [];
                            var dep = [];
                            that.V.forEach(function (n, i) {
                                if (n.ContentType == 'U') {
                                    user.push(n);
                                } else {
                                    dep.push(n);
                                }
                            });
                            var obj = $.format(SheetLanguages.Current.Record, user.length, dep.length);
                            that.Mask.parent().before('<span class="record">' + obj + '</span>');
                        }

                        that.Mask.parent().parent().after('<div class="line"></div>');
                        if (that.DataField == "fetchUserSelect") {
                            that.Mask.parent().parent().after('<bpm-sheet-user-selected sheet-show="sheetShow" tag-name="' + tagName + '"  select-users="sheetUsers' + tagName + '" cancel-selected="delUserItem"></bpm-sheet-user-selected>');
                            // var add = $(' ')

                            // that.Mask.parent().parent().after(add);
                        }
                        that.Mask.parent().parent().attr("data-scopedata", ngmodel);
                        that.Mask.parent().parent().attr("data-loadurl", loadUrl);
                        that.Mask.parent().parent().attr("data-datafield", ngmodel);
                        if (that.Editable) {
                            that.Mask.parent().parent().unbind("click.sheetUser").bind("click.sheetUser", function () {
                                var dataField = $(this).attr("data-scopedata");
                                var loadUrl = $(this).attr("data-loadurl");

                                if (that.DataField == "fetchUserSelect") {
                                    ionic.$scope = $.MvcSheetUI.IonicFramework.$scopeFetchUser;
                                } else if (ionic.TempScope) {
                                    ionic.$scope = ionic.TempScope;
                                }
                                var obj = ionic.$scope[ngmodel];
                                console.log(obj, 'obj')
                                var options = {
                                    options: obj.Options,
                                    selecFlag: that.GetSelectableFlag(),
                                    dataField: dataField,
                                    ngmodel: ngmodel,
                                    loadUrl: loadUrl,
                                    loadOptions: obj.GetLoadTreeOption(),
                                    initUsers: obj.GetChoices(),
                                    isMutiple: obj.IsMultiple
                                };
                                $.MvcSheetUI.sheetUserParams = options;
                                ionic.$state.go("form.sheetuser", {index: 0, parentID: ""});
                            });
                        } else {
                            that.Mask.parent().css("display", "none");
                        }
                        ionic.$compile(that.Mask.parent().parent().next())(ionic.$scope);
                        ionic.$scope[ngmodel] = that;
                    }
                    else {
                        var loadOptions = that.GetLoadTreeOption();
                        var loadUrl = that.SheetUserHandler + "?IsMobile=true&Recursive=" + that.Recursive;
                        var ngmodel = that.DataField + that.Options.RowNum;
                        that.Mask.parent().addClass("item-icon-right");
                        that.Mask.after('<i class="icon ion-ios-arrow-right"></i>');
                        that.Mask.parent().parent().attr("data-scopedata", that.DataField);
                        that.Mask.parent().parent().attr("data-loadurl", loadUrl);
                        that.Mask.parent().parent().attr("data-datafield", that.DataField);
                        that.Mask.parent().parent().unbind("click.sheetUser").bind("click.sheetUser", function () {
                            var dataField = $(this).attr("data-scopedata");
                            var loadUrl = $(this).attr("data-loadurl");
                            var obj = ionic.$scope[ngmodel];
                            console.log(ionic.$scope[ngmodel], 'ionic.$scope');
                            console.log(ngmodel, 'ngmodel');
                            // debugger
                            var options = {
                                options: obj.Options,
                                selecFlag: that.GetSelectableFlag(),
                                dataField: dataField,
                                ngmodel: ngmodel,
                                loadUrl: loadUrl,
                                loadOptions: obj.GetLoadTreeOption(),
                                initUsers: obj.GetChoices(),
                                isMutiple: obj.IsMultiple
                            };
                            $.MvcSheetUI.sheetUserParams = options;
                            // console.log($.MvcSheetUI.sheetUserParams, '$.MvcSheetUI.sheetUserParams')
                            ionic.$state.go("form.sheetuser", {index: 0, parentID: ""});
                        });
                    }
                    ionic.$scope[ngmodel] = that;
                },
                //转化成IONIC所需要的对象格式
                ConvertIonicItems: function (users) {
                    var objs = [];
                    if (users) {
                        if (users.constructor == Object) {
                            var tempUser = {id: users.ObjectID, name: users.Name, type: users.type, UserGender: users.UserGender, UserImageUrl: users.UserImageUrl};
                            objs.push(tempUser);
                        } else {
                            users.forEach(function (n, i) {
                                var tempUser = {id: n.ObjectID, name: n.Name, type: n.type, UserGender: n.UserGender, UserImageUrl: n.UserImageUrl};
                                objs.push(tempUser);
                            });
                        }
                    }
                    return objs;
                },
                //清除所有的选择
                ClearChoices: function () {
                    for (var ObjectID in this.Choices) {
                        this.RemoveChoice(ObjectID);
                    }
                    this.OnMobileChange();
                },

                //移除选择
                RemoveChoice: function (ObjectID) {
                    if (this.Choices[ObjectID]) {
                        if (!this.IsMobile) {
                            //this.OrgListPanel.find("input[ObjectID='" + ObjectID + "']").attr("checked", false);
                            //$(this.DivSelectResult).children('[ObjectID="' + ObjectID + '"]').click();
                        }
                        $("#" + this.Choices[ObjectID].ChoiceID).remove();
                        delete this.Choices[ObjectID];
                    }
                    this.SetSearchTxtElementWidth.apply(this);
                    this.Validate();

                    this.OnMobileChange();

                    if (this.OnChange) {
                        this.RunScript(this, this.OnChange, [this]);
                    }
                },
                //PC端
                Render: function () {
                    if (!this.Visiable) {
                        this.Element.style.display = "none";
                        return;
                    }
                    // 查看痕迹
                    if (this.TrackVisiable && !this.Originate && this.DataField.indexOf(".") == -1) {
                        this.RenderDataTrackLink();
                    }
                    //是否多选
                    this.IsMultiple = this.Options.IsMultiple || this.LogicType == $.MvcSheetUI.LogicType.MultiParticipant;

                    //不可用
                    if (!this.Editable) {
                        $(this.Element).prop("readonly", true);
                        $(this.Element).addClass(this.Css.Readonly);
                        $(this.Element).css("padding-top", "6px");
                    } else {
                        this.ClearChoices();
                        this.IsLoaded = false;
                        this.SelectedValue = "";
                        this.__QueryOptions = "";

                        //渲染界面
                        this.HtmlRender();
                        //绑定事件
                        this.BindEnvens();
                    }

                    //初始化默认值
                    this.InitValue();
                },

                //初始化值
                InitValue: function () {
                    // 设置默认值
                    if (this.Originate && !this.V && this.DefaultValue) {
                        this.V = this.DefaultValue;
                        if (this.V.constructor == String) {
                            if (this.V.toLowerCase() == "originator" || this.V.toLowerCase() == "{originator}") {
                                this.V = this.SheetInfo.Originator;
                            } else if (this.V.toLowerCase() == "{originator.ou}" || this.V.toLowerCase() == "originator.ou") {
                                this.V = this.SheetInfo.OriginatorOU;
                            }
                        }
                    }
                    this.SetValue(this.V);
                    //if (this.IsMobile) {
                    //    if (this.Editable) {
                    //        this.Mask.html(this.GetText());
                    //    } else {
                    //        $(this.Elment).html(this.GetText());
                    //    }
                    //}
                },
                //设置组织机构的根目录，传组织编码
                SetRootUnit: function (unitId) {
                    // 设置顶点 unit
                    // 重新加载树
                    this.RootUnitID = unitId;//RootUnitID;
                    if (this.TreeManager != null) {
                        this.TreeManager.clear();
                        this.TreeManager.loadData(null, this.SheetUserHandler + "?LoadTree=true&Recursive=true&o=O&RootUnitID=" + this.RootUnitID);
                    }
                    //this.TreeManager.clear();
                    //this.TreeManager.loadData(null, this.SheetUserHandler + "?RootUnitID=" + this.RootUnitID);
                },
                //设置值
                SetValue: function (Obj) {
                    if (Obj == undefined || Obj == null || Obj == "") {
                        if (this.IsMobile) {
                            if (this.Editable) {
                                if (this.PlaceHolder) {
                                    this.Mask.text(this.PlaceHolder);
                                } else {
                                    this.Mask.text(SheetLanguages.Current.PleaseSelect);
                                }
                                this.Mask.css({'color': '#797f89'});
                            } else {
                                this.Mask.html(this.PlaceHolder);
                            }
                            return;
                        } else {
                            return;
                        }
                    }
                    if (Obj.constructor == Object) {
                        this.AddChoice({ObjectID: Obj.Code, Name: Obj.Name, type: Obj.ContentType, UserGender: Obj.UserGender, UserImageUrl: Obj.UserImageUrl});
                    } else if (Obj.constructor == Array) {
                        for (var i = 0; i < Obj.length; i++) {
                            if (Obj[i].constructor == Object) {
                                this.AddChoice({ObjectID: Obj[i].Code, Name: Obj[i].Name, type: Obj[i].ContentType, UserGender: Obj[i].UserGender, UserImageUrl: Obj[i].UserImageUrl});
                            } else if (Obj[i].constructor == String) {
                                this.AddUserID(Obj[i]);
                                if (!this.IsMultiple)
                                    break;
                            }
                        }
                    } else if (Obj.constructor == String) {
                        if(Obj.indexOf("[")>-1){
                            var users = Obj.replace("[","").replace("]","").replace(" ","").split(",");
                            for (var i = 0; i < users.length; i++) {
                                this.AddUserID(users[i]);
                                if (!this.IsMultiple)
                                    break;
                            }
                        }else{
                            this.AddUserID(Obj);
                        }
                    }

                    if (this.IsMobile) {
                        if (this.Editable) {
                            this.Mask.html(this.GetText());
                            this.Mask.css({'color': '#2c3038'});
                        } else {
                            //$(this.Element).html(this.GetText());
                            var txt = this.GetText();
                            var mask = $("<label>").html(this.GetText());
                            $($(this.Element).html("")).append(mask);
                        }
                    }
                },
                //用户ID
                GetValue: function () {
                    var users;
                    for (var ObjectID in this.Choices) {
                        if (this.IsMultiple) {
                            if (users == undefined)
                                users = new Array();
                            users.push(ObjectID);
                        } else {
                            users = ObjectID;
                        }
                    }
                    return users == undefined ? "" : users;
                },
                //转化为对象
                GetChoices: function () {
                    var choices;
                    for (var ObjectID in this.Choices) {
                        if (this.IsMultiple) {
                            if (choices == undefined)
                                choices = new Array();
                            choices.push(this.Choices[ObjectID]);
                        } else {
                            choices = this.Choices[ObjectID];
                        }
                    }
                    return choices == undefined ? [] : choices;
                },
                //获取显示
                GetText: function () {
                    var userNames;
                    for (var ObjectID in this.Choices) {
                        if (this.IsMultiple) {
                            if (userNames == undefined)
                                userNames = new Array();
                            userNames.push(this.Choices[ObjectID].Name);
                        } else {
                            userNames = this.Choices[ObjectID].Name;
                        }
                    }
                    return userNames == undefined ? "" : userNames.toString();
                },

                //保存数据
                SaveDataField: function () {
                    var result = {};
                    if (!this.Visiable || !this.Editable)
                        return result;
                    result[this.DataField] = this.DataItem;
                    if (!result[this.DataField]) {
                        if (this.DataField.indexOf(".") == -1) {
                            alert(SheetLanguages.Current.DataItemNotExists + ":" + this.DataField);
                        }
                        return {};
                    }

                    var users = this.GetValue();
                    // if (result[this.DataField].V != users)
                    {
                        result[this.DataField].V = users;
                        return result;
                    }
                    return {};
                },

                //渲染样式
                HtmlRender: function () {
                    this.ID = $(this.Element).attr("ID") || $.MvcSheetUI.NewGuid();
                    $(this.Element).attr("ID", this.ID);
                    $(this.Element).css("z-index", "inherit");

                    //设置页面元素的样式
                    $(this.Element).addClass("select2-container select2-container-multi ").attr("data-sheetusercontrol", true);
                    $(this.Element).css("min-width", "150px");

                    //设置输入框
                    if (this.ChoicesElement == null) {
                        this.ChoicesElement = $("<ul>").addClass("select2-choices").css("overflow", "hidden");
                        this.SearchElement = $("<li>").addClass("select2-search-field");
                        this.SearchTxtElement = $("<input>").addClass("form-control").addClass("no-padding");
                        this.SearchTxtElement.width("1px");

                        //添加输入框
                        this.SearchElement.append(this.SearchTxtElement);
                        this.ChoicesElement.append(this.SearchElement);
                        $(this.Element).append(this.ChoicesElement);
                    }

                    this.SetSearchTxtElementWidth.apply(this);
                    //不可用
                    if (!this.Editable) {
                        $(this.SearchTxtElement).prop("readonly", true);
                        $(this.SearchElement).width("100%");
                        $(this.SearchElement).addClass(this.Css.Readonly);
                        this.SearchTxtElement.closest("ul").css("border", "0px");
                        this.SearchTxtElement.width("100%");
                        return;
                    }
                    if (this.SelectorPanel == null) {
                        //组织机构选择Panel
                        this.SelectorPanel = $("<div>").addClass("bordered").addClass("SelectorPanel")
                                .css("position", "absolute")
                                .css("z-index", "888")
                                // .css("overflow", "auto")
                                .width("100%")
                                .css("min-width", "340px")
                                .css("height", "300px")
                                .css("display", "none")
                                .css("background-color", "#FFFFFF")
                                .css("left", "0")
                                .attr("data-SheetUserPanel", "SelectorPanel");

                        this.OrgTreePanel = $("<div>").css("max-width", "50%").css("width", "50%").addClass("bordered").css("float", "left").height("100%").css("overflow", "scroll");
                        this.SelectorPanel.append(this.OrgTreePanel);

                        // 组织机构选择列表
                        this.OrgListPanel = $("<div>").height("100%").css("overflow-y", "auto");
                        //增加全选按钮  update by lisonglin 20190118
                        this.PanelSelectAll = $('<div class="task" style="padding: 5px 10px; border-bottom: 1px solid rgb(228, 228, 228); cursor: pointer;"><i class="task-sort-icon fa  fa fa-user"></i><span class="task-title" style="word-break: break-all;margin-top: 0;flex-grow:1;padding-left: 4px">'+$.Lang("ReportDesigner.SelectAll")+'</span><div class="action-checkbox pull-right"><input type="checkbox"   id="selectAll" ' +
                            'style="height: auto; margin: 0; display: inline-block;"></div></div>');
                        this.SelectorPanel.append(this.OrgListPanel);
                        // 添加组织机构
                        $(this.Element).append(this.SelectorPanel);
                    }

                    if (!this.Recursive ||
                            this.RoleName ||
                            this.OrgPostCode ||
                            this.UserCodes) { // 只显示下拉框，不显示左侧菜单
                        this.OrgTreePanel.hide();
                        this.SelectorPanel.css("min-width", "0px");
                    } else {
                        this.OrgTreePanel.show();
                        this.SelectorPanel.css("min-width", "340px");
                    }
                },
                //绑定事件
                BindEnvens: function () {
                    if (!this.Editable)
                        return; //不可用

                    //点击到当前元素，设置input焦点
                    $(this.ChoicesElement).unbind("click.SheetUser").bind("click.SheetUser", this, function (e) {
                        e.data.SearchTxtElement.focus();
                    });

                    //得到焦点显示
                    $(this.SearchTxtElement).unbind("focusin.SearchTxtElement").bind("focusin.SearchTxtElement", this, function (e) {
                        e.data.FocusInput.apply(e.data);
                    });
                    if (!this.Recursive) { //不递归的时候，直接显示内容
                        var SheetUserManager = this;
                        //读取控件上的属性
                        $.ajax({
                            type: "GET",
                            url: this.SheetUserHandler + "?Recursive=false&" + this.GetLoadTreeOption(),
                            dataType: "json",
                            //async: false,//同步执行
                            success: function (data) {
                                for (var i = 0; i < data.length; ++i) {
                                    // data[i].Text = SheetUserManager.decrypt(data[i].Text);
                                    // data[i].Code = SheetUserManager.decrypt(data[i].Code);
                                    data[i].Text = data[i].Text;
                                    data[i].Code = data[i].Code;
                                    SheetUserManager.AddListItem.apply(SheetUserManager, [data[i]]);
                                }
                            }
                        });
                        if (this.IsMobile) {
                            //this.FocusInput();
                        } else {
                            $(document).unbind("click." + this.ID).bind("click." + this.ID, this, function (e) {
                                if ($(e.target).closest("div[id='" + e.data.ID + "']").length == 0) {
                                    e.data.FocusOutput.apply(e.data);
                                }
                            });
                        }
                        $(this.SearchTxtElement).prop("readonly", "readonly");
                        return;
                    }

                    if (this.IsMobile) {
                        // 输入控件
                        $(this.SearchTxtElement).unbind("keydown.SearchTxtElement").bind("keydown.SearchTxtElement", this, function (e) {
                            if (e.which == 13) {
                                e.preventDefault();
                                e.stopPropagation();
                            }
                        });

                        // 移动端仅在Enter时执行搜索
                        $(this.SearchTxtElement).unbind("keyup.SearchTxtElement").bind("keyup.SearchTxtElement", this, function (e) {
                            if (e.which == 13) {
                                e.data.SetSearchTxtElementWidth.apply(e.data);
                                e.data.FocusInput.apply(e.data);
                                e.data.SearchOrg.apply(e.data, [e.data]);
                            }
                        });
                    } else {
                        // 输入控件
                        $(this.SearchTxtElement).unbind("keyup.SearchTxtElement").bind("keyup.SearchTxtElement", this, function (e) {
                            e.data.SetSearchTxtElementWidth.apply(e.data);
                            e.data.FocusInput.apply(e.data);
                            e.data.KeyTime = new Date();
                            // setTimeout("e.data.SearchOrg.apply(e.data, [e.data])", 500);
                            var that = e.data;
                            setTimeout(function () {
                                that.SearchOrg.apply(that, [that]);
                            }, 500)
                        });
                        $(this.SearchTxtElement).unbind("keydown.SearchTxtElement").bind("keydown.SearchTxtElement", this, function (e) {
                            if (e.keyCode == 8 && $(this).val() == "") {
                                e.data.RemoveChoice.apply(e.data, [$(this).parent().prev().attr("data-code")]);
                            }
                        });
                    }
                    $(document).unbind("click." + this.ID).bind("click." + this.ID, this, function (e) {
                        if ($(e.target).closest("div[id='" + e.data.ID + "']").length == 0) {
                            e.data.FocusOutput.apply(e.data);
                        }
                    });
                    if (this.IsMobile) {
                        $(this.OrgListBtn).unbind("click.OrgListBtn").bind("click.OrgListBtn", this, function (e) {
                            var targetID = $(this).data("targetID");
                            e.data.AddMobilePanel.apply(e.data, [targetID, ""]);
                        });
                    }
                },
                //移动端:添加panel
                AddMobilePanel: function (id, parentID) {
                    this.Level++;
                    var that = this;
                    var divObj = $("#" + id);
                    if (divObj.length == 0) {
                        //新pannel
                        divObj = $("<div>").attr('id', id).addClass('panel').addClass('no-scroll').hide();
                        if (parentID != "") {
                            var parentObj = $("li[objectID='" + parentID + "']>label");
                            if (parentObj.length == 0)
                                parentObj = $("li[objectID='" + parentID + "']");
                            divObj.attr("data-title", parentObj.text());
                        } else {
                            divObj.attr("data-title", $.ui.prevHeader.find("#pageTitle").text());
                        }
                        divObj.attr("data-footer", this.FooterID);
                        divObj.data("parentid", parentID);
                        var loadUrl = that.SheetUserHandler + "?IsMobile=true&" + that.GetLoadTreeOption();
                        if (parentID) {
                            loadUrl = that.SheetUserHandler + "?IsMobile=true&ParentID=" + parentID + "&" + that.GetLoadTreeOption();
                        }

                        $.ajax({
                            type: "GET",
                            url: loadUrl,
                            dataType: "json",
                            context: that,
                            async: false, //同步执行
                            success: function (data) {
                                var ul = $("<ul>").addClass('orglist').addClass('list');
                                that.AddMobileOptions(data, ul);

                                var wrapper = $("<div class='scroll-wrapper'>");
                                wrapper.append(ul);
                                divObj.append(wrapper);

                                $('#content').append(divObj);

                                that.SetMobilePanelRefreshOnload(id);
                            }
                        });

                        //添加
                        //$.ui.addContentDiv(id);
                    }

                    //显示
                    $.ui.loadContent(id);
                    //检查是否选中
                    this.MobileFindCheckbox(id);
                },

                MobilePreBack: function () {
                    var id = "#" + $.ui.activeDiv.id;
                    if (this.Level > 0) {
                        this.Level--;
                    }
                    this.MobileFindCheckbox(id);
                },

                //设置页面加载时自动刷新滚动条
                SetMobilePanelRefreshOnload: function (panelId) {
                    var that = this;
                    //进入页面时自动刷新滚动条
                    window.PanelLoadActions = window.PanelLoadActions || {};
                    var that = this;
                    var fnName = 'F' + this.EditPanel.attr('id').replace(/\-/g, '');

                    $('#' + panelId).attr('data-load', 'window.PanelLoadActions.' + fnName)

                    window.PanelLoadActions[fnName] = function () {
                        setTimeout(function () {
                            that.RefreshMobilePage();
                        }, 600);
                    }
                },

                AddMobileOptions: function (data, ulList, searchKey) {
                    if (data) {
                        var that = this;
                        if (data instanceof Array) {
                            if (data.length) {
                                $(data).each(function () {
                                    that._AddMobileOption(this, ulList, searchKey);
                                })
                            } else {
                                ulList.html('<li class="user-item">没有任何组织</li>');
                            }
                        } else {
                            that._AddMobileOption(data, ulList, searchKey);
                        }
                    } else {
                        ulList.html('<li class="user-item">没有任何组织</li>');
                    }
                },

                //获取是否允许选择组、OU、用户的标识
                GetSelectableFlag: function () {
                    if (typeof (this.__SelectableOption) == 'undefined') {
                        this.__SelectableOption = '';

                        loadOptions = this.GetLoadTreeOption();
                        var o = loadOptions.match(/o=[A-z]*/)
                        if (o && o.length) {
                            this.__SelectableOption = o[0].replace('o=', '');
                        }
                    }
                    return this.__SelectableOption;
                },

                //添加可选项
                _AddMobileOption: function (item, ulList, searchKey) {
                    // debugger
                    var selectableFlag = this.GetSelectableFlag();
                    var li = $("<li>").addClass('user-item');
                    if (selectableFlag.indexOf(item.ExtendObject.UnitType) > -1) {
                        var checkboxid = $.uuid();
                        var checkbox = $("<input type='checkbox'  id='" + checkboxid + "' data-objectid='" + item.ObjectID + "'/>");
                        checkbox.attr("checked", this.Choices && this.Choices[item.ObjectID] != undefined);
                        li.append(checkbox);

                        var displayText = item.Text;
                        if (searchKey) {
                            displayText = displayText.replace(searchKey, "<span class='bg-info'>" + searchKey + "</span>");
                            if (displayText.indexOf("[" + item.Code + "]") == -1) {
                                displayText += "[" + item.Code.replace(searchKey, "<span class='bg-info'>" + searchKey + "</span>") + "]";
                            }
                        }

                        li.append($("<label type='checkbox' label-for='" + checkboxid + "'>" + displayText + "</label>").css("float", "none").css("left", "25px"));
                    } else {
                        li.append(item.Text);
                    }
                    li.attr("objectID", item.ObjectID);
                    var targetId = $.uuid();
                    li.attr("targetID", targetId);

                    if (!item.IsLeaf) {
                        var linkelemnt = $("<a data-ignore=true>" + $(li).html() + "</a>");
                        $(li).html("").append(linkelemnt);

                        li.append($('<div>').addClass('org-expand').css({
                            width: '20%',
                            height: '100%',
                            'z-index': 2,
                            position: 'absolute',
                            right: 0,
                            top: 0
                        }));
                    }
                    ulList.append(li);

                    var node = {
                        ObjectID: item.ObjectID,
                        Name: item.Text
                    }
                    $(li).unbind("click.OrgListBtn").bind("click.OrgListBtn", [this, node], function (e) {
                        var t = e.data[0];
                        var n = e.data[1];
                        if ($(e.target).is('.org-expand') || $(this).find('input[type=checkbox]').length == 0) {
                            var parentID = $(this).attr("objectID");
                            var targetID = $(this).attr("targetID");
                            $("#defaultHeader>.backButton").data("pannelid", targetId);
                            t.AddMobilePanel.apply(t, [targetID, parentID]);
                        } else {
                            var chk = $(this).find("input[type=checkbox]")
                            chk.prop('checked', !chk.prop('checked'));

                            t.UnitCheckboxClick.apply($(this).find("input[type=checkbox]").get(0), e.data);
                        }
                    });
                },

                //检查是否选中
                MobileFindCheckbox: function (id) {
                    if (id == undefined && $.ui.history) {
                        id = $.ui.history[$.ui.history.length - 1].target
                    }

                    if (id.indexOf("#") < 0) {
                        id = "#" + id;
                    }

                    var that = this;
                    $(id).find("input:checkbox").each(function () {
                        $(this).prop("checked", that.Choices[$(this).attr("data-objectid")] != undefined);
                    });
                },

                //设置输入框的宽度
                SetSearchTxtElementWidth: function () {
                    if (this.IsMobile) {
                        return;
                    }
                    var w = "1px";
                    var length = this.SearchTxtElement.val().length;
                    if (length > 0) {
                        w = length * 15 + "px";
                        this.SearchTxtElement.removeAttr("PlaceHolder", this.PlaceHolder);
                    } else if ($.isEmptyObject(this.Choices)) {
                        w = "150px";//update by zhangj
                        this.SearchTxtElement.attr("PlaceHolder", this.PlaceHolder);
                    } else {
                        this.SearchTxtElement.removeAttr("PlaceHolder", this.PlaceHolder);
                    }
                    $(this.SearchTxtElement).width(w);

                    if (this.IsMobile) {
                        //$(this.SelectorPanel).css("top", ($(this.Element).height()+20)+"px");
                    }
                },

                //获取焦点焦点
                FocusInput: function () {
                    if (this.IsMobile) {
                        return;
                    }
                    if (this.SelectorPanel.is(":visible"))
                        return;

                    $("div[data-SheetUserPanel='SelectorPanel']").hide();
                    this.SelectorPanel.show();
                    if (!this.IsMobile && !this.IsLoaded) {
                        //加载组织机构树
                        this.LoadOrgTree();
                    }

                    if (!this.IsMobile && this.OrgListPanel.find("input").length == 0) {
                        this.TreeManager.selectNode(this.TreeManager.data[0]);
                    }
                },

                //失去焦点
                FocusOutput: function () {
                    if (this.IsMobile) {
                        return;
                    }
                    if ($(this.SearchTxtElement).val().length > 0) {
                        this.OrgListPanel.html("");
                        $(this.SearchTxtElement).val("");
                    }
                    if (this.SelectorPanel.is(":hidden"))
                        return;

                    this.SelectorPanel.hide();
                },

                //处理映射关系
                MappingControlsHandler: function (Object) {
                    if (!this.MappingControls)
                        return;

                    var Propertys = "";
                    var MapJson = {};
                    var mapping = this.MappingControls.split(',');
                    for (var i = 0; i < mapping.length; i++) {
                        var map = mapping[i].split(':');
                        MapJson[map[0]] = map[1];
                        Propertys += map[1] + ";";
                    }

                    var that = this;
                    var param = {Command: "GetUserProperty", Param: JSON.stringify([Object.ObjectID, Propertys])};
                    $.MvcSheet.GetSheet(param, function (data) {
                        for (var p in data) {
                            for (var key in MapJson) {
                                if (MapJson[key] == p) {
                                    //var e = $.MvcSheetUI.GetElement(key, that.RowNum);
                                    var e = $.MvcSheetUI.GetElement(key, that.GetRowNumber());
                                    //update by luxm 初始化时联动
                                    if (e != null && e.data($.MvcSheetUI.SheetIDKey) || e != null && isInit) {
                                        isInit = false;
                                        e.SheetUIManager().SetValue(data[p]);
                                    }
                                }
                            }
                        }
                    });
                },

                //添加选择:{ObjectID:"",Name:""}
                AddChoice: function (Object) {
                    if (!Object)
                        return;
                    if (!Object.ObjectID)
                        return;
                    if (this.Choices[Object.ObjectID])
                        return;
                    if (!this.IsMultiple) { // 清除其他所有选项
                        this.ClearChoices();
                    }
                    this.Choices[Object.ObjectID] = Object;

                    //映射关系
                    if (this.MappingControls) {
                        this.MappingControlsHandler(Object);
                    }

                    //只读
                    if (!this.Editable) {
                        $(this.Element).html(this.GetText());
                        return;
                    }

                    var choiceID = $.MvcSheetUI.NewGuid();
                    Object.ChoiceID = choiceID;
                    var choice = $("<li class='select2-search-choice'></li>")

                    var NameDiv = $("<div>" + Object.Name + "</div>");
                    choice.css("cursor", "pointer").css("margin-top", "2px").css('background-color', '#b0b0b0');
                    choice.attr("id", choiceID).attr("data-code", Object.ObjectID).append(NameDiv);

                    if (this.IsMobile) {
                        choice.css("margin-top", "10px")
                        // this.ChoicesElement.append(choice);
                    } else {
                        this.SearchElement.before(choice);
                        this.SetSearchTxtElementWidth.apply(this);
                        // this.ChoicesElement.append(choice);
                        choice.insertBefore(this.ChoicesElement.find("li:last"));
                    }

                    //关闭按钮
                    var colseChoice = $("<a href='javascript:void(0)' class='select2-search-choice-close'></a>");
                    choice.append(colseChoice);
                    choice.unbind("click.choice").bind("click.choice", this, function (e) {
                        //移除当前筛选条件
                        e.data.RemoveChoice.apply(e.data, [$(this).attr("data-code")]);
                        //触发Input框的chagne事件
                        $(e.data.Element).trigger("change");
                    });
                    //校验
                    this.Validate();

                    if (this.IsMobile) {
                        this.OnMobileChange();
                    }

                    if (this.OnChange) {
                        this.RunScript(this, this.OnChange, [this]);
                    }
                    $(this.Element).trigger('change');
                },

                OnMobileChange: function () {
                    if (this.IsMobile) {
                        var that = this;
                        setTimeout(function () {
                            that.RefreshMobilePage();
                        }, 100)
                    }
                },

                RefreshMobilePage: function () {
                    //如果当前在选择的主界面里，重新计算高度
                    // if ($.ui.activeDiv.id == this.EditPanelID) {
                    if (this.EditPanelID) {
                        //选中项容器高度自增减
                        this.ChoicesPanel.height($(this.ChoicesElement).outerHeight());

                        if (this.SelectorPanel) {
                            //搜索框填充页面高度
                            this.SelectorPanel.outerHeight($('#afui').height() - $('header:visible').outerHeight() - $('#footer:visible').outerHeight() - this.ChoicesPanel.outerHeight() - this.SearchElement.parent().outerHeight())
                        }
                    }

                    var that = this;

                },

                _GetScroller: function (wrapperSelector) {
                    this.IScrollers = this.IScrollers || {};

                    var wrapper = $(wrapperSelector).first();
                    var scrollerId = wrapper.data("scroller-id");
                    if (!scrollerId) {
                        scrollerId = $.uuid();
                        wrapper.data("scroller-id", scrollerId);
                        this.IScrollers[scrollerId] = new IScroll(wrapper.get(0));
                    }
                    return this.IScrollers[scrollerId];
                    ;
                },

                //Error:这里有时间，可以实现批量的效果
                //添加:UserID/UserCode
                AddUserID: function (UserID) {
                    var that = this;
                    var param = {UserID: UserID, Propertystr: "Name;ObjectID"};
                    $.ajax({
                        type: "GET",
                        url: this.SheetGetUserProperty,
                        data: param,
                        dataType: "json",
                        async: false, //同步执行
                        success: function (data) {
                            if (data) {
                                that.AddChoice({ObjectID: data["ObjectID"], Name: data["Name"]});
                            }
                        }
                    });
                },

                //清除所有的选择
                ClearChoices: function () {
                    for (var ObjectID in this.Choices) {
                        this.RemoveChoice(ObjectID);
                    }
                    this.OnMobileChange();
                },

                //移除选择
                RemoveChoice: function (ObjectID) {


                    if (this.Choices[ObjectID]) {
                        if (!this.IsMobile) {
                            this.OrgListPanel.find("input[ObjectID='" + ObjectID + "']").attr("checked", false);
                        }
                        $("#" + this.Choices[ObjectID].ChoiceID).remove();
                        delete this.Choices[ObjectID];
                    }
                    this.SetSearchTxtElementWidth.apply(this);
                    this.Validate();

                    this.OnMobileChange();

                    if (this.OnChange) {
                        this.RunScript(this, this.OnChange, [this]);
                    }
                    
                    //更新全选状态
                    if (!this.IsMobile && this.IsMultiple && this.IsLoaded) {
                    	this.OrgListPanel.find("input[ObjectID='" + ObjectID + "']").closest("div.SelectorPanel").find("#selectAll").prop("checked", this.isAllSelect(this.Choices));
                    }
                },

                //加载组织机构树
                LoadOrgTree: function () {
                    //加载样式和脚本
                    if (!this.OrgTreePanel)
                        return;
                    var that = this;
                    var treeUl = $("<ul>").css("min-width", "510px");
                    this.OrgTreePanel.append(treeUl);

                    //加载LigerUI
                    if (!treeUl.ligerTree) {
                        $("body:first").append("<link rel='stylesheet' type='text/css' href='" + $.MvcSheetUI.PortalRoot + "/WFRes/_Content/themes/ligerUI/Aqua/css/ligerui-tree.css' />");
                        $.ajax({
                            url: $.MvcSheetUI.PortalRoot + "/WFRes/_Scripts/ligerUI/ligerui.all.min.js",
                            type: "GET",
                            dataType: "script",
                            async: false, //同步请求
                            global: false
                        });
                    }

                    this.IsLoaded = false;
                    var paramOptions = this.GetLoadTreeOption();
                    this.TreeManager = $(treeUl).ligerTree({
                        checkbox: false,
                        idFieldName: 'Code',
                        textFieldName: 'Text',
                        iconFieldName: "Icon",
                        btnClickToToggleOnly: true,
                        isExpand: 2,
                        isLeaf: function (data) {
                            return data.IsLeaf;
                        },
                        // render: function(e, data) {
                        //     var textHtml = '<span title="'+ data +'" ' +
                        //         'style="display:inline-block;max-width: 200px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">'+ data +'</span>';
                        //     return textHtml
                        // },
                        delay: function (e) {
                            // e.data.Text = that.decrypt(e.data.Text);
                            // e.data.Code = that.decrypt(e.data.Code);
                            // e.data.Text = e.data.Text;
                            // e.data.Code = e.data.Code;
                            var node = e.data;
                            if (node == null)
                                return false;
                            if (node.IsLeaf == null)
                                return false;
                            if (!node.IsLeaf && node.children == null) {
                                return {
                                    url: that.SheetUserHandler + "?ParentID=" + node.Code + "&LoadTree=true&Recursive=false&" + paramOptions,
                                }
                            }
                            return false;
                        },
                        url: this.SheetUserHandler + "?LoadTree=true&Recursive=" + this.Recursive + "&" + paramOptions,
                        onSelect: this.TreeNodeClick,
                        onCancelselect: this.TreeNodeClick,
                        SheetUserManager: this,
                        onSuccess: function () {
                            if (!this.options.SheetUserManager.IsLoaded) {
                                if (this.data.length > 0) {
                                    this.options.SheetUserManager.TreeNodeClick.apply(this, [{data: this.data[0]}]);
                                }
                                this.options.SheetUserManager.IsLoaded = true;
                            }
                        }
                    });
                },

                //获取加载组织机构的参数
                GetLoadTreeOption: function () {
                    if (!this.__QueryOptions) {
                        var querystr = "o=";
                        var querystr = "o=";
                        if (this.SegmentVisible) {
                            querystr += "S";
                        }
                        if (this.OrgUnitVisible) {
                            querystr += "O";
                        }
                        if (this.GroupVisible) {
                            querystr += "G";
                        }
                        if (this.PostVisible) {
                            querystr += "P";
                        }
                        if (this.UserVisible) {
                            querystr += "U";
                        }
                        if (this.VisibleUnits) {
                            querystr += "&VisibleUnits=" + this.VisibleUnits;
                        }
                        if (this.RootUnitID) {
                            querystr += "&RootUnitID=" + this.RootUnitID;
                        }
                        //if (this.RoleName) {
                        //    querystr += "&RoleName=" + encodeURI(this.RoleName);
                        //}
                        if (this.OrgPostCode) {
                            querystr += "&OrgPostCode=" + encodeURI(this.OrgPostCode);
                        }
                        if (this.UserCodes) {
                            querystr += "&UserCodes=" + encodeURI(this.UserCodes);
                        }
                        //显示离职人员  liming 20180918
                        if (this.ResignVisible)
                        {
                            querystr += "&ResignVisible=" + this.ResignVisible;
                        }

                        this.__QueryOptions = querystr;
                    }
                    return this.__QueryOptions;
                },
                //点击节点
                TreeNodeClick: function (e) {
                    if (e == null)
                        return;
                    if (e.data == null)
                        return;
                    var node = e.data;

                    var SheetUserManager = this.options.SheetUserManager;
                    if (SheetUserManager.SelectedValue == node.ObjectID && !SheetUserManager.SearchMode)
                        return;
                    SheetUserManager.SelectedValue = node.ObjectID;
                    SheetUserManager.SearchMode = false;
                    // 读取控件上的属性
                    var querystr = SheetUserManager.GetLoadTreeOption();
                    querystr = querystr.replace("&VisibleUnits=", "&V=");
                    SheetUserManager.OrgListPanel.html("");

                    if (e.data.treedataindex == 0
                            && SheetUserManager.OrgUnitVisible
                            && SheetUserManager.RootSelectable
                            //update by ouyangsk 如果未指定userCodes，就不需再查找组织，避免可选列表出现重复用户的问题
                            && !this.options.SheetUserManager.UserCodes) {
                        SheetUserManager.AddListItem.apply(SheetUserManager, [e.data]);
                    }

                    $.ajax({
                        type: "GET",
                        url: SheetUserManager.SheetUserHandler + "?ParentID=" + node.ObjectID + "&" + querystr,
                        dataType: "json",
                        //async: false,//同步执行
                        success: function (data) {
                        	//update by lisonglin 20190118
                        	if (data.length > 0 && SheetUserManager.IsMultiple) {//如果有数据，并且是多选
                                SheetUserManager.OrgListPanel.prepend(SheetUserManager.PanelSelectAll);//增加全选按钮
                                SheetUserManager.PanelSelectAll.bind("click.PanelSelectAll", function (e) {//绑定点击事件
                                    SheetUserManager.SelectAll(e, SheetUserManager);
                                });
                            }
                        	
                            var len = 0;//这里需要统计选中的数量，用于初始化全选按钮状态
                            for (var i = 0; i < data.length; ++i) {
                                // data[i].Text = SheetUserManager.decrypt(data[i].Text);
                                // data[i].Code = SheetUserManager.decrypt(data[i].Code);
                            	if (SheetUserManager.Choices[data[i].ObjectID] != undefined) {//如果当前对象已经选中，则len加1
                                    len++;
                                }
                                SheetUserManager.AddListItem.apply(SheetUserManager, [data[i]]);
                            }
                            
                            if (data.length > 0 && SheetUserManager.IsMultiple && $("#selectAll")) {
                                if (len == data.length) {
                                	$(".SelectorPanel:visible").find("#selectAll").prop("checked",true);//全选状态
                                } else {
                                	$(".SelectorPanel:visible").find("#selectAll").prop("checked",false);//取消全选状态
                                }
                            }
                        }
                    });
                },
                //搜索用户
                SearchOrg: function (SheetUserManager) {
                    var searchkey = $(SheetUserManager.SearchTxtElement).val().trim();
                    var currentTime = new Date();
                    if ((currentTime - this.KeyTime) < 499)
                        return;
                    if (!SheetUserManager.SearchKey && !searchkey) {
                        return;
                    }
                    if (!searchkey) {
                        if (!this.IsMobile) {
                            SheetUserManager.SearchKey = searchkey;
                            SheetUserManager.OrgListPanel.html("");
                            // SheetUserManager.TreeManager.selectNode(0);
                            SheetUserManager.TreeManager.selectNode(SheetUserManager.TreeManager.nodes[0]);
                        } else {
                            SheetUserManager.OrgListPanel.html("");
                        }
                        return;
                    }
                    SheetUserManager.SearchMode = true;
                    SheetUserManager.SearchKey = searchkey;
                    SheetUserManager.OrgListPanel.html("");

                    for (var k in SheetUserManager.SearchResults) {
                        if (SheetUserManager.SearchResults[k].SearchKey == searchkey &&
                                SheetUserManager.SearchResults[k].ParentID == SheetUserManager.SelectedValue) {
                            if (SheetUserManager.SearchResults[k].Data && SheetUserManager.SearchResults[k].Data.length) {
                            	//update by lisonglin 20190118
                            	if (this.IsMultiple) {//如果是多选，则增加全选按钮并绑定点击事件
                                    SheetUserManager.OrgListPanel.prepend(SheetUserManager.PanelSelectAll);
                                    SheetUserManager.PanelSelectAll.bind("click.PanelSelectAll", function (e) {
                                        SheetUserManager.SelectAll(e, SheetUserManager);
                                    });
                                }
                            	
                            	var len = 0;//这里需要统计选中的数量，用于初始化全选按钮状态
                                for (var i = 0; i < SheetUserManager.SearchResults[k].Data.length; ++i) {
                                	//如果当前对象已经选中，则len加1
                                	if (SheetUserManager.Choices[SheetUserManager.SearchResults[k].Data[i].ObjectID] != undefined) {
                                        len++;
                                    }
                                    SheetUserManager.AddListItem.apply(SheetUserManager, [SheetUserManager.SearchResults[k].Data[i], searchkey]);
                                }
                                if (this.IsMultiple && $("#selectAll")) {
                                    if (len == SheetUserManager.SearchResults[k].Data.length) {
                                    	$(".SelectorPanel:visible").find("#selectAll").prop("checked",true);//全选状态
                                    } else {
                                    	$(".SelectorPanel:visible").find("#selectAll").prop("checked",false);//取消全选状态
                                    }
                                }
                            } else {
                                SheetUserManager.OrgListPanel.html('<li class="user-item">没有任何组织</li>');
                            }
                            return;
                        }
                    }
                    $.ajax({
                        type: "GET",
                        url: SheetUserManager.SheetUserHandler + "?IsMobile=" + (!!this.IsMobile) +
                                "&SearchKey=" + encodeURI(searchkey) +
                                "&ParentID=" + (SheetUserManager.SelectedValue || SheetUserManager.RootUnit || "") +
                                "&" + SheetUserManager.GetLoadTreeOption(),
                        dataType: "json",
                        //async: false,//同步执行
                        success: function (data) {
                            if (SheetUserManager.IsMobile) {
                                SheetUserManager.AddMobileOptions(data, SheetUserManager.OrgListPanel, searchkey);

                                setTimeout(function () {
                                    SheetUserManager.RefreshMobilePage();
                                }, 550);
                            } else {
                                if (data != null && data.length > 0) {
                                	
                                	//update by lisonglin 20190118 搜索用户后全选
                                    if (SheetUserManager.IsMultiple) {
                                        SheetUserManager.OrgListPanel.prepend(SheetUserManager.PanelSelectAll);
                                        SheetUserManager.PanelSelectAll.bind("click.PanelSelectAll", function (e) {
                                            SheetUserManager.SelectAll(e, SheetUserManager);
                                        });
                                    }
                                	
                                    var len = 0;//这里需要统计选中的数量，用于初始化全选按钮状态
                                    for (var i = 0; i < data.length; ++i) {
                                        // data[i].Text = SheetUserManager.decrypt(data[i].Text);
                                        // data[i].Code = SheetUserManager.decrypt(data[i].Code);
                                    	if (SheetUserManager.Choices[data[i].ObjectID] != undefined) {//如果当前对象已经选中，则len加1
                                            len++;
                                        }
                                        SheetUserManager.AddListItem.apply(SheetUserManager, [data[i], searchkey]);
                                    }
                                    if (SheetUserManager.IsMultiple && $("#selectAll")) {
                                        if (len == data.length) {
                                        	$(".SelectorPanel:visible").find("#selectAll").prop("checked",true);//全选状态
                                        } else {
                                        	$(".SelectorPanel:visible").find("#selectAll").prop("checked",false);//取消全选状态
                                        }
                                    }
                                } else {
                                    SheetUserManager.OrgListPanel.html("<li class='user-item'>没搜索到组织</li>");
                                }
                            }
                            SheetUserManager.SearchResults.push({SearchKey: searchkey, ParentID: SheetUserManager.SelectedValue, Data: data});
                        }
                    });
                },

                //添加组织机构选择列项
                AddListItem: function (node, searchkey) {
                    var displayText = node.Text;
                    var titleText = node.Text;
                    if (searchkey) {
                        displayText = displayText.replace(searchkey, "<span class='bg-info'>" + searchkey + "</span>");
                        if (node.Code != "" && node.Text.indexOf("[" + node.Code + "]") == -1) {
                            displayText += "[" + node.orgInfo.replace(searchkey, "<span class='bg-info'>" + searchkey + "</span>") + "]";
                        }
                    }
                    if (this.IsMobile) {
                        // debugger
                        var item = $("<div></div>");
                        item.css("border-bottom", "1px solid #ccc");
                        item.height("50px");
                        item.css("clear", "both");
                        var checkid = $.MvcSheetUI.NewGuid();
                        var checkbox = $("<input type='checkbox' ObjectID='" + node.ObjectID + "' id='" + checkid + "'/>");
                        item.append(checkbox);
                        item.append($("<label type='checkbox' label-for='" + checkid + "'>" + displayText + "</label>").css("float", "none").css("left", "25px"));
                        this.OrgListPanel.append(item);

                        var thatSheetUser = this;
                        item.bind("touchstart", function () {
                            checkbox.click();

                            thatSheetUser.UnitCheckboxClick.apply(checkbox.get(0), [thatSheetUser, {ObjectID: node.ObjectID, Name: node.Text}]);
                        });
                    } else {
                        var item = $("<div>").addClass("task").append("<i style='float:left;line-height: 18px;' class='task-sort-icon fa  " + node.Icon + "'></i>")
                            .append("<span title='" + titleText+ " ' class='task-title' " +
                                "style='word-break: break-all;display: inline-block;width: 75%;margin-top: 0;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding-left: 4px'>" + displayText + "</span>");
                        item.css("padding", "5px 10px 5px 10px").css("border-bottom", "1px solid #e4e4e4").css("cursor", "pointer");
                        var checkid = $.MvcSheetUI.NewGuid();
                        var checkbox = $("<input type='checkbox' ObjectID='" + node.ObjectID + "' id='" + checkid + "'/>").css("height", "auto").css("margin", "0px").show();
                        var checkItem = $("<div>").addClass("action-checkbox pull-right").append(checkbox);

                        item.click(function (e) {
                            if (e.target.tagName.toLowerCase() != "input") {
                                $(this).find("input").click();
                            }
                        });
                        this.OrgListPanel.append(item.append(checkItem));
                        checkbox.attr("checked", this.Choices[node.ObjectID] != undefined);

                        checkbox.click({that: this, option: {ObjectID: node.ObjectID, Name: node.Text}}, function (e) {
                            e.data.that.UnitCheckboxClick.apply(this, [e.data.that, e.data.option]);
                        });
                    }
                },

                //单元选人点击
                UnitCheckboxClick: function (that, node) {
                    if (this.checked) {
                        if (!that.IsMultiple) {
                            that.ClearChoices.apply(that);
                            that.OrgListPanel.find("input").attr("checked", false);
                            this.checked = true;
                            if (that.IsMobile && that.Level > 0) {
                                $.ui.goBack(that.Level);
                                that.Level = 0;
                            }
                            that.FocusOutput.apply(that);
                        }
                        that.AddChoice.apply(that, [node]);
                        if (that.IsMultiple) {
                        	console.log($(".SelectorPanel:visible").find("#selectAll"))
                            //判断全选状态
                        	$(".SelectorPanel:visible").find("#selectAll").prop("checked",that.isAllSelect(that.Choices));
                        }
                    } else {
                        if (that.IsMultiple)
                            that.RemoveChoice.apply(that, [node.ObjectID]);
                        else
                            that.ClearChoices.apply(that);
                    }
                },
                // decrypt: function (encryptText) {
                // 	var decrypt;
                // 	$.ajax({
                //         url: $.MvcSheetUI.PortalRoot + "/AES/decrypt",
                //         data: {"original": encryptText},
                //         async: false,
                //         method : 'post',
                //         success: function (result) {
                //         	decrypt = result;
                //         }
                //     });
                // 	return decrypt;
                // },
                //判断当前部门是否全部选中
                isAllSelect: function (Choices) {
                	//closest:获得匹配选择器的第一个祖先元素   siblings():获得匹配集合中每个元素的同胞
                    var $this = $(".SelectorPanel:visible").find("#selectAll").closest("div.task").siblings(".task").find("input");
                    var len = 0;
                    $this.each(function () {
                        if (Choices[$(this).attr("ObjectID")] != undefined) {
                            len++;
                        }
                    });
                    if (len == $this.length) {
                        return true;
                    } else { 
                    	return false; 
                    }
                },
                //全选按钮事件
                SelectAll: function (e, that) {
                	//点击事件绑定在整个全选按钮对象(PanelSelectAll)上
                    if (e.target.tagName.toLowerCase() != "input") {//如果点击的不是复选框
                        if (!$(e.target).closest("div.task").find("input")[0].checked) {
                        	//点击之前复选框是未选中状态，则点击之后状态置为全选状态
                            $(e.target).closest("div.task").find("input")[0].checked = true;
                            $(e.target).closest("div.task").siblings().each(function () {
                                $(this).find("input")[0].checked = true;
                                that.AddChoice.apply(that, [{ ObjectID: $(this).find("input").attr("ObjectID"), Name: $.trim($(this).text()) }]);
                            })
                        } else {//点击之前复选框是选中状态，则点击之后取消全选状态
                            $(e.target).closest("div.task").find("input")[0].checked = false;
                            $(e.target).closest("div.task").siblings().each(function () {
                                $(this).find("input")[0].checked = false;
                                that.RemoveChoice.apply(that, [$(this).find("input").attr("ObjectID")]);
                            })
                        }
                    } else {//如果点击的是复选框
                        if ($(e.target)[0].checked) {//全选
                            $(e.target).closest("div.task").siblings().each(function () {
                                $(this).find("input")[0].checked = true;
                                that.AddChoice.apply(that, [{ ObjectID: $(this).find("input").attr("ObjectID"), Name: $.trim($(this).text()) }]);
                            })
                        } else {//取消全选
                            $(e.target).closest("div.task").siblings().each(function () {
                                $(this).find("input")[0].checked = false;
                                that.RemoveChoice.apply(that, [$(this).find("input").attr("ObjectID")]);
                            })
                        }
                    }
                }
            });
        })(jQuery);
﻿//选人控件
(function ($) {
    // 控件执行
    // 参数{AutoTrim:true,DefaultValue:datavalue,OnChange:""}
    //可以通过  $("#id").SheetTextBox(参数)  来渲染控件和获取控件对象
    $.fn.SheetWorkflow = function () {
        return $.MvcSheetUI.Run.call(this, "SheetWorkflow", arguments);
    };

    // 构造函数
    $.MvcSheetUI.Controls.SheetWorkflow = function (element, ptions, sheetInfo) {
        // 选择数据集合
        this.Choices = {};
        // 所有选择的元素
        this.ChoicesElement = null;
        // 搜索输入框元素
        this.SearchElement = null;
        this.SearchTxtElement = null;
        this.SearchButton = null;
        // 获取选中的值
        this.SelectedValue = null;
        // 获取当前搜索关键字
        this.SearchKey = null;
        // 获取是否是搜索模式
        this.SearchMode = false;
        this.KeyTime = null;
        // 搜索结果
        this.SearchResults = [];
        // 下拉框容器
        this.SelectorPanel = null;
        // 只在 Enter 进行搜索
        this.EnterSearch = true;
        this.OrgTreePanel = null;
        this.OrgListPanel = null;
        this.IsOverSelectorPanel = false;
        this.SheetWorkflowHandler = $.MvcSheetUI.PortalRoot + "/Workflow/QueryWorkflowNodes";
        this.GetWorkflowsHandler = $.MvcSheetUI.PortalRoot + "/Workflow/GetWorkflows";
        this.ModelControl = null;

        $.MvcSheetUI.Controls.SheetWorkflow.Base.constructor.call(this, element, ptions, sheetInfo);
    };

    // 继承及控件实现
    $.MvcSheetUI.Controls.SheetWorkflow.Inherit($.MvcSheetUI.IControl, {
        //移动端
        RenderMobile: function () {
            //是否多选
            this.IsMultiple = this.LogicType == $.MvcSheetUI.LogicType.MultiParticipant;

            //不可用
            if (!this.Editable) {
                // $(this.Element).prop("readonly", true);
                $(this.Element).addClass(this.Css.Readonly);
                $(this.Element).addClass("item-content");
            }
            else {
                this.MobileHtmlRender();
                this.MoveToMobileContainer();
            }
            //初始化默认值
            this.InitValue();

            if (!this.EditPanel) {
                this.EditPanel = $("<div>").attr("id", $.uuid()).attr("data-title", this.Title).attr("data-footer", "none").addClass("panel")
                    .appendTo("#content");
            }
            $(this.EditPanel).addClass('no-scroll')
            this.SetMobilePanelRefreshOnload($(this.EditPanel).attr('id'));
        },
        // PC端
        Render: function () {
            //是否多选

            //this.IsMultiple = this.LogicType == $.MvcSheetUI.LogicType.ShortString;
            if (!this.Visiable) {
                this.Element.style.display = "none";
                return;
            }
            // 查看痕迹
            if (this.TrackVisiable && !this.Originate && this.DataField.indexOf(".") == -1) { this.RenderDataTrackLink(); }

            //不可用
            if (!this.Editable) {
                // console.log(this.Element, 'this.Element')
                // $(this.Element).prop("readonly", true);
                $(this.Element).addClass(this.Css.Readonly);
                $(this.Element).css("padding-top", "6px");
            }
            else {
                this.ClearChoices();
                this.IsLoaded = false;
                this.SelectedValue = "";
                this.__QueryOptions = "";

                //渲染界面
                this.HtmlRender();
                //绑定事件 
                this.BindEnvens();
            }

            //初始化默认值
            this.InitValue();
        },

        //初始化值
        InitValue: function () {
            // 设置默认值
            if (this.Originate && !this.V && this.DefaultValue) {
                this.V = this.DefaultValue;
            }

            this.SetValue(this.V);
            if (this.IsMobile) {
                if (this.Editable) {
                    this.Mask.html(this.GetText());
                }
                else {
                    $(this.Elment).html(this.GetText());
                }
            }
        },
        // 设置组织机构的根目录，传组织编码
        SetRootUnit: function (unitId) {
            // 设置顶点 unit 
            // 重新加载树
            this.RootUnitID = RootUnitID;

            this.TreeManager.clear();
            this.TreeManager.loadData(null, this.SheetUserHandler + "?RootUnitID=" + this.RootUnitID);
        },
        // 设置值
        SetValue: function (Obj) {
            if (Obj == undefined || Obj == null || Obj == "") return;
            if (Obj.constructor == Object) {
                this.AddChoice({ Code: Obj.Code, DisplayName: Obj.DisplayName || Obj.Name });
            }
            else if (Obj.constructor == Array) {
                for (var i = 0; i < Obj.length; i++) {
                    if (Obj[i].constructor == Object) {
                        this.AddChoice({ Code: Obj[i].Code, DisplayName: Obj[i].DisplayName || Obj.Name });
                    }
                    else if (Obj[i].constructor == String) {
                        this.AddWorkflow(Obj[i]);
                        if (!this.IsMultiple) break;
                    }
                }
            }
            else if (Obj.constructor == String) {
                this.AddWorkflow(Obj);
            }
        },
        //用户ID
        GetValue: function () {
            var users;
            for (var ObjectID in this.Choices) {
                if (this.IsMultiple) {
                    if (users == undefined) users = new Array();
                    users.push(ObjectID);
                }
                else {
                    users = ObjectID;
                }
            }
            return users == undefined ? "" : users;
        },

        //获取显示
        GetText: function () {
            var userNames;
            for (var ObjectID in this.Choices) {
                if (this.IsMultiple) {
                    if (userNames == undefined) userNames = new Array();
                    userNames.push(this.Choices[ObjectID].DisplayName);
                }
                else {
                    userNames = this.Choices[ObjectID].DisplayName;
                }
            }
            return userNames == undefined ? "" : userNames.toString();
        },

        //保存数据
        SaveDataField: function () {
            var result = {};
            if (!this.Visiable || !this.Editable) return result;
            result[this.DataField] = this.DataItem;
            if (!result[this.DataField]) {
                if (this.DataField.indexOf(".") == -1) { alert(SheetLanguages.Current.DataItemNotExists + ":" + this.DataField); }
                return {};
            }

            var users = this.GetValue();
            //if (result[this.DataField].V != users)
            {
                result[this.DataField].V = users;
                return result;
            }
            return {};
        },

        //渲染样式
        HtmlRender: function () {
            this.ID = $(this.Element).attr("ID") || $.MvcSheetUI.NewGuid();
            $(this.Element).attr("ID", this.ID);
            $(this.Element).css("z-index", "inherit");

            //设置页面元素的样式
            $(this.Element).addClass("select2-container select2-container-multi ").attr("data-sheetusercontrol", true);
            $(this.Element).css("min-width", "150px");

            //设置输入框
            if (this.ChoicesElement == null) {
                if (!this.IsMultiple)
                    this.ChoicesElement = $("<ul>").addClass("select2-choices").css("overflow", "hidden");
                else
                    this.ChoicesElement = $("<ul>").addClass("select2-choices").css("overflow", "hidden").attr("style", "width: 100% !important; height: 28px !important;min-height: 27.6px !important;overflow-y: scroll;");

                this.SearchElement = $("<li>").addClass("select2-search-field");
                this.SearchTxtElement = $("<input>").addClass("form-control").addClass("no-padding");
                this.SearchTxtElement.width("1px");

                //添加输入框
                this.SearchElement.append(this.SearchTxtElement);
                this.ChoicesElement.append(this.SearchElement);
                $(this.Element).append(this.ChoicesElement);
            }

            this.SetSearchTxtElementWidth.apply(this);
            //不可用
            if (!this.Editable) {
                $(this.SearchTxtElement).prop("readonly", true);
                $(this.SearchElement).width("100%");
                $(this.SearchElement).addClass(this.Css.Readonly);
                this.SearchTxtElement.closest("ul").css("border", "0px");
                this.SearchTxtElement.width("100%");
                return;
            }
            if (this.SelectorPanel == null) {
                //组织机构选择Panel
                this.SelectorPanel = $("<div>").addClass("bordered").addClass("SelectorPanel")
                    .css("position", "absolute")
                    .css("z-index", "888")
                    .width("100%")
                    .css("min-width", "320px")
                    .css("height", "300px")
                    .css("display", "none")
                     //.css("overflow", "auto")
                    .css("background-color", "#FFFFFF").css("left", "0").attr("data-SheetUserPanel", "SelectorPanel");
                if (!this.IsMultiple) {
                    this.OrgTreePanel = $("<div>").css("width", "100%").addClass("bordered").css("float", "left").height("100%").css("overflow", "scroll");
                }
                if (this.IsSearch || this.IsSearch2 || this.IsSearch3)
                    this.OrgTreePanel = $("<div>").attr("style", "margin-top: 5px;").css("width", "98%").addClass("bordered").css("float", "left").height("87%").css("overflow", "scroll");
                else
                    this.OrgTreePanel = $("<div>").attr("style", "margin-top: 5px;").css("width", "100%").addClass("bordered").css("float", "left").height("100%").css("overflow", "scroll");

                if (this.IsSearch || this.IsSearch3) {
                    this.SearchLableElement1 = $("<label>").addClass("input-setworkflow").addClass("form-control").attr("style", "width: 98% !important; margin-left: 4px;");
                    this.SearchTxtElement1 = $("<i>").addClass("input-i-search").addClass("fa fa-search").css("top", "9px");
                    this.SearchTxtElement2 = $("<input>").addClass("input-text").attr("style", "width:92% !important;border: none; margin-top: -5px;padding-left: 10px;").css("height", "26px");
                    this.SearchLableElement1.append(this.SearchTxtElement1).append(this.SearchTxtElement2);
                    this.SelectorPanel.append(this.SearchLableElement1);
                }
                if (this.IsSearch2) {
                    this.SearchLableElement1 = $("<div>").attr("style", "width: auto;border: 1px solid #a8a8a8; ");
                    this.SearchTxtElement1 = $("<i>").addClass("input-i-search").addClass("fa fa-search").attr("style", " position: absolute;top: 12px;left: 11px;");
                    this.SearchTxtElement2 = $("<input>").addClass("input-text").attr("style", "width: 90% !important;border: 0;outline: white;margin-left: 29px;height: 28px; ");
                    this.SearchLableElement1.append(this.SearchTxtElement1).append(this.SearchTxtElement2);
                    this.SelectorPanel.append(this.SearchLableElement1);
                }
                this.SelectorPanel.append(this.OrgTreePanel);
                // 组织机构选择列表 
                if (this.IsSearch3)
                    this.OrgListPanel = $("<div>").height("100%").width("96%").css("overflow", "auto");
                else if (!this.IsSearch2)
                    this.OrgListPanel = $("<div>").height("100%").attr("style", "margin-top:37px;width: 96%;"); 
                  // this.OrgListPanel = $("<div>").height("100%").attr("style", "margin-top:0px;width: 100%;");
                else
                    this.OrgListPanel = $("<div>").height("100%").css("overflow", "auto");
                this.SelectorPanel.append(this.OrgListPanel);
                // 添加组织机构
                $(this.Element).append(this.SelectorPanel);
            }

            if (this.WorkflowCodes) { // 显示固定的流程模板
                this.OrgTreePanel.hide();
                this.OrgListPanel.show();
                this.SelectorPanel.css("min-width", "0px");
            }
            else {
                this.OrgTreePanel.show();
                this.OrgListPanel.hide();
                this.SelectorPanel.css("min-width", "430px");
            }
        },
        //移动端渲染
        MobileHtmlRender: function () {
            this.Level = 0;
            this.ID = $.MvcSheetUI.NewGuid();
            $(this.Element).attr("ID", this.ID);
            //选中的用户
            this.ChoicesPanel = $("<div></div>")
                .addClass("select2-container").addClass('scroll-wrapper')
                .css({
                    'background-color': 'white',
                    position: 'relative',
                    //最小显示一行
                    'min-height': '37px',
                    //最多显示三行
                    'max-height': '110px',
                    width: '100%'
                });
            this.ChoicesElement = $("<ul>").addClass("select2-choices").addClass('scroller')
                .css({
                    width: '100%',
                    overflow: 'hidden',
                    'min-height': '35px'
                });
            this.ChoicesPanel.append(this.ChoicesElement);
            $(this.Element).append(this.ChoicesPanel);

            //搜索框
            this.SearchElement = $("<li>").addClass("select2-search-field").css({ width: '100%' });
            this.SearchTxtElement = $("<input>").attr('placeholder', '搜索')
                .css({
                    width: '85%',
                    height: '40px',
                    'padding-left': '10px',
                    'padding-right': '10px',
                    'font-size': '14px'
                });
            //添加搜索输入框
            this.SearchElement.append(this.SearchTxtElement);
            //限制了范围时，禁用搜索
            if (this.VisibleUnits) {
                this.SearchElement.hide();
            }
            //搜索按钮
            this.SearchButton = $("<a>").attr("data-ignore", "true").addClass("button icon magnifier big")
                .css({ border: 'none', margin: 0, padding: '12px', width: '15%' });
            this.SearchElement.append(this.SearchButton);
            $(this.Element).append($('<ul>').width('100%').append(this.SearchElement));

            //搜索结果列表
            this.OrgListPanel = $("<ul>").width("100%").addClass('list');
            this.SelectorPanel = $("<div>").attr("id", $.uuid()).addClass('list').addClass("scroll-wrapper").width("100%").css('position', 'relative');
            $(this.SelectorPanel).bind('touchstart', function () {
                thatSheetUser.SearchTxtElement.blur();
            });
            this.SelectorPanel.append(this.OrgListPanel);
            $(this.Element).append(this.SelectorPanel);

            //底部返回按钮
            this.FooterID = $.uuid();
            var footerObj = $("<footer id=" + this.FooterID + " ><a class='icon left'>返回</a><footer>");
            $("#afui").append(footerObj);
            $(footerObj).unbind("click.footerObj").bind("click.footerObj", this, function (e) {
                $.ui.goBack(e.data.Level);
                e.data.Level = 0;

                e.data.Validate();
            });

            var thatSheetUser = this;
            //如果设置了可见组织
            if (this.VisibleUnits && this.VisibleUnits.length) {
                this.OrgListPanel;

                var loadOptions = this.GetLoadTreeOption();
                if (this.VisibleUnits.split(';').length > 1) {
                    var loadUrl = this.SheetUserHandler + "?IsMobile=true&" + loadOptions;
                    //如果有多个可见组织，列出可见组织
                    $.ajax({
                        url: loadUrl,
                        dataType: "json",
                        //async: false,
                        success: function (data) {
                            thatSheetUser.AddMobileOptions(data, thatSheetUser.OrgListPanel)
                        },
                        error: function (e) {
                            // console.log(e);
                        }
                    });
                }
                else {// 只有一个可见组织，直接加载成员列表
                    var loadUrl = this.SheetUserHandler + "?IsMobile=true&ParentID=" + this.VisibleUnits + "&" + loadOptions;
                    //如果有多个可见组织，列出可见组织
                    $.ajax({
                        url: loadUrl,
                        dataType: "json",
                        //async: false,
                        success: function (data) {
                            thatSheetUser.AddMobileOptions(data, thatSheetUser.OrgListPanel);
                        },
                        error: function (e) {
                            // console.log(e);
                        }
                    });
                }
            }
            else {
                //组织机构列表按钮
                this.OrgListBtn = $("<li>").data("targetID", $.uuid()).text("从组织架构选择")//.addClass("icon user big")//.css("position", "absolute")
                    .addClass("selectFromOrg").css({
                        'border-top': '1px solid #ccc',
                        height: '40px',
                        top: '0px',
                        right: '0px',
                        padding: '10px',
                        cursor: 'pointer',
                        'border-bottom': '1px solid #eeeeee'
                    });

                this.OrgListBtn.insertAfter(this.SearchElement);

                //输入控件
                $(this.SearchTxtElement).unbind("keydown.SearchTxtElement").bind("keydown.SearchTxtElement", this, function (e) {
                    if (e.which == 13) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                });

                //移动端搜索按钮
                $(this.SearchButton).unbind("click.SearchTxtElement").bind("click.SearchTxtElement", this, function (e) {
                    e.data.SearchWorkflow.apply(e.data.SearchTxtElement, [e.data]);
                });

                $(this.OrgListBtn).unbind("click.OrgListBtn").bind("click.OrgListBtn", this, function (e) {
                    var targetID = $(this).data("targetID");
                    e.data.AddMobilePanel.apply(e.data, [targetID, ""]);
                });
            }
        },
        //绑定事件
        BindEnvens: function () {
            if (!this.Editable) return;//不可用

            //点击到当前元素，设置input焦点
            $(this.ChoicesElement).unbind("click.SheetUser").bind("click.SheetUser", this, function (e) {
                e.data.SearchTxtElement.focus();
            });

            //得到焦点显示
            $(this.SearchTxtElement).unbind("focusin.SearchTxtElement").bind("focusin.SearchTxtElement", this, function (e) {
                e.data.FocusInput.apply(e.data);
            });

            if (this.IsMobile) {
                // 输入控件
                $(this.SearchTxtElement).unbind("keydown.SearchTxtElement").bind("keydown.SearchTxtElement", this, function (e) {
                    if (e.which == 13) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                });

                // 移动端仅在Enter时执行搜索
                $(this.SearchTxtElement).unbind("keyup.SearchTxtElement").bind("keyup.SearchTxtElement", this, function (e) {
                    if (e.which == 13) {
                        e.data.SetSearchTxtElementWidth.apply(e.data);
                        e.data.FocusInput.apply(e.data);
                        e.data.SearchWorkflow.apply(e.data, [e.data]);
                    }
                });
            }
            else {
                if (this.IsMultiple || this.IsSearch || this.IsSearch2 || this.IsSearch3) {
                    // 输入控件
                    $(this.SearchTxtElement2).unbind("keyup.SearchTxtElement2").bind("keyup.SearchTxtElement2", this, function (e) {
                    	var searchKey = $(this).val();
                    	var that = e.data;
                    	that.TreeManager.clear();
                    	that.TreeManager.loadData(null, that.TreeManager.options.url + "&search=" + searchKey);
                    });
                } else {
                    // 输入控件
                    $(this.SearchTxtElement).unbind("keyup.SearchTxtElement").bind("keyup.SearchTxtElement", this, function (e) {
                        e.data.SetSearchTxtElementWidth.apply(e.data);
                        e.data.FocusInput.apply(e.data);
                        e.data.KeyTime = new Date();
                        // setTimeout("e.data.SearchWorkflow.apply(e.data, [e.data])", 500);
                        var that = e.data;
                        if (that.AllowSearch) {
                            setTimeout(function () {
                                that.SearchWorkflow.apply(that, [that]);
                            }, 500)
                        }
                    });
                }
                $(this.SearchTxtElement).unbind("keydown.SearchTxtElement").bind("keydown.SearchTxtElement", this, function (e) {
                    if (e.keyCode == 8 && $(this).val() == "") {
                        e.data.RemoveChoice.apply(e.data, [$(this).parent().prev().attr("data-code")]);
                    }
                });
            }

            $(document).unbind("click." + this.ID).bind("click." + this.ID, this, function (e) {
                var _that = e.data.ID;
                if ($(e.target).closest("div[id='" + e.data.ID + "']").length == 0 && $("div[id='" + _that + "']").attr("style")) {
                    var _width = 0;
                    var _clientWidth = 0;
                    for (var i = 1; i < e.data.ChoicesElement[0].childNodes.length; i++) {
                        _clientWidth += e.data.ChoicesElement[0].childNodes[i].clientWidth;
                    }
                    if (_clientWidth >= e.data.ChoicesElement[0].offsetWidth * 0.8) {
                        if ($("div[id='" + _that + "']").attr("style").indexOf("left") > -1) {
                            if ($("div[id='" + _that + "']").width())
                                _width = $("div[id='" + _that + "']").width();
                            $("div[id='" + _that + "']").attr("style", "width:" + _width + "px;left: -5px; z-index: inherit; min-width: 150px;");
                        }
                        else {
                            if ($("div[id='" + _that + "']").width())
                                _width = $("div[id='" + _that + "']").width();
                            $("div[id='" + _that + "']").attr("style", "width:" + _width + "px;min-height: 27.6px !important;");
                            //$("div[id='" + _that + "']").attr("style", "width:" + _width + "px;height: 48px !important;min-height: 27.6px !important;");
                        }
                        $("div[id='" + _that + "']").children("ul").attr("style", "width: 100% !important;height: 28px !important;min-height: 27.6px !important;overflow-y: scroll;");
                        //$("div[id='" + _that + "']").children("ul").attr("style", "width: 100% !important;height: 45px !important;min-height: 27.6px !important;overflow-y: scroll;");
                    } else {
                        if ($("div[id='" + _that + "']").attr("style").indexOf("left") > -1) {
                            if ($("div[id='" + _that + "']").width())
                                _width = $("div[id='" + _that + "']").width();
                            $("div[id='" + _that + "']").attr("style", "width:" + _width + "px;left: -5px; z-index: inherit; min-width: 150px;");
                        }
                        else {
                            if ($("div[id='" + _that + "']").width())
                                _width = $("div[id='" + _that + "']").width();
                            $("div[id='" + _that + "']").attr("style", "width:" + _width + "px;min-height: 27.6px !important;");
                        }
                        $("div[id='" + _that + "']").children("ul").attr("style", "width: 100% !important;height: 28px !important;min-height: 27.6px !important;overflow-y: scroll;");
                    }
                    e.data.FocusOutput.apply(e.data);
                }
            });
            if (this.IsMobile) {
                $(this.OrgListBtn).unbind("click.OrgListBtn").bind("click.OrgListBtn", this, function (e) {
                    var targetID = $(this).data("targetID");
                    e.data.AddMobilePanel.apply(e.data, [targetID, ""]);
                });
            }
        },

        //移动端:添加panel
        AddMobilePanel: function (id, parentID) {
            this.Level++;
            var that = this;
            var divObj = $("#" + id);
            if (divObj.length == 0) {
                //新pannel
                divObj = $("<div>").attr('id', id).addClass('panel').addClass('no-scroll').hide();
                if (parentID != "") {
                    var parentObj = $("li[objectID='" + parentID + "']>label");
                    if (parentObj.length == 0) parentObj = $("li[objectID='" + parentID + "']");
                    divObj.attr("data-title", parentObj.text());
                }
                else {
                    divObj.attr("data-title", $.ui.prevHeader.find("#pageTitle").text());
                }
                divObj.attr("data-footer", this.FooterID);
                divObj.data("parentid", parentID);
                var loadUrl = that.SheetUserHandler + "?IsMobile=true&" + that.GetLoadTreeOption();
                if (parentID) {
                    loadUrl = that.SheetUserHandler + "?IsMobile=true&ParentID=" + parentID;
                }

                $.ajax({
                    type: "GET",
                    url: loadUrl,
                    dataType: "json",
                    context: that,
                    async: false,//同步执行
                    success: function (data) {
                        var ul = $("<ul>").addClass('orglist').addClass('list');
                        that.AddMobileOptions(data, ul);

                        var wrapper = $("<div class='scroll-wrapper'>");
                        wrapper.append(ul);
                        divObj.append(wrapper);

                        $('#content').append(divObj);

                        that.SetMobilePanelRefreshOnload(id);
                    }
                });

                //添加
                //$.ui.addContentDiv(id);
            }

            //显示
            $.ui.loadContent(id);
            //检查是否选中
            this.MobileFindCheckbox(id);
        },

        MobilePreBack: function () {
            var id = "#" + $.ui.activeDiv.id;
            if (this.Level > 0) {
                this.Level--;
            }
            this.MobileFindCheckbox(id);
        },

        //设置页面加载时自动刷新滚动条
        SetMobilePanelRefreshOnload: function (panelId) {
            var that = this;
            //进入页面时自动刷新滚动条
            window.PanelLoadActions = window.PanelLoadActions || {};
            var that = this;
            var fnName = 'F' + this.EditPanel.attr('id').replace(/\-/g, '');

            $('#' + panelId).attr('data-load', 'window.PanelLoadActions.' + fnName)

            window.PanelLoadActions[fnName] = function () {
                setTimeout(function () {
                    that.RefreshMobilePage();
                }, 600);
            }
        },


        AddMobileOptions: function (data, ulList, searchKey) {
            if (data) {
                var that = this;
                if (data instanceof Array) {
                    if (data.length) {
                        $(data).each(function () {
                            that._AddMobileOption(this, ulList, searchKey);
                        })
                    }
                    else {
                        ulList.html('<li class="user-item">没有任何组织</li>');
                    }
                }
                else {
                    that._AddMobileOption(data, ulList, searchKey);
                }
            }
            else {
                ulList.html('<li class="user-item">没有任何组织</li>');
            }
        },

        //获取是否允许选择组、OU、用户的标识
        GetSelectableFlag: function () {
            if (typeof (this.__SelectableOption) == 'undefined') {
                this.__SelectableOption = '';

                loadOptions = this.GetLoadTreeOption();
                var o = loadOptions.match(/o=[A-z]*/)
                if (o && o.length) {
                    this.__SelectableOption = o[0].replace('o=', '');
                }
            }
            return this.__SelectableOption;
        },

        //添加可选项
        _AddMobileOption: function (item, ulList, searchKey) {
            var selectableFlag = this.GetSelectableFlag();
            var li = $("<li>").addClass('user-item');
            if (selectableFlag.indexOf(item.ExtendObject.UnitType) > -1) {
                var checkboxid = $.uuid();
                var checkbox = $("<input type='checkbox'  id='" + checkboxid + "' data-objectid='" + item.ObjectID + "'/>");
                checkbox.attr("checked", this.Choices && this.Choices[item.ObjectID] != undefined);
                li.append(checkbox);

                var displayText = item.Text;
                if (searchKey) {
                    displayText.replace(searchKey, "<span class='bg-info'>" + searchKey + "</span>")
                }

                li.append($("<label type='checkbox' label-for='" + checkboxid + "'>" + displayText + "</label>").css("float", "none").css("left", "25px"));
            }
            else {
                li.append(item.Text);
            }
            li.attr("objectID", item.ObjectID);
            var targetId = $.uuid();
            li.attr("targetID", targetId);

            if (!item.IsLeaf) {
                var linkelemnt = $("<a data-ignore=true>" + $(li).html() + "</a>");
                $(li).html("").append(linkelemnt);

                li.append($('<div>').addClass('org-expand').css({
                    width: '20%', height: '100%', 'z-index': 2, position: 'absolute', right: 0, top: 0
                }));
            }
            ulList.append(li);

            var node = {
                ObjectID: item.ObjectID, Name: item.Text
            }
            $(li).unbind("click.OrgListBtn").bind("click.OrgListBtn", [this, node], function (e) {
                var t = e.data[0];
                var n = e.data[1];
                if ($(e.target).is('.org-expand') || $(this).find('input[type=checkbox]').length == 0) {
                    var parentID = $(this).attr("objectID");
                    var targetID = $(this).attr("targetID");
                    $("#defaultHeader>.backButton").data("pannelid", targetId);
                    t.AddMobilePanel.apply(t, [targetID, parentID]);
                }
                else {
                    var chk = $(this).find("input[type=checkbox]")
                    chk.prop('checked', !chk.prop('checked'));

                    t.UnitCheckboxClick.apply($(this).find("input[type=checkbox]").get(0), e.data);
                }
            });
        },

        //检查是否选中
        MobileFindCheckbox: function (id) {
            if (id == undefined && $.ui.history) {
                id = $.ui.history[$.ui.history.length - 1].target
            }

            if (id.indexOf("#") < 0) {
                id = "#" + id;
            }

            var that = this;
            $(id).find("input:checkbox").each(function () {
                $(this).prop("checked", that.Choices[$(this).attr("data-objectid")] != undefined);
            });
        },

        //设置输入框的宽度
        SetSearchTxtElementWidth: function () {
            if (this.IsMobile) {
                return;
            }
            var w = "1px";
            var length = this.SearchTxtElement.val().length;
            if (length > 0) {
                w = length * 15 + "px";
                this.SearchTxtElement.removeAttr("PlaceHolder", this.PlaceHolder);
            }
            else if ($.isEmptyObject(this.Choices)) {
                w = "100%";
                this.SearchTxtElement.attr("PlaceHolder", this.PlaceHolder);
            }
            else {
                this.SearchTxtElement.removeAttr("PlaceHolder", this.PlaceHolder);
            }
            $(this.SearchTxtElement).width(w);

            if (this.IsMobile) {
                //$(this.SelectorPanel).css("top", ($(this.Element).height()+20)+"px");
            }
        },

        //获取焦点焦点
        FocusInput: function () {
            if (this.IsMobile) {
                return;
            }
            if (this.SelectorPanel.is(":visible")) return;

            $("div[data-SheetUserPanel='SelectorPanel']").hide();
            this.SelectorPanel.show();
            if (!this.IsMobile && !this.IsLoaded) {
                this.LoadOrgTree();
            }

            if (!this.IsMobile && this.OrgListPanel.find("input").length == 0) {
                this.TreeManager.selectNode(this.TreeManager.data[0]);
            }
        },

        //失去焦点
        FocusOutput: function () {
            if (this.IsMobile) {
                return;
            }
            if (this.SelectorPanel.is(":hidden")) return;
            if ($(this.SearchTxtElement).val().length > 0) {
                this.OrgListPanel.html("");
                $(this.SearchTxtElement).val("");

                //this.HtmlRender();
                this.SetSearchTxtElementWidth.apply(this);
                if (this.WorkflowCodes) { // 显示固定的流程模板
                    this.OrgTreePanel.hide();
                    this.OrgListPanel.show();
                    this.SelectorPanel.css("min-width", "0px");
                }
                else {
                    this.OrgTreePanel.show();
                    this.OrgListPanel.hide();
                    this.SelectorPanel.css("min-width", "430px");
                }
            }
            this.SelectorPanel.hide();
        },
        //添加选择:{ObjectID:"",Name:""}
        AddChoice: function (Object) {
            if (!Object) return;
            if (!Object.Code) return;
            if (this.Choices[Object.Code]) return;
            if (!this.IsMultiple) {// 清除其他所有选项
                this.ClearChoices();
            }
            this.Choices[Object.Code] = Object;
            for (var codeIndex in this.Choices.length) {
                this.Element.find(".SelectorPanel")
            }
            //只读
            if (!this.Editable) {
                $(this.Element).html(this.GetText());
                return;
            }

            var choiceID = $.MvcSheetUI.NewGuid();
            Object.ChoiceID = choiceID;
            var choice = $("<li class='select2-search-choice'></li>")

            var NameDiv = $("<div>" + Object.DisplayName + "</div>");
            choice.css("cursor", "pointer").css("margin-top", "2px").css('background-color', '#b0b0b0');
            choice.attr("id", choiceID).attr("data-code", Object.Code).append(NameDiv);

            if (this.IsMobile) {
                choice.css("margin-top", "10px")
                this.ChoicesElement.append(choice);
            }
            else {
                this.SearchElement.before(choice);
                this.SetSearchTxtElementWidth.apply(this);
                this.ChoicesElement.append(choice);
            }

            //关闭按钮
            var colseChoice = $("<a href='javascript:void(0)' class='select2-search-choice-close'></a>");
            choice.append(colseChoice);
            choice.unbind("click.choice").bind("click.choice", this, function (e) {
                e.data.RemoveChoice.apply(e.data, [$(this).attr("data-code")]);
            });
            //校验
            this.Validate();

            if (this.IsMobile) {
                this.OnMobileChange();
            }
        },

        OnMobileChange: function () {
            if (this.IsMobile) {
                var that = this;
                setTimeout(function () {
                    that.RefreshMobilePage();
                }, 100)
            }
        },

        RefreshMobilePage: function () {
            //如果当前在选择的主界面里，重新计算高度
            if ($.ui.activeDiv.id == this.EditPanelID) {
                //选中项容器高度自增减
                this.ChoicesPanel.height($(this.ChoicesElement).outerHeight());

                if (this.SelectorPanel) {
                    //搜索框填充页面高度
                    this.SelectorPanel.outerHeight($('#afui').height() - $('header:visible').outerHeight() - $('#footer:visible').outerHeight() - this.ChoicesPanel.outerHeight() - this.SearchElement.parent().outerHeight())
                }
            }

            var that = this;
            //刷新页面中所有滚动条
            $($.ui.activeDiv).find(".scroll-wrapper").each(function () {
                if ($(this).parent().is(".panel")) {
                    $(this).height($("#afui").height() - ($("header:visible").height() || 0) - ($("footer:visible").height() || 0) + "px");
                }
                var scoller = that._GetScroller(this);
                if (scoller && scoller.refresh) {
                    scoller.refresh();
                }
            })
        },

        _GetScroller: function (wrapperSelector) {
            this.IScrollers = this.IScrollers || {};

            var wrapper = $(wrapperSelector).first();
            var scrollerId = wrapper.data("scroller-id");
            if (!scrollerId) {
                scrollerId = $.uuid();
                wrapper.data("scroller-id", scrollerId);
                this.IScrollers[scrollerId] = new IScroll(wrapper.get(0));
            }
            return this.IScrollers[scrollerId];;
        },

        //Error:这里有时间，可以实现批量的效果
        //添加:UserID/UserCode
        AddWorkflow: function (WorkflowCodes) {
            var that = this;
            if (typeof (WorkflowCodes) == "string") {
                WorkflowCodes = [WorkflowCodes];
            }
            var param = { WorkflowCodes: WorkflowCodes };
            if (this.isBizQuery) {
                param.isBizQuery = true;
            }
            $.ajax({
                type: "POST",
                url: this.GetWorkflowsHandler,
                data: param,
                dataType: "json",
                traditional: true,
                async: false,//同步执行
                success: function (data) {
                    if (data) {
                        for (var i = 0; i < data.length; i++) {
                            that.AddChoice({ Code: data[i]["Value"], DisplayName: data[i]["Text"] });
                        }
                    }
                }
            });
        },

        //清除所有的选择
        ClearChoices: function () {
            for (var ObjectID in this.Choices) {
                this.RemoveChoice(ObjectID);
            }

            this.OnMobileChange();
        },

        //移除选择
        RemoveChoice: function (code) {
            if (this.Choices[code]) {
                this.OrgListPanel.find("input[ObjectID='" + code + "']").prop("checked", false);

                $("#" + this.Choices[code].ChoiceID).remove();
                delete this.Choices[code];
            }

            var checkedNodes = this.TreeManager.getChecked();
            if (checkedNodes == undefined) { }
            else {
                if (checkedNodes.length > 0) {
                    for (var index = 0; index < checkedNodes.length; index++) {
                        if (checkedNodes[index].data.Code == code) {
                            $(checkedNodes[index].target).find(".l-checkbox").click();
                        }
                    }
                }
            }

            //this.OrgTreePanel.show();
            //this.OrgListPanel.hide();

            this.SetSearchTxtElementWidth.apply(this);
            this.Validate();

            this.OnMobileChange();

            if (this.OnChange) {
                this.RunScript(this, this.OnChange, [this]);
            }
        },

        //加载组织机构树
        LoadOrgTree: function () {
            //加载样式和脚本
            if (!this.OrgTreePanel) return;
            var that = this;
            var treeUl = $("<ul>").css("min-width", "180px");
            this.OrgTreePanel.append(treeUl);

            //加载LigerUI
            if (!treeUl.ligerTree) {
                $("body:first").append("<link rel='stylesheet' type='text/css' href='" + _PORTALROOT_GLOBAL + "/WFRes/_Content/themes/ligerUI/Aqua/css/ligerui-tree.css' />");
                $.ajax({
                    url: _PORTALROOT_GLOBAL + "/WFRes/_Scripts/ligerUI/ligerui.all.min.js",
                    type: "GET",
                    dataType: "script",
                    async: false,//同步请求
                    global: false
                });
            }
            var that = this;
            this.IsLoaded = false;
            var paramOptions = this.GetLoadTreeOption();
            this.TreeManager = $(treeUl).ligerTree({
                checkbox: this.IsMultiple,
                idFieldName: 'Code',
                textFieldName: 'DisplayName',
                iconFieldName: "Icon",
                btnClickToToggleOnly: true,
                isExpand: function (e) {
                    return e.data.Frequent == 1 || (that.SearchTxtElement2 && that.SearchTxtElement2.val().length > 0);
                },
                isLeaf: function (data) {
                    return data.IsLeaf;
                },
                single: !this.IsMultiple,
                delay: function (e) { 
                    var node = e.data;
                    if (node == null) return false;
                    if (node.IsLeaf == null) return false;
                    if (!that.IsAsync) return false;
                    if (!node.IsLeaf) {
                        return {
                            url: that.SheetWorkflowHandler + "?" + that.GetLoadTreeOption(node.Code)
                        }
                    }
                    return false;
                },
                url: this.SheetWorkflowHandler + "?" + paramOptions,
                onSelect: this.TreeNodeClick,
                // onCancelselect: this.TreeNodeClick,
                onCheck: this.TreeNodeCheck,
                SheetWorkflowManager: this,
                onSuccess: function () {
                    if (!this.options.SheetWorkflowManager.IsLoaded) {
                        if (this.data.length > 0) {
                            this.options.SheetWorkflowManager.TreeNodeClick.apply(this, [{ data: this.data[0] }]);
                        }
                        this.options.SheetWorkflowManager.IsLoaded = true;
                    }
                },
                onBeforeAppend : function (parentNode, newData) {
                	if (newData && newData[0] && newData[0].Frequent === 1) {
                		newData[0].DisplayName = $.Lang("QueryTableColumn.FrequentFlow");
                	}
                }
            });
            
        },
        //获取加载组织机构的参数
        GetLoadTreeOption: function (parentCode) {
            var code = parentCode || this.RootCode;
            if (!this.IsFrequentFlow)
                var querystr = "Mode=" + this.Mode + "&ShowFavorite=false" + "&IsShared=" + this.IsShared;
            else
                var querystr = "Mode=" + this.Mode + "&ShowFavorite=true" + "&IsShared=" + this.IsShared + "&Isbilingual=" + "true";
            if (code) {
                querystr += "&ParentCode=" + code;
            }
            if (this.WorkflowCodes) {
                querystr += "&WorkflowCodes=" + this.WorkflowCodes;
            }
            if (this.IsAsync) {
                querystr += "&IsAsync=" + this.IsAsync;
            }
            if (this.isBizQuery !== undefined) {
                querystr += "&isBizQuery=" + this.isBizQuery;
            }
            return querystr;
        },
        TreeNodeClick: function (e) {
            //初始化展开树节点的时候
            if (e.target == undefined) { } else {
                //如果没有多选样式，则只能是单选
                if ($(e.target).find(".l-checkbox").attr("Class") == undefined) {
                    //如果当前DOM节点未被选中，则设置为选中样式
                    if ($(e.target).find(".l-selected").attr("Class") && $(e.target).find(".l-selected").attr("Class").indexOf("l-selected") > -1) {
                        $(e.target).find(".l-selected").attr("Class", "l-body l-selected");
                        if (e.data.IsLeaf) {
                            this.options.SheetWorkflowManager.TreeNodeCheckRecursive(e.data, true);
                        }
                    }//如果已经选中，则设置为未选中，并删除该元素
                    else {
                        $(e.target).find(".l-selected").attr("Class", "l-body");
                        if (e.data.IsLeaf) {
                            this.options.SheetWorkflowManager.TreeNodeCheckRecursive(e.data, false);
                        }
                    }
                }
                else {

                    //如果当前DOM节点未被选中，则设置为选中样式
                    if ($(e.target).find(".l-checkbox").attr("Class") && $(e.target).find(".l-checkbox").attr("Class").indexOf("l-checkbox-unchecked") > -1) {
                        $(e.target).find(".l-checkbox").attr("Class", "l-box l-checkbox l-checkbox-checked");
                        if (e.data.IsLeaf) {
                            this.options.SheetWorkflowManager.TreeNodeCheckRecursive(e.data, true);
                        }
                    }//如果已经选中，则设置为未选中，并删除该元素
                    else {
                        $(e.target).find(".l-checkbox").attr("Class", "l-box l-checkbox l-checkbox-unchecked");
                        if (e.data.IsLeaf) {
                            this.options.SheetWorkflowManager.TreeNodeCheckRecursive(e.data, false);
                        }
                    }
                }
            }
        },
        TreeNodeCheck: function (e, checked) {
            this.options.SheetWorkflowManager.TreeNodeCheckRecursive(e.data, checked);
        },
        TreeNodeCheckRecursive: function (node, checked) {
            if (node.IsLeaf) {
                // 设置当前节点为选中或未选中
                if (checked) {
                    if (!this.IsMultiple) {
                        this.ClearChoices();
                        if (this.IsMobile && this.Level > 0) {
                            $.ui.goBack(this.Level);
                            this.Level = 0;
                        }
                        this.FocusOutput();
                    }
                    this.AddChoice(node);
                }
                else {
                    if (this.IsMultiple)
                        this.RemoveChoice(node.Code);
                    else {
                        this.ClearChoices();
                    }
                }

                if (this.OnChange) {
                    this.RunScript(this, this.OnChange, [node]);
                }
            }
            else {
                for (var index in node.children) {
                    this.TreeNodeCheckRecursive(node.children[index], checked);
                }
            }
        },
        // 搜索流程模板
        SearchWorkflow: function (SheetWorkflowManager) {
            if (!this.IsMultiple && !this.IsSearch && !this.IsSearch2 && !this.IsSearch3)
                var searchkey = $(SheetWorkflowManager.SearchTxtElement).val().trim();
            else
                var searchkey = $(SheetWorkflowManager.SearchTxtElement2).val().trim();
            var currentTime = new Date();
            if ((currentTime - this.KeyTime) < 499) return;
            if (!SheetWorkflowManager.SearchKey && !searchkey) {
                return;
            }
            if (!searchkey) {
                if (!this.IsMobile) {
                    SheetWorkflowManager.SearchKey = searchkey;
                    SheetWorkflowManager.OrgListPanel.html("");
                    SheetWorkflowManager.TreeManager.selectNode(SheetWorkflowManager.TreeManager.nodes[0]);
                }
                else {
                    SheetWorkflowManager.OrgListPanel.html("");
                }
                SheetWorkflowManager.OrgTreePanel.show();
                SheetWorkflowManager.OrgListPanel.hide();
                return;
            }
            else {
                SheetWorkflowManager.OrgTreePanel.hide();
                SheetWorkflowManager.OrgListPanel.show();
            }
            SheetWorkflowManager.SearchMode = true;
            SheetWorkflowManager.SearchKey = searchkey;
            SheetWorkflowManager.OrgListPanel.html("");

            for (var k in SheetWorkflowManager.SearchResults) {
                if (SheetWorkflowManager.SearchResults[k].SearchKey == searchkey
                    && SheetWorkflowManager.SearchResults[k].ParentID == SheetWorkflowManager.SelectedValue) {
                    if (SheetWorkflowManager.SearchResults[k].Data && SheetWorkflowManager.SearchResults[k].Data.length) {
                        for (var i = 0; i < SheetWorkflowManager.SearchResults[k].Data.length; ++i) {
                            if (SheetWorkflowManager.SearchResults[k].Data[i].DisplayName != "常用流程")
                                SheetWorkflowManager.AddListItem.apply(SheetWorkflowManager, [SheetWorkflowManager.SearchResults[k].Data[i], searchkey, ""]);
                        }
                    }
                    else {
                        SheetWorkflowManager.OrgListPanel.html('<li class="user-item">没有流程模板</li>');
                    }
                    return;
                }
            }
            var param = SheetWorkflowManager.GetLoadTreeOption();
            $.ajax({
                type: "GET",
                url: SheetWorkflowManager.SheetWorkflowHandler + "?" + param + "&SearchKey=" + encodeURI(searchkey),
                dataType: "json",
                //async: false,//同步执行
                success: function (data) {
                    if (SheetWorkflowManager.IsMobile) {
                        SheetWorkflowManager.AddMobileOptions(data, SheetWorkflowManager.OrgListPanel);

                        setTimeout(function () {
                            SheetWorkflowManager.RefreshMobilePage();
                        }, 550);
                    }
                    else {
                        if (data != null && data.length > 0) {
                            for (var i = 0; i < data.length; ++i) {
                                if (data[i].DisplayName != "常用流程")
                                    SheetWorkflowManager.AddListItem.apply(SheetWorkflowManager, [data[i], searchkey, ""]);
                            }
                        }
                        else {
                            SheetWorkflowManager.OrgListPanel.html("<li class='user-item'>没搜索到流程</li>");
                        }
                    }
                    SheetWorkflowManager.SearchResults.push({ SearchKey: searchkey, ParentID: SheetWorkflowManager.SelectedValue, Data: data });
                }
            });
        },

        // 添加组织机构选择列项
        AddListItem: function (node, searchkey, path) {
            var displayText = node.DisplayName;
            if (searchkey && node.IsLeaf) {
                this.AddSelectListItem(node, searchkey, path)
            } else if (searchkey && !node.IsLeaf && node.children.length > 0) {
                path += node.DisplayName + "/";
                for (var i = 0; i < node.children.length; i++) {
                    this.AddListItem(node.children[i], searchkey, path);
                }
            }
        },

        AddSelectListItem: function (node, searchkey, nodepath) {
            var displayText = node.DisplayName;
            if (searchkey) {
                displayText = displayText.replace(searchkey, "<span class='bg-info'>" + searchkey + "</span>");
            }
            var pathlength = nodepath.split('/').length;
            if (pathlength > 3) {
                nodepath = nodepath.split('/')[0] + "/.../" + nodepath.split('/')[pathlength - 2] + '/';
                displayText = "<span style='color:lightgray;'>" + nodepath + "</span>" + displayText;
            } else {
                displayText = "<span style='color:lightgray;'>" + nodepath + "</span>" + displayText;
            }


            if (this.IsMobile) {
                var item = $("<div></div>");
                item.css("border-bottom", "1px solid #ccc");
                item.height("50px");
                item.css("clear", "both");
                var checkid = $.MvcSheetUI.NewGuid();
                var checkbox = $("<input type='checkbox' ObjectID='" + node.Code + "' id='" + checkid + "'/>");
                item.append(checkbox);
                item.append($("<label type='checkbox' label-for='" + checkid + "'>" + displayText + "</label>").css("float", "none").css("left", "25px"));
                this.OrgListPanel.append(item);

                var thatSheetUser = this;
                item.bind("touchstart", function () {
                    checkbox.click();

                    thatSheetUser.UnitCheckboxClick.apply(checkbox.get(0), [thatSheetUser, { Code: node.Code, DisplayName: node.DisplayName }]);
                });
            }
            else {
                var item = $("<div>").addClass("task").append("<i class='task-sort-icon fa  " + node.Icon + "'></i>").append("&nbsp;<span class='task-title' style='word-break: break-all;width: 85%;display: inline-table;'>" + displayText + "</span>");
                item.css("padding", "5px 10px 5px 10px").css("border", "1px solid #e4e4e4").css("cursor", "pointer");
                var checkid = $.MvcSheetUI.NewGuid();
                var checkbox = $("<input type='checkbox' ObjectID='" + node.Code + "' id='" + checkid + "'/>").css("height", "auto").css("margin", "0px").show();
                var checkItem = $("<div>").addClass("action-checkbox pull-right").append(checkbox);

                //全选按钮(多选才出现全选按钮)
                if ($('#SearchSelectAll').html() == null && this.IsMultiple) {
                    var Allselectitem = $("<div>").addClass("task").append("<span class='task-title'>全选</span>");
                    Allselectitem.css("padding", "5px 10px 5px 10px").css("cursor", "pointer");
                    this.OrgListPanel.append(Allselectitem.append('<div class="pull-right"><input type="checkbox" id="SearchSelectAll" style="height: auto; margin: 0px; display: inline-block;"></div>'));
                    Allselectitem.click(function (e) {
                        var obj = $(this).parent().find('div.action-checkbox').find('input[type="checkbox"]');
                        if ($("#SearchSelectAll").prop("checked") == true) {
                            obj.prop("checked", false);
                        } else {
                            obj.prop("checked", true);
                        }
                        obj.trigger('click');
                    });
                }

                item.click(function (e) {
                    if (e.target.tagName.toLowerCase() != "input") {
                        $(this).find("input").click();
                    }
                });
                this.OrgListPanel.append(item.append(checkItem));
                checkbox.attr("checked", this.Choices[node.Code] != undefined);

                checkbox.click({ that: this, option: { Code: node.Code, DisplayName: node.DisplayName } }, function (e) {
                    if ($(this).prop("checked") == true) {
                        e.data.that.UnitCheckboxClick.apply(this, [e.data.that, e.data.option]);
                    } else {
                        e.data.that.RemoveChoice([e.data.option.Code]);
                    }
                });
            }
        },

        // 单元选人点击
        UnitCheckboxClick: function (that, node) {
            if (this.checked) {
                if (!that.IsMultiple) {
                    that.ClearChoices.apply(that);
                    that.OrgListPanel.find("input").attr("checked", false);
                    this.checked = true;
                    if (that.IsMobile && that.Level > 0) {
                        $.ui.goBack(that.Level);
                        that.Level = 0;
                    }
                    that.FocusOutput.apply(that);
                }
                that.AddChoice.apply(that, [node]);
            }
            else {
                if (that.IsMultiple)
                    that.RemoveChoice.apply(that, [node.ObjectID]);
                else
                    that.ClearChoices.apply(that);
            }

            if (that.OnChange) {
                that.RunScript(this, that.OnChange, [node]);
            }
        }
    });
})(jQuery);