import { css } from 'styled-components';
import { mobile } from '../../generic/settings/Breakpoints';

const time = {
    fast: '0.5s',
    normal: '1s',
    slow: '3s'
}

export const _anibasic = css`
    transition:${time.normal};
    @media ${mobile.small}{
        transition:${time.normal};
    }
    @media ${mobile.mobile}{
        transition:${time.normal};
    }
    @media ${mobile.tablet}{
        transition:${time.normal};
    }
    @media ${mobile.desktop}{
        transition:${time.normal};
    }
    @media ${mobile.large}{
        transition:${time.normal};
    }
`
export const _blurbasic = css`
    backdrop-filter: blur(5px);
`


