import { ControlItemTextProps } from '../../ControlItems';
import { TooltipProps } from '@mui/material';

export interface ControlBarRowTooltipProps {
  tooltip: ControlItemTextProps['value'];
  tooltipPlacement: TooltipProps['placement'];
  onChangeTooltip: (value: ControlItemTextProps['value']) => void;
  onChangeTooltipPlacement: (value: TooltipProps['placement']) => void;
}
