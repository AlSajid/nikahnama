import React from 'react';

const Block = ({data}) => {
    return (
        <div className=''>
            <table>
                <tr>
                    <td>বর</td>
                    <td>{data.groom}</td>
                </tr>
            </table>
        </div>
    );
};

export default Block;