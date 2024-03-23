interface Image {
    url: string
}


export interface User {
    email: string
    display_name: string
    type: string
    images: Image[]
    id: string
    access: string
}

export interface SidebarLinks {
    name: string
    href: string
    icon: any
}

export interface CardProps {
    name: string;
    singer: string;
    image: string;
}


export interface SidebarMusicProps {
    id: string;
    image: string;
    name: string;
    artist: string;
    url: string;
}