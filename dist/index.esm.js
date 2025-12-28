import {c}from'react/compiler-runtime';import React,{useRef,useState,useEffectEvent,useLayoutEffect}from'react';import {Icon,Tooltip,Box,useTheme,Typography,styled,darken,Button,IconButton}from'@mui/material';import classNames from'classnames';import {contains}from'@pdg/compare';import {useChanged}from'@pdg/react-hook';import {formatBusinessNo,formatNumber,formatPersonalNo,formatTelNo}from'@pdg/formatting';import dayjs from'dayjs';import copy from'copy-to-clipboard';function _arrayLikeToArray(r, a) {
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
var NamedFontSize = ['large', 'medium', 'small'];
var NamedColor$2 = ['inherit', 'action', 'disabled', 'primary', 'secondary', 'error', 'info', 'success', 'warning'];
var PIcon = function PIcon(t0) {
  var $ = c(48);
  var InitChildren;
  var className;
  var color;
  var initStyle;
  var props;
  var ref;
  var size;
  var t1;
  var tooltip;
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
    t1 = _t.tooltipPlacement;
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
    $[8] = t1;
    $[9] = tooltip;
    $[10] = tooltipProps;
  } else {
    InitChildren = $[1];
    className = $[2];
    color = $[3];
    initStyle = $[4];
    props = $[5];
    ref = $[6];
    size = $[7];
    t1 = $[8];
    tooltip = $[9];
    tooltipProps = $[10];
  }
  var tooltipPlacement = t1 === undefined ? "top" : t1;
  var innerRef = useRef(null);
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    styleFontSize = _useState2[0],
    setStyleFontSize = _useState2[1];
  var iconFontSize = contains(NamedFontSize, size) ? size : undefined;
  var t2;
  if ($[11] !== iconFontSize || $[12] !== size) {
    t2 = function t2() {
      var el = innerRef.current;
      if (el && iconFontSize === undefined) {
        var sizeValue = undefined;
        var sizeUnit = undefined;
        if (size === "inherit") {
          var parentSize = getParentSize(el);
          if (parentSize) {
            sizeValue = parentSize.sizeValue;
            sizeUnit = parentSize.sizeUnit;
          }
        } else {
          if (typeof size === "number") {
            sizeValue = size;
            sizeUnit = "px";
          } else {
            if (typeof size === "string") {
              sizeValue = parseFloat(size);
              sizeUnit = size.replace(sizeValue.toString(), "");
            }
          }
        }
        if (sizeValue && sizeUnit) {
          setStyleFontSize(finalStyleFontSize(sizeValue, sizeUnit, el));
        }
      } else {
        setStyleFontSize(undefined);
      }
    };
    $[11] = iconFontSize;
    $[12] = size;
    $[13] = t2;
  } else {
    t2 = $[13];
  }
  var resetStyleFontSize = t2;
  var t3;
  if ($[14] !== resetStyleFontSize) {
    t3 = function t3() {
      return resetStyleFontSize();
    };
    $[14] = resetStyleFontSize;
    $[15] = t3;
  } else {
    t3 = $[15];
  }
  var resetStyleFontSizeEffectEvent = useEffectEvent(t3);
  var t4;
  if ($[16] !== size) {
    t4 = [size];
    $[16] = size;
    $[17] = t4;
  } else {
    t4 = $[17];
  }
  if (useChanged(t4)) {
    if (contains(NamedFontSize, size)) {
      setStyleFontSize(undefined);
    }
  }
  var t5;
  if ($[18] !== resetStyleFontSizeEffectEvent || $[19] !== size) {
    t5 = function t5() {
      if (!contains(NamedFontSize, size)) {
        resetStyleFontSizeEffectEvent();
      }
    };
    $[18] = resetStyleFontSizeEffectEvent;
    $[19] = size;
    $[20] = t5;
  } else {
    t5 = $[20];
  }
  var t6;
  if ($[21] !== size) {
    t6 = [size];
    $[21] = size;
    $[22] = t6;
  } else {
    t6 = $[22];
  }
  useLayoutEffect(t5, t6);
  var t7;
  if ($[23] !== ref || $[24] !== resetStyleFontSize) {
    t7 = function t7(r) {
      if (ref) {
        if (typeof ref === "function") {
          ref(r);
        } else {
          ref.current = r;
        }
      }
      innerRef.current = r;
      resetStyleFontSize();
    };
    $[23] = ref;
    $[24] = resetStyleFontSize;
    $[25] = t7;
  } else {
    t7 = $[25];
  }
  var contentIconRef = t7;
  var t8;
  if (InitChildren === undefined) {
    t8 = null;
  } else {
    var finalColor;
    var style;
    if ($[26] !== color || $[27] !== initStyle || $[28] !== styleFontSize) {
      style = _objectSpread2({}, initStyle);
      if (styleFontSize != null) {
        style.fontSize = styleFontSize;
      }
      finalColor = contains(NamedColor$2, color) ? color : undefined;
      if (finalColor === undefined && color !== undefined) {
        style.color = color;
      }
      $[26] = color;
      $[27] = initStyle;
      $[28] = styleFontSize;
      $[29] = finalColor;
      $[30] = style;
    } else {
      finalColor = $[29];
      style = $[30];
    }
    var _t2;
    if ($[31] !== className) {
      _t2 = classNames("PIcon", className);
      $[31] = className;
      $[32] = _t2;
    } else {
      _t2 = $[32];
    }
    var t10;
    if ($[33] !== InitChildren) {
      t10 = typeof InitChildren === "string" ? InitChildren.replace(/[A-Z]/g, _temp$1) : /*#__PURE__*/React.createElement(InitChildren, null);
      $[33] = InitChildren;
      $[34] = t10;
    } else {
      t10 = $[34];
    }
    var t11;
    if ($[35] !== contentIconRef || $[36] !== finalColor || $[37] !== iconFontSize || $[38] !== props || $[39] !== style || $[40] !== t10 || $[41] !== _t2) {
      t11 = /*#__PURE__*/React.createElement(Icon, _extends({
        ref: contentIconRef,
        fontSize: iconFontSize,
        color: finalColor,
        className: _t2,
        style: style
      }, props), t10);
      $[35] = contentIconRef;
      $[36] = finalColor;
      $[37] = iconFontSize;
      $[38] = props;
      $[39] = style;
      $[40] = t10;
      $[41] = _t2;
      $[42] = t11;
    } else {
      t11 = $[42];
    }
    t8 = t11;
  }
  var content = t8;
  var t9;
  if ($[43] !== content || $[44] !== tooltip || $[45] !== tooltipPlacement || $[46] !== tooltipProps) {
    t9 = !content ? null : tooltip ? /*#__PURE__*/React.createElement(Tooltip, _extends({
      title: tooltip,
      placement: tooltipPlacement,
      arrow: true
    }, tooltipProps), content) : content;
    $[43] = content;
    $[44] = tooltip;
    $[45] = tooltipPlacement;
    $[46] = tooltipProps;
    $[47] = t9;
  } else {
    t9 = $[47];
  }
  return t9;
};
function _temp$1(letter, idx) {
  return "".concat(idx > 0 ? "_" : "").concat(letter.toLowerCase());
}var _excluded$i = ["ph", "pv", "mh", "mv", "fullSize", "fullWidth", "fullHeight"];
var PBox = function PBox(t0) {
  var $ = c(20);
  var fullHeight;
  var fullSize;
  var fullWidth;
  var mh;
  var mv;
  var otherProps;
  var ph;
  var pv;
  if ($[0] !== t0) {
    var _t = t0;
    ph = _t.ph;
    pv = _t.pv;
    mh = _t.mh;
    mv = _t.mv;
    fullSize = _t.fullSize;
    fullWidth = _t.fullWidth;
    fullHeight = _t.fullHeight;
    otherProps = _objectWithoutProperties(_t, _excluded$i);
    $[0] = t0;
    $[1] = fullHeight;
    $[2] = fullSize;
    $[3] = fullWidth;
    $[4] = mh;
    $[5] = mv;
    $[6] = otherProps;
    $[7] = ph;
    $[8] = pv;
  } else {
    fullHeight = $[1];
    fullSize = $[2];
    fullWidth = $[3];
    mh = $[4];
    mv = $[5];
    otherProps = $[6];
    ph = $[7];
    pv = $[8];
  }
  var newProps;
  if ($[9] !== fullHeight || $[10] !== fullSize || $[11] !== fullWidth || $[12] !== mh || $[13] !== mv || $[14] !== otherProps || $[15] !== ph || $[16] !== pv) {
    newProps = _objectSpread2({}, otherProps);
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
      newProps.width = "100%";
    }
    if (fullHeight || fullSize) {
      newProps.height = "100%";
    }
    $[9] = fullHeight;
    $[10] = fullSize;
    $[11] = fullWidth;
    $[12] = mh;
    $[13] = mv;
    $[14] = otherProps;
    $[15] = ph;
    $[16] = pv;
    $[17] = newProps;
  } else {
    newProps = $[17];
  }
  var props = newProps;
  var t1;
  if ($[18] !== props) {
    t1 = /*#__PURE__*/React.createElement(Box, props);
    $[18] = props;
    $[19] = t1;
  } else {
    t1 = $[19];
  }
  return t1;
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
  var initStyle;
  var opacity;
  var position;
  var props;
  var size;
  var sx;
  var t1;
  var text;
  if ($[0] !== t0) {
    var _t = t0;
    className = _t.className;
    initStyle = _t.style;
    sx = _t.sx;
    text = _t.text;
    t1 = _t.icon;
    size = _t.size;
    position = _t.position;
    opacity = _t.opacity;
    children = _t.children;
    props = _objectWithoutProperties(_t, _excluded$g);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = initStyle;
    $[4] = opacity;
    $[5] = position;
    $[6] = props;
    $[7] = size;
    $[8] = sx;
    $[9] = t1;
    $[10] = text;
  } else {
    children = $[1];
    className = $[2];
    initStyle = $[3];
    opacity = $[4];
    position = $[5];
    props = $[6];
    size = $[7];
    sx = $[8];
    t1 = $[9];
    text = $[10];
  }
  var icon = t1 === undefined ? "HelpOutline" : t1;
  var existsChildren = children != null;
  var t2;
  bb0: {
    if (! /*#__PURE__*/React.isValidElement(text) && !["string", "number"].includes(_typeof(text))) {
      t2 = null;
      break bb0;
    }
    if (typeof text === "string" && text === "") {
      t2 = null;
      break bb0;
    }
    var style;
    if ($[11] !== existsChildren || $[12] !== opacity || $[13] !== position) {
      style = {
        opacity: opacity
      };
      if (existsChildren) {
        if (position === "left") {
          style.marginRight = "0.1em";
        } else {
          style.marginLeft = "0.1em";
        }
      }
      $[11] = existsChildren;
      $[12] = opacity;
      $[13] = position;
      $[14] = style;
    } else {
      style = $[14];
    }
    var _t2;
    if ($[15] !== className) {
      _t2 = classNames("PHelper-Icon", className);
      $[15] = className;
      $[16] = _t2;
    } else {
      _t2 = $[16];
    }
    var t4;
    if ($[17] !== initStyle || $[18] !== style) {
      t4 = _objectSpread2(_objectSpread2({}, style), initStyle);
      $[17] = initStyle;
      $[18] = style;
      $[19] = t4;
    } else {
      t4 = $[19];
    }
    var t5;
    if ($[20] !== icon || $[21] !== props || $[22] !== size || $[23] !== sx || $[24] !== _t2 || $[25] !== t4 || $[26] !== text) {
      t5 = /*#__PURE__*/React.createElement(PIcon, _extends({
        className: _t2,
        size: size,
        style: t4,
        sx: sx,
        tooltip: text
      }, props), icon);
      $[20] = icon;
      $[21] = props;
      $[22] = size;
      $[23] = sx;
      $[24] = _t2;
      $[25] = t4;
      $[26] = text;
      $[27] = t5;
    } else {
      t5 = $[27];
    }
    t2 = t5;
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
};var _excluded$f = ["display", "line", "center", "className", "size", "color", "helper", "ph", "pv", "mh", "mv", "fullWidth", "fullHeight", "fullSize", "children"];
var PText = function PText(t0) {
  var _initProps;
  var $ = c(46);
  var center;
  var children;
  var className;
  var color;
  var fullHeight;
  var fullSize;
  var fullWidth;
  var helper;
  var initProps;
  var line;
  var mh;
  var mv;
  var ph;
  var pv;
  var size;
  var t1;
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
    mh = _t.mh;
    mv = _t.mv;
    fullWidth = _t.fullWidth;
    fullHeight = _t.fullHeight;
    fullSize = _t.fullSize;
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
    $[8] = helper;
    $[9] = initProps;
    $[10] = line;
    $[11] = mh;
    $[12] = mv;
    $[13] = ph;
    $[14] = pv;
    $[15] = size;
    $[16] = t1;
  } else {
    center = $[1];
    children = $[2];
    className = $[3];
    color = $[4];
    fullHeight = $[5];
    fullSize = $[6];
    fullWidth = $[7];
    helper = $[8];
    initProps = $[9];
    line = $[10];
    mh = $[11];
    mv = $[12];
    ph = $[13];
    pv = $[14];
    size = $[15];
    t1 = $[16];
  }
  var display = t1 === undefined ? "inline-block" : t1;
  var theme = useTheme();
  var t2 = (_initProps = initProps) === null || _initProps === void 0 ? void 0 : _initProps.style;
  var newTextProps;
  if ($[17] !== center || $[18] !== color || $[19] !== fullHeight || $[20] !== fullSize || $[21] !== fullWidth || $[22] !== initProps || $[23] !== mh || $[24] !== mv || $[25] !== ph || $[26] !== pv || $[27] !== size || $[28] !== t2 || $[29] !== theme) {
    newTextProps = _objectSpread2(_objectSpread2({}, initProps), {}, {
      style: _objectSpread2({}, t2)
    });
    if (size) {
      bb0: switch (size) {
        case "inherit":
          {
            newTextProps.style.fontSize = "inherit";
            break bb0;
          }
        case "small":
          {
            newTextProps.style.fontSize = "0.75rem";
            break bb0;
          }
        case "medium":
          {
            break bb0;
          }
        case "large":
          {
            newTextProps.style.fontSize = "1.2rem";
            break bb0;
          }
        default:
          {
            newTextProps.style.fontSize = size;
          }
      }
    }
    bb1: switch (color) {
      case "primary":
        {
          newTextProps.style.color = theme.palette.primary.main;
          break bb1;
        }
      case "secondary":
        {
          newTextProps.style.color = theme.palette.secondary.main;
          break bb1;
        }
      case "error":
        {
          newTextProps.style.color = theme.palette.error.main;
          break bb1;
        }
      case "warning":
        {
          newTextProps.style.color = theme.palette.warning.main;
          break bb1;
        }
      case "info":
        {
          newTextProps.style.color = theme.palette.info.main;
          break bb1;
        }
      case "success":
        {
          newTextProps.style.color = theme.palette.success.main;
          break bb1;
        }
      default:
        {
          newTextProps.style.color = color;
        }
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
      newTextProps.textAlign = "center";
    }
    if (fullWidth || fullSize) {
      newTextProps.width = "100%";
    }
    if (fullHeight || fullSize) {
      newTextProps.height = "100%";
    }
    $[17] = center;
    $[18] = color;
    $[19] = fullHeight;
    $[20] = fullSize;
    $[21] = fullWidth;
    $[22] = initProps;
    $[23] = mh;
    $[24] = mv;
    $[25] = ph;
    $[26] = pv;
    $[27] = size;
    $[28] = t2;
    $[29] = theme;
    $[30] = newTextProps;
  } else {
    newTextProps = $[30];
  }
  var props = newTextProps;
  var t3;
  bb2: {
    var t4 = line ? "block" : display;
    var t5;
    if ($[31] !== className) {
      t5 = classNames("PText", className);
      $[31] = className;
      $[32] = t5;
    } else {
      t5 = $[32];
    }
    var t6;
    if ($[33] !== children || $[34] !== props || $[35] !== t4 || $[36] !== t5) {
      t6 = /*#__PURE__*/React.createElement(Typography, _extends({
        display: t4,
        className: t5
      }, props), children);
      $[33] = children;
      $[34] = props;
      $[35] = t4;
      $[36] = t5;
      $[37] = t6;
    } else {
      t6 = $[37];
    }
    var content = t6;
    if (!helper) {
      t3 = content;
      break bb2;
    }
    if (_typeof(helper) === "object" && Object.keys(helper).includes("text")) {
      var t7 = helper;
      var t8;
      if ($[38] !== color || $[39] !== content || $[40] !== size || $[41] !== t7) {
        t8 = /*#__PURE__*/React.createElement(PHelper, _extends({
          size: size,
          color: color
        }, t7), content);
        $[38] = color;
        $[39] = content;
        $[40] = size;
        $[41] = t7;
        $[42] = t8;
      } else {
        t8 = $[42];
      }
      t3 = t8;
    } else {
      var _t2 = helper;
      var _t3;
      if ($[43] !== content || $[44] !== _t2) {
        _t3 = /*#__PURE__*/React.createElement(PHelper, {
          text: _t2
        }, content);
        $[43] = content;
        $[44] = _t2;
        $[45] = _t3;
      } else {
        _t3 = $[45];
      }
      t3 = _t3;
    }
  }
  return t3;
};var _excluded$e = ["children", "value", "className"];
var PBusinessNoText = function PBusinessNoText(t0) {
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
  var finalValue = children != null ? children : value != null ? value : "";
  var t1;
  if ($[5] !== finalValue) {
    t1 = formatBusinessNo(finalValue).substring(0, 12);
    $[5] = finalValue;
    $[6] = t1;
  } else {
    t1 = $[6];
  }
  var content = t1;
  var t2;
  if ($[7] !== className || $[8] !== content || $[9] !== props) {
    t2 = content ? /*#__PURE__*/React.createElement(PText, _extends({
      className: classNames("PBusinessNoText", className)
    }, props), content) : null;
    $[7] = className;
    $[8] = content;
    $[9] = props;
    $[10] = t2;
  } else {
    t2 = $[10];
  }
  return t2;
};var _excluded$d = ["children", "value", "type", "className", "dateClassName", "dateStyle", "dateOpacity", "dateSeparator", "timeClassName", "timeStyle", "timeOpacity", "twoLine"];
var PDateText = function PDateText(t0) {
  var _initTimeStyle, _initTimeStyle$opacit, _initTimeStyle2;
  var $ = c(38);
  var children;
  var className;
  var dateClassName;
  var dateOpacity;
  var initDateStyle;
  var initTimeStyle;
  var initValue;
  var props;
  var t1;
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
    t1 = _t.dateSeparator;
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
    $[5] = initDateStyle;
    $[6] = initTimeStyle;
    $[7] = initValue;
    $[8] = props;
    $[9] = t1;
    $[10] = timeClassName;
    $[11] = timeOpacity;
    $[12] = twoLine;
    $[13] = type;
  } else {
    children = $[1];
    className = $[2];
    dateClassName = $[3];
    dateOpacity = $[4];
    initDateStyle = $[5];
    initTimeStyle = $[6];
    initValue = $[7];
    props = $[8];
    t1 = $[9];
    timeClassName = $[10];
    timeOpacity = $[11];
    twoLine = $[12];
    type = $[13];
  }
  var dateSeparator = t1 === undefined ? "-" : t1;
  var value = children !== null && children !== void 0 ? children : initValue;
  var dateFormat = "YYYY".concat(dateSeparator, "MM").concat(dateSeparator, "DD");
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
  var dateStyle;
  if ($[18] !== dateOpacity || $[19] !== initDateStyle) {
    dateStyle = _objectSpread2({}, initDateStyle);
    if (dateOpacity !== undefined) {
      dateStyle.opacity = dateOpacity;
    }
    $[18] = dateOpacity;
    $[19] = initDateStyle;
    $[20] = dateStyle;
  } else {
    dateStyle = $[20];
  }
  var t2 = ((_initTimeStyle = initTimeStyle) === null || _initTimeStyle === void 0 ? void 0 : _initTimeStyle.opacity) === undefined && timeOpacity === undefined ? 0.6 : (_initTimeStyle$opacit = (_initTimeStyle2 = initTimeStyle) === null || _initTimeStyle2 === void 0 ? void 0 : _initTimeStyle2.opacity) !== null && _initTimeStyle$opacit !== void 0 ? _initTimeStyle$opacit : timeOpacity;
  var timeStyle;
  if ($[21] !== initTimeStyle || $[22] !== t2 || $[23] !== twoLine) {
    timeStyle = _objectSpread2(_objectSpread2({}, initTimeStyle), {}, {
      opacity: t2
    });
    if (!twoLine) {
      timeStyle.marginLeft = "0.3em";
    }
    $[21] = initTimeStyle;
    $[22] = t2;
    $[23] = twoLine;
    $[24] = timeStyle;
  } else {
    timeStyle = $[24];
  }
  var t3;
  if ($[25] !== dateStyle || $[26] !== timeStyle || $[27] !== values) {
    t3 = {
      values: values,
      dateStyle: dateStyle,
      timeStyle: timeStyle
    };
    $[25] = dateStyle;
    $[26] = timeStyle;
    $[27] = values;
    $[28] = t3;
  } else {
    t3 = $[28];
  }
  var _t2 = t3,
    values_0 = _t2.values,
    dateStyle_0 = _t2.dateStyle,
    timeStyle_0 = _t2.timeStyle;
  var t4;
  if ($[29] !== className || $[30] !== dateClassName || $[31] !== dateStyle_0 || $[32] !== props || $[33] !== timeClassName || $[34] !== timeStyle_0 || $[35] !== twoLine || $[36] !== values_0) {
    t4 = values_0 ? /*#__PURE__*/React.createElement(PText, _extends({
      className: classNames("PDateText", className)
    }, props), /*#__PURE__*/React.createElement("span", {
      className: classNames("PDateText-Date", dateClassName),
      style: dateStyle_0
    }, values_0[0]), twoLine && values_0.length > 1 && /*#__PURE__*/React.createElement("br", null), values_0.length > 1 ? /*#__PURE__*/React.createElement("span", {
      className: classNames("PDateText-Time", timeClassName),
      style: timeStyle_0
    }, values_0[1]) : null) : null;
    $[29] = className;
    $[30] = dateClassName;
    $[31] = dateStyle_0;
    $[32] = props;
    $[33] = timeClassName;
    $[34] = timeStyle_0;
    $[35] = twoLine;
    $[36] = values_0;
    $[37] = t4;
  } else {
    t4 = $[37];
  }
  return t4;
};var _excluded$c = ["ref", "children", "value", "className", "color"];
var PEmailText = function PEmailText(t0) {
  var $ = c(13);
  var children;
  var className;
  var initValue;
  var props;
  var ref;
  var t1;
  if ($[0] !== t0) {
    var _t = t0;
    ref = _t.ref;
    children = _t.children;
    initValue = _t.value;
    className = _t.className;
    t1 = _t.color;
    props = _objectWithoutProperties(_t, _excluded$c);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = initValue;
    $[4] = props;
    $[5] = ref;
    $[6] = t1;
  } else {
    children = $[1];
    className = $[2];
    initValue = $[3];
    props = $[4];
    ref = $[5];
    t1 = $[6];
  }
  var color = t1 === undefined ? "primary" : t1;
  var value = children !== null && children !== void 0 ? children : initValue;
  var t2;
  if ($[7] !== className || $[8] !== color || $[9] !== props || $[10] !== ref || $[11] !== value) {
    t2 = value ? /*#__PURE__*/React.createElement("a", {
      ref: ref,
      href: "mailto:".concat(value),
      className: classNames("PEmailText", className)
    }, /*#__PURE__*/React.createElement(PText, _extends({
      color: color
    }, props), value)) : null;
    $[7] = className;
    $[8] = color;
    $[9] = props;
    $[10] = ref;
    $[11] = value;
    $[12] = t2;
  } else {
    t2 = $[12];
  }
  return t2;
};var _excluded$b = ["children", "className", "color", "icon", "size", "iconMarginRight", "iconProps", "textProps", "helper", "ph", "pv"];
var PIconText = function PIconText(t0) {
  var _textProps, _textProps$size, _textProps2, _textProps$color, _textProps3;
  var $ = c(40);
  var children;
  var className;
  var color;
  var helper;
  var icon;
  var iconMarginRight;
  var initIconProps;
  var otherProps;
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
    $[9] = ph;
    $[10] = pv;
    $[11] = size;
    $[12] = textProps;
  } else {
    children = $[1];
    className = $[2];
    color = $[3];
    helper = $[4];
    icon = $[5];
    iconMarginRight = $[6];
    initIconProps = $[7];
    otherProps = $[8];
    ph = $[9];
    pv = $[10];
    size = $[11];
    textProps = $[12];
  }
  var newProps;
  if ($[13] !== otherProps || $[14] !== ph || $[15] !== pv) {
    newProps = _objectSpread2({}, otherProps);
    if (ph !== undefined) {
      newProps.paddingLeft = ph;
      newProps.paddingRight = ph;
    }
    if (pv !== undefined) {
      newProps.paddingTop = pv;
      newProps.paddingBottom = pv;
    }
    $[13] = otherProps;
    $[14] = ph;
    $[15] = pv;
    $[16] = newProps;
  } else {
    newProps = $[16];
  }
  var props = newProps;
  var t1;
  if ($[17] !== className) {
    t1 = classNames("PIconText", className);
    $[17] = className;
    $[18] = t1;
  } else {
    t1 = $[18];
  }
  var t2 = size === "inherit" ? "inherit" : size === "small" ? "0.75rem" : size === "large" ? "1.2rem" : size;
  var t3;
  if ($[19] !== color || $[20] !== icon || $[21] !== iconMarginRight || $[22] !== initIconProps || $[23] !== size) {
    var _initIconProps, _initIconProps2;
    t3 = icon && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PIcon, _extends({}, initIconProps, {
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
    $[19] = color;
    $[20] = icon;
    $[21] = iconMarginRight;
    $[22] = initIconProps;
    $[23] = size;
    $[24] = t3;
  } else {
    t3 = $[24];
  }
  var t4 = (_textProps = textProps) === null || _textProps === void 0 ? void 0 : _textProps.className;
  var t5;
  if ($[25] !== t4) {
    t5 = classNames("PIconText-Text", t4);
    $[25] = t4;
    $[26] = t5;
  } else {
    t5 = $[26];
  }
  var t6 = (_textProps$size = (_textProps2 = textProps) === null || _textProps2 === void 0 ? void 0 : _textProps2.size) !== null && _textProps$size !== void 0 ? _textProps$size : size;
  var t7 = (_textProps$color = (_textProps3 = textProps) === null || _textProps3 === void 0 ? void 0 : _textProps3.color) !== null && _textProps$color !== void 0 ? _textProps$color : color;
  var t8;
  if ($[27] !== children || $[28] !== helper || $[29] !== t5 || $[30] !== t6 || $[31] !== t7 || $[32] !== textProps) {
    t8 = /*#__PURE__*/React.createElement(PText, _extends({}, textProps, {
      className: t5,
      size: t6,
      color: t7,
      helper: helper
    }), children);
    $[27] = children;
    $[28] = helper;
    $[29] = t5;
    $[30] = t6;
    $[31] = t7;
    $[32] = textProps;
    $[33] = t8;
  } else {
    t8 = $[33];
  }
  var t9;
  if ($[34] !== props || $[35] !== t1 || $[36] !== t2 || $[37] !== t3 || $[38] !== t8) {
    t9 = /*#__PURE__*/React.createElement(PFlexRowBox, _extends({
      inline: true,
      center: true,
      span: true,
      className: t1,
      fontSize: t2
    }, props), t3, t8);
    $[34] = props;
    $[35] = t1;
    $[36] = t2;
    $[37] = t3;
    $[38] = t8;
    $[39] = t9;
  } else {
    t9 = $[39];
  }
  return t9;
};var _templateObject$1, _templateObject2;
var _excluded$a = ["className", "children", "value", "decimalOpacity", "prefix", "prefixOpacity", "suffix", "suffixOpacity"];
var PNumberText = function PNumberText(t0) {
  var $ = c(25);
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
  if ($[12] !== decimalValue || $[13] !== integerValue) {
    t2 = {
      integerValue: integerValue,
      decimalValue: decimalValue
    };
    $[12] = decimalValue;
    $[13] = integerValue;
    $[14] = t2;
  } else {
    t2 = $[14];
  }
  var _t2 = t2,
    integerValue_0 = _t2.integerValue,
    decimalValue_0 = _t2.decimalValue;
  var t3;
  if ($[15] !== className || $[16] !== decimalOpacity || $[17] !== decimalValue_0 || $[18] !== integerValue_0 || $[19] !== prefix || $[20] !== prefixOpacity || $[21] !== props || $[22] !== suffix || $[23] !== suffixOpacity) {
    t3 = integerValue_0 != undefined ? /*#__PURE__*/React.createElement(PText, _extends({
      className: classNames("PNumberText", className)
    }, props), prefix !== undefined && /*#__PURE__*/React.createElement(StyledPrefix, {
      className: "PNumberText-Prefix",
      style: {
        opacity: prefixOpacity === undefined ? 0.6 : prefixOpacity
      }
    }, prefix), /*#__PURE__*/React.createElement("span", {
      className: "PNumberText-Integer"
    }, integerValue_0 === "" ? "0" : integerValue_0), decimalValue_0 !== undefined && /*#__PURE__*/React.createElement("span", {
      className: "PNumberText-Decimal",
      style: {
        opacity: decimalOpacity === undefined ? 1 : decimalOpacity
      }
    }, ".", decimalValue_0), suffix !== undefined && /*#__PURE__*/React.createElement(StyledSuffix, {
      className: "PNumberText-Suffix",
      style: {
        opacity: suffixOpacity === undefined ? 0.6 : suffixOpacity
      }
    }, suffix)) : null;
    $[15] = className;
    $[16] = decimalOpacity;
    $[17] = decimalValue_0;
    $[18] = integerValue_0;
    $[19] = prefix;
    $[20] = prefixOpacity;
    $[21] = props;
    $[22] = suffix;
    $[23] = suffixOpacity;
    $[24] = t3;
  } else {
    t3 = $[24];
  }
  return t3;
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
  var finalValue = children != null ? children : value;
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
var NamedColor$1 = ['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning'];
var PButton = function PButton(t0) {
  var $ = c(78);
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
  var t1;
  var tooltip;
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
    t1 = _t.tooltipPlacement;
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
    $[21] = t1;
    $[22] = tooltip;
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
    t1 = $[21];
    tooltip = $[22];
    tooltipProps = $[23];
    variant = $[24];
  }
  var tooltipPlacement = t1 === undefined ? "top" : t1;
  var newStyle;
  if ($[25] !== initStyle || $[26] !== mh || $[27] !== mv || $[28] !== ph || $[29] !== pv) {
    newStyle = _objectSpread2({}, initStyle);
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
    $[25] = initStyle;
    $[26] = mh;
    $[27] = mv;
    $[28] = ph;
    $[29] = pv;
    $[30] = newStyle;
  } else {
    newStyle = $[30];
  }
  var style = newStyle;
  var color = contains(NamedColor$1, initColor) ? initColor : undefined;
  var t2;
  if ($[31] !== className) {
    t2 = classNames(className, "PButton");
    $[31] = className;
    $[32] = t2;
  } else {
    t2 = $[32];
  }
  var t3;
  if ($[33] !== color || $[34] !== initColor || $[35] !== initSx || $[36] !== variant) {
    t3 = variant === "contained" ? _objectSpread2(_objectSpread2({}, initSx), {}, {
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
    $[33] = color;
    $[34] = initColor;
    $[35] = initSx;
    $[36] = variant;
    $[37] = t3;
  } else {
    t3 = $[37];
  }
  var t4;
  if ($[38] !== children || $[39] !== size || $[40] !== startIcon || $[41] !== startIconMarginLeft || $[42] !== startIconMarginRight || $[43] !== startIconProps || $[44] !== variant) {
    var _startIconProps;
    t4 = startIcon && /*#__PURE__*/React.createElement(PIcon, _extends({
      className: "PButton-StartIcon",
      size: size,
      style: _objectSpread2({
        marginLeft: startIconMarginLeft !== null && startIconMarginLeft !== void 0 ? startIconMarginLeft : variant !== "text" && children ? "-0.15em" : undefined,
        marginRight: startIconMarginRight !== null && startIconMarginRight !== void 0 ? startIconMarginRight : children ? "0.2em" : undefined
      }, (_startIconProps = startIconProps) === null || _startIconProps === void 0 ? void 0 : _startIconProps.style)
    }, startIconProps), startIcon);
    $[38] = children;
    $[39] = size;
    $[40] = startIcon;
    $[41] = startIconMarginLeft;
    $[42] = startIconMarginRight;
    $[43] = startIconProps;
    $[44] = variant;
    $[45] = t4;
  } else {
    t4 = $[45];
  }
  var t5 = size === "small" ? "0.7rem" : size === "medium" ? undefined : size === "large" ? "1.0rem" : undefined;
  var t6;
  if ($[46] !== t5) {
    t6 = {
      fontSize: t5
    };
    $[46] = t5;
    $[47] = t6;
  } else {
    t6 = $[47];
  }
  var t7;
  if ($[48] !== children || $[49] !== t6) {
    t7 = /*#__PURE__*/React.createElement("div", {
      style: t6
    }, children);
    $[48] = children;
    $[49] = t6;
    $[50] = t7;
  } else {
    t7 = $[50];
  }
  var t8;
  if ($[51] !== children || $[52] !== endIcon || $[53] !== endIconMarginLeft || $[54] !== endIconMarginRight || $[55] !== endIconProps || $[56] !== size || $[57] !== variant) {
    var _endIconProps;
    t8 = endIcon && /*#__PURE__*/React.createElement(PIcon, _extends({
      className: "PButton-EndIcon",
      size: size,
      style: _objectSpread2({
        marginLeft: endIconMarginLeft !== null && endIconMarginLeft !== void 0 ? endIconMarginLeft : children ? "0.2em" : undefined,
        marginRight: endIconMarginRight !== null && endIconMarginRight !== void 0 ? endIconMarginRight : variant !== "text" && children ? "-0.15em" : undefined
      }, (_endIconProps = endIconProps) === null || _endIconProps === void 0 ? void 0 : _endIconProps.style)
    }, endIconProps), endIcon);
    $[51] = children;
    $[52] = endIcon;
    $[53] = endIconMarginLeft;
    $[54] = endIconMarginRight;
    $[55] = endIconProps;
    $[56] = size;
    $[57] = variant;
    $[58] = t8;
  } else {
    t8 = $[58];
  }
  var t9;
  if ($[59] !== t4 || $[60] !== t7 || $[61] !== t8) {
    t9 = /*#__PURE__*/React.createElement(PFlexRowBox, {
      center: true,
      inline: true,
      nowrap: true
    }, t4, t7, t8);
    $[59] = t4;
    $[60] = t7;
    $[61] = t8;
    $[62] = t9;
  } else {
    t9 = $[62];
  }
  var t10;
  if ($[63] !== color || $[64] !== disabled || $[65] !== props || $[66] !== size || $[67] !== style || $[68] !== t2 || $[69] !== t3 || $[70] !== t9 || $[71] !== variant) {
    t10 = /*#__PURE__*/React.createElement(Button, _extends({
      variant: variant,
      size: size,
      color: color,
      disabled: disabled,
      className: t2,
      style: style,
      sx: t3
    }, props), t9);
    $[63] = color;
    $[64] = disabled;
    $[65] = props;
    $[66] = size;
    $[67] = style;
    $[68] = t2;
    $[69] = t3;
    $[70] = t9;
    $[71] = variant;
    $[72] = t10;
  } else {
    t10 = $[72];
  }
  var content = t10;
  var t11;
  if ($[73] !== content || $[74] !== tooltip || $[75] !== tooltipPlacement || $[76] !== tooltipProps) {
    t11 = tooltip ? /*#__PURE__*/React.createElement(Tooltip, _extends({
      title: tooltip,
      placement: tooltipPlacement,
      arrow: true
    }, tooltipProps), content) : content;
    $[73] = content;
    $[74] = tooltip;
    $[75] = tooltipPlacement;
    $[76] = tooltipProps;
    $[77] = t11;
  } else {
    t11 = $[77];
  }
  return t11;
};var _excluded$5 = ["children", "className", "sx", "size", "color", "iconSize", "iconProps", "tooltip", "tooltipPlacement", "tooltipProps", "fullWidth"];
var NamedColor = ['inherit', 'primary', 'secondary', 'error', 'info', 'success', 'warning'];
var PIconButton = function PIconButton(t0) {
  var _iconProps;
  var $ = c(38);
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
  var color = contains(NamedColor, initColor) ? initColor : undefined;
  var t2;
  if ($[13] !== className) {
    t2 = classNames("PIconButton", className);
    $[13] = className;
    $[14] = t2;
  } else {
    t2 = $[14];
  }
  var t3 = color ? undefined : initColor;
  var t4 = fullWidth ? "100%" : undefined;
  var t5;
  if ($[15] !== initSx || $[16] !== t3 || $[17] !== t4) {
    t5 = _objectSpread2({
      color: t3,
      width: t4
    }, initSx);
    $[15] = initSx;
    $[16] = t3;
    $[17] = t4;
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
  if ($[21] !== children || $[22] !== iconProps || $[23] !== t6 || $[24] !== t8) {
    t9 = /*#__PURE__*/React.createElement(PIcon, _extends({}, iconProps, {
      size: t6,
      className: t8
    }), children);
    $[21] = children;
    $[22] = iconProps;
    $[23] = t6;
    $[24] = t8;
    $[25] = t9;
  } else {
    t9 = $[25];
  }
  var t10;
  if ($[26] !== color || $[27] !== props || $[28] !== size || $[29] !== t2 || $[30] !== t5 || $[31] !== t9) {
    t10 = /*#__PURE__*/React.createElement(IconButton, _extends({
      color: color,
      className: t2,
      size: size,
      sx: t5
    }, props), t9);
    $[26] = color;
    $[27] = props;
    $[28] = size;
    $[29] = t2;
    $[30] = t5;
    $[31] = t9;
    $[32] = t10;
  } else {
    t10 = $[32];
  }
  var content = t10;
  var t11;
  if ($[33] !== content || $[34] !== tooltip || $[35] !== tooltipPlacement || $[36] !== tooltipProps) {
    t11 = tooltip ? /*#__PURE__*/React.createElement(Tooltip, _extends({
      title: tooltip,
      placement: tooltipPlacement,
      arrow: true
    }, tooltipProps), content) : content;
    $[33] = content;
    $[34] = tooltip;
    $[35] = tooltipPlacement;
    $[36] = tooltipProps;
    $[37] = t11;
  } else {
    t11 = $[37];
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
  var $ = c(21);
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
  var t1;
  bb0: {
    if (props) {
      var result;
      if ($[6] !== props) {
        result = [];
        Object.keys(props).forEach(function (key) {
          var value = props[key];
          if (value != null) {
            if (value instanceof Text) {
              result.push({
                key: key,
                value: "{".concat(value.data, "}")
              });
            } else {
              if (typeof value === "string") {
                result.push({
                  key: key,
                  value: "\"".concat(value, "\"")
                });
              } else {
                if (_typeof(value) === "object") {
                  result.push({
                    key: key,
                    value: "{".concat(_makeObjectValue(value), "}")
                  });
                } else {
                  result.push({
                    key: key,
                    value: "{".concat(value, "}")
                  });
                }
              }
            }
          }
        });
        $[6] = props;
        $[7] = result;
      } else {
        result = $[7];
      }
      t1 = result;
      break bb0;
    }
    t1 = undefined;
  }
  var finalProps = t1;
  var t2;
  if ($[8] !== className) {
    t2 = classNames("PReactCode", className);
    $[8] = className;
    $[9] = t2;
  } else {
    t2 = $[9];
  }
  var t3 = "<".concat(name);
  var t4;
  if ($[10] !== finalProps) {
    t4 = finalProps && finalProps.map(_temp);
    $[10] = finalProps;
    $[11] = t4;
  } else {
    t4 = $[11];
  }
  var t5;
  if ($[12] !== content || $[13] !== name) {
    t5 = content ? /*#__PURE__*/React.createElement(React.Fragment, null, ">", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "yellow"
      }
    }, "".concat(content)), "</".concat(name, ">")) : " />";
    $[12] = content;
    $[13] = name;
    $[14] = t5;
  } else {
    t5 = $[14];
  }
  var t6;
  if ($[15] !== boxProps || $[16] !== t2 || $[17] !== t3 || $[18] !== t4 || $[19] !== t5) {
    t6 = /*#__PURE__*/React.createElement(StyledBox, _extends({
      className: t2
    }, boxProps), t3, t4, t5);
    $[15] = boxProps;
    $[16] = t2;
    $[17] = t3;
    $[18] = t4;
    $[19] = t5;
    $[20] = t6;
  } else {
    t6 = $[20];
  }
  return t6;
};

/********************************************************************************************************************
 * Styled Component
 * ******************************************************************************************************************/

var StyledBox = styled(Box)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  font-size: 13px;\n  border: 1px solid black;\n  background-color: black;\n  color: #fff;\n  padding: 10px 13px;\n  opacity: 0.7;\n"])));
function _temp(info, idx) {
  return /*#__PURE__*/React.createElement("span", {
    key: idx
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
var PCopyToClipboard = function PCopyToClipboard(t0) {
  var $ = c(20);
  var children;
  var onCopy;
  var options;
  var props;
  var text;
  if ($[0] !== t0) {
    var _t = t0;
    text = _t.text;
    options = _t.options;
    children = _t.children;
    onCopy = _t.onCopy;
    props = _objectWithoutProperties(_t, _excluded);
    $[0] = t0;
    $[1] = children;
    $[2] = onCopy;
    $[3] = options;
    $[4] = props;
    $[5] = text;
  } else {
    children = $[1];
    onCopy = $[2];
    options = $[3];
    props = $[4];
    text = $[5];
  }
  var t1;
  if ($[6] !== children || $[7] !== onCopy || $[8] !== options || $[9] !== text) {
    t1 = function t1(event) {
      var elem = React.Children.only(children);
      var result = copy(text, options);
      if (onCopy) {
        onCopy(text, result);
      }
      if (elem && elem.props && typeof elem.props.onClick === "function") {
        elem.props.onClick(event);
      }
    };
    $[6] = children;
    $[7] = onCopy;
    $[8] = options;
    $[9] = text;
    $[10] = t1;
  } else {
    t1 = $[10];
  }
  var handleClick = t1;
  var t2;
  if ($[11] !== children) {
    t2 = React.Children.only(children);
    $[11] = children;
    $[12] = t2;
  } else {
    t2 = $[12];
  }
  var elem_0 = t2;
  var t3;
  if ($[13] !== elem_0 || $[14] !== handleClick || $[15] !== props) {
    var t4;
    if ($[17] !== handleClick || $[18] !== props) {
      t4 = _objectSpread2(_objectSpread2({}, props), {}, {
        onClick: handleClick
      });
      $[17] = handleClick;
      $[18] = props;
      $[19] = t4;
    } else {
      t4 = $[19];
    }
    t3 = /*#__PURE__*/React.cloneElement(elem_0, t4);
    $[13] = elem_0;
    $[14] = handleClick;
    $[15] = props;
    $[16] = t3;
  } else {
    t3 = $[16];
  }
  return t3;
};export{PBox,PBusinessNoText,PButton,PCopyToClipboard,PDateText,PEmailText,PFlex,PFlexColumnBox,PFlexRowBox,PHelper,PIcon,PIconButton,PIconText,PNumberText,PPersonalNoText,PReactCode,PStack,PTelText,PText,PWonText};