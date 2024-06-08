import React, {Fragment} from "react";

type itemType = {
    children?: itemType[]
}

type SubComponentType = React.FC<{ children: React.ReactNode }>

interface GenTest<T> {
    (
      list: T[],
      Component: React.FC,
      SubComponent: SubComponentType
    ): React.ReactNode
}

const GenChild: GenTest<itemType> = (list, Component, SubComponent) => {
    return (
        <Fragment>
                {
                    Array.isArray(list)
                        ? list.map((item, index) => {
                            return (
                                <Fragment>
                                    {
                                        item.children ? <SubComponent>
                                            {
                                                GenChild(item.children, Component, SubComponent)
                                            }
                                        </SubComponent> : <Component />
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
