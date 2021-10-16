import { createGlobalStyle } from 'styled-components';

const Colors = createGlobalStyle`
  :root {
    
    --c-coal-1: #EFEFEF;
    --c-coal-2: #CFCFCF;
    --c-coal-3: #8F908F;
    --c-coal-4: rgba(80, 81, 79);
    --c-coal-4o8: rgba(80, 81, 79, 0.8);
    --c-coal-4o6: rgba(80, 81, 79, 0.6);
    --c-coal-4o2: rgba(80, 81, 79, 0.2);
    --c-coal-5: #333433;
    --c-coal-6: #161716;
    
    --c-berry-1: #FDF0F0;
    --c-berry-2: #FBD3D2;
    --c-berry-3: #F69997;
    --c-berry-4: #F25F5C;
    --c-berry-5: #B14643;
    --c-berry-6: #582322;
    
    --c-weed-1: #E5FFEB;
    --c-weed-2: #C0FFCD;
    --c-weed-3: #A7FFB9;
    --c-weed-4: #75FF91;
    --c-weed-5: #4BA35D;
    --c-weed-6: #204628;
    
    --c-river-1: #D2FAF9;
    --c-river-2: #A5F6F3;
    --c-river-3: #61F0EA;
    --c-river-4: rgba(8, 232, 222);
    --c-river-4o8: rgba(8, 232, 222, 0.8);
    --c-river-4o6: rgba(8, 232, 222, 0.6);
    --c-river-4o2: rgba(8, 232, 222, 0.2);
    --c-river-5: #06948E;
    --c-river-6: #03403D;
    
    --c-ocean-1: #D5E9F5;
    --c-ocean-2: #ACD4EC;
    --c-ocean-3: #6FB4DD;
    --c-ocean-4: #1D8ACB;
    --c-ocean-5: #166594;
    --c-ocean-6: #0E3F5D;
    
    --c-amber-1: #FEFAE9;
    --c-amber-2: #FEF2BF;
    --c-amber-3: #FDEA95;
    --c-amber-4: #FCD116;
    --c-amber-5: #B89911;
    --c-amber-6: #5C4C08;
    
    --c-deep-1: #578DFF;
    --c-deep-2: #315FC1;
    --c-deep-3: #35559A;
    --c-deep-4: #364462;
    --c-deep-5: #39404F;
    --c-deep-6: #282C34;

    --c-gradient-1: linear-gradient(to right,#08E8DE,#1D8ACB);
    --c-gradient-2: linear-gradient(to right,#75FF91,#08E8DE);
    --c-gradient-3: linear-gradient(to right,#F25F5C,#FCD116);
  }
`;

export default Colors;