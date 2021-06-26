import React from 'react'
import {Provider} from 'react-redux'
import {ConnectedMenu} from '@react/components/connected/ConnectedMenu.tsx'
import {store} from '@redux/store.ts'


export default class AppWrapper extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <ConnectedMenu />
        </Provider>
      );
    }
};