import React from 'react';

const Navbar = () => {
    return (
        <div className="fw7">
        <nav className="navbar bg-warning justify-content-center navbar-light">
		    <div className="f4 flex items-center">
                <img    
                    alt="maplelogo" 
                    className="navbar-brand" 
                    height="50" 
                    src="https://orangemushroom.files.wordpress.com/2017/09/maplestory-256x256.png?w=600" 
                    width="50"
                /> 
                {'\u00A0'}Maplestory M Damage Calculator
            </div>
        </nav>
    </div>
    )
}

export default Navbar;