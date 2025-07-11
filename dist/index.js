'use strict';var React=require('react'),material=require('@mui/material'),classNames=require('classnames'),compare=require('@pdg/compare'),formatting=require('@pdg/formatting'),dayjs=require('dayjs'),copy=require('copy-to-clipboard');/******************************************************************************
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
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


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
 * getParentSize
 * ******************************************************************************************************************/
var getParentSize = function (el) {
    var parent = el.parentElement;
    if (parent) {
        var parentStyle = getComputedStyle(parent);
        var parentFontSize = parentStyle.fontSize;
        var sizeValue = parseFloat(parentFontSize);
        var sizeUnit = parentFontSize.replace(sizeValue.toString(), '');
        return { sizeValue: sizeValue, sizeUnit: sizeUnit };
    }
};
/********************************************************************************************************************
 * finalStyleFontSize
 * ******************************************************************************************************************/
var finalStyleFontSize = function (sizeValue, sizeUnit, el) {
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
};/********************************************************************************************************************
 * 아이콘 컴포넌트
 * - Material-UI의 Icon 컴포넌트를 사용하여 아이콘을 표시
 * - Material 아이콘 목록 URL : https://mui.com/material-ui/material-icons/
 * ******************************************************************************************************************/
var PIcon = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var className = _a.className, InitChildren = _a.children, initStyle = _a.style, size = _a.size, color = _a.color, tooltip = _a.tooltip, tooltipPlacement = _a.tooltipPlacement, tooltipProps = _a.tooltipProps, props = __rest(_a, ["className", "children", "style", "size", "color", "tooltip", "tooltipPlacement", "tooltipProps"]);
    var innerRef = React.useRef(null);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    var _b = React.useState(), styleFontSize = _b[0], setStyleFontSize = _b[1];
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    React.useEffect(function () {
        if (compare.contains(['large', 'medium', 'small'], size)) {
            setStyleFontSize(undefined);
        }
        else {
            resetStyleFontSize();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [size]);
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var iconFontSize = compare.contains(['large', 'medium', 'small'], size)
        ? size
        : undefined;
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    var resetStyleFontSize = React.useCallback(function () {
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
    }, [iconFontSize, size]);
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var content = (function () {
        if (InitChildren === undefined) {
            return null;
        }
        else {
            var style = __assign({}, initStyle);
            if (styleFontSize != null) {
                style.fontSize = styleFontSize;
            }
            var finalColor = compare.contains(['inherit', 'action', 'disabled', 'primary', 'secondary', 'error', 'info', 'success', 'warning'], color)
                ? color
                : undefined;
            if (finalColor === undefined && color !== undefined) {
                style.color = color;
            }
            return (React.createElement(material.Icon, __assign({ ref: function (r) {
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
                }, fontSize: iconFontSize, color: finalColor, className: classNames('PIcon', className), style: style }, props), typeof InitChildren === 'string' ? (InitChildren.replace(/[A-Z]/g, function (letter, idx) { return "".concat(idx > 0 ? '_' : '').concat(letter.toLowerCase()); })) : (React.createElement(InitChildren, null))));
        }
    })();
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return !content ? null : tooltip ? (React.createElement(material.Tooltip, __assign({ title: tooltip, placement: compare.ifUndefined(tooltipPlacement, 'top'), arrow: true }, tooltipProps), content)) : (content);
});
var PIcon$1 = React.memo(PIcon);var PBox = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var ph = _a.ph, pv = _a.pv, mh = _a.mh, mv = _a.mv, fullSize = _a.fullSize, fullWidth = _a.fullWidth, fullHeight = _a.fullHeight, otherProps = __rest(_a, ["ph", "pv", "mh", "mv", "fullSize", "fullWidth", "fullHeight"]);
    var props = React.useMemo(function () {
        var newProps = __assign({}, otherProps);
        if (ph !== undefined) {
            newProps.paddingLeft = ph;
            newProps.paddingRight = ph;
        }
        if (pv !== undefined) {
            newProps.paddingTop = pv;
            newProps.paddingBottom = pv;
        }
        if (mh !== undefined) {
            newProps.marginLeft = mh;
            newProps.marginRight = mh;
        }
        if (mv !== undefined) {
            newProps.marginTop = mv;
            newProps.marginBottom = mv;
        }
        if (fullWidth || fullSize) {
            newProps.width = '100%';
        }
        if (fullHeight || fullSize) {
            newProps.height = '100%';
        }
        return newProps;
    }, [fullHeight, fullSize, fullWidth, mh, mv, otherProps, ph, pv]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return React.createElement(material.Box, __assign({ ref: ref }, props));
});var PFlexRowBox = React.forwardRef(function (_a, ref) {
    var className = _a.className, span = _a.span, inline = _a.inline, center = _a.center, centerHorizontal = _a.centerHorizontal, gap = _a.gap, spacing = _a.spacing, flexWrap = _a.flexWrap, nowrap = _a.nowrap, alignItems = _a.alignItems, justifyContent = _a.justifyContent, props = __rest(_a, ["className", "span", "inline", "center", "centerHorizontal", "gap", "spacing", "flexWrap", "nowrap", "alignItems", "justifyContent"]);
    return (React.createElement(PBox, __assign({ ref: ref, className: classNames('PFlexRowBox', className), component: span ? 'span' : 'div', display: inline ? 'inline-flex' : 'flex', alignItems: compare.ifUndefined(alignItems, center ? 'center' : undefined), justifyContent: compare.ifUndefined(justifyContent, centerHorizontal ? 'center' : undefined), gap: compare.ifUndefined(gap, spacing), flexWrap: compare.ifUndefined(flexWrap, nowrap ? 'nowrap' : 'wrap') }, props)));
});var PHelper = function (_a) {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var className = _a.className, initStyle = _a.style, sx = _a.sx, text = _a.text, icon = _a.icon, size = _a.size, position = _a.position, opacity = _a.opacity, children = _a.children, props = __rest(_a, ["className", "style", "sx", "text", "icon", "size", "position", "opacity", "children"]);
    var pdgIcon = (function () {
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
        compare.ifUndefined(icon, 'HelpOutline');
        return (React.createElement(PIcon$1, __assign({ className: classNames('PHelper-Icon', className), size: size, style: __assign(__assign({}, style), initStyle), sx: sx, tooltip: text }, props), compare.ifUndefined(icon, 'HelpOutline')));
    })();
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return !children ? (pdgIcon) : pdgIcon ? (React.createElement(PFlexRowBox, { inline: true, center: true, span: true, className: 'PHelper' },
        position === 'left' && pdgIcon,
        children,
        position !== 'left' && pdgIcon)) : (React.createElement(React.Fragment, null, children));
};var PText = function (_a) {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var _b = _a.display, display = _b === void 0 ? 'inline-block' : _b, line = _a.line, center = _a.center, className = _a.className, size = _a.size, color = _a.color, helper = _a.helper, ph = _a.ph, pv = _a.pv, mh = _a.mh, mv = _a.mv, fullWidth = _a.fullWidth, fullHeight = _a.fullHeight, fullSize = _a.fullSize, children = _a.children, initProps = __rest(_a, ["display", "line", "center", "className", "size", "color", "helper", "ph", "pv", "mh", "mv", "fullWidth", "fullHeight", "fullSize", "children"]);
    var theme = material.useTheme();
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var props = React.useMemo(function () {
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
        if (ph !== undefined) {
            newTextProps.paddingLeft = ph;
            newTextProps.paddingRight = ph;
        }
        if (pv !== undefined) {
            newTextProps.paddingTop = pv;
            newTextProps.paddingBottom = pv;
        }
        if (mh !== undefined) {
            newTextProps.marginLeft = mh;
            newTextProps.marginRight = mh;
        }
        if (mv !== undefined) {
            newTextProps.marginTop = mv;
            newTextProps.marginBottom = mv;
        }
        if (center) {
            newTextProps.textAlign = 'center';
        }
        if (fullWidth || fullSize) {
            newTextProps.width = '100%';
        }
        if (fullHeight || fullSize) {
            newTextProps.height = '100%';
        }
        return newTextProps;
    }, [
        center,
        color,
        fullHeight,
        fullSize,
        fullWidth,
        initProps,
        mh,
        mv,
        ph,
        pv,
        size,
        theme.palette.error.main,
        theme.palette.info.main,
        theme.palette.primary.main,
        theme.palette.secondary.main,
        theme.palette.success.main,
        theme.palette.warning.main,
    ]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (function () {
        var content = (React.createElement(material.Typography, __assign({ display: line ? 'block' : display, className: classNames('PText', className) }, props), children));
        if (!helper)
            return content;
        if (typeof helper === 'object' && Object.keys(helper).includes('text')) {
            return (React.createElement(PHelper, __assign({ size: size, color: color }, helper), content));
        }
        else {
            return React.createElement(PHelper, { text: helper }, content);
        }
    })();
};
var PText$1 = React.memo(PText);/********************************************************************************************************************
 * 사업자등록번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PBusinessNoText = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var children = _a.children, value = _a.value, className = _a.className, props = __rest(_a, ["children", "value", "className"]);
    var finalValue = children != null ? children : value != null ? value : '';
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var content = React.useMemo(function () { return formatting.formatBusinessNo(finalValue).substring(0, 12); }, [finalValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return content ? (React.createElement(PText$1, __assign({ ref: ref, className: classNames('PBusinessNoText', className) }, props), content)) : null;
});
var PBusinessNoText$1 = React.memo(PBusinessNoText);/********************************************************************************************************************
 * 날짜를 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PDateText = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var children = _a.children, initValue = _a.value, type = _a.type, className = _a.className, dateClassName = _a.dateClassName, initDateStyle = _a.dateStyle, dateOpacity = _a.dateOpacity, dateSeparator = _a.dateSeparator, timeClassName = _a.timeClassName, initTimeStyle = _a.timeStyle, timeOpacity = _a.timeOpacity, twoLine = _a.twoLine, props = __rest(_a, ["children", "value", "type", "className", "dateClassName", "dateStyle", "dateOpacity", "dateSeparator", "timeClassName", "timeStyle", "timeOpacity", "twoLine"]);
    var value = compare.ifUndefined(children, initValue);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var _b = React.useMemo(function () {
        var dateFormatSeparator = compare.ifUndefined(dateSeparator, '-');
        var dateFormat = "YYYY".concat(dateFormatSeparator, "MM").concat(dateFormatSeparator, "DD");
        var format = type === 'date'
            ? dateFormat
            : type === 'hour'
                ? "".concat(dateFormat, " HH\uC2DC")
                : type === 'minute'
                    ? "".concat(dateFormat, " HH\uC2DC mm\uBD84")
                    : "".concat(dateFormat, " HH:mm:ss");
        var values = undefined;
        if (value) {
            var dValue = dayjs(value).format(format);
            if (dValue.length > dateFormat.length) {
                values = [dValue.substring(0, dateFormat.length), dValue.substring(dateFormat.length + 1)];
            }
            else {
                values = [dValue.substring(0, dateFormat.length)];
            }
        }
        var dateStyle = __assign({}, initDateStyle);
        if (dateOpacity !== undefined) {
            dateStyle.opacity = dateOpacity;
        }
        var timeStyle = __assign(__assign({}, initTimeStyle), { opacity: (initTimeStyle === null || initTimeStyle === void 0 ? void 0 : initTimeStyle.opacity) === undefined && timeOpacity === undefined
                ? 0.6
                : compare.ifUndefined(initTimeStyle === null || initTimeStyle === void 0 ? void 0 : initTimeStyle.opacity, timeOpacity) });
        if (!twoLine) {
            timeStyle.marginLeft = '0.3em';
        }
        return { values: values, dateStyle: dateStyle, timeStyle: timeStyle };
    }, [dateOpacity, dateSeparator, initDateStyle, initTimeStyle, timeOpacity, twoLine, type, value]), values = _b.values, dateStyle = _b.dateStyle, timeStyle = _b.timeStyle;
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return values ? (React.createElement(PText$1, __assign({ ref: ref, className: classNames('PDateText', className) }, props),
        React.createElement("span", { className: classNames('PDateText-Date', dateClassName), style: dateStyle }, values[0]),
        twoLine && values.length > 1 && React.createElement("br", null),
        values.length > 1 ? (React.createElement("span", { className: classNames('PDateText-Time', timeClassName), style: timeStyle }, values[1])) : null)) : null;
});
var PDateText$1 = React.memo(PDateText);/********************************************************************************************************************
 * 이메일을 표시하고 mailto: 링크를 추가하는 컴포넌트
 * ******************************************************************************************************************/
var PEmailText = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var children = _a.children, initValue = _a.value, className = _a.className, color = _a.color, props = __rest(_a, ["children", "value", "className", "color"]);
    var value = compare.ifUndefined(children, initValue);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return value ? (React.createElement("a", { ref: ref, href: "mailto:".concat(value), className: classNames('PEmailText', className) },
        React.createElement(PText$1, __assign({ color: compare.ifUndefined(color, 'primary') }, props), value))) : null;
});
var PEmailText$1 = React.memo(PEmailText);/********************************************************************************************************************
 * 아이콘과 텍스트를 함께 표시하는 컴포넌트
 * ******************************************************************************************************************/
