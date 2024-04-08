import { ControlItemIconProps, ControlItemTextProps } from '../../ControlItems';
import { TooltipProps } from '@mui/material';
import { PdgHelperProps } from '../../../../../../src';

export interface ControlBarRowHelperProps {
  text: ControlItemTextProps['value'];
  position: PdgHelperProps['position'];
  opacity: PdgHelperProps['opacity'];
  tooltipPlacement: TooltipProps['placement'];
  icon: ControlItemIconProps['value'];
  onChangeText(value: ControlItemTextProps['value']): void;
  onChangePosition(value: PdgHelperProps['position']): void;
  onChangeOpacity(value: PdgHelperProps['opacity']): void;
  onChangeTooltipPlacement(value: TooltipProps['placement']): void;
  onChangeIcon(value: ControlItemIconProps['value']): void;
}
