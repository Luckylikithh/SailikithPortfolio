import React from "react";


import {Parentcanvas} from './canvas'
import { SectionWrapper } from "../hoc";

import { FE } from "../constants";

const FEtech = () => {
  return (
<>
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-2'>
          {FE.map((tech) => (
            <div className='w-28 h-28' key={tech.name}>
              <Parentcanvas   icon={tech.icon} />
            </div>
          ))}
        </div>
    </>
  );
 
};

export default SectionWrapper(FEtech, "");
