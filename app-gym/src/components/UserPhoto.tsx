import { Image, IImageProps } from "native-base";

type Props = IImageProps & {
  size: number;
}

export function UserPhoto({ size, ...rest }: Props) {
  return (
    <Image
      w={size}
      h={size}
      borderWidth={2}
      borderColor='gray.400'
      rounded='full'
      {...rest}
    />
  );
}