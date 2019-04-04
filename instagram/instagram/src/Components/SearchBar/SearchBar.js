import React from 'react';
import InstagramLogo from '../Images/InstagramLogo.png';
import InstagramText from '../Images/InstagramText.png';
import Compass from '../Images/compass.png';
import Profile from '../Images/profile.png';
import styled, { css } from 'styled-components'

function SearchBar(props) {
    return (
        <>

            <SearchBarNav>

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

            </SearchBarNav>

        </>
    )
}

const SearchBarNav = styled.div`
    display: inline-flex;
    justify-content: space-between;
    background-color: white;
    width: 100%;
    align-items: center;
    img{
        height: 40px;
        margin: 10px;
    }
`;

export default SearchBar;