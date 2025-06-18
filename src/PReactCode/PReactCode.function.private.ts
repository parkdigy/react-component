export const makeObjectValue = (value: Record<string, any>): string => {
  return Object.keys(value)
    .map((key) => {
      const v = value[key];
      if (v != null) {
        if (v instanceof Text) {
          return `${key}: {${v.data}}`;
        } else if (typeof v === 'string') {
          return `${key}: "${v}"`;
        } else if (typeof v === 'object') {
          return `${key}: {${makeObjectValue(v)}}`;
        } else {
          return `${key}: {${v}}`;
        }
      }
    })
    .filter((v) => v != null)
    .join(', ');
};
