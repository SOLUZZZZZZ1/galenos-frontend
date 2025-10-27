import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
export default function Profile(){ const { t } = useTranslation(); const [alias, setAlias] = useState(localStorage.getItem('alias') || 'DrGalen'); const [visible, setVisible] = useState(localStorage.getItem('visible') || 'alias'); const [country, setCountry] = useState(localStorage.getItem('country') || 'ES 🇪🇸'); const [realName] = useState('Nombre Real'); useEffect(()=>{ localStorage.setItem('alias', alias); localStorage.setItem('visible', visible); localStorage.setItem('country', country)}, [alias, visible, country]); const countries = ['ES 🇪🇸','FR 🇫🇷','DE 🇩🇪','IT 🇮🇹','GB 🇬🇧','US 🇺🇸']; const visibleName = visible==='alias' ? alias : realName; return (
  <section style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:24}}>
    <div>
      <h2>{t('profile')}</h2>
      <div style={{margin:'8px 0'}}><strong>{t('alias_or_real')}:</strong><br/>
        <label><input type='radio' checked={visible==='alias'} onChange={()=>setVisible('alias')} /> {t('alias')}</label>{' '}
        <label><input type='radio' checked={visible==='real'} onChange={()=>setVisible('real')} /> {t('real_name')}</label>
      </div>
      <div style={{margin:'8px 0'}}><label>{t('doctor_alias')}</label><br/><input value={alias} onChange={e=>setAlias(e.target.value)} style={{padding:8, width:'100%'}}/></div>
      <div style={{margin:'8px 0'}}><label>{t('country')}</label><br/><select value={country} onChange={e=>setCountry(e.target.value)} style={{padding:8, width:'100%'}}>{countries.map(c => <option key={c} value={c}>{c}</option>)}</select></div>
      <button style={{background:'#0b63ce', color:'white', padding:'8px 14px', border:0, borderRadius:8}}>{t('save')}</button>
    </div>
    <div>
      <h3>{t('your_public_card')}</h3>
      <div style={{border:'1px solid #d6e4ff', borderRadius:12, padding:16, background:'white', display:'flex', alignItems:'center', gap:12}}><img src='/logo.svg' width='40' height='40' alt='logo'/><div><div style={{fontWeight:700, fontSize:18}}>{visibleName}</div><div>{country}</div><div style={{opacity:.7}}>Especialidad (opcional)</div></div></div>
    </div>
  </section>) }
