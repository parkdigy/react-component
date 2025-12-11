import _styled from 'styled-components';
import { empty as _empty, notEmpty as _notEmpty } from '@pdg/compare';
import { lv as _lv } from '@pdg/data';

/* eslint-disable no-var */
declare global {
  var env: {
    mode: 'development' | 'production';
    isDevelopment: boolean;
    isProduction: boolean;
    name: string;
  };

  function ll(message?: any, ...optionalParams: any[]): void;

  var styled: typeof _styled;

  var empty: typeof _empty;
  var notEmpty: typeof _notEmpty;

  var lv: typeof _lv;
}
/* eslint-enable no-var */

const AppConfig = (window as any).__AppConfig__;

globalThis.env = {
  mode: AppConfig.env,
  isDevelopment: AppConfig.env === 'development',
  isProduction: AppConfig.env === 'production',
  name: AppConfig.name,
};

globalThis.ll = function (message?: any, ...optionalParams: any[]) {
  console.log(message, ...optionalParams);
};

globalThis.styled = _styled;

globalThis.empty = _empty;
globalThis.notEmpty = _notEmpty;

globalThis.lv = _lv;

export {};
