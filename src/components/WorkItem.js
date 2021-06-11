import React from 'react'

const WorkItem = props => {
  const { workTimeframe, workRole, workCompany, workDescription, workBulletNotes } = props.exp

  return (
    <div className='exp-item'>
      <div className='exp-timeframe'>{workTimeframe}</div>
      <div className='exp-title'>
        {workRole}, <em>{workCompany}</em>
      </div>
      <div className='exp-notes'>
        {workDescription}
        {
          <ul>
            {workBulletNotes.map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>
        }
      </div>
    </div>
  )
}

export default WorkItem
