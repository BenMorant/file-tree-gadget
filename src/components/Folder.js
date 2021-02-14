import React, { useState } from 'react'

const Folder = props => {
  const [isOpen, setIsOpen] = useState(true)
  const { name, children } = props
  const direction = isOpen ? 'down' : 'right'

  const handleClick = () => setIsOpen(!isOpen)

  return (
    <div>
      <span onClick={handleClick}>
        <i className="blue folder icon" />
        <i className={`caret ${direction} icon`} />
      </span>
      {name}
      <div style={{ marginLeft: '17px' }}>{isOpen ? children : null}</div>
    </div>
  )
}

export default Folder
