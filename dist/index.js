'use strict';var React=require('react'),classNames=require('classnames'),util=require('@pdg/util'),dayjs=require('dayjs'),material=require('@mui/material');/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PdgCompanyNoText = function (_a) {
    var value = _a.value, className = _a.className, style = _a.style;
    return value ? (React.createElement("span", { className: classNames('PdgCompanyNoText', className), style: style }, util.companyNoAutoDash(value))) : null;
};/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};/********************************************************************************************************************
 * 날짜를 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PdgDateText = function (_a) {
    var className = _a.className, style = _a.style, dateClassName = _a.dateClassName, dateStyle = _a.dateStyle, timeClassName = _a.timeClassName, timeStyle = _a.timeStyle, value = _a.value, twoLine = _a.twoLine, date = _a.date, hour = _a.hour, minute = _a.minute;
    var format = React.useMemo(function () { return (date ? 'YYYY-MM-DD' : hour ? 'YYYY-MM-DD HH시' : minute ? 'YYYY-MM-DD HH시 mm분' : 'YYYY-MM-DD HH:mm:ss'); }, [date, hour, minute]);
    var values = React.useMemo(function () {
        if (!value) {
            return null;
        }
        else {
            return dayjs(value).format(format).split(' ');
        }
    }, [format, value]);
    return values ? (React.createElement("span", { className: classNames('PdgDateText', className), style: style },
        React.createElement("span", { className: classNames('PdgDateText-Date', dateClassName), style: dateStyle }, values[0]),
        twoLine && values.length > 1 && React.createElement("br", null),
        values.length > 1 ? (React.createElement(StyledTimeText, { className: classNames('PdgDateText-Time', timeClassName), style: timeStyle },
            "\u00A0",
            values[1])) : null)) : null;
};
/********************************************************************************************************************
 * Styled
 * ******************************************************************************************************************/
var StyledTimeText = material.styled('span')(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  opacity: 0.6;\n"], ["\n  opacity: 0.6;\n"])));
var templateObject_1$1;/********************************************************************************************************************
 * 이메일을 표시하고 mailto: 링크를 추가하는 컴포넌트
 * ******************************************************************************************************************/
var PdgEmailText = function (_a) {
    var value = _a.value, className = _a.className, style = _a.style;
    return value != null ? (React.createElement("a", { href: "mailto:".concat(value), className: classNames('PdgEmailText', className), style: style }, value)) : null;
};/********************************************************************************************************************
 * 아이콘 컴포넌트
 * - Material-UI의 Icon 컴포넌트를 사용하여 아이콘을 표시
 * - Material 아이콘 목록 URL : https://mui.com/material-ui/material-icons/
 * ******************************************************************************************************************/
var PdgIcon = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var className = _a.className, InitChildren = _a.children, initStyle = _a.style, props = __rest(_a, ["className", "children", "style"]);
    var style = React.useMemo(function () { return (__assign({ verticalAlign: 'middle' }, initStyle)); }, [initStyle]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return React.useMemo(function () {
        if (InitChildren === undefined)
            return null;
        var iconProps = __assign(__assign({}, props), { className: classNames('PdgIcon', className), style: style });
        return typeof InitChildren === 'string' ? (React.createElement(material.Icon, __assign({ ref: ref }, iconProps), InitChildren.replace(/[A-Z]/g, function (letter, idx) { return "".concat(idx > 0 ? '_' : '').concat(letter.toLowerCase()); }))) : (React.createElement(InitChildren, __assign({}, iconProps)));
    }, [InitChildren, className, props, ref, style]);
});
PdgIcon.displayName = 'Icon';var PdgIconTextDefaultProps = {
    iconMarginRight: 3,
};/********************************************************************************************************************
 * 아이콘과 텍스트를 함께 표시하는 컴포넌트
 * ******************************************************************************************************************/
