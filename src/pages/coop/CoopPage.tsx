import { useEffect, useState } from "react"
import coop from "../../assets/coop/coop.png";
import { Button, Col, Container, Row } from "react-bootstrap"
import { CollectedEggs } from "../../types/CollectedEggs"
import { EggTable } from "./components/EggTable"
import { Chicken } from "../../types/Chicken";
import { 
    chickenCanvasSize, 
    chickenCanvasSizeMultiplier, 
    chickenLayInterval, 
    chickenSize 
} from "../../logic/ChickenValues";
import { randomInteger } from "../../utils";
import { ChickenColour } from "../../types/ChickenColour";
import { ChickenCanvas } from "./components/ChickenCanvas";

export const CoopPage = () => {
    const [chickens, setChickens] = useState<Chicken[]>([]);
    const [collectedEggs, setCollectedEggs] = useState<CollectedEggs>({
        whiteEggQuantity: 0,
        brownEggQuantity: 0
    });

    useEffect(() => {
        const layInterval = setInterval(() => { 
            if (chickens.length > 0) {
                const randomIndex = randomInteger(0, chickens.length - 1);
                const cs = [...chickens];
                cs[randomIndex].hasEgg = true;
                setChickens(cs);
            }
        }, chickenLayInterval);

        return () => clearInterval(layInterval);
    })

    const onAddChicken = () => {
        const maxMultiplier : number = chickenCanvasSizeMultiplier - 1;
        const initialXMultiplier : number = randomInteger(0, maxMultiplier);
        const initialYMultiplier : number = randomInteger(0, maxMultiplier);

        const colour : number = randomInteger(0, 1);
        let chickenColour : ChickenColour = ChickenColour.White;
        if (colour === 1) {
            chickenColour = ChickenColour.Brown;
        }

        const chicken : Chicken = {
            colour: chickenColour,
            hasEgg: false,
            x: initialXMultiplier * chickenSize,
            y: initialYMultiplier * chickenSize
        };
        setChickens([...chickens, chicken]);
    }

    const getContent = () => {
        return <section className="pt-5 pb-5 bg-light">
            <Container>
                <Row>
                    <Col>
                        <img src={coop} key="coop-image" alt="chicken-coop"/>
                    </Col>
                    <Col>
                        <ChickenCanvas 
                            chickens={chickens} 
                            canvasWidth={chickenCanvasSize}
                            canvasHeight={chickenCanvasSize}/>
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