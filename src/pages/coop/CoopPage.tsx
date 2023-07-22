import { useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { CollectedEggs } from "../../types/CollectedEggs"
import { EggTable } from "./components/EggTable"
import { CoopComponent } from "./components/CoopComponent"

export const CoopPage = () => {
    const [collectedEggs, setCollectedEggs] = useState<CollectedEggs>({
        whiteEggQuantity: 0,
        brownEggQuantity: 0
    })

    const onAddChicken = () => {

    }

    const getContent = () => {
        return <section className="pt-5 pb-5 bg-light">
            <Container>
                <Row>
                    <Col>
                        <CoopComponent/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button 
                            className="mt-1" 
                            variant="outline-primary" 
                            onClick={onAddChicken}>Add chicken</Button>
                    </Col>
                </Row>
                <EggTable eggs={collectedEggs}/>
            </Container>
        </section>
    }

    return <>
        <h1>Coop</h1>
        {getContent()}
    </>
}