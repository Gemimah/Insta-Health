declare module './assets/Constant/constants.js' {
  interface Feature {
    imgSrc: string;
    title: string;
    description: string;
  }

  interface Route {
    path: string;
    element: React.ReactNode;
  }

  export const features: Feature[];
  export const routers: Route[];
}
