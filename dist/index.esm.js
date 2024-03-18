import React,{useMemo}from'react';import classNames from'classnames';import {companyNoAutoDash,numberFormat,personalNoAutoDash,telAutoDash}from'@pdg/util';import dayjs from'dayjs';import {styled,Icon,Box}from'@mui/material';/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PdgCompanyNoText = function (_a) {
    var value = _a.value, className = _a.className, style = _a.style;
    return value ? (React.createElement("span", { className: classNames('PdgCompanyNoText', className), style: style }, companyNoAutoDash(value))) : null;
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
    var format = useMemo(function () { return (date ? 'YYYY-MM-DD' : hour ? 'YYYY-MM-DD HH시' : minute ? 'YYYY-MM-DD HH시 mm분' : 'YYYY-MM-DD HH:mm:ss'); }, [date, hour, minute]);
    var values = useMemo(function () {
        if (!value) {
            return null;
        }
        else {
            return dayjs(value).format(format).split(' ');
        }
    }, [format, value]);
    return values ? (React.createElement("span", { className: classNames('PdgDateText', className), style: style },
        React.createElement("span", { className: dateClassName, style: dateStyle }, values[0]),
        twoLine && React.createElement("br", null),
        values.length > 1 ? (React.createElement(StyledTimeText, { className: timeClassName, style: timeStyle },
            "\u00A0",
            values[1])) : null)) : null;
};
/********************************************************************************************************************
 * Styled
 * ******************************************************************************************************************/
var StyledTimeText = styled('span')(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  opacity: 0.6;\n"], ["\n  opacity: 0.6;\n"])));
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
    var className = _a.className, initChildren = _a.children, initStyle = _a.style, props = __rest(_a, ["className", "children", "style"]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var children = useMemo(function () { return initChildren === null || initChildren === void 0 ? void 0 : initChildren.replace(/[A-Z]/g, function (letter, idx) { return "".concat(idx > 0 ? '_' : '').concat(letter.toLowerCase()); }); }, [initChildren]);
    var style = useMemo(function () { return (__assign({ verticalAlign: 'middle' }, initStyle)); }, [initStyle]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(Icon, __assign({ ref: ref }, props, { className: classNames('PdgIcon', className), style: style }), children));
});
PdgIcon.displayName = 'Icon';var PdgIconTextDefaultProps = {
    iconMarginRight: 3,
};/********************************************************************************************************************
 * 아이콘과 텍스트를 함께 표시하는 컴포넌트
 * ******************************************************************************************************************/
var PdgIconText = function (_a) {
    var children = _a.children, className = _a.className, icon = _a.icon, iconMarginRight = _a.iconMarginRight, initIconProps = _a.iconProps, initTextProps = _a.textProps, otherProps = __rest(_a, ["children", "className", "icon", "iconMarginRight", "iconProps", "textProps"]);
    var iconProps = useMemo(function () { return (__assign(__assign({}, initIconProps), { style: __assign({ marginRight: iconMarginRight }, initIconProps === null || initIconProps === void 0 ? void 0 : initIconProps.style) })); }, [initIconProps, iconMarginRight]);
    var textProps = useMemo(function () { return (__assign(__assign({}, initTextProps), { style: __assign({ verticalAlign: 'middle' }, initTextProps === null || initTextProps === void 0 ? void 0 : initTextProps.style) })); }, [initTextProps]);
    return (React.createElement(Box, __assign({ component: 'span', className: classNames('PdgIconText', className) }, otherProps),
        icon && React.createElement(PdgIcon, __assign({}, iconProps), icon),
        React.createElement("span", __assign({}, textProps), children)));
};
PdgIconText.defaultProps = PdgIconTextDefaultProps;/********************************************************************************************************************
 * 숫자에 천단위 , 를 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PdgNumberText = function (_a) {
    var className = _a.className, value = _a.value, decimalOpacity = _a.decimalOpacity, suffix = _a.suffix, suffixOpacity = _a.suffixOpacity;
    var formattedValue = useMemo(function () { return (value != null ? numberFormat(value) : null); }, [value]);
    var integerValue = useMemo(function () { return formattedValue === null || formattedValue === void 0 ? void 0 : formattedValue.split('.')[0]; }, [formattedValue]);
    var decimalValue = useMemo(function () { return formattedValue === null || formattedValue === void 0 ? void 0 : formattedValue.split('.')[1]; }, [formattedValue]);
    return integerValue != undefined ? (React.createElement("span", { className: classNames('PdgNumberText', className) },
        integerValue === '' ? '0' : integerValue,
        decimalValue !== undefined && (React.createElement("span", { style: { opacity: decimalOpacity === undefined ? 1 : decimalOpacity } },
            ".",
            decimalValue)),
        suffix !== undefined && (React.createElement(StyledSuffix, { style: { opacity: suffixOpacity === undefined ? 0.6 : suffixOpacity } }, suffix)))) : null;
};
/********************************************************************************************************************
 * Styled
 * ******************************************************************************************************************/
var StyledSuffix = styled('span')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-left: 2px;\n"], ["\n  margin-left: 2px;\n"])));
var templateObject_1;/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PdgPersonalNoText = function (_a) {
    var value = _a.value, className = _a.className, style = _a.style;
    return value ? (React.createElement("span", { className: classNames('PdgPersonalNoText', className), style: style }, personalNoAutoDash(value))) : null;
};/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PdgTelText = function (_a) {
    var value = _a.value, className = _a.className, style = _a.style;
    return value ? (React.createElement("span", { className: classNames('PdgTelText', className), style: style }, telAutoDash(value))) : null;
};/********************************************************************************************************************
 * 숫자에 '원'을 붙여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PdgWonText = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return React.createElement(PdgNumberText, __assign({ className: classNames('PdgWonText', className), suffix: '\uC6D0' }, props));
};export{PdgCompanyNoText,PdgDateText,PdgEmailText,PdgIcon,PdgIconText,PdgIconTextDefaultProps,PdgNumberText,PdgPersonalNoText,PdgTelText,PdgWonText};