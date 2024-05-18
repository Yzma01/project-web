// @ts-nocheck
"use client";
import React, { useContext, useState } from "react";
import { ActualEvent } from "@/app/(root)/event/[id]/page";

const Cause = ({ id }: { id: number }) => {
  const event = useContext(ActualEvent);
  const [causes, setCauses] = useState(event.causes);
  const [consequences, setConsequences] = useState(event.consequences);
  console.log(event);

  return (
    <div className="w-[700px] h-[440px] overflow-y-auto shadow-md rounded-2xl border border-zinc-950 m-10 md:w-full sm:w-full">
      <div className="m-3">
        <p className="text-purple-2 font-bold text-2xl">{event.title}</p>
        <p>{event.event}</p>
        <h3 className="text-purple-1 text-xl">Causa: </h3>
        <p className="text-lg">
          {causes.length > 0
            ? causes.map(({ cau_cause }, index) => (
                <React.Fragment key={index}>
                  {index !== 0 && <br />}
                  {`${index + 1}. ${cau_cause}`}
                </React.Fragment>
              ))
            : "No tiene causas"}
        </p>
        <h3 className="text-purple-1 text-xl">Consecuencias: </h3>
        <p className="text-lg">
          {consequences.length > 0
            ? consequences.map(
                ({ con_consequence }, index) =>
                  (
                    <React.Fragment key={index}>
                      {index !== 0 && <br/>}
                      {`${index}.${con_consequence}`}
                    </React.Fragment>
                  )
              )
            : "No tiene consecuencias"}
        </p>
      </div>
    </div>
  );
};

export default Cause;



// ids [

//   cxc = {
//     cau_id: 1,
//   con_id: 1
// },
// cxc = {
//   cau_id: 1,
//   con_id: 2
// },
// cxc = {
//   cau_id: 1,
//   con_id: 2
// }
//   ]