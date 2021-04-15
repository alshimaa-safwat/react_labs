import {useEffect, useState} from 'react';
const Seconds = ({minutes , setMinutes}) => {
    const [seconds , setSeconds] = useState();

    useEffect(() =>{
        if(seconds === 0) setMinutes(0);
    },[seconds]);

    useEffect(() => {
        setSeconds(minutes *60);
    },[minutes]);

    useEffect(() => {
        const countDown = setInterval(() => {
            setSeconds((prevstate) => prevstate - 1 );
        },1000);
        return () => clearInterval(countDown);
    },[]);

    return <h1>{`${seconds} Second`}</h1>;
};
export default Seconds;