import React from 'react';
import './DesktopView.css'


const DesktopView = ({ rows, headings }) => {
    return (
        <div className='table-container'>
            {
                rows.length > 0 && (
                    <table cellSpacing='0' className='table' >
                        <thead className='table-heading'>
                            <tr className='table-row'>
                                {
                                    headings.map((headerItem, index) => (
                                        <th key={index}>
                                            {headerItem.toUpperCase()}
                                        </th>
                                    ))
                                }
                            </tr>
                        </thead>

                        <tbody>
                            {Object.values(rows).map((obj, index) => (
                                <tr key={index} className='table-row'>
                                    {Object.values(obj).map((value, index2) => (
                                        <td key={index2}>
                                            {value}
                                        </td>
                                    ))}
                                </tr>
                            )

                            )}
                        </tbody>
                    </table>

                )}
        </div>
    );
};

export default DesktopView;