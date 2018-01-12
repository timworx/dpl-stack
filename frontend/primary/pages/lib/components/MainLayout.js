import Head from 'next/head'
import globalStyle from './globalStyles.js'

const primaryPageTitle = "Find your new best friend | GoodDog"
const primaryPageDesc = "GoodDog connects you with your new best friend - come in and meet your pup."


export default ({pageTitle, pageDesc, children}) => {
    const title = pageTitle ? `${pageTitle} | GoodDog` : primaryPageTitle
    const desc = pageDesc || primaryPageDesc
    return <div>
        <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous" />
        </Head>
        <nav className="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
            <a className="navbar-brand">GoodDog</a>
        </nav>
        <div className="container">
            <div>
                {children}
            </div>
        </div>
        <style jsx>{`
            .logoType {
                color: #333;
            }
            .layoutContainer {

            }
        `}</style>
        {/* Here we import the global CSS */}
        <style jsx global>{globalStyle}</style>
    </div>
}