import React from 'react';


 const Loader = () => {
    return (
        <div
            className="d-flex flex-row justify-content-center align-items-center w-100"
            style={{ minHeight: "100vh" }} >
            <img src="https://flevix.com/wp-content/uploads/2019/07/Spin-Preloader-1.gif" alt="loading gif"/>
        </div>
    );
}


export default Loader;