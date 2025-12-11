import React,{useRef,useState,useEffect,useCallback,useMemo}from'react';import {Icon,Tooltip,Box,useTheme,Typography,styled,Button,darken,IconButton}from'@mui/material';import classNames from'classnames';import {contains,ifUndefined}from'@pdg/compare';import {formatBusinessNo,formatNumber,formatPersonalNo,formatTelNo}from'@pdg/formatting';import dayjs from'dayjs';import copy from'copy-to-clipboard';/******************************************************************************
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

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};/********************************************************************************************************************
 * getParentSize
 * ******************************************************************************************************************/
const getParentSize = (el) => {
    const parent = el.parentElement;
    if (parent) {
        const parentStyle = getComputedStyle(parent);
        const parentFontSize = parentStyle.fontSize;
        const sizeValue = parseFloat(parentFontSize);
        const sizeUnit = parentFontSize.replace(sizeValue.toString(), '');
        return { sizeValue, sizeUnit };
    }
};
/********************************************************************************************************************
 * finalStyleFontSize
 * ******************************************************************************************************************/
const finalStyleFontSize = (sizeValue, sizeUnit, el) => {
    switch (sizeUnit) {
        case 'rem':
            {
                const root = getComputedStyle(document.documentElement).fontSize;
                const rootValue = parseFloat(root);
                sizeValue = sizeValue * rootValue;
                sizeUnit = 'px';
            }
            break;
        case 'em':
            {
                const parentSize = getParentSize(el);
                if (parentSize) {
                    sizeValue = sizeValue * parentSize.sizeValue;
                    sizeUnit = 'px';
                }
            }
            break;
        case 'vw':
            {
                const vw = window.innerWidth;
                sizeValue = (sizeValue / 100) * vw;
                sizeUnit = 'px';
            }
            break;
        case 'vh':
            {
                const vh = window.innerHeight;
                sizeValue = (sizeValue / 100) * vh;
                sizeUnit = 'px';
            }
            break;
        case 'vmin':
            {
                const vw = window.innerWidth;
                const vh = window.innerHeight;
                const vmin = Math.min(vw, vh);
                sizeValue = (sizeValue / 100) * vmin;
                sizeUnit = 'px';
            }
            break;
        case 'vmax':
            {
                const vw = window.innerWidth;
                const vh = window.innerHeight;
                const vmax = Math.max(vw, vh);
                sizeValue = (sizeValue / 100) * vmax;
                sizeUnit = 'px';
            }
            break;
    }
    switch (sizeUnit) {
        case 'px':
            return Math.round(sizeValue);
        default:
            return `${sizeValue}${sizeUnit}`;
    }
};/********************************************************************************************************************
 * 아이콘 컴포넌트
 * - Material-UI의 Icon 컴포넌트를 사용하여 아이콘을 표시
 * - Material 아이콘 목록 URL : https://mui.com/material-ui/material-icons/
 * ******************************************************************************************************************/
