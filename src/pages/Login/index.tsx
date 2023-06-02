import { useDispatch } from "react-redux";
import { changeIncrementAmount } from "../../reducers/counterReducer";

import './index.scss'

const Login = () => {
    // This code is just added to check redux dispatch. Will remove it later on. 
    const dispatch = useDispatch();
    dispatch(changeIncrementAmount(3));

    return <div>Login Page</div>
}

export default Login