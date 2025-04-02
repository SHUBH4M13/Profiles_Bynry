import React from 'react'

export default function Company( {setCompany}) {
  return (

<div className="flex items-center w-full">
    <select 
    onChange ={ (e) => setCompany(e.target.value) }
        className="w-[150px] h-[50px] p- bg-CardBlue text-white font-Helvetica rounded-lg border border-gray-600 
                   hover:border-LightBlue focus:outline-none focus:ring-2 focus:ring-LightBlue"
        name="Company"
        id=""
    >
        {CompanyArr.map((item, index) => (
            <option key={index} value={item} className="text-black bg-white">
                {item}
            </option>
        ))}

    </select>
</div>

  )
}

const CompanyArr = [  '' , 'Wipro' , 'Google' , 'Infosys' , 'TCS' , 'Accenture' , 'Microsoft'  ]