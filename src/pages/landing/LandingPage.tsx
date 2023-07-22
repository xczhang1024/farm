import { Col, Container, Row } from "react-bootstrap"
import { LandingCard } from "./components/LandingCard";

interface Section {
    title: string;
    link: string;
}

export const LandingPage = () => {
    const sections : Section[] = [
        {title: "Crops", link: "/field"}, 
        {title: "Chickens", link: "/coop"}
    ];

    const getContent = () => {
        return <section className="pt-5 pb-5 bg-light">
            <Container>
                <Row className="d-flex flex-row">
                    {getColumnsForRow()}
                </Row>
            </Container>
        </section>
    }

    const getColumnsForRow = () => {
        return sections.map((section, index) => {
            return <Col key={`col-${index}`} className="col-md-6 col-lg-6 col-sm-12 col-xs-12 col-12 mb-2 text-center">
                <LandingCard key={`card-${index}`} title={section.title} link={section.link}/>
            </Col>
        })
    }

    return <>
        <h1>Farm</h1>
        {getContent()}
    </>
}