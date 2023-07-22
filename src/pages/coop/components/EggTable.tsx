import { Table } from "react-bootstrap"
import { CollectedEggs } from "../../../types/CollectedEggs"

interface EggTableProps {
    eggs : CollectedEggs
}
export const EggTable = ({eggs} : EggTableProps) => {
    return <Table hover>
        <thead>
            <tr>
                <th>White egg quantity</th>
                <th>Brown egg quantity</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{eggs.whiteEggQuantity}</td>
                <td>{eggs.brownEggQuantity}</td>
            </tr>
        </tbody>
    </Table>
}