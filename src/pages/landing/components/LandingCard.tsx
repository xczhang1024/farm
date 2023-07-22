import { Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

interface CardProps {
    title: string;
    link: string;
}

export const LandingCard = ({title, link} : CardProps) => {
    const navigate = useNavigate();

    const onCardClicked = (link : string) => {
        navigate(link);
    }

    return <Card className="shadow p-4 h-100 text-center rounded-2"
    onClick={() => onCardClicked(link)}
    style={{cursor: "pointer"}}>
        <Card.Header className="card-main-text border-0">
            {title}
        </Card.Header>
    </Card>
}