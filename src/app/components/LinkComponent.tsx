import Link from "next/link";
import { TSocial } from "../panels/Profile";

export type SocialIconProps = {
  color?: string;
};

type LinkComponentProps = {
  social: TSocial;
};

export const LinkComponent: React.FC<LinkComponentProps> = ({ social }) => {
  const { link, Icon } = social;
  return (
    <Link href={link} rel="noopener noreferrer" target="_blank">
      <Icon />
    </Link>
  );
};
