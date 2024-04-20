import { Permanent_Marker, Poppins } from "next/font/google";

const Poppins200 = Poppins({ weight: "200", subsets: ["latin"] });
const Poppins300 = Poppins({ weight: "300", subsets: ["latin"] });
const Poppins400 = Poppins({ weight: "400", subsets: ["latin"] });
const Poppins500 = Poppins({ weight: "500", subsets: ["latin"] });
const Poppins600 = Poppins({ weight: "600", subsets: ["latin"] });
const Poppins700 = Poppins({ weight: "700", subsets: ["latin"] });
const Poppins800 = Poppins({ weight: "800", subsets: ["latin"] });
const Poppins900 = Poppins({ weight: "900", subsets: ["latin"] });
const PermanentMarker = Permanent_Marker({ weight: "400", subsets: ["latin"] });

export {
    PermanentMarker,
    Poppins200,
    Poppins300,
    Poppins400,
    Poppins500,
    Poppins600,
    Poppins700,
    Poppins800,
    Poppins900,
};
