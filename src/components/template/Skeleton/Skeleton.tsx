import { Skeleton as NxUiSkeleton, SkeletonProps } from '@nextui-org/react';
import clsx from 'clsx';
import { FC } from 'react';

interface I_Props extends SkeletonProps {}

export const Skeleton: FC<I_Props> = ({ ...rest }) => {
  return <NxUiSkeleton className={clsx(rest.className)} {...rest} />;
};
