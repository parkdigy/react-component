'use strict';var React=require('react'),material=require('@mui/material'),classNames=require('classnames'),util=require('@pdg/util'),dayjs=require('dayjs');/******************************************************************************
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
};var PdgText = function (_a) {
    var className = _a.className, size = _a.size, color = _a.color, initProps = __rest(_a, ["className", "size", "color"]);
    var theme = material.useTheme();
    var fontSize = React.useMemo(function () {
        switch (size) {
            case 'inherit':
                return 'inherit';
            case 'small':
                return '0.75rem';
            case 'medium':
                break;
            case 'large':
                return '1.2rem';
            default:
                return size;
        }
    }, [size]);
    var props = React.useMemo(function () {
        var newTextProps = __assign(__assign({}, initProps), { style: __assign({}, initProps === null || initProps === void 0 ? void 0 : initProps.style) });
        if (!(initProps === null || initProps === void 0 ? void 0 : initProps.fontSize) && fontSize) {
            newTextProps.style.fontSize = fontSize;
        }
        switch (color) {
            case 'primary':
                newTextProps.style.color = theme.palette.primary.main;
                break;
            case 'secondary':
                newTextProps.style.color = theme.palette.secondary.main;
                break;
            case 'error':
                newTextProps.style.color = theme.palette.error.main;
                break;
            case 'warning':
                newTextProps.style.color = theme.palette.warning.main;
                break;
            case 'info':
                newTextProps.style.color = theme.palette.info.main;
                break;
            case 'success':
                newTextProps.style.color = theme.palette.success.main;
                break;
            default:
                newTextProps.style.color = color;
        }
        return newTextProps;
    }, [
        initProps,
        fontSize,
        color,
        theme.palette.primary.main,
        theme.palette.secondary.main,
        theme.palette.error.main,
        theme.palette.warning.main,
        theme.palette.info.main,
        theme.palette.success.main,
    ]);
    return React.createElement(material.Typography, __assign({ className: classNames('PdgText', className), display: 'inline-block' }, props));
};/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PdgCompanyNoText = function (_a) {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var children = _a.children, value = _a.value, className = _a.className, style = _a.style;
    var content = React.useMemo(function () { return util.companyNoAutoDash(children != null ? children : value != null ? value : '').substring(0, 12); }, [children, value]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return content ? (React.createElement("span", { className: classNames('PdgCompanyNoText', className), style: style }, content)) : null;
};/********************************************************************************************************************
 * 날짜를 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PdgDateText = function (_a) {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var children = _a.children, initValue = _a.value, type = _a.type, className = _a.className, style = _a.style, dateClassName = _a.dateClassName, initDateStyle = _a.dateStyle, dateOpacity = _a.dateOpacity, dateSeparator = _a.dateSeparator, timeClassName = _a.timeClassName, initTimeStyle = _a.timeStyle, timeOpacity = _a.timeOpacity, twoLine = _a.twoLine;
    var value = React.useMemo(function () { return (children != null ? children : initValue); }, [children, initValue]);
    var dateFormat = React.useMemo(function () {
        var separator = dateSeparator ? dateSeparator : '-';
        return "YYYY".concat(separator, "MM").concat(separator, "DD");
    }, [dateSeparator]);
    var format = React.useMemo(function () {
        switch (type) {
            case 'date':
                return dateFormat;
            case 'hour':
                return "".concat(dateFormat, " HH\uC2DC");
            case 'minute':
                return "".concat(dateFormat, " HH\uC2DC mm\uBD84");
            default:
                return "".concat(dateFormat, " HH:mm:ss");
        }
    }, [type, dateFormat]);
    var values = React.useMemo(function () {
        if (!value) {
            return null;
        }
        else {
            var dValue = dayjs(value).format(format);
            if (dValue.length > dateFormat.length) {
                return [dValue.substring(0, dateFormat.length), dValue.substring(dateFormat.length + 1)];
            }
            else {
                return [dValue.substring(0, dateFormat.length)];
            }
        }
    }, [dateFormat.length, format, value]);
    var dateStyle = React.useMemo(function () {
        var newDateStyle = __assign({}, initDateStyle);
        if (dateOpacity !== undefined) {
            newDateStyle.opacity = dateOpacity;
        }
        return newDateStyle;
    }, [initDateStyle, dateOpacity]);
    var timeStyle = React.useMemo(function () {
        var newTimeStyle = __assign({}, initTimeStyle);
        newTimeStyle.opacity =
            (initTimeStyle === null || initTimeStyle === void 0 ? void 0 : initTimeStyle.opacity) === undefined && timeOpacity === undefined
                ? 0.6
                : util.ifUndefined(initTimeStyle === null || initTimeStyle === void 0 ? void 0 : initTimeStyle.opacity, timeOpacity);
        if (!twoLine) {
            newTimeStyle.marginLeft = '0.3em';
        }
        return newTimeStyle;
    }, [initTimeStyle, timeOpacity, twoLine]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return values ? (React.createElement("span", { className: classNames('PdgDateText', className), style: style },
        React.createElement("span", { className: classNames('PdgDateText-Date', dateClassName), style: dateStyle }, values[0]),
        twoLine && values.length > 1 && React.createElement("br", null),
        values.length > 1 ? (React.createElement("span", { className: classNames('PdgDateText-Time', timeClassName), style: timeStyle }, values[1])) : null)) : null;
};/********************************************************************************************************************
 * 이메일을 표시하고 mailto: 링크를 추가하는 컴포넌트
 * ******************************************************************************************************************/
