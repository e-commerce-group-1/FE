import Head from 'next/head';
import React from 'react'

function HeadApp(props) {
  return (
    <Head>
      <title>{props.title ? props.title : 'Alpha Group'}</title>
      <link
        rel="icon"
        href={
              props.icon
                ? props.icon
                : '/favicon.png'
            }
      />
    </Head>
  )
}

export default HeadApp