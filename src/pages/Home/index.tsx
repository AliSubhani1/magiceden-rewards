import { useSelector } from "react-redux";
import { RootState } from "../../store";

import './index.scss'

const Home = () => {

    // This code is just added to test redux useSelector hook. It will be removed later on. 
    const count = useSelector((state: RootState) => state.counter.value);
    const incrementAmount = useSelector(
        (state: RootState) => state.counter.incrementAmount
    );
    console.log(count, incrementAmount)
    return <div>
        Home Page
    </div>
}

export default Home