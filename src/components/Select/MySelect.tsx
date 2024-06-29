import React from "react";

type ItemType = {
    title: string
    value: any
}

type SelectType = {
    titleSelect: string
    setTitleSelect: (titleSelect: string) => void
    onChance: (value: any) => void
    items: ItemType[]
    collapsedSelect: boolean
    setCollapsedSelect: (collapsedSelect: boolean) => void
}

export const MySelect = (props: SelectType) => {

    const onClickHandler = () => {
        props.setCollapsedSelect(!props.collapsedSelect)
    }

    const onItemClick = (title: string /*value: any*/) =>
    {
        props.setTitleSelect(title);
        props.setCollapsedSelect(true);
    }

    return (
        <div className="select-wrapper">
            <div className="select" onClick={onClickHandler}>{props.titleSelect}</div>
            {!props.collapsedSelect && (
                <div className="select-options">
                    {props.items.map((i, index) =>
                        <div
                            className="select-option"
                            onClick={() => onItemClick(i.title)}
                            key={index}
                        >
                            {i.title}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};