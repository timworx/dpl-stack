import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import { getBreeders } from './lib/backendService'
import MainLayout from './lib/components/MainLayout'
import BreederList from './lib/components/BreederList'


/*
Welcome to GoodDog
-> fetch breeders, display them

*/ 

const Page = ({breeders}) =>
  <MainLayout pageTitle="Welcome to our homepage">
        <style jsx>{`
            h2 {
                color: red!important;
            }
        `}</style>
    <h4 className="text-center">Find a breeder that matches you.</h4>
    <BreederList breeders={breeders} />
  </MainLayout>

Page.getInitialProps = async ({ req }) => {
  return { breeders: await getBreeders() }
}

export default Page
