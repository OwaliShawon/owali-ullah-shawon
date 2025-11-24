import React from 'react';
import { Link } from 'react-router-dom';

const variantClassMap = {
  accent: 'btn-accent',
  accentOutline: 'btn-accent-outline',
};

const sizeClassMap = {
  sm: 'btn-sm',
  lg: 'btn-lg',
};

const Button = ({
  children,
  variant = 'accentOutline',
  size,
  to,
  href,
  newTab = false,
  type = 'button',
  disabled = false,
  loading = false,
  className = '',
  onClick,
  ...rest
}) => {
  const variantClass = variantClassMap[variant] || variantClassMap.accentOutline;
  const sizeClass = size ? sizeClassMap[size] : '';
  const classes = ['btn', variantClass, sizeClass, className].filter(Boolean).join(' ');

  if (to) {
    return (
      <Link
        className={classes}
        to={to}
        aria-disabled={disabled || loading}
        onClick={onClick}
        {...rest}
      >
        {loading ? '...' : children}
      </Link>
    );
  }

  if (href) {
    return (
      // eslint-disable-next-line react/jsx-no-target-blank
      <a
        className={classes}
        href={href}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noreferrer' : undefined}
        aria-disabled={disabled || loading}
        onClick={onClick}
        {...rest}
      >
        {loading ? '...' : children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      onClick={onClick}
      {...rest}
    >
      {loading ? '...' : children}
    </button>
  );
};

export default Button;
