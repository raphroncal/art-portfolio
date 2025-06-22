import Link from "next/link";
import { TSocial } from "../panels/Profile";

export type SocialIconProps = {
  color?: string;
};

type SocialLinkProps = {
  social: TSocial;
};

export const SocialLink: React.FC<SocialLinkProps> = ({ social }) => {
  const { link, Icon } = social;
  return (
    <Link href={link} rel="noopener noreferrer" target="_blank">
      <Icon />
    </Link>
  );
};
