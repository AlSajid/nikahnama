import React from 'react';

const Block = (props) => {
    console.log()
    return (
        <div className='border-2 border-black  w-1/2 m-3 bg-zinc-600 text-white p-1 rounded-md text-lg'>
            <table className='border-collapse '>
                <tr className=''>
                    <td className='w-40'>আগের হ্যাশ</td>
                    <td className='border-b py-3'>{props.block.preHash}</td>
                </tr>
                <tr className=''>
                    <td>বর</td>
                    <td className='border-b py-3'>{props.block.groom}</td>
                </tr>
                <tr className=''>
                    <td>কনে</td>
                    <td className='border-b py-3'>{props.block.bride}</td>
                </tr>
                <tr className=''>
                    <td>সাক্ষী</td>
                    <td className='border-b py-3'>{props.block.witnesses}</td>
                </tr>
                <tr className=''>
                    <td>সময়</td>
                    <td className='border-b py-3'>{props.block.timestamp}</td>
                </tr>
                <tr className=''>
                    <td>হ্যাশ</td>
                    <td className='border-b py-3'>{props.block.hash}</td>
                </tr>
                
            </table>
        </div>
    );
};

export default Block;