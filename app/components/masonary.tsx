interface Item {
    height: number;
    content: string;
}

interface MasonaryProps {
    items: Item[];
}

export default function Masonary({ items }: MasonaryProps) {
    return (
        <div className="masonary-layout">
            {items.map((item, index) => (
                <div key={index} className="masonary-item" style={{ height: `${item.height}px` }}>
                    {item.content}
                </div>
            ))}
        </div>
    );
}
