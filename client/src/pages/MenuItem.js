import React from 'react';
import MenuItem from '../components/modules/menuItem';

const MenuItemPage = ({ match, location, history }) => (
  <>
    <MenuItem id={match.params.id} location={location} history={history} />
  </>
);
export default MenuItemPage;
