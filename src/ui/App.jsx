import React, { useState } from 'react'
import '../i18n'
import { useTranslation } from 'react-i18next'
import Landing from './Landing.jsx'
import Dashboard from './Dashboard.jsx'
export default function App(){
  const [authed, setAuthed] = useState(false)
  const [lng, setLng] = useState(localStorage.getItem('lng') || 'es')
  const { t, i18n } = useTranslation()
  const switchLng = (l) => { i18n.changeLanguage(l); localStorage.setItem('lng', l); setLng(l) }
  return (
    <div style={{fontFamily:'Inter, system-ui, Arial', background:'#f7fbff', minHeight:'100vh'}}>
      <header style={{display:'flex', gap:16, alignItems:'center', justifyContent:'space-between', padding:16, background:'#0b63ce', color:'white'}}>
        <div style={{display:'flex', alignItems:'center', gap:10}}><img src='/logo.svg' width='24' height='24' alt='logo'/><strong>galenos.pro</strong></div>
        <nav style={{display:'flex', gap:12, alignItems:'center'}}><select value={lng} onChange={e=>switchLng(e.target.value)}><option value='es'>ES 🇪🇸</option><option value='en'>EN 🇬🇧</option></select>{!authed ? (<button onClick={()=>setAuthed(true)} style={{background:'white', color:'#0b63ce', padding:'6px 10px', borderRadius:8, border:0}}>{t('login')}</button>) : (<button onClick={()=>setAuthed(false)} style={{background:'white', color:'#0b63ce', padding:'6px 10px', borderRadius:8, border:0}}>{t('logout')}</button>)}</nav>
      </header>{authed ? <Dashboard/> : <Landing onStart={()=>setAuthed(true)} />}<footer style={{textAlign:'center', padding:24, color:'#567'}}>© {new Date().getFullYear()} galenos.pro</footer>
    </div>)
}
