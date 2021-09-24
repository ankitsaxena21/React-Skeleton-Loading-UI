import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonProductLib = () => {
    return (
        <SkeletonTheme>
            <section>
                <div style={{ padding: "8px" }}>
                    <div>
                        <Skeleton height={200} />
                    </div>
                    <div style={{ marginTop: "7px" }}>
                        <Skeleton height={12} width={`100%`} />
                    </div>
                    <div style={{ marginTop: "7px" }}>
                        <Skeleton height={12} width={`70%`} />
                    </div>
                    <div style={{ marginTop: "7px" }}>
                        <Skeleton height={12} width={`40%`} />
                    </div>
                </div>
            </section>
        </SkeletonTheme>
    );
};

export default SkeletonProductLib;