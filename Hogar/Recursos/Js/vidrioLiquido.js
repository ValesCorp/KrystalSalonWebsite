//
//  vidrioLiquido.js
//  
//
//  Created by David Vales on 19/07/26. – Vales Corp
//

//import { LiquidGlass } from "https://cdn.jsdelivr.net/npm/@ybouane/liquidglass/dist/index.js";
//
//    const glassEl = document.querySelector(".my-glass");
//    glassEl.dataset.config = JSON.stringify({
//        floating: true,
//        blurAmount: 0.25,
//    });
//    const instance = await LiquidGlass.init({
//        root: document.querySelector("#root"),
//        glassElements: [glassEl],
//    });
//
//  // Later, to tear down:
//  // instance.destroy();

import { LiquidGlass } from "@ybouane/liquidglass";

(async () => {
  const glassEl = document.querySelector(".my-glass");

  if (!glassEl) {
    console.warn("No se encontró .my-glass. Revisa la clase en el HTML.");
    return;
  }

  glassEl.dataset.config = JSON.stringify({
    floating: true,
    blurAmount: 0.25,
  });

  const instance = await LiquidGlass.init({
    root: document.querySelector("#root"),
    glassElements: [glassEl],
  });

  // Si más adelante quieres destruirlo:
  // instance.destroy();
})();
