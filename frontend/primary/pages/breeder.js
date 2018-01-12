import { backendUrl, getBreeders, getBreeder } from './lib/backendService'

import MainLayout from './lib/components/MainLayout'

const Page = ({ breeder }) => 
  <MainLayout pageTitle={`${breeder.name} - ${breeder.city ? breeder.city: ''} ${breeder.state ? breeder.state : ''}`}>
    <h2></h2>
  </MainLayout>

Page.getInitialProps = async (props) => {
    return { breeder: await getBreeder(props.query.id) }
  }
  export default Page