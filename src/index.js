import ReactDOMclient from "react-dom/client";
import { ParentComponent } from "./Parent";

const container = document.getElementById("root");
const root = ReactDOMclient.createRoot(container);
root.render(<ParentComponent />);
