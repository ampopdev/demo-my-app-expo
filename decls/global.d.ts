// NOTE: Use this file for declarations which serve as global aliases/types

/** Convenience around a void function, much like typed languages */
declare type Void = () => void;

declare module '*.svg' {
  import type { SvgProps } from 'react-native-svg';
  const content: React.StatelessComponent<SvgProps>;
  export default content;
}

/** Returns the values from an object as a union */
declare type ObjectValues<O> = O[keyof O];
