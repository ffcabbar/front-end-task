import { useLottie } from 'lottie-react';
import loaderLottie from './loader.json';

const style = {
  height: 300
};

export const Loader = () => {
  const options = {
    animationData: loaderLottie,
    loop: true,
    autoplay: true
  };

  const { View } = useLottie(options, style);

  return View;
};
