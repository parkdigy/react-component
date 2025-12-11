import { ControlItemIconProps, ControlItemTextProps } from '../../ControlItems';
import { TooltipProps } from '@mui/material';
import { PHelperProps } from '../../../../../../src';

export interface ControlBarRowHelperProps {
  text: ControlItemTextProps['value'];
  position: PHelperProps['position'];
  opacity: PHelperProps['opacity'];
  tooltipPlacement: TooltipProps['placement'];
  icon: ControlItemIconProps['value'];
  onChangeText: (value: ControlItemTextProps['value']) => void;
  onChangePosition: (value: PHelperProps['position']) => void;
  onChangeOpacity: (value: PHelperProps['opacity']) => void;
  onChangeTooltipPlacement: (value: TooltipProps['placement']) => void;
  onChangeIcon: (value: ControlItemIconProps['value']) => void;
}
