/********************************************************************************************************************
 * 날짜를 표시하는 텍스트 컴포넌트
 * ******************************************************************************************************************/

import React, { useMemo } from 'react';
import { PdgDateTextProps as Props } from './PdgDateText.types';
import dayjs from 'dayjs';
import { styled } from '@mui/material';
import classNames from 'classnames';

const PdgDateText: React.FC<Props> = ({
  className,
  style,
  dateClassName,
  dateStyle,
  timeClassName,
  timeStyle,
  value,
  twoLine,
  date,
  hour,
  minute,
}) => {
  const format = useMemo(
    () => (date ? 'YYYY-MM-DD' : hour ? 'YYYY-MM-DD HH시' : minute ? 'YYYY-MM-DD HH시 mm분' : 'YYYY-MM-DD HH:mm:ss'),
    [date, hour, minute]
  );

  const values = useMemo(() => {
    if (!value) {
      return null;
    } else {
      return dayjs(value).format(format).split(' ');
    }
  }, [format, value]);

  return values ? (
    <span className={classNames('PdgDateText', className)} style={style}>
      <span className={classNames('PdgDateText-Date', dateClassName)} style={dateStyle}>
        {values[0]}
      </span>
      {twoLine && values.length > 1 && <br />}
      {values.length > 1 ? (
        <StyledTimeText className={classNames('PdgDateText-Time', timeClassName)} style={timeStyle}>
          &nbsp;{values[1]}
        </StyledTimeText>
      ) : null}
    </span>
  ) : null;
};

export default PdgDateText;

/********************************************************************************************************************
 * Styled
 * ******************************************************************************************************************/

const StyledTimeText = styled('span')`
  opacity: 0.6;
`;