var PdgEmailText = function (_a) {
    var children = _a.children, initValue = _a.value, className = _a.className, style = _a.style;
    var value = React.useMemo(function () { return (children != null ? children : initValue); }, [children, initValue]);
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
    var className = _a.className, InitChildren = _a.children, initStyle = _a.style, size = _a.size, props = __rest(_a, ["className", "children", "style", "size"]);
    var fontSize = React.useMemo(function () { return (size === undefined || typeof size === 'string' ? size : undefined); }, [size]);
    var style = React.useMemo(function () {
        var finalStyle = __assign({ verticalAlign: 'middle' }, initStyle);
        if (typeof size === 'number') {
            finalStyle.fontSize = size;
        }
        return finalStyle;
    }, [initStyle, size]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return React.useMemo(function () {
        if (InitChildren === undefined)
            return null;
        var iconProps = __assign(__assign({}, props), { className: classNames('PdgIcon', className), style: style });
        return typeof InitChildren === 'string' ? (React.createElement(material.Icon, __assign({ ref: ref, fontSize: fontSize }, iconProps), InitChildren.replace(/[A-Z]/g, function (letter, idx) { return "".concat(idx > 0 ? '_' : '').concat(letter.toLowerCase()); }))) : (React.createElement(InitChildren, __assign({}, iconProps)));
    }, [InitChildren, className, fontSize, props, ref, style]);
});
PdgIcon.displayName = 'Icon';/********************************************************************************************************************
 * 아이콘과 텍스트를 함께 표시하는 컴포넌트
 * ******************************************************************************************************************/
