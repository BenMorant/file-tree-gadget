import React from 'react'

const File = props => {
  const { name } = props
  const fileExtension = name.split('.')[1]
  const fileIcons = {
    mp4: 'headphones',
    jpeg: 'file image',
    png: 'file image outline',
  }

  return (
    <div>
      <i className={`${fileIcons[fileExtension]} icon`} />
      {name}
    </div>
  )
}

export default File
