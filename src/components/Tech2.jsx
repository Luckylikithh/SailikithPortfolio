import React from "react";


import {Sharedcanvas} from './canvas'
import { SectionWrapper } from "../hoc";

import { technologies2 } from "../constants";

const Tech2 = () => {
  return (
<>
    <div className='flex flex-row flex-wrap justify-center gap-10 mt-2'>
          {technologies2.map((techn) => (
            <div className='w-28 h-28' key={techn.name}>
              <Sharedcanvas   icon={techn.icon} />
            </div>
          ))}
        </div>
    </>
  );
 
};

export default SectionWrapper(Tech2, "");
