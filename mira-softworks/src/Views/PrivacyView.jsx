import { Helmet } from "react-helmet";

function PrivacyView() {
    return <div>
        
        <Helmet>
            <title>Privacy Policy | Mira Softworks</title>
                
            <meta name="description" content="privacy policy"/>
        </Helmet>   

        <div id="containerPadding" className="container d-flex">
            <section className="align-items-end justify-content-between text-start">
                <h1 className="title">Privacy Policy By Product</h1>

                <br/>

                <section className="node node-page node-even">
                    <div id="content-area">
                        <div className="field-body">
                            <ul className="mt-4 px-5">
                                <li>
                                    <a className="link-light" href="privacy/poplloon">Privacy Policy [Poplloon, Android, Effective Date: 8 Jun, 2024] </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    </div>
}

export default PrivacyView;