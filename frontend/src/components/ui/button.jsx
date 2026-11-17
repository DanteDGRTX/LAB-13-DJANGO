import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonStyles = cva('inline-flex items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50', {
  variants: {
    variant: {
      default: 'bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:outline-indigo-600',
      outline: 'border border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-indigo-50 focus-visible:outline-indigo-600',
    },
    size: { default: 'px-5 py-2 text-sm', sm: 'px-4 py-2 text-sm' },
  },
  defaultVariants: { variant: 'default', size: 'default' },
});

export function Button({ className, variant, size, ...props }) {
  return <button className={cn(buttonStyles({ variant, size }), className)} {...props} />;
}
