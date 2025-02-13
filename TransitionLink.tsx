import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";

type TransitionLinkProps = {
  href: string;
  children: React.ReactNode;
  [key: string]: any;
};

const TransitionLink = ({ href, children, ...props }: TransitionLinkProps) => {
  const router = useRouter();
  const path = usePathname()
  
  const handleTransition = async (e: React.MouseEvent) => {
    if(path === href) return;
    e.preventDefault();
    document.querySelector(".page-transition")?.classList.add("bye");
    router.push(href);
  };

  return (
    <Link prefetch={false} onClick={handleTransition} href={href} {...props}>
      {children}
    </Link>
  );
};

export default TransitionLink;
