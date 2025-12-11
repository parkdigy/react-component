import React, { useMemo } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import {
  Buttons_PButton,
  Buttons_PIconButton,
  Home,
  Icons_PIcon,
  Layouts_PStack,
  Layouts_PFlexColumnBox,
  Layouts_PFlexRowBox,
  Texts_PBusinessNoText,
  Texts_PDateText,
  Texts_PEmailText,
  Texts_PIconText,
  Texts_PNumberText,
  Texts_PPersonalNoText,
  Texts_PTelText,
  Texts_PText,
  Texts_PWonText,
  Others_PCopyToClipboard,
} from '@comp';

const RootRoutes = () => {
  const rootPath = useMemo(() => (env.isProduction ? `/${env.name}/` : '/'), []);

  const basicRoutes = useMemo(
    () => (
      <>
        <Route path='/' element={<Home />} />
        <Route path='/pdg_icon' element={<Icons_PIcon />} />
        <Route
          path='/buttons/*'
          element={
            <Routes>
              <Route path='/pdg_button' element={<Buttons_PButton />} />
              <Route path='/pdg_icon_button' element={<Buttons_PIconButton />} />
              <Route path='*' element={<Navigate to={rootPath} />} />
            </Routes>
          }
        />
        <Route
          path='/texts/*'
          element={
            <Routes>
              <Route path='/pdg_text' element={<Texts_PText />} />
              <Route path='/pdg_number_text' element={<Texts_PNumberText />} />
              <Route path='/pdg_tel_text' element={<Texts_PTelText />} />
              <Route path='/pdg_date_text' element={<Texts_PDateText />} />
              <Route path='/pdg_email_text' element={<Texts_PEmailText />} />
              <Route path='/pdg_won_text' element={<Texts_PWonText />} />
              <Route path='/pdg_company_no_text' element={<Texts_PBusinessNoText />} />
              <Route path='/pdg_personal_no_text' element={<Texts_PPersonalNoText />} />
              <Route path='/pdg_icon_text' element={<Texts_PIconText />} />
              <Route path='*' element={<Navigate to={rootPath} />} />
            </Routes>
          }
        />
        <Route
          path='/layouts/*'
          element={
            <Routes>
              <Route path='/pdg_stack' element={<Layouts_PStack />} />
              <Route path='/pdg_flex_column_box' element={<Layouts_PFlexColumnBox />} />
              <Route path='/pdg_flex_row_box' element={<Layouts_PFlexRowBox />} />
              <Route path='*' element={<Navigate to={rootPath} />} />
            </Routes>
          }
        />
        <Route path='/pdg_copy_to_clipboard' element={<Others_PCopyToClipboard />} />
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
