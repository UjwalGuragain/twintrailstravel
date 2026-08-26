import { Link } from 'react-router-dom';

export default function ButtonLink({ to, href, children, variant = 'primary', className = '', external = false }) {
  const base = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200';
  const styles = {
    primary: 'bg-brand-orange text-white shadow-lg shadow-orange-200 hover:bg-orange-500',
    secondary: 'border border-slate-200 bg-white text-brand-dark hover:border-brand-blue hover:text-brand-blue',
    dark: 'bg-brand-deep text-white hover:bg-brand-blue',
  };

  const sharedClass = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className={sharedClass}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={sharedClass}>
      {children}
    </Link>
  );
}
