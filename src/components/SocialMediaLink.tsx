import ArrowUpRightIcon from '../icons/ArrowUpRightIcon';

interface SocialMediaLinkProps {
  label: string;
  href: string;
  className?: string;
}

function SocialMediaLink({
  label,
  href,
  className = '',
}: SocialMediaLinkProps) {
  return (
    <a className={'flex mb-2 '.concat(className)} href={href}>
      <span className="mr-2">{label}</span>
      <ArrowUpRightIcon className="font-bold" />
    </a>
  );
}

export default SocialMediaLink;
