import React,{useRef,useState,useEffect,useMemo,useCallback}from'react';import {Icon,Tooltip,Box,useTheme,styled,darken,Button,IconButton}from'@mui/material';import classNames from'classnames';import {contains,ifUndefined,companyNoAutoDash,numberFormat,personalNoAutoDash,telNoAutoDash}from'@pdg/util';import dayjs from'dayjs';/******************************************************************************
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
 * 아이콘 컴포넌트
 * - Material-UI의 Icon 컴포넌트를 사용하여 아이콘을 표시
 * - Material 아이콘 목록 URL : https://mui.com/material-ui/material-icons/
 * ******************************************************************************************************************/
var PdgIcon = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var className = _a.className, InitChildren = _a.children, initStyle = _a.style, size = _a.size, color = _a.color, tooltip = _a.tooltip, tooltipPlacement = _a.tooltipPlacement, tooltipProps = _a.tooltipProps, props = __rest(_a, ["className", "children", "style", "size", "color", "tooltip", "tooltipPlacement", "tooltipProps"]);
    var innerRef = useRef(null);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _b = useState(), styleFontSize = _b[0], setStyleFontSize = _b[1];
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(function () {
        if (contains(['large', 'medium', 'small'], size)) {
            setStyleFontSize(undefined);
        }
        else {
            resetStyleFontSize();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [size]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var iconFontSize = useMemo(function () { return (contains(['large', 'medium', 'small'], size) ? size : undefined); }, [size]);
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var getParentSize = useCallback(function (el) {
        var parent = el.parentElement;
        if (parent) {
            var parentStyle = getComputedStyle(parent);
            var parentFontSize = parentStyle.fontSize;
            var sizeValue = parseFloat(parentFontSize);
            var sizeUnit = parentFontSize.replace(sizeValue.toString(), '');
            return { sizeValue: sizeValue, sizeUnit: sizeUnit };
        }
    }, []);
    var finalStyleFontSize = useCallback(function (sizeValue, sizeUnit, el) {
        switch (sizeUnit) {
            case 'rem':
                {
                    var root = getComputedStyle(document.documentElement).fontSize;
                    var rootValue = parseFloat(root);
                    sizeValue = sizeValue * rootValue;
                    sizeUnit = 'px';
                }
                break;
            case 'em':
                {
                    var parentSize = getParentSize(el);
                    if (parentSize) {
                        sizeValue = sizeValue * parentSize.sizeValue;
                        sizeUnit = 'px';
                    }
                }
                break;
            case 'vw':
                {
                    var vw = window.innerWidth;
                    sizeValue = (sizeValue / 100) * vw;
                    sizeUnit = 'px';
                }
                break;
            case 'vh':
                {
                    var vh = window.innerHeight;
                    sizeValue = (sizeValue / 100) * vh;
                    sizeUnit = 'px';
                }
                break;
            case 'vmin':
                {
                    var vw = window.innerWidth;
                    var vh = window.innerHeight;
                    var vmin = Math.min(vw, vh);
                    sizeValue = (sizeValue / 100) * vmin;
                    sizeUnit = 'px';
                }
                break;
            case 'vmax':
                {
                    var vw = window.innerWidth;
                    var vh = window.innerHeight;
                    var vmax = Math.max(vw, vh);
                    sizeValue = (sizeValue / 100) * vmax;
                    sizeUnit = 'px';
                }
                break;
        }
        switch (sizeUnit) {
            case 'px':
                return Math.round(sizeValue);
            default:
                return "".concat(sizeValue).concat(sizeUnit);
        }
    }, [getParentSize]);
    var resetStyleFontSize = useCallback(function () {
        var el = innerRef.current;
        if (el && iconFontSize === undefined) {
            var sizeValue = undefined;
            var sizeUnit = undefined;
            if (size === 'inherit') {
                var parentSize = getParentSize(el);
                if (parentSize) {
                    sizeValue = parentSize.sizeValue;
                    sizeUnit = parentSize.sizeUnit;
                }
            }
            else if (typeof size === 'number') {
                sizeValue = size;
                sizeUnit = 'px';
            }
            else if (typeof size === 'string') {
                sizeValue = parseFloat(size);
                sizeUnit = size.replace(sizeValue.toString(), '');
            }
            if (sizeValue && sizeUnit) {
                setStyleFontSize(finalStyleFontSize(sizeValue, sizeUnit, el));
            }
        }
        else {
            setStyleFontSize(undefined);
        }
    }, [finalStyleFontSize, getParentSize, iconFontSize, size]);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var finalColor = useMemo(function () {
        switch (color) {
            case 'inherit':
            case 'action':
            case 'disabled':
            case 'primary':
            case 'secondary':
            case 'error':
            case 'info':
            case 'success':
            case 'warning':
                return color;
        }
    }, [color]);
    var content = useMemo(function () {
        var style = __assign({}, initStyle);
        if (styleFontSize) {
            style.fontSize = styleFontSize;
        }
        if (finalColor === undefined && color !== undefined) {
            style.color = color;
        }
        return InitChildren === undefined ? null : (React.createElement(Icon, __assign({ ref: function (r) {
                if (ref) {
                    if (typeof ref === 'function') {
                        ref(r);
                    }
                    else {
                        ref.current = r;
                    }
                }
                innerRef.current = r;
                resetStyleFontSize();
            }, fontSize: iconFontSize, color: finalColor, className: classNames('PdgIcon', className), style: style }, props), typeof InitChildren === 'string' ? (InitChildren.replace(/[A-Z]/g, function (letter, idx) { return "".concat(idx > 0 ? '_' : '').concat(letter.toLowerCase()); })) : (React.createElement(InitChildren, null))));
    }, [
        InitChildren,
        className,
        color,
        finalColor,
        iconFontSize,
        initStyle,
        props,
        ref,
        resetStyleFontSize,
        styleFontSize,
    ]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return !content ? null : tooltip ? (React.createElement(Tooltip, __assign({ title: tooltip, placement: ifUndefined(tooltipPlacement, 'top'), arrow: true }, tooltipProps), content)) : (content);
});
PdgIcon.displayName = 'Icon';var PdgFlexRowBox = function (_a) {
    var className = _a.className, span = _a.span, inline = _a.inline, center = _a.center, gap = _a.gap, spacing = _a.spacing, flexWrap = _a.flexWrap, nowrap = _a.nowrap, alignItems = _a.alignItems, props = __rest(_a, ["className", "span", "inline", "center", "gap", "spacing", "flexWrap", "nowrap", "alignItems"]);
    return (React.createElement(Box, __assign({ className: classNames('PdgFlexRowBox', className), component: span ? 'span' : 'div', display: inline ? 'inline-flex' : 'flex', alignItems: ifUndefined(alignItems, center ? 'center' : undefined), gap: ifUndefined(gap, spacing), flexWrap: ifUndefined(flexWrap, nowrap ? 'nowrap' : 'wrap') }, props)));
};var PdgHelper = function (_a) {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var className = _a.className, initStyle = _a.style, sx = _a.sx, text = _a.text, icon = _a.icon, size = _a.size, position = _a.position, opacity = _a.opacity, children = _a.children, props = __rest(_a, ["className", "style", "sx", "text", "icon", "size", "position", "opacity", "children"]);
    var pdgIcon = useMemo(function () {
        if (!React.isValidElement(text) && !['string', 'number'].includes(typeof text))
            return null;
        if (typeof text === 'string' && text === '')
            return null;
        var style = { opacity: opacity };
        if (children) {
            if (position === 'left') {
                style.marginRight = '0.1em';
            }
            else {
                style.marginLeft = '0.1em';
            }
        }
        return (React.createElement(PdgIcon, __assign({ className: classNames('PdgHelper-Icon', className), size: size, style: __assign(__assign({}, style), initStyle), sx: sx, tooltip: text }, props), ifUndefined(icon, 'HelpOutline')));
    }, [children, className, icon, initStyle, opacity, position, props, size, sx, text]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return !children ? (pdgIcon) : pdgIcon ? (React.createElement(PdgFlexRowBox, { inline: true, center: true, span: true, className: 'PdgHelper' },
        position === 'left' && pdgIcon,
        children,
        position !== 'left' && pdgIcon)) : (React.createElement(React.Fragment, null, children));
};var PdgText = function (_a) {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var className = _a.className, size = _a.size, color = _a.color, helper = _a.helper, children = _a.children, initProps = __rest(_a, ["className", "size", "color", "helper", "children"]);
    var theme = useTheme();
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var props = useMemo(function () {
        var newTextProps = __assign(__assign({}, initProps), { style: __assign({}, initProps === null || initProps === void 0 ? void 0 : initProps.style) });
        if (size) {
            switch (size) {
                case 'inherit':
                    newTextProps.style.fontSize = 'inherit';
                    break;
                case 'small':
                    newTextProps.style.fontSize = '0.75rem';
                    break;
                case 'medium':
                    break;
                case 'large':
                    newTextProps.style.fontSize = '1.2rem';
                    break;
                default:
                    newTextProps.style.fontSize = size;
                    break;
            }
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
        size,
        color,
        theme.palette.primary.main,
        theme.palette.secondary.main,
        theme.palette.error.main,
        theme.palette.warning.main,
        theme.palette.info.main,
        theme.palette.success.main,
    ]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return useMemo(function () {
        var content = (React.createElement("span", __assign({ className: classNames('PdgText', className) }, props), children));
        if (!helper)
            return content;
        if (typeof helper === 'object' && Object.keys(helper).includes('text')) {
            return (React.createElement(PdgHelper, __assign({ size: size, color: color }, helper), content));
        }
        else {
            return React.createElement(PdgHelper, { text: helper }, content);
        }
    }, [children, className, color, helper, props, size]);
};/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PdgCompanyNoText = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var children = _a.children, value = _a.value, className = _a.className, props = __rest(_a, ["children", "value", "className"]);
    var content = useMemo(function () { return companyNoAutoDash(children != null ? children : value != null ? value : '').substring(0, 12); }, [children, value]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return content ? (React.createElement(PdgText, __assign({ ref: ref, className: classNames('PdgCompanyNoText', className) }, props), content)) : null;
});/********************************************************************************************************************
 * 날짜를 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PdgDateText = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var children = _a.children, initValue = _a.value, type = _a.type, className = _a.className, dateClassName = _a.dateClassName, initDateStyle = _a.dateStyle, dateOpacity = _a.dateOpacity, dateSeparator = _a.dateSeparator, timeClassName = _a.timeClassName, initTimeStyle = _a.timeStyle, timeOpacity = _a.timeOpacity, twoLine = _a.twoLine, props = __rest(_a, ["children", "value", "type", "className", "dateClassName", "dateStyle", "dateOpacity", "dateSeparator", "timeClassName", "timeStyle", "timeOpacity", "twoLine"]);
    var value = useMemo(function () { return (children != null ? children : initValue); }, [children, initValue]);
    var dateFormat = useMemo(function () {
        var separator = dateSeparator ? dateSeparator : '-';
        return "YYYY".concat(separator, "MM").concat(separator, "DD");
    }, [dateSeparator]);
    var format = useMemo(function () {
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
    var values = useMemo(function () {
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
    var dateStyle = useMemo(function () {
        var newDateStyle = __assign({}, initDateStyle);
        if (dateOpacity !== undefined) {
            newDateStyle.opacity = dateOpacity;
        }
        return newDateStyle;
    }, [initDateStyle, dateOpacity]);
    var timeStyle = useMemo(function () {
        var newTimeStyle = __assign({}, initTimeStyle);
        newTimeStyle.opacity =
            (initTimeStyle === null || initTimeStyle === void 0 ? void 0 : initTimeStyle.opacity) === undefined && timeOpacity === undefined
                ? 0.6
                : ifUndefined(initTimeStyle === null || initTimeStyle === void 0 ? void 0 : initTimeStyle.opacity, timeOpacity);
        if (!twoLine) {
            newTimeStyle.marginLeft = '0.3em';
        }
        return newTimeStyle;
    }, [initTimeStyle, timeOpacity, twoLine]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return values ? (React.createElement(PdgText, __assign({ ref: ref, className: classNames('PdgDateText', className) }, props),
        React.createElement("span", { className: classNames('PdgDateText-Date', dateClassName), style: dateStyle }, values[0]),
        twoLine && values.length > 1 && React.createElement("br", null),
        values.length > 1 ? (React.createElement("span", { className: classNames('PdgDateText-Time', timeClassName), style: timeStyle }, values[1])) : null)) : null;
});/********************************************************************************************************************
 * 이메일을 표시하고 mailto: 링크를 추가하는 컴포넌트
 * ******************************************************************************************************************/
var PdgEmailText = React.forwardRef(function (_a, ref) {
    var children = _a.children, initValue = _a.value, className = _a.className, color = _a.color, props = __rest(_a, ["children", "value", "className", "color"]);
    var value = useMemo(function () { return (children != null ? children : initValue); }, [children, initValue]);
    return value != null ? (React.createElement("a", { ref: ref, href: "mailto:".concat(value), className: classNames('PdgEmailText', className) },
        React.createElement(PdgText, __assign({ color: ifUndefined(color, 'primary') }, props), value))) : null;
});/********************************************************************************************************************
 * 아이콘과 텍스트를 함께 표시하는 컴포넌트
 * ******************************************************************************************************************/
var PdgIconText = React.forwardRef(function (_a, ref) {
    var children = _a.children, className = _a.className, color = _a.color, icon = _a.icon, size = _a.size, iconMarginRight = _a.iconMarginRight, initIconProps = _a.iconProps, textProps = _a.textProps, helper = _a.helper, otherProps = __rest(_a, ["children", "className", "color", "icon", "size", "iconMarginRight", "iconProps", "textProps", "helper"]);
    var fontSize = useMemo(function () {
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
    var iconProps = useMemo(function () {
        return __assign(__assign({}, initIconProps), { color: color, size: size, style: __assign({ marginRight: iconMarginRight }, initIconProps === null || initIconProps === void 0 ? void 0 : initIconProps.style) });
    }, [initIconProps, color, iconMarginRight, size]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PdgFlexRowBox, __assign({ inline: true, center: true, span: true, ref: ref, className: classNames('PdgIconText', className), fontSize: fontSize }, otherProps),
        icon && (React.createElement(React.Fragment, null,
            React.createElement(PdgIcon, __assign({}, iconProps, { className: classNames('PdgIconText-Icon', iconProps === null || iconProps === void 0 ? void 0 : iconProps.className) }), icon),
            iconMarginRight === undefined && React.createElement("span", { style: { fontSize: '0.4rem' } }, "\u00A0"))),
        React.createElement(PdgText, __assign({}, textProps, { className: classNames('PdgIconText-Text', textProps === null || textProps === void 0 ? void 0 : textProps.className), size: ifUndefined(textProps === null || textProps === void 0 ? void 0 : textProps.size, size), color: ifUndefined(textProps === null || textProps === void 0 ? void 0 : textProps.color, color), helper: helper }), children)));
});/********************************************************************************************************************
 * 숫자에 천단위 , 를 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PdgNumberText = React.forwardRef(function (_a, ref) {
    var className = _a.className, children = _a.children, initValue = _a.value, decimalOpacity = _a.decimalOpacity, prefix = _a.prefix, prefixOpacity = _a.prefixOpacity, suffix = _a.suffix, suffixOpacity = _a.suffixOpacity, props = __rest(_a, ["className", "children", "value", "decimalOpacity", "prefix", "prefixOpacity", "suffix", "suffixOpacity"]);
    var value = useMemo(function () { return (children != null ? children : initValue); }, [children, initValue]);
    var formattedValue = useMemo(function () { return (value != null ? numberFormat(value) : null); }, [value]);
    var integerValue = useMemo(function () { return formattedValue === null || formattedValue === void 0 ? void 0 : formattedValue.split('.')[0]; }, [formattedValue]);
    var decimalValue = useMemo(function () { return formattedValue === null || formattedValue === void 0 ? void 0 : formattedValue.split('.')[1]; }, [formattedValue]);
    return integerValue != undefined ? (React.createElement(PdgText, __assign({ ref: ref, className: classNames('PdgNumberText', className) }, props),
        prefix !== undefined && (React.createElement(StyledPrefix, { className: 'PdgNumberText-Prefix', style: { opacity: prefixOpacity === undefined ? 0.6 : prefixOpacity } }, prefix)),
        React.createElement("span", { className: 'PdgNumberText-Integer' }, integerValue === '' ? '0' : integerValue),
        decimalValue !== undefined && (React.createElement("span", { className: 'PdgNumberText-Decimal', style: { opacity: decimalOpacity === undefined ? 1 : decimalOpacity } },
            ".",
            decimalValue)),
        suffix !== undefined && (React.createElement(StyledSuffix, { className: 'PdgNumberText-Suffix', style: { opacity: suffixOpacity === undefined ? 0.6 : suffixOpacity } }, suffix)))) : null;
});
/********************************************************************************************************************
 * Styled
 * ******************************************************************************************************************/
var StyledPrefix = styled('span')(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  margin-right: 2px;\n"], ["\n  margin-right: 2px;\n"])));
var StyledSuffix = styled('span')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-left: 2px;\n"], ["\n  margin-left: 2px;\n"])));
var templateObject_1$1, templateObject_2;/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PdgPersonalNoText = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var children = _a.children, value = _a.value, className = _a.className, props = __rest(_a, ["children", "value", "className"]);
    var content = useMemo(function () { return personalNoAutoDash(children != null ? children : value != null ? value : '').substring(0, 14); }, [children, value]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return content ? (React.createElement(PdgText, __assign({ ref: ref, className: classNames('PdgPersonalNoText', className) }, props), content)) : null;
});/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PdgTelText = React.forwardRef(function (_a, ref) {
    var children = _a.children, value = _a.value, className = _a.className, props = __rest(_a, ["children", "value", "className"]);
    var content = useMemo(function () { return telNoAutoDash(children != null ? children : value); }, [children, value]);
    return content ? (React.createElement(PdgText, __assign({ ref: ref, className: classNames('PdgTelText', className) }, props), content)) : null;
});/********************************************************************************************************************
 * 숫자에 '원'을 붙여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PdgWonText = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return React.createElement(PdgNumberText, __assign({ ref: ref, className: classNames('PdgWonText', className), suffix: '\uC6D0' }, props));
});var PdgButton = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var variant = _a.variant, size = _a.size, children = _a.children, className = _a.className, initSx = _a.sx, initColor = _a.color, disabled = _a.disabled, icon = _a.icon, iconProps = _a.iconProps, startIcon = _a.startIcon, startIconProps = _a.startIconProps, endIcon = _a.endIcon, endIconProps = _a.endIconProps, tooltip = _a.tooltip, tooltipPlacement = _a.tooltipPlacement, tooltipProps = _a.tooltipProps, props = __rest(_a, ["variant", "size", "children", "className", "sx", "color", "disabled", "icon", "iconProps", "startIcon", "startIconProps", "endIcon", "endIconProps", "tooltip", "tooltipPlacement", "tooltipProps"]);
    var fontSize = useMemo(function () { return (size === 'small' ? '0.7rem' : size === 'medium' ? undefined : size === 'large' ? '1.0rem' : undefined); }, [size]);
    var color = useMemo(function () {
        switch (initColor) {
            case 'inherit':
            case 'primary':
            case 'secondary':
            case 'error':
            case 'info':
            case 'success':
            case 'warning':
                return initColor;
        }
    }, [initColor]);
    var sx = useMemo(function () {
        return variant === 'contained'
            ? __assign(__assign({}, initSx), { color: '#fff', backgroundColor: color ? undefined : initColor, '&:hover': {
                    color: '#fff',
                    backgroundColor: color ? undefined : initColor ? darken(initColor, 0.2) : undefined,
                } }) : __assign(__assign({}, initSx), { color: color ? undefined : initColor, borderColor: color ? undefined : initColor, '&:hover': {
                borderColor: color ? undefined : initColor ? darken(initColor, 0.2) : undefined,
            } });
    }, [color, initColor, initSx, variant]);
    var content = useMemo(function () { return (React.createElement(Button, __assign({ ref: ref, variant: variant, size: size, color: color, disabled: disabled, className: classNames(className, 'PdgButton'), sx: sx }, props),
        React.createElement(PdgFlexRowBox, { center: true, inline: true, nowrap: true },
            (icon || startIcon) && (React.createElement(PdgIcon, __assign({ className: 'PdgButton-StartIcon', size: size, sx: { ml: variant !== 'text' && children ? -0.3 : undefined, mr: children ? 0.5 : undefined } }, (iconProps || startIconProps)), icon || startIcon)),
            React.createElement(PdgText, { style: { fontSize: fontSize } }, children),
            endIcon && (React.createElement(PdgIcon, __assign({ className: 'PdgButton-EndIcon', size: size, sx: { ml: children ? 0.5 : undefined, mr: variant !== 'text' && children ? -0.3 : undefined } }, endIconProps), endIcon))))); }, [
        children,
        className,
        color,
        disabled,
        endIcon,
        endIconProps,
        fontSize,
        icon,
        iconProps,
        props,
        ref,
        size,
        startIcon,
        startIconProps,
        sx,
        variant,
    ]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return tooltip ? (React.createElement(Tooltip, __assign({ title: tooltip, placement: ifUndefined(tooltipPlacement, 'top'), arrow: true }, tooltipProps), content)) : (content);
});
PdgButton.displayName = 'PdgButton';var PdgIconButton = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var children = _a.children, className = _a.className, initSx = _a.sx, size = _a.size, initColor = _a.color, iconSize = _a.iconSize, iconProps = _a.iconProps, tooltip = _a.tooltip, tooltipPlacement = _a.tooltipPlacement, tooltipProps = _a.tooltipProps, props = __rest(_a, ["children", "className", "sx", "size", "color", "iconSize", "iconProps", "tooltip", "tooltipPlacement", "tooltipProps"]);
    var color = useMemo(function () {
        switch (initColor) {
            case 'inherit':
            case 'primary':
            case 'secondary':
            case 'error':
            case 'info':
            case 'success':
            case 'warning':
                return initColor;
        }
    }, [initColor]);
    var sx = useMemo(function () {
        return __assign(__assign({}, initSx), { color: color ? undefined : initColor });
    }, [color, initColor, initSx]);
    var content = useMemo(function () { return (React.createElement(IconButton, __assign({ ref: ref, color: color, className: classNames('PdgIconButton', className), size: size, sx: sx }, props),
        React.createElement(PdgIcon, __assign({}, iconProps, { size: ifUndefined(iconSize, size), className: classNames('PdgIconButton-Icon', iconProps === null || iconProps === void 0 ? void 0 : iconProps.className) }), children))); }, [children, className, color, iconProps, iconSize, props, ref, size, sx]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return tooltip ? (React.createElement(Tooltip, __assign({ title: tooltip, placement: ifUndefined(tooltipPlacement, 'top'), arrow: true }, tooltipProps), content)) : (content);
});var makeObjectValue = function (value) {
    return Object.keys(value)
        .map(function (key) {
        var v = value[key];
        if (v != null) {
            if (v instanceof Text) {
                return "".concat(key, ": {").concat(v.data, "}");
            }
            else if (typeof v === 'string') {
                return "".concat(key, ": \"").concat(v, "\"");
            }
            else if (typeof v === 'object') {
                return "".concat(key, ": {").concat(makeObjectValue(v), "}");
            }
            else {
                return "".concat(key, ": {").concat(v, "}");
            }
        }
    })
        .filter(function (v) { return v != null; })
        .join(', ');
};
var PdgReactCode = function (_a) {
    var className = _a.className, name = _a.name, content = _a.content, props = _a.props, boxProps = __rest(_a, ["className", "name", "content", "props"]);
    var finalProps = useMemo(function () {
        if (props) {
            var result_1 = [];
            Object.keys(props).forEach(function (key) {
                var value = props[key];
                if (value != null) {
                    if (value instanceof Text) {
                        result_1.push({ key: key, value: "{".concat(value.data, "}") });
                    }
                    else if (typeof value === 'string') {
                        result_1.push({ key: key, value: "\"".concat(value, "\"") });
                    }
                    else if (typeof value === 'object') {
                        result_1.push({ key: key, value: "{".concat(makeObjectValue(value), "}") });
                    }
                    else {
                        result_1.push({ key: key, value: "{".concat(value, "}") });
                    }
                }
            });
            return result_1;
        }
    }, [props]);
    return (React.createElement(StyledBox, __assign({ className: classNames('PdgReactCode', className) }, boxProps), "<".concat(name),
        finalProps &&
            finalProps.map(function (info, idx) { return (React.createElement("span", { key: idx },
                "\u00A0",
                React.createElement("span", { style: { fontWeight: 'bold' } }, info.key),
                "=",
                React.createElement("span", { style: { color: 'yellow' } }, info.value))); }),
        content ? (React.createElement(React.Fragment, null,
            ">",
            React.createElement("span", { style: { color: 'yellow' } }, "".concat(content)), "</".concat(name, ">"))) : (" />")));
};
/********************************************************************************************************************
 * Styled Component
 * ******************************************************************************************************************/
var StyledBox = styled(Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 20px;\n  font-size: 13px;\n  border: 1px solid black;\n  background-color: black;\n  color: #fff;\n  padding: 10px 13px;\n  opacity: 0.7;\n"], ["\n  margin-top: 20px;\n  font-size: 13px;\n  border: 1px solid black;\n  background-color: black;\n  color: #fff;\n  padding: 10px 13px;\n  opacity: 0.7;\n"])));
var templateObject_1;var PdgFlexColumnBox = function (_a) {
    var className = _a.className, spacing = _a.spacing, center = _a.center, alignItems = _a.alignItems, gap = _a.gap, props = __rest(_a, ["className", "spacing", "center", "alignItems", "gap"]);
    return (React.createElement(Box, __assign({ className: classNames('PdgFlexColumnBox', className), component: 'div', display: 'flex', flexDirection: 'column', alignItems: ifUndefined(alignItems, center ? 'center' : undefined), gap: ifUndefined(gap, spacing) }, props)));
};export{PdgButton,PdgCompanyNoText,PdgDateText,PdgEmailText,PdgFlexColumnBox,PdgFlexRowBox,PdgHelper,PdgIcon,PdgIconButton,PdgIconText,PdgNumberText,PdgPersonalNoText,PdgReactCode,PdgTelText,PdgText,PdgWonText};