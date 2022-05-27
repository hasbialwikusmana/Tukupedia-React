import React from 'react'
import { Link } from 'react-router-dom'
import "./page404.css"

const Page404 = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="error-templates">
                    <h1>404</h1>
                    <h2>Page not found</h2>
                    <div className="error-details">
                        Sorry, an error has occured, Requested page not found!
                    </div>
                    <div className="error-action">
                    <Link to="/" className='btn btn-success btn-lg'>Back to home</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page404