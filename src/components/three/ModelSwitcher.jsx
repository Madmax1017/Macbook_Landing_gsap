// 14 and 16 - presentationControls

import react, {useRef} from "react";
import {PresentationControls} from "@react-three/drei";
import MacBookModel16 from "../models/Macbook-16.jsx";
import MacbookModel14 from "../models/Macbook-14.jsx";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const ANIMATION_DURATION =1;
const OFFSET_DISTANCE = 5;

const fademeshes = (group,opacity) => {
    if(!group) return;

    group.traverse((child) => {
        if(child.isMesh) {
            child.material.transparent = true;
            gsap.to(child.material, {opacity, duration: ANIMATION_DURATION});
        }
    })
}
const moveGroup = (group,x) => {
    if(!group) return;

    gsap.to(group.position, {x, duration: ANIMATION_DURATION});
}

 const ModelSwitcher = ({scale , isMobile}) => {
     const smallMacBookRef = useRef();
     const largeMacbookRef = useRef();
     useGSAP(() => {
         if(showLargeMacBook) {
             moveGroup(smallMacBookRef.current, -OFFSET_DISTANCE);
             moveGroup(largeMacbookRef.current, 0);

             fademeshes(smallMacBookRef.current, 0);
             fademeshes(largeMacbookRef.current, 1);
         } else {
             moveGroup(smallMacBookRef.current, 0);
             moveGroup(largeMacbookRef.current, -OFFSET_DISTANCE);

             fademeshes(smallMacBookRef.current, 1);
             fademeshes(largeMacbookRef.current, 0);
         }
     },[scale])

     const controlsConfig = {
         snap: true,
         speed: 1,
         zoom: 1,
         polar: [-Math.PI, Math.PI],
         azimuth: [-Infinity, Infinity],
         config : {mass:1,tension:0,friction:26}
     }

     const showLargeMacBook = scale === 0.08 || scale === 0.05;
     return (
         <>
         <PresentationControls {...controlsConfig}>
             <group ref={largeMacbookRef}>
                 <MacBookModel16 scale={isMobile ? 0.05 : 0.08}/>
             </group>
         </PresentationControls>
             <PresentationControls {...controlsConfig}>
             <group ref={smallMacBookRef}>
                  <MacbookModel14 scale={isMobile ? 0.03 : 0.06}/>
                 </group>
             </PresentationControls>
         </>
     )
 }
 export default ModelSwitcher;