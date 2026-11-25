import Inicio from "../pages/Inicio";
import Obras from "../pages/Obras";
import Procesos from "../pages/Procesos";
import Contacto from "../pages/Contacto";
import Principios from "../pages/Principios";
import Estudios from "../pages/Estudios";

export const router = [
    {
        path: "/",
        element: <Inicio />,
    },
    {
        path: "/obras",
        element: <Obras />,
    },
    {
        path: "/procesos",
        element: <Procesos />,
    },
    {
        path: "/contacto",
        element: <Contacto />,
    },

    {
        path: "/principios",
        element: <Principios />,
    },
    {
        path: "/estudios",
        element: <Estudios />,
    }

]