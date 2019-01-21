import React from 'react'
import VolumeIcon from './../../icons/components/volume'
import './volume.css'

const Volume = props => {
    return (
        <button className="Volume">
            <div  
                onClick={props.handleClick}
            >
                <VolumeIcon
                    size="25"
                    color={props.volumeColor}
                />
            </div>
            <div className="Volume-range">
                <input 
                    type="range"
                    min={0}
                    max={1}
                    step={.05}
                    onChange={props.handleVolumeChange}
                />
            </div>
        </button>
    )   
}

export default Volume;
