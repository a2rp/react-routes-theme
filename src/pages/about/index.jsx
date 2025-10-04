import React from 'react'
import { Col1, Col2, Row, Styled } from './styled'
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt, FaUser, FaYoutube } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import IndianFlag from '../../components/IndianFlag'
import { TbWorldWww } from 'react-icons/tb'

const About = () => {
    // in Home.jsx (top of file)
    function formatISTLabel(iso) {
        try {
            const d = new Date(iso);
            const parts = new Intl.DateTimeFormat("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
                timeZone: "Asia/Kolkata",
            }).formatToParts(d);

            const get = (t) => parts.find((p) => p.type === t)?.value || "";
            return `${get("month")} ${get("day")}, ${get("year")} ${get("hour")}:${get("minute")}:${get("second")} hrs`;
        } catch {
            return "-";
        }
    }

    // choose commit time, fall back to build time
    const LAST_ISO =
        (typeof __APP_COMMIT_ISO__ !== "undefined" && __APP_COMMIT_ISO__) ||
        (typeof __APP_BUILD_ISO__ !== "undefined" && __APP_BUILD_ISO__) ||
        null;

    const lastUpdatedLabel = LAST_ISO ? formatISTLabel(LAST_ISO) : "-";

    return (
        <div>
            <Styled.Wrapper>
                <h3>React Routes Theme - last updated: <time dateTime={LAST_ISO || ""}>{lastUpdatedLabel}</time></h3>

                <fieldset>
                    <legend>About Project</legend>
                    <div className='para'>
                        <p>
                            React Routes Theme is a routing-first starter for building clean, demo-ready frontends. It keeps the surface polished and the internals simple, so you can ship a credible preview without wrestling infrastructure.
                        </p>

                        <p>
                            <strong>What you get</strong>
                        </p>
                        <ul>
                            <li><strong>Explicit routes, lazy pages:</strong> predictable links, fast splits, and zero surprise edges.</li>
                            <li><strong>Sidebar from your paths:</strong> collapsible, searchable, and keyboard-friendly—no duplicate config.</li>
                            <li><strong>Breadcrumbs that mirror URLs:</strong> tidy context with sensible fallbacks.</li>
                            <li><strong>Display-only safety:</strong> fixtures for data, deep links for detail pages, and demo-gated write actions.</li>
                            <li><strong>Built-ins that matter:</strong> a small custom confirm modal and section-only print for clean PDFs.</li>
                            <li><strong>Token-first styling:</strong> CSS variables, dark/light themes, and a restrained blue accent.</li>
                            <li><strong>GH Pages friendly:</strong> base/basename wired + 404 fallback for reliable deep links.</li>
                        </ul>

                        <p>
                            <strong>What you won’t fight</strong>
                        </p>
                        <ul>
                            <li>No heavy UI framework to unlearn—just sensible defaults.</li>
                            <li>No backend wiring for demos—fixtures keep it deterministic.</li>
                            <li>No alerts or browser prompts—only custom, styled dialogs.</li>
                        </ul>

                        <p>
                            Built with Vite, React Router, and styled-components, the kit stays fast in dev and lean in prod. When you’re ready to go beyond demos, swap the fixtures for a repository that talks to your API—your routes and UI stay put.
                        </p>

                    </div>
                </fieldset>

                <fieldset>
                    <legend>About Developer</legend>
                    <div className='aboutDeveloper'>
                        <Row>
                            <Col1>Name</Col1>
                            <Col2>
                                Ashish Ranjan
                                <div className="icon"><FaUser size={20} /></div>
                            </Col2>
                        </Row>
                        <Row>
                            <Col1>Phone</Col1>
                            <Col2>
                                <a
                                    href="tel:+918123747965"
                                >+91 8123747965</a>
                                <div className="icon"><FaPhoneAlt size={20} /></div>
                            </Col2>
                        </Row>
                        <Row>
                            <Col1>Email</Col1>
                            <Col2>
                                <a
                                    href="mailto:ash.ranjan09@gmail.com"
                                >ash.ranjan09@gmail.com</a>
                                <div className="icon"><MdEmail size={20} /></div>
                            </Col2>
                        </Row>
                        <Row>
                            <Col1>Nationality</Col1>
                            <Col2>
                                The Republic of India
                                <div className="icon"><IndianFlag /></div>
                            </Col2>
                        </Row>
                        <Row>
                            <Col1>Website</Col1>
                            <Col2>
                                <a
                                    href="https://www.ashishranjan.net/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >https://www.ashishranjan.net/</a>
                                <div className="icon"><TbWorldWww size={20} /></div>
                            </Col2>
                        </Row>
                        <Row>
                            <Col1>Old Website</Col1>
                            <Col2>
                                <a
                                    href="http://www.ashishranjan.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >http://www.ashishranjan.in/</a>
                                <div className="icon"><TbWorldWww size={20} /></div>
                            </Col2>
                        </Row>
                        <Row>
                            <Col1>Facebook</Col1>
                            <Col2>
                                <a
                                    href="https://www.facebook.com/theash.ashish/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >facebook.com/theash.ashish/</a>
                                <div className="icon"><FaFacebook size={20} /></div>
                            </Col2>
                        </Row>
                        <Row>
                            <Col1>LinkedIn</Col1>
                            <Col2>
                                <a
                                    href="https://www.linkedin.com/in/aashishranjan/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >linkedin.com/in/aashishranjan/</a>
                                <div className="icon"><FaLinkedin size={20} /></div>
                            </Col2>
                        </Row>
                        <Row>
                            <Col1>YouTube</Col1>
                            <Col2>
                                <a
                                    href="https://www.youtube.com/channel/UCLHIBQeFQIxmRveVAjLvlbQ"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >youtube.com/channel/UCLHIBQeFQIxmRveVAjLvlbQ</a>
                                <div className="icon"><FaYoutube size={20} /></div>
                            </Col2>
                        </Row>
                        <Row>
                            <Col1>GitHub</Col1>
                            <Col2>
                                <a
                                    href="https://github.com/a2rp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >github.com/a2rp</a>
                                <div className="icon"><FaGithub size={20} /></div>
                            </Col2>
                        </Row>
                    </div>
                </fieldset>
            </Styled.Wrapper>
        </div>
    )
}

export default About