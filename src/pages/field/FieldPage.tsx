import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import soil from "../../assets/soil.png";
import { soilId } from "../../logic/CropValues";
import { Crop } from "../../types/Crop";
import { HarvestedTable } from "./components/HarvestedTable";
import { CauliflowerCycle } from "../../logic/CaliflowerCycle";
import { PotatoCycle } from "../../logic/PotatoCycle";
import { SelectCrop } from "./components/SelectCrop";
import { HarvestedCrop } from "../../types/HarvestedCrop";
import { CropComponent } from "./components/CropComponent";

export const FieldPage = () => {
    const [crops, setCrops] = useState<Crop[]>([
        {id: 1, name: "Califlower", cycle: CauliflowerCycle},
        {id: 2, name: "Potato", cycle: PotatoCycle}
    ]);
    const [crop, setCrop] = useState<Crop>(crops[0]);
    const [harvestedCrops, setHarvestedCrops] = useState<HarvestedCrop[]>([]);
    const [plantedIds, setPlantedIds] = useState<number[]>([soilId, soilId, soilId, soilId]);

    useEffect(() => {
        // Initialise harvested crops from crops
        let harvested : HarvestedCrop[] = [];
        crops.forEach(crop => {
            harvested.push(
                {id: crop.id, name: crop.name, quantity: 0}
            );
        });
        setHarvestedCrops(harvested);
    }, [crops]);
 
    const onCropSelected = (crop : Crop) => {
        setCrop(crop);
    }

    const onCropHarvested = (crop : Crop, soilIndex : number) => {
        const index = harvestedCrops.findIndex(hc => hc.id === crop.id);
        const harvested = [...harvestedCrops];
        harvested[index].quantity += 1;
        setHarvestedCrops(harvested);

        const ids = [...plantedIds];
        ids[soilIndex] = soilId;
        setPlantedIds(ids);
    }

    const plant = (index : number) => {
        const ids = [...plantedIds];
        ids[index] = crop.id;
        setPlantedIds(ids);  
    }

    const getField = () => {
        return plantedIds.map((plantedId, index) => {
            if (plantedId === soilId) {
                // This is soil
                return <img onClick={() => plant(index)} src={soil} key={`soil-${index}`} alt="soil"/>
            } else {
                // This is a crop id. Find the crop and create the component
                const crop = crops.find(c => c.id === plantedId);
                if (crop) {
                    return <CropComponent
                        key={`crop-component-${soilId}`} 
                        soilIndex={index.toString()} 
                        crop={crop} 
                        onHarvestedCallback={() => onCropHarvested(crop, index)}/>
                } else {
                    // TODO: actually don't know what this is, lol, but return soil for now
                    return <img src={soil} key={`soil-${index}`} alt="soil"/>
                }
            }
        })
    }

    const getContent = () => {
        return <section className="pt-5 pb-5 bg-light">
            <Container>
                <SelectCrop crops={crops} onSelectedCallback={onCropSelected}/>
                {getField()}
                <HarvestedTable harvestedCrops={harvestedCrops}/>
            </Container>
        </section>
    }

    return <>
        <h1>Field</h1>
        {getContent()}
    </>
}