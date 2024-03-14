'use strict';var React=require('react'),material=require('@mui/material'),reactHook=require('@pdg/react-hook');/******************************************************************************
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

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};var IconDefaultProps = {};var Icon = React.forwardRef(function (_a, ref) {
    // State - children ------------------------------------------------------------------------------------------------
    var className = _a.className, initChildren = _a.children, initStyle = _a.style, props = __rest(_a, ["className", "children", "style"]);
    var children = reactHook.useAutoUpdateState(React.useCallback(function () {
        return initChildren === null || initChildren === void 0 ? void 0 : initChildren.replace(/[A-Z]/g, function (letter, idx) { return "".concat(idx > 0 ? '_' : '').concat(letter.toLowerCase()); });
    }, [initChildren]))[0];
    var style = reactHook.useAutoUpdateState(React.useCallback(function () {
        return __assign({ verticalAlign: 'middle' }, initStyle);
    }, [initStyle]))[0];
    // Render ----------------------------------------------------------------------------------------------------------
    return (React.createElement(material.Icon, __assign({ ref: ref }, props, { className: className ? "Icon ".concat(className) : 'Icon', style: style }), children));
});
Icon.displayName = 'Icon';
Icon.defaultProps = IconDefaultProps;var IconTextDefaultProps = {
    iconMarginRight: 3,
};var IconText = function (_a) {
    var children = _a.children, icon = _a.icon, iconMarginRight = _a.iconMarginRight, initIconProps = _a.iconProps, initTextProps = _a.textProps, otherProps = __rest(_a, ["children", "icon", "iconMarginRight", "iconProps", "textProps"]);
    var iconProps = reactHook.useAutoUpdateState(React.useCallback(function () {
        return __assign(__assign({}, initIconProps), { style: __assign({ marginRight: iconMarginRight }, initIconProps === null || initIconProps === void 0 ? void 0 : initIconProps.style) });
    }, [initIconProps, iconMarginRight]))[0];
    var textProps = reactHook.useAutoUpdateState(React.useCallback(function () {
        return __assign(__assign({}, initTextProps), { style: __assign({ verticalAlign: 'middle' }, initTextProps === null || initTextProps === void 0 ? void 0 : initTextProps.style) });
    }, [initTextProps]))[0];
    return (React.createElement(material.Box, __assign({ component: 'span' }, otherProps),
        icon && React.createElement(Icon, __assign({}, iconProps), icon),
        React.createElement("span", __assign({}, textProps), children)));
};
IconText.defaultProps = IconTextDefaultProps;exports.Icon=Icon;exports.IconDefaultProps=IconDefaultProps;exports.IconText=IconText;exports.IconTextDefaultProps=IconTextDefaultProps;//# sourceMappingURL=index.js.map
