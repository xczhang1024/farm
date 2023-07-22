import { Badge } from "react-bootstrap";

interface InfoBadgeProps {
    text: string;
}

export const InfoBadge = ({text} : InfoBadgeProps) => {
    return <Badge bg="info">
        {text}
    </Badge>
}