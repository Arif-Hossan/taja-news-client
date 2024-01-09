import React from 'react';
import './Zone.css';
import motovlog from "../../../assets/motovlog.png";
import camping from "../../../assets/camping.png";
import equipments from "../../../assets/equipments.png";

const Zone = () => {
    return (
        <div>
            <div className="zone rounded mt-5">
                <h6 className='mt-2'>Category</h6>
                <img src={motovlog} alt="" />
                <img src={camping} alt="" />
                <img src={equipments} alt="" />
            </div>
        </div>
    );
};

export default Zone;