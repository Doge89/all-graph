import { LeftBarOptions } from "./typescript/types/types";

import { faHome } from "@fortawesome/free-solid-svg-icons";

export const URL_SERVER = "http://localhost:3000";

export const LEFT_NAVBAR_OPTIONS: LeftBarOptions = [
  { icon: faHome, textOption: 'Inicio', link: '/dashboard' }
]
