// FC = FunctionComponent
// Componentの型定義、以下資料ではFCではなくJSX.Elementを推奨している
// https://zenn.dev/motonosuke/articles/13d0fdd417ec7c
import React, { FC, useRef, useState } from 'react'
import "./styles.css"
// GoogleフォントAPI
import 'material-symbols';

// navに表示するために使用する変数
// nameはnav名
// iconはmaterial-symbolsのアイコンを表示するために使用している
// itemsは下↓をクリックした際に表示されるnav名

const menuItems = [
    {
        name: "Home",
        icon: "home",
    },
    {
        name: "Settings",
        icon: "settings",
        items: [
            "Display",
            "Editor",
            "Theme",
            "Interface"
        ],
    },
]

// 型定義
type Item = {
    name: string;
    icon: string;
    items: string[];
}

// アイコン出力
// 変数名 : 変数の型定義
const Icon = ({ icon }: { icon: string }) => (
    <span className="material-symbols-outlined">{icon}</span>
)

// NavHeader
// アイコンはmenuを指定
// spanタグに表示するnavカテゴリ名を設定
const NavHeader = () => (
    <header className='sidebar-header'>
        <button type="button">
            <Icon icon="menu" />
        </button>
        <span>Admin</span>
    </header>
)

// 型定義
type ButtonProps = {
    onClick: (item: string) => void;
    name: string;
    // string | undefined 型を定義している
    icon?: string;
    isActive: boolean;
    hasSubNav?: boolean;
}


const NavButton: FC<ButtonProps> = ({
    onClick,
    name,
    icon,
    isActive,
    hasSubNav,
} ) => (
    <button
        type="button"
        onClick={() => onClick(name)}
        className={isActive ? "active" : ""}
    >
        {icon && <Icon icon={icon} />}
        <span>{name}</span>
        {hasSubNav && <Icon icon="expand_more" />}
    </button>
)

// 型定義
type SubMenuProps = {
    item: Item,
    activeItem: string;
    handleClick: (arg0j: string) => void;
}

const SubMenu: FC<SubMenuProps> = ({
    item, activeItem, handleClick
}) => {
    const navRef = useRef<HTMLDivElement>(null);

    // itemsに設定されている値がactiveItemと同値、or itemがactiveItemと同値の場合,trueが返される
    const isSubNavOpen = (item: string, items: string[]) => items.some(
        i => i === activeItem) || item === activeItem;
    // const {name, items} = item;

    return (
        // isSubNavOpenがtrueの場合クラス名「sub-nav open」falseの場合「sub-nav」
        <div className={`sub-nav ${isSubNavOpen(item.name, item.items) ? "open" : ""}`}
            // 「?.」を使用するとnullやundefinedeのプロパティに対してもエラーが生じずundefinedが返される
            // isSubNavOpenがtrueの場合は0、falseの場合はCSS height + CSS padding - 水平スクロールバーの高さ
            style={{ height: !isSubNavOpen(item.name, item.items) ? 0 : navRef.current?.clientHeight }}
        >
            <div ref={navRef} className="sub-nav-inner">
                {item?.items.map((subItem) => (
                    <NavButton
                        onClick={handleClick}
                        name={subItem}
                        isActive={activeItem === subItem}
                    ></NavButton>
                ))}
            </div>

        </div>

    )
}

export const Sidebar = () => {
    const [activeItem, setActiveItem] = useState<string>("");

    const handleClick = (item: string) => {
        console.log("activeItem:", activeItem);
        console.log("item:", item);
        setActiveItem(item !== activeItem ? item : "");
    };

    console.log("現在の有効なitem:",activeItem);

    return (
        <aside className="sidebar">
            <NavHeader />
            {menuItems.map((item) => (
                <div>
                    {/* !item.itemsがfalseの場合にNavButtonが実行される*/}
                    {/* →item.itemsが設定されている*/}
                    {!item.items && (
                        <NavButton
                            onClick={handleClick}
                            name={item.name}
                            icon={item.icon}
                            isActive={activeItem === item.name}
                            // itemsが存在しない場合true
                            hasSubNav={!!item.items}
                        />
                    )}
                    {/* item.itemsがfalseの場合にNavButtonが実行される*/}
                    {/* →item.itemsが設定されていない*/}
                    {item.items && (
                        <>
                            <NavButton
                                onClick={handleClick}
                                name={item.name}
                                icon={item.icon}
                                isActive={activeItem === item.name}
                                hasSubNav={!!item.items}
                            />
                            <SubMenu
                                activeItem={activeItem}
                                handleClick={handleClick}
                                item={item}
                            />
                        </>
                    )}
                </div>
            ))}
        </aside>
    );
};
