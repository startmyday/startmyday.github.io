import Link from 'next/link'
import { FormEvent, useState } from 'react';
import { useGenerateImageService } from '../../services/openai';
import style from './AI.module.css'

const AI = () => {
  const [prompt, setPrompt] = useState<string>('')

  const { loading, data: srcArr, error, fetchImage } = useGenerateImageService();

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    setPrompt(event.currentTarget.value);
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchImage({ prompt });
  }

  const shiftUp = loading || !!srcArr;

  return (
    <div className={style.ai}>
      <div className={style.center}>
        <form onSubmit={onSubmit} style={{ marginTop: shiftUp ? 0 : '300px' }} className={style.form}>
          <input autoFocus type="text" onChange={onChange} className={style.prompt} placeholder="What's on your mind?" />
        </form>
      </div>
      {!!srcArr && !loading && <div>{
        srcArr.map(({ url }) => (<img className={style.image} key={url} src={url} />))
      }</div>}
      {loading && <div><span className={style.loading}>Loading...</span></div>}
    </div>
  )
}

AI.getInitialProps = ({ query }: any) => {
  return { myParams: query };
}

export default AI;