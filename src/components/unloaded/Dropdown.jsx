import React from 'react'

const Dropdown = ({heading,options,func}) => {
    return (
        <div className="select mr-4 text-white">
            <select defaultValue="0" onChange={func} name="format" id="format" className='text-white'>
                <option className='text-white' value="0" disabled>{heading}</option>
                {
                options.map((o,i)=>(<option key={i} value={o} >{o.toUpperCase()}</option>))
            }
            </select>
        </div>
  )
}

export default Dropdown
