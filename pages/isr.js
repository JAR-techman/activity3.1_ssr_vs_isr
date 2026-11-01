export async function getStaticProps() {
  return {
    props: { generatedAt: new Date().toISOString() },
    revalidate: 10,
  }
}

export default function Isr({ generatedAt }) {
  return (
    <div>
      <h1>ISR Demo</h1>
      <p>This page is static and refreshes every 10 seconds.</p>
      <p>Generated at: {generatedAt}</p>
    </div>
  )
}