import Link from 'next/link'
import { FormEvent, useState } from 'react';

const AI = (props: any) => {
  // console.log(props);

  const [prompt, setPrompt] = useState<string>('')
  const [src, setSrc] = useState<string>('')

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    setPrompt(event.currentTarget.value);
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      fetch("https://aliveapi.cyclic.app/generateimage", {
        "headers": {
          "content-type": "application/json"
        },
        "body": JSON.stringify({
          prompt
        }),
        "method": "POST",
      }).then(async (res) => {
        const response = await res.json();

        if (response.success) {
          setSrc(response.data)
        }
      })
    } catch (error) {

    }
  }

  return <>
    <div>
      bug fixed bro!!!!
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} />
      </form>
      {!!src && <img key={src} src={src} />}
    </div>
    <div>
      <Link href="/">Home</Link>
    </div>
  </>;
}

AI.getInitialProps = ({ query }: any) => {
  return { myParams: query };
}

export default AI;