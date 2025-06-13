import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProfileCard from './components/ProfileCard'

function App() {
  return(
    <div>
     <ProfileCard name = "mansi" age = {25} title="developer"/>
     <ProfileCard name = "Harshal" age = {25} title="tester"/>
     <ProfileCard name = "priya" age = {25} title="tester"/>

    </div>
  )
     
}

export default App
