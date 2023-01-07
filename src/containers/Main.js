import React, { useState } from 'react';
import "../css/Main.css"

const Main = (props) => {
    const { accountInfo, search, getTrackAudioFeatures, selectedTrack, selectedTrackAudioFeatures, searchResults, setSelectedTrack } = props
    const [searchValue, setSearchValue] = useState("");

    const searchOnChange = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <React.Fragment>
            <div className='container-fluid'>
                <h1 id='main-display-name' className='col-12'>
                    Welcome {accountInfo.display_name}!
                </h1>
            </div >
            <div id="search-bar-container" className='container'>
                <div className='row'>
                    <div className='col-10 d-flex align-items-center'>
                        <input id="search-bar" type="text" onChange={searchOnChange} onKeyDown={() => { search(searchValue) }} />
                    </div>
                    <div className='col-2'>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Main;