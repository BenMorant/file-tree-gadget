import File from './components/File'
import Folder from './components/Folder'
import React from 'react'

function App() {
  return (
    <div>
      <Folder name="Bureau">
        <Folder name="Musique">
          <File name="je_taime_aidou.mp4" />
          <File name="petit_fichier.mp4" />
        </Folder>
        <File name="chiens.jpeg" />
        <File name="chats.png" />
      </Folder>
      <Folder name="Applications" />
    </div>
  )
}
export default App
