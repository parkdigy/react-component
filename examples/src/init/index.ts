import { empty as _empty, notEmpty as _notEmpty } from '@pdg/compare';
import { lv as _lv } from '@pdg/data';

declare global {
  function ll(message?: any, ...optionalParams: any[]): void;

  var empty: typeof _empty;
  var notEmpty: typeof _notEmpty;

  var lv: typeof _lv;

  var isEnvDevelopment: boolean;
  var isEnvProduction: boolean;
}

globalThis.ll = function (message?: any, ...optionalParams: any[]) {
  console.log(message, ...optionalParams);
};

globalThis.empty = _empty;
globalThis.notEmpty = _notEmpty;

globalThis.lv = _lv;

globalThis.isEnvDevelopment = (window as any).$$AppConfig.env === 'development';
globalThis.isEnvProduction = (window as any).$$AppConfig.env === 'production';

export {};
