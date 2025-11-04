import { FaWhatsapp } from "react-icons/fa";

// Fix TS2786 warning
const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> =
    FaWhatsapp as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

export default WhatsAppIcon;