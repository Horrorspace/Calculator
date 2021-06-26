import '@SCSS/index.scss'
import React from 'react'
import {render as ReactRender} from 'react-dom'
import {saga} from '@redux/saga/saga.ts'
import {sagaWatcher} from '@redux/saga/sagaWatcher.ts'
import App from '@react/App.tsx'

 

saga.run(sagaWatcher);

ReactRender(<App />, document.getElementById('root'))