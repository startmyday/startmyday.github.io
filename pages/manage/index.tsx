import { Time } from '../../components/Time';
import { WakeLock } from '../../components/wake-lock';
import style from './Manage.module.css'

const Manage = () => {


  return (
    <div className={style.gradient}>
      <WakeLock />
      <Time />
    </div>
  )
}

export default Manage;