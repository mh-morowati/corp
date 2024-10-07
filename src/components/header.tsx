import Link from "next/link";

function Header() {
    return ( <div>
        <div>
          <Link href={'/'}>home</Link>
          <Link href={'/performance'}>performance</Link>
          <Link href={'/reliability'}>reliability</Link>
          <Link href={'/scale'}>scale</Link>
        </div>
    </div> );
}

export default Header;
