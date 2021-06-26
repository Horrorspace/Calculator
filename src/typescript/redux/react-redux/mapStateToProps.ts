import { RootStateOrAny} from 'react-redux';


export const mapStateToProps = (state: RootStateOrAny) => {
    return {
      displayOperations: state.calculator.displayOperations,
      mainDisplay: state.calculator.mainDisplay,
    } 
};