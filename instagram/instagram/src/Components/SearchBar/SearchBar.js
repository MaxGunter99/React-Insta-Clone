import React from 'react';
import InstagramLogo from '../Images/InstagramLogo.png';
import InstagramText from '../Images/InstagramText.png';
import Compass from '../Images/compass.png';
import Profile from '../Images/profile.png';
import '/Users/voidchaser/Lambda/InstaCloneTwo/React-Insta-Clone/instagram/instagram/src/Components/SearchBar/SearchBar.css';

function SearchBar(props) {
    return (
        <>

            <div className='SearchBar'>

                <div className='left'>

                    <img src={InstagramLogo} alt='IGLogo'/>
                    <img src={InstagramText} alt='IGText'/>

                </div>

                <div className='center'>

                    <form>
                        <input 

                            type='text'
                            placeholder='search'

                        />
                    </form>

                </div>

                <div className='right'>

                    <img src={Compass} alt='Compass'/>
                    <img src={Profile} alt='Profile'/>
                    
                </div>

            </div>

        </>
    )
}

export default SearchBar;