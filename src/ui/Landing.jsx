import React from 'react'
import { useTranslation } from 'react-i18next'
export default function Landing({onStart}){ const { t } = useTranslation(); return (
  <main style={{maxWidth:960, margin:'40px auto', padding:24}}>
    <h1 style={{fontSize:32, marginBottom:12}}>{t('hero_title')}</h1>
    <p style={{marginBottom:12}}>{t('pricing')}</p>
    <div style={{display:'flex', gap:12}}><button onClick={onStart} style={{background:'#0b63ce', color:'white', padding:'10px 16px', borderRadius:10, border:0}}>{t('start_now')}</button></div>
    <div style={{marginTop:24, color:'#345'}}>Stripe Checkout, RGPD y procesamiento de informes PDF se integrarán en el backend. Esta vista es un prototipo visual.</div>
  </main>) }
