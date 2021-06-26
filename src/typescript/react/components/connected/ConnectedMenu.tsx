import {connect} from 'react-redux'
import {mapStateToProps} from '@redux/react-redux/mapStateToProps.ts'
import {mapDispatchToProps} from '@redux/react-redux/mapDispatchToProps.ts'
import Menu from '@react/components/Menu.tsx'


export const ConnectedMenu = connect(mapStateToProps, mapDispatchToProps)(Menu);