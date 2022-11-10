import { Mail, Home, Codesandbox, HelpCircle, Anchor, CheckSquare, CornerDownRight} from "react-feather"

export default [
  {
    id: "home",
    title: "Home",
    icon: <Home size={20} />,
    navLink: "/home"
  },
  {
    id: "secondPage",
    title: "Second Page",
    icon: <Mail size={20} />,
    navLink: "/second-page"
  },
  {
    id: "About",
    title: "About",
    icon: <Codesandbox size={20} />,
    navLink: "/about"
  },
  {
    id: "Help",
    title: "Help",
    icon: <HelpCircle size={20} />,
    navLink: "/help"
  },
  {
    id: "Dimension",
    title: "Dimension",
    icon: <Anchor size={20} />,
    navLink: "/dimension"
  },
  {
    id: "V05_modal_test",
    title: "V05_modal_test",
    icon: <CheckSquare size={20} />,
    navLink: "/V05_modal_test"
  },
  {
    id: "V06_Export",
    title: "V06_Export",
    icon: <CornerDownRight size={20} />,
    navLink: "/V06_Export"
  }
]