var PdgIconText = function (_a) {
    var children = _a.children, className = _a.className, icon = _a.icon, iconMarginRight = _a.iconMarginRight, initIconProps = _a.iconProps, initTextProps = _a.textProps, otherProps = __rest(_a, ["children", "className", "icon", "iconMarginRight", "iconProps", "textProps"]);
    var iconProps = React.useMemo(function () { return (__assign(__assign({}, initIconProps), { style: __assign({ marginRight: iconMarginRight }, initIconProps === null || initIconProps === void 0 ? void 0 : initIconProps.style) })); }, [initIconProps, iconMarginRight]);
    var textProps = React.useMemo(function () { return (__assign(__assign({}, initTextProps), { style: __assign({ verticalAlign: 'middle' }, initTextProps === null || initTextProps === void 0 ? void 0 : initTextProps.style) })); }, [initTextProps]);
    return (React.createElement(material.Box, __assign({ component: 'span', className: classNames('PdgIconText', className) }, otherProps),
        icon && (React.createElement(PdgIcon, __assign({}, iconProps, { className: classNames('PdgIconText-Icon', iconProps === null || iconProps === void 0 ? void 0 : iconProps.className) }), icon)),
        React.createElement("span", __assign({}, textProps, { className: classNames('PdgIconText-Text', textProps === null || textProps === void 0 ? void 0 : textProps.className) }), children)));
};
PdgIconText.defaultProps = PdgIconTextDefaultProps;/********************************************************************************************************************
 * 숫자에 천단위 , 를 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PdgNumberText = function (_a) {
    var className = _a.className, value = _a.value, decimalOpacity = _a.decimalOpacity, prefix = _a.prefix, prefixOpacity = _a.prefixOpacity, suffix = _a.suffix, suffixOpacity = _a.suffixOpacity;
    var formattedValue = React.useMemo(function () { return (value != null ? util.numberFormat(value) : null); }, [value]);
    var integerValue = React.useMemo(function () { return formattedValue === null || formattedValue === void 0 ? void 0 : formattedValue.split('.')[0]; }, [formattedValue]);
    var decimalValue = React.useMemo(function () { return formattedValue === null || formattedValue === void 0 ? void 0 : formattedValue.split('.')[1]; }, [formattedValue]);
    return integerValue != undefined ? (React.createElement("span", { className: classNames('PdgNumberText', className) },
        prefix !== undefined && (React.createElement(StyledPrefix, { className: 'PdgNumberText-Prefix', style: { opacity: prefixOpacity === undefined ? 0.6 : prefixOpacity } }, prefix)),
        React.createElement("span", { className: 'PdgNumberText-Integer' }, integerValue === '' ? '0' : integerValue),
        decimalValue !== undefined && (React.createElement("span", { className: 'PdgNumberText-Decimal', style: { opacity: decimalOpacity === undefined ? 1 : decimalOpacity } },
            ".",
            decimalValue)),
        suffix !== undefined && (React.createElement(StyledSuffix, { className: 'PdgNumberText-Suffix', style: { opacity: suffixOpacity === undefined ? 0.6 : suffixOpacity } }, suffix)))) : null;
};
/********************************************************************************************************************
 * Styled
 * ******************************************************************************************************************/
var StyledPrefix = material.styled('span')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-right: 2px;\n"], ["\n  margin-right: 2px;\n"])));
var StyledSuffix = material.styled('span')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-left: 2px;\n"], ["\n  margin-left: 2px;\n"])));
var templateObject_1, templateObject_2;/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PdgPersonalNoText = function (_a) {
    var value = _a.value, className = _a.className, style = _a.style;
    return value ? (React.createElement("span", { className: classNames('PdgPersonalNoText', className), style: style }, util.personalNoAutoDash(value))) : null;
};/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PdgTelText = function (_a) {
    var value = _a.value, className = _a.className, style = _a.style;
    return value ? (React.createElement("span", { className: classNames('PdgTelText', className), style: style }, util.telNoAutoDash(value))) : null;
};/********************************************************************************************************************
 * 숫자에 '원'을 붙여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PdgWonText = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return React.createElement(PdgNumberText, __assign({ className: classNames('PdgWonText', className), suffix: '\uC6D0' }, props));
};var PdgButton = React.forwardRef(function (_a, ref) {
    var size = _a.size, children = _a.children, className = _a.className, icon = _a.icon, startIcon = _a.startIcon, endIcon = _a.endIcon, props = __rest(_a, ["size", "children", "className", "icon", "startIcon", "endIcon"]);
    return (React.createElement(material.Button, __assign({ ref: ref, size: size, className: classNames(className, 'PdgButton') }, props),
        React.createElement(material.Box, { display: 'inline-flex', flexDirection: 'row', alignItems: 'center' },
            (icon || startIcon) && (React.createElement(PdgIcon, { className: 'PdgButton-StartIcon', fontSize: size, color: 'inherit', sx: { mr: children ? 0.5 : undefined } }, icon || startIcon)),
            children,
            endIcon && (React.createElement(PdgIcon, { className: 'PdgButton-EndIcon', fontSize: size, color: 'inherit', sx: { ml: children ? 0.5 : undefined } }, endIcon)))));
});
PdgButton.displayName = 'PdgButton';var PdgIconButton = function (_a) {
    var children = _a.children, className = _a.className, iconProps = _a.iconProps, props = __rest(_a, ["children", "className", "iconProps"]);
    return (React.createElement(material.IconButton, __assign({ className: classNames('PdgIconButton', className) }, props),
        React.createElement(PdgIcon, __assign({}, iconProps, { className: classNames('PdgIconButton-Icon', iconProps === null || iconProps === void 0 ? void 0 : iconProps.className) }), children)));
};exports.PdgButton=PdgButton;exports.PdgCompanyNoText=PdgCompanyNoText;exports.PdgDateText=PdgDateText;exports.PdgEmailText=PdgEmailText;exports.PdgIcon=PdgIcon;exports.PdgIconButton=PdgIconButton;exports.PdgIconText=PdgIconText;exports.PdgIconTextDefaultProps=PdgIconTextDefaultProps;exports.PdgNumberText=PdgNumberText;exports.PdgPersonalNoText=PdgPersonalNoText;exports.PdgTelText=PdgTelText;exports.PdgWonText=PdgWonText;