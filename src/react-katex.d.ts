declare module 'react-katex' {
  import { FC } from 'react';

  interface InlineMathProps {
    math: string;
  }

  export const InlineMath: FC<InlineMathProps>;
}
