import { useState } from 'react';
import { Theme } from '../../components/Theme';
import { Time } from '../../components/Time';
import { WakeLock } from '../../components/wake-lock';
import style from './Manage.module.css'

const Manage = () => {
  const [theme, setTheme] = useState({
    'backgroundColor': '#08AEEA',
    'backgroundImage': 'linear-gradient(150deg, #08AEEA 0%, #2AF598 100%)',
  })

  return (
    <div className={style.gradient} style={theme}>
      <WakeLock />
      <Time />
      <Theme theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default Manage;