var PIconText = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var children = _a.children, className = _a.className, color = _a.color, icon = _a.icon, size = _a.size, iconMarginRight = _a.iconMarginRight, initIconProps = _a.iconProps, textProps = _a.textProps, helper = _a.helper, ph = _a.ph, pv = _a.pv, otherProps = __rest(_a, ["children", "className", "color", "icon", "size", "iconMarginRight", "iconProps", "textProps", "helper", "ph", "pv"]);
    var props = React.useMemo(function () {
        var newProps = __assign({}, otherProps);
        if (ph !== undefined) {
            newProps.paddingLeft = ph;
            newProps.paddingRight = ph;
        }
        if (pv !== undefined) {
            newProps.paddingTop = pv;
            newProps.paddingBottom = pv;
        }
        return newProps;
    }, [otherProps, ph, pv]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(PFlexRowBox, __assign({ inline: true, center: true, span: true, ref: ref, className: classNames('PIconText', className), fontSize: size === 'inherit' ? 'inherit' : size === 'small' ? '0.75rem' : size === 'large' ? '1.2rem' : size }, props),
        icon && (React.createElement(React.Fragment, null,
            React.createElement(PIcon$1, __assign({}, initIconProps, { color: color, size: size, style: __assign({ marginRight: iconMarginRight }, initIconProps === null || initIconProps === void 0 ? void 0 : initIconProps.style), className: classNames('PIconText-Icon', initIconProps === null || initIconProps === void 0 ? void 0 : initIconProps.className) }), icon),
            iconMarginRight === undefined && React.createElement("span", { style: { fontSize: '0.4rem' } }, "\u00A0"))),
        React.createElement(PText$1, __assign({}, textProps, { className: classNames('PIconText-Text', textProps === null || textProps === void 0 ? void 0 : textProps.className), size: compare.ifUndefined(textProps === null || textProps === void 0 ? void 0 : textProps.size, size), color: compare.ifUndefined(textProps === null || textProps === void 0 ? void 0 : textProps.color, color), helper: helper }), children)));
});
var PIconText$1 = React.memo(PIconText);/********************************************************************************************************************
 * 숫자에 천단위 , 를 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PNumberText = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var className = _a.className, children = _a.children, initValue = _a.value, decimalOpacity = _a.decimalOpacity, prefix = _a.prefix, prefixOpacity = _a.prefixOpacity, suffix = _a.suffix, suffixOpacity = _a.suffixOpacity, props = __rest(_a, ["className", "children", "value", "decimalOpacity", "prefix", "prefixOpacity", "suffix", "suffixOpacity"]);
    var value = compare.ifUndefined(children, initValue);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var _b = React.useMemo(function () {
        var formattedValue = value != null ? formatting.formatNumber(value).split('.') : null;
        var integerValue = formattedValue ? formattedValue[0] : undefined;
        var decimalValue = formattedValue && formattedValue.length > 1 ? formattedValue[1] : undefined;
        return { integerValue: integerValue, decimalValue: decimalValue };
    }, [value]), integerValue = _b.integerValue, decimalValue = _b.decimalValue;
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return integerValue != undefined ? (React.createElement(PText$1, __assign({ ref: ref, className: classNames('PNumberText', className) }, props),
        prefix !== undefined && (React.createElement(StyledPrefix, { className: 'PNumberText-Prefix', style: { opacity: prefixOpacity === undefined ? 0.6 : prefixOpacity } }, prefix)),
        React.createElement("span", { className: 'PNumberText-Integer' }, integerValue === '' ? '0' : integerValue),
        decimalValue !== undefined && (React.createElement("span", { className: 'PNumberText-Decimal', style: { opacity: decimalOpacity === undefined ? 1 : decimalOpacity } },
            ".",
            decimalValue)),
        suffix !== undefined && (React.createElement(StyledSuffix, { className: 'PNumberText-Suffix', style: { opacity: suffixOpacity === undefined ? 0.6 : suffixOpacity } }, suffix)))) : null;
});
var PNumberText$1 = React.memo(PNumberText);
/********************************************************************************************************************
 * Styled
 * ******************************************************************************************************************/
