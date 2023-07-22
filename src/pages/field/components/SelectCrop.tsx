import { Form } from "react-bootstrap";
import { Crop } from "../../../types/Crop"

interface SelectCropProps {
    crops : Crop[];
    onSelectedCallback: (crop : Crop) => void;
}

export const SelectCrop = ({crops, onSelectedCallback} : SelectCropProps) => {
    return <>
        <h2>Plant something :)</h2>
        <Form>
            {crops.map(((crop, index) => {
                            return <Form.Check
                                defaultChecked={index === 0}
                                type="radio"
                                name="crops"
                                key={`select-${crop.id}`}
                                label={crop.name}
                                onClick={() => onSelectedCallback(crop)}/>
                }))}
        </Form>
    </>
}