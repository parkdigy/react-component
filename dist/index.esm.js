import {c}from'react/compiler-runtime';import React,{useRef,useState,useLayoutEffect}from'react';import {Icon,Tooltip,Box,useTheme,Typography,styled,darken,Button,IconButton}from'@mui/material';import classNames from'classnames';import {contains}from'@pdg/compare';import {formatBusinessNo,formatNumber,formatPersonalNo,formatTelNo}from'@pdg/formatting';import dayjs from'dayjs';import copy from'copy-to-clipboard';function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}/********************************************************************************************************************
 * getParentSize
 * ******************************************************************************************************************/
var getParentSize = function getParentSize(el) {
  var parent = el.parentElement;
  if (parent) {
    var parentStyle = getComputedStyle(parent);
    var parentFontSize = parentStyle.fontSize;
    var sizeValue = parseFloat(parentFontSize);
    var sizeUnit = parentFontSize.replace(sizeValue.toString(), '');
    return {
      sizeValue: sizeValue,
      sizeUnit: sizeUnit
    };
  }
};

/********************************************************************************************************************
 * finalStyleFontSize
 * ******************************************************************************************************************/
var finalStyleFontSize = function finalStyleFontSize(sizeValue, sizeUnit, el) {
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
        sizeValue = sizeValue / 100 * vw;
        sizeUnit = 'px';
      }
      break;
    case 'vh':
      {
        var vh = window.innerHeight;
        sizeValue = sizeValue / 100 * vh;
        sizeUnit = 'px';
      }
      break;
    case 'vmin':
      {
        var _vw = window.innerWidth;
        var _vh = window.innerHeight;
        var vmin = Math.min(_vw, _vh);
        sizeValue = sizeValue / 100 * vmin;
        sizeUnit = 'px';
      }
      break;
    case 'vmax':
      {
        var _vw2 = window.innerWidth;
        var _vh2 = window.innerHeight;
        var vmax = Math.max(_vw2, _vh2);
        sizeValue = sizeValue / 100 * vmax;
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
};var _excluded$j = ["ref", "className", "children", "style", "size", "color", "tooltip", "tooltipPlacement", "tooltipProps"];
var NamedSizes = ['large', 'medium', 'small'];
var MuiColors = ['inherit', 'action', 'disabled', 'primary', 'secondary', 'error', 'info', 'success', 'warning'];
var PIcon = function PIcon(t0) {
  var _initStyle, _initStyle2;
  var $ = c(44);
  var InitChildren;
  var className;
  var color;
  var initStyle;
  var props;
  var ref;
  var size;
  var tooltip;
  var tooltipPlacement;
  var tooltipProps;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    className = _t.className;
    InitChildren = _t.children;
    initStyle = _t.style;
    size = _t.size;
    color = _t.color;
    tooltip = _t.tooltip;
    tooltipPlacement = _t.tooltipPlacement;
    tooltipProps = _t.tooltipProps;
    props = _objectWithoutProperties(_t, _excluded$j);
    $[0] = t0;
    $[1] = InitChildren;
    $[2] = className;
    $[3] = color;
    $[4] = initStyle;
    $[5] = props;
    $[6] = ref;
    $[7] = size;
    $[8] = tooltip;
    $[9] = tooltipPlacement;
    $[10] = tooltipProps;
  } else {
    InitChildren = $[1];
    className = $[2];
    color = $[3];
    initStyle = $[4];
    props = $[5];
    ref = $[6];
    size = $[7];
    tooltip = $[8];
    tooltipPlacement = $[9];
    tooltipProps = $[10];
  }
  var innerRef = useRef(null);
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    styleFontSize = _useState2[0],
    setStyleFontSize = _useState2[1];
  var t1;
  if ($[11] !== size) {
    t1 = contains(NamedSizes, size);
    $[11] = size;
    $[12] = t1;
  } else {
    t1 = $[12];
  }
  var isStandardSize = t1;
  var computedIconFontSize = isStandardSize ? size : undefined;
  var t2;
  if ($[13] !== isStandardSize || $[14] !== size) {
    t2 = function t2() {
      var el = innerRef.current;
      if (!el || isStandardSize) {
        setStyleFontSize(undefined);
        return;
      }
      var sizeValue;
      var sizeUnit;
      if (size === "inherit") {
        var parentSize = getParentSize(el);
        sizeValue = parentSize === null || parentSize === void 0 ? void 0 : parentSize.sizeValue;
        sizeUnit = parentSize === null || parentSize === void 0 ? void 0 : parentSize.sizeUnit;
      } else {
        if (typeof size === "number") {
          sizeValue = size;
          sizeUnit = "px";
        } else {
          if (typeof size === "string") {
            var _sizeValue;
            sizeValue = parseFloat(size);
            sizeUnit = size.replace(((_sizeValue = sizeValue) === null || _sizeValue === void 0 ? void 0 : _sizeValue.toString()) || "", "");
          }
        }
      }
      if (sizeValue && sizeUnit) {
        setStyleFontSize(finalStyleFontSize(sizeValue, sizeUnit, el));
      } else {
        setStyleFontSize(undefined);
      }
    };
    $[13] = isStandardSize;
    $[14] = size;
    $[15] = t2;
  } else {
    t2 = $[15];
  }
  var updateFontSize = t2;
  var t3;
  var t4;
  if ($[16] !== isStandardSize || $[17] !== updateFontSize) {
    t3 = function t3() {
      if (isStandardSize) {
        return;
      }
      var rafId = requestAnimationFrame(function () {
        updateFontSize();
      });
      return function () {
        return cancelAnimationFrame(rafId);
      };
    };
    t4 = [isStandardSize, updateFontSize];
    $[16] = isStandardSize;
    $[17] = updateFontSize;
    $[18] = t3;
    $[19] = t4;
  } else {
    t3 = $[18];
    t4 = $[19];
  }
  useLayoutEffect(t3, t4);
  if (InitChildren === undefined) {
    return null;
  }
  var finalColor = contains(MuiColors, color) ? color : undefined;
  var t5 = styleFontSize !== null && styleFontSize !== void 0 ? styleFontSize : (_initStyle = initStyle) === null || _initStyle === void 0 ? void 0 : _initStyle.fontSize;
  var t6 = finalColor === undefined ? color : (_initStyle2 = initStyle) === null || _initStyle2 === void 0 ? void 0 : _initStyle2.color;
  var t7;
  if ($[20] !== initStyle || $[21] !== t5 || $[22] !== t6) {
    t7 = _objectSpread2(_objectSpread2({}, initStyle), {}, {
      fontSize: t5,
      color: t6
    });
    $[20] = initStyle;
    $[21] = t5;
    $[22] = t6;
    $[23] = t7;
  } else {
    t7 = $[23];
  }
  var style = t7;
  var t8;
  if ($[24] !== ref || $[25] !== updateFontSize) {
    t8 = function t8(r) {
      if (typeof ref === "function") {
        ref(r);
      } else {
        if (ref) {
          ref.current = r;
        }
      }
      innerRef.current = r;
      updateFontSize();
    };
    $[24] = ref;
    $[25] = updateFontSize;
    $[26] = t8;
  } else {
    t8 = $[26];
  }
  var t9;
  if ($[27] !== className) {
    t9 = classNames("PIcon", className);
    $[27] = className;
    $[28] = t9;
  } else {
    t9 = $[28];
  }
  var t10;
  if ($[29] !== InitChildren) {
    t10 = typeof InitChildren === "string" ? InitChildren.replace(/[A-Z]/g, _temp$1) : /*#__PURE__*/React.createElement(InitChildren, null);
    $[29] = InitChildren;
    $[30] = t10;
  } else {
    t10 = $[30];
  }
  var t11;
  if ($[31] !== computedIconFontSize || $[32] !== finalColor || $[33] !== props || $[34] !== style || $[35] !== t10 || $[36] !== t8 || $[37] !== t9) {
    t11 = /*#__PURE__*/React.createElement(Icon, _extends({}, props, {
      ref: t8,
      fontSize: computedIconFontSize,
      color: finalColor,
      className: t9,
      style: style
    }), t10);
    $[31] = computedIconFontSize;
    $[32] = finalColor;
    $[33] = props;
    $[34] = style;
    $[35] = t10;
    $[36] = t8;
    $[37] = t9;
    $[38] = t11;
  } else {
    t11 = $[38];
  }
  var content = t11;
  var t12;
  if ($[39] !== content || $[40] !== tooltip || $[41] !== tooltipPlacement || $[42] !== tooltipProps) {
    t12 = tooltip ? /*#__PURE__*/React.createElement(Tooltip, _extends({
      title: tooltip,
      placement: tooltipPlacement !== null && tooltipPlacement !== void 0 ? tooltipPlacement : "top",
      arrow: true
    }, tooltipProps), content) : content;
    $[39] = content;
    $[40] = tooltip;
    $[41] = tooltipPlacement;
    $[42] = tooltipProps;
    $[43] = t12;
  } else {
    t12 = $[43];
  }
  return t12;
};
function _temp$1(letter, idx) {
  return "".concat(idx > 0 ? "_" : "").concat(letter.toLowerCase());
}var _excluded$i = ["ph", "pv", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "mh", "mv", "marginLeft", "marginRight", "marginTop", "marginBottom", "fullSize", "fullWidth", "fullHeight", "width", "height"];
var PBox = function PBox(t0) {
  var $ = c(33);
  var fullHeight;
  var fullSize;
  var fullWidth;
  var height;
  var marginBottom;
  var marginLeft;
  var marginRight;
  var marginTop;
  var mh;
  var mv;
  var otherProps;
  var paddingBottom;
  var paddingLeft;
  var paddingRight;
  var paddingTop;
  var ph;
  var pv;
  var width;
  if ($[0] !== t0) {
    var _t = t0;
    ph = _t.ph;
    pv = _t.pv;
    paddingLeft = _t.paddingLeft;
    paddingRight = _t.paddingRight;
    paddingTop = _t.paddingTop;
    paddingBottom = _t.paddingBottom;
    mh = _t.mh;
    mv = _t.mv;
    marginLeft = _t.marginLeft;
    marginRight = _t.marginRight;
    marginTop = _t.marginTop;
    marginBottom = _t.marginBottom;
    fullSize = _t.fullSize;
    fullWidth = _t.fullWidth;
    fullHeight = _t.fullHeight;
    width = _t.width;
    height = _t.height;
    otherProps = _objectWithoutProperties(_t, _excluded$i);
    $[0] = t0;
    $[1] = fullHeight;
    $[2] = fullSize;
    $[3] = fullWidth;
    $[4] = height;
    $[5] = marginBottom;
    $[6] = marginLeft;
    $[7] = marginRight;
    $[8] = marginTop;
    $[9] = mh;
    $[10] = mv;
    $[11] = otherProps;
    $[12] = paddingBottom;
    $[13] = paddingLeft;
    $[14] = paddingRight;
    $[15] = paddingTop;
    $[16] = ph;
    $[17] = pv;
    $[18] = width;
  } else {
    fullHeight = $[1];
    fullSize = $[2];
    fullWidth = $[3];
    height = $[4];
    marginBottom = $[5];
    marginLeft = $[6];
    marginRight = $[7];
    marginTop = $[8];
    mh = $[9];
    mv = $[10];
    otherProps = $[11];
    paddingBottom = $[12];
    paddingLeft = $[13];
    paddingRight = $[14];
    paddingTop = $[15];
    ph = $[16];
    pv = $[17];
    width = $[18];
  }
  var t1 = paddingLeft !== null && paddingLeft !== void 0 ? paddingLeft : ph;
  var t2 = paddingRight !== null && paddingRight !== void 0 ? paddingRight : ph;
  var t3 = paddingTop !== null && paddingTop !== void 0 ? paddingTop : pv;
  var t4 = paddingBottom !== null && paddingBottom !== void 0 ? paddingBottom : pv;
  var t5 = marginLeft !== null && marginLeft !== void 0 ? marginLeft : mh;
  var t6 = marginRight !== null && marginRight !== void 0 ? marginRight : mh;
  var t7 = marginTop !== null && marginTop !== void 0 ? marginTop : mv;
  var t8 = marginBottom !== null && marginBottom !== void 0 ? marginBottom : mv;
  var t9 = fullWidth || fullSize ? "100%" : width;
  var t10 = fullHeight || fullSize ? "100%" : height;
  var t11;
  if ($[19] !== t1 || $[20] !== t10 || $[21] !== t2 || $[22] !== t3 || $[23] !== t4 || $[24] !== t5 || $[25] !== t6 || $[26] !== t7 || $[27] !== t8 || $[28] !== t9) {
    t11 = {
      paddingLeft: t1,
      paddingRight: t2,
      paddingTop: t3,
      paddingBottom: t4,
      marginLeft: t5,
      marginRight: t6,
      marginTop: t7,
      marginBottom: t8,
      width: t9,
      height: t10
    };
    $[19] = t1;
    $[20] = t10;
    $[21] = t2;
    $[22] = t3;
    $[23] = t4;
    $[24] = t5;
    $[25] = t6;
    $[26] = t7;
    $[27] = t8;
    $[28] = t9;
    $[29] = t11;
  } else {
    t11 = $[29];
  }
  var marginPaddingSizeProps = t11;
  var t12;
  if ($[30] !== marginPaddingSizeProps || $[31] !== otherProps) {
    t12 = /*#__PURE__*/React.createElement(Box, _extends({}, marginPaddingSizeProps, otherProps));
    $[30] = marginPaddingSizeProps;
    $[31] = otherProps;
    $[32] = t12;
  } else {
    t12 = $[32];
  }
  return t12;
};var _excluded$h = ["className", "span", "inline", "center", "centerHorizontal", "gap", "spacing", "flexWrap", "nowrap", "alignItems", "justifyContent"];
var PFlexRowBox = function PFlexRowBox(t0) {
  var $ = c(24);
  var alignItems;
  var center;
  var centerHorizontal;
  var className;
  var flexWrap;
  var gap;
  var inline;
  var justifyContent;
  var nowrap;
  var props;
  var spacing;
  var span;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    span = _t.span;
    inline = _t.inline;
    center = _t.center;
    centerHorizontal = _t.centerHorizontal;
    gap = _t.gap;
    spacing = _t.spacing;
    flexWrap = _t.flexWrap;
    nowrap = _t.nowrap;
    alignItems = _t.alignItems;
    justifyContent = _t.justifyContent;
    props = _objectWithoutProperties(_t, _excluded$h);
    $[0] = t0;
    $[1] = alignItems;
    $[2] = center;
    $[3] = centerHorizontal;
    $[4] = className;
    $[5] = flexWrap;
    $[6] = gap;
    $[7] = inline;
    $[8] = justifyContent;
    $[9] = nowrap;
    $[10] = props;
    $[11] = spacing;
    $[12] = span;
  } else {
    alignItems = $[1];
    center = $[2];
    centerHorizontal = $[3];
    className = $[4];
    flexWrap = $[5];
    gap = $[6];
    inline = $[7];
    justifyContent = $[8];
    nowrap = $[9];
    props = $[10];
    spacing = $[11];
    span = $[12];
  }
  var t1;
  if ($[13] !== className) {
    t1 = classNames("PFlexRowBox", className);
    $[13] = className;
    $[14] = t1;
  } else {
    t1 = $[14];
  }
  var t2 = span ? "span" : "div";
  var t3 = inline ? "inline-flex" : "flex";
  var t4 = alignItems !== null && alignItems !== void 0 ? alignItems : center ? "center" : undefined;
  var t5 = justifyContent !== null && justifyContent !== void 0 ? justifyContent : centerHorizontal ? "center" : undefined;
  var t6 = gap !== null && gap !== void 0 ? gap : spacing;
  var t7 = flexWrap !== null && flexWrap !== void 0 ? flexWrap : nowrap ? "nowrap" : "wrap";
  var t8;
  if ($[15] !== props || $[16] !== t1 || $[17] !== t2 || $[18] !== t3 || $[19] !== t4 || $[20] !== t5 || $[21] !== t6 || $[22] !== t7) {
    t8 = /*#__PURE__*/React.createElement(PBox, _extends({
      className: t1,
      component: t2,
      display: t3,
      alignItems: t4,
      justifyContent: t5,
      gap: t6,
      flexWrap: t7
    }, props));
    $[15] = props;
    $[16] = t1;
    $[17] = t2;
    $[18] = t3;
    $[19] = t4;
    $[20] = t5;
    $[21] = t6;
    $[22] = t7;
    $[23] = t8;
  } else {
    t8 = $[23];
  }
  return t8;
};var _excluded$g = ["className", "style", "sx", "text", "icon", "size", "position", "opacity", "children"];
var PHelper = function PHelper(t0) {
  var $ = c(32);
  var children;
  var className;
  var icon;
  var initStyle;
  var opacity;
  var position;
  var props;
  var size;
  var sx;
  var text;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    initStyle = _t.style;
    sx = _t.sx;
    text = _t.text;
    icon = _t.icon;
    size = _t.size;
    position = _t.position;
    opacity = _t.opacity;
    children = _t.children;
    props = _objectWithoutProperties(_t, _excluded$g);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = icon;
    $[4] = initStyle;
    $[5] = opacity;
    $[6] = position;
    $[7] = props;
    $[8] = size;
    $[9] = sx;
    $[10] = text;
  } else {
    children = $[1];
    className = $[2];
    icon = $[3];
    initStyle = $[4];
    opacity = $[5];
    position = $[6];
    props = $[7];
    size = $[8];
    sx = $[9];
    text = $[10];
  }
  var t1;
  if ($[11] !== text) {
    t1 = typeof text === "string" && text !== "" || typeof text === "number" || /*#__PURE__*/React.isValidElement(text);
    $[11] = text;
    $[12] = t1;
  } else {
    t1 = $[12];
  }
  var hasText = t1;
  var style;
  if ($[13] !== children || $[14] !== hasText || $[15] !== opacity || $[16] !== position) {
    style = {
      opacity: opacity
    };
    if (hasText && children) {
      if (position === "left") {
        style.marginRight = "0.1em";
      } else {
        style.marginLeft = "0.1em";
      }
    }
    $[13] = children;
    $[14] = hasText;
    $[15] = opacity;
    $[16] = position;
    $[17] = style;
  } else {
    style = $[17];
  }
  var t2;
  if ($[18] !== className || $[19] !== hasText || $[20] !== icon || $[21] !== initStyle || $[22] !== props || $[23] !== size || $[24] !== style || $[25] !== sx || $[26] !== text) {
    t2 = hasText ? /*#__PURE__*/React.createElement(PIcon, _extends({
      className: classNames("PHelper-Icon", className),
      size: size,
      style: _objectSpread2(_objectSpread2({}, style), initStyle),
      sx: sx,
      tooltip: text
    }, props), icon !== null && icon !== void 0 ? icon : "HelpOutline") : null;
    $[18] = className;
    $[19] = hasText;
    $[20] = icon;
    $[21] = initStyle;
    $[22] = props;
    $[23] = size;
    $[24] = style;
    $[25] = sx;
    $[26] = text;
    $[27] = t2;
  } else {
    t2 = $[27];
  }
  var pdgIcon = t2;
  var t3;
  if ($[28] !== children || $[29] !== pdgIcon || $[30] !== position) {
    t3 = !children ? pdgIcon : pdgIcon ? /*#__PURE__*/React.createElement(PFlexRowBox, {
      inline: true,
      center: true,
      span: true,
      className: "PHelper"
    }, position === "left" && pdgIcon, children, position !== "left" && pdgIcon) : /*#__PURE__*/React.createElement(React.Fragment, null, children);
    $[28] = children;
    $[29] = pdgIcon;
    $[30] = position;
    $[31] = t3;
  } else {
    t3 = $[31];
  }
  return t3;
};var _excluded$f = ["display", "line", "center", "className", "size", "color", "helper", "ph", "pv", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "mh", "mv", "marginLeft", "marginRight", "marginTop", "marginBottom", "fullSize", "fullWidth", "fullHeight", "width", "height", "children"];
var PText = function PText(t0) {
  var _initProps, _initProps2, _initProps3;
  var $ = c(57);
  var center;
  var children;
  var className;
  var color;
  var fullHeight;
  var fullSize;
  var fullWidth;
  var height;
  var helper;
  var initProps;
  var line;
  var marginBottom;
  var marginLeft;
  var marginRight;
  var marginTop;
  var mh;
  var mv;
  var paddingBottom;
  var paddingLeft;
  var paddingRight;
  var paddingTop;
  var ph;
  var pv;
  var size;
  var t1;
  var width;
  if ($[0] !== t0) {
    var _t = t0;
    t1 = _t.display;
    line = _t.line;
    center = _t.center;
    className = _t.className;
    size = _t.size;
    color = _t.color;
    helper = _t.helper;
    ph = _t.ph;
    pv = _t.pv;
    paddingLeft = _t.paddingLeft;
    paddingRight = _t.paddingRight;
    paddingTop = _t.paddingTop;
    paddingBottom = _t.paddingBottom;
    mh = _t.mh;
    mv = _t.mv;
    marginLeft = _t.marginLeft;
    marginRight = _t.marginRight;
    marginTop = _t.marginTop;
    marginBottom = _t.marginBottom;
    fullSize = _t.fullSize;
    fullWidth = _t.fullWidth;
    fullHeight = _t.fullHeight;
    width = _t.width;
    height = _t.height;
    children = _t.children;
    initProps = _objectWithoutProperties(_t, _excluded$f);
    $[0] = t0;
    $[1] = center;
    $[2] = children;
    $[3] = className;
    $[4] = color;
    $[5] = fullHeight;
    $[6] = fullSize;
    $[7] = fullWidth;
    $[8] = height;
    $[9] = helper;
    $[10] = initProps;
    $[11] = line;
    $[12] = marginBottom;
    $[13] = marginLeft;
    $[14] = marginRight;
    $[15] = marginTop;
    $[16] = mh;
    $[17] = mv;
    $[18] = paddingBottom;
    $[19] = paddingLeft;
    $[20] = paddingRight;
    $[21] = paddingTop;
    $[22] = ph;
    $[23] = pv;
    $[24] = size;
    $[25] = t1;
    $[26] = width;
  } else {
    center = $[1];
    children = $[2];
    className = $[3];
    color = $[4];
    fullHeight = $[5];
    fullSize = $[6];
    fullWidth = $[7];
    height = $[8];
    helper = $[9];
    initProps = $[10];
    line = $[11];
    marginBottom = $[12];
    marginLeft = $[13];
    marginRight = $[14];
    marginTop = $[15];
    mh = $[16];
    mv = $[17];
    paddingBottom = $[18];
    paddingLeft = $[19];
    paddingRight = $[20];
    paddingTop = $[21];
    ph = $[22];
    pv = $[23];
    size = $[24];
    t1 = $[25];
    width = $[26];
  }
  var display = t1 === undefined ? "inline-block" : t1;
  var theme = useTheme();
  var t2;
  bb0: switch (color) {
    case "primary":
      {
        t2 = theme.palette.primary.main;
        break bb0;
      }
    case "secondary":
      {
        t2 = theme.palette.secondary.main;
        break bb0;
      }
    case "error":
      {
        t2 = theme.palette.error.main;
        break bb0;
      }
    case "warning":
      {
        t2 = theme.palette.warning.main;
        break bb0;
      }
    case "info":
      {
        t2 = theme.palette.info.main;
        break bb0;
      }
    case "success":
      {
        t2 = theme.palette.success.main;
        break bb0;
      }
    default:
      {
        t2 = color;
      }
  }
  var finalColor = t2;
  var t3;
  bb1: switch (size) {
    case "inherit":
      {
        t3 = "inherit";
        break bb1;
      }
    case "small":
      {
        t3 = "0.75rem";
        break bb1;
      }
    case "medium":
      {
        t3 = undefined;
        break bb1;
      }
    case "large":
      {
        t3 = "1.2rem";
        break bb1;
      }
    default:
      {
        t3 = size;
      }
  }
  var fontSize = t3;
  var t4 = center ? "center" : initProps.textAlign;
  var t5 = paddingLeft !== null && paddingLeft !== void 0 ? paddingLeft : ph;
  var t6 = paddingRight !== null && paddingRight !== void 0 ? paddingRight : ph;
  var t7 = paddingTop !== null && paddingTop !== void 0 ? paddingTop : pv;
  var t8 = paddingBottom !== null && paddingBottom !== void 0 ? paddingBottom : pv;
  var t9 = marginLeft !== null && marginLeft !== void 0 ? marginLeft : mh;
  var t10 = marginRight !== null && marginRight !== void 0 ? marginRight : mh;
  var t11 = marginTop !== null && marginTop !== void 0 ? marginTop : mv;
  var t12 = marginBottom !== null && marginBottom !== void 0 ? marginBottom : mv;
  var t13 = fullWidth || fullSize ? "100%" : width;
  var t14 = fullHeight || fullSize ? "100%" : height;
  var t15 = (_initProps = initProps) === null || _initProps === void 0 ? void 0 : _initProps.style;
  var t16 = fontSize !== null && fontSize !== void 0 ? fontSize : (_initProps2 = initProps) === null || _initProps2 === void 0 || (_initProps2 = _initProps2.style) === null || _initProps2 === void 0 ? void 0 : _initProps2.fontSize;
  var t17 = finalColor !== null && finalColor !== void 0 ? finalColor : (_initProps3 = initProps) === null || _initProps3 === void 0 || (_initProps3 = _initProps3.style) === null || _initProps3 === void 0 ? void 0 : _initProps3.color;
  var t18;
  if ($[27] !== t15 || $[28] !== t16 || $[29] !== t17) {
    t18 = _objectSpread2(_objectSpread2({}, t15), {}, {
      fontSize: t16,
      color: t17
    });
    $[27] = t15;
    $[28] = t16;
    $[29] = t17;
    $[30] = t18;
  } else {
    t18 = $[30];
  }
  var t19;
  if ($[31] !== initProps || $[32] !== t10 || $[33] !== t11 || $[34] !== t12 || $[35] !== t13 || $[36] !== t14 || $[37] !== t18 || $[38] !== t4 || $[39] !== t5 || $[40] !== t6 || $[41] !== t7 || $[42] !== t8 || $[43] !== t9) {
    t19 = _objectSpread2(_objectSpread2({}, initProps), {}, {
      textAlign: t4,
      paddingLeft: t5,
      paddingRight: t6,
      paddingTop: t7,
      paddingBottom: t8,
      marginLeft: t9,
      marginRight: t10,
      marginTop: t11,
      marginBottom: t12,
      width: t13,
      height: t14,
      style: t18
    });
    $[31] = initProps;
    $[32] = t10;
    $[33] = t11;
    $[34] = t12;
    $[35] = t13;
    $[36] = t14;
    $[37] = t18;
    $[38] = t4;
    $[39] = t5;
    $[40] = t6;
    $[41] = t7;
    $[42] = t8;
    $[43] = t9;
    $[44] = t19;
  } else {
    t19 = $[44];
  }
  var props = t19;
  var t20 = line ? "block" : display;
  var t21;
  if ($[45] !== className) {
    t21 = classNames("PText", className);
    $[45] = className;
    $[46] = t21;
  } else {
    t21 = $[46];
  }
  var t22;
  if ($[47] !== children || $[48] !== props || $[49] !== t20 || $[50] !== t21) {
    t22 = /*#__PURE__*/React.createElement(Typography, _extends({
      display: t20,
      className: t21
    }, props), children);
    $[47] = children;
    $[48] = props;
    $[49] = t20;
    $[50] = t21;
    $[51] = t22;
  } else {
    t22 = $[51];
  }
  var content = t22;
  var t23;
  if ($[52] !== color || $[53] !== content || $[54] !== helper || $[55] !== size) {
    t23 = helper ? _typeof(helper) === "object" && Object.keys(helper).includes("text") ? /*#__PURE__*/React.createElement(PHelper, _extends({
      size: size,
      color: color
    }, helper), content) : /*#__PURE__*/React.createElement(PHelper, {
      text: helper
    }, content) : content;
    $[52] = color;
    $[53] = content;
    $[54] = helper;
    $[55] = size;
    $[56] = t23;
  } else {
    t23 = $[56];
  }
  return t23;
};var _excluded$e = ["children", "value", "className"];
var PBusinessNoText = function PBusinessNoText(t0) {
  var $ = c(12);
  var children;
  var className;
  var props;
  var value;
  if ($[0] !== t0) {
    var _t = t0;
    children = _t.children;
    value = _t.value;
    className = _t.className;
    props = _objectWithoutProperties(_t, _excluded$e);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
    $[4] = value;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
    value = $[4];
  }
  var t1;
  if ($[5] !== children || $[6] !== value) {
    var _ref;
    t1 = formatBusinessNo((_ref = children !== null && children !== void 0 ? children : value) !== null && _ref !== void 0 ? _ref : "").substring(0, 12);
    $[5] = children;
    $[6] = value;
    $[7] = t1;
  } else {
    t1 = $[7];
  }
  var content = t1;
  var t2;
  if ($[8] !== className || $[9] !== content || $[10] !== props) {
    t2 = content ? /*#__PURE__*/React.createElement(PText, _extends({
      className: classNames("PBusinessNoText", className)
    }, props), content) : null;
    $[8] = className;
    $[9] = content;
    $[10] = props;
    $[11] = t2;
  } else {
    t2 = $[11];
  }
  return t2;
};var _excluded$d = ["children", "value", "type", "className", "dateClassName", "dateStyle", "dateOpacity", "dateSeparator", "timeClassName", "timeStyle", "timeOpacity", "twoLine"];
var PDateText = function PDateText(t0) {
  var _initDateStyle, _initTimeStyle, _initTimeStyle$opacit, _initTimeStyle2, _initTimeStyle3;
  var $ = c(34);
  var children;
  var className;
  var dateClassName;
  var dateOpacity;
  var dateSeparator;
  var initDateStyle;
  var initTimeStyle;
  var initValue;
  var props;
  var timeClassName;
  var timeOpacity;
  var twoLine;
  var type;
  if ($[0] !== t0) {
    var _t = t0;
    children = _t.children;
    initValue = _t.value;
    type = _t.type;
    className = _t.className;
    dateClassName = _t.dateClassName;
    initDateStyle = _t.dateStyle;
    dateOpacity = _t.dateOpacity;
    dateSeparator = _t.dateSeparator;
    timeClassName = _t.timeClassName;
    initTimeStyle = _t.timeStyle;
    timeOpacity = _t.timeOpacity;
    twoLine = _t.twoLine;
    props = _objectWithoutProperties(_t, _excluded$d);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = dateClassName;
    $[4] = dateOpacity;
    $[5] = dateSeparator;
    $[6] = initDateStyle;
    $[7] = initTimeStyle;
    $[8] = initValue;
    $[9] = props;
    $[10] = timeClassName;
    $[11] = timeOpacity;
    $[12] = twoLine;
    $[13] = type;
  } else {
    children = $[1];
    className = $[2];
    dateClassName = $[3];
    dateOpacity = $[4];
    dateSeparator = $[5];
    initDateStyle = $[6];
    initTimeStyle = $[7];
    initValue = $[8];
    props = $[9];
    timeClassName = $[10];
    timeOpacity = $[11];
    twoLine = $[12];
    type = $[13];
  }
  var value = children !== null && children !== void 0 ? children : initValue;
  var dateFormatSeparator = dateSeparator !== null && dateSeparator !== void 0 ? dateSeparator : "-";
  var dateFormat = "YYYY".concat(dateFormatSeparator, "MM").concat(dateFormatSeparator, "DD");
  var format = type === "date" ? dateFormat : type === "hour" ? "".concat(dateFormat, " HH\uC2DC") : type === "minute" ? "".concat(dateFormat, " HH\uC2DC mm\uBD84") : "".concat(dateFormat, " HH:mm:ss");
  var values = undefined;
  if (value) {
    if ($[14] !== dateFormat.length || $[15] !== format || $[16] !== value) {
      var dValue = dayjs(value).format(format);
      if (dValue.length > dateFormat.length) {
        values = [dValue.substring(0, dateFormat.length), dValue.substring(dateFormat.length + 1)];
      } else {
        values = [dValue.substring(0, dateFormat.length)];
      }
      $[14] = dateFormat.length;
      $[15] = format;
      $[16] = value;
      $[17] = values;
    } else {
      values = $[17];
    }
  }
  var t1 = dateOpacity !== null && dateOpacity !== void 0 ? dateOpacity : (_initDateStyle = initDateStyle) === null || _initDateStyle === void 0 ? void 0 : _initDateStyle.opacity;
  var t2;
  if ($[18] !== initDateStyle || $[19] !== t1) {
    t2 = _objectSpread2(_objectSpread2({}, initDateStyle), {}, {
      opacity: t1
    });
    $[18] = initDateStyle;
    $[19] = t1;
    $[20] = t2;
  } else {
    t2 = $[20];
  }
  var dateStyle = t2;
  var t3 = ((_initTimeStyle = initTimeStyle) === null || _initTimeStyle === void 0 ? void 0 : _initTimeStyle.opacity) === undefined && timeOpacity === undefined ? 0.6 : (_initTimeStyle$opacit = (_initTimeStyle2 = initTimeStyle) === null || _initTimeStyle2 === void 0 ? void 0 : _initTimeStyle2.opacity) !== null && _initTimeStyle$opacit !== void 0 ? _initTimeStyle$opacit : timeOpacity;
  var t4 = twoLine ? (_initTimeStyle3 = initTimeStyle) === null || _initTimeStyle3 === void 0 ? void 0 : _initTimeStyle3.marginLeft : "0.3em";
  var t5;
  if ($[21] !== initTimeStyle || $[22] !== t3 || $[23] !== t4) {
    t5 = _objectSpread2(_objectSpread2({}, initTimeStyle), {}, {
      opacity: t3,
      marginLeft: t4
    });
    $[21] = initTimeStyle;
    $[22] = t3;
    $[23] = t4;
    $[24] = t5;
  } else {
    t5 = $[24];
  }
  var timeStyle = t5;
  var t6;
  if ($[25] !== className || $[26] !== dateClassName || $[27] !== dateStyle || $[28] !== props || $[29] !== timeClassName || $[30] !== timeStyle || $[31] !== twoLine || $[32] !== values) {
    t6 = values ? /*#__PURE__*/React.createElement(PText, _extends({
      className: classNames("PDateText", className)
    }, props), /*#__PURE__*/React.createElement("span", {
      className: classNames("PDateText-Date", dateClassName),
      style: dateStyle
    }, values[0]), twoLine && values.length > 1 && /*#__PURE__*/React.createElement("br", null), values.length > 1 ? /*#__PURE__*/React.createElement("span", {
      className: classNames("PDateText-Time", timeClassName),
      style: timeStyle
    }, values[1]) : null) : null;
    $[25] = className;
    $[26] = dateClassName;
    $[27] = dateStyle;
    $[28] = props;
    $[29] = timeClassName;
    $[30] = timeStyle;
    $[31] = twoLine;
    $[32] = values;
    $[33] = t6;
  } else {
    t6 = $[33];
  }
  return t6;
};var _excluded$c = ["ref", "children", "value", "className", "color"];
var PEmailText = function PEmailText(t0) {
  var $ = c(13);
  var children;
  var className;
  var color;
  var initValue;
  var props;
  var ref;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    children = _t.children;
    initValue = _t.value;
    className = _t.className;
    color = _t.color;
    props = _objectWithoutProperties(_t, _excluded$c);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = color;
    $[4] = initValue;
    $[5] = props;
    $[6] = ref;
  } else {
    children = $[1];
    className = $[2];
    color = $[3];
    initValue = $[4];
    props = $[5];
    ref = $[6];
  }
  var value = children !== null && children !== void 0 ? children : initValue;
  var t1;
  if ($[7] !== className || $[8] !== color || $[9] !== props || $[10] !== ref || $[11] !== value) {
    t1 = value ? /*#__PURE__*/React.createElement("a", {
      ref: ref,
      href: "mailto:".concat(value),
      className: classNames("PEmailText", className)
    }, /*#__PURE__*/React.createElement(PText, _extends({
      color: color !== null && color !== void 0 ? color : "primary"
    }, props), value)) : null;
    $[7] = className;
    $[8] = color;
    $[9] = props;
    $[10] = ref;
    $[11] = value;
    $[12] = t1;
  } else {
    t1 = $[12];
  }
  return t1;
};var _excluded$b = ["children", "className", "color", "icon", "size", "iconMarginRight", "iconProps", "textProps", "helper", "ph", "pv", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom"];
var PIconText = function PIconText(t0) {
  var _textProps, _textProps$size, _textProps2, _textProps$color, _textProps3;
  var $ = c(46);
  var children;
  var className;
  var color;
  var helper;
  var icon;
  var iconMarginRight;
  var initIconProps;
  var otherProps;
  var paddingBottom;
  var paddingLeft;
  var paddingRight;
  var paddingTop;
  var ph;
  var pv;
  var size;
  var textProps;
  if ($[0] !== t0) {
    var _t = t0;
    children = _t.children;
    className = _t.className;
    color = _t.color;
    icon = _t.icon;
    size = _t.size;
    iconMarginRight = _t.iconMarginRight;
    initIconProps = _t.iconProps;
    textProps = _t.textProps;
    helper = _t.helper;
    ph = _t.ph;
    pv = _t.pv;
    paddingLeft = _t.paddingLeft;
    paddingRight = _t.paddingRight;
    paddingTop = _t.paddingTop;
    paddingBottom = _t.paddingBottom;
    otherProps = _objectWithoutProperties(_t, _excluded$b);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = color;
    $[4] = helper;
    $[5] = icon;
    $[6] = iconMarginRight;
    $[7] = initIconProps;
    $[8] = otherProps;
    $[9] = paddingBottom;
    $[10] = paddingLeft;
    $[11] = paddingRight;
    $[12] = paddingTop;
    $[13] = ph;
    $[14] = pv;
    $[15] = size;
    $[16] = textProps;
  } else {
    children = $[1];
    className = $[2];
    color = $[3];
    helper = $[4];
    icon = $[5];
    iconMarginRight = $[6];
    initIconProps = $[7];
    otherProps = $[8];
    paddingBottom = $[9];
    paddingLeft = $[10];
    paddingRight = $[11];
    paddingTop = $[12];
    ph = $[13];
    pv = $[14];
    size = $[15];
    textProps = $[16];
  }
  var t1 = paddingLeft !== null && paddingLeft !== void 0 ? paddingLeft : ph;
  var t2 = paddingRight !== null && paddingRight !== void 0 ? paddingRight : ph;
  var t3 = paddingTop !== null && paddingTop !== void 0 ? paddingTop : pv;
  var t4 = paddingBottom !== null && paddingBottom !== void 0 ? paddingBottom : pv;
  var t5;
  if ($[17] !== t1 || $[18] !== t2 || $[19] !== t3 || $[20] !== t4) {
    t5 = {
      paddingLeft: t1,
      paddingRight: t2,
      paddingTop: t3,
      paddingBottom: t4
    };
    $[17] = t1;
    $[18] = t2;
    $[19] = t3;
    $[20] = t4;
    $[21] = t5;
  } else {
    t5 = $[21];
  }
  var paddingProps = t5;
  var fontSize = size === "inherit" ? "inherit" : size === "small" ? "0.75rem" : size === "large" ? "1.2rem" : size;
  var t6;
  if ($[22] !== className) {
    t6 = classNames("PIconText", className);
    $[22] = className;
    $[23] = t6;
  } else {
    t6 = $[23];
  }
  var t7;
  if ($[24] !== color || $[25] !== icon || $[26] !== iconMarginRight || $[27] !== initIconProps || $[28] !== size) {
    var _initIconProps, _initIconProps2;
    t7 = icon && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PIcon, _extends({}, initIconProps, {
      color: color,
      size: size,
      style: _objectSpread2({
        marginRight: iconMarginRight
      }, (_initIconProps = initIconProps) === null || _initIconProps === void 0 ? void 0 : _initIconProps.style),
      className: classNames("PIconText-Icon", (_initIconProps2 = initIconProps) === null || _initIconProps2 === void 0 ? void 0 : _initIconProps2.className)
    }), icon), iconMarginRight === undefined && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "0.4rem"
      }
    }, "\xA0"));
    $[24] = color;
    $[25] = icon;
    $[26] = iconMarginRight;
    $[27] = initIconProps;
    $[28] = size;
    $[29] = t7;
  } else {
    t7 = $[29];
  }
  var t8 = (_textProps = textProps) === null || _textProps === void 0 ? void 0 : _textProps.className;
  var t9;
  if ($[30] !== t8) {
    t9 = classNames("PIconText-Text", t8);
    $[30] = t8;
    $[31] = t9;
  } else {
    t9 = $[31];
  }
  var t10 = (_textProps$size = (_textProps2 = textProps) === null || _textProps2 === void 0 ? void 0 : _textProps2.size) !== null && _textProps$size !== void 0 ? _textProps$size : size;
  var t11 = (_textProps$color = (_textProps3 = textProps) === null || _textProps3 === void 0 ? void 0 : _textProps3.color) !== null && _textProps$color !== void 0 ? _textProps$color : color;
  var t12;
  if ($[32] !== children || $[33] !== helper || $[34] !== t10 || $[35] !== t11 || $[36] !== t9 || $[37] !== textProps) {
    t12 = /*#__PURE__*/React.createElement(PText, _extends({}, textProps, {
      className: t9,
      size: t10,
      color: t11,
      helper: helper
    }), children);
    $[32] = children;
    $[33] = helper;
    $[34] = t10;
    $[35] = t11;
    $[36] = t9;
    $[37] = textProps;
    $[38] = t12;
  } else {
    t12 = $[38];
  }
  var t13;
  if ($[39] !== fontSize || $[40] !== otherProps || $[41] !== paddingProps || $[42] !== t12 || $[43] !== t6 || $[44] !== t7) {
    t13 = /*#__PURE__*/React.createElement(PFlexRowBox, _extends({
      inline: true,
      center: true,
      span: true,
      className: t6,
      fontSize: fontSize
    }, paddingProps, otherProps), t7, t12);
    $[39] = fontSize;
    $[40] = otherProps;
    $[41] = paddingProps;
    $[42] = t12;
    $[43] = t6;
    $[44] = t7;
    $[45] = t13;
  } else {
    t13 = $[45];
  }
  return t13;
};var _templateObject$1, _templateObject2;
var _excluded$a = ["className", "children", "value", "decimalOpacity", "prefix", "prefixOpacity", "suffix", "suffixOpacity"];
var PNumberText = function PNumberText(t0) {
  var $ = c(22);
  var children;
  var className;
  var decimalOpacity;
  var initValue;
  var prefix;
  var prefixOpacity;
  var props;
  var suffix;
  var suffixOpacity;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    children = _t.children;
    initValue = _t.value;
    decimalOpacity = _t.decimalOpacity;
    prefix = _t.prefix;
    prefixOpacity = _t.prefixOpacity;
    suffix = _t.suffix;
    suffixOpacity = _t.suffixOpacity;
    props = _objectWithoutProperties(_t, _excluded$a);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = decimalOpacity;
    $[4] = initValue;
    $[5] = prefix;
    $[6] = prefixOpacity;
    $[7] = props;
    $[8] = suffix;
    $[9] = suffixOpacity;
  } else {
    children = $[1];
    className = $[2];
    decimalOpacity = $[3];
    initValue = $[4];
    prefix = $[5];
    prefixOpacity = $[6];
    props = $[7];
    suffix = $[8];
    suffixOpacity = $[9];
  }
  var value = children !== null && children !== void 0 ? children : initValue;
  var t1;
  if ($[10] !== value) {
    t1 = value != null ? formatNumber(value).split(".") : null;
    $[10] = value;
    $[11] = t1;
  } else {
    t1 = $[11];
  }
  var formattedValue = t1;
  var integerValue = formattedValue ? formattedValue[0] : undefined;
  var decimalValue = formattedValue && formattedValue.length > 1 ? formattedValue[1] : undefined;
  var t2;
  if ($[12] !== className || $[13] !== decimalOpacity || $[14] !== decimalValue || $[15] !== integerValue || $[16] !== prefix || $[17] !== prefixOpacity || $[18] !== props || $[19] !== suffix || $[20] !== suffixOpacity) {
    t2 = integerValue != undefined ? /*#__PURE__*/React.createElement(PText, _extends({
      className: classNames("PNumberText", className)
    }, props), prefix !== undefined && /*#__PURE__*/React.createElement(StyledPrefix, {
      className: "PNumberText-Prefix",
      style: {
        opacity: prefixOpacity === undefined ? 0.6 : prefixOpacity
      }
    }, prefix), /*#__PURE__*/React.createElement("span", {
      className: "PNumberText-Integer"
    }, integerValue === "" ? "0" : integerValue), decimalValue !== undefined && /*#__PURE__*/React.createElement("span", {
      className: "PNumberText-Decimal",
      style: {
        opacity: decimalOpacity === undefined ? 1 : decimalOpacity
      }
    }, ".", decimalValue), suffix !== undefined && /*#__PURE__*/React.createElement(StyledSuffix, {
      className: "PNumberText-Suffix",
      style: {
        opacity: suffixOpacity === undefined ? 0.6 : suffixOpacity
      }
    }, suffix)) : null;
    $[12] = className;
    $[13] = decimalOpacity;
    $[14] = decimalValue;
    $[15] = integerValue;
    $[16] = prefix;
    $[17] = prefixOpacity;
    $[18] = props;
    $[19] = suffix;
    $[20] = suffixOpacity;
    $[21] = t2;
  } else {
    t2 = $[21];
  }
  return t2;
};

