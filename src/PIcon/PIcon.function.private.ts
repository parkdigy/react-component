/********************************************************************************************************************
 * getParentSize
 * ******************************************************************************************************************/
export const getParentSize = (el: HTMLSpanElement) => {
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
export const finalStyleFontSize = (sizeValue: number, sizeUnit: string, el: HTMLSpanElement) => {
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
};
