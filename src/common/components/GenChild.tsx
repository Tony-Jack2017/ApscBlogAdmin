import React, {Fragment} from "react";
import {isArray} from "util";

type SubComponentType = React.FC<{children: React.ReactNode}>

export type itemType<T> = {
}

function GenChild<T extends itemType>(list: T[], Component: React.FC, SubComponent: SubComponentType){
    return (
        <Fragment>
                {
                    isArray(list)
                        ? list.map((item, index) => {
                            return (
                                <Fragment>
                                    {
                                        item.children ? <SubComponent>
                                            {
                                                GenChild(item.children, Component, SubComponent)
                                            }
                                        </SubComponent> : <Component/>
                                    }
                                </Fragment>
                            )
                        })
                        : <Component />
                }
        </Fragment>

    )
}

export default GenChild