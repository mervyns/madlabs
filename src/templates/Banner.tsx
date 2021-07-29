import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Watch this space."
      subtitle="We're coming for you"
      button={
        <Link href="https://twitter.com/cedssim">
          <a>
            <Button>Upcoming Stealth Project</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