var PdgIconText = function (_a) {
    var children = _a.children, className = _a.className, color = _a.color, icon = _a.icon, size = _a.size, iconMarginRight = _a.iconMarginRight, initIconProps = _a.iconProps, textProps = _a.textProps, otherProps = __rest(_a, ["children", "className", "color", "icon", "size", "iconMarginRight", "iconProps", "textProps"]);
    var fontSize = React.useMemo(function () {
        switch (size) {
            case 'inherit':
                return 'inherit';
            case 'small':
                return '0.75rem';
            case 'medium':
                break;
            case 'large':
                return '1.2rem';
            default:
                return size;
        }
    }, [size]);
    var iconProps = React.useMemo(function () {
        var newIconProps = __assign(__assign({}, initIconProps), { style: __assign({ marginRight: iconMarginRight }, initIconProps === null || initIconProps === void 0 ? void 0 : initIconProps.style) });
        switch (size) {
            case 'inherit':
                newIconProps.style.fontSize = 'inherit';
                break;
            case 'small':
                newIconProps.style.fontSize = '0.9rem';
                break;
            case undefined:
            case 'medium':
                newIconProps.style.fontSize = '1.1rem';
                break;
            case 'large':
                newIconProps.style.fontSize = '1.4rem';
                break;
            default:
                newIconProps.style.fontSize = size;
                break;
        }
        switch (color) {
            case 'primary':
            case 'secondary':
            case 'error':
            case 'warning':
            case 'info':
            case 'success':
                newIconProps.color = color;
                break;
            default:
                newIconProps.style.color = color;
        }
        return newIconProps;
    }, [color, initIconProps, iconMarginRight, size]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(material.Box, __assign({ display: 'inline-flex', alignItems: 'center', className: classNames('PdgIconText', className), fontSize: fontSize }, otherProps),
        icon && (React.createElement(React.Fragment, null,
            React.createElement(PdgIcon, __assign({}, iconProps, { className: classNames('PdgIconText-Icon', iconProps === null || iconProps === void 0 ? void 0 : iconProps.className) }), icon),
            iconMarginRight === undefined && React.createElement("span", { style: { fontSize: '0.4rem' } }, "\u00A0"))),
        React.createElement(PdgText, __assign({}, textProps, { className: classNames('PdgIconText-Text', textProps === null || textProps === void 0 ? void 0 : textProps.className), size: util.ifUndefined(textProps === null || textProps === void 0 ? void 0 : textProps.size, size), color: util.ifUndefined(textProps === null || textProps === void 0 ? void 0 : textProps.color, color) }), children)));
};/********************************************************************************************************************
 * 숫자에 천단위 , 를 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PdgNumberText = function (_a) {
    var className = _a.className, children = _a.children, initValue = _a.value, decimalOpacity = _a.decimalOpacity, prefix = _a.prefix, prefixOpacity = _a.prefixOpacity, suffix = _a.suffix, suffixOpacity = _a.suffixOpacity;
    var value = React.useMemo(function () { return (children != null ? children : initValue); }, [children, initValue]);
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
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var children = _a.children, value = _a.value, className = _a.className, style = _a.style;
    var content = React.useMemo(function () { return util.personalNoAutoDash(children != null ? children : value != null ? value : '').substring(0, 14); }, [children, value]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return content ? (React.createElement("span", { className: classNames('PdgPersonalNoText', className), style: style }, content)) : null;
};/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PdgTelText = function (_a) {
    var children = _a.children, value = _a.value, className = _a.className, style = _a.style;
    var content = React.useMemo(function () { return util.telNoAutoDash(children != null ? children : value); }, [children, value]);
    return content ? (React.createElement("span", { className: classNames('PdgTelText', className), style: style }, content)) : null;
};/********************************************************************************************************************
 * 숫자에 '원'을 붙여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PdgWonText = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return React.createElement(PdgNumberText, __assign({ className: classNames('PdgWonText', className), suffix: '\uC6D0' }, props));
};var PdgButton = React.forwardRef(function (_a, ref) {
    var size = _a.size, children = _a.children, className = _a.className, icon = _a.icon, startIcon = _a.startIcon, endIcon = _a.endIcon, props = __rest(_a, ["size", "children", "className", "icon", "startIcon", "endIcon"]);
    var fontSize = React.useMemo(function () { return (size === 'small' ? '0.75rem' : size === 'medium' ? undefined : size === 'large' ? '1.0rem' : undefined); }, [size]);
    return (React.createElement(material.Button, __assign({ ref: ref, size: size, className: classNames(className, 'PdgButton') }, props),
        React.createElement(material.Box, { display: 'inline-flex', flexDirection: 'row', alignItems: 'center' },
            (icon || startIcon) && (React.createElement(PdgIcon, { className: 'PdgButton-StartIcon', size: size, color: 'inherit', sx: { mr: children ? 0.5 : undefined } }, icon || startIcon)),
            React.createElement(material.Typography, { style: { fontSize: fontSize } }, children),
            endIcon && (React.createElement(PdgIcon, { className: 'PdgButton-EndIcon', size: size, color: 'inherit', sx: { ml: children ? 0.5 : undefined } }, endIcon)))));
});
PdgButton.displayName = 'PdgButton';var PdgIconButton = function (_a) {
    var children = _a.children, className = _a.className, size = _a.size, iconSize = _a.iconSize, iconProps = _a.iconProps, props = __rest(_a, ["children", "className", "size", "iconSize", "iconProps"]);
    return (React.createElement(material.IconButton, __assign({ className: classNames('PdgIconButton', className), size: size }, props),
        React.createElement(PdgIcon, __assign({}, iconProps, { size: util.ifUndefined(iconSize, size), className: classNames('PdgIconButton-Icon', iconProps === null || iconProps === void 0 ? void 0 : iconProps.className) }), children)));
};exports.PdgButton=PdgButton;exports.PdgCompanyNoText=PdgCompanyNoText;exports.PdgDateText=PdgDateText;exports.PdgEmailText=PdgEmailText;exports.PdgIcon=PdgIcon;exports.PdgIconButton=PdgIconButton;exports.PdgIconText=PdgIconText;exports.PdgNumberText=PdgNumberText;exports.PdgPersonalNoText=PdgPersonalNoText;exports.PdgTelText=PdgTelText;exports.PdgText=PdgText;exports.PdgWonText=PdgWonText;