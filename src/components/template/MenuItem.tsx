import Link from "next/link";

interface MenuItemProps {
    icone?: any;
    text: string;
    href: string;
}

export default function Menu(props: MenuItemProps){
    return ( 
        <div className="flex gap-3">
            {props.icone}
            <Link href={props.href}>{props.text}</Link>            
        </div>
    )
}