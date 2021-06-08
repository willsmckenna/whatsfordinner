import React, { useState } from 'react';
import { Appbar, Menu } from 'react-native-paper';

function CustomNavigationBar({ navigation, previous }) {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Whats for Dinner?" />
      {!previous ? (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action icon="menu" color="black" onPress={openMenu} />
          }>
          <Menu.Item onPress={() => { navigation.navigate('Login');}} title="Log In" />
          <Menu.Item onPress={() => { console.log('Go to profile page here')}} title="See Your Profile" />
          <Menu.Item onPress={() => { navigation.navigate('ResSignUp')}} title="Create Restaurant Profile" />
          <Menu.Item onPress={() => { navigation.navigate('ResProfile')}} title="See Your Restaurant Profile" />
          <Menu.Item onPress={() => { navigation.navigate('Location')}} title="See Your Location Here" />
        </Menu>
      ) : null}
    </Appbar.Header>
  );
}
export default CustomNavigationBar;