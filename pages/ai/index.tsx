import Link from 'next/link'

const AI = (props: any) => {
  console.log(props);

  return <>
    <div>Link params</div>
    <div>
      <Link href="/">Home</Link>
    </div>
  </>;
}

AI.getInitialProps = ({ query }: any) => {
  return { myParams: query };
}

export default AI;