/********************************************************************************************************************
 * Styled
 * ******************************************************************************************************************/

var StyledPrefix = styled('span')(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  margin-right: 2px;\n"])));
var StyledSuffix = styled('span')(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-left: 2px;\n"])));var _excluded$9 = ["children", "value", "className"];
var PPersonalNoText = function PPersonalNoText(t0) {
  var _ref;
  var $ = c(11);
  var children;
  var className;
  var props;
  var value;
  if ($[0] !== t0) {
    var _t = t0;
    children = _t.children;
    value = _t.value;
    className = _t.className;
    props = _objectWithoutProperties(_t, _excluded$9);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
    $[4] = value;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
    value = $[4];
  }
  var finalValue = (_ref = children !== null && children !== void 0 ? children : value) !== null && _ref !== void 0 ? _ref : "";
  var t1;
  if ($[5] !== finalValue) {
    t1 = formatPersonalNo(finalValue).substring(0, 14);
    $[5] = finalValue;
    $[6] = t1;
  } else {
    t1 = $[6];
  }
  var content = t1;
  var t2;
  if ($[7] !== className || $[8] !== content || $[9] !== props) {
    t2 = content ? /*#__PURE__*/React.createElement(PText, _extends({
      className: classNames("PPersonalNoText", className)
    }, props), content) : null;
    $[7] = className;
    $[8] = content;
    $[9] = props;
    $[10] = t2;
  } else {
    t2 = $[10];
  }
  return t2;
};var _excluded$8 = ["children", "value", "className"];
var PTelText = function PTelText(t0) {
  var $ = c(11);
  var children;
  var className;
  var props;
  var value;
  if ($[0] !== t0) {
    var _t = t0;
    children = _t.children;
    value = _t.value;
    className = _t.className;
    props = _objectWithoutProperties(_t, _excluded$8);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
    $[4] = value;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
    value = $[4];
  }
  var finalValue = children !== null && children !== void 0 ? children : value;
  var t1;
  if ($[5] !== finalValue) {
    t1 = formatTelNo(finalValue);
    $[5] = finalValue;
    $[6] = t1;
  } else {
    t1 = $[6];
  }
  var content = t1;
  var t2;
  if ($[7] !== className || $[8] !== content || $[9] !== props) {
    t2 = content ? /*#__PURE__*/React.createElement(PText, _extends({
      className: classNames("PTelText", className)
    }, props), content) : null;
    $[7] = className;
    $[8] = content;
    $[9] = props;
    $[10] = t2;
  } else {
    t2 = $[10];
  }
  return t2;
};var _excluded$7 = ["className"];
var PWonText = function PWonText(t0) {
  var $ = c(8);
  var className;
  var props;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    props = _objectWithoutProperties(_t, _excluded$7);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  var t1;
  if ($[3] !== className) {
    t1 = classNames("PWonText", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  var t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /*#__PURE__*/React.createElement(PNumberText, _extends({
      className: t1,
      suffix: "\uC6D0"
    }, props));
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
};var _excluded$6 = ["variant", "size", "children", "className", "ph", "pv", "mh", "mv", "style", "sx", "color", "disabled", "startIcon", "startIconMarginLeft", "startIconMarginRight", "startIconProps", "endIcon", "endIconMarginLeft", "endIconMarginRight", "endIconProps", "tooltip", "tooltipPlacement", "tooltipProps"];
var NamedColors$1 = ['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning'];
var PButton = function PButton(t0) {
  var _initStyle$paddingLef, _initStyle, _initStyle$paddingRig, _initStyle2, _initStyle$paddingTop, _initStyle3, _initStyle$paddingBot, _initStyle4, _initStyle$marginLeft, _initStyle5, _initStyle$marginRigh, _initStyle6, _initStyle$marginTop, _initStyle7, _initStyle$marginBott, _initStyle8, _startIconProps, _endIconProps;
  var $ = c(84);
  var children;
  var className;
  var disabled;
  var endIcon;
  var endIconMarginLeft;
  var endIconMarginRight;
  var endIconProps;
  var initColor;
  var initStyle;
  var initSx;
  var mh;
  var mv;
  var ph;
  var props;
  var pv;
  var size;
  var startIcon;
  var startIconMarginLeft;
  var startIconMarginRight;
  var startIconProps;
  var tooltip;
  var tooltipPlacement;
  var tooltipProps;
  var variant;
  if ($[0] !== t0) {
    var _t = t0;
    variant = _t.variant;
    size = _t.size;
    children = _t.children;
    className = _t.className;
    ph = _t.ph;
    pv = _t.pv;
    mh = _t.mh;
    mv = _t.mv;
    initStyle = _t.style;
    initSx = _t.sx;
    initColor = _t.color;
    disabled = _t.disabled;
    startIcon = _t.startIcon;
    startIconMarginLeft = _t.startIconMarginLeft;
    startIconMarginRight = _t.startIconMarginRight;
    startIconProps = _t.startIconProps;
    endIcon = _t.endIcon;
    endIconMarginLeft = _t.endIconMarginLeft;
    endIconMarginRight = _t.endIconMarginRight;
    endIconProps = _t.endIconProps;
    tooltip = _t.tooltip;
    tooltipPlacement = _t.tooltipPlacement;
    tooltipProps = _t.tooltipProps;
    props = _objectWithoutProperties(_t, _excluded$6);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = disabled;
    $[4] = endIcon;
    $[5] = endIconMarginLeft;
    $[6] = endIconMarginRight;
    $[7] = endIconProps;
    $[8] = initColor;
    $[9] = initStyle;
    $[10] = initSx;
    $[11] = mh;
    $[12] = mv;
    $[13] = ph;
    $[14] = props;
    $[15] = pv;
    $[16] = size;
    $[17] = startIcon;
    $[18] = startIconMarginLeft;
    $[19] = startIconMarginRight;
    $[20] = startIconProps;
    $[21] = tooltip;
    $[22] = tooltipPlacement;
    $[23] = tooltipProps;
    $[24] = variant;
  } else {
    children = $[1];
    className = $[2];
    disabled = $[3];
    endIcon = $[4];
    endIconMarginLeft = $[5];
    endIconMarginRight = $[6];
    endIconProps = $[7];
    initColor = $[8];
    initStyle = $[9];
    initSx = $[10];
    mh = $[11];
    mv = $[12];
    ph = $[13];
    props = $[14];
    pv = $[15];
    size = $[16];
    startIcon = $[17];
    startIconMarginLeft = $[18];
    startIconMarginRight = $[19];
    startIconProps = $[20];
    tooltip = $[21];
    tooltipPlacement = $[22];
    tooltipProps = $[23];
    variant = $[24];
  }
  var t1 = (_initStyle$paddingLef = (_initStyle = initStyle) === null || _initStyle === void 0 ? void 0 : _initStyle.paddingLeft) !== null && _initStyle$paddingLef !== void 0 ? _initStyle$paddingLef : ph;
  var t2 = (_initStyle$paddingRig = (_initStyle2 = initStyle) === null || _initStyle2 === void 0 ? void 0 : _initStyle2.paddingRight) !== null && _initStyle$paddingRig !== void 0 ? _initStyle$paddingRig : ph;
  var t3 = (_initStyle$paddingTop = (_initStyle3 = initStyle) === null || _initStyle3 === void 0 ? void 0 : _initStyle3.paddingTop) !== null && _initStyle$paddingTop !== void 0 ? _initStyle$paddingTop : pv;
  var t4 = (_initStyle$paddingBot = (_initStyle4 = initStyle) === null || _initStyle4 === void 0 ? void 0 : _initStyle4.paddingBottom) !== null && _initStyle$paddingBot !== void 0 ? _initStyle$paddingBot : pv;
  var t5 = (_initStyle$marginLeft = (_initStyle5 = initStyle) === null || _initStyle5 === void 0 ? void 0 : _initStyle5.marginLeft) !== null && _initStyle$marginLeft !== void 0 ? _initStyle$marginLeft : mh;
  var t6 = (_initStyle$marginRigh = (_initStyle6 = initStyle) === null || _initStyle6 === void 0 ? void 0 : _initStyle6.marginRight) !== null && _initStyle$marginRigh !== void 0 ? _initStyle$marginRigh : mh;
  var t7 = (_initStyle$marginTop = (_initStyle7 = initStyle) === null || _initStyle7 === void 0 ? void 0 : _initStyle7.marginTop) !== null && _initStyle$marginTop !== void 0 ? _initStyle$marginTop : mv;
  var t8 = (_initStyle$marginBott = (_initStyle8 = initStyle) === null || _initStyle8 === void 0 ? void 0 : _initStyle8.marginBottom) !== null && _initStyle$marginBott !== void 0 ? _initStyle$marginBott : mv;
  var t9;
  if ($[25] !== initStyle || $[26] !== t1 || $[27] !== t2 || $[28] !== t3 || $[29] !== t4 || $[30] !== t5 || $[31] !== t6 || $[32] !== t7 || $[33] !== t8) {
    t9 = _objectSpread2(_objectSpread2({}, initStyle), {}, {
      paddingLeft: t1,
      paddingRight: t2,
      paddingTop: t3,
      paddingBottom: t4,
      marginLeft: t5,
      marginRight: t6,
      marginTop: t7,
      marginBottom: t8
    });
    $[25] = initStyle;
    $[26] = t1;
    $[27] = t2;
    $[28] = t3;
    $[29] = t4;
    $[30] = t5;
    $[31] = t6;
    $[32] = t7;
    $[33] = t8;
    $[34] = t9;
  } else {
    t9 = $[34];
  }
  var style = t9;
  var color = contains(NamedColors$1, initColor) ? initColor : undefined;
  var t10;
  if ($[35] !== color || $[36] !== initColor || $[37] !== initSx || $[38] !== variant) {
    t10 = variant === "contained" ? _objectSpread2(_objectSpread2({}, initSx), {}, {
      color: "#fff",
      backgroundColor: color ? undefined : initColor,
      "&:hover": {
        color: "#fff",
        backgroundColor: color ? undefined : initColor ? darken(initColor, 0.2) : undefined
      }
    }) : _objectSpread2(_objectSpread2({}, initSx), {}, {
      color: color ? undefined : initColor,
      borderColor: color ? undefined : initColor,
      "&:hover": {
        borderColor: color ? undefined : initColor ? darken(initColor, 0.2) : undefined
      }
    });
    $[35] = color;
    $[36] = initColor;
    $[37] = initSx;
    $[38] = variant;
    $[39] = t10;
  } else {
    t10 = $[39];
  }
  var sx = t10;
  var t11 = startIconMarginLeft !== null && startIconMarginLeft !== void 0 ? startIconMarginLeft : variant !== "text" && children ? "-0.15em" : undefined;
  var t12 = startIconMarginRight !== null && startIconMarginRight !== void 0 ? startIconMarginRight : children ? "0.2em" : undefined;
  var t13 = (_startIconProps = startIconProps) === null || _startIconProps === void 0 ? void 0 : _startIconProps.style;
  var t14;
  if ($[40] !== t11 || $[41] !== t12 || $[42] !== t13) {
    t14 = _objectSpread2({
      marginLeft: t11,
      marginRight: t12
    }, t13);
    $[40] = t11;
    $[41] = t12;
    $[42] = t13;
    $[43] = t14;
  } else {
    t14 = $[43];
  }
  var startIconStyle = t14;
  var t15 = size === "small" ? "0.7rem" : size === "medium" ? undefined : size === "large" ? "1.0rem" : undefined;
  var t16;
  if ($[44] !== t15) {
    t16 = {
      fontSize: t15
    };
    $[44] = t15;
    $[45] = t16;
  } else {
    t16 = $[45];
  }
  var childrenContainerStyle = t16;
  var t17 = endIconMarginLeft !== null && endIconMarginLeft !== void 0 ? endIconMarginLeft : children ? "0.2em" : undefined;
  var t18 = endIconMarginRight !== null && endIconMarginRight !== void 0 ? endIconMarginRight : variant !== "text" && children ? "-0.15em" : undefined;
  var t19 = (_endIconProps = endIconProps) === null || _endIconProps === void 0 ? void 0 : _endIconProps.style;
  var t20;
  if ($[46] !== t17 || $[47] !== t18 || $[48] !== t19) {
    t20 = _objectSpread2({
      marginLeft: t17,
      marginRight: t18
    }, t19);
    $[46] = t17;
    $[47] = t18;
    $[48] = t19;
    $[49] = t20;
  } else {
    t20 = $[49];
  }
  var endIconStyle = t20;
  var t21;
  if ($[50] !== className) {
    t21 = classNames(className, "PButton");
    $[50] = className;
    $[51] = t21;
  } else {
    t21 = $[51];
  }
  var t22;
  if ($[52] !== size || $[53] !== startIcon || $[54] !== startIconProps || $[55] !== startIconStyle) {
    t22 = startIcon && /*#__PURE__*/React.createElement(PIcon, _extends({
      className: "PButton-StartIcon",
      size: size,
      style: startIconStyle
    }, startIconProps), startIcon);
    $[52] = size;
    $[53] = startIcon;
    $[54] = startIconProps;
    $[55] = startIconStyle;
    $[56] = t22;
  } else {
    t22 = $[56];
  }
  var t23;
  if ($[57] !== children || $[58] !== childrenContainerStyle) {
    t23 = /*#__PURE__*/React.createElement("div", {
      style: childrenContainerStyle
    }, children);
    $[57] = children;
    $[58] = childrenContainerStyle;
    $[59] = t23;
  } else {
    t23 = $[59];
  }
  var t24;
  if ($[60] !== endIcon || $[61] !== endIconProps || $[62] !== endIconStyle || $[63] !== size) {
    t24 = endIcon && /*#__PURE__*/React.createElement(PIcon, _extends({
      className: "PButton-EndIcon",
      size: size,
      style: endIconStyle
    }, endIconProps), endIcon);
    $[60] = endIcon;
    $[61] = endIconProps;
    $[62] = endIconStyle;
    $[63] = size;
    $[64] = t24;
  } else {
    t24 = $[64];
  }
  var t25;
  if ($[65] !== t22 || $[66] !== t23 || $[67] !== t24) {
    t25 = /*#__PURE__*/React.createElement(PFlexRowBox, {
      center: true,
      inline: true,
      nowrap: true
    }, t22, t23, t24);
    $[65] = t22;
    $[66] = t23;
    $[67] = t24;
    $[68] = t25;
  } else {
    t25 = $[68];
  }
  var t26;
  if ($[69] !== color || $[70] !== disabled || $[71] !== props || $[72] !== size || $[73] !== style || $[74] !== sx || $[75] !== t21 || $[76] !== t25 || $[77] !== variant) {
    t26 = /*#__PURE__*/React.createElement(Button, _extends({
      variant: variant,
      size: size,
      color: color,
      disabled: disabled,
      className: t21,
      style: style,
      sx: sx
    }, props), t25);
    $[69] = color;
    $[70] = disabled;
    $[71] = props;
    $[72] = size;
    $[73] = style;
    $[74] = sx;
    $[75] = t21;
    $[76] = t25;
    $[77] = variant;
    $[78] = t26;
  } else {
    t26 = $[78];
  }
  var content = t26;
  var t27;
  if ($[79] !== content || $[80] !== tooltip || $[81] !== tooltipPlacement || $[82] !== tooltipProps) {
    t27 = tooltip ? /*#__PURE__*/React.createElement(Tooltip, _extends({
      title: tooltip,
      placement: tooltipPlacement !== null && tooltipPlacement !== void 0 ? tooltipPlacement : "top",
      arrow: true
    }, tooltipProps), content) : content;
    $[79] = content;
    $[80] = tooltip;
    $[81] = tooltipPlacement;
    $[82] = tooltipProps;
    $[83] = t27;
  } else {
    t27 = $[83];
  }
  return t27;
};var _excluded$5 = ["children", "className", "sx", "size", "color", "iconSize", "iconProps", "tooltip", "tooltipPlacement", "tooltipProps", "fullWidth"];
var NamedColors = ['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning'];
var PIconButton = function PIconButton(t0) {
  var _iconProps;
  var $ = c(39);
  var children;
  var className;
  var fullWidth;
  var iconProps;
  var iconSize;
  var initColor;
  var initSx;
  var props;
  var size;
  var t1;
  var tooltip;
  var tooltipProps;
  if ($[0] !== t0) {
    var _t = t0;
    children = _t.children;
    className = _t.className;
    initSx = _t.sx;
    size = _t.size;
    initColor = _t.color;
    iconSize = _t.iconSize;
    iconProps = _t.iconProps;
    tooltip = _t.tooltip;
    t1 = _t.tooltipPlacement;
    tooltipProps = _t.tooltipProps;
    fullWidth = _t.fullWidth;
    props = _objectWithoutProperties(_t, _excluded$5);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = fullWidth;
    $[4] = iconProps;
    $[5] = iconSize;
    $[6] = initColor;
    $[7] = initSx;
    $[8] = props;
    $[9] = size;
    $[10] = t1;
    $[11] = tooltip;
    $[12] = tooltipProps;
  } else {
    children = $[1];
    className = $[2];
    fullWidth = $[3];
    iconProps = $[4];
    iconSize = $[5];
    initColor = $[6];
    initSx = $[7];
    props = $[8];
    size = $[9];
    t1 = $[10];
    tooltip = $[11];
    tooltipProps = $[12];
  }
  var tooltipPlacement = t1 === undefined ? "top" : t1;
  var color = contains(NamedColors, initColor) ? initColor : undefined;
  var t2 = color ? undefined : initColor;
  var t3 = fullWidth ? "100%" : undefined;
  var t4;
  if ($[13] !== initSx || $[14] !== t2 || $[15] !== t3) {
    t4 = _objectSpread2({
      color: t2,
      width: t3
    }, initSx);
    $[13] = initSx;
    $[14] = t2;
    $[15] = t3;
    $[16] = t4;
  } else {
    t4 = $[16];
  }
  var contentSx = t4;
  var t5;
  if ($[17] !== className) {
    t5 = classNames("PIconButton", className);
    $[17] = className;
    $[18] = t5;
  } else {
    t5 = $[18];
  }
  var t6 = iconSize !== null && iconSize !== void 0 ? iconSize : size;
  var t7 = (_iconProps = iconProps) === null || _iconProps === void 0 ? void 0 : _iconProps.className;
  var t8;
  if ($[19] !== t7) {
    t8 = classNames("PIconButton-Icon", t7);
    $[19] = t7;
    $[20] = t8;
  } else {
    t8 = $[20];
  }
  var t9;
  if ($[21] !== children || $[22] !== color || $[23] !== iconProps || $[24] !== t6 || $[25] !== t8) {
    t9 = /*#__PURE__*/React.createElement(PIcon, _extends({}, iconProps, {
      color: color,
      size: t6,
      className: t8
    }), children);
    $[21] = children;
    $[22] = color;
    $[23] = iconProps;
    $[24] = t6;
    $[25] = t8;
    $[26] = t9;
  } else {
    t9 = $[26];
  }
  var t10;
  if ($[27] !== color || $[28] !== contentSx || $[29] !== props || $[30] !== size || $[31] !== t5 || $[32] !== t9) {
    t10 = /*#__PURE__*/React.createElement(IconButton, _extends({
      color: color,
      className: t5,
      size: size,
      sx: contentSx
    }, props), t9);
    $[27] = color;
    $[28] = contentSx;
    $[29] = props;
    $[30] = size;
    $[31] = t5;
    $[32] = t9;
    $[33] = t10;
  } else {
    t10 = $[33];
  }
  var content = t10;
  var t11;
  if ($[34] !== content || $[35] !== tooltip || $[36] !== tooltipPlacement || $[37] !== tooltipProps) {
    t11 = tooltip ? /*#__PURE__*/React.createElement(Tooltip, _extends({
      title: tooltip,
      placement: tooltipPlacement,
      arrow: true
    }, tooltipProps), content) : content;
    $[34] = content;
    $[35] = tooltip;
    $[36] = tooltipPlacement;
    $[37] = tooltipProps;
    $[38] = t11;
  } else {
    t11 = $[38];
  }
  return t11;
};var _makeObjectValue = function makeObjectValue(value) {
  return Object.keys(value).map(function (key) {
    var v = value[key];
    if (v != null) {
      if (v instanceof Text) {
        return "".concat(key, ": {").concat(v.data, "}");
      } else if (typeof v === 'string') {
        return "".concat(key, ": \"").concat(v, "\"");
      } else if (_typeof(v) === 'object') {
        return "".concat(key, ": {").concat(_makeObjectValue(v), "}");
      } else {
        return "".concat(key, ": {").concat(v, "}");
      }
    }
  }).filter(function (v) {
    return v != null;
  }).join(', ');
};var _templateObject;
var _excluded$4 = ["className", "name", "content", "props"];
var PReactCode = function PReactCode(t0) {
  var $ = c(27);
  var boxProps;
  var className;
  var content;
  var name;
  var props;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    name = _t.name;
    content = _t.content;
    props = _t.props;
    boxProps = _objectWithoutProperties(_t, _excluded$4);
    $[0] = t0;
    $[1] = boxProps;
    $[2] = className;
    $[3] = content;
    $[4] = name;
    $[5] = props;
  } else {
    boxProps = $[1];
    className = $[2];
    content = $[3];
    name = $[4];
    props = $[5];
  }
  var T0;
  var t1;
  var t2;
  var t3;
  var t4;
  if ($[6] !== boxProps || $[7] !== className || $[8] !== name || $[9] !== props) {
    var finalProps = props ? Object.entries(props).reduce(_temp, []) : undefined;
    T0 = StyledBox;
    if ($[15] !== className) {
      t1 = classNames("PReactCode", className);
      $[15] = className;
      $[16] = t1;
    } else {
      t1 = $[16];
    }
    t2 = boxProps;
    t3 = "<".concat(name);
    t4 = finalProps === null || finalProps === void 0 ? void 0 : finalProps.map(_temp2);
    $[6] = boxProps;
    $[7] = className;
    $[8] = name;
    $[9] = props;
    $[10] = T0;
    $[11] = t1;
    $[12] = t2;
    $[13] = t3;
    $[14] = t4;
  } else {
    T0 = $[10];
    t1 = $[11];
    t2 = $[12];
    t3 = $[13];
    t4 = $[14];
  }
  var t5;
  if ($[17] !== content || $[18] !== name) {
    t5 = content ? /*#__PURE__*/React.createElement(React.Fragment, null, ">", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "yellow"
      }
    }, "".concat(content)), "</".concat(name, ">")) : " />";
    $[17] = content;
    $[18] = name;
    $[19] = t5;
  } else {
    t5 = $[19];
  }
  var t6;
  if ($[20] !== T0 || $[21] !== t1 || $[22] !== t2 || $[23] !== t3 || $[24] !== t4 || $[25] !== t5) {
    t6 = /*#__PURE__*/React.createElement(T0, _extends({
      className: t1
    }, t2), t3, t4, t5);
    $[20] = T0;
    $[21] = t1;
    $[22] = t2;
    $[23] = t3;
    $[24] = t4;
    $[25] = t5;
    $[26] = t6;
  } else {
    t6 = $[26];
  }
  return t6;
};

