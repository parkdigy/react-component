import React from 'react';
import {
  PdgEmailText,
  PdgIcon,
  PdgIconText,
  PdgDateText,
  PdgNumberText,
  PdgTelText,
  PdgWonText,
  PdgCompanyNoText,
  PdgPersonalNoText,
  PdgButton,
  PdgIconButton,
} from '../../../../src';
import { styled } from '@mui/material';

const Home = () => {
  return (
    <div>
      <div>
        <StyledTitle>PdgButton</StyledTitle>
        <PdgButton icon='person'>BUTTON</PdgButton>
        &nbsp;
        <PdgButton endIcon='person'>BUTTON</PdgButton>
        &nbsp;
        <PdgButton startIcon='person' endIcon='person'>
          BUTTON
        </PdgButton>
      </div>
      <div>
        <StyledTitle>PdgIconButton</StyledTitle>
        <PdgIconButton>person</PdgIconButton>
      </div>
      <div>
        <StyledTitle>PdgEmailText</StyledTitle>
        <PdgEmailText value='test@test.com' />
      </div>
      <div>
        <StyledTitle>PdgIcon</StyledTitle>
        <PdgIcon color='error'>Error</PdgIcon>
      </div>
      <div>
        <StyledTitle>PdgIconText</StyledTitle>
        <PdgIconText icon='Person' fontSize='large'>
          IconText
        </PdgIconText>
      </div>
      <div>
        <StyledTitle>PdgDateText</StyledTitle>
        <PdgDateText value='2024-01-01 12:34:56' />
      </div>
      <div>
        <StyledTitle>PdgNumberText</StyledTitle>
        <PdgNumberText value='123456789.12345' />
      </div>
      <div>
        <StyledTitle>PdgWonText</StyledTitle>
        <PdgWonText value='123456789' />
      </div>
      <div>
        <StyledTitle>PdgTelText</StyledTitle>
        <PdgTelText value='01012345678' />
      </div>
      <div>
        <StyledTitle>PdgCompanyNoText</StyledTitle>
        <PdgCompanyNoText value='0123456789' />
      </div>
      <div>
        <StyledTitle>PdgPersonalNoText</StyledTitle>
        <PdgPersonalNoText value='0123456789012' />
      </div>
    </div>
  );
};

export default Home;

/********************************************************************************************************************
 * Styled
 * ******************************************************************************************************************/

const StyledTitle = styled('span')`
  opacity: 0.5;
  font-weight: 700;
  &:after {
    content: ' : ';
  }
`;
