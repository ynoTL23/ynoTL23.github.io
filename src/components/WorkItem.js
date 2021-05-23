import React from 'react'

const WorkItem = props => {
  const { workTimeframe, workRole, workCompany, workDescription, workBulletNotes } = props.exp

  return (
    <div class='exp-item'>
      <div class='exp-timeframe'>{workTimeframe}</div>
      <div class='exp-title'>
        {workRole}, <em>{workCompany}</em>
      </div>
      <div className='exp-notes'>
        {workDescription}
        {
          <ul>
            {workBulletNotes.map(note => (
              <li>{note}</li>
            ))}
          </ul>
        }
      </div>
    </div>
  )
}

export default WorkItem
