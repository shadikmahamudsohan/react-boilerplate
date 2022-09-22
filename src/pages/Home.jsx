import React, { useContext } from 'react';
import image from '../images/placeholderImage.svg';
import { GlobalContext } from '../contexts/GlobalContext';

const Home = () => {
    const contextData = useContext(GlobalContext);
    return (
        <div>
            <h1>Welcome to React Boiler Plate!!!</h1>
            <img src={image} alt="placeholder" />
        </div>
    );
};

export default Home;