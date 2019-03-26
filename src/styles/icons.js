import React from 'react';
import { Svg } from 'expo';

const {
  Rect, Path, Defs, ClipPath, G,
} = Svg;

const Logo = () => (
  <Svg height="56%" width="20%" viewBox="0 0 56 21">
    <G ClipPath="url(#clip0)">
      <Path d="M8.0392 6.25049H0.730744C0.327165 6.25049 0 6.57649 0 6.97864C0 7.38079 0.327165 7.7068 0.730744 7.7068H8.0392C8.44278 7.7068 8.76995 7.38079 8.76995 6.97864C8.76995 6.57649 8.44278 6.25049 8.0392 6.25049Z" fill="#E07926" />
      <Path d="M8.76988 9.89233C8.77015 9.69884 8.69335 9.51317 8.55634 9.37607C8.41932 9.23897 8.23331 9.16167 8.03914 9.16113H2.19217C1.99836 9.16113 1.8125 9.23785 1.67546 9.3744C1.53841 9.51096 1.46143 9.69617 1.46143 9.88929C1.46143 10.0824 1.53841 10.2676 1.67546 10.4042C1.8125 10.5407 1.99836 10.6174 2.19217 10.6174H8.03914C8.23234 10.6172 8.41759 10.5408 8.55448 10.4049C8.69138 10.2691 8.76881 10.0848 8.76988 9.89233Z" fill="#E07926" />
      <Path d="M8.03912 12.0781H3.65872C3.56276 12.0781 3.46774 12.097 3.37908 12.1336C3.29042 12.1701 3.20987 12.2238 3.14201 12.2914C3.07415 12.359 3.02033 12.4393 2.9836 12.5276C2.94688 12.616 2.92798 12.7107 2.92798 12.8063C2.92798 12.9019 2.94688 12.9966 2.9836 13.0849C3.02033 13.1733 3.07415 13.2535 3.14201 13.3212C3.20987 13.3888 3.29042 13.4424 3.37908 13.479C3.46774 13.5156 3.56276 13.5344 3.65872 13.5344H8.03912C8.23293 13.5344 8.4188 13.4577 8.55584 13.3212C8.69288 13.1846 8.76987 12.9994 8.76987 12.8063C8.76987 12.6132 8.69288 12.428 8.55584 12.2914C8.4188 12.1548 8.23293 12.0781 8.03912 12.0781Z" fill="#E07926" />
      <Path d="M28.5865 6.32526C27.7727 4.45272 26.4291 2.857 24.7198 1.73317C23.0106 0.609335 21.0097 0.00608739 18.9619 -0.00282939C16.9141 -0.0117462 14.9081 0.574054 13.189 1.68296C11.4699 2.79186 10.1124 4.37582 9.28222 6.2412H10.4236C10.6174 6.2412 10.8032 6.31792 10.9403 6.45448C11.0773 6.59103 11.1543 6.77624 11.1543 6.96936C11.1543 7.16248 11.0773 7.34769 10.9403 7.48424C10.8032 7.6208 10.6174 7.69751 10.4236 7.69751H8.75881C8.6261 8.17773 8.52795 8.66677 8.46509 9.16091H12.1778C12.3716 9.16091 12.5574 9.23763 12.6945 9.37418C12.8315 9.51074 12.9085 9.69595 12.9085 9.88906C12.9085 10.0822 12.8315 10.2674 12.6945 10.4039C12.5574 10.5405 12.3716 10.6172 12.1778 10.6172H8.37769C8.38368 11.1051 8.42341 11.5921 8.4966 12.0745H10.4276C10.6214 12.0748 10.8071 12.1516 10.944 12.2881C11.081 12.4246 11.1581 12.6097 11.1584 12.8027C11.1578 12.9956 11.0807 13.1805 10.9438 13.317C10.8068 13.4534 10.6213 13.5303 10.4276 13.5308H8.82487C9.44226 15.577 10.6715 17.3868 12.3484 18.7184C14.0252 20.0501 16.0699 20.8402 18.2094 20.9833C20.3488 21.1264 22.4812 20.6156 24.3216 19.5192C26.162 18.4228 27.623 16.793 28.5092 14.8474H51.2548V11.7768C51.2547 11.6824 51.2732 11.5889 51.3093 11.5017C51.3455 11.4145 51.3986 11.3352 51.4655 11.2684C51.5324 11.2016 51.6119 11.1487 51.6994 11.1125C51.7869 11.0764 51.8807 11.0578 51.9754 11.0578H52.4307C52.5254 11.0578 52.6193 11.0764 52.7068 11.1125C52.7944 11.1486 52.8739 11.2016 52.9409 11.2684C53.0079 11.3351 53.0611 11.4144 53.0974 11.5016C53.1336 11.5889 53.1523 11.6824 53.1523 11.7768V14.8403H55.998V6.32526H28.5865ZM18.914 15.2292C17.9753 15.2292 17.0577 14.9518 16.2771 14.4321C15.4966 13.9125 14.8883 13.1738 14.529 12.3096C14.1698 11.4454 14.0758 10.4945 14.2589 9.57707C14.4421 8.65965 14.8941 7.81694 15.5579 7.15551C16.2217 6.49408 17.0674 6.04365 17.9881 5.86116C18.9088 5.67867 19.8631 5.77233 20.7303 6.13029C21.5976 6.48826 22.3389 7.09444 22.8604 7.8722C23.3819 8.64995 23.6603 9.56434 23.6603 10.4997C23.6604 11.1209 23.5378 11.7359 23.2993 12.3098C23.0608 12.8836 22.7112 13.4051 22.2704 13.8443C21.8297 14.2835 21.3064 14.6318 20.7305 14.8695C20.1546 15.1071 19.5373 15.2293 18.914 15.2292Z" fill="#E07926" />
    </G>
    <Defs>
      <ClipPath id="clip0">
        <Rect width="56" height="21" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

const CompletedCheckmark = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
    <Path fill="none" d="M0 0h24v24H0V0z" />
    <Path opacity="1" fill="white" d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm-2 13l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
    <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
  </Svg>
);

export default Logo;
export { CompletedCheckmark };
