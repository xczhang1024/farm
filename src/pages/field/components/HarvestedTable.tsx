import { Table } from "react-bootstrap"
import { HarvestedCrop } from "../../../types/HarvestedCrop";

interface HarvestedTableProps {
    harvestedCrops : HarvestedCrop[];
}

export const HarvestedTable = ({harvestedCrops} : HarvestedTableProps) => {
    const getTableRow = (harvestedCrop : HarvestedCrop) => {
        return <tr key={`table-row-${harvestedCrop.id}`} className="align-middle">
            <td>{harvestedCrop.name}</td>
            <td>{harvestedCrop.quantity}</td>
        </tr>
    }

    return <Table hover>
        <thead>
            <tr>
                <th>Crop name</th>
                <th>Harvested quantity</th>
            </tr>
        </thead>
        <tbody>
            {harvestedCrops.map(crop => {
                return getTableRow(crop);
            })}
        </tbody>
    </Table>
}