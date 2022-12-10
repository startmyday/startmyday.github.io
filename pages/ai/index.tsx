import Link from 'next/link'
import { FormEvent, useState } from 'react';
import { useGenerateImageService } from '../../services/openai';
import style from './AI.module.css'

const AI = () => {
  const [prompt, setPrompt] = useState<string>('')

  const { loading, data: src, error, fetchImage } = useGenerateImageService();

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    setPrompt(event.currentTarget.value);
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchImage({ prompt });
  }

  const shiftUp = loading || !!src;

  return (
    <div className={style.ai}>
      <div className={style.center}>
        <form onSubmit={onSubmit} style={{ marginTop: shiftUp ? 0 : '300px' }} className={style.form}>
          <input autoFocus type="text" onChange={onChange} className={style.prompt} placeholder="What's on your mind?" />
        </form>
        {!!src && !loading && <div className={style.content}><img key={src} src={src} /></div>}
        {loading && <div className={style.content}><span className={style.loading}>Loading...</span></div>}
      </div>
    </div>
  )
}

AI.getInitialProps = ({ query }: any) => {
  return { myParams: query };
}

export default AI;