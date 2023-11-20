
import Container from "../Container";

import Search from "./Search";

import Logo from "./Logo";
import UserMenu from "./UserMenu";
import Categories from "@/src/app/components/navbar/Categories";
import { SafeUser } from "@/src/app/types";

interface NavbarProps {
    currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({
    currentUser,
}) => {
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div
                className="
                        py-4 
                        border-b-[1px]
                    "
            >
                <Container>
                    <div
                        className="
                            flex 
                            flex-row 
                            items-center 
                            justify-between
                            gap-3
                            md:gap-0
                        "
                    >
                        <Logo />
                        <Search />
                        <UserMenu currentUser={currentUser} />
                    </div>
                </Container>
                <Categories />
            </div>
        </div>
    );
}


export default Navbar;