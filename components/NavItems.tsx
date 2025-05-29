"use client";
import { navItems } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
	const pathname = usePathname();

	return (
		<nav className="flex items-center gap-4">
			{navItems.map(({ label, path }) => (
				<Link
					href={path}
					key={label}
					className={cn(
						pathname === path &&
							"text-primary font-semibold border-b-2 border-primary "
					)}
				>
					{label}
				</Link>
			))}
		</nav>
	);
};
export default NavItems;
