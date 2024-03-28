import React from 'react';
import { PdgButtonProps as Props } from './PdgButton.types';
declare const PdgButton: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export default PdgButton;
