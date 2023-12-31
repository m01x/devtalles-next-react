"use client";
import { SimpleWidget } from "./SimpleWidget";

export const WidgetGrid = () => {
  return (
    <div className="flex flex-wrap items-center justify-center">
      <SimpleWidget />
      <SimpleWidget />
    </div>
  );
};