const PIcon$1 = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * Ref
     * ******************************************************************************************************************/
    var { className, children: InitChildren, style: initStyle, size, color, tooltip, tooltipPlacement, tooltipProps } = _a, props = __rest(_a, ["className", "children", "style", "size", "color", "tooltip", "tooltipPlacement", "tooltipProps"]);
    const innerRef = useRef(null);
    /********************************************************************************************************************
     * State
     * ******************************************************************************************************************/
    const [styleFontSize, setStyleFontSize] = useState();
    /********************************************************************************************************************
     * Effect
     * ******************************************************************************************************************/
    useEffect(() => {
        if (contains(['large', 'medium', 'small'], size)) {
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
    const iconFontSize = contains(['large', 'medium', 'small'], size)
        ? size
        : undefined;
    /********************************************************************************************************************
     * Function
     * ******************************************************************************************************************/
    const resetStyleFontSize = useCallback(() => {
        const el = innerRef.current;
        if (el && iconFontSize === undefined) {
            let sizeValue = undefined;
            let sizeUnit = undefined;
            if (size === 'inherit') {
                const parentSize = getParentSize(el);
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
    const content = (() => {
        if (InitChildren === undefined) {
            return null;
        }
        else {
            const style = Object.assign({}, initStyle);
            if (styleFontSize != null) {
                style.fontSize = styleFontSize;
            }
            const finalColor = contains(['inherit', 'action', 'disabled', 'primary', 'secondary', 'error', 'info', 'success', 'warning'], color)
                ? color
                : undefined;
            if (finalColor === undefined && color !== undefined) {
                style.color = color;
            }
            return (React.createElement(Icon, Object.assign({ ref: (r) => {
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
                }, fontSize: iconFontSize, color: finalColor, className: classNames('PIcon', className), style: style }, props), typeof InitChildren === 'string' ? (InitChildren.replace(/[A-Z]/g, (letter, idx) => `${idx > 0 ? '_' : ''}${letter.toLowerCase()}`)) : (React.createElement(InitChildren, null))));
        }
    })();
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return !content ? null : tooltip ? (React.createElement(Tooltip, Object.assign({ title: tooltip, placement: ifUndefined(tooltipPlacement, 'top'), arrow: true }, tooltipProps), content)) : (content);
});
var PIcon = React.memo(PIcon$1);const PBox = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var { ph, pv, mh, mv, fullSize, fullWidth, fullHeight } = _a, otherProps = __rest(_a, ["ph", "pv", "mh", "mv", "fullSize", "fullWidth", "fullHeight"]);
    const props = useMemo(() => {
        const newProps = Object.assign({}, otherProps);
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
    return React.createElement(Box, Object.assign({ ref: ref }, props));
});const PFlexRowBox = React.forwardRef((_a, ref) => {
    var { className, span, inline, center, centerHorizontal, gap, spacing, flexWrap, nowrap, alignItems, justifyContent } = _a, props = __rest(_a, ["className", "span", "inline", "center", "centerHorizontal", "gap", "spacing", "flexWrap", "nowrap", "alignItems", "justifyContent"]);
    return (React.createElement(PBox, Object.assign({ ref: ref, className: classNames('PFlexRowBox', className), component: span ? 'span' : 'div', display: inline ? 'inline-flex' : 'flex', alignItems: ifUndefined(alignItems, center ? 'center' : undefined), justifyContent: ifUndefined(justifyContent, centerHorizontal ? 'center' : undefined), gap: ifUndefined(gap, spacing), flexWrap: ifUndefined(flexWrap, nowrap ? 'nowrap' : 'wrap') }, props)));
});const PHelper = (_a) => {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var { className, style: initStyle, sx, text, icon, size, position, opacity, children } = _a, props = __rest(_a, ["className", "style", "sx", "text", "icon", "size", "position", "opacity", "children"]);
    const pdgIcon = (() => {
        if (!React.isValidElement(text) && !['string', 'number'].includes(typeof text))
            return null;
        if (typeof text === 'string' && text === '')
            return null;
        const style = { opacity };
        if (children) {
            if (position === 'left') {
                style.marginRight = '0.1em';
            }
            else {
                style.marginLeft = '0.1em';
            }
        }
        return (React.createElement(PIcon, Object.assign({ className: classNames('PHelper-Icon', className), size: size, style: Object.assign(Object.assign({}, style), initStyle), sx: sx, tooltip: text }, props), ifUndefined(icon, 'HelpOutline')));
    })();
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return !children ? (pdgIcon) : pdgIcon ? (React.createElement(PFlexRowBox, { inline: true, center: true, span: true, className: 'PHelper' },
        position === 'left' && pdgIcon,
        children,
        position !== 'left' && pdgIcon)) : (React.createElement(React.Fragment, null, children));
};const PText$1 = (_a) => {
    /********************************************************************************************************************
     * Use
     * ******************************************************************************************************************/
    var { display = 'inline-block', line, center, className, size, color, helper, ph, pv, mh, mv, fullWidth, fullHeight, fullSize, children } = _a, initProps = __rest(_a, ["display", "line", "center", "className", "size", "color", "helper", "ph", "pv", "mh", "mv", "fullWidth", "fullHeight", "fullSize", "children"]);
    const theme = useTheme();
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const props = useMemo(() => {
        const newTextProps = Object.assign(Object.assign({}, initProps), { style: Object.assign({}, initProps === null || initProps === void 0 ? void 0 : initProps.style) });
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
    return (() => {
        const content = (React.createElement(Typography, Object.assign({ display: line ? 'block' : display, className: classNames('PText', className) }, props), children));
        if (!helper)
            return content;
        if (typeof helper === 'object' && Object.keys(helper).includes('text')) {
            return (React.createElement(PHelper, Object.assign({ size: size, color: color }, helper), content));
        }
        else {
            return React.createElement(PHelper, { text: helper }, content);
        }
    })();
};
var PText = React.memo(PText$1);/********************************************************************************************************************
 * 사업자등록번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
const PBusinessNoText$1 = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var { children, value, className } = _a, props = __rest(_a, ["children", "value", "className"]);
    const finalValue = children != null ? children : value != null ? value : '';
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const content = useMemo(() => formatBusinessNo(finalValue).substring(0, 12), [finalValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return content ? (React.createElement(PText, Object.assign({ ref: ref, className: classNames('PBusinessNoText', className) }, props), content)) : null;
});
var PBusinessNoText = React.memo(PBusinessNoText$1);/********************************************************************************************************************
 * 날짜를 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
const PDateText$1 = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var { children, value: initValue, type, className, dateClassName, dateStyle: initDateStyle, dateOpacity, dateSeparator, timeClassName, timeStyle: initTimeStyle, timeOpacity, twoLine } = _a, props = __rest(_a, ["children", "value", "type", "className", "dateClassName", "dateStyle", "dateOpacity", "dateSeparator", "timeClassName", "timeStyle", "timeOpacity", "twoLine"]);
    const value = ifUndefined(children, initValue);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const { values, dateStyle, timeStyle } = useMemo(() => {
        const dateFormatSeparator = ifUndefined(dateSeparator, '-');
        const dateFormat = `YYYY${dateFormatSeparator}MM${dateFormatSeparator}DD`;
        const format = type === 'date'
            ? dateFormat
            : type === 'hour'
                ? `${dateFormat} HH시`
                : type === 'minute'
                    ? `${dateFormat} HH시 mm분`
                    : `${dateFormat} HH:mm:ss`;
        let values = undefined;
        if (value) {
            const dValue = dayjs(value).format(format);
            if (dValue.length > dateFormat.length) {
                values = [dValue.substring(0, dateFormat.length), dValue.substring(dateFormat.length + 1)];
            }
            else {
                values = [dValue.substring(0, dateFormat.length)];
            }
        }
        const dateStyle = Object.assign({}, initDateStyle);
        if (dateOpacity !== undefined) {
            dateStyle.opacity = dateOpacity;
        }
        const timeStyle = Object.assign(Object.assign({}, initTimeStyle), { opacity: (initTimeStyle === null || initTimeStyle === void 0 ? void 0 : initTimeStyle.opacity) === undefined && timeOpacity === undefined
                ? 0.6
                : ifUndefined(initTimeStyle === null || initTimeStyle === void 0 ? void 0 : initTimeStyle.opacity, timeOpacity) });
        if (!twoLine) {
            timeStyle.marginLeft = '0.3em';
        }
        return { values, dateStyle, timeStyle };
    }, [dateOpacity, dateSeparator, initDateStyle, initTimeStyle, timeOpacity, twoLine, type, value]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return values ? (React.createElement(PText, Object.assign({ ref: ref, className: classNames('PDateText', className) }, props),
        React.createElement("span", { className: classNames('PDateText-Date', dateClassName), style: dateStyle }, values[0]),
        twoLine && values.length > 1 && React.createElement("br", null),
        values.length > 1 ? (React.createElement("span", { className: classNames('PDateText-Time', timeClassName), style: timeStyle }, values[1])) : null)) : null;
});
var PDateText = React.memo(PDateText$1);/********************************************************************************************************************
 * 이메일을 표시하고 mailto: 링크를 추가하는 컴포넌트
 * ******************************************************************************************************************/
const PEmailText$1 = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var { children, value: initValue, className, color } = _a, props = __rest(_a, ["children", "value", "className", "color"]);
    const value = ifUndefined(children, initValue);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return value ? (React.createElement("a", { ref: ref, href: `mailto:${value}`, className: classNames('PEmailText', className) },
        React.createElement(PText, Object.assign({ color: ifUndefined(color, 'primary') }, props), value))) : null;
});
var PEmailText = React.memo(PEmailText$1);/********************************************************************************************************************
 * 아이콘과 텍스트를 함께 표시하는 컴포넌트
 * ******************************************************************************************************************/
const PIconText$1 = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var { children, className, color, icon, size, iconMarginRight, iconProps: initIconProps, textProps, helper, ph, pv } = _a, otherProps = __rest(_a, ["children", "className", "color", "icon", "size", "iconMarginRight", "iconProps", "textProps", "helper", "ph", "pv"]);
    const props = useMemo(() => {
        const newProps = Object.assign({}, otherProps);
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
    return (React.createElement(PFlexRowBox, Object.assign({ inline: true, center: true, span: true, ref: ref, className: classNames('PIconText', className), fontSize: size === 'inherit' ? 'inherit' : size === 'small' ? '0.75rem' : size === 'large' ? '1.2rem' : size }, props),
        icon && (React.createElement(React.Fragment, null,
            React.createElement(PIcon, Object.assign({}, initIconProps, { color: color, size: size, style: Object.assign({ marginRight: iconMarginRight }, initIconProps === null || initIconProps === void 0 ? void 0 : initIconProps.style), className: classNames('PIconText-Icon', initIconProps === null || initIconProps === void 0 ? void 0 : initIconProps.className) }), icon),
            iconMarginRight === undefined && React.createElement("span", { style: { fontSize: '0.4rem' } }, "\u00A0"))),
        React.createElement(PText, Object.assign({}, textProps, { className: classNames('PIconText-Text', textProps === null || textProps === void 0 ? void 0 : textProps.className), size: ifUndefined(textProps === null || textProps === void 0 ? void 0 : textProps.size, size), color: ifUndefined(textProps === null || textProps === void 0 ? void 0 : textProps.color, color), helper: helper }), children)));
});
var PIconText = React.memo(PIconText$1);/********************************************************************************************************************
 * 숫자에 천단위 , 를 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
const PNumberText$1 = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var { className, children, value: initValue, decimalOpacity, prefix, prefixOpacity, suffix, suffixOpacity } = _a, props = __rest(_a, ["className", "children", "value", "decimalOpacity", "prefix", "prefixOpacity", "suffix", "suffixOpacity"]);
    const value = ifUndefined(children, initValue);
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const { integerValue, decimalValue } = useMemo(() => {
        const formattedValue = value != null ? formatNumber(value).split('.') : null;
        const integerValue = formattedValue ? formattedValue[0] : undefined;
        const decimalValue = formattedValue && formattedValue.length > 1 ? formattedValue[1] : undefined;
        return { integerValue, decimalValue };
    }, [value]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return integerValue != undefined ? (React.createElement(PText, Object.assign({ ref: ref, className: classNames('PNumberText', className) }, props),
        prefix !== undefined && (React.createElement(StyledPrefix, { className: 'PNumberText-Prefix', style: { opacity: prefixOpacity === undefined ? 0.6 : prefixOpacity } }, prefix)),
        React.createElement("span", { className: 'PNumberText-Integer' }, integerValue === '' ? '0' : integerValue),
        decimalValue !== undefined && (React.createElement("span", { className: 'PNumberText-Decimal', style: { opacity: decimalOpacity === undefined ? 1 : decimalOpacity } },
            ".",
            decimalValue)),
        suffix !== undefined && (React.createElement(StyledSuffix, { className: 'PNumberText-Suffix', style: { opacity: suffixOpacity === undefined ? 0.6 : suffixOpacity } }, suffix)))) : null;
});
var PNumberText = React.memo(PNumberText$1);
/********************************************************************************************************************
 * Styled
 * ******************************************************************************************************************/
const StyledPrefix = styled('span') `
  margin-right: 2px;
`;
const StyledSuffix = styled('span') `
  margin-left: 2px;
`;/********************************************************************************************************************
 * 주민등록번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
const PPersonalNoText$1 = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var { children, value, className } = _a, props = __rest(_a, ["children", "value", "className"]);
    const finalValue = children != null ? children : value != null ? value : '';
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const content = useMemo(() => formatPersonalNo(finalValue).substring(0, 14), [finalValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return content ? (React.createElement(PText, Object.assign({ ref: ref, className: classNames('PPersonalNoText', className) }, props), content)) : null;
});
var PPersonalNoText = React.memo(PPersonalNoText$1);/********************************************************************************************************************
 * 전화번호에 자동으로 하이픈을 추가하여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
const PTelText$1 = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var { children, value, className } = _a, props = __rest(_a, ["children", "value", "className"]);
    const finalValue = children != null ? children : value;
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    const content = useMemo(() => formatTelNo(finalValue), [finalValue]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return content ? (React.createElement(PText, Object.assign({ ref: ref, className: classNames('PTelText', className) }, props), content)) : null;
});
var PTelText = React.memo(PTelText$1);/********************************************************************************************************************
 * 숫자에 '원'을 붙여 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/
const PWonText$1 = React.forwardRef((_a, ref) => {
    var { className } = _a, props = __rest(_a, ["className"]);
    return React.createElement(PNumberText, Object.assign({ ref: ref, className: classNames('PWonText', className), suffix: '\uC6D0' }, props));
});
var PWonText = React.memo(PWonText$1);const PButton$1 = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var { variant, size, children, className, ph, pv, mh, mv, style: initStyle, sx: initSx, color: initColor, disabled, startIcon, startIconMarginLeft, startIconMarginRight, startIconProps, endIcon, endIconMarginLeft, endIconMarginRight, endIconProps, tooltip, tooltipPlacement, tooltipProps } = _a, props = __rest(_a, ["variant", "size", "children", "className", "ph", "pv", "mh", "mv", "style", "sx", "color", "disabled", "startIcon", "startIconMarginLeft", "startIconMarginRight", "startIconProps", "endIcon", "endIconMarginLeft", "endIconMarginRight", "endIconProps", "tooltip", "tooltipPlacement", "tooltipProps"]);
    const style = useMemo(() => {
        const newStyle = Object.assign({}, initStyle);
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
    const color = contains(['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning'], initColor)
        ? initColor
        : undefined;
    const content = (React.createElement(Button, Object.assign({ ref: ref, variant: variant, size: size, color: color, disabled: disabled, className: classNames(className, 'PButton'), style: style, sx: variant === 'contained'
            ? Object.assign(Object.assign({}, initSx), { color: '#fff', backgroundColor: color ? undefined : initColor, '&:hover': {
                    color: '#fff',
                    backgroundColor: color ? undefined : initColor ? darken(initColor, 0.2) : undefined,
                } }) : Object.assign(Object.assign({}, initSx), { color: color ? undefined : initColor, borderColor: color ? undefined : initColor, '&:hover': {
                borderColor: color ? undefined : initColor ? darken(initColor, 0.2) : undefined,
            } }) }, props),
        React.createElement(PFlexRowBox, { center: true, inline: true, nowrap: true },
            startIcon && (React.createElement(PIcon, Object.assign({ className: 'PButton-StartIcon', size: size, style: Object.assign({ marginLeft: ifUndefined(startIconMarginLeft, variant !== 'text' && children ? '-0.15em' : undefined), marginRight: ifUndefined(startIconMarginRight, children ? '0.2em' : undefined) }, startIconProps === null || startIconProps === void 0 ? void 0 : startIconProps.style) }, startIconProps), startIcon)),
            React.createElement("div", { style: {
                    fontSize: size === 'small' ? '0.7rem' : size === 'medium' ? undefined : size === 'large' ? '1.0rem' : undefined,
                } }, children),
            endIcon && (React.createElement(PIcon, Object.assign({ className: 'PButton-EndIcon', size: size, style: Object.assign({ marginLeft: ifUndefined(endIconMarginLeft, children ? '0.2em' : undefined), marginRight: ifUndefined(endIconMarginRight, variant !== 'text' && children ? '-0.15em' : undefined) }, endIconProps === null || endIconProps === void 0 ? void 0 : endIconProps.style) }, endIconProps), endIcon)))));
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return tooltip ? (React.createElement(Tooltip, Object.assign({ title: tooltip, placement: ifUndefined(tooltipPlacement, 'top'), arrow: true }, tooltipProps), content)) : (content);
});
var PButton = React.memo(PButton$1);const PIconButton$1 = React.forwardRef((_a, ref) => {
    /********************************************************************************************************************
     * Variable
     * ******************************************************************************************************************/
    var { children, className, sx: initSx, size, color: initColor, iconSize, iconProps, tooltip, tooltipPlacement, tooltipProps, fullWidth } = _a, props = __rest(_a, ["children", "className", "sx", "size", "color", "iconSize", "iconProps", "tooltip", "tooltipPlacement", "tooltipProps", "fullWidth"]);
    const color = contains(['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning'], initColor)
        ? initColor
        : undefined;
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    const content = (React.createElement(IconButton, Object.assign({ ref: ref, color: color, className: classNames('PIconButton', className), size: size, sx: Object.assign({ color: color ? undefined : initColor, width: fullWidth ? '100%' : undefined }, initSx) }, props),
        React.createElement(PIcon, Object.assign({}, iconProps, { size: ifUndefined(iconSize, size), className: classNames('PIconButton-Icon', iconProps === null || iconProps === void 0 ? void 0 : iconProps.className) }), children)));
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return tooltip ? (React.createElement(Tooltip, Object.assign({ title: tooltip, placement: ifUndefined(tooltipPlacement, 'top'), arrow: true }, tooltipProps), content)) : (content);
});
var PIconButton = React.memo(PIconButton$1);const makeObjectValue = (value) => {
    return Object.keys(value)
        .map((key) => {
        const v = value[key];
        if (v != null) {
            if (v instanceof Text) {
                return `${key}: {${v.data}}`;
            }
            else if (typeof v === 'string') {
                return `${key}: "${v}"`;
            }
            else if (typeof v === 'object') {
                return `${key}: {${makeObjectValue(v)}}`;
            }
            else {
                return `${key}: {${v}}`;
            }
        }
    })
        .filter((v) => v != null)
        .join(', ');
};const PReactCode = (_a) => {
    /********************************************************************************************************************
     * Memo
     * ******************************************************************************************************************/
    var { className, name, content, props } = _a, boxProps = __rest(_a, ["className", "name", "content", "props"]);
    const finalProps = useMemo(() => {
        if (props) {
            const result = [];
            Object.keys(props).forEach((key) => {
                const value = props[key];
                if (value != null) {
                    if (value instanceof Text) {
                        result.push({ key, value: `{${value.data}}` });
                    }
                    else if (typeof value === 'string') {
                        result.push({ key, value: `"${value}"` });
                    }
                    else if (typeof value === 'object') {
                        result.push({ key, value: `{${makeObjectValue(value)}}` });
                    }
                    else {
                        result.push({ key, value: `{${value}}` });
                    }
                }
            });
            return result;
        }
    }, [props]);
    /********************************************************************************************************************
     * Render
     * ******************************************************************************************************************/
    return (React.createElement(StyledBox, Object.assign({ className: classNames('PReactCode', className) }, boxProps),
        `<${name}`,
        finalProps &&
            finalProps.map((info, idx) => (React.createElement("span", { key: idx },
                "\u00A0",
                React.createElement("span", { style: { fontWeight: 'bold' } }, info.key),
                "=",
                React.createElement("span", { style: { color: 'yellow' } }, info.value)))),
        content ? (React.createElement(React.Fragment, null,
            ">",
            React.createElement("span", { style: { color: 'yellow' } }, `${content}`),
            `</${name}>`)) : (` />`)));
};
/********************************************************************************************************************
 * Styled Component
 * ******************************************************************************************************************/
const StyledBox = styled(Box) `
  margin-top: 20px;
  font-size: 13px;
  border: 1px solid black;
  background-color: black;
  color: #fff;
  padding: 10px 13px;
  opacity: 0.7;
`;const PFlex = React.forwardRef((_a, ref) => {
    var { className, row = false, spacing, alignCenter, justifyCenter, alignItems, justifyContent, gap } = _a, props = __rest(_a, ["className", "row", "spacing", "alignCenter", "justifyCenter", "alignItems", "justifyContent", "gap"]);
    return (React.createElement(PBox, Object.assign({ ref: ref, className: classNames('PFlex', className), component: 'div', display: 'flex', flexDirection: row ? 'row' : 'column', alignItems: ifUndefined(alignItems, alignCenter ? 'center' : undefined), justifyContent: ifUndefined(justifyContent, justifyCenter ? 'center' : undefined), gap: ifUndefined(gap, spacing) }, props)));
});const PFlexColumnBox = React.forwardRef((_a, ref) => {
    var { className, spacing, center, centerVertical, alignItems, justifyContent, gap } = _a, props = __rest(_a, ["className", "spacing", "center", "centerVertical", "alignItems", "justifyContent", "gap"]);
    return (React.createElement(PBox, Object.assign({ ref: ref, className: classNames('PFlexColumnBox', className), component: 'div', display: 'flex', flexDirection: 'column', alignItems: ifUndefined(alignItems, center ? 'center' : undefined), justifyContent: ifUndefined(justifyContent, centerVertical ? 'center' : undefined), gap: ifUndefined(gap, spacing) }, props)));
});const PStack = React.forwardRef((_a, ref) => {
    var { className, row, span, inline, center, centerJustifyContent, gap, spacing, flexWrap, wrap, alignItems, justifyContent } = _a, props = __rest(_a, ["className", "row", "span", "inline", "center", "centerJustifyContent", "gap", "spacing", "flexWrap", "wrap", "alignItems", "justifyContent"]);
    return (React.createElement(PBox, Object.assign({ ref: ref, className: classNames('PStack', className), component: span ? 'span' : 'div', display: inline ? 'inline-flex' : 'flex', flexDirection: row ? 'row' : 'column', alignItems: ifUndefined(alignItems, center ? 'center' : undefined), justifyContent: ifUndefined(justifyContent, centerJustifyContent ? 'center' : undefined), gap: ifUndefined(gap, spacing), flexWrap: ifUndefined(flexWrap, wrap ? 'wrap' : 'nowrap') }, props)));
});const PCopyToClipboard = (_a) => {
    /********************************************************************************************************************
     * Event Handler
     * ******************************************************************************************************************/
    var { text, options, children, onCopy } = _a, props = __rest(_a, ["text", "options", "children", "onCopy"]);
    const handleClick = useCallback((event) => {
        const elem = React.Children.only(children);
        const result = copy(text, options);
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
    const elem = React.Children.only(children);
    return React.cloneElement(elem, Object.assign(Object.assign({}, props), { onClick: handleClick }));
};export{PBox,PBusinessNoText,PButton,PCopyToClipboard,PDateText,PEmailText,PFlex,PFlexColumnBox,PFlexRowBox,PHelper,PIcon,PIconButton,PIconText,PNumberText,PPersonalNoText,PReactCode,PStack,PTelText,PText,PWonText};