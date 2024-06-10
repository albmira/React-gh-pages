import { Helmet } from "react-helmet";

function PrivacyPoplloonView() {
    return<div>
        <Helmet>
            <title>Poplloon Privacy Policy | Mira Softworks</title>
            
            <meta name="description" content="privacy policy"/>
        </Helmet>

        <div className="container d-flex">
            <section className="align-items-end justify-content-between text-start">
                <h5 className="title">Privacy Policy</h5>

                <br/>

                <article className="node node-page node-even">
                    <div id="content-area">
                        <div className="field-body">
                            <p>
                                <em>Effective Date: 8 Jun, 2024</em>
                            </p>

                            <br/>

                            <h2 className="pb-5">Introduction</h2>

                            <h4>This Privacy Policy describes how Poplloon ("we" or "our") collects, uses, and protects the information of users ("you" or "your") who play our offline non-profit game developed with Unity.</h4>

                            <ol className="mt-4">
                                <li>
                                    <h4>Information Collected</h4>
                                    <p>Although Poplloon is an offline game and we do not actively collect personal data from users, it is important to note that Unity Technologies, the provider of the Unity game engine, may automatically collect certain data. This may include:</p>
                                    <ul className="mt-4">
                                        <li>
                                            <p>Technical information about your device, such as hardware model, operating system version, unique device identifiers, and performance data.</p>
                                        </li>
                                        <li>
                                            <p>Usage data, such as the frequency and duration of game usage.</p>
                                        </li>
                                    </ul>
                                </li>
                                
                                <br/>

                                <p>For more information on how Unity collects and uses your data, please refer to the<a id="offsetText" className="link-secondary text-decoration-none" href="https://unity.com/es/legal/privacy-policy" target="_blank" rel="noopener noreferrer"> Unity Privacy Policy.</a></p>

                                <li>
                                    <h4 className="pt-4">Use of Information</h4>
                                    <p>We do not collect or use your personal data. Any data automatically collected by Unity is used for the following purposes:</p>
                                    <ul className="mt-4">
                                        <li>
                                            <p>Improving the quality and performance of the Unity game engine.</p>
                                        </li>
                                        <li>
                                            <p>Analyzing game usage to make technical and design improvements.</p>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <h4 className="pt-4">Sharing of Information</h4>
                                    <p>We do not share any personal information of users. Unity may share aggregated and anonymous data with third parties according to their own privacy policies.</p>
                                </li>

                                <li>
                                    <h4 className="pt-4">Information Security</h4>
                                    <p>We are committed to protecting your information. Although we do not collect personal data, we implement appropriate security measures to protect any automatically collected information against unauthorized access, alteration, and destruction.</p>
                                </li>

                                <li>
                                    <h4 className="pt-4">User Rights</h4>
                                    <p>Since we do not directly collect personal data, you do not need to take any action to protect your data. However, you can review and adjust your device's privacy settings to limit Unity's data collection.</p>
                                </li>

                                <li>
                                    <h4 className="pt-4">Changes to this Privacy Policy</h4>
                                    <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. We encourage you to review this policy periodically to stay informed about how we protect your information.</p>
                                </li>

                                <li>
                                    <h4 className="pt-4">Contact</h4>
                                    <p>If you have any questions or concerns about this Privacy Policy, please contact us at: <em>albertmiragamedev@gmail.com.</em></p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    </div>
}

export default PrivacyPoplloonView;