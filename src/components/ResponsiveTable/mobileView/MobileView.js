import React from 'react';
import './MobileView.css'

const MobileView = ({ rows }) => {
    return (
        <div>
            {
                rows.map((rowItem, index) => (
                    <div className='item' key={index}>

                        <div className='flex-container'>
                            <p className='name'>Name</p>
                            <p>{rowItem.name}</p>
                        </div>
                        <div className='flex-container small'>
                            <p >Website  </p>
                            <p>{rowItem.Website}</p>
                        </div>


                        {/* <div className='flex-container'>
                            <p>Name : </p>
                            <p>Address : </p>
                        </div>

                        <div className='flex-container'>
                            <p>{rowItem.name}</p>
                            <p>{rowItem.Website}</p>
                        </div> */}





                    </div>
                ))
            }
        </div>
    );
};

export default MobileView;