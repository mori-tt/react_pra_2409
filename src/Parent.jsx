import ReactDOMClient from "react-dom/client";
import { App } from "./App5";
export const ParentComponent = () => {
  return (
    <div>
      {/* Primary ボタン */}
      <App primary={true} />
      {/* Secondary ボタン */}
      <App primary={false} />
    </div>
  );
};
