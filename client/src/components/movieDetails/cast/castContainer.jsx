import React from "react";
import ModalForCast from "./modalForCast";
import Scroll from "./horizontalScroll";
import ScrollLock, { TouchScrollable } from 'react-scrolllock';

const CastContainer = ({ data }) => {
  let lockScroll = false
  return (
    <div
      className='scrolable'>
      <h4 style={{ marginLeft: "20px" }}>
        <strong> Top cast:</strong>
      </h4>
      <div
        className="text-center"
        style={{
          overflow: "auto",
          whiteSpace: "nowrap"
        }}
      ><ScrollLock>
          <Scroll
            data={data.map(x => (
              <ModalForCast data={x} key={x.name} />
            ))}
          ></Scroll>
        </ScrollLock>
      </div>
    </div>
  );
};

export default CastContainer;
