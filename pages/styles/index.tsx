import React, { lazy, Suspense } from "react";
import { Skeleton } from "antd";
const LazyServiceSlider = lazy(() => import("../../components/ServiceSlider"));

export default function index() {
  return (
    <div className="flex items-center justify-center">
      <div className="container mx-auto">
        <Suspense fallback={<Skeleton active />}>
          <LazyServiceSlider />
        </Suspense>
      </div>
    </div>
  );
}
