import React from 'react';
import { IconProps as Props } from './Icon.types';
declare const Icon: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
export default Icon;