var StyledPrefix = material.styled('span')(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  margin-right: 2px;\n"], ["\n  margin-right: 2px;\n"])));
var StyledSuffix = material.styled('span')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-left: 2px;\n"], ["\n  margin-left: 2px;\n"])));
var templateObject_1$1, templateObject_2;/********************************************************************************************************************
 * 주민등록번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PPersonalNoText = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var children = _a.children, value = _a.value, className = _a.className, props = __rest(_a, ["children", "value", "className"]);
    var finalValue = children != null ? children : value != null ? value : '';
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var content = React.useMemo(function () { return formatting.formatPersonalNo(finalValue).substring(0, 14); }, [finalValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return content ? (React.createElement(PText$1, __assign({ ref: ref, className: classNames('PPersonalNoText', className) }, props), content)) : null;
});
var PPersonalNoText$1 = React.memo(PPersonalNoText);/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PTelText = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var children = _a.children, value = _a.value, className = _a.className, props = __rest(_a, ["children", "value", "className"]);
    var finalValue = children != null ? children : value;
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var content = React.useMemo(function () { return formatting.formatTelNo(finalValue); }, [finalValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return content ? (React.createElement(PText$1, __assign({ ref: ref, className: classNames('PTelText', className) }, props), content)) : null;
});
var PTelText$1 = React.memo(PTelText);/********************************************************************************************************************
 * 숫자에 '원'을 붙여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
var PWonText = React.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return React.createElement(PNumberText$1, __assign({ ref: ref, className: classNames('PWonText', className), suffix: '\uC6D0' }, props));
});
var PWonText$1 = React.memo(PWonText);var PButton = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var variant = _a.variant, size = _a.size, children = _a.children, className = _a.className, ph = _a.ph, pv = _a.pv, mh = _a.mh, mv = _a.mv, initStyle = _a.style, initSx = _a.sx, initColor = _a.color, disabled = _a.disabled, startIcon = _a.startIcon, startIconMarginLeft = _a.startIconMarginLeft, startIconMarginRight = _a.startIconMarginRight, startIconProps = _a.startIconProps, endIcon = _a.endIcon, endIconMarginLeft = _a.endIconMarginLeft, endIconMarginRight = _a.endIconMarginRight, endIconProps = _a.endIconProps, tooltip = _a.tooltip, tooltipPlacement = _a.tooltipPlacement, tooltipProps = _a.tooltipProps, props = __rest(_a, ["variant", "size", "children", "className", "ph", "pv", "mh", "mv", "style", "sx", "color", "disabled", "startIcon", "startIconMarginLeft", "startIconMarginRight", "startIconProps", "endIcon", "endIconMarginLeft", "endIconMarginRight", "endIconProps", "tooltip", "tooltipPlacement", "tooltipProps"]);
    var style = React.useMemo(function () {
        var newStyle = __assign({}, initStyle);
        if (ph !== undefined) {
            newStyle.paddingLeft = ph;
            newStyle.paddingRight = ph;
        }
        if (pv !== undefined) {
            newStyle.paddingTop = pv;
            newStyle.paddingBottom = pv;
        }
        if (mh !== undefined) {
            newStyle.marginLeft = mh;
            newStyle.marginRight = mh;
        }
        if (mv !== undefined) {
            newStyle.marginTop = mv;
            newStyle.marginBottom = mv;
        }
        return newStyle;
    }, [initStyle, mh, mv, ph, pv]);
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var color = compare.contains(['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning'], initColor)
        ? initColor
        : undefined;
    var content = (React.createElement(material.Button, __assign({ ref: ref, variant: variant, size: size, color: color, disabled: disabled, className: classNames(className, 'PButton'), style: style, sx: variant === 'contained'
            ? __assign(__assign({}, initSx), { color: '#fff', backgroundColor: color ? undefined : initColor, '&:hover': {
                    color: '#fff',
                    backgroundColor: color ? undefined : initColor ? material.darken(initColor, 0.2) : undefined,
                } }) : __assign(__assign({}, initSx), { color: color ? undefined : initColor, borderColor: color ? undefined : initColor, '&:hover': {
                borderColor: color ? undefined : initColor ? material.darken(initColor, 0.2) : undefined,
            } }) }, props),
        React.createElement(PFlexRowBox, { center: true, inline: true, nowrap: true },
            startIcon && (React.createElement(PIcon$1, __assign({ className: 'PButton-StartIcon', size: size, style: __assign({ marginLeft: compare.ifUndefined(startIconMarginLeft, variant !== 'text' && children ? '-0.15em' : undefined), marginRight: compare.ifUndefined(startIconMarginRight, children ? '0.2em' : undefined) }, startIconProps === null || startIconProps === void 0 ? void 0 : startIconProps.style) }, startIconProps), startIcon)),
            React.createElement("div", { style: {
                    fontSize: size === 'small' ? '0.7rem' : size === 'medium' ? undefined : size === 'large' ? '1.0rem' : undefined,
                } }, children),
            endIcon && (React.createElement(PIcon$1, __assign({ className: 'PButton-EndIcon', size: size, style: __assign({ marginLeft: compare.ifUndefined(endIconMarginLeft, children ? '0.2em' : undefined), marginRight: compare.ifUndefined(endIconMarginRight, variant !== 'text' && children ? '-0.15em' : undefined) }, endIconProps === null || endIconProps === void 0 ? void 0 : endIconProps.style) }, endIconProps), endIcon)))));
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return tooltip ? (React.createElement(material.Tooltip, __assign({ title: tooltip, placement: compare.ifUndefined(tooltipPlacement, 'top'), arrow: true }, tooltipProps), content)) : (content);
});
var PButton$1 = React.memo(PButton);var PIconButton = React.forwardRef(function (_a, ref) {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var children = _a.children, className = _a.className, initSx = _a.sx, size = _a.size, initColor = _a.color, iconSize = _a.iconSize, iconProps = _a.iconProps, tooltip = _a.tooltip, tooltipPlacement = _a.tooltipPlacement, tooltipProps = _a.tooltipProps, fullWidth = _a.fullWidth, props = __rest(_a, ["children", "className", "sx", "size", "color", "iconSize", "iconProps", "tooltip", "tooltipPlacement", "tooltipProps", "fullWidth"]);
    var color = compare.contains(['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning'], initColor)
        ? initColor
        : undefined;
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    var content = (React.createElement(material.IconButton, __assign({ ref: ref, color: color, className: classNames('PIconButton', className), size: size, sx: __assign({ color: color ? undefined : initColor, width: fullWidth ? '100%' : undefined }, initSx) }, props),
        React.createElement(PIcon$1, __assign({}, iconProps, { size: compare.ifUndefined(iconSize, size), className: classNames('PIconButton-Icon', iconProps === null || iconProps === void 0 ? void 0 : iconProps.className) }), children)));
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return tooltip ? (React.createElement(material.Tooltip, __assign({ title: tooltip, placement: compare.ifUndefined(tooltipPlacement, 'top'), arrow: true }, tooltipProps), content)) : (content);
});
var PIconButton$1 = React.memo(PIconButton);var makeObjectValue = function (value) {
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
};var PReactCode = function (_a) {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var className = _a.className, name = _a.name, content = _a.content, props = _a.props, boxProps = __rest(_a, ["className", "name", "content", "props"]);
    var finalProps = React.useMemo(function () {
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
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(StyledBox, __assign({ className: classNames('PReactCode', className) }, boxProps), "<".concat(name),
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
var StyledBox = material.styled(material.Box)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 20px;\n  font-size: 13px;\n  border: 1px solid black;\n  background-color: black;\n  color: #fff;\n  padding: 10px 13px;\n  opacity: 0.7;\n"], ["\n  margin-top: 20px;\n  font-size: 13px;\n  border: 1px solid black;\n  background-color: black;\n  color: #fff;\n  padding: 10px 13px;\n  opacity: 0.7;\n"])));
var templateObject_1;var PFlex = React.forwardRef(function (_a, ref) {
    var className = _a.className, _b = _a.row, row = _b === void 0 ? false : _b, spacing = _a.spacing, alignCenter = _a.alignCenter, justifyCenter = _a.justifyCenter, alignItems = _a.alignItems, justifyContent = _a.justifyContent, gap = _a.gap, props = __rest(_a, ["className", "row", "spacing", "alignCenter", "justifyCenter", "alignItems", "justifyContent", "gap"]);
    return (React.createElement(PBox, __assign({ ref: ref, className: classNames('PFlex', className), component: 'div', display: 'flex', flexDirection: row ? 'row' : 'column', alignItems: compare.ifUndefined(alignItems, alignCenter ? 'center' : undefined), justifyContent: compare.ifUndefined(justifyContent, justifyCenter ? 'center' : undefined), gap: compare.ifUndefined(gap, spacing) }, props)));
});var PFlexColumnBox = React.forwardRef(function (_a, ref) {
    var className = _a.className, spacing = _a.spacing, center = _a.center, centerVertical = _a.centerVertical, alignItems = _a.alignItems, justifyContent = _a.justifyContent, gap = _a.gap, props = __rest(_a, ["className", "spacing", "center", "centerVertical", "alignItems", "justifyContent", "gap"]);
    return (React.createElement(PBox, __assign({ ref: ref, className: classNames('PFlexColumnBox', className), component: 'div', display: 'flex', flexDirection: 'column', alignItems: compare.ifUndefined(alignItems, center ? 'center' : undefined), justifyContent: compare.ifUndefined(justifyContent, centerVertical ? 'center' : undefined), gap: compare.ifUndefined(gap, spacing) }, props)));
});var PStack = React.forwardRef(function (_a, ref) {
    var className = _a.className, row = _a.row, span = _a.span, inline = _a.inline, center = _a.center, centerJustifyContent = _a.centerJustifyContent, gap = _a.gap, spacing = _a.spacing, flexWrap = _a.flexWrap, wrap = _a.wrap, alignItems = _a.alignItems, justifyContent = _a.justifyContent, props = __rest(_a, ["className", "row", "span", "inline", "center", "centerJustifyContent", "gap", "spacing", "flexWrap", "wrap", "alignItems", "justifyContent"]);
    return (React.createElement(PBox, __assign({ ref: ref, className: classNames('PStack', className), component: span ? 'span' : 'div', display: inline ? 'inline-flex' : 'flex', flexDirection: row ? 'row' : 'column', alignItems: compare.ifUndefined(alignItems, center ? 'center' : undefined), justifyContent: compare.ifUndefined(justifyContent, centerJustifyContent ? 'center' : undefined), gap: compare.ifUndefined(gap, spacing), flexWrap: compare.ifUndefined(flexWrap, wrap ? 'wrap' : 'nowrap') }, props)));
});var PCopyToClipboard = function (_a) {
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var text = _a.text, options = _a.options, children = _a.children, onCopy = _a.onCopy, props = __rest(_a, ["text", "options", "children", "onCopy"]);
    var handleClick = React.useCallback(function (event) {
        var elem = React.Children.only(children);
        var result = copy(text, options);
        if (onCopy) {
            onCopy(text, result);
        }
        // Bypass onClick
        if (elem && elem.props && typeof elem.props.onClick === 'function') {
            elem.props.onClick(event);
        }
    }, [children, onCopy, options, text]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    var elem = React.Children.only(children);
    return React.cloneElement(elem, __assign(__assign({}, props), { onClick: handleClick }));
};exports.PBox=PBox;exports.PBusinessNoText=PBusinessNoText$1;exports.PButton=PButton$1;exports.PCopyToClipboard=PCopyToClipboard;exports.PDateText=PDateText$1;exports.PEmailText=PEmailText$1;exports.PFlex=PFlex;exports.PFlexColumnBox=PFlexColumnBox;exports.PFlexRowBox=PFlexRowBox;exports.PHelper=PHelper;exports.PIcon=PIcon$1;exports.PIconButton=PIconButton$1;exports.PIconText=PIconText$1;exports.PNumberText=PNumberText$1;exports.PPersonalNoText=PPersonalNoText$1;exports.PReactCode=PReactCode;exports.PStack=PStack;exports.PTelText=PTelText$1;exports.PText=PText$1;exports.PWonText=PWonText$1;