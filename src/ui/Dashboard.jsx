import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Profile from './Profile.jsx'
import Patients from './Patients.jsx'
export default function Dashboard(){ const { t } = useTranslation(); const [tab, setTab] = useState('profile'); return (
  <div style={{maxWidth:1100, margin:'24px auto', padding:16}}>
    <div style={{display:'flex', gap:8, marginBottom:16}}><button onClick={()=>setTab('profile')}>{t('profile')}</button><button onClick={()=>setTab('patients')}>{t('patients')}</button></div>
    {tab==='profile' ? <Profile/> : <Patients/>}
  </div>) }
