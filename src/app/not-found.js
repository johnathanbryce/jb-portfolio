import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div> 
        <h2> Whoops! This page does not exist.</h2> 
        <Link href='/'> Return home. </Link> 
    </div>
  )
}
