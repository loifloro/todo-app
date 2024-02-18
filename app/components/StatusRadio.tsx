"use client";

import { setStatus } from "@/actions/setStatus";
import React, { useState } from "react";

interface StatusRadioProps {
  id? : string
  status?: string,
  checked?: boolean
}

export default function StatusRadio({ id, status, checked }: StatusRadioProps) {
  const [check, setChecked] = useState(checked);

  async function handleChange() {
    if (id && status) {
      setChecked(!check);
      try {
        await setStatus(id, status)
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
        <input
            type="checkbox"
            checked={check}
            onChange={handleChange}
            className={`
                rounded-full
                h-5
                w-5
                border
                border-slate-200
                dark:border-slate-50/20
                cursor-pointer
                checked:bg-gradient-to-br
                from-cyan-300
                to-indigo-400 
                bg-inherit
                box-content
                before:checked:content-check
                before:left-[25%]
                before:top-[-10%]
                before:w-5
                before:h-5
                before:relative
            `}
        />
  );
}