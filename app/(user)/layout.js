// app/products(catalogs)/layout.js

import UserNav from "@/components/UserNav";


export const metadata = {
    title: "IMH Education Centre | Bareilly",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <>
            <div className="bg-neutral-100">
                <UserNav />
                {children}
            </div>
        </>
    );
}
