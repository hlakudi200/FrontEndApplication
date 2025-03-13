'use client'
import withAuth from '@/hoc/withAuth';
import React from 'react'

const ClinetHome=()=> {
  return (
    <div>Client Side</div>
  )
}

export default withAuth(ClinetHome,{allowedRoles:['client']});