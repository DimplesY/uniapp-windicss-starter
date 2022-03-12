import uni from "@dcloudio/vite-plugin-uni";

import createAutoImport from "./auto-import";
import createSetupExtend from "./setup-extend";
import createWindiCss from "./windicss";

export default function createVitePlugins() {
  const vitePlugins = [uni()];
  vitePlugins.push(createWindiCss());
  vitePlugins.push(createAutoImport());
  vitePlugins.push(createSetupExtend());
  return vitePlugins;
}
