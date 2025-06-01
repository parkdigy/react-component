import React, { useMemo } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import {
  Buttons_PdgButton,
  Buttons_PdgIconButton,
  Home,
  Icons_PdgIcon,
  Layouts_PdgStack,
  Layouts_PdgFlexColumnBox,
  Layouts_PdgFlexRowBox,
  Texts_PdgBusinessNoText,
  Texts_PdgDateText,
  Texts_PdgEmailText,
  Texts_PdgIconText,
  Texts_PdgNumberText,
  Texts_PdgPersonalNoText,
  Texts_PdgTelText,
  Texts_PdgText,
  Texts_PdgWonText,
  Others_PdgCopyToClipboard,
} from '@comp';

const RootRoutes = () => {
  const rootPath = useMemo(() => (isEnvProduction ? '/react-component/' : '/'), []);

  const basicRoutes = useMemo(
    () => (
      <>
        <Route path='/' element={<Home />} />
        <Route path='/pdg_icon' element={<Icons_PdgIcon />} />
        <Route
          path='/buttons/*'
          element={
            <Routes>
              <Route path='/pdg_button' element={<Buttons_PdgButton />} />
              <Route path='/pdg_icon_button' element={<Buttons_PdgIconButton />} />
              <Route path='*' element={<Navigate to={rootPath} />} />
            </Routes>
          }
        />
        <Route
          path='/texts/*'
          element={
            <Routes>
              <Route path='/pdg_text' element={<Texts_PdgText />} />
              <Route path='/pdg_number_text' element={<Texts_PdgNumberText />} />
              <Route path='/pdg_tel_text' element={<Texts_PdgTelText />} />
              <Route path='/pdg_date_text' element={<Texts_PdgDateText />} />
              <Route path='/pdg_email_text' element={<Texts_PdgEmailText />} />
              <Route path='/pdg_won_text' element={<Texts_PdgWonText />} />
              <Route path='/pdg_company_no_text' element={<Texts_PdgBusinessNoText />} />
              <Route path='/pdg_personal_no_text' element={<Texts_PdgPersonalNoText />} />
              <Route path='/pdg_icon_text' element={<Texts_PdgIconText />} />
              <Route path='*' element={<Navigate to={rootPath} />} />
            </Routes>
          }
        />
        <Route
          path='/layouts/*'
          element={
            <Routes>
              <Route path='/pdg_stack' element={<Layouts_PdgStack />} />
              <Route path='/pdg_flex_column_box' element={<Layouts_PdgFlexColumnBox />} />
              <Route path='/pdg_flex_row_box' element={<Layouts_PdgFlexRowBox />} />
              <Route path='*' element={<Navigate to={rootPath} />} />
            </Routes>
          }
        />
        <Route path='/pdg_copy_to_clipboard' element={<Others_PdgCopyToClipboard />} />
        <Route path='*' element={<Navigate to={rootPath} />} />
      </>
    ),
    [rootPath]
  );

  return (
    <Routes>
      <Route path={`${rootPath}*`} element={<Routes>{basicRoutes}</Routes>} />
      <Route path='*' element={<Navigate to={rootPath} />} />
    </Routes>
  );
};

export default RootRoutes;
