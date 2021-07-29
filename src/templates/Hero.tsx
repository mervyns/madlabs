import Link from 'next/link';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns>
        <li>
          <Link href="/about">
            <a>About us</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Contact us</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <span>We are </span>
            <span className="text-primary-500">MADlabs.io</span>
          </>
        }
        description="A MAD team creating unique MAD-taverse Experiences"
      />
    </Section>
  </Background>
);

export { Hero };
