import React from 'react'
import { PieChart,Pie,Cell,ResponsiveContainer,Tooltip } from 'recharts'

function Chart({total,completedTask}) {
   
    
    
    let reamaining = total - completedTask
    const isZero = total == 0
    const data = isZero ? [{name:"empty",value:1}] : [
        {name:"completed",value:completedTask},
        {name:"Pending Task",value:reamaining}

    ]
    const colors = isZero ? ["white"] : ["#00cc40","white"]
  return (
    <div style={{width:"100%", height:170}}>
    <ResponsiveContainer width="100%" height="100%">
    <PieChart>
        <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius="60%"
            outerRadius="80%"
            dataKey="value"
            stroke="none"
            cornerRadius={30}
            startAngle={90}
            endAngle={-270}
        >
        <Tooltip/>
        {data.map((curItem,i)=>{
          return  <Cell key={i} fill={colors[i]}/>
        })}
         
        </Pie>
         <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="26"
            fontWeight="bold"
            fill="white"
          >{completedTask}/{total || 0}</text>
         
    </PieChart>
    </ResponsiveContainer>

    </div>
  )
}

export default Chart