/********************************************************************************************************************
 * Styled Component
 * ******************************************************************************************************************/

var StyledBox = styled(Box)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  font-size: 13px;\n  border: 1px solid black;\n  background-color: black;\n  color: #fff;\n  padding: 10px 13px;\n  opacity: 0.7;\n"])));
function _temp(acc, t0) {
  var _t2 = _slicedToArray(t0, 2),
    key = _t2[0],
    value = _t2[1];
  if (value == null) {
    return acc;
  }
  var formattedValue;
  if (value instanceof Text) {
    formattedValue = "{".concat(value.data, "}");
  } else {
    if (typeof value === "string") {
      formattedValue = "\"".concat(value, "\"");
    } else {
      if (_typeof(value) === "object") {
        formattedValue = "{".concat(_makeObjectValue(value), "}");
      } else {
        formattedValue = "{".concat(value, "}");
      }
    }
  }
  acc.push({
    key: key,
    value: formattedValue
  });
  return acc;
}
function _temp2(info) {
  return /*#__PURE__*/React.createElement("span", {
    key: info.key
  }, "\xA0", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "bold"
    }
  }, info.key), "=", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "yellow"
    }
  }, info.value));
}var _excluded$3 = ["className", "row", "spacing", "alignCenter", "justifyCenter", "alignItems", "justifyContent", "gap"];
var PFlex = function PFlex(t0) {
  var $ = c(19);
  var alignCenter;
  var alignItems;
  var className;
  var gap;
  var justifyCenter;
  var justifyContent;
  var props;
  var spacing;
  var t1;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    t1 = _t.row;
    spacing = _t.spacing;
    alignCenter = _t.alignCenter;
    justifyCenter = _t.justifyCenter;
    alignItems = _t.alignItems;
    justifyContent = _t.justifyContent;
    gap = _t.gap;
    props = _objectWithoutProperties(_t, _excluded$3);
    $[0] = t0;
    $[1] = alignCenter;
    $[2] = alignItems;
    $[3] = className;
    $[4] = gap;
    $[5] = justifyCenter;
    $[6] = justifyContent;
    $[7] = props;
    $[8] = spacing;
    $[9] = t1;
  } else {
    alignCenter = $[1];
    alignItems = $[2];
    className = $[3];
    gap = $[4];
    justifyCenter = $[5];
    justifyContent = $[6];
    props = $[7];
    spacing = $[8];
    t1 = $[9];
  }
  var row = t1 === undefined ? false : t1;
  var t2;
  if ($[10] !== className) {
    t2 = classNames("PFlex", className);
    $[10] = className;
    $[11] = t2;
  } else {
    t2 = $[11];
  }
  var t3 = row ? "row" : "column";
  var t4 = alignItems !== null && alignItems !== void 0 ? alignItems : alignCenter ? "center" : undefined;
  var t5 = justifyContent !== null && justifyContent !== void 0 ? justifyContent : justifyCenter ? "center" : undefined;
  var t6 = gap !== null && gap !== void 0 ? gap : spacing;
  var t7;
  if ($[12] !== props || $[13] !== t2 || $[14] !== t3 || $[15] !== t4 || $[16] !== t5 || $[17] !== t6) {
    t7 = /*#__PURE__*/React.createElement(PBox, _extends({
      className: t2,
      component: "div",
      display: "flex",
      flexDirection: t3,
      alignItems: t4,
      justifyContent: t5,
      gap: t6
    }, props));
    $[12] = props;
    $[13] = t2;
    $[14] = t3;
    $[15] = t4;
    $[16] = t5;
    $[17] = t6;
    $[18] = t7;
  } else {
    t7 = $[18];
  }
  return t7;
};var _excluded$2 = ["className", "spacing", "center", "centerVertical", "alignItems", "justifyContent", "gap"];
var PFlexColumnBox = function PFlexColumnBox(t0) {
  var $ = c(17);
  var alignItems;
  var center;
  var centerVertical;
  var className;
  var gap;
  var justifyContent;
  var props;
  var spacing;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    spacing = _t.spacing;
    center = _t.center;
    centerVertical = _t.centerVertical;
    alignItems = _t.alignItems;
    justifyContent = _t.justifyContent;
    gap = _t.gap;
    props = _objectWithoutProperties(_t, _excluded$2);
    $[0] = t0;
    $[1] = alignItems;
    $[2] = center;
    $[3] = centerVertical;
    $[4] = className;
    $[5] = gap;
    $[6] = justifyContent;
    $[7] = props;
    $[8] = spacing;
  } else {
    alignItems = $[1];
    center = $[2];
    centerVertical = $[3];
    className = $[4];
    gap = $[5];
    justifyContent = $[6];
    props = $[7];
    spacing = $[8];
  }
  var t1;
  if ($[9] !== className) {
    t1 = classNames("PFlexColumnBox", className);
    $[9] = className;
    $[10] = t1;
  } else {
    t1 = $[10];
  }
  var t2 = alignItems !== null && alignItems !== void 0 ? alignItems : center ? "center" : undefined;
  var t3 = justifyContent !== null && justifyContent !== void 0 ? justifyContent : centerVertical ? "center" : undefined;
  var t4 = gap !== null && gap !== void 0 ? gap : spacing;
  var t5;
  if ($[11] !== props || $[12] !== t1 || $[13] !== t2 || $[14] !== t3 || $[15] !== t4) {
    t5 = /*#__PURE__*/React.createElement(PBox, _extends({
      className: t1,
      component: "div",
      display: "flex",
      flexDirection: "column",
      alignItems: t2,
      justifyContent: t3,
      gap: t4
    }, props));
    $[11] = props;
    $[12] = t1;
    $[13] = t2;
    $[14] = t3;
    $[15] = t4;
    $[16] = t5;
  } else {
    t5 = $[16];
  }
  return t5;
};var _excluded$1 = ["className", "row", "span", "inline", "center", "centerJustifyContent", "gap", "spacing", "flexWrap", "wrap", "alignItems", "justifyContent"];
var PStack = function PStack(t0) {
  var $ = c(26);
  var alignItems;
  var center;
  var centerJustifyContent;
  var className;
  var flexWrap;
  var gap;
  var inline;
  var justifyContent;
  var props;
  var row;
  var spacing;
  var span;
  var wrap;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    row = _t.row;
    span = _t.span;
    inline = _t.inline;
    center = _t.center;
    centerJustifyContent = _t.centerJustifyContent;
    gap = _t.gap;
    spacing = _t.spacing;
    flexWrap = _t.flexWrap;
    wrap = _t.wrap;
    alignItems = _t.alignItems;
    justifyContent = _t.justifyContent;
    props = _objectWithoutProperties(_t, _excluded$1);
    $[0] = t0;
    $[1] = alignItems;
    $[2] = center;
    $[3] = centerJustifyContent;
    $[4] = className;
    $[5] = flexWrap;
    $[6] = gap;
    $[7] = inline;
    $[8] = justifyContent;
    $[9] = props;
    $[10] = row;
    $[11] = spacing;
    $[12] = span;
    $[13] = wrap;
  } else {
    alignItems = $[1];
    center = $[2];
    centerJustifyContent = $[3];
    className = $[4];
    flexWrap = $[5];
    gap = $[6];
    inline = $[7];
    justifyContent = $[8];
    props = $[9];
    row = $[10];
    spacing = $[11];
    span = $[12];
    wrap = $[13];
  }
  var t1;
  if ($[14] !== className) {
    t1 = classNames("PStack", className);
    $[14] = className;
    $[15] = t1;
  } else {
    t1 = $[15];
  }
  var t2 = span ? "span" : "div";
  var t3 = inline ? "inline-flex" : "flex";
  var t4 = row ? "row" : "column";
  var t5 = alignItems !== null && alignItems !== void 0 ? alignItems : center ? "center" : undefined;
  var t6 = justifyContent !== null && justifyContent !== void 0 ? justifyContent : centerJustifyContent ? "center" : undefined;
  var t7 = gap !== null && gap !== void 0 ? gap : spacing;
  var t8 = flexWrap !== null && flexWrap !== void 0 ? flexWrap : wrap ? "wrap" : "nowrap";
  var t9;
  if ($[16] !== props || $[17] !== t1 || $[18] !== t2 || $[19] !== t3 || $[20] !== t4 || $[21] !== t5 || $[22] !== t6 || $[23] !== t7 || $[24] !== t8) {
    t9 = /*#__PURE__*/React.createElement(PBox, _extends({
      className: t1,
      component: t2,
      display: t3,
      flexDirection: t4,
      alignItems: t5,
      justifyContent: t6,
      gap: t7,
      flexWrap: t8
    }, props));
    $[16] = props;
    $[17] = t1;
    $[18] = t2;
    $[19] = t3;
    $[20] = t4;
    $[21] = t5;
    $[22] = t6;
    $[23] = t7;
    $[24] = t8;
    $[25] = t9;
  } else {
    t9 = $[25];
  }
  return t9;
};var _excluded = ["text", "options", "children", "onCopy"];
var PCopyToClipboard = function PCopyToClipboard(_ref) {
  var text = _ref.text,
    options = _ref.options,
    children = _ref.children,
    onCopy = _ref.onCopy,
    props = _objectWithoutProperties(_ref, _excluded);
  /********************************************************************************************************************
   * Event Handler
   * ******************************************************************************************************************/

  var handleClick = function handleClick(event) {
    var elem = React.Children.only(children);
    var result = copy(text, options);
    onCopy === null || onCopy === void 0 || onCopy(text, result);
    if (elem && elem.props && typeof elem.props.onClick === 'function') {
      elem.props.onClick(event);
    }
  };

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  var elem = React.Children.only(children);
  return /*#__PURE__*/React.cloneElement(elem, _objectSpread2(_objectSpread2({}, props), {}, {
    onClick: handleClick
  }));
};export{PBox,PBusinessNoText,PButton,PCopyToClipboard,PDateText,PEmailText,PFlex,PFlexColumnBox,PFlexRowBox,PHelper,PIcon,PIconButton,PIconText,PNumberText,PPersonalNoText,PReactCode,PStack,PTelText,PText,PWonText};